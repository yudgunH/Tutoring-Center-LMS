import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { NewsCard } from "@/components/home/news/news-card"
import { FeaturedNews } from "@/components/home/news/featured-news"
import { NewsCategories } from "@/components/home/news/news-categories"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">Tin tức & Sự kiện</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Cập nhật thông tin mới nhất về hoạt động và sự kiện tại Trung tâm XYZ
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Featured news - only on desktop */}
        <div className="mb-8 hidden lg:block">
          <FeaturedNews article={featuredArticle} />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main content */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Bài viết mới nhất</h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Tất cả</Badge>
                <Badge variant="outline">Sự kiện</Badge>
                <Badge variant="outline">Giáo dục</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                2
              </Button>
              <Button size="sm" className="h-8 w-8 p-0">
                3
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                4
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                5
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Featured articles */}
              <Card>
                <CardContent className="p-4 pt-6">
                  <h3 className="mb-4 text-lg font-semibold">Bài viết nổi bật</h3>
                  <div className="space-y-4">
                    {featuredArticles.map((article) => (
                      <div key={article.id} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/tin-tuc/${article.slug}`}
                            className="line-clamp-2 font-medium hover:text-primary"
                          >
                            {article.title}
                          </Link>
                          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4">
                  <Button variant="ghost" size="sm" className="w-full">
                    Xem tất cả
                  </Button>
                </CardFooter>
              </Card>

              {/* Categories */}
              <NewsCategories />

              {/* Newsletter subscription */}
              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Đăng ký nhận tin</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Nhận thông báo về các bài viết và sự kiện mới nhất
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email của bạn"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                    <Button className="w-full">Đăng ký</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const featuredArticle = {
  id: 1,
  title: "Lễ tổng kết năm học 2024-2025 và vinh danh học sinh xuất sắc",
  slug: "le-tong-ket-nam-hoc-2024-2025",
  image: "/placeholder.svg?height=400&width=800",
  date: "28/03/2025",
  author: "Admin",
  excerpt:
    "Trung tâm XYZ đã tổ chức thành công Lễ tổng kết năm học 2024-2025, vinh danh những học sinh có thành tích xuất sắc và những đóng góp tích cực cho cộng đồng giáo dục.",
  category: "Sự kiện",
  readTime: "5 phút đọc",
}

const articles = [
  {
    id: 2,
    title: "5 phương pháp học tập hiệu quả cho học sinh THPT",
    slug: "5-phuong-phap-hoc-tap-hieu-qua",
    image: "/placeholder.svg?height=300&width=500",
    date: "25/03/2025",
    author: "Nguyễn Văn A",
    excerpt:
      "Bài viết chia sẻ 5 phương pháp học tập hiệu quả giúp học sinh THPT cải thiện kết quả học tập và chuẩn bị tốt cho kỳ thi đại học sắp tới.",
    category: "Giáo dục",
    readTime: "7 phút đọc",
  },
  {
    id: 3,
    title: "Hội thảo 'Định hướng nghề nghiệp cho học sinh lớp 12' sắp diễn ra",
    slug: "hoi-thao-dinh-huong-nghe-nghiep",
    image: "/placeholder.svg?height=300&width=500",
    date: "20/03/2025",
    author: "Trần Thị B",
    excerpt:
      "Trung tâm XYZ phối hợp cùng các trường đại học tổ chức hội thảo định hướng nghề nghiệp cho học sinh lớp 12, giúp các em có cái nhìn tổng quan về các ngành nghề.",
    category: "Sự kiện",
    readTime: "4 phút đọc",
  },
  {
    id: 4,
    title: "Khai giảng khóa học Tiếng Anh giao tiếp cho học sinh tiểu học",
    slug: "khai-giang-khoa-hoc-tieng-anh-giao-tiep",
    image: "/placeholder.svg?height=300&width=500",
    date: "18/03/2025",
    author: "Lê Văn C",
    excerpt:
      "Trung tâm XYZ chính thức khai giảng khóa học Tiếng Anh giao tiếp dành cho học sinh tiểu học với phương pháp giảng dạy hiện đại và tương tác.",
    category: "Khóa học",
    readTime: "3 phút đọc",
  },
  {
    id: 5,
    title: "Học sinh Trung tâm XYZ đạt giải cao trong kỳ thi Olympic Toán học",
    slug: "hoc-sinh-dat-giai-cao-olympic-toan-hoc",
    image: "/placeholder.svg?height=300&width=500",
    date: "15/03/2025",
    author: "Phạm Thị D",
    excerpt:
      "Chúc mừng các học sinh của Trung tâm XYZ đã xuất sắc đạt giải cao trong kỳ thi Olympic Toán học cấp thành phố vừa qua.",
    category: "Thành tích",
    readTime: "6 phút đọc",
  },
  {
    id: 6,
    title: "Phương pháp giúp học sinh vượt qua áp lực học tập",
    slug: "phuong-phap-vuot-qua-ap-luc-hoc-tap",
    image: "/placeholder.svg?height=300&width=500",
    date: "10/03/2025",
    author: "Đỗ Văn E",
    excerpt:
      "Bài viết chia sẻ các phương pháp giúp học sinh vượt qua áp lực học tập, cân bằng cuộc sống và đạt kết quả tốt trong học tập.",
    category: "Tâm lý",
    readTime: "8 phút đọc",
  },
]

const featuredArticles = [
  {
    id: 7,
    title: "Trung tâm XYZ mở rộng cơ sở vật chất, đón đầu năm học mới",
    slug: "trung-tam-mo-rong-co-so-vat-chat",
    image: "/placeholder.svg?height=100&width=100",
    date: "05/03/2025",
  },
  {
    id: 8,
    title: "Phương pháp học Toán hiệu quả cho học sinh THCS",
    slug: "phuong-phap-hoc-toan-hieu-qua",
    image: "/placeholder.svg?height=100&width=100",
    date: "01/03/2025",
  },
  {
    id: 9,
    title: "Lịch khai giảng các lớp học kỳ II năm học 2024-2025",
    slug: "lich-khai-giang-cac-lop-hoc-ky-2",
    image: "/placeholder.svg?height=100&width=100",
    date: "25/02/2025",
  },
]

