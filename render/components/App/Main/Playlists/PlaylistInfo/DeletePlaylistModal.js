import { deletePlaylist } from "../../../../../../data/data.js";

export function DeletePlaylistModal(playlistId) {
    const dialogElement = document.createElement("dialog");

    dialogElement.id = "modalDelete";
    dialogElement.class = "modalDelete"
    
    const headingElement = document.createElement("h2");
    headingElement.innerText = "Delete Playlist";

    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = "Are you sure you want to delete this Playlist?";


    const buttonCancelElement = document.createElement("button");
    buttonCancelElement.type = "button"
    buttonCancelElement.innerText = "Cancel"
    buttonCancelElement.id = "dialog-button-cancel";
    buttonCancelElement.addEventListener (
        "click", ()=>{
            dialogElement.close()
        }
    )

    const buttonDeleteElement = document.createElement("button");
    buttonCancelElement.type = "button"
    buttonCancelElement.innerText = "Delete"
    buttonCancelElement.id = "dialog-button-delete";
    buttonCancelElement.addEventListener (
        "click", ()=>{
            deletePlaylist(playlistId)
            dialogElement.close();
        }
    )
    

    dialogElement.append(headingElement, paragraphElement, buttonCancelElement, buttonDeleteElement);
    document.body.append(dialogElement)

    return dialogElement;
}