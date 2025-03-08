import { BookOpen, CheckCircle, Clock, FileText } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeacherSchedule } from "@/components/dashboard/teacher-schedule"
import { TeacherClassList } from "@/components/dashboard/teacher-class-list"
import { TeacherAssignments } from "@/components/dashboard/teacher-assignments"
import { TeacherAttendance } from "@/components/dashboard/teacher-attendance"
import { TeacherNotifications } from "@/components/dashboard/teacher-notifications"

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Giáo viên</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Lớp học phụ trách</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Tổng số lớp học đang phụ trách</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Học sinh</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86</div>
            <p className="text-xs text-muted-foreground">Tổng số học sinh đang dạy</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Bài tập</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Bài tập cần chấm điểm</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tỷ lệ điểm danh</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Tỷ lệ điểm danh trung bình</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Lịch dạy hôm nay</CardTitle>
            <CardDescription>Lịch giảng dạy trong ngày</CardDescription>
          </CardHeader>
          <CardContent>
            <TeacherSchedule />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Thông báo mới</CardTitle>
            <CardDescription>Thông báo từ hệ thống và học sinh</CardDescription>
          </CardHeader>
          <CardContent>
            <TeacherNotifications />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Bài tập cần xử lý</CardTitle>
              <CardDescription>Bài tập cần chấm điểm và nhận xét</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <TeacherAssignments />
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Lớp học đang phụ trách</CardTitle>
              <CardDescription>Danh sách các lớp học đang phụ trách</CardDescription>
            </div>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">Tất cả</TabsTrigger>
                <TabsTrigger value="active">Đang diễn ra</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <TeacherClassList />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Báo cáo điểm danh</CardTitle>
          <CardDescription>Thống kê tình trạng điểm danh của các lớp</CardDescription>
        </CardHeader>
        <CardContent>
          <TeacherAttendance />
        </CardContent>
      </Card>
    </div>
  )
}

