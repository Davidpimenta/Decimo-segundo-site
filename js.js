var texto_afazer = document.getElementById('lista')
var adicionar = document.getElementById('criar_afazer')
var limpar = document.getElementById('limpar')
var main = document.getElementById('main')
var alerta = document.getElementById('alerta')
var clean = []
var cont = 0
var apg = document.getElementById('clear')
var fechar = document.getElementById('fechar')
var modoclaro = document.getElementById('cor')
modoclaro.addEventListener('click', claro)
var img = document.getElementById('img')
adicionar.addEventListener('click', add)
limpar.addEventListener('click' , divclear)
fechar.addEventListener('click', divfecha)
apg.addEventListener('click', clear)
var aviso = false
var troca_cor = false
var css = document.querySelector('link')
function add(){
    if(aviso == false){
        cont+=1
        var afazer = document.createElement('div')
        var lista_afazer = document.createElement('p')
        var numerador = document.createElement('div')
        var check = document.createElement('div')
        var numeracao = document.createElement('p')
        numeracao.id = 'numeracao'
        check.id = 'check'
        numerador.id = 'contador'
        numeracao.innerText = cont
        lista_afazer.id = 'paragrafochek'
        let verif = true
        var apaga = document.createElement('div')
        apaga.id = 'apagar'
        apaga.innerText = 'Apagar Tarefa'
        numerador.appendChild(numeracao)
        numerador.appendChild(apaga)
        
        
        check.addEventListener('click', function feito(){
            if(verif == true){
            check.style.backgroundImage = 'url("done_FILL0_wght400_GRAD0_opsz48.png")'
            check.style.backgroundColor = 'var(--cor4)';
            check.style.border = '1px solid var(--cor0)'
            verif = false

            } else {
                verif = true
                check.style.backgroundImage = 'url("none")' 
                check.style.backgroundColor = 'var(--cor0)'
                check.style.border = '1px solid var(--cor4)'
            }   
        })

        
        numerador.addEventListener('click', function apagar(){
            apaga.style.display = 'inline-block'
        })

        apaga.addEventListener('mouseout', function apagarout(){
            apaga.style.display = 'none'
        })


        apaga.addEventListener('click', function deletar(){
            afazer.remove()
            cont-=1
            var num = document.querySelectorAll('#numeracao')
            cont = 0
            num.forEach((numero)=>{
                cont ++
                numero.innerText = cont
            })
        
        })

        afazer.appendChild(numerador)
        afazer.appendChild(lista_afazer)
        afazer.appendChild(check)
        afazer.id = 'tarefa'
        lista_afazer.textContent = `${texto_afazer.value}`
        main.appendChild(afazer)
        clean.push(afazer)
    } 
}

function troca(){
    
}

function divclear(){
    alerta.style.display = 'inline-block'
    alerta.style.transitionDuration = '1s' 
    aviso = true
}

function divfecha(){
    alerta.style.display = 'none'
    alerta.style.transitionDuration = '1s'
    aviso = false
}

function clear(){
    var contb = 0
    cont = 0
    while(clean.length > contb){
        clean[contb].remove()
    contb++
    }
    alerta.style.display = 'none'
    aviso = false
}


function claro(){
    if(troca_cor == false && aviso == false){
        img.src = 'toggle_on_FILL0_wght400_GRAD0_opsz48.png'
        troca_cor = true
        css.href = 'style2.css'

    } else if (aviso == false){
        img.src = 'toggle_off_FILL0_wght400_GRAD0_opsz48.png'
        troca_cor = false   
        css.href = 'style.css'
    }
}