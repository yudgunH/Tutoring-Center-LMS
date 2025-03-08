import { BookOpen, FileText, Film, Link2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const materials = [
  {
    id: 1,
    title: "Tài liệu ôn tập giữa kỳ",
    subject: "Toán học nâng cao",
    date: "05/04/2025",
    type: "document",
  },
  {
    id: 2,
    title: "Video bài giảng - Unit 5",
    subject: "Tiếng Anh giao tiếp",
    date: "03/04/2025",
    type: "video",
  },
  {
    id: 3,
    title: "Bài đọc thêm về Động lực học",
    subject: "Vật lý cơ bản",
    date: "01/04/2025",
    type: "link",
  },
  {
    id: 4,
    title: "Sách tham khảo - Giải tích",
    subject: "Toán học nâng cao",
    date: "28/03/2025",
    type: "book",
  },
]

export function StudentMaterials() {
  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tên tài liệu</TableHead>
            <TableHead>Môn học</TableHead>
            <TableHead>Ngày cập nhật</TableHead>
            <TableHead className="text-right">Thao tác</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {materials.map((material) => (
            <TableRow key={material.id}>
              <TableCell>
                <div className="flex items-center">
                  <div
                    className={cn(
                      "mr-2 rounded-full p-1",
                      material.type === "document" && "bg-blue-100 text-blue-600",
                      material.type === "video" && "bg-red-100 text-red-600",
                      material.type === "link" && "bg-purple-100 text-purple-600",
                      material.type === "book" && "bg-green-100 text-green-600",
                    )}
                  >
                    {material.type === "document" && <FileText className="h-4 w-4" />}
                    {material.type === "video" && <Film className="h-4 w-4" />}
                    {material.type === "link" && <Link2 className="h-4 w-4" />}
                    {material.type === "book" && <BookOpen className="h-4 w-4" />}
                  </div>
                  <span className="font-medium">{material.title}</span>
                </div>
              </TableCell>
              <TableCell>{material.subject}</TableCell>
              <TableCell>{material.date}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  Xem
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          Xem tất cả tài liệu
        </Button>
      </div>
    </div>
  )
}

