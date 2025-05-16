"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

export default function BusStopsMap() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando carregamento do mapa
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full rounded-md bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <Card className="p-4 shadow-lg">
          <p className="text-center text-sm text-muted-foreground">
            Mapa interativo com as paradas e corredores seria renderizado aqui.
            <br />
            Utilizaria uma biblioteca como Leaflet ou Google Maps para mostrar as paradas
            <br />
            com base nas coordenadas de latitude e longitude do banco de dados.
          </p>
        </Card>
      </div>
    </div>
  )
}
