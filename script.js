// Define classe para modo selecionado (estilo css)

const modosCor = document.querySelectorAll('.modo-btn')
modosCor.forEach(button => {
    // Evento para detectar o click no botão
    button.addEventListener('click', () => {
        // Tira a classe 'clicked' do botão quando clica em outro
        modosCor.forEach(btn => btn.classList.remove('clicked'))
        // Põe classe 'clicked' quando clicar num botão
        button.classList.add('clicked')
    })
})

const botaoModoSimp = document.querySelector('.simp')
const botaoModoPsub = document.querySelector('.psubModo')
const botaoModoT3 = document.querySelector('.t3Modo')
const botaoModoComp = document.querySelector('.comp')

// Evento Modos selecionados
botaoModoSimp.addEventListener('click', function () {
    const outros = document.querySelectorAll('.outros')
    outros.forEach(function (elemento) {
        elemento.style.display = 'none'
    })
    document.querySelector('.psub').value = ''
    document.querySelector('.t3').value = ''
})
botaoModoPsub.addEventListener('click', function () {
    document.getElementById('t3').style.display = 'none'
    document.getElementById('psub').style.display = 'block'
    document.querySelector('.t3').value = ''
})
botaoModoT3.addEventListener('click', function () {
    document.getElementById('psub').style.display = 'none'
    document.getElementById('t3').style.display = 'block'
    document.querySelector('.psub').value = ''
})
botaoModoComp.addEventListener('click', function () {
    document.getElementById('psub').style.display = 'block'
    document.getElementById('t3').style.display = 'block'
})

// Define classe para peso selecionado

const pesos = document.querySelectorAll('input[name="peso"]')
pesos.forEach(input => {
    input.addEventListener('click', () => {
        pesos.forEach(input => input.removeAttribute('checked'))
        input.setAttribute('checked', '')
    })
})


// Operações
const enviarNotas = () => {

    const p1 = parseFloat(document.querySelector('.p1').value);
    const p2 = parseFloat(document.querySelector('.p2').value);
    const t1 = parseFloat(document.querySelector('.t1').value);
    const t2 = parseFloat(document.querySelector('.t2').value);
    const psub = parseFloat(document.querySelector('.psub').value);
    const t3 = parseFloat(document.querySelector('.t3').value);

    const mediaProva = () => {
        if (!isNaN(psub)) {
            if (psub >= p1 && psub <= p2) {
                return (psub + p2) / 2
            } else if (psub <= p1 && psub >= p2) {
                return (p1 + psub) / 2
            } else {
                return psub
            }
        } else {
            return (p1 + p2) / 2
        }
    }

    const mediaTrabalho = () => {
        if (!isNaN(t3)) {
            return (0.4 * t1) + (0.4 * t2) + (0.2 * t3)
        } else {
            return (t1 + t2) / 2
        }
    }

    const mediaFinal = () => {
        const inputMarcado = document.querySelector('input:checked')
        if (inputMarcado) {
            if (inputMarcado.id == 'peso_50') {
                return (mediaProva() + mediaTrabalho()) / 2
            } else if (inputMarcado.id == 'peso_60') {
                return (0.6 * mediaProva()) + (0.4 * mediaTrabalho())
            } else {
                return (0.7 * mediaProva()) + (0.3 * mediaTrabalho())
            }

        }
    }




    
    // Teste para valores, se quiser ative para visualizar
    // console.log(`Prova 1: ${p1}\nProva 2: ${p2}\nTrabalho 1: ${t1}\nTrabalho 2: ${t2}\nProva Sub: ${psub}\nTrabalho 3/ PI: ${t3}\nMédia Prova: ${mediaProva()}\nMédia Trabalho: ${mediaTrabalho()}\nMédia Final: ${mediaFinal()}`)
}