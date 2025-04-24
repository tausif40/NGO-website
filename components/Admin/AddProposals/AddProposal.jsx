"use client"

import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Save } from "lucide-react"
import BasicInfo from './BasicInfo'
import Location from './Location'
import ProblemStatement from './ProblemStatement'
import Indicators from './Indicators'
import Budget from './Budget'
import UploadPdf from './UploadPdf'

export default function AddProposal() {
	const router = useRouter()
	const { toast } = useToast()

	const tabOrder = [ "basic-info", "location", "problem", "indicators", "budget", "upload-pdf" ]
	const [ activeTab, setActiveTab ] = useState(tabOrder[ 0 ])

	const currentIndex = tabOrder.indexOf(activeTab)
	const isFirstTab = currentIndex === 0
	const isLastTab = currentIndex === tabOrder.length - 1

	const goToNext = () => {
		if (!isLastTab) setActiveTab(tabOrder[ currentIndex + 1 ])
	}
	const goToPrevious = () => {
		if (!isFirstTab) setActiveTab(tabOrder[ currentIndex - 1 ])
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		toast({
			title: "Proposal created",
			description: "The proposal has been successfully created.",
		})
		// router.push("/admin/proposals")
	}

	return (
		<div className="space-y-6">
			<div className="text-gray-800">
				{/* <Button variant="outline" size="icon" onClick={() => router.back()}>
					<ArrowLeft className="h-4 w-4" />
				</Button> */}
				<h1 className="text-3xl font-bold">Create Proposal</h1>
				<p className="text-sm mt-1">Create a new proposal for NGO funding and support</p>
			</div>

			<Card>
				{/* <CardHeader>
					<CardTitle>New Proposal</CardTitle>
					<CardDescription>Create a new proposal for NGO funding and support</CardDescription>
				</CardHeader> */}

				<CardContent className="pt-4">
					<form id="proposal-form" onSubmit={handleSubmit}>
						<Tabs value={activeTab} onValueChange={setActiveTab}>
							<TabsList className="grid w-full grid-cols-6">
								<TabsTrigger value="basic-info">Basic Info</TabsTrigger>
								<TabsTrigger value="location">Location</TabsTrigger>
								<TabsTrigger value="problem">Problem Statement</TabsTrigger>
								<TabsTrigger value="indicators">Indicators</TabsTrigger>
								<TabsTrigger value="budget">Budget</TabsTrigger>
								<TabsTrigger value="upload-pdf">Upload PDF</TabsTrigger>
							</TabsList>

							<TabsContent value="basic-info" className="pt-4 space-y-4">
								<BasicInfo />
							</TabsContent>
							<TabsContent value="location" className="pt-4 space-y-4">
								<Location />
							</TabsContent>
							<TabsContent value="problem" className="pt-4 space-y-4">
								<ProblemStatement />
							</TabsContent>
							<TabsContent value="indicators" className="pt-4 space-y-4">
								<Indicators />
							</TabsContent>
							<TabsContent value="budget" className="pt-4 space-y-4">
								<Budget />
							</TabsContent>
							<TabsContent value="upload-pdf" className="pt-4 space-y-4">
								<UploadPdf />
							</TabsContent>
						</Tabs>

						{/* Shared Navigation Buttons */}
						<div className="mt-6 flex justify-end gap-8">
							<Button
								type="button"
								variant="outline"
								onClick={goToPrevious}
								disabled={isFirstTab}
							>
								Previous
							</Button>
							{!isLastTab ? (
								<Button type="button" variant="secondary" onClick={goToNext}>
									Next
								</Button>
							) : (
								<Button type="submit" variant="secondary">
									Submit
								</Button>
							)}
						</div>
					</form>
				</CardContent>

				<CardFooter className="mt-4 flex justify-center">
					<Button type="submit" form="proposal-form">
						<Save className="mr-2 h-4 w-4" />
						Save Proposal
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
