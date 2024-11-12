/**
 * 요소 간격(height) 조절 컴포넌트
 * @param size 간격
 * @returns
 */
export default function Spacing({ size }: { size: number }) {
  return <div style={{ height: size }} />;
}
