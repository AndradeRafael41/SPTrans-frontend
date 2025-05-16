"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Com Acesso PCD", value: 376, fill: "hsl(var(--chart-1))" },
  { name: "Sem Acesso PCD", value: 56, fill: "hsl(var(--chart-2))" },
]

export default function BusAccessibilityChart() {
  return (
    <ChartContainer
      config={{
        comAcesso: {
          label: "Com Acesso PCD",
          color: "hsl(var(--chart-1))",
        },
        semAcesso: {
          label: "Sem Acesso PCD",
          color: "hsl(var(--chart-2))",
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
