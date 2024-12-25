const express = require("express");
const router = express.Router();

// Sample student data
const students = [
  {
    student_id: "1",
    name: "Alice Johnson",
    marks: { math: 85, science: 90, english: 78, history: 88, geography: 92 },
    total: 433,
  },
  {
    student_id: "2",
    name: "Bob Smith",
    marks: { math: 80, science: 85, english: 75, history: 85, geography: 85 },
    total: 410,
  },
  {
    student_id: "3",
    name: "Charlie Davis",
    marks: { math: 60, science: 65, english: 70, history: 60, geography: 72 },
    total: 327,
  },
  // Add more students as needed
];

// POST /students/above-threshold endpoint
router.post("/above-threshold", (req, res) => {
  const { threshold } = req.body; // Get the threshold from the request body

  // Validate the input
  if (typeof threshold !== "number") {
    return res.status(400).json({ error: "Threshold must be a number" });
  }

  // Filter students who have a total greater than the threshold
  const filteredStudents = students.filter(
    (student) => student.total > threshold
  );

  // Send the response with the count and the list of students
  return res.json({
    count: filteredStudents.length,
    students: filteredStudents.map(({ name, total }) => ({ name, total })),
  });
});

module.exports = router;
