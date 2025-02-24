const fields = ["word", "description", "engtl"];

const table = document.getElementById("results");
const input = document.getElementById("searchbar");

document.getElementById("glossaryBtn").addEventListener("click", () => window.open("glossary.html", "_self"));
document.getElementById("wsystemsBtn").addEventListener("click", () => window.open("wsystems.html", "_self"));

window.addEventListener("load", () => input.focus());
input.addEventListener("keyup", () => loadTable());

function loadTable() {
    table.innerHTML = "";
    if (input.value.trim() !== "") {
        table.style.display = "";
        const filteredEntries = [...new Set(entries.filter(entry => fields.some(field => (entry[field] || "").toLowerCase().includes(input.value.trim().toLowerCase()))))];
        if (filteredEntries.length === 0) {
            table.insertRow().insertCell().innerHTML = "No entries matching \"" + input.value.trim() + "\" found.";
        }
        filteredEntries.forEach(entry => {
            table.insertRow().insertCell().innerHTML = format(entry);
        });
    } else {
        table.style.display = "none";
    }
}

function format(entry) {
    return [entry.word, "meaning: ", entry.description, "english: ", entry.engtl, "category: ", entry.categ].join("<br>");
}