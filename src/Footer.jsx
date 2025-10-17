import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      textAlign: "center",
      padding: "15px",
      backgroundColor: "#f5f5f5",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      fontSize: "14px",
      color: "#555",
      borderTop: "1px solid #ddd"
    }}>
      © {currentYear} Weather App by Dushyant. All rights reserved.
    </footer>
  );
}
