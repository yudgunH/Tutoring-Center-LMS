import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Con tôi đã có sự tiến bộ rõ rệt sau khi học tại trung tâm. Các thầy cô rất tận tâm và phương pháp giảng dạy hiệu quả.",
      name: "Nguyễn Thị E",
      role: "Phụ huynh học sinh lớp 10",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      content:
        "Môi trường học tập tại trung tâm rất thoải mái và thân thiện. Tôi đã cải thiện điểm số các môn học một cách đáng kể.",
      name: "Trần Văn F",
      role: "Học sinh lớp 12",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      content:
        "Giáo viên tại trung tâm không chỉ giỏi chuyên môn mà còn rất nhiệt tình. Con tôi rất thích đến trung tâm học.",
      name: "Lê Thị G",
      role: "Phụ huynh học sinh lớp 8",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Phản hồi từ phụ huynh và học sinh</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Những chia sẻ chân thực từ phụ huynh và học sinh về trải nghiệm học tập tại trung tâm
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="italic text-muted-foreground mb-6">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

