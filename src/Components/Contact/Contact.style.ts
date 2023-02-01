import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../../Theme/cvTheme";

export const ContactContainer = styled(Box)({
    boxShadow: "5px 5px 15px 3px rgba(0,0,0,0.58)",
    display: "flex",
})

export const InfoContainer = styled(Box)({
    backgroundColor: theme.palette.primary.main,
    width: "30%",
    padding: "22px"
})

export const FormContainer = styled(Box)({
    width: "100%",
    padding: "52px 52px 0px 52px"
})