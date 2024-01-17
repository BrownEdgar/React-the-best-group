

export default function useRandom(count, type, font) {
    const arr = [];
    if (typeof(type) === "number") {
        for (let i = 0; i < count; i++) {
            arr[i] = Math.round(Math.random()*1000);
        }
        return arr;
    } else if (typeof(type) === "string" && font === "lower") {
        const characters = "abcdefghijklmnopqrstuvwxyz";
        for(let i = 0; i < count; i++) {
            arr[i] = characters.charAt(Math.floor(Math.random()*characters.length));
        }
        return arr;
    } else if (typeof(type) === "string" && font === "upper") {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(let i = 0; i < count; i++) {
            arr[i] = characters.charAt(Math.floor(Math.random()*characters.length));
        }
        return arr;
    }
}