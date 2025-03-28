"use client"

import { useState, useEffect } from "react"
import { AuthUser } from "@/hooks/AuthUser"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, XCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { User } from '@/types/types';
import { useRouter } from "next/navigation"
// Mock attendance data storage
const ATTENDANCE_STORAGE_KEY = "ngo_attendance_data"

interface AttendanceRecord {
	userId: string
	date: string
	checkInTime: string | null
	checkOutTime: string | null
}

export function Attendance() {
	// const { user } = AuthUser()
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const { toast } = useToast()
	const [todayRecord, setTodayRecord] = useState<AttendanceRecord | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	// Format current date as YYYY-MM-DD
	const today = new Date().toISOString().split("T")[0]

	useEffect(() => {
		const userStr = localStorage.getItem('user');
		if (userStr) {
			setUser(JSON.parse(userStr));
		}
	}, [router]);

	// Load attendance data on component mount
	useEffect(() => {
		if (!user) return

		// Load attendance records from localStorage
		const storedData = localStorage.getItem(ATTENDANCE_STORAGE_KEY)
		const attendanceRecords: AttendanceRecord[] = storedData ? JSON.parse(storedData) : []

		// Find today's record for the current user
		const userTodayRecord = attendanceRecords.find((record) => record.userId === user.id && record.date === today)

		if (userTodayRecord) {
			setTodayRecord(userTodayRecord)
		}
	}, [user, today])

	// Handle check-in
	const handleCheckIn = () => {
		if (!user) return

		setIsLoading(true)

		// Simulate API call
		setTimeout(() => {
			const currentTime = new Date().toLocaleTimeString()

			// Load existing records
			const storedData = localStorage.getItem(ATTENDANCE_STORAGE_KEY)
			const attendanceRecords: AttendanceRecord[] = storedData ? JSON.parse(storedData) : []

			// Create new record
			const newRecord: AttendanceRecord = {
				userId: user?.id,
				date: today,
				checkInTime: currentTime,
				checkOutTime: null,
			}

			// Add new record
			const updatedRecords = [
				...attendanceRecords.filter((record) => !(record.userId === user.id && record.date === today)),
				newRecord,
			]

			// Save to localStorage
			localStorage.setItem(ATTENDANCE_STORAGE_KEY, JSON.stringify(updatedRecords))

			// Update state
			setTodayRecord(newRecord)
			setIsLoading(false)

			toast({
				title: "Checked in successfully",
				description: `Check-in time: ${currentTime}`,
			})
		}, 1000)
	}

	// Handle check-out
	const handleCheckOut = () => {
		if (!user || !todayRecord) return

		setIsLoading(true)

		// Simulate API call
		setTimeout(() => {
			const currentTime = new Date().toLocaleTimeString()

			// Load existing records
			const storedData = localStorage.getItem(ATTENDANCE_STORAGE_KEY)
			const attendanceRecords: AttendanceRecord[] = storedData ? JSON.parse(storedData) : []

			// Update record
			const updatedRecord: AttendanceRecord = {
				...todayRecord,
				checkOutTime: currentTime,
			}

			// Update records array
			const updatedRecords = attendanceRecords.map((record) =>
				record.userId === user.id && record.date === today ? updatedRecord : record,
			)

			// Save to localStorage
			localStorage.setItem(ATTENDANCE_STORAGE_KEY, JSON.stringify(updatedRecords))

			// Update state
			setTodayRecord(updatedRecord)
			setIsLoading(false)

			toast({
				title: "Checked out successfully",
				description: `Check-out time: ${currentTime}`,
			})
		}, 1000)
	}

	if (!user) return null

	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Daily Attendance</CardTitle>
				<CardDescription>Track your attendance for {new Date().toLocaleDateString()}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						<Clock className="h-5 w-5 text-muted-foreground" />
						<div className="flex gap-2">
							<p className="text-sm font-medium">Status:</p>
							{!todayRecord ? (<Badge variant="outline">Not Checked In</Badge>)
								: !todayRecord.checkOutTime ? (<Badge variant="active">Checked In</Badge>)
									: (<Badge variant="destructive">Checked Out</Badge>)
							}
						</div>
					</div>

					<div className="flex flex-col sm:flex-row items-center gap-2 text-sm">
						{todayRecord?.checkInTime && (
							<div className="flex items-center gap-1">
								<CheckCircle className="h-4 w-4 text-green-500" />
								<span>Check-in: {todayRecord.checkInTime}</span>
							</div>
						)}

						{todayRecord?.checkOutTime && (
							<div className="flex items-center gap-1 ml-0 sm:ml-4">
								<XCircle className="h-4 w-4 text-red-500" />
								<span>Check-out: {todayRecord.checkOutTime}</span>
							</div>
						)}
					</div>

					<div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
						<Button
							onClick={handleCheckIn}
							disabled={isLoading || !!todayRecord?.checkInTime}
							className="w-full sm:w-28"
						>
							{isLoading && !todayRecord?.checkInTime ? "Processing..." : "Check In"}
						</Button>
						<Button
							onClick={handleCheckOut}
							disabled={isLoading || !todayRecord?.checkInTime || !!todayRecord?.checkOutTime}
							variant="outline"
							className="w-full sm:w-28"
						>
							{isLoading && todayRecord?.checkInTime && !todayRecord?.checkOutTime ? "Processing..." : "Check Out"}
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}