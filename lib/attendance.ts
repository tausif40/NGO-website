// Mock attendance database
interface AttendanceRecord {
  userId: string
  date: string
  checkIn?: Date
  checkOut?: Date
}

const attendanceRecords: AttendanceRecord[] = []

export async function markAttendance(userId: string, type: "check-in" | "check-out"): Promise<void> {
  const today = new Date().toISOString().split("T")[0]

  // Find existing record for today
  const existingRecordIndex = attendanceRecords.findIndex((record) => record.userId === userId && record.date === today)

  if (existingRecordIndex >= 0) {
    // Update existing record
    if (type === "check-in" && !attendanceRecords[existingRecordIndex].checkIn) {
      attendanceRecords[existingRecordIndex].checkIn = new Date()
    } else if (type === "check-out" && !attendanceRecords[existingRecordIndex].checkOut) {
      attendanceRecords[existingRecordIndex].checkOut = new Date()
    }
  } else if (type === "check-in") {
    // Create new record for check-in
    attendanceRecords.push({
      userId,
      date: today,
      checkIn: new Date(),
    })
  }

  // In a real app, you would save this to a database
}

export async function getAttendanceStatus(userId: string): Promise<{
  checkedIn: boolean
  checkedOut: boolean
  lastCheckIn?: Date
  lastCheckOut?: Date
}> {
  const today = new Date().toISOString().split("T")[0]

  // Find today's record
  const todayRecord = attendanceRecords.find((record) => record.userId === userId && record.date === today)

  if (!todayRecord) {
    return {
      checkedIn: false,
      checkedOut: false,
    }
  }

  return {
    checkedIn: !!todayRecord.checkIn,
    checkedOut: !!todayRecord.checkOut,
    lastCheckIn: todayRecord.checkIn,
    lastCheckOut: todayRecord.checkOut,
  }
}

export async function getAttendanceHistory(userId: string): Promise<AttendanceRecord[]> {
  return attendanceRecords.filter((record) => record.userId === userId)
}

