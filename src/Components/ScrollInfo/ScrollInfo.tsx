import { Box } from "@mui/material";
import React from "react";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const ScrollInfo = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                bottom: "20px",
                left: "10px",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            You need to scroll for full experience
            <UnfoldMoreIcon
                sx={{
                    color: "#423F40"
                }}
            />
        </Box>
    )
}

export default ScrollInfo