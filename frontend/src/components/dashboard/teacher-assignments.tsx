import { AlertCircle, CheckCircle, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const assignments = [
  {
    id: 1,
    title: "Bài tập về nhà số 5",
    class: "Toán học nâng cao",
    deadline: "Hôm nay, 23:59",
    submitted: 15,
    total: 18,
    status: "urgent",
  },
  {
    id: 2,
    title: "Bài kiểm tra giữa kỳ",
    class: "Toán học cơ bản",
    deadline: "Ngày mai, 23:59",
    submitted: 20,
    total: 22,
    status: "normal",
  },
  {
    id: 3,
    title: "Bài tập về nhà số 4",
    class: "Ôn thi đại học",
    deadline: "Đã hết hạn",
    submitted: 12,
    total: 15,
    status: "late",
  },
]

export function TeacherAssignments() {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className={cn(
              "rounded-lg border p-3",
              assignment.status === "urgent" && "border-amber-200 bg-amber-50",
              assignment.status === "late" && "border-rose-200 bg-rose-50",
            )}
          >
            <div className="flex items-center justify-between">
              <div className="font-medium">{assignment.title}</div>
              <div
                className={cn(
                  "flex items-center rounded-full px-2 py-1 text-xs font-medium",
                  assignment.status === "urgent" && "bg-amber-100 text-amber-800",
                  assignment.status === "normal" && "bg-sky-100 text-sky-800",
                  assignment.status === "late" && "bg-rose-100 text-rose-800",
                )}
              >
                {assignment.status === "urgent" && (
                  <>
                    <Clock className="mr-1 h-3 w-3" />
                    Gấp
                  </>
                )}
                {assignment.status === "normal" && (
                  <>
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Bình thường
                  </>
                )}
                {assignment.status === "late" && (
                  <>
                    <AlertCircle className="mr-1 h-3 w-3" />
                    Trễ hạn
                  </>
                )}
              </div>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {assignment.class} • {assignment.deadline}
            </div>
            <div className="mt-3">
              <div className="mb-1 flex items-center justify-between text-xs">
                <span>
                  Đã nộp: {assignment.submitted}/{assignment.total}
                </span>
                <span>{Math.round((assignment.submitted / assignment.total) * 100)}%</span>
              </div>
              <Progress value={(assignment.submitted / assignment.total) * 100} />
            </div>
            <div className="mt-3 flex justify-end">
              <Button size="sm">Chấm điểm</Button>
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

