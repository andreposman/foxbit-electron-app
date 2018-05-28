//#region importanto modulos
const { ipcRenderer, shell } = require('electron')
const tippy = require('tippy.js')
//#endregion


//#region 
const janelaInformativa = document.querySelector('#janela-informativa')
console.log(janelaInformativa);

janelaInformativa.addEventListener('click', () => {
    ipcRenderer.send('janelaInformativa')
})
//#endregion


//#region - Tooltips do menu do rodape
tippy('.zendesk', {
    arrow: true,
    arrowType: 'round',
    size: 'large',
    delay: 200,
    duration: 500,
    inertia: true,
    theme: 'foxbit',
    animation: 'perspective'
})

tippy('.blinktrade', {
    arrow: true,
    arrowType: 'round',
    size: 'large',
    delay: 200,
    duration: 500,
    inertia: true,
    theme: 'foxbit',
    animation: 'perspective'
})

tippy('.slack', {
    arrow: true,
    arrowType: 'round',
    size: 'large',
    delay: 200,
    duration: 500,
    inertia: true,
    theme: 'foxbit',
    animation: 'perspective'
})

tippy('.pontomais', {
    arrow: true,
    arrowType: 'round',
    size: 'large',
    delay: 200,
    duration: 500,
    inertia: true,
    theme: 'foxbit',
    animation: 'perspective'
})

tippy('.holerite', {
    arrow: true,
    arrowType: 'round',
    size: 'large',
    delay: 200,
    duration: 500,
    inertia: true,
    theme: 'foxbit',
    animation: 'perspective'
})

tippy('.lastpass', {
    arrow: true,
    arrowType: 'round',
    size: 'large',
    delay: 200,
    duration: 500,
    inertia: true,
    theme: 'foxbit',
    animation: 'perspective'
})
//#endregion


//#region fazendo a ligação entre os botões no html e js
const btnPlanilha = document.querySelector('#btnPlanilha')
const btnBra = document.querySelector('#btnBra')
const btnCaixa = document.querySelector('#btnCaixa')
const btnBB = document.querySelector('#btnBB')
const btnInter = document.querySelector('#btnInter')
const btnEstorno = document.querySelector('#btnEstorno')
const btnMacro = document.querySelector('#btnMacro')

//menu-rodape
const btnZendesk = document.querySelector('#zendesk')
const btnBlinkTrade = document.querySelector('#blinktrade')
const btnSlack = document.querySelector('#slack')
const btnLastPass = document.querySelector('#lastpass')
const btnPontoMais = document.querySelector('#pontomais')
const btnHolerite = document.querySelector('#holerite')
//logo
const logo = document.querySelector('#logo')

console.log(
    btnPlanilha,
    btnBra,
    btnCaixa,
    btnBB,
    btnInter,
    btnZendesk,
    btnBlinkTrade,
    btnSlack,
    btnLastPass,
    btnPontoMais,
    btnHolerite
);
//#endregion


// #region funções que fazem os botões abrirem os links
btnPlanilha.addEventListener('click', () => {
    shell.openExternal('#')
})

btnBra.addEventListener('click', () => {
    shell.openExternal('#')
})

btnCaixa.addEventListener('click', () => {
    shell.openExternal('#')
})

btnBB.addEventListener('click', () => {
    shell.openExternal('#')
})

btnInter.addEventListener('click', () => {
    shell.openExternal('#')
})

btnEstorno.addEventListener('click', () => {
    shell.openExternal('#')
})

btnMacro.addEventListener('click', () => {
    shell.openExternal('#')
})

//#endregion


//#region funções que abrem os links do menu do rodape
btnZendesk.addEventListener('click', () => {
    shell.openExternal('https://foxbit.zendesk.com/agent/')
})

btnBlinkTrade.addEventListener('click', () => {
    shell.openExternal('https://blinktrade.com/admin/#/login')
})

btnSlack.addEventListener('click', () => {
    shell.openExternal('https://slack.com/signin')
})

btnPontoMais.addEventListener('click', () => {
    shell.openExternal('https://app.pontomaisweb.com.br/#/meu_ponto')
})

btnHolerite.addEventListener('click', () => {
    shell.openExternal('https://office2crm.prosoft.com.br/')
})

btnLastPass.addEventListener('click', () => {
    shell.openExternal('https://lastpass.com/?ac=1&lpnorefresh=1&lang=pt')
})

logo.addEventListener('click', () => {
    ipcRenderer.send('link-logo');
})
//#endregion

