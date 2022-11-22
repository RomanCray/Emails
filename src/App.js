
import './App.css';
// import { AlertaNomr } from './Components/Js/RMC_Alertas';4

import logoBAQ from "./Components/Img/Logo_Color_PNG.png";
import Swal from "sweetalert2";
import { useState } from 'react';
import { BotonsMas } from './Components/Js/Botones';

import { HiOutlineMailOpen } from "react-icons/hi";
import { ImOffice } from "react-icons/im";
import { SescodTable } from './Components/Js/Tablas2';


function App() {

  const [usuario, getUsuario] = useState('');

  (async () => {

    if (usuario === '') {

      Swal.fire({
        imageUrl: logoBAQ,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Logo BAQ",
        position: "center",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        title: "Hola! Bienbenido al BAQ",

        input: "text",
        inputPlaceholder: "Tu nombre...",
        showCancelButton: true,
      }).then(res => {
        if (res.value) {
          // Swal.fire("Bienvenido " + res.value);
          getUsuario(res.value);
        }
      }
      );
    }
  })()

  // ****************************************
  return (
    <div className='conteiner-App'>

      <div className='header-app'>
        <div className='hdr_img'>
          <img src={logoBAQ} alt="" />
        </div>
        <div className='hdr_nombre'>
          <p className='saludo'>
            Hola
            <b className='prb'>!</b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p className='nombre'>{usuario}</p>
          </p>
        </div>
      </div>
      <div className='body-App'>
        <div className='body-App_btns_nuevos'>
          <BotonsMas
            TextoBtn='Nuevo mensaje'
            ColorBoton="baqN"
            icono={<HiOutlineMailOpen />}
          >
          </BotonsMas>
          <BotonsMas
            TextoBtn='Nueva Empresa'
            ColorBoton="baqG"
            icono={<ImOffice />} />
        </div>
        <div className='body-App_tbl_empresas'>
          <SescodTable />
        </div>
      </div>
      {/* <AlertaNomr
        texto='Hola aaaaaaaaaaa'
        nameicono='error' /> */}
    </div>
  );
  // ****************************************  
}

export default App;