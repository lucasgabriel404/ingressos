function comprar(){
    let quantidade = parseInt(document.getElementById("qtd").value);
    if(quantidade/1 != quantidade){
        quantidade = 0;
    }
    let ingresso = document.getElementById("tipo-ingresso").value;
    let totalIngressos = parseInt(document.getElementById(`qtd-${ingresso}`).textContent);

    if(quantidade>document.getElementById(`qtd-${ingresso}`).textContent){
        alert("Quantidade indisponível!");
    }else{
        document.getElementById(`qtd-${ingresso}`).textContent = totalIngressos - quantidade;
    }
}