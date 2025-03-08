import { BookOpen, Calendar, Clock, GraduationCap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentSchedule } from "@/components/dashboard/student-schedule"
import { StudentAssignments } from "@/components/dashboard/student-assignments"
import { StudentGrades } from "@/components/dashboard/student-grades"
import { StudentNotifications } from "@/components/dashboard/student-notifications"
import { StudentMaterials } from "@/components/dashboard/student-materials"

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Học sinh</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Lớp học đang tham gia</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Tổng số lớp học đang tham gia</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Bài tập</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Bài tập cần hoàn thành</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Điểm trung bình</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5</div>
            <p className="text-xs text-muted-foreground">Điểm trung bình các môn</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tỷ lệ điểm danh</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">Tỷ lệ điểm danh của bạn</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Lịch học</CardTitle>
              <CardDescription>Lịch học trong tuần này</CardDescription>
            </div>
            <Tabs defaultValue="today">
              <TabsList>
                <TabsTrigger value="today">Hôm nay</TabsTrigger>
                <TabsTrigger value="week">Tuần này</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <StudentSchedule />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Thông báo mới</CardTitle>
            <CardDescription>Thông báo từ giáo viên và hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <StudentNotifications />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Bài tập cần hoàn thành</CardTitle>
            <CardDescription>Bài tập sắp đến hạn</CardDescription>
          </CardHeader>
          <CardContent>
            <StudentAssignments />
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Điểm số gần đây</CardTitle>
            <CardDescription>Kết quả các bài kiểm tra gần đây</CardDescription>
          </CardHeader>
          <CardContent>
            <StudentGrades />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tài liệu học tập mới</CardTitle>
          <CardDescription>Tài liệu mới được cập nhật</CardDescription>
        </CardHeader>
        <CardContent>
          <StudentMaterials />
        </CardContent>
      </Card>
    </div>
  )
}

