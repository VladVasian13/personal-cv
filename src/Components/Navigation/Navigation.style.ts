import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";
import theme from "../../Theme/cvTheme";

export const NavigationContainer = styled(Box)({
    position: "fixed",
    top: 0,
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 50px",
    fontSize: "26px",
    width: "100%"
})

export const LogoContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    height: "100%",
    padding: "22px",
    fontWeight: "500"
})

export const Logo = styled(Box)({
    fontFamily: "Parisienne, cursive",
    background: theme.palette.primary.main,
    width: "26px",
    height: "26px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontSize: "12px",
    fontWeight: "600",
    color: "#FFFF"
})

export const NavigationButtonsContainer = styled(Box)({
    display: "flex"
})

export const BurgerButton = styled(IconButton)({
    margin: "22px",
    "&:hover": {
        background: "#2E302E"
    },
    background: "#000000",
    color: "#FFFF",
    borderRadius: "50%",

})

export const DownloadCV = styled("a")({
    padding: "22px",
    fontSize: "18px",
    textDecoration: "none",
    color: "#000000",
    "&:hover": {
        background: "none"
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})