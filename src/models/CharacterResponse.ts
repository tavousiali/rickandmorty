import CharacterResult from "./CharacterResult";
import Info from "./Info";

export default interface CharacterResponse {
    info: Info;
    results: CharacterResult[];
}

