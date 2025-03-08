import { Bell, Info } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const notifications = [
  {
    id: 1,
    title: "Thông báo từ giáo viên",
    description: "Thầy Nguyễn Văn A đã giao bài tập mới cho lớp Toán nâng cao",
    time: "10 phút trước",
    type: "teacher",
  },
  {
    id: 2,
    title: "Thông báo từ hệ thống",
    description: "Lịch học lớp Tiếng Anh giao tiếp đã được thay đổi",
    time: "30 phút trước",
    type: "system",
  },
  {
    id: 3,
    title: "Thông báo từ giáo viên",
    description: "Cô Trần Thị B đã chấm điểm bài kiểm tra số 3",
    time: "1 giờ trước",
    type: "teacher",
  },
  {
    id: 4,
    title: "Thông báo từ hệ thống",
    description: "Tài liệu mới đã được cập nhật cho lớp Vật lý cơ bản",
    time: "2 giờ trước",
    type: "system",
  },
]

export function StudentNotifications() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "flex items-start gap-4 rounded-lg border p-3",
              notification.type === "teacher" && "border-amber-200 bg-amber-50",
              notification.type === "system" && "border-sky-200 bg-sky-50",
            )}
          >
            <div
              className={cn(
                "mt-0.5 rounded-full p-1",
                notification.type === "teacher" && "bg-amber-100 text-amber-600",
                notification.type === "system" && "bg-sky-100 text-sky-600",
              )}
            >
              {notification.type === "teacher" && <Bell className="h-4 w-4" />}
              {notification.type === "system" && <Info className="h-4 w-4" />}
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

