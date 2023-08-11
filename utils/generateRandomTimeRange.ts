export const generateRandomTimeRange = (index: number): string | null => {
    if (index % 3 === 0) {
        return Math.random() < 0.7 ? "08-10" : null;
    } else if (index % 3 === 1) {
        return Math.random() < 0.7 ? "14-16" : null;
    } else {
        return Math.random() < 0.7 ? "20-22" : null;
    }
};
