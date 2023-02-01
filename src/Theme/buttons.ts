import { Components } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    cancel: true;
    alert: true;
  }
}

// MODAL BUTTONS STYLES
export const MuiLightButton: Components["MuiButton"] = {
  variants: [
    {
      props: { variant: "primary" },
      style: {
        color: "white",
        backgroundColor: "#5AB27D",
        padding: "16px",
        flex: 0.7,
        "&:hover": {
          backgroundColor: "#2D593E", // primary.dark from theme
        },
        "&.Mui-disabled": {
          backgroundColor: "#EBF6EF",
          color: "rgba(90, 178, 125, 0.5)",
          border: "1px solid #EBF6EF",
        },
      },
    },
    {
      props: { variant: "cancel" },
      style: {
        color: "white",
        backgroundColor: "#1A1C20",
        padding: "16px",
        flex: 0.3,
        ":hover": {
          background: "#343434",
        },
      },
    },
    {
      props: { variant: "alert" },
      style: {
        color: "white",
        backgroundColor: "#EF535A",
        border: "1px solid #EF535A",
        padding: "16px",
        "&:hover": {
          backgroundColor: "#e43825",
        },
      },
    },
  ],
  styleOverrides: {
    root: {
      fontFamily: ["Urbanist", "sans-serif"].join(","),
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
      borderRadius: "58px",
      boxShadow: "none",
      textTransform: "none",
      "&:hover": {
        boxShadow: "none",
      },
    },
  },
};

// MODAL BUTTONS STYLES
export const MuiDarkButton: Components["MuiButton"] = {
  variants: [
    {
      props: { variant: "primary" },
      style: {
        color: "white",
        backgroundColor: "#5AB27D",
        padding: "16px",
        flex: 0.7,
        "&:hover": {
          backgroundColor: "#83C59E", // primary.light from theme
        },
        "&.Mui-disabled": {
          backgroundColor: "#EBF6EF",
          color: "rgba(90, 178, 125, 0.5)",
          border: "1px solid #EBF6EF",
        },
      },
    },
    {
      props: { variant: "cancel" },
      style: {
        color: "#1A1C20",
        backgroundColor: "#fff",
        padding: "16px",
        flex: 0.3,
        "&:hover": {
          backgroundColor: "#fff",
        },
      },
    },
    {
      props: { variant: "alert" },
      style: {
        color: "white",
        backgroundColor: "#EF535A",
        border: "1px solid #EF535A",
        padding: "16px",
        "&:hover": {
          backgroundColor: "#e43825",
        },
      },
    },
  ],
  styleOverrides: {
    root: {
      fontFamily: ["Urbanist", "sans-serif"].join(","),
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
      borderRadius: "58px",
      boxShadow: "none",
      textTransform: "none",
      "&:hover": {
        boxShadow: "none",
      },
    },
  },
};
