import React from "react";
import Button from "@mui/material/Button";
import { HiOutlineMailOpen } from "react-icons/hi";


import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        baqN: {
            main: "#FFB200",
            contrastText: "#fff",
        },
        white: {
            main: "#EEEEEE",
            contrastText: "#CF0A0A",
        },
        baqG: {
            main: "#94c11f",
            contrastText: "#CF0A0A",
        },
    },
});

export const BotonsMas = (props) => {
    const { TextoBtn, ColorBoton,icono } = props; 
    let cono = <HiOutlineMailOpen/>

    return (
        <div className="btns_mas">
            <ThemeProvider theme={theme}>
                <Button
                    sx={{m:1, width: 250 }}                    
                    color= {ColorBoton}
                    variant="outlined"
                    size="large"
                    // onClick={mostrarAlerta}
                    endIcon={
                        // <IconButton
                        //     size="small"
                        //     aria-label="fingerprint"
                        //     color="inherit"
                        // >
                        icono
                    }
                >
                    {TextoBtn}
                </Button>
            </ThemeProvider>
        </div>
    );
};