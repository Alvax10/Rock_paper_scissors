
export function textComp() {

    customElements.define("text-comp", class extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({ mode: 'open'});
            const style = document.createElement("style");
            const div = document.createElement("div");

            style.innerHTML = `
            .title {
                width: 300px;
                color: #009048;
                font-size: 80px;
                font-weight: bold; 
                margin: 80px 0px 0px 40px;
            }
            @media(min-width: 800px) {
                .title {
                    width: 400px;
                    font-size: 95px;
                    margin: 50px 20px 40px 90px;
                }
            }
            .body {
                color: #000;
                width: 317px;
                height: 240px;
                margin: 30px 0;
                font-size: 40px;
                text-align: center;
            }
            @media (min-width: 790px) {
                .body {
                    margin: 50px 0;
                }
            }
            `;
            
            div.className = variant;
            div.textContent = this.textContent;
            
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    });
}