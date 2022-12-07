import React from "react";
import Button from "@mui/material/Button";
// import { HiOutlineMailOpen } from "react-icons/hi";


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
    const { TextoBtn, ColorBoton,icono,Click,xsPW } = props;    

    return (
        <div className="btns_mas">
            {console.log(xsPW)}            
            <ThemeProvider theme={theme}>
                <Button
                    sx={{mr:1.5, width: xsPW===undefined || xsPW===''? 270: xsPW }}                    
                    color= {ColorBoton}
                    variant="outlined"
                    size="small"
                    onClick={Click}
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