import { PlaylistInfo } from "./PlaylistInfo/PlaylistInfo.js";
import { Tracklist } from "./TrackList/TrackList.js";

export function Playlists(playlist) {
    const container = document.createElement("div");
    container.classList.add("playlists")

    for (let index = 0; index < playlist.length; index++) {
        const articleElement = document.createElement("article");
        articleElement.classList.add("playlist");

        const tracks = playlist[index]["tracks"]
        articleElement.append(PlaylistInfo(playlist[index]), Tracklist(tracks))

        container.append(articleElement)
    }  

    return container;
}