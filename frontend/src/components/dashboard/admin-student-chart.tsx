import { Progress } from "@/components/ui/progress"

const data = [
  { month: "T1", newStudents: 20, totalStudents: 400, percentage: 5 },
  { month: "T2", newStudents: 15, totalStudents: 415, percentage: 3.6 },
  { month: "T3", newStudents: 25, totalStudents: 440, percentage: 5.7 },
  { month: "T4", newStudents: 18, totalStudents: 458, percentage: 3.9 },
  { month: "T5", newStudents: 12, totalStudents: 470, percentage: 2.6 },
  { month: "T6", newStudents: 16, totalStudents: 486, percentage: 3.4 },
]

export function AdminStudentChart() {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.month} className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{item.month}</span>
            <div className="flex items-center gap-4">
              <span>Học sinh mới: {item.newStudents}</span>
              <span>Tổng: {item.totalStudents}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full">
              <Progress value={item.percentage} className="h-2" />
            </div>
            <span className="w-12 text-right text-sm">{item.percentage}%</span>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between pt-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary"></div>
          <span>Học sinh mới</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span>Tổng học sinh</span>
        </div>
      </div>
    </div>
  )
}

