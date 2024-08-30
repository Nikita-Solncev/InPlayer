import { data } from "../../../../data/data.js";
import { AddPlaylistPanel } from "./AddPlaylistPanel/AddPlaylistPanel.js";
import { Playlists } from "./Playlists/Playlists.js"

export function Main() {
    const mainElement = document.createElement("Main");
    mainElement.append(AddPlaylistPanel(), Playlists(data["playlists"]))
    return mainElement;
}