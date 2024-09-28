function AddPlaylistForm() {
    const formElement = document.createElement("form");
    
    const LabelPlaylistNameElement = document.createElement("label");
    LabelPlaylistNameElement.innerText = "Playlist Name:";

    const InputNameElement = document.createElement("input");
    InputNameElement.type = "text";
    InputNameElement.placeholder = "Playlist Name";
    InputNameElement.required = true;
    LabelPlaylistNameElement.append(InputNameElement);

    const InputImageElement = document.createElement("input");
    InputImageElement.type = "file";
    InputImageElement.accept = "image";
    InputImageElement.required = true;
    LabelPlaylistNameElement.append(InputImageElement);

    const buttonElement = document.createElement("button");
    buttonElement.type = "submit";

    formElement.append(LabelPlaylistNameElement, buttonElement);

    return AddPlaylistForm;
}