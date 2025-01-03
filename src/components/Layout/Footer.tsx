import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* 왼쪽 - 로고 및 연락처 정보 */}
        <div style={styles.leftSection}>
          {/* SVG 로고 사용 */}
          <svg
            width="100"
            height="74"
            viewBox="0 0 100 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={styles.logo}
          >
            <path
              d="M52.3001 62.0126C50.516 63.5316 48.7759 63.6099 45.3691 63.4327C42.124 62.1761 39.2389 61.0395 36.5478 59.9404C28.3343 56.586 21.9272 53.5817 12.6042 48.5868C11.8699 47.6071 11.7303 47.085 12.6042 46.2631C18.71 43.0191 22.1864 42.0553 28.4826 41.8739C29.1931 41.879 29.8623 41.8914 30.4989 41.9171M52.3001 62.0126L41.8405 46.2631M52.3001 62.0126C52.3001 62.0126 53.845 62.5364 54.5685 62.0126M41.8405 46.2631C37.7164 42.8968 34.8811 42.0935 30.4989 41.9171M41.8405 46.2631L28.8607 32.0627C28.8607 32.0627 27.359 30.6848 28.8607 30.7718C30.3623 30.8587 31.212 30.9094 32.8933 31.03C38.7929 32.3384 41.1316 35.0718 45.4951 39.5502M30.4989 41.9171C24.9612 34.084 22.2553 29.5772 18.5271 21.2188C18.2112 20.042 18.218 19.3959 18.5271 18.2496C20.8551 17.117 23.5679 17.9916 23.6939 17.9914C23.8199 17.9912 39.3413 23.1266 47.0073 29.0935M47.0073 29.0935L45.4951 39.5502M47.0073 29.0935C52.4484 16.2321 58.4246 10.7646 71.581 2.5L73.3453 2.69364M45.4951 39.5502C48.932 44.1146 51.544 52.2014 51.544 52.2014C51.544 52.2014 54.2786 50.5134 57.22 49.1634M54.5685 62.0126C55.293 61.4881 54.8247 60.5689 55.3246 59.818C56.355 58.2702 57.2149 59.818 59.6092 57.8815C60.426 57.221 61.5751 55.8903 62.5713 54.396M54.5685 62.0126L68.8086 59.818C68.8086 59.818 88.9716 63.4734 87.9634 60.5925C86.9553 57.7116 73.8493 54.0087 73.8493 54.0087C81.3457 46.9769 86.4239 32.7292 86.1992 30.6426C85.9744 28.5561 85.317 28.8353 84.1829 28.8353C83.0487 28.8353 78.0379 28.5746 74.3534 29.9971M74.3534 29.9971C77.2903 19.4666 77.0577 13.5223 75.1095 2.88728L73.3453 2.69364M74.3534 29.9971C72.5605 40.9147 69.7849 46.1594 62.5713 54.396M62.5713 54.396C64.4954 51.5099 65.8492 48.0132 63.137747.554C61.7675 47.3219 59.4351 48.1468 57.22 49.1634M73.3453 2.69364C63.4133 19.4671 59.276 29.4137 57.22 49.1634"
              stroke="var(--color-main)"
              strokeWidth="3"
            />
            <path
              d="M34.6006 59.5C34.159 60.8944 33.7031 62.7113 34.2513 64.065C34.9623 65.8208 38.0081 67.0241 38.0081 67.0241M38.0081 67.0241C38.0081 67.0241 45.4678 68.316 50.273 68.9589C57.1595 69.8804 66.411 65.1466 65.9633 64.065M38.0081 67.0241C38.0081 67.0241 39.0852 69.1996 40.1075 70.3247C42.3747 72.8198 49.0702 72.4824 50.273 72.4871C51.4759 72.4919 57.1139 71.5036 58.7811 70.8937C60.279 70.3458 62.2462 67.9374 62.3169 67.2517C64.2235 66.5485 64.8171 65.6211 65.9633 64.065M65.9633 64.065C65.9633 64.065 66.1737 60.8365 65.5872 59.5"
              stroke="#E6C06C"
              strokeWidth="3"
            />
          </svg>
          <p style={styles.p}>+82 1234-5678</p>
          <p style={styles.p}>banpotato@gmail.com</p>
        </div>

        {/* 가운데 - 개발자 정보 */}
        <div style={styles.centerSection}>
          <h4 style={styles.developerTitle}>developers</h4>
          <div style={styles.developers}>
            <div>
              <p style={styles.p}>조준환</p>
              <p style={styles.p}>정다연</p>
            </div>
            <div>
              <p style={styles.p}>박지희</p>
              <p style={styles.p}>이채연</p>
            </div>
            <div>
              <p style={styles.p}>오승환</p>
              <p style={styles.p}>최유성</p>
            </div>
          </div>
        </div>

        {/* 오른쪽 - 구독 정보 */}
        <div style={styles.rightSection}>
          <h4 style={styles.subscribeTitle}>Subscribe</h4>
          <div style={styles.subscribeContainer}>
            <input type="email" placeholder="Get product updates" style={styles.input} />
            <button style={styles.subscribeButton}>&#10132;</button> {/* 오른쪽 화살표 */}
          </div>
        </div>
      </div>
    </footer>
  );
};

// 스타일링 객체
const styles = {
  footer: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    textAlign: "center" as const,
    borderTop: "1px solid var(--color-gray2)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  leftSection: {
    textAlign: "left" as const,
    flex: 1,
  },
  centerSection: {
    textAlign: "left" as const,
    flex: 1.5,
  },
  developerTitle: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  developers: {
    display: "flex",
    justifyContent: "space-between",
    width: "250px",
    margin: "30px 0",
  },
  rightSection: {
    textAlign: "left" as const,
    flex: 1,
  },
  subscribeTitle: {
    fontWeight: "bold",
    margin: "0px 0px 30px 0px",
  },
  subscribeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px 0 0 4px",
    border: "1px solid #ccc",
  },
  subscribeButton: {
    padding: "8px",
    fontSize: "14px",
    backgroundColor: "var(--color-main)",
    color: "white",
    borderRadius: "0 4px 4px 0",
    border: "none",
    cursor: "pointer",
  },
  logo: {
    width: "50px",
    height: "auto",
  },
  p: {
    padding: "10px",
  },
};

export default Footer;
