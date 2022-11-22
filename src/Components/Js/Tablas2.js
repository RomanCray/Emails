import React from "react";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.css";
import { AlertaNomr } from "./RMC_Alertas";

// ejecutar para obtener todas las funciones de handsontable
registerAllModules();
registerLanguageDictionary(esMX);

export const SescodTable = () => {
    const [usuarios, setUsuarios] = React.useState([]);

    const hotTableComponent = React.useRef(null);

    React.useEffect(() => {
        async function getData() {
            await fetch('http://localhost/web/excelphp/')
                .then((response) => response.json())
                .then((data) => setUsuarios(data));
        }

        getData();
    }, []);

    const descargarArchivo = () => {
        const pluginDescarga =
            hotTableComponent.current.hotInstance.getPlugin("exportFile");

        console.table(hotTableComponent.current.hotInstance);

        // pluginDescarga.downloadFile("csv", {
        //   filename: "usuarios",
        //   fileExtension: "csv",
        //   mimeType: "text/csv",
        //   columnHeaders: true,
        // });

    };

    return (
        <div>
            <input id="search_field" onKeyUp={(e) => {

                const search = hotTableComponent.current.hotInstance.getPlugin('search');
                const queryResult = search.query(e.target.value);
                console.log(queryResult);
                hotTableComponent.current.hotInstance.render();
            }} type="search" placeholder="Search"></input>

            <button onClick={() => descargarArchivo()}>Descargar Archivo</button>
            {usuarios.length > 0 ?
                <div className='container_table'>

                    <HotTable
                        ref={hotTableComponent}
                        language={esMX.languageCode}
                        data={usuarios}
                        licenseKey="non-commercial-and-evaluation"
                        // colHeaders={true}
                        // rowHeaders={true}
                        // columnSorting={true}
                        // mergeCells={true}
                        contextMenu={true}
                        // readOnly={false}
                        search={true}
                    // searchResultClass='my-custom-search-result-class'                            
                    >
                        <HotColumn data="Id" readOnly={true} />
                        <HotColumn data="Empresa" title="Nombre" />
                        <HotColumn data='Correo' />
                        <HotColumn data='Representante' />
                        <HotColumn data='Telefono' />
                        <HotColumn data='Correo' />
                        <HotColumn data='Representante' />
                        <HotColumn data='Telefono' />
                        <HotColumn data='Correo' />
                        <HotColumn data='Representante' />
                        <HotColumn data='Telefono' />
                    </HotTable>
                </div>
                : <AlertaNomr
                texto ='Hola aaaaaaaaaaa'
                nameicono= 'error' />
            }            

        </div>
    );
};