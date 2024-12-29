class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    obtemNomeAtleta() {
        return `Nome: ${this.nome}`;
    }

    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`;
    }

    obtemPesoAtleta() {
        return `Peso: ${this.peso}`;
    }

    obtemNotasAtleta() {
        return `Notas: ${this.notas}`;
    }

    obtemAlturaAtleta() {
        return `Altura: ${this.altura}`;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        }
        else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        }
        else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediario";
        }
        else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        }
        else {
            return "Sem Categoria";
        }
    }

    calculaMediaValidada() {
        let notasValidas = this.notas.slice(1, this.notas.length - 1);
        let soma = 0;
        let media = 0;
            notasValidas.forEach(function(notasValidas){
                soma = soma + notasValidas;
            })
            media = soma / notasValidas.length;
            return `Media válida: ${media.toFixed(6)}`;
    }

    obtemMediaValida() {
        return this.calculaMediaValidada();
    }

    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return `IMC: ${imc.toFixed(14)}`;
    }

}


// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(`Categoria: ${atleta.calculaCategoria()}`);
console.log(atleta.calculaIMC());
console.log(atleta.obtemMediaValida());
