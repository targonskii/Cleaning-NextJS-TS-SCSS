import { TranslateType } from "../types";

export const objectToArrayWithoutTitle = (obj: TranslateType): string[] => {
    const keys = Object.keys(obj);
    return keys.filter((key) => key !== "title").map((key) => obj[key]);
};
