"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface CourseCardProps {
  course: {
    id: number
    title: string
    image: string
    level: string
    duration: string
    startDate: string
    fee: string
    instructor: string
    subject: string
    difficulty: string
  }
}

export function CourseCard({ course }: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute right-2 top-2">{course.subject}</Badge>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-xl font-semibold">{course.title}</h3>
        <div className="mt-3 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Khai giảng: {course.startDate}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-medium text-primary">{course.fee}</p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Xem chi tiết
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{course.title}</DialogTitle>
                <DialogDescription>Thông tin chi tiết về khóa học</DialogDescription>
              </DialogHeader>
              <div className="relative mt-2 h-56 w-full overflow-hidden rounded-md">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-muted-foreground">Đối tượng</h4>
                  <p>{course.level}</p>
                </div>
                <div>
                  <h4 className="font-medium text-muted-foreground">Thời lượng</h4>
                  <p>{course.duration}</p>
                </div>
                <div>
                  <h4 className="font-medium text-muted-foreground">Khai giảng</h4>
                  <p>{course.startDate}</p>
                </div>
                <div>
                  <h4 className="font-medium text-muted-foreground">Học phí</h4>
                  <p className="font-medium text-primary">{course.fee}</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <h4 className="font-medium">Giảng viên</h4>
                <p className="mt-1">{course.instructor}</p>
              </div>
              <div className="mt-4">
                <h4 className="font-medium">Mô tả khóa học</h4>
                <p className="mt-1 text-muted-foreground">
                  Khóa học {course.title} cung cấp kiến thức {course.difficulty.toLowerCase()} về{" "}
                  {course.subject.toLowerCase()}, giúp học viên nắm vững các khái niệm cơ bản và ứng dụng thực tiễn.
                  Chương trình được thiết kế phù hợp với học sinh {course.level.toLowerCase()}, tập trung vào phương
                  pháp giải bài tập và kỹ thuật làm bài thi hiệu quả.
                </p>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Đóng
                </Button>
                <Button>Đăng ký ngay</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

