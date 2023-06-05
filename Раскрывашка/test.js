const fg = document.querySelector("#fg");
const btn_open = document.querySelector(".btn-open");
const svg = document.querySelector(".svg");


let index = 2;
btn_open.addEventListener('click', () => {
    fg.classList.toggle('not_hide');

    if (index === 2) {
        svg.src = './svg/arrow-up-340-svgrepo-com.svg';
        index--;
    }
    else if(index === 1){
        svg.src = './svg/arrow-down-338-svgrepo-com.svg';
        index++;
    }
});
