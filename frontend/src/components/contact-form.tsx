"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast("Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",)

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Liên hệ tư vấn</h2>
            <p className="text-muted-foreground">Để lại thông tin để nhận tư vấn miễn phí về các khóa học phù hợp</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Họ và tên</Label>
                <Input id="name" name="name" placeholder="Nhập họ và tên" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" name="phone" placeholder="Nhập số điện thoại" required />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Nhập địa chỉ email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Khóa học quan tâm</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn khóa học" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Toán học</SelectItem>
                    <SelectItem value="english">Tiếng Anh</SelectItem>
                    <SelectItem value="physics">Vật lý</SelectItem>
                    <SelectItem value="chemistry">Hóa học</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Nội dung cần tư vấn</Label>
              <Textarea id="message" name="message" placeholder="Nhập nội dung cần tư vấn" rows={4} />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

