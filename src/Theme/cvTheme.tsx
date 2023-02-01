import { createTheme, PaletteMode, Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

import { MuiDarkButton, MuiLightButton } from "./buttons";
import { MuiTextField } from "./inputs";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
        typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
        typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
    }

    // interface TypographyOptions {
    //   typography: any;
    // }
}

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                    main: "#199430", //Main Color
                    dark: "#2D593E", //Hover
                    light: "#83C59E", //Light Color
                },
                secondary: {
                    main: "#7179B8", //Secondary Color
                    dark: "#555B8A", //Hover
                    light: "#959BCA", //Light Color
                },
                success: {
                    main: "#039855", //Main success color
                    dark: "#05603A", //Dark success color
                },
                warning: {
                    main: "#DC6803",
                    dark: "#93370D",
                },
                error: {
                    main: "#D92D20",
                    dark: "#912018",
                },
                background: {
                    default: "#F9F9F9",
                    paper: "#fff",
                },
                text: {
                    primary: "rgba(0, 0, 0, 0.87)",
                    secondary: "rgba(0, 0, 0, 0.6)",
                    disabled: "rgba(0, 0, 0, 0.38)",
                    contrastText: "#fff",
                },
                divider: "rgba(0, 0, 0, 0.1)",
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#199430", //Main Color
                    dark: "#2D593E", //Hover
                    light: "#83C59E", //Light Color
                },
                secondary: {
                    main: "#7179B8", //Secondary Color
                    dark: "#555B8A", //Hover
                    light: "#959BCA", //Light Color
                },
                success: {
                    main: "#039855", //Main success color
                    dark: "#05603A", //Dark success color
                },
                warning: {
                    main: "#DC6803",
                    dark: "#93370D",
                },
                error: {
                    main: "#D92D20",
                    dark: "#912018",
                },
                background: {
                    default: "#1C1C1E",
                    paper: "#2C2C30",
                },
                text: {
                    primary: "#fff",
                    secondary: "rgba(255, 255, 255, 0.7)",
                    disabled: "rgba(255, 255, 255, 0.5)",
                    contrastText: "#000",
                },
                divider: "#616161",
            }),
    },
    spacing: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64],
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiButton: mode === "light" ? MuiLightButton : MuiDarkButton,
        MuiTextField,
        MuiAvatar: {
            styleOverrides: {
                root: {
                    border: "0 !important",
                    backgroundColor: "#5AB27D",
                    fontSize: "16px",
                    // color: mode === "light" ? "red" : "blue",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                    },
                    "& .css-567v6j-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused": {
                        border: 0,
                    },
                    color: "#949494",
                },
            },
        }
    },
    typography: {
        fontFamily: ["Urbanist", "sans-serif"].join(","),
        // button: {
        //   textTransform: "none",
        // },
    },
});

const theme = createTheme({
    palette: {
        primary: {
            main: "#199430", //Main Color
            dark: "#2D593E", //Hover
            light: "#83C59E", //Light Color
        },
        secondary: {
            main: "#7179B8", //Secondary Color
            dark: "#555B8A", //Hover
            light: "#959BCA", //Light Color
        },
        success: {
            main: "#039855", //Main success color
            dark: "#05603A", //Dark success color
        },
        warning: {
            main: "#DC6803",
            dark: "#93370D",
        },
        error: {
            main: "#D92D20",
            dark: "#912018",
        },
    },
    spacing: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64],
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiButton: MuiLightButton,
        MuiTextField,
        MuiAvatar: {
            styleOverrides: {
                root: {
                    border: "0 !important",
                    backgroundColor: "#5AB27D",
                    fontSize: "16px",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                    },
                    "& .css-567v6j-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused": {
                        border: 0,
                    },
                    color: "#949494",
                },
            },
        },
    },
    typography: {
        fontFamily: ["Urbanist", "sans-serif"].join(","),
        button: {
            textTransform: "none",
        },
    },
});

export default theme;
