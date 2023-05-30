async function buscaEndereco(cep){
    var mensagemErro =  document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCEPConvertida = await consultaCep.json();
        if (consultaCEPConvertida.erro){
            throw Error("CEP não existente!!");
        }else
            var cidade = document.getElementById('cidade');
            var logradouro = document.getElementById('endereco');
            var estado = document.getElementById('estado');
            var bairro = document.getElementById('bairro');

            cidade.value = consultaCEPConvertida.localidade;
            logradouro.value = consultaCEPConvertida.logradouro;
            estado.value = consultaCEPConvertida.uf;
            bairro.value = consultaCEPConvertida.bairro;
            console.log(consultaCEPConvertida);
            return consultaCEPConvertida;
    }catch (erro){
        mensagemErro.innerHTML = `<p>CEP Inválido. Tente novamente</p>`
        console.log(erro);
    }
}

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

