export function DeletePlaylistModal(event) {
    const dialogElement = document.createElement("dialog");

    dialogElement.open = true;
    dialogElement.id = "dialogDelete";
    
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
            try {
            dialogElement.close();
            } catch (error) {
                console.error("Error closing dialog:", error);
        }
        }
    )

    const buttonDeleteElement = document.createElement("button");
    buttonDeleteElement.innerText = "Delete"
    buttonDeleteElement.id = "dialog-button-delete";
    
    

    dialogElement.append(headingElement, paragraphElement, buttonCancelElement, buttonDeleteElement);
    document.body.append(dialogElement)

}