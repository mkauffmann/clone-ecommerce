//fixed nav begin
let fixedNav = document.querySelector('.nav-fixed');
let body = document.body

window.onscroll = function () {
    if (body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        fixedNav.style.transform = "translate(0, 0)"
    } else {
        fixedNav.style.transform = "translate(0, -200px)"

    }
}

//fixed nav end

//botões de compra rápida begin
let containerImg = document.querySelectorAll('.container-imagem');
let btnProduto = document.querySelectorAll('.btn-produto');

console.log(containerImg)

for (let i = 0; i < containerImg.length; i++){
    containerImg[i].addEventListener('mouseover', function() {
        btnProduto[i].style.transform = "translate(0, 0)";
    })
    
    containerImg[i].addEventListener('mouseout', function() {
        btnProduto[i].style.transform = "translate(-300px, 0)";
    })
}
//botões de compra rápida end