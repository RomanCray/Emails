import React from "react";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from "handsontable/i18n";
import TextField from '@mui/material/TextField';
import "handsontable/dist/handsontable.full.css";
import { BotonsMas } from "./Botones";
import { TfiReload } from "react-icons/tfi";

// ejecutar para obtener todas las funciones de handsontable
registerAllModules();
registerLanguageDictionary(esMX);

export const SescodTable = () => {
    const [usuarios, setUsuarios] = React.useState([]);

    const hotTableComponent = React.useRef(null);

    React.useEffect(() => {
        const getData = async () => {
            await fetch('http://192.168.0.6/web/excelphp/')
                .then((response) => response.json())
                .then((data) => setUsuarios(data));
        };

        getData();
    }, []);

    const descargarArchivo = () => {
        // const pluginDescarga = hotTableComponent.current.hotInstance.getPlugin("exportFile");

        console.log(hotTableComponent.current.hotInstance);

        // pluginDescarga.downloadFile("csv", {
        //   filename: "usuarios",
        //   fileExtension: "csv",
        //   mimeType: "text/csv",
        //   columnHeaders: true,
        // });
        // alert("hi");
        const getData = async () => {
            await fetch('http://192.168.0.6/web/excelphp/')
                .then((response) => response.json())
                .then((data) => setUsuarios(data));
        };

        getData();
    };

    return (
        <div>
            <div className='body-App_btns_nuevos'>
                <TextField
                    sx={{ m: 1, width: 270 }}
                    size="small"
                    helperText=" "
                    id="search_field"
                    label="Buscar"
                    color="warning"
                    type="search"
                    onKeyUp={(e) => {

                        const search = hotTableComponent.current.hotInstance.getPlugin('search');
                        const queryResult = search.query(e.target.value);
                        hotTableComponent.current.hotInstance.render();
                    }}
                />
                <BotonsMas
                    TextoBtn='Actualizar Tabla'
                    ColorBoton="inherit"
                    Click={descargarArchivo}
                    icono={<TfiReload />}
                    xsPW={270}
                >
                </BotonsMas>
            </div>

            <div className='container_table'>

                <HotTable
                    ref={hotTableComponent}
                    language={esMX.languageCode}
                    data={usuarios}
                    licenseKey="non-commercial-and-evaluation"
                    // colHeaders={true}
                    rowHeaders={true}
                    // columnSorting={true}
                    // mergeCells={true}
                    contextMenu={true}
                    // readOnly={false}
                    search={true}
                // searchResultClass='my-custom-search-result-class'                            
                >
                    <HotColumn data="Tipo-Donante" readOnly={false} title="Id" />
                    <HotColumn data='Empresa' title="Empresa" />
                    <HotColumn data='Nombre' title="Nombre" />
                    <HotColumn data='Cargo' title="Cargo" />
                    <HotColumn data='Teléfono' title="Teléfono" />
                </HotTable>
            </div>
        </div>
    );
};