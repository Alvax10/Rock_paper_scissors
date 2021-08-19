
export function initinstruccionesPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");

    style.innerHTML = `
        .instrucciones__container {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            margin: 100px auto 80px;
        }
        .body {
            margin: 30px 0;
        }
    `;
    div.innerHTML = `
    <div class="instrucciones__container">
        <text-comp variant="body">
            Presioná jugar
            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </text-comp>
        <div class="button">
            <button-comp variant="button"> ¡Jugar! </button-comp>
        </div>
        <div class="img__container">
            <hand-comp hand="tijera"></hand-comp>
            <hand-comp hand="piedra"></hand-comp>
            <hand-comp hand="papel"></hand-comp>
        </div>
    </div>
    `;
    
    div.appendChild(style);
    const button = div.querySelector(".button");

    button.addEventListener("click", () => {
        params.goTo("/dwf-m5-desafio/jugar/");
    });

    return div;
}