import { BookOpen, CalendarPlus, FileText, UserPlus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

const actions = [
  {
    icon: <UserPlus className="h-4 w-4" />,
    label: "Thêm học sinh mới",
    description: "Tạo hồ sơ học sinh mới",
  },
  {
    icon: <Users className="h-4 w-4" />,
    label: "Thêm giáo viên mới",
    description: "Tạo hồ sơ giáo viên mới",
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    label: "Thêm khóa học mới",
    description: "Tạo khóa học mới",
  },
  {
    icon: <CalendarPlus className="h-4 w-4" />,
    label: "Tạo lớp học mới",
    description: "Tạo lớp học và phân công giáo viên",
  },
  {
    icon: <FileText className="h-4 w-4" />,
    label: "Báo cáo nhanh",
    description: "Xem báo cáo tổng quan",
  },
]

export function AdminQuickActions() {
  return (
    <div className="space-y-2">
      {actions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          className="flex h-auto w-full items-start justify-start gap-4 p-3 text-left"
        >
          <div className="rounded-md bg-primary/10 p-2 text-primary">{action.icon}</div>
          <div>
            <div className="font-medium">{action.label}</div>
            <div className="text-xs text-muted-foreground">{action.description}</div>
          </div>
        </Button>
      ))}
    </div>
  )
}

