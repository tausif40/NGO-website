"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CreditCard, DollarSign, FileSpreadsheet, Landmark, Plus, Search } from "lucide-react"

export default function FinanceDashboard() {

  return (
    <div className="space-y-6 bg-white p-4 border rounded-md ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Management</h1>
          <p className="text-muted-foreground">Manage budgets, expenses, invoices, and donor funds</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Budget
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Record Expense
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Total Budget</span>
                <span className="text-2xl font-bold">$1.2M</span>
                <span className="text-xs text-muted-foreground">Current fiscal year</span>
              </div>
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <DollarSign className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Expenses</span>
                <span className="text-2xl font-bold">$820K</span>
                <span className="text-xs text-muted-foreground">68% of budget</span>
              </div>
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <CreditCard className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Pending Invoices</span>
                <span className="text-2xl font-bold">8</span>
                <span className="text-xs text-muted-foreground">$42K total</span>
              </div>
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <FileSpreadsheet className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Donor Funds</span>
                <span className="text-2xl font-bold">$350K</span>
                <span className="text-xs text-muted-foreground">Available for allocation</span>
              </div>
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <Landmark className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="budget">
        <TabsList>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="donors">Donor Funds</TabsTrigger>
        </TabsList>
        <TabsContent value="budget" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="search" placeholder="Search budget items..." className="w-full" />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <Label htmlFor="project-filter" className="whitespace-nowrap">
                  Project:
                </Label>
                <Select defaultValue="all">
                  <SelectTrigger id="project-filter" className="w-[180px]">
                    <SelectValue placeholder="All Projects" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Projects</SelectItem>
                    <SelectItem value="health">Community Health Initiative</SelectItem>
                    <SelectItem value="education">Education Empowerment</SelectItem>
                    <SelectItem value="water">Clean Water Access</SelectItem>
                    <SelectItem value="women">Women Empowerment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="fiscal-year" className="whitespace-nowrap">
                  Fiscal Year:
                </Label>
                <Select defaultValue="2023">
                  <SelectTrigger id="fiscal-year" className="w-[180px]">
                    <SelectValue placeholder="2023" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Budget Allocation</CardTitle>
              <CardDescription>Budget allocation by project for the current fiscal year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <BudgetCard
                  project="Community Health Initiative"
                  allocated="$350,000"
                  spent="$245,000"
                  remaining="$105,000"
                  progress={70}
                />
                <BudgetCard
                  project="Education Empowerment"
                  allocated="$280,000"
                  spent="$196,000"
                  remaining="$84,000"
                  progress={70}
                />
                <BudgetCard
                  project="Clean Water Access"
                  allocated="$320,000"
                  spent="$224,000"
                  remaining="$96,000"
                  progress={70}
                />
                <BudgetCard
                  project="Women Empowerment"
                  allocated="$250,000"
                  spent="$155,000"
                  remaining="$95,000"
                  progress={62}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="search" placeholder="Search expenses..." className="w-full" />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <Label htmlFor="expense-status" className="whitespace-nowrap">
                  Status:
                </Label>
                <Select defaultValue="all">
                  <SelectTrigger id="expense-status" className="w-[180px]">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="expense-date" className="whitespace-nowrap">
                  Date Range:
                </Label>
                <Select defaultValue="month">
                  <SelectTrigger id="expense-date" className="w-[180px]">
                    <SelectValue placeholder="This Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Expenses</CardTitle>
              <CardDescription>Expenses submitted in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <table className="w-full min-w-[600px] text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Description</th>
                      <th className="py-3 text-left font-medium">Project</th>
                      <th className="py-3 text-left font-medium">Amount</th>
                      <th className="py-3 text-left font-medium">Submitted By</th>
                      <th className="py-3 text-left font-medium">Date</th>
                      <th className="py-3 text-left font-medium">Status</th>
                      <th className="py-3 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ExpenseRow
                      description="Field Travel - Community Health"
                      project="Community Health Initiative"
                      amount="$2,450"
                      submittedBy="John Smith"
                      date="May 10, 2023"
                      status="Approved"
                    />
                    <ExpenseRow
                      description="Training Materials - Education"
                      project="Education Empowerment"
                      amount="$1,850"
                      submittedBy="Mary Johnson"
                      date="May 8, 2023"
                      status="Pending"
                    />
                    <ExpenseRow
                      description="Equipment - Water Testing"
                      project="Clean Water Access"
                      amount="$3,200"
                      submittedBy="Robert Brown"
                      date="May 5, 2023"
                      status="Approved"
                    />
                    <ExpenseRow
                      description="Workshop Venue - Women Empowerment"
                      project="Women Empowerment"
                      amount="$1,200"
                      submittedBy="Sarah Davis"
                      date="May 3, 2023"
                      status="Pending"
                    />
                    <ExpenseRow
                      description="Office Supplies"
                      project="Administration"
                      amount="$450"
                      submittedBy="Michael Wilson"
                      date="May 1, 2023"
                      status="Approved"
                    />
                    <ExpenseRow
                      description="Vehicle Maintenance"
                      project="Operations"
                      amount="$850"
                      submittedBy="David Lee"
                      date="April 28, 2023"
                      status="Rejected"
                    />
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="invoices" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="search" placeholder="Search invoices..." className="w-full" />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <Label htmlFor="invoice-status" className="whitespace-nowrap">
                  Status:
                </Label>
                <Select defaultValue="all">
                  <SelectTrigger id="invoice-status" className="w-[180px]">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Create Invoice
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>Manage invoices and payment status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <table className="w-full min-w-[600px] text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Invoice #</th>
                      <th className="py-3 text-left font-medium">Project</th>
                      <th className="py-3 text-left font-medium">Donor</th>
                      <th className="py-3 text-left font-medium">Amount</th>
                      <th className="py-3 text-left font-medium">Issue Date</th>
                      <th className="py-3 text-left font-medium">Due Date</th>
                      <th className="py-3 text-left font-medium">Status</th>
                      <th className="py-3 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <InvoiceRow
                      invoiceNumber="INV-2023-001"
                      project="Community Health Initiative"
                      donor="Global Health Foundation"
                      amount="$45,000"
                      issueDate="May 1, 2023"
                      dueDate="May 31, 2023"
                      status="Pending"
                    />
                    <InvoiceRow
                      invoiceNumber="INV-2023-002"
                      project="Education Empowerment"
                      donor="Education First Trust"
                      amount="$35,000"
                      issueDate="May 5, 2023"
                      dueDate="June 5, 2023"
                      status="Pending"
                    />
                    <InvoiceRow
                      invoiceNumber="INV-2023-003"
                      project="Clean Water Access"
                      donor="Clean Water Initiative"
                      amount="$40,000"
                      issueDate="May 10, 2023"
                      dueDate="June 10, 2023"
                      status="Pending"
                    />
                    <InvoiceRow
                      invoiceNumber="INV-2023-004"
                      project="Women Empowerment"
                      donor="Women's Rights Coalition"
                      amount="$25,000"
                      issueDate="April 15, 2023"
                      dueDate="May 15, 2023"
                      status="Paid"
                    />
                    <InvoiceRow
                      invoiceNumber="INV-2023-005"
                      project="Community Health Initiative"
                      donor="Global Health Foundation"
                      amount="$50,000"
                      issueDate="April 1, 2023"
                      dueDate="May 1, 2023"
                      status="Paid"
                    />
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="donors" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="search" placeholder="Search donors..." className="w-full" />
              <Button type="submit" size="icon" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Donor
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Donor Funds</CardTitle>
              <CardDescription>Overview of donor contributions and fund allocation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <DonorCard
                  name="Global Health Foundation"
                  amount="$450,000"
                  allocated="$320,000"
                  remaining="$130,000"
                  projects={["Community Health Initiative"]}
                  progress={71}
                />
                <DonorCard
                  name="Education First Trust"
                  amount="$280,000"
                  allocated="$210,000"
                  remaining="$70,000"
                  projects={["Education Empowerment"]}
                  progress={75}
                />
                <DonorCard
                  name="Clean Water Initiative"
                  amount="$320,000"
                  allocated="$240,000"
                  remaining="$80,000"
                  projects={["Clean Water Access"]}
                  progress={75}
                />
                <DonorCard
                  name="Women's Rights Coalition"
                  amount="$150,000"
                  allocated="$80,000"
                  remaining="$70,000"
                  projects={["Women Empowerment"]}
                  progress={53}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BudgetCard({
  project,
  allocated,
  spent,
  remaining,
  progress,
}: {
  project: string
  allocated: string
  spent: string
  remaining: string
  progress: number
}) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h3 className="font-medium">{project}</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium">Allocated</p>
              <p className="text-muted-foreground">{allocated}</p>
            </div>
            <div>
              <p className="font-medium">Spent</p>
              <p className="text-muted-foreground">{spent}</p>
            </div>
            <div>
              <p className="font-medium">Remaining</p>
              <p className="text-green-600">{remaining}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="text-right">
            <p className="text-sm font-medium">Utilization</p>
            <p className="text-2xl font-bold">{progress}%</p>
          </div>
          <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function ExpenseRow({
  description,
  project,
  amount,
  submittedBy,
  date,
  status,
}: {
  description: string
  project: string
  amount: string
  submittedBy: string
  date: string
  status: string
}) {
  return (
    <tr className="border-b">
      <td className="py-3">{description}</td>
      <td className="py-3">{project}</td>
      <td className="py-3 font-medium">{amount}</td>
      <td className="py-3">{submittedBy}</td>
      <td className="py-3">{date}</td>
      <td className="py-3">
        <Badge variant={status === "Approved" ? "default" : status === "Rejected" ? "destructive" : "secondary"}>
          {status}
        </Badge>
      </td>
      <td className="py-3">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            View
          </Button>
          {status === "Pending" && (
            <>
              <Button variant="outline" size="sm">
                Approve
              </Button>
              <Button variant="outline" size="sm">
                Reject
              </Button>
            </>
          )}
        </div>
      </td>
    </tr>
  )
}

function InvoiceRow({
  invoiceNumber,
  project,
  donor,
  amount,
  issueDate,
  dueDate,
  status,
}: {
  invoiceNumber: string
  project: string
  donor: string
  amount: string
  issueDate: string
  dueDate: string
  status: string
}) {
  return (
    <tr className="border-b">
      <td className="py-3">{invoiceNumber}</td>
      <td className="py-3">{project}</td>
      <td className="py-3">{donor}</td>
      <td className="py-3 font-medium">{amount}</td>
      <td className="py-3">{issueDate}</td>
      <td className="py-3">{dueDate}</td>
      <td className="py-3">
        <Badge variant={status === "Paid" ? "default" : status === "Overdue" ? "destructive" : "secondary"}>
          {status}
        </Badge>
      </td>
      <td className="py-3">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            View
          </Button>
          {status === "Pending" && (
            <Button variant="outline" size="sm">
              Mark Paid
            </Button>
          )}
        </div>
      </td>
    </tr>
  )
}

function DonorCard({
  name,
  amount,
  allocated,
  remaining,
  projects,
  progress,
}: {
  name: string
  amount: string
  allocated: string
  remaining: string
  projects: string[]
  progress: number
}) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h3 className="font-medium">{name}</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium">Total Contribution</p>
              <p className="text-muted-foreground">{amount}</p>
            </div>
            <div>
              <p className="font-medium">Allocated</p>
              <p className="text-muted-foreground">{allocated}</p>
            </div>
            <div>
              <p className="font-medium">Remaining</p>
              <p className="text-green-600">{remaining}</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-medium">Projects</p>
            <div className="flex flex-wrap gap-1">
              {projects.map((project) => (
                <Badge key={project} variant="outline">
                  {project}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="text-right">
            <p className="text-sm font-medium">Fund Utilization</p>
            <p className="text-2xl font-bold">{progress}%</p>
          </div>
          <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              View Details
            </Button>
            <Button variant="outline" size="sm">
              Add Funds
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

