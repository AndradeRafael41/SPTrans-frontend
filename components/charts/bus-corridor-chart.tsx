"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Corredor Norte", value: 42, fill: "hsl(var(--chart-1))" },
  { name: "Corredor Sul", value: 38, fill: "hsl(var(--chart-2))" },
  { name: "Corredor Leste", value: 35, fill: "hsl(var(--chart-3))" },
  { name: "Corredor Oeste", value: 27, fill: "hsl(var(--chart-4))" },
  { name: "Corredor Central", value: 23, fill: "hsl(var(--chart-5))" },
]

export default function BusCorridorChart() {
  return (
    <ChartContainer
      config={{
        norte: {
          label: "Corredor Norte",
          color: "hsl(var(--chart-1))",
        },
        sul: {
          label: "Corredor Sul",
          color: "hsl(var(--chart-2))",
        },
        leste: {
          label: "Corredor Leste",
          color: "hsl(var(--chart-3))",
        },
        oeste: {
          label: "Corredor Oeste",
          color: "hsl(var(--chart-4))",
        },
        central: {
          label: "Corredor Central",
          color: "hsl(var(--chart-5))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
