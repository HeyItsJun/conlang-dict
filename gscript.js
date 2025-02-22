/* PARAMETERS */
const relDataPath = "./data.json"; // defines where the file is located
const tableId = "results"; // defines the id used to refer to the output table
const searchBarId = "searchbar"; // defines the id used to refer to the search bar
const selectorId = "selector"; // defines de id used in the selector in glossary
/* ---------- */

let entries = [];
fetch(relDataPath)
    .then(response => response.json())
    .then(data => load(entries = data))
    .catch(error => console.error(error));

function load(data) {
    const table = document.getElementById(tableId);
    table.innerHTML = ""; // empty (previous) results
    data.forEach(entry => table.insertRow().insertCell().innerHTML = toString(entry));
}

function gsearch() {
    const field = document.getElementById(selectorId).value;
    const input = document.getElementById(searchBarId).value;
    load(
        input === "" ? entries
            : entries.filter(entry => (entry[field] || "")
                .toLowerCase()
                .includes(input.toLowerCase())
            )
    );
}

/* returns a string containing the format that an entry should have */
function toString(entry) {
    return [entry.word, "meaning: ", entry.description, "english: ", entry.engtl, "categ: ", entry.categ].join("<br>");
}