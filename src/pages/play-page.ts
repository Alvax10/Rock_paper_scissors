import {state , jugada} from "../state";

function movimientoRandom(): jugada {
    const movimientosPosibles: jugada[] = ["piedra", "papel", "tijera"];
    const movimientoElegido: jugada = 
        movimientosPosibles[Math.floor(Math.random() * movimientosPosibles.length)];

    return movimientoElegido;
}

export function initPlayPage(params: any) {
    
    var tiempoLimite: number = 3;
    var tiempoVisible: number = 3;

    const playContainer = document.createElement("div");
    playContainer.setAttribute("class", "game-countdown");

    playContainer.innerHTML = `
        <div class="circle">
            <h2 class="countdown-timer"> ${tiempoVisible} </h2>
        </div>
        <div class="hands-container-countdown">
            <hand-comp hand="tijera"></hand-comp>
            <hand-comp hand="piedra"></hand-comp>
            <hand-comp hand="papel"></hand-comp>
        </div>
    `;
    const handComponents = playContainer.querySelectorAll("hand-comp");
    
    handComponents.forEach((hand) => {
        
        hand.addEventListener("handClick", (e: any) => {
            
            const movimientoElegido = e.detail.handMove;
            state.setMove(movimientoElegido, "jugadaUsuario");
            
            handComponents.forEach((auxHand) => {

                const imageEl = auxHand.shadowRoot.querySelector(".hand");
                
                if (auxHand.getAttribute("hand") !== movimientoElegido) {
                    imageEl.classList.add("inactive-hand");
                    imageEl.classList.remove("active-hand");
                    
                } else if (auxHand.getAttribute("hand") === movimientoElegido) {
                    imageEl.classList.add("active-hand");
                    imageEl.classList.remove("inactive-hand");
                }
            });
        });
    });
    
    state.setMove(movimientoRandom(), "jugadaCompu");
        
    const countdownTimerEl = playContainer.querySelector(".countdown-timer");
    countdownTimerEl.textContent = tiempoVisible.toString();
    
    let intervalTimer = setTimeout(() => {
        
        tiempoVisible--;
    }, 1000);
    
    if (tiempoLimite === 0) {
        clearTimeout(intervalTimer);
    }
    
    let timerInterval = setTimeout(() => {
        const esteJuego = state.getCurrentGame();   

        if (tiempoLimite === 0) {
            clearTimeout(timerInterval);
        }
        
        playContainer.classList.add("game-hands-show");
        playContainer.innerHTML = `
        <hand-comp hand=${esteJuego.jugadaCompu} class="computer-hand" height="215px" width="90px"></hand-comp>
        <hand-comp hand=${esteJuego.jugadaUsuario} class="user-hand" height="215px" width="90px"></hand-comp>
        `;    
        
        let resultTimer: number = 3;
        let goToResult = setTimeout(() => {
            params.goTo("/dwf-m5-desafio/resultado");
            
            resultTimer --;
        }, 2000);
        
        if (resultTimer === 0) {
            clearTimeout(goToResult);
        }
        console.log(goToResult);

        
        tiempoLimite --;
    }, 3000);
    
    return playContainer;
}