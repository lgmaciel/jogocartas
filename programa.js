
novaCarta("imagens/castelo.png", "Castelo");
novaCarta("imagens/monstro1.png", "Monstro 1");
novaCarta("imagens/monstro3.png", "Monstro 3");
novaCarta("imagens/monstro2.png", "Monstro 2");

function novaCarta(imagem, texto) {

/*
Aqui estamos criando uma tag <carta>
*/
let carta = document.createElement('carta');

// Aqui criamos uma nova tag <img>
// e depois alteramos propriedadas da tag <img>
let imgCarta = document.createElement('img');
imgCarta.src=imagem;
imgCarta.width='150';
imgCarta.height='150';
//Isso foi equivalente a escrever em HTML
//<img src="imagens/castelo.png" width="150" height="150">

// Criamos uma tag <texto> e alteramos
// seu conteúdo textual (textContent)
let textoCarta = document.createElement('texto');
textoCarta.textContent = texto;

/* Isso foi equivalente a escrever em HTML
    <texto>
        Texto Texto Texto
    </texto>
*/

/**
 * Agora precisamos "montar" a tag carta, que tem 2 partes:
 * - uma imagem
 * - um texto
 * Exemplo:
 * 
 * <carta>
 *  <img>
 *  <texto></texto>
 * </carta>
 * 
 * Para isso adicionamos cada uma das tags que acabamos de criar
 * como "filhas" da tag carta. Isso significa que essas duas
 * tags estão "dentro" da tag carta, como no exemplo acima.
 * 
 * Usamos para isso o método appendChild() passando a tag
 * filha que vamos adicionar
 * */


carta.appendChild(imgCarta);
carta.appendChild(textoCarta);

/*
Para terminar, precisamos adicionar a nova tag carta
à página. No nosso HTML, as tags carta são filhas da
tag <cartas>. 
Então usamos appendChild() para adicionar a nova carta
à <cartas>
*/

let cartas = document.querySelector('cartas');
cartas.appendChild(carta);

/*
Isso foi equivalente a escrever o seguinte HTML

<cartas>
    <carta>
        <img src="imagens/castelo.png" width="150" height="150">
        <texto>
            Texto Texto Texto
        </texto>
    </carta>
</cartas>
*/


}


