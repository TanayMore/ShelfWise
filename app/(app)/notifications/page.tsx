"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotificationsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Real-time popups would appear here. Configure in Settings.
        </CardContent>
      </Card>
    </div>
  )
}
