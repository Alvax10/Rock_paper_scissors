import { state } from "../state";

const resultado = {
    ganaUsuario: require("url:../components/assets/ganaste.png"),
    ganaCompu: require("url:../components/assets/perdiste.png"),
    empate: require("url:../components/assets/tiedGame.svg"),
};

export function initResultadoPage(params: any) {

    const resultPageCont = document.createElement("div");
    resultPageCont.setAttribute("class", "result");

    const currentGame = state.getCurrentGame();
    const resultadoDelJuego = state.tenerResultado(
        currentGame.miMovimiento,
        currentGame.movimientoCompu,
    );

    state.cambiarHistory(resultadoDelJuego);
    const currentHistory = state.getState().historial;

    state.restartGame();

    resultPageCont.innerHTML = `
    <div class="image-container"> 
        <img src=${resultado[resultadoDelJuego]} class="result-image" />
    </div>
    <div class="score-container">
        <h2 class="score-container__title">Score</h2>
        <article class="score-container__data">
            <h3 class="score-container__user-data score"> 
                Vos: ${currentHistory.usuarioGana}
            </h3>
            <h3 class="score-container__computer-data score">
                Máquina: ${currentHistory.compuGana}
            </h3>
        </article>
    </div>
    <div class="button result-button">
        <button-comp variant="button result-button"> Volver a jugar </button-comp>
    </div>
    `;

    const buttonEl = resultPageCont.querySelector("button-comp");
    buttonEl.addEventListener("click", () => {
        params.goTo("/dwf-m5-desafio/instrucciones");
    });

    return resultPageCont;
}