import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import compression from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      include: /\.(js|css|html|svg)$/, // 압축할 파일 확장자 지정
      threshold: 1400, // 1.4kb 이상 파일만 압축
    }),
    imagetools({
      exclude: "**/*.webp",
      defaultDirectives: () =>
        new URLSearchParams({
          format: "webp",
          quality: "80", // 품질을 80%로 설정하여 손실 압축 적용
          removeMetadata: "",
          h: "1080",
        }),
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          //71 -> 47
          if (id.includes("node_modules")) {
            const module: string = id.split("node_modules/").pop()!.split("/")[0];
            if (module.includes("react")) {
              return "react-vendor";
            } else if (module.includes("micromark")) {
              return "micromark-vendor";
            } else if (module.includes("unist")) {
              return "unist-vendor";
            } else if (module.includes("remark")) {
              return "remark-vendor";
            } else if (module.includes("mdast")) {
              return "mdast-vendor";
            }
            // if (module.includes("poo")) {
            //   return "poo-vendor";
            // }
            return `vendor-${module}`;
          }
        },
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
