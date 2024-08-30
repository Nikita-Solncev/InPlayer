import { Track } from "./Track/Track.js";
import { createElement } from "../../../../../../utils/createElement.js";

export function List(tracks) {
    const container = createElement("ul", "list");
    for (let index = 0; index < tracks.length; index++) {
        container.append(Track(tracks[index]));
        
    }
    return container;
}