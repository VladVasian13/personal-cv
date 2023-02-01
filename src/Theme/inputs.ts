import { Components } from "@mui/material";

// INPUT STYLES
export const MuiTextField: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      "&.admin-input": {
        padding: "16px",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "600",
        backgroundColor: "#EDEFF1",
        border: "2px solid #EDEFF1",
        borderRadius: "28px",
        transition: "all 0.3s ease",
        "&:has(input:not(:placeholder-shown))": {
          backgroundColor: "white",
          border: "2px solid #EDEFF1",
        },
        "& input": {
          fontFamily: ["Urbanist", "sans-serif"].join(","),
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "20px",
          height: "20px",
          color: "#1A1C20",
          padding: 0,
          "&:placeholder": {
            color: "#75808A",
            fontWeight: "500",
          },
        },
        "& fieldset": {
          border: 0,
        },
        "&:hover": {
          backgroundColor: "white",
          border: "2px solid #EDEFF1",
        },
        "&:disabled": {
          border: "2px solid hsla(216, 16%, 94%, 1)",
          "& input": {
            color: "hsla(216, 16%, 84%, 1)",
          },
        },
        "&:focus-within": {
          backgroundColor: "white",
          border: "2px solid #EDEFF1",
          outline: "none",
        },
        "& .MuiInputBase-adornedStart": {
          padding: 0,
        },
      },
    },
  },
};
