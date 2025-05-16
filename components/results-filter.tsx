"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Plus, Filter } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FilterCondition {
  id: string
  column: string
  operator: string
  value: string
}

interface ResultsFilterProps {
  columns: string[]
  onApplyFilters: (filters: FilterCondition[]) => void
}

export default function ResultsFilter({ columns, onApplyFilters }: ResultsFilterProps) {
  const [filters, setFilters] = useState<FilterCondition[]>([])
  const [expanded, setExpanded] = useState(false)

  // Adiciona um filtro vazio quando não há nenhum
  useEffect(() => {
    if (filters.length === 0 && columns.length > 0) {
      addFilter()
    }
  }, [columns])

  // Adiciona um novo filtro
  const addFilter = () => {
    const newFilter: FilterCondition = {
      id: Date.now().toString(),
      column: columns[0] || "",
      operator: "eq",
      value: "",
    }
    setFilters([...filters, newFilter])
  }

  // Remove um filtro
  const removeFilter = (id: string) => {
    setFilters(filters.filter((filter) => filter.id !== id))
  }

  // Atualiza um filtro
  const updateFilter = (id: string, field: keyof FilterCondition, value: string) => {
    setFilters(filters.map((filter) => (filter.id === id ? { ...filter, [field]: value } : filter)))
  }

  // Aplica os filtros
  const applyFilters = () => {
    // Filtra apenas condições válidas (com valor preenchido)
    const validFilters = filters.filter((filter) => filter.value.trim() !== "")
    onApplyFilters(validFilters)
  }

  // Limpa todos os filtros
  const clearFilters = () => {
    setFilters([])
    onApplyFilters([])
  }

  return (
    <Accordion
      type="single"
      collapsible
      value={expanded ? "filters" : ""}
      onValueChange={(value) => setExpanded(value === "filters")}
      className="mb-4 rounded-md border"
    >
      <AccordionItem value="filters" className="border-none">
        <AccordionTrigger className="px-4 py-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filtros</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          {filters.map((filter) => (
            <div key={filter.id} className="mb-4 grid grid-cols-12 gap-2">
              <div className="col-span-4">
                <Label htmlFor={`column-${filter.id}`} className="mb-1 block text-xs">
                  Coluna
                </Label>
                <Select value={filter.column} onValueChange={(value) => updateFilter(filter.id, "column", value)}>
                  <SelectTrigger id={`column-${filter.id}`}>
                    <SelectValue placeholder="Selecione uma coluna" />
                  </SelectTrigger>
                  <SelectContent>
                    {columns.map((column) => (
                      <SelectItem key={column} value={column}>
                        {column}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-3">
                <Label htmlFor={`operator-${filter.id}`} className="mb-1 block text-xs">
                  Operador
                </Label>
                <Select value={filter.operator} onValueChange={(value) => updateFilter(filter.id, "operator", value)}>
                  <SelectTrigger id={`operator-${filter.id}`}>
                    <SelectValue placeholder="Operador" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eq">Igual a</SelectItem>
                    <SelectItem value="neq">Diferente de</SelectItem>
                    <SelectItem value="gt">Maior que</SelectItem>
                    <SelectItem value="gte">Maior ou igual a</SelectItem>
                    <SelectItem value="lt">Menor que</SelectItem>
                    <SelectItem value="lte">Menor ou igual a</SelectItem>
                    <SelectItem value="contains">Contém</SelectItem>
                    <SelectItem value="startsWith">Começa com</SelectItem>
                    <SelectItem value="endsWith">Termina com</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-4">
                <Label htmlFor={`value-${filter.id}`} className="mb-1 block text-xs">
                  Valor
                </Label>
                <Input
                  id={`value-${filter.id}`}
                  value={filter.value}
                  onChange={(e) => updateFilter(filter.id, "value", e.target.value)}
                  placeholder="Valor"
                />
              </div>

              <div className="col-span-1 flex items-end">
                <Button variant="ghost" size="icon" onClick={() => removeFilter(filter.id)} className="h-10 w-10">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          <div className="mt-4 flex justify-between">
            <Button variant="outline" size="sm" onClick={addFilter} className="gap-1">
              <Plus className="h-4 w-4" /> Adicionar Filtro
            </Button>
            <div className="space-x-2">
              <Button variant="outline" size="sm" onClick={clearFilters}>
                Limpar
              </Button>
              <Button size="sm" onClick={applyFilters}>
                Aplicar Filtros
              </Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
