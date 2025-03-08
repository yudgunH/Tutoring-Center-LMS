import { AlertCircle, Bell, Info } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const notifications = [
  {
    id: 1,
    title: "Lỗi hệ thống",
    description: "Có lỗi xảy ra khi đồng bộ dữ liệu điểm danh",
    time: "10 phút trước",
    type: "error",
  },
  {
    id: 2,
    title: "Yêu cầu phê duyệt",
    description: "Giáo viên Nguyễn Văn A yêu cầu phê duyệt thay đổi lịch dạy",
    time: "30 phút trước",
    type: "warning",
  },
  {
    id: 3,
    title: "Thông báo mới",
    description: "5 học sinh mới đã đăng ký khóa học Toán nâng cao",
    time: "1 giờ trước",
    type: "info",
  },
  {
    id: 4,
    title: "Thông báo mới",
    description: "Báo cáo tổng kết tháng đã được cập nhật",
    time: "2 giờ trước",
    type: "info",
  },
]

export function AdminNotifications() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "flex items-start gap-4 rounded-lg border p-3",
              notification.type === "error" && "border-rose-200 bg-rose-50",
              notification.type === "warning" && "border-amber-200 bg-amber-50",
              notification.type === "info" && "border-sky-200 bg-sky-50",
            )}
          >
            <div
              className={cn(
                "mt-0.5 rounded-full p-1",
                notification.type === "error" && "bg-rose-100 text-rose-600",
                notification.type === "warning" && "bg-amber-100 text-amber-600",
                notification.type === "info" && "bg-sky-100 text-sky-600",
              )}
            >
              {notification.type === "error" && <AlertCircle className="h-4 w-4" />}
              {notification.type === "warning" && <Bell className="h-4 w-4" />}
              {notification.type === "info" && <Info className="h-4 w-4" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">{notification.title}</div>
                <div className="text-xs text-muted-foreground">{notification.time}</div>
              </div>
              <div className="mt-1 text-sm">{notification.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          Xem tất cả thông báo
        </Button>
      </div>
    </div>
  )
}

