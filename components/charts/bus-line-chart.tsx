"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Urbano", value: 78, fill: "hsl(var(--chart-1))" },
  { name: "Metropolitano", value: 32, fill: "hsl(var(--chart-2))" },
  { name: "Expresso", value: 17, fill: "hsl(var(--chart-3))" },
]

export default function BusLineChart() {
  return (
    <ChartContainer
      config={{
        urbano: {
          label: "Urbano",
          color: "hsl(var(--chart-1))",
        },
        metropolitano: {
          label: "Metropolitano",
          color: "hsl(var(--chart-2))",
        },
        expresso: {
          label: "Expresso",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
