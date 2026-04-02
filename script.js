// ==========================
// Part 1: Date Display
// ==========================

// Create date object
const currentDate = new Date();

// Get parts of date
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const year = currentDate.getFullYear();

// Format message
const dateMessage = "Today is " + month + "/" + day + "/" + year;

// Display on page
document.getElementById("dateOutput").textContent = dateMessage;