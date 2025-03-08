import { Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const schedule = [
  {
    id: 1,
    class: "Toán học nâng cao",
    time: "08:00 - 09:30",
    room: "P.201",
    status: "ongoing",
  },
  {
    id: 2,
    class: "Toán học cơ bản",
    time: "10:00 - 11:30",
    room: "P.202",
    status: "upcoming",
  },
  {
    id: 3,
    class: "Toán học nâng cao",
    time: "14:00 - 15:30",
    room: "P.201",
    status: "upcoming",
  },
]

export function TeacherSchedule() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lớp học</TableHead>
            <TableHead>Thời gian</TableHead>
            <TableHead>Phòng học</TableHead>
            <TableHead className="text-right">Trạng thái</TableHead>
            <TableHead className="text-right">Thao tác</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.class}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                  {item.time}
                </div>
              </TableCell>
              <TableCell>{item.room}</TableCell>
              <TableCell className="text-right">
                <Badge variant={item.status === "ongoing" ? "default" : "outline"}>
                  {item.status === "ongoing" ? "Đang diễn ra" : "Sắp diễn ra"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  {item.status === "ongoing" ? "Điểm danh" : "Chi tiết"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          Xem lịch dạy tuần này
        </Button>
      </div>
    </div>
  )
}

