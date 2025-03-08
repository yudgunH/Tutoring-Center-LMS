import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Hero Banner"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32 lg:py-40 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none">
            Nâng cao kiến thức, mở rộng tương lai
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            Trung tâm gia sư hàng đầu với đội ngũ giáo viên chất lượng cao, chương trình học cá nhân hóa và môi trường
            học tập hiện đại.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/courses">Đăng ký ngay</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm" asChild>
              <Link href="/about">Tìm hiểu thêm</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

