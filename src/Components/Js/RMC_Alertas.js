import React from "react";
import logoBAQ from "../Img/Logo_Color_PNG.png";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import { FaSlack } from "@react-icons/all-files/fa/FaSlack";
import IconButton from "@mui/material/IconButton";
import "../Css/SweedAlert2_User.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { type } from "@testing-library/user-event/dist/type";
const theme = createTheme({
    palette: {
        baq: {
            main: "#FFB200",
            contrastText: "#fff",
        },
        white: {
            main: "#EEEEEE",
            contrastText: "#CF0A0A",
        },
        green: {
            main: "#a5dc86",
            contrastText: "#CF0A0A",
        },
    },
});

export const AlertaMixin = (props) => {
    const { Texto, nombreIcono, colorIcono, colorFondo, colorLetra, colorBoton } =
        props;

    const mostrarAlerta = () => {
        Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: colorFondo,
            color: colorLetra,
            iconColor: colorIcono,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        }).fire({
            icon: nombreIcono,
            title: Texto,
        });
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button
                    sx={{ m: 1.8 }}
                    color={colorBoton}
                    variant="outlined"
                    onClick={mostrarAlerta}
                    endIcon={
                        // <IconButton
                        //     size="small"
                        //     aria-label="fingerprint"
                        //     color="inherit"
                        // >
                        <FaSlack />
                        // </IconButton>
                    }
                >
                    Mostrar Alerta 🤤
                </Button>
            </ThemeProvider>
        </div>
    );
};

export const AlertaNomr = (props) => {
    const { nameicono } = props;

    const mostrarAlerta = () => {
        Swal.fire({
            position: "bottom",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: "#000",
            color: "#fff",
            icon: nameicono,
            title: "Signed in successfully",
            allowOutsideClick: false,
            allowEscapeKey: false,
            backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,
        });
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button color="baq" variant="outlined" onClick={mostrarAlerta}>
                    Mostrar Alerta
                </Button>
            </ThemeProvider>
        </div>
    );
};




const esperar = () => {     

    return new Promise((resolve,reject)=>{
        (async ()=>{
            let nombre   
            const { value: text } = await Swal.fire({
                position: "center",
                showConfirmButton: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                title: "Hola! Bienbenido al BAQ",
                imageUrl: logoBAQ,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
        
                input: "text",
                inputPlaceholder: "Ingresa tu nombre...",
                showCancelButton: true,
            });
        
            if (text) {
                Swal.fire("Bienvenido " + text);
                nombre = text;
                resolve(nombre);
            }
        })()
    });    
};

export const AlertaUser = async (props) => {
    let name = await esperar();

    return (
        <div>
            <h1>{name ? name : name = 'basio'}</h1>
        </div>
    );
};
