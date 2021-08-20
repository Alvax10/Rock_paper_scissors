type jugada = "piedra" | "papel" | "tijera";
type resultado = "usuarioGana" | "compuGana" | "empate";

const state = {
    data: {
        esteJuego: {
            miMovimiento: "none",
            movimientoCompu: "none",
        },

        historial: {
            usuarioGana: 0, 
            compuGana: 0,
        },
    },
    listeners: [],
    init() {
        const localData = JSON.parse(localStorage.getItem("games-data"));
        if (!localData) {
            return;
        }
        this.setState(localData);
    },
    getState() {
        return this.data;
    },
    setState(newState) {
        this.data = newState;
        localStorage.setItem("games-data", JSON.stringify(this.data));
        
        for (const cb of this.listeners) {
            cb();
        }
    },
    setMove(elegir: jugada, jugador: "jugadaCompu" | "jugadaUsuario") {
        
        const currentState = this.getState();
        currentState.esteJuego[jugador] = elegir;
        
        this.setState(currentState);
    },
    getCurrentGame() {
        const currentState = this.getState();
        return currentState.esteJuego;
    },
    restartGame() {
        const currentState = this.getState();

        currentState.esteJuego.miMovimiento = "none";
        currentState.esteJuego.movimientoCompu = "none";

        this.setState(currentState);
    },
    tenerResultado(jugadaUsuario: jugada, jugadaCompu: jugada) {

        const usuarioGana = [
            jugadaUsuario === "piedra" && jugadaCompu === "tijera",
            jugadaUsuario === "papel" && jugadaCompu === "piedra",
            jugadaUsuario === "tijera" && jugadaCompu === "papel",
        ].includes(true);

        const compuGana = [
            jugadaCompu === "piedra" && jugadaUsuario === "tijera",
            jugadaCompu === "papel" && jugadaUsuario === "piedra",
            jugadaCompu === "tijera" && jugadaUsuario === "papel",
        ].includes(true);

        let resultadoDelJuego: resultado;

        if (usuarioGana) {
            resultadoDelJuego = "usuarioGana";
        } else if (compuGana) {
            resultadoDelJuego = "compuGana";
        } else {
            resultadoDelJuego = "empate";
        }

        return resultadoDelJuego;
    },
    cambiarHistorial(resultadoDelJuego: resultado) {
        const currentState = this.getState();

        if (resultadoDelJuego === "usuarioGana") {
            currentState.historial.usuarioGana ++;
        } else if (resultadoDelJuego === "compuGana") {
            currentState.historial.compuGana ++;
        }

        this.setState(currentState);
    },
}

export { state, jugada };  