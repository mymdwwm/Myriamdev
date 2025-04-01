import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Intermediate":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Expert":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
        <div className="font-medium">{name}</div>
        <Badge variant="outline" className={`${getLevelColor(level)}`}>
          {level}
        </Badge>
      </CardContent>
    </Card>
  )
}

