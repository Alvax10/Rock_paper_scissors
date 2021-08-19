import { state } from "./state";
import { initRouter } from "./router";
import { textComp } from "./components/text/text";
import { handsComp } from "./components/hands/hands-comp";
import { buttonComp } from "./components/button/button";

(function() {
    state.init();
    textComp();
    buttonComp();
    handsComp();

    const root = document.getElementById("root");
    initRouter(root);
})();