export default function elementFromString(elementString) {
    let tempEl = document.createElement("div");
    tempEl.innerHTML = elementString;
    return tempEl.firstElementChild;
};