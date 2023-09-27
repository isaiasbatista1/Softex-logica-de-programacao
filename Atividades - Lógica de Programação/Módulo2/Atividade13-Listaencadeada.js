/*Crie uma lista encadeada em que cada elemento representa uma pessoa.
Ela precisa conter informações como nome, idade e referência ao filho dela.*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = [];
    }

    addChild(filho) {
        this.filhos.push(filho);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    addRoot(nome, idade) {
        this.root = new Pessoa(nome, idade);
    }
}

const familyTree = new Tree();

// Nó de João
familyTree.addRoot("João", 60);

const joao = familyTree.root;
joao.addChild(new Pessoa("Flávia", 26));
joao.addChild(new Pessoa("Karen", 28));
joao.filhos[0].addChild(new Pessoa("Marcos", 5));
joao.filhos[0].addChild(new Pessoa("Evelin", 7));
joao.filhos[0].addChild(new Pessoa("Fernanda", 10));

// Nó de Julieta

const julieta = new Pessoa("Julieta", 56);
julieta.addChild(new Pessoa("Túlio", 32));
julieta.addChild(new Pessoa("Tamires", 22));
julieta.filhos[0].addChild(new Pessoa("Sáfira", 8));
julieta.filhos[0].addChild(new Pessoa("Letícia", 4));
julieta.filhos[0].addChild(new Pessoa("Sabrina", 2));
familyTree.root.addChild(julieta)

function aplicarTree(node, nivel = 0) {
    const aplicar = "  ".repeat(nivel);
    console.log(`${aplicar}Nome: ${node.nome}, Idade: ${node.idade}`);

    for (const filho of node.filhos) {
        aplicarTree(filho, nivel + 1);
    }
}
aplicarTree(familyTree.root);

