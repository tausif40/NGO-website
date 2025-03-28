"use client"

import { cn } from "@/lib/utils"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Briefcase,
  Calendar,
  DollarSign,
  Users,
  BookOpen,
  CreditCard,
  FileSpreadsheet,
  Landmark,
  CheckSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        {/* <p className="text-muted-foreground">Welcome back, {user?.name}!</p> */}
      </div>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Projects"
            value="4"
            description="Active projects"
            icon={<Briefcase className="h-5 w-5" />}
          />
          <DashboardCard
            title="Team Members"
            value="16"
            description="Across all projects"
            icon={<Users className="h-5 w-5" />}
          />
          <DashboardCard
            title="Activities Due"
            value="8"
            description="This week"
            icon={<Calendar className="h-5 w-5" />}
          />
          <DashboardCard
            title="KPI Completion"
            value="68%"
            description="Across all projects"
            icon={<BarChart3 className="h-5 w-5" />}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Overview of projects under your management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ProjectRow name="Community Health Initiative" progress={85} status="On Track" manager="You" />
              <ProjectRow name="Education Empowerment" progress={62} status="At Risk" manager="You" />
              <ProjectRow name="Clean Water Access" progress={45} status="On Track" manager="You" />
              <ProjectRow name="Women Empowerment" progress={78} status="On Track" manager="You" />
            </div>
            <div className="mt-4 flex justify-end">
              <Button asChild>
                <Link href="/admin/all-projects">View All Projects</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Activities</CardTitle>
            <CardDescription>Activities due in the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ActivityRow
                name="Community Health Workshop"
                project="Community Health Initiative"
                dueDate="Tomorrow"
                assignee="John Smith"
              />
              <ActivityRow
                name="Teacher Training Session"
                project="Education Empowerment"
                dueDate="In 2 days"
                assignee="Mary Johnson"
              />
              <ActivityRow
                name="Water Quality Testing"
                project="Clean Water Access"
                dueDate="In 3 days"
                assignee="Robert Brown"
              />
              <ActivityRow
                name="Women's Leadership Workshop"
                project="Women Empowerment"
                dueDate="In 5 days"
                assignee="Sarah Davis"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Button asChild>
                <Link href="/dashboard/activities">View All Activities</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}



function HRManagerDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Staff"
          value="48"
          description="Active employees"
          icon={<Users className="h-5 w-5" />}
        />
        <DashboardCard
          title="Attendance"
          value="92%"
          description="This month"
          icon={<Calendar className="h-5 w-5" />}
        />
        <DashboardCard
          title="Leave Requests"
          value="6"
          description="Pending approval"
          icon={<Calendar className="h-5 w-5" />}
        />
        <DashboardCard
          title="Training Sessions"
          value="3"
          description="Scheduled this month"
          icon={<BookOpen className="h-5 w-5" />}
        />
      </div>

      <Tabs defaultValue="employees">
        <TabsList>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
        </TabsList>
        <TabsContent value="employees" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Overview</CardTitle>
              <CardDescription>Summary of all employees by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <StaffMetricCard title="Project Staff" value="32" />
                  <StaffMetricCard title="Admin Staff" value="8" />
                  <StaffMetricCard title="Finance Staff" value="5" />
                  <StaffMetricCard title="Management" value="3" />
                </div>
                <div className="mt-4 flex justify-end">
                  <Button asChild>
                    <Link href="/dashboard/employees">Manage Employees</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Summary</CardTitle>
              <CardDescription>Overview of attendance for the current month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <StaffMetricCard title="Present" value="44" />
                  <StaffMetricCard title="Absent" value="2" />
                  <StaffMetricCard title="On Leave" value="2" />
                  <StaffMetricCard title="Late" value="5" />
                </div>
                <div className="mt-4 flex justify-end">
                  <Button asChild>
                    <Link href="/dashboard/attendance">View Attendance Details</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="training" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training Sessions</CardTitle>
              <CardDescription>Upcoming training sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <TrainingRow
                  name="Project Management Basics"
                  date="May 15, 2023"
                  participants="12"
                  status="Scheduled"
                />
                <TrainingRow name="Field Data Collection" date="May 22, 2023" participants="18" status="Scheduled" />
                <TrainingRow name="Community Engagement" date="May 29, 2023" participants="15" status="Scheduled" />
              </div>
              <div className="mt-4 flex justify-end">
                <Button asChild>
                  <Link href="/dashboard/training">Manage Training</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function FinanceManagerDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Budget"
          value="$1.2M"
          description="Current fiscal year"
          icon={<DollarSign className="h-5 w-5" />}
        />
        <DashboardCard
          title="Expenses"
          value="$820K"
          description="68% of budget"
          icon={<CreditCard className="h-5 w-5" />}
        />
        <DashboardCard
          title="Pending Invoices"
          value="8"
          description="$42K total"
          icon={<FileSpreadsheet className="h-5 w-5" />}
        />
        <DashboardCard
          title="Donor Funds"
          value="$350K"
          description="Available for allocation"
          icon={<Landmark className="h-5 w-5" />}
        />
      </div>

      <Tabs defaultValue="budget">
        <TabsList>
          <TabsTrigger value="budget">Budget Overview</TabsTrigger>
          <TabsTrigger value="expenses">Recent Expenses</TabsTrigger>
          <TabsTrigger value="donors">Donor Funds</TabsTrigger>
        </TabsList>
        <TabsContent value="budget" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Budget Allocation</CardTitle>
              <CardDescription>Budget allocation by project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <BudgetRow project="Community Health Initiative" allocated="$350K" spent="$245K" remaining="$105K" />
                <BudgetRow project="Education Empowerment" allocated="$280K" spent="$196K" remaining="$84K" />
                <BudgetRow project="Clean Water Access" allocated="$320K" spent="$224K" remaining="$96K" />
                <BudgetRow project="Women Empowerment" allocated="$250K" spent="$155K" remaining="$95K" />
              </div>
              <div className="mt-4 flex justify-end">
                <Button asChild>
                  <Link href="/dashboard/budget">View Budget Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Expenses</CardTitle>
              <CardDescription>Expenses submitted in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ExpenseRow
                  description="Field Travel - Community Health"
                  amount="$2,450"
                  submittedBy="John Smith"
                  status="Approved"
                />
                <ExpenseRow
                  description="Training Materials - Education"
                  amount="$1,850"
                  submittedBy="Mary Johnson"
                  status="Pending"
                />
                <ExpenseRow
                  description="Equipment - Water Testing"
                  amount="$3,200"
                  submittedBy="Robert Brown"
                  status="Approved"
                />
                <ExpenseRow
                  description="Workshop Venue - Women Empowerment"
                  amount="$1,200"
                  submittedBy="Sarah Davis"
                  status="Pending"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <Button asChild>
                  <Link href="/dashboard/expenses">View All Expenses</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="donors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Donor Funds</CardTitle>
              <CardDescription>Overview of donor contributions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <DonorRow name="Global Health Foundation" amount="$450K" allocated="$320K" remaining="$130K" />
                <DonorRow name="Education First Trust" amount="$280K" allocated="$210K" remaining="$70K" />
                <DonorRow name="Clean Water Initiative" amount="$320K" allocated="$240K" remaining="$80K" />
                <DonorRow name="Women's Rights Coalition" amount="$150K" allocated="$80K" remaining="$70K" />
              </div>
              <div className="mt-4 flex justify-end">
                <Button asChild>
                  <Link href="/dashboard/donors">Manage Donor Funds</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function FieldStaffDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="My Tasks"
          value="8"
          description="4 due this week"
          icon={<CheckSquare className="h-5 w-5" />}
        />
        <DashboardCard
          title="Attendance"
          value="22"
          description="Days present this month"
          icon={<Calendar className="h-5 w-5" />}
        />
        <DashboardCard
          title="Beneficiaries"
          value="156"
          description="Registered this month"
          icon={<Users className="h-5 w-5" />}
        />
        <DashboardCard
          title="Expenses"
          value="$850"
          description="Pending reimbursement"
          icon={<CreditCard className="h-5 w-5" />}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Tasks</CardTitle>
          <CardDescription>Your assigned tasks and activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <TaskRow
              name="Community Health Workshop"
              project="Community Health Initiative"
              dueDate="Tomorrow"
              status="In Progress"
            />
            <TaskRow
              name="Beneficiary Registration"
              project="Community Health Initiative"
              dueDate="May 18, 2023"
              status="Not Started"
            />
            <TaskRow
              name="Data Collection"
              project="Community Health Initiative"
              dueDate="May 20, 2023"
              status="Not Started"
            />
            <TaskRow
              name="Monthly Report Submission"
              project="Community Health Initiative"
              dueDate="May 31, 2023"
              status="Not Started"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button asChild>
              <Link href="/dashboard/tasks">View All Tasks</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Plan</CardTitle>
          <CardDescription>Your schedule for the current week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <WeeklyPlanRow day="Monday" activities="Team meeting, Field visit to Village A" />
            <WeeklyPlanRow day="Tuesday" activities="Data collection at Village B, Report preparation" />
            <WeeklyPlanRow day="Wednesday" activities="Community Health Workshop, Beneficiary registration" />
            <WeeklyPlanRow day="Thursday" activities="Field visit to Village C, Data validation" />
            <WeeklyPlanRow day="Friday" activities="Weekly report submission, Team debrief" />
          </div>
          <div className="mt-4 flex justify-end">
            <Button asChild>
              <Link href="/dashboard/weekly-plan">View Full Schedule</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function DefaultDashboard() {
  return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Welcome to the NGO Management System</h2>
        <p className="text-muted-foreground">Your personalized dashboard is being set up.</p>
      </div>
    </div>
  )
}

