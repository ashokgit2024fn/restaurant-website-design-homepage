var button = document.querySelector("ul button");

function toggleColorScheme() {
    var body = document.body;
    var part1 = document.querySelector(".part1"); // Selecting the part1 element
    if (body.style.backgroundColor === "black") {
        // Switch to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        part1.style.backgroundColor = ""; // Resetting part1 background color
    } else {
        // Switch to dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        part1.style.backgroundColor = ""; // Resetting part1 background color
    }
}

// Call the function when the button is clicked
button.addEventListener("click", toggleColorScheme);
