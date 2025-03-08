import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Facebook, Share2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { NewsCategories } from "@/components/home/news/news-categories"

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the article based on the slug
  const article = articles.find((article) => article.slug === params.slug) || articles[0]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/tin-tuc" className="hover:text-primary">
            Tin tức
          </Link>
          <span>/</span>
          <span>{article.category}</span>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main content */}
          <div className="flex-1">
            <article>
              <h1 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">{article.title}</h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <Badge variant="outline">{article.category}</Badge>
              </div>

              <div className="relative mt-6 h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] lg:h-[500px]">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>

              <div className="prose prose-lg mt-8 max-w-none">
                <p>{article.excerpt}</p>
                <h2>Nội dung chi tiết</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
                <p>
                  Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                  nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                  nisl sit amet nisl.
                </p>
                <blockquote>
                  "Giáo dục là vũ khí mạnh nhất mà bạn có thể sử dụng để thay đổi thế giới." - Nelson Mandela
                </blockquote>
                <p>
                  Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                  nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                  nisl sit amet nisl.
                </p>
                <h3>Kết luận</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </div>

              {/* Share buttons */}
              <div className="mt-8 flex items-center gap-4">
                <span className="font-medium">Chia sẻ:</span>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.49 10.272v-.45h1.347v-.495h-1.347v-1.35h-.675v1.35h-1.35v.495h1.35v.45h-1.695v.495h1.695v.45h-2.04v.54h1.065c-.405.555-1.095.96-1.875 1.2l.315.54c.78-.285 1.425-.735 1.875-1.35v1.785h.675v-1.785c.45.6 1.095 1.065 1.875 1.35l.3-.54c-.765-.24-1.44-.645-1.845-1.2h1.05v-.54h-2.025v-.45h1.695v-.495h-1.695z" />
                    <path d="M17.79 17.19c-2.295-.075-4.41-.54-6.15-1.395l-.645.645c1.845.87 4.08 1.395 6.525 1.47l.27-.72zm-11.25.645c2.445-.075 4.68-.6 6.525-1.47l-.645-.645c-1.74.855-3.855 1.32-6.15 1.395l.27.72z" />
                    <path d="M12 2.025c-5.52 0-10.005 4.485-10.005 10.005 0 1.845.495 3.57 1.365 5.055l-.87 3.21 3.285-.87c1.44.795 3.075 1.245 4.815 1.245 5.52 0 10.005-4.485 10.005-10.005S17.52 2.025 12 2.025zm0 19.26c-1.935 0-3.735-.51-5.295-1.395l-3.75.99.99-3.63c-.975-1.605-1.53-3.48-1.53-5.49 0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5-4.71 10.5-10.5 10.5h.075z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              <Separator className="my-8" />

              {/* Author info */}
              <div className="flex flex-col items-center gap-4 rounded-lg bg-muted p-6 sm:flex-row">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=64&width=64" alt={article.author} fill className="object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold">{article.author}</h3>
                  <p className="text-sm text-muted-foreground">
                    Giảng viên tại Trung tâm XYZ với hơn 10 năm kinh nghiệm trong lĩnh vực giáo dục.
                  </p>
                </div>
              </div>

              {/* Related articles */}
              <div className="mt-8">
                <h2 className="mb-4 text-2xl font-bold">Bài viết liên quan</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {relatedArticles.map((article) => (
                    <Card key={article.id} className="overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Link href={`/tin-tuc/${article.slug}`} className="line-clamp-2 font-medium hover:text-primary">
                          {article.title}
                        </Link>
                        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Categories */}
              <NewsCategories />

              {/* Recent articles */}
              <Card>
                <CardContent className="p-4 pt-6">
                  <h3 className="mb-4 text-lg font-semibold">Bài viết gần đây</h3>
                  <div className="space-y-4">
                    {recentArticles.map((article) => (
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
              </Card>

              {/* Popular tags */}
              <Card>
                <CardContent className="p-4 pt-6">
                  <h3 className="mb-4 text-lg font-semibold">Thẻ phổ biến</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">
                        {tag}
                      </Badge>
                    ))}
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
const articles = [
  {
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
  },
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
]

const relatedArticles = [
  {
    id: 3,
    title: "Hội thảo 'Định hướng nghề nghiệp cho học sinh lớp 12' sắp diễn ra",
    slug: "hoi-thao-dinh-huong-nghe-nghiep",
    image: "/placeholder.svg?height=300&width=500",
    date: "20/03/2025",
  },
  {
    id: 4,
    title: "Khai giảng khóa học Tiếng Anh giao tiếp cho học sinh tiểu học",
    slug: "khai-giang-khoa-hoc-tieng-anh-giao-tiep",
    image: "/placeholder.svg?height=300&width=500",
    date: "18/03/2025",
  },
]

const recentArticles = [
  {
    id: 5,
    title: "Học sinh Trung tâm XYZ đạt giải cao trong kỳ thi Olympic Toán học",
    slug: "hoc-sinh-dat-giai-cao-olympic-toan-hoc",
    image: "/placeholder.svg?height=100&width=100",
    date: "15/03/2025",
  },
  {
    id: 6,
    title: "Phương pháp giúp học sinh vượt qua áp lực học tập",
    slug: "phuong-phap-vuot-qua-ap-luc-hoc-tap",
    image: "/placeholder.svg?height=100&width=100",
    date: "10/03/2025",
  },
  {
    id: 7,
    title: "Trung tâm XYZ mở rộng cơ sở vật chất, đón đầu năm học mới",
    slug: "trung-tam-mo-rong-co-so-vat-chat",
    image: "/placeholder.svg?height=100&width=100",
    date: "05/03/2025",
  },
]

const tags = [
  "Giáo dục",
  "Học tập",
  "Kỹ năng",
  "Thi cử",
  "Đại học",
  "THPT",
  "THCS",
  "Tiểu học",
  "Ngoại ngữ",
  "Toán học",
  "Khoa học",
]

