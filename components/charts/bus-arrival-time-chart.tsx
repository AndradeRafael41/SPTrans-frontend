"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { hora: "06:00", tempoMedio: 5 },
  { hora: "07:00", tempoMedio: 8 },
  { hora: "08:00", tempoMedio: 12 },
  { hora: "09:00", tempoMedio: 9 },
  { hora: "10:00", tempoMedio: 6 },
  { hora: "11:00", tempoMedio: 5 },
  { hora: "12:00", tempoMedio: 7 },
  { hora: "13:00", tempoMedio: 8 },
  { hora: "14:00", tempoMedio: 6 },
  { hora: "15:00", tempoMedio: 7 },
  { hora: "16:00", tempoMedio: 9 },
  { hora: "17:00", tempoMedio: 14 },
  { hora: "18:00", tempoMedio: 15 },
  { hora: "19:00", tempoMedio: 11 },
  { hora: "20:00", tempoMedio: 8 },
  { hora: "21:00", tempoMedio: 6 },
  { hora: "22:00", tempoMedio: 5 },
]

export default function BusArrivalTimeChart() {
  return (
    <ChartContainer
      config={{
        tempoMedio: {
          label: "Tempo Médio (min)",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="hora" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="tempoMedio"
            stroke="var(--color-tempoMedio)"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
