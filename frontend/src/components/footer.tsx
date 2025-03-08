import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/80">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo Trung tâm"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="font-bold text-xl">Trung Tâm Gia Sư</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Nâng cao kiến thức, mở rộng tương lai với đội ngũ giáo viên chất lượng cao và phương pháp giảng dạy hiện
              đại.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Khóa học
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Đội ngũ giáo viên
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tin tức & Sự kiện
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">123 Đường ABC, Quận XYZ, Thành phố HCM</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">(028) 1234 5678</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@trungtamgiasu.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Đăng ký nhận tin</h3>
            <p className="text-muted-foreground mb-4">Đăng ký để nhận thông tin mới nhất về khóa học và sự kiện</p>
            <div className="flex gap-2">
              <Input placeholder="Email của bạn" type="email" />
              <Button>Đăng ký</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Trung Tâm Gia Sư. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Điều khoản sử dụng
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

