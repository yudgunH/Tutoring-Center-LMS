"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { UserRoleSelector } from "@/components/user-role-selector"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [role, setRole] = useState<"admin" | "teacher" | "student">("admin")
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar for desktop */}
      <div className="hidden w-64 flex-col border-r bg-background md:flex">
        <div className="flex h-14 items-center border-b px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <div className="font-semibold">Trung tâm XYZ</div>
          </div>
        </div>

        <div className="p-4">
          <UserRoleSelector value={role} onValueChange={setRole} />
        </div>

        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Link
              href={`/dashboard/${role}`}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === `/dashboard/${role}` ? "bg-accent text-accent-foreground" : "transparent",
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>

            {role === "admin" && (
              <>
                <Link
                  href="/dashboard/admin/students"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/admin/students" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <Users className="h-4 w-4" />
                  <span>Học sinh</span>
                </Link>
                <Link
                  href="/dashboard/admin/teachers"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/admin/teachers" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <User className="h-4 w-4" />
                  <span>Giáo viên</span>
                </Link>
                <Link
                  href="/dashboard/admin/courses"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/admin/courses" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Khóa học</span>
                </Link>
                <Link
                  href="/dashboard/admin/reports"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/admin/reports" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Báo cáo</span>
                </Link>
              </>
            )}

            {role === "teacher" && (
              <>
                <Link
                  href="/dashboard/teacher/classes"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/teacher/classes" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <Users className="h-4 w-4" />
                  <span>Lớp học</span>
                </Link>
                <Link
                  href="/dashboard/teacher/assignments"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/teacher/assignments" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Bài tập</span>
                </Link>
                <Link
                  href="/dashboard/teacher/schedule"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/teacher/schedule" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Lịch dạy</span>
                </Link>
              </>
            )}

            {role === "student" && (
              <>
                <Link
                  href="/dashboard/student/schedule"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/student/schedule" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Lịch học</span>
                </Link>
                <Link
                  href="/dashboard/student/assignments"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/student/assignments" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Bài tập</span>
                </Link>
                <Link
                  href="/dashboard/student/grades"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/student/grades" ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Điểm số</span>
                </Link>
              </>
            )}

            <Link
              href="/dashboard/settings"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === "/dashboard/settings" ? "bg-accent text-accent-foreground" : "transparent",
              )}
            >
              <Settings className="h-4 w-4" />
              <span>Cài đặt</span>
            </Link>
          </nav>
        </div>

        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 rounded-full p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>{role === "admin" ? "AD" : role === "teacher" ? "GV" : "HS"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Hồ sơ</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Cài đặt</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Đăng xuất</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="text-sm">
              <div className="font-medium">
                {role === "admin" ? "Admin" : role === "teacher" ? "Nguyễn Văn A" : "Trần Thị B"}
              </div>
              <div className="text-xs text-muted-foreground">
                {role === "admin" ? "Quản trị viên" : role === "teacher" ? "Giáo viên" : "Học sinh"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <div className="font-semibold">Trung tâm XYZ</div>
            </div>
          </div>

          <div className="p-4">
            <UserRoleSelector value={role} onValueChange={setRole} />
          </div>

          <div className="flex-1 overflow-auto py-2">
            <nav className="grid gap-1 px-2">
              <Link
                href={`/dashboard/${role}`}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === `/dashboard/${role}` ? "bg-accent text-accent-foreground" : "transparent",
                )}
                onClick={() => setOpen(false)}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>

              {/* Same navigation links as desktop, but with onClick to close the sheet */}
              {/* ... (copy the same links as above but add onClick={() => setOpen(false)}) */}
            </nav>
          </div>

          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>{role === "admin" ? "AD" : role === "teacher" ? "GV" : "HS"}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">
                  {role === "admin" ? "Admin" : role === "teacher" ? "Nguyễn Văn A" : "Trần Thị B"}
                </div>
                <div className="text-xs text-muted-foreground">
                  {role === "admin" ? "Quản trị viên" : role === "teacher" ? "Giáo viên" : "Học sinh"}
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center border-b bg-background px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span className="text-sm font-medium">
              {role === "admin" ? "Quản trị viên" : role === "teacher" ? "Giáo viên" : "Học sinh"}
            </span>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

// Add this component if it's missing
function Menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

