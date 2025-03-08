"use client"

import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CourseFiltersProps {
  className?: string
}

export function CourseFilters({ className }: CourseFiltersProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Cấp lớp</h3>
        <div className="flex flex-wrap gap-2">
          {grades.map((grade) => (
            <Badge key={grade} variant="outline" className="cursor-pointer hover:bg-primary/10">
              {grade}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Môn học</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <span>Chọn môn học</span>
              <span className="ml-auto opacity-50">+</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Tìm môn học..." />
              <CommandList>
                <CommandEmpty>Không tìm thấy môn học</CommandEmpty>
                <CommandGroup>
                  {subjects.map((subject) => (
                    <CommandItem key={subject} value={subject} onSelect={() => {}}>
                      <Check className="mr-2 h-4 w-4 opacity-0" />
                      {subject}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <Separator />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="difficulty">
          <AccordionTrigger className="text-sm font-medium">Mức độ</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pt-1">
              {difficulties.map((difficulty) => (
                <div key={difficulty} className="flex items-center space-x-2">
                  <input type="checkbox" id={difficulty} className="h-4 w-4 rounded border-gray-300" />
                  <label
                    htmlFor={difficulty}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {difficulty}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="duration">
          <AccordionTrigger className="text-sm font-medium">Thời lượng</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pt-1">
              {durations.map((duration) => (
                <div key={duration} className="flex items-center space-x-2">
                  <input type="checkbox" id={duration} className="h-4 w-4 rounded border-gray-300" />
                  <label
                    htmlFor={duration}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {duration}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
          Đặt lại
        </Button>
        <Button size="sm">Áp dụng</Button>
      </div>
    </div>
  )
}

const grades = ["Lớp 1-5", "Lớp 6-9", "Lớp 10-12", "Đại học", "Mọi lứa tuổi"]

const subjects = ["Toán", "Vật lý", "Hóa học", "Sinh học", "Ngữ văn", "Tiếng Anh", "Lịch sử", "Địa lý", "Tin học"]

const difficulties = ["Cơ bản", "Trung bình", "Nâng cao", "Chuyên sâu"]

const durations = ["1 tháng", "2 tháng", "3 tháng", "4 tháng", "Trên 4 tháng"]

