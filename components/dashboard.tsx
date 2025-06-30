"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"
import TableRelationships from "@/lib/table-relationships"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/dashboard-sidebar"
import ResultsTable from "@/components/results-table"
import ColumnSelector from "@/components/column-selector"

// Definição das colunas disponíveis por tabela
const tableColumns: Record<string, string[]> = {
  Linha: ["codigo", "letreironumerico", "descritivoprincipal"],
  Parada: ["codigo", "nome", "latitude", "longitude"],
  Veiculo: ["prefixo", "acessopcd"],
  Corredor: ["codigo", "nome"],
  Itinerario: ["datareferencia", "previsaochegada"],
  LinhaParada: ["codigolinha", "codigoparada"],
}

export default function Dashboard() {
  const [selectedTables, setSelectedTables] = useState<string[]>([])
  const [availableTables, setAvailableTables] = useState<string[]>(Object.keys(TableRelationships))
  const [results, setResults] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedColumns, setSelectedColumns] = useState<Record<string, string[]>>({})

  // Atualiza as tabelas disponíveis com base nas seleções atuais
  useEffect(() => {
    if (selectedTables.length === 0) {
      setAvailableTables(Object.keys(TableRelationships))
    } else {
      const relatedTables = new Set<string>()
      selectedTables.forEach((table) => relatedTables.add(table))
      selectedTables.forEach((table) => {
        if (TableRelationships[table]) {
          TableRelationships[table].forEach((relatedTable) => relatedTables.add(relatedTable))
        }
      })
      setAvailableTables(Array.from(relatedTables))
    }
  }, [selectedTables])

  // Inicializa as colunas selecionadas quando as tabelas mudam
  useEffect(() => {
    const newSelectedColumns: Record<string, string[]> = {}
    selectedTables.forEach((table) => {
      if (selectedColumns[table]) {
        newSelectedColumns[table] = selectedColumns[table]
      } else {
        newSelectedColumns[table] = [...(tableColumns[table] || [])]
      }
    })
    setSelectedColumns(newSelectedColumns)
  }, [selectedTables])

  // Função para obter todas as colunas visíveis para a tabela de resultados
  const getVisibleColumns = () => {
    const columns: string[] = []
    Object.entries(selectedColumns).forEach(([table, cols]) => {
      cols.forEach((col) => {
        if (!columns.includes(col)) {
          columns.push(col)
        }
      })
    })
    return columns
  }

  // Função para formatar os dados da API convertendo as chaves minúsculas para as chaves camel case/capitalizadas
  const formatDataKeys = (data: any[], columns: string[]) => {
    return data.map((item) => {
      const newItem: Record<string, any> = {}
      columns.forEach((col) => {
        const lowerCol = col.toLowerCase()
        newItem[col] = item[lowerCol]
      })
      return newItem
    })
  }

  // Função para buscar dados do backend
  const fetchData = async () => {
  if (selectedTables.length === 0) {
    setError("Selecione pelo menos uma tabela")
    return
  }

  setLoading(true)
  setError(null)

  try {
    console.log("Enviando consulta para tabelas:", selectedTables)
    console.log("Colunas selecionadas:", selectedColumns)

    const response = await fetch("/api/relatorio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tables: selectedTables,
        fields: selectedColumns,
        limit: 50,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    console.log("Resposta da API:", data)

    if (data && Array.isArray(data.data)) {
      const formattedData = formatDataKeys(data.data, getVisibleColumns())
      setResults(formattedData)
    } else {
      setError("Resposta da API em formato inesperado.")
      console.error("Formato inesperado:", data)
    }
  } catch (err) {
    setError("Erro ao buscar dados. Tente novamente.")
    console.error(err)
  } finally {
    setLoading(false)
  }
}


  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar
          availableTables={availableTables}
          selectedTables={selectedTables}
          setSelectedTables={setSelectedTables}
        />

        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard de Itinerários</h1>
              <p className="text-muted-foreground">
                Selecione as tabelas no menu lateral para visualizar os dados relacionados.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              {selectedTables.length > 0 && (
                <ColumnSelector
                  selectedTables={selectedTables}
                  selectedColumns={selectedColumns}
                  setSelectedColumns={setSelectedColumns}
                />
              )}
              <Button
                onClick={fetchData}
                disabled={selectedTables.length === 0 || loading}
                className="w-full sm:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Carregando...
                  </>
                ) : (
                  "Buscar Dados"
                )}
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-lg font-medium">Tabelas Selecionadas</h2>
            <div className="flex flex-wrap gap-2">
              {selectedTables.length > 0 ? (
                selectedTables.map((table) => (
                  <Badge key={table} variant="secondary" className="text-sm">
                    {table}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Nenhuma tabela selecionada. Selecione tabelas no menu lateral.
                </p>
              )}
            </div>
          </div>

          {error && <div className="mb-6 rounded-md bg-destructive/15 p-3 text-sm text-destructive">{error}</div>}

          <Card>
            <CardHeader>
              <CardTitle>Resultados da Consulta</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex h-64 items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : results ? (
                <ResultsTable data={results} visibleColumns={getVisibleColumns()} />
              ) : (
                <div className="flex h-64 items-center justify-center text-center text-muted-foreground">
                  <div>
                    <p>Selecione tabelas no menu lateral e clique em "Buscar Dados"</p>
                    <p className="text-sm">Os resultados aparecerão aqui</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  )
}
