// ========================================================
//     EMPLOYEE ATTENDANCE PROCESSING SYSTEM - TASK 2
// ========================================================

// ----------------------------
// SAMPLE INPUT (modifiable)
// ----------------------------
const inputData = {
    employeeId: "EMP1022",
    date: "2025-06-21",
    checkIn: "08:30",
    checkOut: "17:45",
    break: {
        start: "13:00",
        end: ""          // Missing => default 30 mins
    },
    overtimeApproved: true
};


// ========================================================
//            DO NOT MODIFY ORIGINAL INPUT
// ========================================================
const data = JSON.parse(JSON.stringify(inputData));


// ==============================
//   HELPER: Convert HH:MM to minutes
// ==============================
function toMinutes(timeStr) {
    if (!timeStr) return null;
    const parts = timeStr.split(":");
    if (parts.length !== 2) return null;

    const h = Number(parts[0]);
    const m = Number(parts[1]);

    if (isNaN(h) || isNaN(m)) return null;

    return h * 60 + m;
}



// ========================================================
//      MAIN FUNCTION: PROCESS ATTENDANCE
// ========================================================
function processAttendance(input) {
    let summary = {
        employeeId: input.employeeId || null,
        date: input.date || null,
        status: "complete",
        totalWorkingMinutes: 0,
        overtimeMinutes: 0,
        note: "",
        error: null
    };

    try {
        // ----------------------------------
        // Required: check-in and check-out
        // ----------------------------------
        const checkInMins = toMinutes(input.checkIn);
        const checkOutMins = toMinutes(input.checkOut);

        if (checkInMins === null || checkOutMins === null) {
            summary.status = "incomplete";
            summary.note = "Missing or invalid check-in/check-out";
            summary.totalWorkingMinutes = 0;
            return summary;
        }

        // ----------------------------------
        // Break handling
        // ----------------------------------
        let breakDuration = 0;

        if (input.break) {
            const start = toMinutes(input.break.start);
            const end = toMinutes(input.break.end);

            if (start !== null && end !== null) {
                breakDuration = end - start;
                if (breakDuration < 0) breakDuration = 0; // Safety
            } else {
                // Missing break end → default = 30 minutes
                breakDuration = 30;
            }
        }

        // ----------------------------------
        // Calculate working minutes
        // ----------------------------------
        let working = (checkOutMins - checkInMins) - breakDuration;

        if (working < 0) {
            summary.status = "invalid";
            summary.note = "Working time resulted in negative value";
            summary.totalWorkingMinutes = 0;
            return summary;
        }

        summary.totalWorkingMinutes = working;

        // ----------------------------------
        // Overtime logic
        // ----------------------------------
        if (input.overtimeApproved === true && working > 480) {
            summary.overtimeMinutes = working - 480;
            summary.note = "Overtime calculated";
        } else {
            summary.overtimeMinutes = 0;
        }

    } catch (err) {
        // -------------------------------
        // Catch unexpected runtime errors
        // -------------------------------
        summary.status = "error";
        summary.error = err.message;
        summary.totalWorkingMinutes = 0;
        summary.overtimeMinutes = 0;
        summary.note = "An error occurred during processing.";
    } finally {
        // ------------------------------------------------
        // This always runs — mandatory requirement
        // ------------------------------------------------
        console.log("\n--- Attendance processed successfully ---\n");
    }

    return summary;
}



// ========================================================
//           RUN + DISPLAY OUTPUT CLEARLY
// ========================================================
const result = processAttendance(data);

console.log("=========== ATTENDANCE SUMMARY ===========");
console.log(result);
console.log("===========================================\n");

console.log("Original Input Data (Unmodified):");
console.log(inputData);
console.log("===========================================\n");   
module.exports = processAttendance; 
// ======================================================== 
//        END OF EMPLOYEE ATTENDANCE PROCESSING SYSTEM