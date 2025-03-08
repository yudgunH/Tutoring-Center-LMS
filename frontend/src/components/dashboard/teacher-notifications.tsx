import { Bell, Info } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const notifications = [
  {
    id: 1,
    title: "Thông báo từ hệ thống",
    description: "Lịch họp giáo viên vào ngày 15/04/2025",
    time: "10 phút trước",
    type: "system",
  },
  {
    id: 2,
    title: "Thông báo từ học sinh",
    description: "Học sinh Nguyễn Văn X xin phép nghỉ học ngày 10/04/2025",
    time: "30 phút trước",
    type: "student",
  },
  {
    id: 3,
    title: "Thông báo từ hệ thống",
    description: "Cập nhật giáo trình mới cho lớp Toán nâng cao",
    time: "1 giờ trước",
    type: "system",
  },
  {
    id: 4,
    title: "Thông báo từ học sinh",
    description: "Học sinh Trần Thị Y gửi câu hỏi về bài tập số 5",
    time: "2 giờ trước",
    type: "student",
  },
]

export function TeacherNotifications() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "flex items-start gap-4 rounded-lg border p-3",
              notification.type === "system" && "border-sky-200 bg-sky-50",
              notification.type === "student" && "border-amber-200 bg-amber-50",
            )}
          >
            <div
              className={cn(
                "mt-0.5 rounded-full p-1",
                notification.type === "system" && "bg-sky-100 text-sky-600",
                notification.type === "student" && "bg-amber-100 text-amber-600",
              )}
            >
              {notification.type === "system" && <Info className="h-4 w-4" />}
              {notification.type === "student" && <Bell className="h-4 w-4" />}
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

