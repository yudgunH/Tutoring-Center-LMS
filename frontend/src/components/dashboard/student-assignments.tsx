import { AlertCircle, Clock, FileText } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const assignments = [
  {
    id: 1,
    title: "Bài tập về nhà số 5",
    class: "Toán học nâng cao",
    deadline: "Hôm nay, 23:59",
    status: "urgent",
  },
  {
    id: 2,
    title: "Bài kiểm tra giữa kỳ",
    class: "Tiếng Anh giao tiếp",
    deadline: "Ngày mai, 23:59",
    status: "normal",
  },
  {
    id: 3,
    title: "Bài tập thực hành",
    class: "Vật lý cơ bản",
    deadline: "3 ngày nữa",
    status: "normal",
  },
]

export function StudentAssignments() {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className={cn(
              "flex items-start gap-4 rounded-lg border p-3",
              assignment.status === "urgent" && "border-rose-200 bg-rose-50",
              assignment.status === "normal" && "border-sky-200 bg-sky-50",
            )}
          >
            <div
              className={cn(
                "mt-0.5 rounded-full p-1",
                assignment.status === "urgent" && "bg-rose-100 text-rose-600",
                assignment.status === "normal" && "bg-sky-100 text-sky-600",
              )}
            >
              {assignment.status === "urgent" ? <AlertCircle className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">{assignment.title}</div>
                <div
                  className={cn(
                    "flex items-center rounded-full px-2 py-1 text-xs font-medium",
                    assignment.status === "urgent" && "bg-rose-100 text-rose-800",
                    assignment.status === "normal" && "bg-sky-100 text-sky-800",
                  )}
                >
                  <Clock className="mr-1 h-3 w-3" />
                  {assignment.deadline}
                </div>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{assignment.class}</div>
              <div className="mt-3 flex justify-end">
                <Button size="sm">Nộp bài</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          Xem tất cả bài tập
        </Button>
      </div>
    </div>
  )
}

