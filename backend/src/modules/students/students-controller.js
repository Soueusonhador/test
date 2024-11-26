const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents();
    res.status(200).json(students);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
        res.status(400);
        throw new Error("All fields are required: name, age, course.");
    }

    const newStudent = await addNewStudent({ name, age, course });
    res.status(201).json(newStudent);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, age, course } = req.body;

    if (!id) {
        res.status(400);
        throw new Error("Student ID is required.");
    }

    const updatedStudent = await updateStudent(id, { name, age, course });
    if (!updatedStudent) {
        res.status(404);
        throw new Error("Student not found.");
    }

    res.status(200).json(updatedStudent);
});


const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        res.status(400);
        throw new Error("Student ID is required.");
    }

    const student = await getStudentDetail(id);
    if (!student) {
        res.status(404);
        throw new Error("Student not found.");
    }

    res.status(200).json(student);
});


const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!id || typeof status === "undefined") {
        res.status(400);
        throw new Error("Student ID and status are required.");
    }

    const updatedStatus = await setStudentStatus(id, status);
    if (!updatedStatus) {
        res.status(404);
        throw new Error("Student not found.");
    }

    res.status(200).json(updatedStatus);
});


module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
