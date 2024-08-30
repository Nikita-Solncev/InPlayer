export function AddPlaylistPanel() {
    const container = document.createElement("div");
    container.classList.add("add-playlist-panel")

    const titleElement = document.createElement("h1");
    titleElement.classList.add("title");
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("button");

    titleElement.innerText = "My playlists";
    buttonElement.innerText = "Add Playlist";

    container.append(titleElement, buttonElement);
     
    return container;
}