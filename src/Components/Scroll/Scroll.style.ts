import styled from "@emotion/styled";
import { Box } from "@mui/material"
import theme from "../../Theme/cvTheme";

export const HomeContainer = styled(Box)({
    padding: "200px 72px"
})

export const MediumText = styled(Box)({
    fontSize: "60px"
})

export const TitleText = styled(Box)({
    fontSize: "70px",
})

export const NameTitle = styled(Box)({
    display: "inline",
    color: theme.palette.primary.main
})

export const Description = styled(Box)({
    fontSize: "18px",
    width: "40%"
})
