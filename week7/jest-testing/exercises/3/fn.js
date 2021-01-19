module.exports = function fn(str) {
    if (Array.isArray(str)) {
        for (let i = 0; i < str.length; i++) {
            if (typeof str[i] === "string") {
                str[i] = str[i].split("").reverse().join("");
            } else if (typeof str[i] !== "string") {
                str[i] = null;
            }
        }
        return str;
    } else if (!Array.isArray(str)) {
        if (typeof str === "string") {
            const result = str.split("").reverse().join("");
            return result;
        } else if (typeof str !== "string" || !Array.isArray(str)) {
            return null;
        }
    }
};
