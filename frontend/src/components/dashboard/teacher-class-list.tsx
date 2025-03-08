import { Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const classes = [
  {
    id: 1,
    name: "Toán học nâng cao",
    level: "Lớp 10-12",
    students: 18,
    status: "active",
  },
  {
    id: 2,
    name: "Toán học cơ bản",
    level: "Lớp 6-9",
    students: 22,
    status: "active",
  },
  {
    id: 3,
    name: "Ôn thi đại học",
    level: "Lớp 12",
    students: 15,
    status: "active",
  },
  {
    id: 4,
    name: "Toán nâng cao",
    level: "Lớp 10-12",
    students: 20,
    status: "upcoming",
  },
]

export function TeacherClassList() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lớp học</TableHead>
            <TableHead>Cấp độ</TableHead>
            <TableHead>Học sinh</TableHead>
            <TableHead className="text-right">Trạng thái</TableHead>
            <TableHead className="text-right">Thao tác</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((class_) => (
            <TableRow key={class_.id}>
              <TableCell className="font-medium">{class_.name}</TableCell>
              <TableCell>{class_.level}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Users className="mr-1 h-3 w-3 text-muted-foreground" />
                  {class_.students}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Badge variant={class_.status === "active" ? "default" : "outline"}>
                  {class_.status === "active" ? "Đang diễn ra" : "Sắp diễn ra"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
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

