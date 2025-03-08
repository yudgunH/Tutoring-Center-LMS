import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Facebook, Linkedin, Mail } from "lucide-react"

export default function TeacherTeam() {
  const teachers = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      role: "Giáo viên Toán",
      experience: "10 năm kinh nghiệm",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Trần Thị B",
      role: "Giáo viên Tiếng Anh",
      experience: "8 năm kinh nghiệm",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Lê Văn C",
      role: "Giáo viên Vật lý",
      experience: "12 năm kinh nghiệm",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Phạm Thị D",
      role: "Giáo viên Hóa học",
      experience: "7 năm kinh nghiệm",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Đội ngũ giáo viên</h2>
            <p className="text-muted-foreground">Gặp gỡ những giáo viên tài năng và tận tâm của chúng tôi</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/teachers">Xem tất cả giáo viên</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src={teacher.image || "/placeholder.svg"} alt={teacher.name} fill className="object-cover" />
              </div>
              <CardHeader className="text-center">
                <h3 className="text-xl font-bold">{teacher.name}</h3>
                <p className="text-primary">{teacher.role}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{teacher.experience}</p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

