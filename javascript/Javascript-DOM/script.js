
// Cria função changeMode
function changeMode() {
    changeClasses();
    changeText();
}

// Cria função que muda a classe 
function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}
// Cria função que muda o texto 
function changeText() {
    const lightMode = 'Ligth Mode';
    const darkMode = 'Dark Mode';

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON"
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON"
}

//Selecionando tags, id's e class
const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; // Coloca-se o indice [0] pois esse tipo de chamada retorna uma coleção
const footer = document.getElementsByTagName('footer')[0]; // Coloca-se o indice [0] pois esse tipo de chamada retorna uma coleção


// Event List que recebe o evento click e a função changeMode
button.addEventListener('click', changeMode);


