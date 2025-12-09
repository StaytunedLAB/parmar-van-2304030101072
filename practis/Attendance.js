try {
    let employee = "Rohit";
    
    // Attendance records
    let attendanceList = ["Present", "Absent", "Late", "Present", "Present"];

    let present = 0;
    let absent = 0;
    let late = 0;

    attendanceList.forEach(status => {
        if (status === "Present") present++;
        else if (status === "Absent") absent++;
        else if (status === "Late") late++;
        else throw new Error("Invalid attendance value: " + status);
    });

    console.log("Employee:", employee);
    console.log("Total Days:", attendanceList.length);
    console.log("Present:", present);
    console.log("Absent:", absent);
    console.log("Late:", late);

} catch (err) {
    console.log("❌ Error:", err.message);
}
