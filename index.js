
function addTransacao() {
  const desc = document.getElementById("desc").value
  const valor = Number(document.getElementById("valor").value)
  const tipo = document.getElementById("tipo").value
  const saldo = document.getElementById("saldo")
  const entrada = document.getElementById("entrada");
  const saida = document.getElementById("saida");
  console.log(desc, valor, tipo );
  const valorFInal = valor.toFixed(2);
  if (tipo.toLowerCase() == "entrada"){
    entrada.innerHTML = `R$ ${valorFInal}`
    saldo.innerHTML = `R$ ${valorFInal}`
  } else {
    saida.innerHTML = `R$ ${valorFInal}`
    saida.innerHTML = `R$ ${valorFInal}`
  }
}