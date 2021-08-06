let containerImg = document.querySelectorAll('.container-imagem')
let btnProduto = document.querySelectorAll('.btn-produto')

console.log(containerImg)

for (let i = 0; i < containerImg.length; i++){
    containerImg[i].addEventListener('mouseover', function() {
        btnProduto[i].style.transform = "translate(0, 0)"
    })
    
    containerImg[i].addEventListener('mouseout', function() {
        btnProduto[i].style.transform = "translate(-300px, 0)"
    })
}
