import { DeletePlaylistModal } from "./DeletePlaylistModal.js";

export function PlaylistInfo(playlist) {
    const container = document.createElement("div");
    container.classList.add("playlist-info");

    const playlistCoverElement = document.createElement("img");
    playlistCoverElement.classList.add("playlist-cover-image");
    playlistCoverElement.src = playlist["playlistInfo"]["coverImgUrl"];
    playlistCoverElement.alt = "cover";

    const divElement1 = document.createElement("div");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("title");
    titleElement.innerText = playlist["playlistInfo"]["title"];
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("tracks-count")
    innerDiv.innerText = playlist["tracks"].length + " tracks";

    divElement1.append(titleElement, innerDiv);

    const divElement2 = document.createElement("div");

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const button1 = document.createElement("button");
    const button1Img = document.createElement("img");
    button1Img.classList.add("button-icon");
    button1Img.src = "img/icons/edit.svg";
    button1Img.alt = "edit";
    button1.append(button1Img)

    const buttonDelete = ButtonDelete()

    buttonsContainer.append(button1, buttonDelete)

    divElement2.append(buttonsContainer)

    container.append(playlistCoverElement, divElement1, divElement2)
    
    return container;
}

function ButtonEdit() {
    return;
};

function ButtonDelete() {
    const buttonElement = document.createElement("button");
    const modal = DeletePlaylistModal()
    buttonElement.addEventListener("click", () => {
        modal.showModal()
    }
    )

    const imageElement = document.createElement("img"); 
    imageElement.classList.add("button-icon");
    imageElement.src = "img/icons/basket.svg";
    imageElement.alt = "delete";

    buttonElement.append(imageElement)

    return buttonElement;
}