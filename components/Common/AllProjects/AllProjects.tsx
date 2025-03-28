"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Plus, Search } from "lucide-react"

export default function AllProjects() {

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Projects</h1>
					<p className="text-muted-foreground">Manage and monitor all projects</p>
				</div>
				<Button>
					<Plus className="mr-2 h-4 w-4" /> Create Project
				</Button>
			</div>

			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div className="flex w-full max-w-sm items-center space-x-2">
					<Input type="search" placeholder="Search projects..." className="w-full" />
					<Button type="submit" size="icon" variant="ghost">
						<Search className="h-4 w-4" />
						<span className="sr-only">Search</span>
					</Button>
				</div>
				<div className="flex flex-col gap-2 sm:flex-row sm:items-center">
					<div className="flex items-center gap-2">
						<Label htmlFor="status-filter" className="whitespace-nowrap">
							Status:
						</Label>
						<Select defaultValue="all">
							<SelectTrigger id="status-filter" className="w-[180px]">
								<SelectValue placeholder="All" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All</SelectItem>
								<SelectItem value="active">Active</SelectItem>
								<SelectItem value="completed">Completed</SelectItem>
								<SelectItem value="on-hold">On Hold</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="flex items-center gap-2">
						<Label htmlFor="sort-by" className="whitespace-nowrap">
							Sort by:
						</Label>
						<Select defaultValue="newest">
							<SelectTrigger id="sort-by" className="w-[180px]">
								<SelectValue placeholder="Newest" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="newest">Newest</SelectItem>
								<SelectItem value="oldest">Oldest</SelectItem>
								<SelectItem value="name-asc">Name (A-Z)</SelectItem>
								<SelectItem value="name-desc">Name (Z-A)</SelectItem>
								<SelectItem value="budget-high">Budget (High-Low)</SelectItem>
								<SelectItem value="budget-low">Budget (Low-High)</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>

			<Tabs defaultValue="active">
				<TabsList>
					<TabsTrigger value="active">Active Projects</TabsTrigger>
					<TabsTrigger value="completed">Completed Projects</TabsTrigger>
					<TabsTrigger value="all">All Projects</TabsTrigger>
				</TabsList>
				<TabsContent value="active" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<ProjectCard
							name="Community Health Initiative"
							description="Improving healthcare access in rural communities"
							progress={85}
							status="On Track"
							manager="John Doe"
							budget="$350,000"
							startDate="Jan 15, 2023"
							endDate="Dec 31, 2023"
						/>
						<ProjectCard
							name="Education Empowerment"
							description="Enhancing educational opportunities for underprivileged children"
							progress={62}
							status="At Risk"
							manager="Jane Smith"
							budget="$280,000"
							startDate="Feb 1, 2023"
							endDate="Jan 31, 2024"
						/>
						<ProjectCard
							name="Clean Water Access"
							description="Providing clean water solutions to rural communities"
							progress={45}
							status="On Track"
							manager="Robert Johnson"
							budget="$320,000"
							startDate="Mar 10, 2023"
							endDate="Mar 9, 2024"
						/>
						<ProjectCard
							name="Women Empowerment"
							description="Supporting women entrepreneurs in developing communities"
							progress={78}
							status="On Track"
							manager="Sarah Williams"
							budget="$250,000"
							startDate="Apr 1, 2023"
							endDate="Mar 31, 2024"
						/>
						<ProjectCard
							name="Youth Development"
							description="Building skills and opportunities for at-risk youth"
							progress={32}
							status="At Risk"
							manager="Michael Brown"
							budget="$180,000"
							startDate="May 15, 2023"
							endDate="May 14, 2024"
						/>
						<ProjectCard
							name="Sustainable Agriculture"
							description="Promoting sustainable farming practices in rural areas"
							progress={55}
							status="On Track"
							manager="Emily Davis"
							budget="$290,000"
							startDate="Jun 1, 2023"
							endDate="May 31, 2024"
						/>
					</div>
				</TabsContent>
				<TabsContent value="completed" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<ProjectCard
							name="Disaster Relief"
							description="Emergency response and recovery for flood-affected areas"
							progress={100}
							status="Completed"
							manager="David Wilson"
							budget="$150,000"
							startDate="Jan 1, 2022"
							endDate="Dec 31, 2022"
						/>
						<ProjectCard
							name="Vaccination Campaign"
							description="COVID-19 vaccination awareness and distribution"
							progress={100}
							status="Completed"
							manager="Lisa Anderson"
							budget="$200,000"
							startDate="Mar 15, 2022"
							endDate="Mar 14, 2023"
						/>
					</div>
				</TabsContent>
				<TabsContent value="all" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{/* This would include all projects from both active and completed tabs */}
						<ProjectCard
							name="Community Health Initiative"
							description="Improving healthcare access in rural communities"
							progress={85}
							status="On Track"
							manager="John Doe"
							budget="$350,000"
							startDate="Jan 15, 2023"
							endDate="Dec 31, 2023"
						/>
						<ProjectCard
							name="Education Empowerment"
							description="Enhancing educational opportunities for underprivileged children"
							progress={62}
							status="At Risk"
							manager="Jane Smith"
							budget="$280,000"
							startDate="Feb 1, 2023"
							endDate="Jan 31, 2024"
						/>
						<ProjectCard
							name="Disaster Relief"
							description="Emergency response and recovery for flood-affected areas"
							progress={100}
							status="Completed"
							manager="David Wilson"
							budget="$150,000"
							startDate="Jan 1, 2022"
							endDate="Dec 31, 2022"
						/>
						{/* Additional projects would be listed here */}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}

function ProjectCard({
	name,
	description,
	progress,
	status,
	manager,
	budget,
	startDate,
	endDate,
}: {
	name: string
	description: string
	progress: number
	status: string
	manager: string
	budget: string
	startDate: string
	endDate: string
}) {
	return (
		<Card className="overflow-hidden">
			<CardHeader className="pb-2">
				<div className="flex items-start justify-between">
					<div>
						<CardTitle>{name}</CardTitle>
						<CardDescription className="mt-1">{description}</CardDescription>
					</div>
					<div className="rounded-full bg-primary/10 p-2 text-primary">
						<Briefcase className="h-4 w-4" />
					</div>
				</div>
			</CardHeader>
			<CardContent className="pb-4">
				<div className="mb-4 space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Progress</span>
						<span className="font-medium">{progress}%</span>
					</div>
					<div className="h-2 w-full overflow-hidden rounded-full bg-muted">
						<div
							className={cn(
								"h-full",
								status === "On Track"
									? "bg-green-500"
									: status === "At Risk"
										? "bg-yellow-500"
										: status === "Completed"
											? "bg-blue-500"
											: "bg-red-500",
							)}
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-2 text-sm">
					<div>
						<p className="text-muted-foreground">Manager</p>
						<p className="font-medium">{manager}</p>
					</div>
					<div>
						<p className="text-muted-foreground">Status</p>
						<p
							className={cn(
								"font-medium",
								status === "On Track"
									? "text-green-600"
									: status === "At Risk"
										? "text-yellow-600"
										: status === "Completed"
											? "text-blue-600"
											: "text-red-600",
							)}
						>
							{status}
						</p>
					</div>
					<div>
						<p className="text-muted-foreground">Budget</p>
						<p className="font-medium">{budget}</p>
					</div>
					<div>
						<p className="text-muted-foreground">Timeline</p>
						<p className="font-medium text-xs">
							{startDate} - {endDate}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

function cn(...classes: any[]) {
	return classes.filter(Boolean).join(" ")
}

