export default function styles(...styles) {
    return styles.reduce(function (result, currentObject) {
        for (const key in currentObject) {
            if (currentObject.hasOwnProperty(key)) {
                result[key] = currentObject[key];
            }
        }
        return result;
    }, {});
}