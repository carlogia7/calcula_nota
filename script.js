const modosCor = document.querySelectorAll('.modo-btn')

modosCor.forEach(button => {
    // Evento para detectar o click no botão
    button.addEventListener('click', () => {
        // Tira a classe 'clicked' do botão quando clica em outro
        modosCor.forEach(btn => btn.classList.remove('clicked'));
        // Põe classe 'clicked' quando clicar num botão
        button.classList.add('clicked');
    })
})

const botaoModoSimp = document.querySelector('.simp')
const botaoModoPsub = document.querySelector('.psub')
const botaoModoT3 = document.querySelector('.t3')
const botaoModoComp = document.querySelector('.comp')


botaoModoSimp.addEventListener('click', function () {
    const outros = document.querySelectorAll('.outros');
    outros.forEach(function(elemento) {
        elemento.style.display = 'none';
    });
})
botaoModoPsub.addEventListener('click', function () {
    document.getElementById('t3').style.display = 'none';
    document.getElementById('psub').style.display = 'block';
})
botaoModoT3.addEventListener('click', function () {
    document.getElementById('psub').style.display = 'none';
    document.getElementById('t3').style.display = 'block';    
})
botaoModoComp.addEventListener('click', function () {
    document.getElementById('psub').style.display = 'block';
    document.getElementById('t3').style.display = 'block'; 
})