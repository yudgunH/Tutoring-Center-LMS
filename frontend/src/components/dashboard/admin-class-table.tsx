import { Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const classes = [
  {
    id: 1,
    name: "Toán học nâng cao",
    time: "08:00 - 09:30",
    teacher: "Nguyễn Văn A",
    students: 18,
    status: "ongoing",
  },
  {
    id: 2,
    name: "Tiếng Anh giao tiếp",
    time: "10:00 - 11:30",
    teacher: "Trần Thị B",
    students: 15,
    status: "upcoming",
  },
  {
    id: 3,
    name: "Vật lý cơ bản",
    time: "13:00 - 14:30",
    teacher: "Lê Văn C",
    students: 20,
    status: "upcoming",
  },
  {
    id: 4,
    name: "Hóa học chuyên sâu",
    time: "15:00 - 16:30",
    teacher: "Phạm Thị D",
    students: 12,
    status: "upcoming",
  },
]

export function AdminClassTable() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lớp học</TableHead>
            <TableHead>Thời gian</TableHead>
            <TableHead>Giáo viên</TableHead>
            <TableHead className="text-right">Học sinh</TableHead>
            <TableHead className="text-right">Trạng thái</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((class_) => (
            <TableRow key={class_.id}>
              <TableCell className="font-medium">{class_.name}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                  {class_.time}
                </div>
              </TableCell>
              <TableCell>{class_.teacher}</TableCell>
              <TableCell className="text-right">{class_.students}</TableCell>
              <TableCell className="text-right">
                <Badge variant={class_.status === "ongoing" ? "default" : "outline"}>
                  {class_.status === "ongoing" ? "Đang diễn ra" : "Sắp diễn ra"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          Xem tất cả lớp học
        </Button>
      </div>
    </div>
  )
}

