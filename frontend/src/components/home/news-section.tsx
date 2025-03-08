import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Khai giảng lớp Toán nâng cao khóa mới",
      date: "15/05/2023",
      excerpt: "Trung tâm chính thức khai giảng lớp Toán nâng cao dành cho học sinh lớp 11 chuẩn bị thi đại học...",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Hội thảo hướng nghiệp cho học sinh THPT",
      date: "20/04/2023",
      excerpt: "Trung tâm tổ chức hội thảo hướng nghiệp với sự tham gia của các chuyên gia đầu ngành...",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Chương trình ôn thi học kỳ hè 2023",
      date: "10/04/2023",
      excerpt: "Trung tâm triển khai chương trình ôn thi học kỳ hè với nhiều ưu đãi đặc biệt cho học sinh...",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Tin tức & Sự kiện</h2>
            <p className="text-muted-foreground">Cập nhật những tin tức mới nhất từ trung tâm</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/news">Xem tất cả tin tức</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0" asChild>
                  <Link href={`/news/${item.id}`}>Đọc thêm</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

