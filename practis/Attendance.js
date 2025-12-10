
//  Employee Attendance Processing System
 
function processAttendance(attendanceData) {
    // Prevent modifying original input
    const input = JSON.parse(JSON.stringify(attendanceData));

    const employeeId = input.employeeId || "UNKNOWN";
    const date = input.date || "UNKNOWN";

    let status = "complete";
    let totalWorkingMinutes = 0;
    let overtimeMinutes = 0;
    let errorMessage = "";
    let note = "";

    try {
        // Check-in / Check-out validation
        if (!input.checkIn || !input.checkOut) {
            status = "incomplete";
            note = "Missing check-in or check-out time.";
            return {
                employeeId,
                date,
                status,
                totalWorkingMinutes,
                overtimeMinutes,
                note,
                errorMessage
            };
        }

        // Parse times safely
        const checkIn = new Date(`${date} ${input.checkIn}`);
        const checkOut = new Date(`${date} ${input.checkOut}`);

        if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
            status = "error";
            errorMessage = "Invalid time format.";
            return {
                employeeId,
                date,
                status,
                totalWorkingMinutes,
                overtimeMinutes,
                note,
                errorMessage
            };
        }

        // Base work duration
        let workMinutes = (checkOut - checkIn) / 60000;

        // BREAK handling
        let breakMinutes = 0;

        if (input.break && input.break.start) {
            const breakStart = new Date(`${date} ${input.break.start}`);

            if (!input.break.end) {
                // Use default 30 min break
                breakMinutes = 30;
            } else {
                const breakEnd = new Date(`${date} ${input.break.end}`);

                if (isNaN(breakStart.getTime()) || isNaN(breakEnd.getTime())) {
                    breakMinutes = 30; // fallback
                } else {
                    breakMinutes = (breakEnd - breakStart) / 60000;
                    if (breakMinutes < 0) breakMinutes = 30;
                }
            }
        }

        // Total working time
        totalWorkingMinutes = workMinutes - breakMinutes;

        // Negative time check
        if (totalWorkingMinutes < 0) {
            status = "invalid";
            totalWorkingMinutes = 0;
            note = "Total working time became negative.";
            return {
                employeeId,
                date,
                status,
                totalWorkingMinutes,
                overtimeMinutes,
                note,
                errorMessage
            };
        }

        // Overtime logic
        if (input.overtimeApproved === true) {
            if (totalWorkingMinutes > 480) {
                overtimeMinutes = totalWorkingMinutes - 480;
            }
        }

        note = "Attendance processed.";

    } catch (err) {
        status = "error";
        errorMessage = "System error: " + err.message;
    } finally {
        console.log("Attendance processed successfully");
    }

    return {
        employeeId,
        date,
        status,
        totalWorkingMinutes,
        overtimeMinutes,
        note,
        errorMessage
    };
}


//  Example Test


const exampleInput = {
    employeeId: "EMP-1022",
    date: "2025-02-15",
    checkIn: "09:00",
    checkOut: "18:30",
    break: {
        start: "13:00",
        end: "14:00"
    },
    overtimeApproved: true
};

console.log(processAttendance(exampleInput));