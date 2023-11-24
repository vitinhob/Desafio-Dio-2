const entrada = require ("prompt-sync")({sigint: true});

console.log("**Calculadora rankeada**\n")

quantVitoria(50,15)
let nivel = 3

switch (nivel)
{
    case 1:
        console.log("Você está no rank Ferro e seu saldo de vitórias está entre zero e dez")
        break

    case 2:
        console.log("Você está no rank Bronze e seu saldo de vitórias está entre 11 e 20")
        break

    case 3:
        console.log("Você está no rank Prata e seu saldo de vitórias está entre 21 e 50")
        break

    case 4:
        console.log("Você está no rank Ouro e seu saldo de vitórias está entre 51 e 80")
        break
    
    case 5:
        console.log("Você está no rank Diamante e seu saldo de vitórias está entre 81 e 90")
        break

    case 6:
        console.log("Você está no rank Lendário e seu saldo de vitórias está entre 91 e 100")
        break

    case 7:
        console.log("Você está no rank Imortal e seu saldo de vitórias está acima de 101")
        break
}

function quantVitoria(v1, d1)
{ 
    let vitorias = v1 - d1
    console.log("O resultado de vitórias menos derrotas é "+ vitorias)
    return vitorias
}