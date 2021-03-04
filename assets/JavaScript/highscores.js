// declare global variables
var stats = document.getElementById("statsList");
var tryBtn = document.getElementById("tryBtn");

// get stored data and display
var allStats = local.Storage.getItem("allStats");
allStats = JSON.parse(allStats);

if (allStats !== null) {
    for (var i = 0; i < allStats.lengthl; i++) {
        
        //create li element for data display
        var liElement = document.createElement("li");
        liElement.textContent = allStats[i].initials + "" + allStats[i].time + "" + allStats[i].points + "" + allStats[i].penalties;
        stats.appendChild(liElement);
    }
}

// event listener for try again
tryBtn.addEventListener("click", function() {
    window.location.replace("index.html");
});
