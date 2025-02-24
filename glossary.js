const table = document.getElementById("results");
const input = document.getElementById("searchbar");
const selector = document.getElementById("selector");

document.getElementById("mainPageBtn").addEventListener("click", () => window.open("index.html", "_self"));
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
    if (filteredEntries.length === 0) {
        table.insertRow().insertCell().innerHTML = "No entries matching \"" + input.value.trim() + "\" found.";
    } else {
        filteredEntries.forEach(entry => {
            table.insertRow().insertCell().innerHTML = format(entry);
        });
    }
}

function format(entry) {
    return [entry.word, "meaning: ", entry.description, "english: ", entry.engtl, "category: ", entry.categ].join("<br>");
}