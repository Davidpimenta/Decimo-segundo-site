var texto_afazer = document.getElementById('lista')
var adicionar = document.getElementById('criar_afazer')
var limpar = document.getElementById('limpar')
var main = document.getElementById('main')
adicionar.addEventListener('click', add)
var cont = 0

function add(){
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
    afazer.id = 'div'
    lista_afazer.textContent = `${texto_afazer.value}`
    main.appendChild(afazer)
}

function troca(){

}