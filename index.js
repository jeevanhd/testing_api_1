// API: Retrieve Students Above Threshold
// ---------------------------------------
// Task:
// Implement an API to fetch students whose total marks exceed a given threshold.
//
// Endpoint:
// POST /students/above-threshold
//
// Request Body:
// {
//   "threshold": <number>
// }
//
// Response:
// Success: List of students with their names and total marks who meet the criteria.
// Example:
// {
//   "count": 2,
//   "students": [
//     { "name": "Alice Johnson", "total": 433 },
//     { "name": "Bob Smith", "total": 410 }
//   ]
// }
//
// No Matches:
// {
//   "count": 0,
//   "students": []
// }
//
// Purpose:
// Help teachers retrieve and analyze student performance efficiently.

const express = require("express");
const { resolve } = require("path");
const studentsRoute = require("./routes/student.js");

const app = express();
const port = 3010;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "static" folder
app.use(express.static("static"));

// Serve the index.html page
app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

// Use the route for student-related API
app.use("/students", studentsRoute); // Corrected route path

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
