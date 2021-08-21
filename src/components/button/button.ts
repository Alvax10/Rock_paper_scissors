export function buttonComp() {

    customElements.define("button-comp", class extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({ mode: 'open'});
            const style = document.createElement("style");
            const div = document.createElement("div");

            div.innerHTML = `
            <button></button>
            `;

            style.innerHTML = `
                .button {
                    display: flex;
                    overflow: auto;
                    color: #D8FCFC;
                    font-size: 45px;
                    margin: 80px 20px;
                    padding: 18px 90px;
                    align-items: center;
                    border-radius: 10px;
                    justify-content: center;
                    background-color: #006CFC;
                    border: 10px solid #001997;
                    font-family: 'Odibee Sans', cursive;
                }
                @media(min-width: 801px) {
                    .button {
                        width: 312px;
                        overflow: auto;
                        margin: 10px 0px 50px 0;
                    } 
                }
                @media(max-width: 800px) {
                    .button {
                        overflow: auto;
                        margin: 39px 20px;
                    } 
                }
                @media(max-width: 800px) {
                    .result-button {
                        font-size: 32px;
                        overflow: auto;
                        margin: 39px 20px;
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