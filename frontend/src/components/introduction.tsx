import Image from "next/image"

export default function Introduction() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Về Trung Tâm Gia Sư</h2>
            <p className="text-muted-foreground mb-4">
              Được thành lập từ năm 2010, Trung tâm Gia sư của chúng tôi đã trở thành điểm đến tin cậy cho hàng nghìn
              học sinh và phụ huynh. Với sứ mệnh cung cấp nền giáo dục chất lượng cao, chúng tôi không ngừng đổi mới
              phương pháp giảng dạy và nâng cao chất lượng đội ngũ giáo viên.
            </p>
            <p className="text-muted-foreground mb-4">
              Tầm nhìn của chúng tôi là trở thành trung tâm gia sư hàng đầu, nơi mỗi học sinh đều có cơ hội phát triển
              toàn diện và đạt được thành công trong học tập cũng như cuộc sống.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Phương pháp giảng dạy hiện đại</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Giáo viên giàu kinh nghiệm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Lộ trình học tập cá nhân hóa</span>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="Hình ảnh trung tâm" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

