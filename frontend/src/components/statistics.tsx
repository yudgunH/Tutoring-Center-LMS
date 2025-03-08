import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, Clock } from "lucide-react"

export default function Statistics() {
  const stats = [
    {
      id: 1,
      title: "Học sinh",
      value: "5,000+",
      description: "Đã và đang học tại trung tâm",
      icon: Users,
    },
    {
      id: 2,
      title: "Khóa học",
      value: "50+",
      description: "Đa dạng các môn học và cấp độ",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Tỷ lệ hài lòng",
      value: "98%",
      description: "Phụ huynh và học sinh hài lòng",
      icon: Award,
    },
    {
      id: 4,
      title: "Năm kinh nghiệm",
      value: "15+",
      description: "Trong lĩnh vực giáo dục",
      icon: Clock,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Thành tựu của chúng tôi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Những con số biết nói về chất lượng và sự phát triển của trung tâm qua các năm
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.id} className="border-none shadow-md">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-lg font-medium mb-2">{stat.title}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

