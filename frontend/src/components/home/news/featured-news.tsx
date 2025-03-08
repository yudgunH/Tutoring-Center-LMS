import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface FeaturedNewsProps {
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

export function FeaturedNews({ article }: FeaturedNewsProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <Badge className="mb-3">{article.category}</Badge>
        <Link href={`/tin-tuc/${article.slug}`}>
          <h2 className="mb-3 text-2xl font-bold leading-tight md:text-3xl">{article.title}</h2>
        </Link>

        <p className="mb-4 line-clamp-2 max-w-3xl text-gray-200">{article.excerpt}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <Button asChild className="mt-4" variant="secondary">
          <Link href={`/tin-tuc/${article.slug}`}>Đọc tiếp</Link>
        </Button>
      </div>
    </div>
  )
}

