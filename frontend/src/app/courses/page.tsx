import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CourseCard } from "@/components/home/courses/course-card"
import { CourseFilters } from "@/components/home/courses/course-filters"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">Các khóa học tại Trung tâm XYZ</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Khám phá các khóa học chất lượng cao giúp nâng cao kiến thức và kỹ năng của bạn
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Mobile filter button and search */}
        <div className="flex items-center justify-between gap-4 md:hidden">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Tìm kiếm khóa học..." className="w-full pl-8" />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Lọc khóa học">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Bộ lọc</SheetTitle>
                <SheetDescription>Lọc khóa học theo nhu cầu của bạn</SheetDescription>
              </SheetHeader>
              <CourseFilters className="mt-4" />
            </SheetContent>
          </Sheet>
        </div>

        <div className="mt-8 flex flex-col gap-8 md:flex-row">
          {/* Desktop sidebar filters */}
          <div className="hidden md:block md:w-1/4">
            <div className="sticky top-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Bộ lọc</h2>
                <Button variant="ghost" size="sm">
                  Xóa tất cả
                </Button>
              </div>
              <Separator className="my-4" />
              <CourseFilters />
            </div>
          </div>

          {/* Course listing */}
          <div className="flex-1">
            <div className="mb-6 hidden items-center justify-between md:flex">
              <p className="text-muted-foreground">Hiển thị 12 khóa học</p>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Tìm kiếm khóa học..." className="w-[300px] pl-8" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="mx-auto">
                Xem thêm khóa học
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample course data
const courses = [
  {
    id: 1,
    title: "Toán học nâng cao",
    image: "/placeholder.svg?height=200&width=300",
    level: "Lớp 10-12",
    duration: "3 tháng",
    startDate: "15/04/2025",
    fee: "2.500.000đ",
    instructor: "Thầy Nguyễn Văn A",
    subject: "Toán",
    difficulty: "Nâng cao",
  },
  {
    id: 2,
    title: "Vật lý cơ bản",
    image: "/placeholder.svg?height=200&width=300",
    level: "Lớp 6-9",
    duration: "2 tháng",
    startDate: "10/04/2025",
    fee: "1.800.000đ",
    instructor: "Cô Trần Thị B",
    subject: "Vật lý",
    difficulty: "Cơ bản",
  },
  {
    id: 3,
    title: "Hóa học chuyên sâu",
    image: "/placeholder.svg?height=200&width=300",
    level: "Lớp 10-12",
    duration: "4 tháng",
    startDate: "20/04/2025",
    fee: "2.800.000đ",
    instructor: "Thầy Lê Văn C",
    subject: "Hóa học",
    difficulty: "Nâng cao",
  },
  {
    id: 4,
    title: "Tiếng Anh giao tiếp",
    image: "/placeholder.svg?height=200&width=300",
    level: "Mọi lứa tuổi",
    duration: "3 tháng",
    startDate: "05/04/2025",
    fee: "2.200.000đ",
    instructor: "Cô Phạm Thị D",
    subject: "Tiếng Anh",
    difficulty: "Cơ bản",
  },
  {
    id: 5,
    title: "Ngữ văn nâng cao",
    image: "/placeholder.svg?height=200&width=300",
    level: "Lớp 10-12",
    duration: "3 tháng",
    startDate: "12/04/2025",
    fee: "2.000.000đ",
    instructor: "Cô Hoàng Thị E",
    subject: "Ngữ văn",
    difficulty: "Nâng cao",
  },
  {
    id: 6,
    title: "Lập trình Python cơ bản",
    image: "/placeholder.svg?height=200&width=300",
    level: "Lớp 8-12",
    duration: "2 tháng",
    startDate: "18/04/2025",
    fee: "3.000.000đ",
    instructor: "Thầy Đỗ Văn F",
    subject: "Tin học",
    difficulty: "Cơ bản",
  },
]

