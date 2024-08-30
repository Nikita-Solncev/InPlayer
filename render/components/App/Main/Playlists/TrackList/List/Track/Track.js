import { createElement } from "../../../../../../../utils/createElement.js";

export function Track(track) {
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
