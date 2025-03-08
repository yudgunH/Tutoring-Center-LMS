import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Toán học nâng cao",
      target: "Học sinh THPT",
      duration: "3 tháng",
      fee: "2.500.000đ",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Tiếng Anh giao tiếp",
      target: "Học sinh THCS",
      duration: "6 tháng",
      fee: "3.200.000đ",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Vật lý chuyên đề",
      target: "Học sinh THPT",
      duration: "4 tháng",
      fee: "2.800.000đ",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Hóa học cơ bản",
      target: "Học sinh THCS",
      duration: "3 tháng",
      fee: "2.300.000đ",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Khóa học nổi bật</h2>
            <p className="text-muted-foreground">Khám phá các khóa học chất lượng cao tại trung tâm</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/courses">Xem tất cả khóa học</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Đối tượng:</span>
                    <Badge variant="outline">{course.target}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Thời lượng:</span>
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Học phí:</span>
                    <span className="text-sm font-medium">{course.fee}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href={`/courses/${course.id}`}>Xem chi tiết</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

