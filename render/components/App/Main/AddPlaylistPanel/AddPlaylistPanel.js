import { AddPlaylistButton } from "./AddPlaylistButton/AddPlaylistButton.js";

export function AddPlaylistPanel() {
    const container = document.createElement("div");
    container.classList.add("add-playlist-panel")

    const titleElement = document.createElement("h1");
    titleElement.classList.add("title");

    titleElement.innerText = "My playlists";

    container.append(titleElement, AddPlaylistButton());
     
    return container;
}