const table = document.getElementById("results");
const input = document.getElementById("searchbar");
const selector = document.getElementById("selector");

document.getElementById("mainPageBtn").addEventListener("click", () => window.open("index.html", "_self")); // volver a index
document.getElementById("wsystemsBtn").addEventListener("click", () => window.open("wsystems.html", "_self"));

window.addEventListener("load", () => {
    loadTable();
    input.focus();
});
input.addEventListener("keyup", () => loadTable());
selector.addEventListener("mousedown", () => input.focus());

function loadTable() {
    table.innerHTML = "";
    const filteredEntries = input.value.trim() !== "" ? entries.filter(entry => (entry[selector.value] || "").toLowerCase().startsWith(input.value.trim())) : entries;
    filteredEntries.sort((entry1, entry2) => entry1.word.localeCompare(entry2.word, "en")); // orden alfabético
    // console.log(filteredEntries);
    if (filteredEntries.length === 0) {
        table.insertRow().insertCell().innerHTML = "No entries matching \"" + input.value.trim() + "\" found.";
    } else {
        filteredEntries.forEach(entry => {
            table.insertRow().insertCell().innerHTML = format(entry);
        });
    }
}

function format(entry) {
    const format = document.createElement("div");

    addElement("h3", capitalizeFirst(entry.word), format);
    addElement("p", capitalizeFirst(entry.description), format);
    addElement("b", "English translation: ", format);
    addElement("i", entry.engtl, format);
    format.appendChild(document.createElement("br"));
    addElement("b", "Category: ", format);
    addElement("small", capitalizeFirst(entry.categ), format);
    format.appendChild(document.createElement("br"));
    format.appendChild(document.createElement("br"));

    return format.innerHTML;
}

function capitalizeFirst(str) {
    try {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } catch (error) {
        return "";
    }
}

function addElement(element, textContent, dest) {
    const child = document.createElement(element);
    child.textContent = textContent;
    dest.appendChild(child);
}