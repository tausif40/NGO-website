import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function Location() {
	return (
		<>
			<div className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="village">Village / Locality (urban area)</Label>
					<Input id="village" placeholder="e.g., Back Bay, Mumbai" required />
				</div>

				<div className="grid gap-2">
					<Label htmlFor="block">Block</Label>
					<Input id="block" placeholder="e.g., A" />
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="grid gap-2">
						<Label htmlFor="district">District</Label>
						<Input id="district" placeholder="e.g., Mumbai" required />
					</div>

					<div className="grid gap-2">
						<Label htmlFor="state">State</Label>
						<Input id="state" placeholder="e.g., Maharashtra" required />
					</div>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="community-data">Data about targeted community</Label>
					<Textarea
						id="community-data"
						placeholder="Describe the targeted community..."
						className="min-h-[150px]"
						required
					/>
				</div>
			</div>
		</>
	)
}

export default Location