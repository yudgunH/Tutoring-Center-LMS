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
    teacher: "Nguyễn Văn A",
    status: "ongoing",
  },
  {
    id: 2,
    class: "Tiếng Anh giao tiếp",
    time: "10:00 - 11:30",
    room: "P.202",
    teacher: "Trần Thị B",
    status: "upcoming",
  },
  {
    id: 3,
    class: "Vật lý cơ bản",
    time: "14:00 - 15:30",
    room: "P.203",
    teacher: "Lê Văn C",
    status: "upcoming",
  },
]

export function StudentSchedule() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lớp học</TableHead>
            <TableHead>Thời gian</TableHead>
            <TableHead>Phòng học</TableHead>
            <TableHead>Giáo viên</TableHead>
            <TableHead className="text-right">Trạng thái</TableHead>
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
              <TableCell>{item.teacher}</TableCell>
              <TableCell className="text-right">
                <Badge variant={item.status === "ongoing" ? "default" : "outline"}>
                  {item.status === "ongoing" ? "Đang diễn ra" : "Sắp diễn ra"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          Xem lịch học đầy đủ
        </Button>
      </div>
    </div>
  )
}

