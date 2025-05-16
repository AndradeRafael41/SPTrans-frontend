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
  Linha: ["Codigo", "LetreiroNumerico", "DescritivoPrincipal"],
  Parada: ["ParadaCodigo", "ParadaNome", "Latitude", "Longitude"],
  Veiculo: ["Prefixo", "AcessoPcd"],
  Corredor: ["CorredorCodigo", "CorredorNome"],
  Itinerario: ["DataReferencia", "PrevisaoChegada"],
  LinhaParada: ["LinhaId", "ParadaId", "Sequencia"],
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
      // Se nenhuma tabela estiver selecionada, todas estão disponíveis
      setAvailableTables(Object.keys(TableRelationships))
    } else {
      // Caso contrário, apenas tabelas relacionadas estão disponíveis
      const relatedTables = new Set<string>()

      // Adiciona as tabelas já selecionadas
      selectedTables.forEach((table) => relatedTables.add(table))

      // Adiciona tabelas relacionadas às selecionadas
      selectedTables.forEach((table) => {
        if (TableRelationships[table]) {
          TableRelationships[table].forEach((relatedTable) => {
            relatedTables.add(relatedTable)
          })
        }
      })

      setAvailableTables(Array.from(relatedTables))
    }
  }, [selectedTables])

  // Inicializa as colunas selecionadas quando as tabelas mudam
  useEffect(() => {
    const newSelectedColumns: Record<string, string[]> = {}

    selectedTables.forEach((table) => {
      // Se já tiver colunas selecionadas para esta tabela, mantém
      if (selectedColumns[table]) {
        newSelectedColumns[table] = selectedColumns[table]
      } else {
        // Caso contrário, seleciona todas as colunas por padrão
        newSelectedColumns[table] = [...(tableColumns[table] || [])]
      }
    })

    setSelectedColumns(newSelectedColumns)
  }, [selectedTables])

  // Função para buscar dados do backend
  const fetchData = async () => {
    if (selectedTables.length === 0) {
      setError("Selecione pelo menos uma tabela")
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Simulação de chamada para o backend
      // Na implementação real, isso seria uma chamada fetch para sua API
      console.log("Enviando consulta para tabelas:", selectedTables)
      console.log("Colunas selecionadas:", selectedColumns)

      // Simulando um tempo de resposta
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Dados simulados baseados nas tabelas selecionadas
      const mockData = generateMockData(selectedTables)
      setResults(mockData)
    } catch (err) {
      setError("Erro ao buscar dados. Tente novamente.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Função para gerar dados simulados com base nas tabelas selecionadas
  const generateMockData = (tables: string[]) => {
    // Aqui você geraria dados simulados com base nas tabelas selecionadas
    // Em um ambiente real, esses dados viriam do backend

    const mockData = []

    for (let i = 0; i < 50; i++) {
      const row: Record<string, any> = {}

      if (tables.includes("Linha")) {
        row.Codigo = 100 + i
        row.LetreiroNumerico = `Linha ${100 + i}`
        row.DescritivoPrincipal = `Centro - Bairro ${String.fromCharCode(65 + (i % 26))}`
      }

      if (tables.includes("Parada")) {
        row.ParadaCodigo = 1000 + i
        row.ParadaNome = `Parada ${1000 + i}`
        row.Latitude = (-23.55 - (i % 10) * 0.01).toFixed(6)
        row.Longitude = (-46.63 + (i % 10) * 0.01).toFixed(6)
      }

      if (tables.includes("Veiculo")) {
        row.Prefixo = `AB${1000 + i}`
        row.AcessoPcd = i % 3 === 0 ? false : true
      }

      if (tables.includes("Corredor")) {
        row.CorredorCodigo = 10 + (i % 5)
        row.CorredorNome = `Corredor ${String.fromCharCode(65 + (i % 5))}`
      }

      if (tables.includes("Itinerario")) {
        row.DataReferencia = `2025-05-${15 + (i % 10)}`
        row.PrevisaoChegada = `${8 + (i % 12)}:${(i * 5) % 60 < 10 ? "0" + ((i * 5) % 60) : (i * 5) % 60}`
      }

      if (tables.includes("LinhaParada")) {
        row.LinhaId = 100 + (i % 10)
        row.ParadaId = 1000 + (i % 20)
        row.Sequencia = i % 30
      }

      mockData.push(row)
    }

    return mockData
  }

  // Obter todas as colunas visíveis para a tabela de resultados
  const getVisibleColumns = () => {
    const columns: string[] = []

    Object.entries(selectedColumns).forEach(([table, tableColumns]) => {
      tableColumns.forEach((column) => {
        columns.push(column)
      })
    })

    return columns
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
