
const pessoas = {
    nome: "Marcos",
    idade: 21
}

function calculaIdade(anos) {
	return console.log(`Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`);
}

function calculaTamanho(tamanho, peso){
    return console.log(`${this.nome} tem ${tamanho} de altura e pesa ${peso}KG`)
}

//calculaIdade.call(pessoas, 4);

calculaTamanho.apply(pessoas,[1.80, 70]);