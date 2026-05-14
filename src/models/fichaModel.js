var database = require("../database/config");

function buscarFicha(id) {
    var instrucao = `
        SELECT nome, classe, nivel, raca FROM ficha WHERE usuario_id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function criarFicha(nome, classe, nivel, vidaMaxima, vidaAtual, dadoVida, classeArmadura, deslocamento, cargaMaxima, cargaAtual, 
                    percepcaoPassiva, raca, alinhamento, antecedentes, experiencia) {
    var instrucao = `
        INSERT INTO ficha (
            nome, classe, nivel, vidaMaxima, vidaAtual, dadoVida, classeArmadura, deslocamento, cargaMaxima, cargaAtual, 
            percepcaoPassiva, raca, alinhamento, antecedentes, experiencia
            )
        VALUES (
            '${nome}', '${classe}', ${nivel}, ${vidaMaxima}, ${vidaAtual}, ${dadoVida}, ${classeArmadura}, ${deslocamento}, 
            ${cargaMaxima}, ${cargaAtual}, ${percepcaoPassiva}, '${raca}', '${alinhamento}', '${antecedentes}', '${experiencia}' 
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserirPoderes(nome, descricao){

}

function buscarPoderes(idUsuario, idFicha){
    var instrucao = `
        SELECT nome, classe, nivel, raca FROM ficha WHERE usuario_id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function inserirMagias(nome, descricao){

}

function buscarMagias(idUsuario, idFicha){
    var instrucao = `
        SELECT nome, classe, nivel, raca FROM ficha WHERE usuario_id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function inserirItens(nome, peso, descricao){

}


function buscarItens(idUsuario, idFicha){
    var instrucao = `
        SELECT nome, classe, nivel, raca FROM ficha WHERE usuario_id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    criarFicha,
    buscarFicha
};
