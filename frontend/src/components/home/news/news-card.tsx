import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface NewsCardProps {
  article: {
    id: number
    title: string
    slug: string
    image: string
    date: string
    author: string
    excerpt: string
    category: string
    readTime: string
  }
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute right-2 top-2">{article.category}</Badge>
      </div>
      <div className="p-4">
        <Link href={`/tin-tuc/${article.slug}`}>
          <h3 className="line-clamp-2 text-xl font-semibold group-hover:text-primary">{article.title}</h3>
        </Link>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{article.excerpt}</p>

        <div className="mt-4">
          <Button asChild variant="outline" size="sm">
            <Link href={`/tin-tuc/${article.slug}`}>Đọc tiếp</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

