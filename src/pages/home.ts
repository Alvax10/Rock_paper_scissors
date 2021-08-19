
export function initHomePage(params: any) {

    const div = document.createElement("div");

    div.innerHTML = `
        <text-comp variant="title">
            Piedra Papel ó Tijera
        </text-comp>
        <div class="button">
            <button-comp variant="button"> Empezar </button-comp>
        </div>
        <div class="img__container">
            <hand-comp hand="tijera"></hand-comp>
            <hand-comp hand="piedra"></hand-comp>
            <hand-comp hand="papel"></hand-comp>
        </div>
    `;
    
    const buttonEl = div.querySelector(".button");

    buttonEl.addEventListener("click", () => {
        params.goTo("/dwf-m5-desafio/instrucciones");
    });
    return div;
}