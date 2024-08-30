import { createElement } from "../../utils/createElement.js";
import { Header } from "./Header/Header.js";
import { Main } from "./Main/Main.js";

export function App() {
    const container = createElement("div", "App")

    container.append(
        Header(),
        Main()
    )
    return container;
}


