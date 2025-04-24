import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function BasicInfo() {
	return (
		<>
			<div className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="title">Title of the intervention</Label>
					<Input id="title" placeholder="e.g., Adhikaar Seva Kendra" required />
				</div>

				<div className="grid gap-2">
					<Label htmlFor="organization">Name of applicant (organization)</Label>
					<Input id="organization" placeholder="e.g., SVITECH FOUNDATION" required />
				</div>

				<div className="grid gap-2">
					<Label htmlFor="cost">Total cost of the intervention</Label>
					<Input id="cost" placeholder="e.g., 14,97,700/-" required />
				</div>

				<div className="grid gap-2">
					<Label htmlFor="duration">Total duration of the Intervention</Label>
					<Input id="duration" placeholder="e.g., 01/04/24 to 31/03/25 (12 Months)" required />
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="grid gap-2">
						<Label htmlFor="contact-name">Contact Person Name</Label>
						<Input id="contact-name" placeholder="e.g., Mr. Vivek Shelar" required />
					</div>

					<div className="grid gap-2">
						<Label htmlFor="contact-designation">Designation</Label>
						<Input id="contact-designation" placeholder="e.g., Director" required />
					</div>

					<div className="grid gap-2">
						<Label htmlFor="contact-mobile">Mobile Number</Label>
						<Input id="contact-mobile" placeholder="e.g., 8268459392" required />
					</div>

					<div className="grid gap-2">
						<Label htmlFor="contact-email">Email Id</Label>
						<Input id="contact-email" type="email" placeholder="e.g., info@svitech.in" required />
					</div>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="about">About Us</Label>
					<Textarea
						id="about"
						placeholder="Describe your organization..."
						className="min-h-[150px]"
						required
					/>
				</div>
			</div>
		</>
	)
}

export default BasicInfo