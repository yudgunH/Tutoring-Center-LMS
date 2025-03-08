import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

const grades = [
  {
    id: 1,
    subject: "Toán học nâng cao",
    test: "Kiểm tra giữa kỳ",
    date: "01/04/2025",
    score: 8.5,
  },
  {
    id: 2,
    subject: "Tiếng Anh giao tiếp",
    test: "Bài kiểm tra số 3",
    date: "28/03/2025",
    score: 9.0,
  },
  {
    id: 3,
    subject: "Vật lý cơ bản",
    test: "Bài kiểm tra số 2",
    date: "25/03/2025",
    score: 7.5,
  },
]

const subjectProgress = [
  { subject: "Toán", currentScore: 8.5, previousScore: 7.5, progress: 85 },
  { subject: "Tiếng Anh", currentScore: 9.0, previousScore: 8.5, progress: 90 },
  { subject: "Vật lý", currentScore: 7.5, previousScore: 7.0, progress: 75 },
]

export function StudentGrades() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {subjectProgress.map((item) => (
          <Card key={item.subject}>
            <CardContent className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">{item.subject}</h3>
                <span className="text-sm font-medium">{item.currentScore}/10</span>
              </div>
              <Progress value={item.progress} className="h-2 w-full" />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Điểm trước: {item.previousScore}</span>
                <span>Điểm hiện tại: {item.currentScore}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Môn học</TableHead>
            <TableHead>Bài kiểm tra</TableHead>
            <TableHead>Ngày</TableHead>
            <TableHead className="text-right">Điểm số</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grades.map((grade) => (
            <TableRow key={grade.id}>
              <TableCell className="font-medium">{grade.subject}</TableCell>
              <TableCell>{grade.test}</TableCell>
              <TableCell>{grade.date}</TableCell>
              <TableCell className="text-right">{grade.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          Xem tất cả điểm số
        </Button>
      </div>
    </div>
  )
}

