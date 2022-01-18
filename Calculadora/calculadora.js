function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma(+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

if (!operacao || operacao >= 7) {
    alert('Erro - operação invalida');
    calculadora();
} else{
let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira o segundo valor:'));
let resultado;

if (!n1 || !n2){
    alert ('Erro - parâmetros invalidos')
    calculadora();
} else {
    function soma () {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        nova_operacao();
    }
    
    function subtracao () {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        nova_operacao();
    }
    
    function multiplicacao () {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        nova_operacao();
    }
    
    function divisao_real () {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        nova_operacao();
    }
    
    function divisao_inteira () {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        nova_operacao();
    }
    
    function potenciacao () {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
        nova_operacao();
    }
    
    function nova_operacao(){
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    
        if  (opcao ==1){
            calculadora();
        } else if (opcao ==2){
            alert('Até mais!')
        } else {
            alert ('Digite uma operação valida!')
            nova_operacao();
        }
}


}


/*exibir na tela as funcçoes criadas */
switch (operacao){
    case 1:
        soma();
        break;
        case 2:
            subtracao();
            break;
            case 3:
                multiplicacao();
                break;
                case 4:
                    divisao_real();
                    break;
                    case 5:
                        divisao_inteira();
                        break;
                        case 6:
                            potenciacao();
                            break;


                
            
}

}


}
calculadora();