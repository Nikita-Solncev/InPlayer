import { App } from "./components/App/App.js";

export function render(data) {
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.append(
        App(data)
    );
    console.log(data)
};