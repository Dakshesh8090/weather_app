import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  const footerStyle = {
    textAlign: "center",
    padding: "12px",
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.background.paper,
    color: theme.palette.text.primary,
    position: "fixed",
    bottom: 0,
    width: "100%",
    borderTop: `1px solid ${theme.palette.divider}`,
    transition: "all 0.3s ease",
  };

  return (
    <footer style={footerStyle}>
      © 2025 Weather App by Dushyant. All rights reserved.
    </footer>
  );
}
