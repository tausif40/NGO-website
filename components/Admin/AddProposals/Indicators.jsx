import React from 'react'
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function Indicators() {
	return (
		<>
			<div className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="output-indicators">Output indicators expected</Label>
					<Textarea
						id="output-indicators"
						placeholder="Describe the output indicators..."
						className="min-h-[150px]"
						required
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="outcome-indicators">Outcome indicators expected</Label>
					<Textarea
						id="outcome-indicators"
						placeholder="Describe the outcome indicators..."
						className="min-h-[150px]"
						required
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="target-beneficiaries">Target beneficiaries</Label>
					<Textarea
						id="target-beneficiaries"
						placeholder="Describe the target beneficiaries..."
						className="min-h-[100px]"
						required
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="programs">Programs to be conducted</Label>
					<Textarea
						id="programs"
						placeholder="Describe the programs to be conducted..."
						className="min-h-[150px]"
						required
					/>
				</div>
			</div>
		</>
	)
}

export default Indicators