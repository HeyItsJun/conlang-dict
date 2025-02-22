/* PARAMETERS */
const relDataPath = "./data.json"; // defines where the file is located
const tableId = "results"; // defines the id used to refer to the output table
const searchBarId = "searchbar"; // defines the id used to refer to the search bar
const fieldToSearchBy = "word"; // defines the JSON field for entry filtering
/* ---------- */

let entries = null;
fetch(relDataPath)
    .then(response => response.json())
    .then(data => dsearch(entries = data))
    .catch(error => console.error(error));

function load(data) {
    const table = document.getElementById(tableId);
    table.innerHTML = ""; // empty (previous) results
    data.forEach(entry => table.insertRow().insertCell().innerHTML = toString(entry));
}

function dsearch() {
    const input = document.getElementById(searchBarId).value;
    load(input !== "" ? entries.filter(entry => (entry[fieldToSearchBy] || "")
        .toLowerCase()
        .includes(input.toLowerCase())) : []);
}

/* returns a string containing the format that an entry should have */
function toString(entry) {
    return [entry.word, "meaning: ", entry.description, "english: ", entry.en_translation, "tags: ", entry.tags].join("<br>");
}