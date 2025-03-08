"use client"

import { GraduationCap, User, Users } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface UserRoleSelectorProps {
  value: string
  onValueChange: (value: "admin" | "teacher" | "student") => void
}

export function UserRoleSelector({ value, onValueChange }: UserRoleSelectorProps) {
  return (
    <Select value={value} onValueChange={(value) => onValueChange(value as "admin" | "teacher" | "student")}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Chọn vai trò" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Quản trị viên</span>
          </div>
        </SelectItem>
        <SelectItem value="teacher">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Giáo viên</span>
          </div>
        </SelectItem>
        <SelectItem value="student">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span>Học sinh</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

