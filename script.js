let placeholder = ["*raises right hand*", "traralarara~", "*instant falling asleep*", "*becomes prensayitas*"];

function search() {
    const results = document.getElementById("results");
    results.innerHTML = ""; // empty (previous) results
    const currentValue = document.getElementById("searchbar").value.toLowerCase();  
    if (currentValue === "") {
        results.innerHTML = ""; 
    }
    else {
        placeholder
            .filter(e => e.toLowerCase().includes(currentValue))
            .forEach(element => {
                const dictEntry = results.insertRow().insertCell();
                dictEntry.innerHTML = element || "";
            });
    }
}