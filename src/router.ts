import { initHomePage } from "./pages/home";
import { initinstruccionesPage } from "./pages/instrucciones";
import { initPlayPage } from "./pages/play-page";
import { initResultadoPage } from "./pages/results";


export function initRouter(container: Element) {
    
    const routes = [
        {
            path: /\/dwf-m5-desafio\/welcome/,
            component: initHomePage,
        },
        {
            path: /\/dwf-m5-desafio\/instrucciones/,
            component: initinstruccionesPage,
        },
        {
            path: /\/dwf-m5-desafio\/jugar/,
            component: initPlayPage,
        },
        {
            path: /\/dwf-m5-desafio\/resultado/,
            component: initResultadoPage,
        },
    ]
    
    function goTo (path){
        history.pushState({}, "", path);
        handleRoute(path);
    }
    
    /* recibe una ruta y la compara con todas las rutas del array, pregunta y compara con la ruta que le pasamos, si matchea ejecuta la function del component*/
    function handleRoute(route) {
        
        for (const r of routes) {
            if (r.path.test(route)) {
                
                const el = r.component({ goTo: goTo });

                if (container.firstChild) {
                    container.firstChild.remove();
                }

                container.appendChild(el);
            }
        }
    }

    if (location.host.includes("github.io") || "/") {
        goTo("/dwf-m5-desafio/welcome");
    } else {
        handleRoute(location.pathname);
    }

    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}