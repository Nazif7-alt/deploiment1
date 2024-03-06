// Get all the section elements
let sections = document.getElementsByTagName("section");

// Add a click event listener to each section
for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener("click", function () {
    // Hide all the sections
    for (let j = 0; j < sections.length; j++) {
      sections[j].style.display = "none";
    }

    // Show the clicked section
    this.style.display = "block";
  });
}

// Add a click event listener to the math link
document.getElementById("math").getElementsByTagName("a")[0].addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default behavior of the link
  document.getElementById("math").click(); // Simulate a click on the math section
});

// Add a click event listener to the science link
document.getElementById("science").getElementsByTagName("a")[0].addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default behavior of the link
  document.getElementById("science").click(); // Simulate a click on the science section
});

// Add a click event listener to the history link
document.getElementById("history").getElementsByTagName("a")[0].addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default behavior of the link
  document.getElementById("history").click(); // Simulate a click on the history section
});

// Add a click event listener to the english link
document.getElementById("english").getElementsByTagName("a")[0].addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default behavior of the link
  document.getElementById("english").click(); // Simulate a click on the english section
});