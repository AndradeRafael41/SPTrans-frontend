"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { CheckCircle2, XCircle, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ResultsFilter from "@/components/results-filter"

interface FilterCondition {
  id: string
  column: string
  operator: string
  value: string
}

interface ResultsTableProps {
  data: any[]
  visibleColumns: string[]
}

export default function ResultsTable({ data, visibleColumns }: ResultsTableProps) {
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState<FilterCondition[]>([])
  const [sortConfig, setSortConfig] = useState<{ column: string; direction: "asc" | "desc" } | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const itemsPerPage = 10

  // Aplicar filtros aos dados
  const applyFilters = (data: any[], filters: FilterCondition[]) => {
    if (filters.length === 0) return data

    return data.filter((item) => {
      return filters.every((filter) => {
        const { column, operator, value } = filter
        const itemValue = item[column]

        if (itemValue === undefined) return false

        // Converter para string para comparação
        const itemValueStr = String(itemValue).toLowerCase()
        const filterValueStr = value.toLowerCase()

        switch (operator) {
          case "eq":
            return itemValueStr === filterValueStr
          case "neq":
            return itemValueStr !== filterValueStr
          case "gt":
            return Number(itemValue) > Number(value)
          case "gte":
            return Number(itemValue) >= Number(value)
          case "lt":
            return Number(itemValue) < Number(value)
          case "lte":
            return Number(itemValue) <= Number(value)
          case "contains":
            return itemValueStr.includes(filterValueStr)
          case "startsWith":
            return itemValueStr.startsWith(filterValueStr)
          case "endsWith":
            return itemValueStr.endsWith(filterValueStr)
          default:
            return true
        }
      })
    })
  }

  // Aplicar pesquisa global
  const applySearch = (data: any[], query: string) => {
    if (!query.trim()) return data

    const searchLower = query.toLowerCase()
    return data.filter((item) => {
      return visibleColumns.some((column) => {
        const value = item[column]
        if (value === undefined || value === null) return false
        return String(value).toLowerCase().includes(searchLower)
      })
    })
  }

  // Aplicar ordenação
  const applySorting = (data: any[], sortConfig: { column: string; direction: "asc" | "desc" } | null) => {
    if (!sortConfig) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.column]
      const bValue = b[sortConfig.column]

      // Lidar com valores nulos ou indefinidos
      if (aValue === undefined || aValue === null) return sortConfig.direction === "asc" ? -1 : 1
      if (bValue === undefined || bValue === null) return sortConfig.direction === "asc" ? 1 : -1

      // Comparar números
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue
      }

      // Comparar strings
      const aString = String(aValue).toLowerCase()
      const bString = String(bValue).toLowerCase()
      return sortConfig.direction === "asc" ? aString.localeCompare(bString) : bString.localeCompare(aString)
    })
  }

  // Processar dados com filtros, pesquisa e ordenação
  const processedData = useMemo(() => {
    let result = [...data]
    result = applyFilters(result, filters)
    result = applySearch(result, searchQuery)
    result = applySorting(result, sortConfig)
    return result
  }, [data, filters, searchQuery, sortConfig])

  // Calcular paginação
  const totalPages = Math.ceil(processedData.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = processedData.slice(startIndex, endIndex)

  // Alternar ordenação
  const toggleSort = (column: string) => {
    if (sortConfig?.column === column) {
      // Se já estiver ordenando por esta coluna, inverte a direção
      setSortConfig({
        column,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      })
    } else {
      // Caso contrário, ordena por esta coluna em ordem ascendente
      setSortConfig({ column, direction: "asc" })
    }
  }

  // Função para renderizar o valor da célula com base no tipo
  const renderCellValue = (value: any) => {
    if (value === null || value === undefined) {
      return "-"
    }

    if (typeof value === "boolean") {
      return value ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />
    }

    return value.toString()
  }

  // Resetar para a primeira página quando os filtros ou a pesquisa mudam
  const handleFiltersChange = (newFilters: FilterCondition[]) => {
    setFilters(newFilters)
    setPage(1)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setPage(1)
  }

  return (
    <div>
      <div className="mb-4">
        <Input
          placeholder="Pesquisar em todas as colunas..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="max-w-md"
        />
      </div>

      <ResultsFilter columns={visibleColumns} onApplyFilters={handleFiltersChange} />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {visibleColumns.map((column) => (
                <TableHead key={column}>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSort(column)}
                    className="flex items-center gap-1 p-0 font-medium hover:bg-transparent"
                  >
                    {column}
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <TableRow key={index}>
                  {visibleColumns.map((column) => (
                    <TableCell key={`${index}-${column}`}>{renderCellValue(item[column])}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={visibleColumns.length} className="h-24 text-center">
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (page > 1) setPage(page - 1)
                }}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
              // Mostrar no máximo 5 páginas, centralizadas na página atual
              let pageNum = i + 1
              if (totalPages > 5) {
                if (page > 3) {
                  pageNum = page - 3 + i
                }
                if (page > totalPages - 2) {
                  pageNum = totalPages - 4 + i
                }
              }
              return (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={page === pageNum}
                    onClick={(e) => {
                      e.preventDefault()
                      setPage(pageNum)
                    }}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (page < totalPages) setPage(page + 1)
                }}
                className={page === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <div className="mt-2 text-xs text-muted-foreground">
        Mostrando {currentItems.length} de {processedData.length} resultados
      </div>
    </div>
  )
}
