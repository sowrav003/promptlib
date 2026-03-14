import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HeroBadge() {
  return (
    <Badge
      variant="secondary"
      className="px-3 py-1 flex items-center gap-2 w-fit"
    >
      <Sparkles size={14} />
      The ultimate AI prompt repository
    </Badge>
  )
}