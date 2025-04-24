import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function ProblemStatement() {
	return (
		<>
			<div className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="executive-summary">Executive Summary (Not more than 1 page)</Label>
					<Textarea
						id="executive-summary"
						placeholder="Provide an executive summary of the intervention..."
						className="min-h-[150px]"
						required
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="problem-statement">What is the problem (Not more than 300 words)</Label>
					<Textarea
						id="problem-statement"
						placeholder="Describe the problem that this intervention addresses..."
						className="min-h-[150px]"
						required
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="beneficiary-data">Beneficiary Community data</Label>
					<Textarea
						id="beneficiary-data"
						placeholder="Describe the beneficiary community..."
						className="min-h-[150px]"
						required
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="indirect-benefits">Indirect benefits of the intervention</Label>
					<Textarea
						id="indirect-benefits"
						placeholder="Describe the indirect benefits..."
						className="min-h-[100px]"
						required
					/>
				</div>
			</div>

		</>
	)
}

export default ProblemStatement