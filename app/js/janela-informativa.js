const { ipcRenderer, shell } = require('electron');

const btnFechar = document.querySelector('#btnFechar');
const github = document.querySelector('#github');
const electron = document.querySelector('#electron');
const materialize = document.querySelector('#materialize');
const tippy = document.querySelector('#tippy');
const logo = document.querySelector('#logo-informativo');
const appVersao = document.querySelector('#versao') 

btnFechar.addEventListener('click', () => {
    ipcRenderer.send('fechar-janela-informativa');
})

github.addEventListener('click', () => {
    shell.openExternal('https://github.com/andreposman')
})

electron.addEventListener('click', () => {
    ipcRenderer.send('link-electron');
})

materialize.addEventListener('click', () => {
    ipcRenderer.send('link-materialize');
})

tippy.addEventListener('click', () => {
    ipcRenderer.send('link-tippy');
})

logo.addEventListener('click', () => {
    ipcRenderer.send('link-logo');
})