// Reusable components
function DashboardCard({
  title,
  value,
  description,
  icon,
}: { title: string; value: string; description: string; icon: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-xs text-muted-foreground">{description}</span>
          </div>
          <div className="rounded-full bg-primary/10 p-2 text-primary">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectRow({
  name,
  progress,
  status,
  manager,
}: { name: string; progress: number; status: string; manager: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="space-y-1">
        <p className="font-medium">{name}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <span className="mr-2">Manager: {manager}</span>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              status === "On Track" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800",
            )}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium">{progress}%</div>
        <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
          <div
            className={cn("h-full", status === "On Track" ? "bg-green-500" : "bg-yellow-500")}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

function ActivityRow({
  name,
  project,
  dueDate,
  assignee,
}: { name: string; project: string; dueDate: string; assignee: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="space-y-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">Project: {project}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">Due: {dueDate}</p>
        <p className="text-sm text-muted-foreground">Assigned to: {assignee}</p>
      </div>
    </div>
  )
}

function StaffMetricCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border p-3 text-center">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

function FinanceMetricCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border p-3 text-center">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

function TrainingRow({
  name,
  date,
  participants,
  status,
}: { name: string; date: string; participants: string; status: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="space-y-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">Date: {date}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">Participants: {participants}</p>
        <p className="text-sm text-muted-foreground">Status: {status}</p>
      </div>
    </div>
  )
}

function BudgetRow({
  project,
  allocated,
  spent,
  remaining,
}: { project: string; allocated: string; spent: string; remaining: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="space-y-1">
        <p className="font-medium">{project}</p>
        <p className="text-sm text-muted-foreground">Allocated: {allocated}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">Spent: {spent}</p>
        <p className="text-sm text-green-600">Remaining: {remaining}</p>
      </div>
    </div>
  )
}

function ExpenseRow({
  description,
  amount,
  submittedBy,
  status,
}: { description: string; amount: string; submittedBy: string; status: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="space-y-1">
        <p className="font-medium">{description}</p>
        <p className="text-sm text-muted-foreground">Submitted by: {submittedBy}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">{amount}</p>
        <p className={cn("text-sm", status === "Approved" ? "text-green-600" : "text-yellow-600")}>{status}</p>
      </div>
    </div>
  )
}

function DonorRow({
  name,
  amount,
  allocated,
  remaining,
}: { name: string; amount: string; allocated: string; remaining: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="space-y-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">Total Contribution: {amount}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">Allocated: {allocated}</p>
        <p className="text-sm text-green-600">Remaining: {remaining}</p>
      </div>
    </div>
  )
}

function TaskRow({
  name,
  project,
  dueDate,
  status,
}: { name: string; project: string; dueDate: string; status: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="space-y-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">Project: {project}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">Due: {dueDate}</p>
        <p
          className={cn(
            "text-sm",
            status === "Completed"
              ? "text-green-600"
              : status === "In Progress"
                ? "text-blue-600"
                : "text-muted-foreground",
          )}
        >
          {status}
        </p>
      </div>
    </div>
  )
}

function WeeklyPlanRow({ day, activities }: { day: string; activities: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="space-y-1">
        <p className="font-medium">{day}</p>
        <p className="text-sm text-muted-foreground">{activities}</p>
      </div>
    </div>
  )
}

