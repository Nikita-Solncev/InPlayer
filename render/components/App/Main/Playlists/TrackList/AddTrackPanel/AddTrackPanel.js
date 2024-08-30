export function AddTrackPanel() {
    const container = document.createElement("div");
    container.classList.add("add-track-panel");

    const tracklistTitle = document.createElement("h3");
    tracklistTitle.classList.add("tracklist-title");
    tracklistTitle.innerText = "Tracks";

    const buttonAddTrack = document.createElement("button");
    buttonAddTrack.classList.add("button-add-track")
    buttonAddTrack.innerText = "Add Track";

    const image = document.createElement("img");
    image.src = "img/icons/add.svg";
    image.alt = "add";

    buttonAddTrack.append(image)

    container.append(tracklistTitle, buttonAddTrack);
    return container;
}