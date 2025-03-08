import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

const attendanceData = [
  { name: "Toán nâng cao", present: 16, absent: 2, total: 18, percentage: 89 },
  { name: "Toán cơ bản", present: 20, absent: 2, total: 22, percentage: 91 },
  { name: "Ôn thi đại học", present: 14, absent: 1, total: 15, percentage: 93 },
  { name: "Toán nâng cao (sắp)", present: 0, absent: 0, total: 20, percentage: 0 },
]

export function TeacherAttendance() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {attendanceData.map((item) => (
          <Card key={item.name}>
            <CardContent className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">{item.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {item.present}/{item.total} học sinh
                </span>
              </div>
              <Progress value={item.percentage} className="h-2 w-full" />
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-green-600">Có mặt: {item.present}</span>
                <span className="text-red-600">Vắng mặt: {item.absent}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          Xem báo cáo chi tiết
        </Button>
      </div>
    </div>
  )
}

