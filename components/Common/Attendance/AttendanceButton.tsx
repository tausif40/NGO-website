"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
// Update the import to use the types from the new file
import type { Users } from "@/types/types"
import { markAttendance, getAttendanceStatus } from "@/lib/attendance"
import { Badge } from "@/components/ui/badge"

interface AttendanceButtonProps {
	user: Users
}

export function AttendanceButton({ user }: AttendanceButtonProps) {
	const { toast } = useToast()
	const [open, setOpen] = useState(false)
	const [status, setStatus] = useState<{
		checkedIn: boolean
		checkedOut: boolean
		lastCheckIn?: Date
		lastCheckOut?: Date
	}>({
		checkedIn: false,
		checkedOut: false,
	})

	useEffect(() => {
		const fetchStatus = async () => {
			const currentStatus = await getAttendanceStatus(user.id)
			setStatus(currentStatus)
		}

		fetchStatus()
	}, [user.id])

	const handleCheckIn = async () => {
		try {
			await markAttendance(user.id, "check-in")
			setStatus({
				...status,
				checkedIn: true,
				lastCheckIn: new Date(),
			})
			toast({
				title: "Checked in",
				description: `You have checked in at ${new Date().toLocaleTimeString()}`,
			})
			setOpen(false)
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: "Failed to check in. Please try again.",
			})
		}
	}

	const handleCheckOut = async () => {
		try {
			await markAttendance(user.id, "check-out")
			setStatus({
				...status,
				checkedOut: true,
				lastCheckOut: new Date(),
			})
			toast({
				title: "Checked out",
				description: `You have checked out at ${new Date().toLocaleTimeString()}`,
			})
			setOpen(false)
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: "Failed to check out. Please try again.",
			})
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" size="sm" className="mr-2">
					<Clock className="mr-2 h-4 w-4" />
					{status.checkedIn && !status.checkedOut
						? "Check Out"
						: status.checkedIn && status.checkedOut
							? "Attendance"
							: "Check In"}
				</Button>
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Daily Attendance</DialogTitle>
					<DialogDescription>Mark your daily attendance by checking in and out.</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2 rounded-md border p-4">
							<h3 className="font-medium">{status.checkedIn ? <Badge variant="active">Checked In</Badge> : "Check In"}</h3>
							<p className="text-sm text-muted-foreground">
								{status.checkedIn && status.lastCheckIn
									? <>Checked in at <span className="text-teal-500">{status.lastCheckIn.toLocaleTimeString()}</span></>
									: "Not checked in yet"}
							</p>
						</div>
						<div className="space-y-2 rounded-md border p-4">
							<h3 className="font-medium">{status.checkedOut ? <Badge variant="destructive">Checked Out</Badge> : "Check Out"}</h3>
							<p className="text-sm text-muted-foreground">
								{status.checkedOut && status.lastCheckOut
									? <>Checked out at <span className="text-red-500">{status.lastCheckOut.toLocaleTimeString()}</span></>
									: "Not checked out yet"}
							</p>
						</div>
					</div>
				</div>
				<DialogFooter>
					{!status.checkedIn ? (
						<Button onClick={handleCheckIn}>Check In</Button>
					) : !status.checkedOut ? (
						<Button onClick={handleCheckOut}>Check Out</Button>
					) : (
						<Button disabled>Completed for Today</Button>
					)}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

