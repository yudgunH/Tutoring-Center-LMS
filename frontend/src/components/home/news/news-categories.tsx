import { ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function NewsCategories() {
  return (
    <Card>
      <CardContent className="p-4 pt-6">
        <h3 className="mb-4 text-lg font-semibold">Danh mục</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex cursor-pointer items-center justify-between rounded-md px-2 py-2 hover:bg-muted"
            >
              <span className="text-sm">{category.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{category.count}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const categories = [
  { name: "Tất cả", count: 42 },
  { name: "Sự kiện", count: 12 },
  { name: "Giáo dục", count: 15 },
  { name: "Khóa học", count: 8 },
  { name: "Thành tích", count: 5 },
  { name: "Tâm lý", count: 2 },
]

