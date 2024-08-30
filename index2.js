import { data } from "./data/data.js";

function createElement(tagName, className){
    const element = document.createElement(tagName);
    element.classList.add(className)
    return element;
}


function App() {
    const container = createElement("div", "App")

    container.append(
        Header(),
        Main()
    )
    return container;
}


function Header() {
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


function Main() {
    const mainElement = document.createElement("Main");
    mainElement.append(AddPlaylistPanel(), Playlists(data["playlists"]))
    return mainElement;
}


function AddPlaylistPanel() {
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


function Playlists(playlist) {
    const container = createElement("div");
    container.classList.add("playlists")

    for (let index = 0; index < playlist.length; index++) {
        const articleElement = createElement("article");
        articleElement.classList.add("playlist");

        const tracks = playlist[index]["tracks"]
        articleElement.append(PlaylistInfo(playlist[index]), Tracklist(tracks))

        container.append(articleElement)
    }  

    return container;
}


function PlaylistInfo(playlist) {
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
    innerDiv.innerText = playlist   ["tracks"].length + " tracks";

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

    const button2 = document.createElement("button");
    const button2Img = document.createElement("img");
    button2Img.classList.add("button-icon");
    button2Img.src = "img/icons/basket.svg";
    button2Img.alt = "delete";
    button2.append(button2Img)

    buttonsContainer.append(button1, button2)

    divElement2.append(buttonsContainer)

    container.append(playlistCoverElement, divElement1, divElement2)
    
    return container;
}


function Tracklist(tracks) {
    const container = document.createElement("div");
    container.classList.add("tracklist");

    container.append(AddTrackPanel(), List(tracks))
    return container;
}


function AddTrackPanel() {
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


function List(tracks) {
    const container = createElement("ul", "list");
    for (let index = 0; index < tracks.length; index++) {
        container.append(Track(tracks[index]));
        
    }
    return container;
}


function Track(track) {
    const container = createElement("li", "track-element");

    const trackCover = createElement("img", "track-cover-image");
    trackCover.src = track["trackCoverImgUrl"];
    trackCover.alt = "track-cover";


    const trackDetails = createElement("div", "track-details");

    const trackTopLine = createElement("div", "track-top-line");

    const trackStatus = createElement("img", "track-status");
    trackStatus.src = "img/icons/hot.svg";
    trackStatus.alt = "hot";

    const trackInfo = createElement("div", "track-info");

    const trackName = createElement("div", "track-name");
    trackName.innerText = track["trackTitle"];

    const buttonsContainer = createElement("div", "buttons-container");

    const buttonEdit = document.createElement("button");
    const buttonEditIcon = createElement("img", "button-icons");
    buttonEditIcon.src = "img/icons/edit.svg";
    buttonEditIcon.alt = "edit";
    buttonEdit.append(buttonEditIcon)

    const buttonDelete = document.createElement("button");
    const buttonDeleteIcon = createElement("img", "button-icons");
    buttonDeleteIcon.src = "img/icons/basket.svg";
    buttonDeleteIcon.alt = "delete";
    buttonDelete.append(buttonDeleteIcon)


    buttonsContainer.append(buttonEdit, buttonDelete)

    trackInfo.append(trackName, buttonsContainer);    

    trackTopLine.append(trackStatus, trackInfo);

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = track["trackFileUrl"]

    trackDetails.append(trackTopLine, audio)
    container.append(trackCover, trackDetails)

    return container;
}


