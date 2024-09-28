export function AddPlaylistButton() {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("button");
    buttonElement.innerText = "Add Playlist";

    return buttonElement;
}