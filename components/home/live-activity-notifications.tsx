"use client"

import { useEffect, useState } from "react"
import { TrendingUp, ArrowDownToLine, ArrowUpFromLine, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Activity {
  id: string
  name: string
  action: "profit" | "deposit" | "withdrawal"
  amount: number
  timestamp: Date
}

const investorNames = [
  "Michael Chen",
  "Sarah Johnson",
  "David Martinez",
  "Emma Williams",
  "James Anderson",
  "Olivia Brown",
  "Robert Taylor",
  "Sophia Davis",
  "William Garcia",
  "Isabella Rodriguez",
  "Alexander Lee",
  "Mia Wilson",
  "Daniel Moore",
  "Charlotte Martin",
  "Matthew Jackson",
  "Amelia Thompson",
]

const generateRandomActivity = (): Activity => {
  const actions: Activity["action"][] = ["profit", "deposit", "withdrawal"]
  const action = actions[Math.floor(Math.random() * actions.length)]

  let amount: number
  if (action === "profit") {
    amount = Math.floor(Math.random() * 15000) + 500 // $500 - $15,500
  } else if (action === "deposit") {
    amount = Math.floor(Math.random() * 50000) + 1000 // $1,000 - $51,000
  } else {
    amount = Math.floor(Math.random() * 20000) + 500 // $500 - $20,500
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    name: investorNames[Math.floor(Math.random() * investorNames.length)],
    action,
    amount,
    timestamp: new Date(),
  }
}

export function LiveActivityNotifications() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show first notification after 2 seconds
    const initialTimeout = setTimeout(() => {
      setActivities([generateRandomActivity()])
    }, 2000)

    // Generate new activity every 8-12 seconds
    const interval = setInterval(
      () => {
        const newActivity = generateRandomActivity()
        setActivities((prev) => {
          // Keep only the last 3 activities
          const updated = [newActivity, ...prev].slice(0, 3)
          return updated
        })
      },
      Math.random() * 4000 + 8000,
    ) // Random between 8-12 seconds

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  // Auto-remove old activities after 6 seconds
  useEffect(() => {
    if (activities.length > 0) {
      const timeout = setTimeout(() => {
        setActivities((prev) => prev.slice(0, -1))
      }, 6000)
      return () => clearTimeout(timeout)
    }
  }, [activities])

  if (!isVisible || activities.length === 0) return null

  const getActionConfig = (action: Activity["action"]) => {
    switch (action) {
      case "profit":
        return {
          icon: TrendingUp,
          label: "made a profit of",
          color: "text-green-600 dark:text-green-400",
          bgColor: "bg-green-50 dark:bg-green-950/30",
          borderColor: "border-green-200 dark:border-green-800",
        }
      case "deposit":
        return {
          icon: ArrowDownToLine,
          label: "deposited",
          color: "text-blue-600 dark:text-blue-400",
          bgColor: "bg-blue-50 dark:bg-blue-950/30",
          borderColor: "border-blue-200 dark:border-blue-800",
        }
      case "withdrawal":
        return {
          icon: ArrowUpFromLine,
          label: "withdrew",
          color: "text-purple-600 dark:text-purple-400",
          bgColor: "bg-purple-50 dark:bg-purple-950/30",
          borderColor: "border-purple-200 dark:border-purple-800",
        }
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 max-w-sm">
      {activities.map((activity, index) => {
        const config = getActionConfig(activity.action)
        const Icon = config.icon

        return (
          <div
            key={activity.id}
            className={cn(
              "animate-in slide-in-from-left-full duration-500",
              "flex items-start gap-3 p-4 rounded-lg border shadow-lg backdrop-blur-sm",
              "bg-white/95 dark:bg-gray-900/95",
              config.borderColor,
              index > 0 && "opacity-70",
            )}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className={cn("p-2 rounded-full", config.bgColor)}>
              <Icon className={cn("h-4 w-4", config.color)} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{activity.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {config.label}{" "}
                <span className={cn("font-bold", config.color)}>${activity.amount.toLocaleString()}</span>
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">Just now</p>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close notifications"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
