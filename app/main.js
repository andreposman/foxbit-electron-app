const { app, BrowserWindow, ipcMain, shell } = require('electron')
const url = require('url');
const path = require('path');

let janelaPrincipal = ''
let janelaInformativa = ''

// 'ouve' quando o app está pronto
app.on('ready', () => {
    // cria uma janela principal nova
    janelaPrincipal = new BrowserWindow({
        width: 900,
        height: 600,
        title: 'Foxbit - Payments',
        icon: './img/foxbit-logo.png',
        fullscreenWindowTitle: true,
        autoHideMenuBar: true,
        titleBarStyle: 'hiddenInset',
        closable: true,
        frame: true,
        center: true,
        resizable: false
    })
    //injeta o html na janela
    janelaPrincipal.loadURL(url.format({
        pathname: path.join(__dirname, '/janela-principal.html'),
        protocol: 'file:',
        slashes: true
        // passa o caminho da pagina: 'file://diretorio-atual/janela-principal.html' 
    }))
})


ipcMain.on('janelaInformativa', () => {
    janelaInformativa = new BrowserWindow({
        parent: janelaPrincipal,
        width: 450,
        height: 330,
        frame: false,
        autoHideMenuBar: false,
        center: true,
        closable: false,
        icon: './img/foxbit-logo-min.png',
        fullscreen: false,
        fullscreenable: false,
        hasShadow: true,
        resizable: true,
        movable: false,
    })
    janelaInformativa.loadURL(url.format({
        pathname: path.join(__dirname, './janela-informativa.html'),
        protocol: 'file:',
        slashes: true
    }))
    //garbage collector
    janelaInformativa.on('close', () => {
        janelaInformativa = null
    })

})


//#region fechar janela-informativa
ipcMain.on('fechar-janela-informativa', () => {
    janelaInformativa.close()
})
//#endregion


//#region links externos janela-informativa
ipcMain.on('link-github', () => {
    shell.openExternal('https://github.com/andreposman')
})

ipcMain.on('link-electron', () => {
    shell.openExternal('https://www.electronjs.org/')
})


ipcMain.on('link-materialize', () => {
    shell.openExternal('https://materializecss.com/')
})

ipcMain.on('link-tippy', () => {
    shell.openExternal('https://atomiks.github.io/tippyjs/')
})

ipcMain.on('link-logo', () => {
    shell.openExternal('https://foxbit.com.br')
})
//#endregion