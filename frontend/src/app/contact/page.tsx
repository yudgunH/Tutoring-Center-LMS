import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactForm } from "@/components/home/contact/contact-form"
import { GoogleMap } from "@/components/home/contact/google-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">Liên hệ với chúng tôi</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold">Thông tin liên hệ</h2>
            <p className="mt-2 text-muted-foreground">Hãy liên hệ với chúng tôi bằng một trong những cách dưới đây</p>

            <div className="mt-8 space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Địa chỉ</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Số 123 Đường ABC, Phường XYZ, Quận/Huyện, Thành phố
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Số điện thoại</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Hotline:{" "}
                      <a href="tel:0987654321" className="text-primary hover:underline">
                        0987 654 321
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tư vấn:{" "}
                      <a href="tel:0123456789" className="text-primary hover:underline">
                        0123 456 789
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <a href="mailto:info@trungtamxyz.com" className="text-primary hover:underline">
                        info@trungtamxyz.com
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <a href="mailto:hotro@trungtamxyz.com" className="text-primary hover:underline">
                        hotro@trungtamxyz.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Giờ làm việc</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Thứ Hai - Thứ Sáu: 8:00 - 20:00</p>
                    <p className="mt-1 text-sm text-muted-foreground">Thứ Bảy - Chủ Nhật: 8:00 - 17:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium">Kết nối với chúng tôi</h3>
              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Youtube"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Zalo"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.49 10.272v-.45h1.347v-.495h-1.347v-1.35h-.675v1.35h-1.35v.495h1.35v.45h-1.695v.495h1.695v.45h-2.04v.54h1.065c-.405.555-1.095.96-1.875 1.2l.315.54c.78-.285 1.425-.735 1.875-1.35v1.785h.675v-1.785c.45.6 1.095 1.065 1.875 1.35l.3-.54c-.765-.24-1.44-.645-1.845-1.2h1.05v-.54h-2.025v-.45h1.695v-.495h-1.695z" />
                    <path d="M17.79 17.19c-2.295-.075-4.41-.54-6.15-1.395l-.645.645c1.845.87 4.08 1.395 6.525 1.47l.27-.72zm-11.25.645c2.445-.075 4.68-.6 6.525-1.47l-.645-.645c-1.74.855-3.855 1.32-6.15 1.395l.27.72z" />
                    <path d="M12 2.025c-5.52 0-10.005 4.485-10.005 10.005 0 1.845.495 3.57 1.365 5.055l-.87 3.21 3.285-.87c1.44.795 3.075 1.245 4.815 1.245 5.52 0 10.005-4.485 10.005-10.005S17.52 2.025 12 2.025zm0 19.26c-1.935 0-3.735-.51-5.295-1.395l-3.75.99.99-3.63c-.975-1.605-1.53-3.48-1.53-5.49 0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5-4.71 10.5-10.5 10.5h.075z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Gửi tin nhắn cho chúng tôi</h2>
            <p className="mt-2 text-muted-foreground">
              Điền thông tin của bạn vào form dưới đây, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Vị trí của chúng tôi</h2>
          <div className="h-[400px] w-full overflow-hidden rounded-lg border">
            <GoogleMap />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Câu hỏi thường gặp</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "Trung tâm có các khóa học nào?",
    answer:
      "Trung tâm XYZ cung cấp nhiều khóa học đa dạng cho học sinh từ tiểu học đến THPT, bao gồm các môn Toán, Lý, Hóa, Sinh, Ngữ văn, Tiếng Anh và nhiều môn học khác. Chúng tôi cũng có các khóa luyện thi chuyên biệt cho các kỳ thi quan trọng.",
  },
  {
    question: "Làm thế nào để đăng ký khóa học?",
    answer:
      "Để đăng ký khóa học, bạn có thể liên hệ trực tiếp với trung tâm qua số điện thoại hotline, gửi email, hoặc điền form đăng ký trên website. Sau khi nhận được thông tin, nhân viên tư vấn sẽ liên hệ để hướng dẫn bạn các bước tiếp theo.",
  },
  {
    question: "Học phí của các khóa học là bao nhiêu?",
    answer:
      "Học phí của mỗi khóa học sẽ khác nhau tùy thuộc vào nội dung, thời lượng và cấp độ. Để biết chi tiết học phí của khóa học bạn quan tâm, vui lòng liên hệ với trung tâm để được tư vấn cụ thể.",
  },
  {
    question: "Trung tâm có chính sách ưu đãi học phí không?",
    answer:
      "Có, trung tâm thường xuyên có các chương trình ưu đãi học phí cho học sinh đăng ký sớm, học sinh cũ, hoặc đăng ký theo nhóm. Ngoài ra, chúng tôi cũng có chính sách học bổng cho học sinh có hoàn cảnh khó khăn hoặc có thành tích học tập xuất sắc.",
  },
  {
    question: "Lịch học tại trung tâm như thế nào?",
    answer:
      "Trung tâm có lịch học linh hoạt vào các buổi tối trong tuần và cả ngày vào cuối tuần. Khi đăng ký, bạn có thể chọn lịch học phù hợp với thời gian của mình. Chúng tôi cũng có thể điều chỉnh lịch học để phù hợp với nhu cầu của học viên.",
  },
]

