import NameUrl from "./NameUrl";

export default interface CharacterResult {
    "id": number;
    "name": string;
    "status": string; //TODO --> Convert to Enum
    "species": string;
    "type": string;
    "gender": string; ///todo --> Convert to Enum
    "origin": NameUrl;
    "location": NameUrl;
    "image": string; //TODO Convert to URL
    "episode": string[]; //TODO Convert to URL[]
    "url": string; //TODO Convert to URL
    "created": string; //TODO --> Convert to DateTime
}

