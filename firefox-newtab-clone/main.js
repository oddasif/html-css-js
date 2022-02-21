/* taking input in the search box/bar*/
document.querySelector("#searchbox").addEventListener('keyup', function(e) {
    var input = document.querySelector("#searchbox").value;
    if(e.which === 13) {
        showResults(input);
    }
});


/* processing google search query & displaying results */
function showResults(input) {
    var searchTerm = input.replace(" ", "+");
    var url = "https://google.com/search?q=" + searchTerm;
    window.open(`${url}`, "_self");
}


// Function to empty the search box text on refresh or on revisiting
window.onload = function() {
    document.getElementById("searchbox").value="";
}