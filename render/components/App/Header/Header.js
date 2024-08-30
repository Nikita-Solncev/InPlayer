import { createElement } from "../../../utils/createElement.js";

export function Header() {
    const headerElement = document.createElement("header");
    const container = createElement("div", "header-container");

    const imageElement = document.createElement("img");
    imageElement.src = "img/logo/logo.svg";
    imageElement.alt = "logo";

    const logoNameElement = document.createElement("div");
    logoNameElement.classList.add("logo-name");
    logoNameElement.innerText = "InPlayer";

    container.append(imageElement, logoNameElement);
    headerElement.append(container);

    return headerElement;
}
