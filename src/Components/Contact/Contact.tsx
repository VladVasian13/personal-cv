import React from "react"
import { ContactContainer, FormContainer, InfoContainer } from "./Contact.style";
import { Box, Button, TextField } from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import theme from "../../Theme/cvTheme";

const Contact = () => {
    return (
        <ContactContainer>
            <InfoContainer>
                <Box
                    sx={{
                        width: "100%",
                        fontSize: "22px",
                        color: "#FFFF",
                        padding: "32px 32px 10px 32px"
                    }}
                >
                    Let's get in touch
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        fontSize: "16px",
                        color: "#FFFF",
                        padding: "10px 32px"
                    }}
                >
                    I'm open for a job or any other projects.
                </Box>
                <Box
                    sx={{
                        padding: "10px 32px",
                        display: "flex",
                        alignItems: "center",
                        color: "#FFFF",
                        gap: "10px",
                    }}
                >
                    <Box
                        sx={{
                            color: "#FFFF",
                            border: "1px solid #FFFF",
                            borderRadius: "50%",
                            width: "35px",
                            height: "35px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <HomeIcon />
                    </Box>
                    Adress: Sfantul Nicolae, Nr. 28, Sanpetru, Brasov, Romania
                </Box>
                <Box
                    sx={{
                        padding: "10px 32px",
                        display: "flex",
                        alignItems: "center",
                        color: "#FFFF",
                        gap: "10px",
                    }}
                >
                    <Box
                        sx={{
                            color: "#FFFF",
                            border: "1px solid #FFFF",
                            borderRadius: "50%",
                            width: "35px",
                            height: "35px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <LocalPhoneIcon />
                    </Box>
                    Phone: +40771342891
                </Box>
                <Box
                    sx={{
                        padding: "10px 32px",
                        display: "flex",
                        alignItems: "center",
                        color: "#FFFF",
                        gap: "10px",
                    }}
                >
                    <Box
                        sx={{
                            color: "#FFFF",
                            border: "1px solid #FFFF",
                            borderRadius: "50%",
                            width: "35px",
                            height: "35px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <AlternateEmailIcon />
                    </Box>
                    Email: vlad.vasian96@gmail.com
                </Box>
                <Box
                    sx={{
                        padding: "10px 32px",
                        display: "flex",
                        alignItems: "center",
                        color: "#FFFF",
                        gap: "10px",
                    }}
                >
                    <Box
                        sx={{
                            color: "#FFFF",
                            border: "1px solid #FFFF",
                            borderRadius: "50%",
                            width: "35px",
                            height: "35px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <GitHubIcon />
                    </Box>
                    Github: https://github.com/VladVasian13
                </Box>
            </InfoContainer>
            <FormContainer>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        gap: "50px"
                    }}
                >
                    <Box
                        sx={{
                            width: "100%"
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Full Name"
                            variant="outlined"
                            sx={{ width: "100%" }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "100%"
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            variant="outlined"
                            sx={{ width: "100%" }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        margin: "30px 0px"
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Subject"
                        variant="outlined"
                        sx={{ width: "100%" }}
                    />
                </Box>
                <Box>
                    <TextField
                        id="outlined-basic"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={3}
                        sx={{ width: "100%" }}
                    />
                </Box>
                <Button
                    variant="primary"
                    sx={{
                        margin: "20px 0px",
                        backgroundColor: theme.palette.primary.main,
                        color: "#FFFF"
                    }}
                >
                    Send Message
                </Button>
            </FormContainer>
        </ContactContainer>
    )
}

export default Contact;