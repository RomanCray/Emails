
import './App.css';

import { useEffect, useState } from 'react';

import Bqackdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Startp } from './Components/Js/Inicio';

function App() {
  const [usuario1, getUsuario1] = useState('');


  useEffect(() => {
    async function getData() {
      await fetch('http://192.168.0.6/web/excelphp/')
        .then((response) => response.json())
        .then((data) => getUsuario1(data));
    }

    getData();
  }, []);

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='conteiner-App'>
      {!usuario1 ?

        <Bqackdrop Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Bqackdrop>
        : <>
          <Startp />
        </>
      }
    </div>
  );
}

export default App;

// ****************************************        
