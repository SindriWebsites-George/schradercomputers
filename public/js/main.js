// Side navigation 
var open = 0;

function toggleNav() {

    if (open == 0) {
        $(".sideBar").css("display", "block");
        open++;
        // console.log("I am open.", open)
        return open;
    } else {
        open--;
        // console.log("I am closed.", open)
        $(".sideBar").css("display", "none");
        return open;
    }
}

// Google Map Function
function initMap() {
    var location =
}