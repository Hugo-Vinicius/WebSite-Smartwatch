let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx bx-moon')){
        darkmode.classList.replace('bx bx-moon','bx-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('bx-sun','bx bx-moon');
        document.body.classList.remove('color');
    }
}