new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Alerta chamado!')
        },
        gravarValor(event){
            this.valor = event.target.value
        }
    },
})