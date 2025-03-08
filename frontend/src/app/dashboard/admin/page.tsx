import { CalendarDays, Plus, School, User, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminStatCard } from "@/components/dashboard/admin-stat-card"
import { AdminStudentChart } from "@/components/dashboard/admin-student-chart"
import { AdminClassTable } from "@/components/dashboard/admin-class-table"
import { AdminNotifications } from "@/components/dashboard/admin-notifications"
import { AdminQuickActions } from "@/components/dashboard/admin-quick-actions"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Thêm mới
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AdminStatCard
          title="Tổng số lớp học"
          value="24"
          description="+2 so với tháng trước"
          icon={<School className="h-4 w-4 text-muted-foreground" />}
          trend="up"
        />
        <AdminStatCard
          title="Tổng số học sinh"
          value="486"
          description="+12 so với tháng trước"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          trend="up"
        />
        <AdminStatCard
          title="Tổng số giáo viên"
          value="32"
          description="+1 so với tháng trước"
          icon={<User className="h-4 w-4 text-muted-foreground" />}
          trend="up"
        />
        <AdminStatCard
          title="Tỷ lệ điểm danh"
          value="92%"
          description="-2% so với tháng trước"
          icon={<CalendarDays className="h-4 w-4 text-muted-foreground" />}
          trend="down"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Thống kê học sinh</CardTitle>
            <CardDescription>Số lượng học sinh mới và tổng số học sinh theo tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminStudentChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Thông báo hệ thống</CardTitle>
            <CardDescription>Các thông báo mới nhất từ hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminNotifications />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Thao tác nhanh</CardTitle>
            <CardDescription>Các thao tác thường xuyên sử dụng</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminQuickActions />
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Lớp học gần đây</CardTitle>
              <CardDescription>Các lớp học đang diễn ra hoặc sắp diễn ra</CardDescription>
            </div>
            <Tabs defaultValue="today">
              <TabsList>
                <TabsTrigger value="today">Hôm nay</TabsTrigger>
                <TabsTrigger value="week">Tuần này</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <AdminClassTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

