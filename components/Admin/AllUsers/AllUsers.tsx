"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, UserPlus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

import { useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Button } from "@/components/ui/button"
import { BarChart3, Users, Building2, Plus } from "lucide-react"

export default function AllUsers() {
	const [activeTab, setActiveTab] = useState("all")

	const users = [
		{ id: 1, name: "John Doe", email: "john@example.com", role: "Project Manager", status: "Active" },
		{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "HR", status: "Active" },
		{ id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Finance", status: "Active" },
		{ id: 4, name: "Sarah Williams", email: "sarah@example.com", role: "Employee", status: "Active" },
		{ id: 5, name: "David Brown", email: "david@example.com", role: "Employee", status: "Inactive" },
	]

	const filteredUsers = activeTab === "all" ? users : users.filter((user) => user.role.toLowerCase() === activeTab)

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">User Management</h1>
					<p className="text-muted-foreground">Manage users and their roles in the system</p>
				</div>
				<Button>
					<UserPlus className="mr-2 h-4 w-4" /> Add User
				</Button>
			</div>

			{/* <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

				<div className="flex w-full max-w-sm items-center space-x-2">
					<Input type="search" placeholder="Search users..." className="w-full" />
					<Button type="submit" size="icon" variant="ghost">
						<Search className="h-4 w-4" />
						<span className="sr-only">Search</span>
					</Button>
				</div>
			</div> */}

			{/* <Card>
				<CardHeader>
					<CardTitle>User Directory</CardTitle>
					<CardDescription>Manage all users and their roles</CardDescription>
				</CardHeader>
				<CardContent>
					<ResponsiveTable>
						<ResponsiveTable.Header>
							<ResponsiveTable.Row>
								<ResponsiveTable.Head>Name</ResponsiveTable.Head>
								<ResponsiveTable.Head>Email</ResponsiveTable.Head>
								<ResponsiveTable.Head>Role</ResponsiveTable.Head>
								<ResponsiveTable.Head>Status</ResponsiveTable.Head>
								<ResponsiveTable.Head className="text-right">Actions</ResponsiveTable.Head>
							</ResponsiveTable.Row>
						</ResponsiveTable.Header>
						<ResponsiveTable.Body>
							{allUsers.map((value, index) => (
								<ResponsiveTable.Row key={index}>
									<ResponsiveTable.Cell>{value.name}</ResponsiveTable.Cell>
									<ResponsiveTable.Cell>{value.email}</ResponsiveTable.Cell>
									<ResponsiveTable.Cell>{value.role}</ResponsiveTable.Cell>
									<ResponsiveTable.Cell>
										<Badge variant={value.status === "Active" ? "active" : value.status === "Inactive" ? "destructive" : "secondary"}>
											{value.status}
										</Badge>
									</ResponsiveTable.Cell>
									<ResponsiveTable.Cell className="text-right">
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="ghost" size="icon">
													<MoreHorizontal className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuItem>Edit</DropdownMenuItem>
												<DropdownMenuItem>Inactive</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</ResponsiveTable.Cell>
								</ResponsiveTable.Row>
							))}
						</ResponsiveTable.Body>
					</ResponsiveTable>
				</CardContent>
			</Card> */}

			<Card>
				{/* <CardHeader> */}
				{/* <div className="flex items-center justify-between">
						<CardTitle>User Management</CardTitle>
						<Button size="sm">
							<Plus className="mr-2 h-4 w-4" />
							Add User
						</Button>
					</div> */}
				{/* <CardDescription>Manage all users in your organization</CardDescription> */}
				{/* </CardHeader> */}
				<CardContent>
					<Tabs defaultValue="all" className="w-full mt-2" onValueChange={setActiveTab}>
						<div className="flex justify-between items-center mt-3">
							<TabsList className="">
								<TabsTrigger value="all">All Users</TabsTrigger>
								<TabsTrigger value="project manager">Project Managers</TabsTrigger>
								<TabsTrigger value="hr">HR</TabsTrigger>
								<TabsTrigger value="finance">Finance</TabsTrigger>
								<TabsTrigger value="employee">Employees</TabsTrigger>
							</TabsList>
							<div className="flex w-full max-w-sm items-center space-x-2">
								<Input type="search" placeholder="Search users..." className="w-full" />
								<Button type="submit" size="icon" variant="ghost">
									<Search className="h-4 w-4" />
									<span className="sr-only">Search</span>
								</Button>
							</div>
						</div>
						<TabsContent value={activeTab} className="mt-6 border">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Name</TableHead>
										<TableHead>Email</TableHead>
										<TableHead>Role</TableHead>
										<TableHead>Status</TableHead>
										<TableHead className="text-right">Actions</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{filteredUsers.map((user) => (
										<TableRow key={user.id}>
											<TableCell className="font-medium">{user.name}</TableCell>
											<TableCell>{user.email}</TableCell>
											<TableCell>{user.role}</TableCell>
											<TableCell>
												<span
													className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
														}`}
												>
													{user.status}
												</span>
												{/* <Badge variant={user.status === "Active" ? "active" : user.status === "Inactive" ? "destructive" : "secondary"}>
													{user.status}
												</Badge> */}	
											</TableCell>
											<TableCell className="text-right">
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<Button variant="ghost" size="icon">
															<MoreHorizontal className="h-4 w-4" />
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent align="end">
														<DropdownMenuLabel>Actions</DropdownMenuLabel>
														<DropdownMenuItem>Edit</DropdownMenuItem>
														<DropdownMenuItem>Inactive</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>

			{/* <Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" isActive>
							1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">2</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination> */}

		</div>
	)
}