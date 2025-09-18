"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <label className="flex items-center justify-between gap-2 text-sm">
            <div>
              <div className="font-medium">Email Notifications</div>
              <div className="text-muted-foreground">Low stock, expiry, refills, sales milestones</div>
            </div>
            <Switch defaultChecked />
          </label>
          <label className="flex items-center justify-between gap-2 text-sm">
            <div>
              <div className="font-medium">Compact Tables</div>
              <div className="text-muted-foreground">Show tighter table rows</div>
            </div>
            <Switch />
          </label>
        </CardContent>
      </Card>
    </div>
  )
}
