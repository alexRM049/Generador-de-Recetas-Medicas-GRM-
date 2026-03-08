const { contextBrigde, ipcRenderer } = require ('electron')
const { electron } = require('process')

contextBrigde.exposeInMainWorld(electronAPI,{
    // This function can be called from Angular
    printPrescription: (options) => ipcRenderer.send('print-prescription', options),

    // You can add more here later, like 'saveFile' or 'getPrinterList'
    getPrinters: () => ipcRenderer.invoke('get-printers')
});