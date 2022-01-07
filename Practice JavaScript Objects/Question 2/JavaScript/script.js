var students = {
    name: "Joe Smith",
    grade: 8,
    studentId: 32,
    homeschool: "Lincoln Middle School",
    program: "Math",
    displayInfo: function() {
        console.log("Name: " + this.name);
        console.log("Grade: " + this.grade);
        console.log("Student ID: " + this.studentId);
        console.log("Homeschool: " + this.homeschool);
        console.log("Program: " + this.program);
    }
};

students.displayInfo();