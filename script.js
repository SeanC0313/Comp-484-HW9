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

// ==========================
// Part 2: Number Conversion
// ==========================

// Create values
const v1 = "42";
const v2 = "19.75";
const v3 = "hello";
const v4 = "100";

// Convert values
const c1 = Number(v1);
const c2 = Number(v2);
const c3 = Number(v3);
const c4 = Number(v4);

// Check values
const isNaN1 = Number.isNaN(c1);
const isNaN2 = Number.isNaN(c2);
const isNaN3 = Number.isNaN(c3);
const isNaN4 = Number.isNaN(c4);

const isInteger1 = Number.isInteger(c1);
const isInteger2 = Number.isInteger(c2);
const isInteger3 = Number.isInteger(c3);
const isInteger4 = Number.isInteger(c4);

// Create result strings
const r1 = "Original: \"" + v1 + "\" | Converted: " + c1 + " | isNaN: " + isNaN1 + " | isInteger: " + isInteger1;
const r2 = "Original: \"" + v2 + "\" | Converted: " + c2 + " | isNaN: " + isNaN2 + " | isInteger: " + isInteger2;
const r3 = "Original: \"" + v3 + "\" | Converted: " + c3 + " | isNaN: " + isNaN3 + " | isInteger: " + isInteger3;
const r4 = "Original: \"" + v4 + "\" | Converted: " + c4 + " | isNaN: " + isNaN4 + " | isInteger: " + isInteger4;

// Display results
const conversionOutput = "<p>" + r1 + "</p><p>" + r2 + "</p><p>" + r3 + "</p><p>" + r4 + "</p>";
document.getElementById("numberConversionOutput").innerHTML = conversionOutput;

