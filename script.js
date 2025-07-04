function calcular(tipo, valor) {

    if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('resultado').value = '';

        }else if (valor != "c" && valor != "=") {
            document.getElementById('resultado').value += valor;

        }else if(valor === "="){
            let valor_campo = document.getElementById('resultado').value;
            document.getElementById('resultado').value = eval(valor_campo);

        }
        
    } else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor ;
    }
}