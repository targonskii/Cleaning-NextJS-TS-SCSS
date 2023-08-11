import { TranslateType } from "../types";

export const imageDescriptionArray = (
    imageDescription: TranslateType
): [string, string][] => {
    return Object.entries(imageDescription).map(([room, description]) =>
        description.includes(room)
            ? [room, description.replace(`${room}`, "")]
            : ["", description]
    );
};
