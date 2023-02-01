import React from "react";
//Styled Components
import {
    NavigationContainer,
    LogoContainer,
    NavigationButtonsContainer,
    Logo,
    DownloadCV
} from "./Navigation.style";

// Icons
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const Navigation = () => {
    return (
        <NavigationContainer>
            <LogoContainer>
                <Logo>
                    V
                </Logo>
                Vlad Vasian
            </LogoContainer>
            <NavigationButtonsContainer>
                <DownloadCV
                    download
                    href="Vlad-Vasian-cv.pdf"
                >
                    Download Resume
                    <FileDownloadIcon
                        fontSize="small"
                    />
                </DownloadCV>
            </NavigationButtonsContainer>
        </NavigationContainer>
    )
}

export default Navigation;