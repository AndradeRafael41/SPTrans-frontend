"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings2 } from "lucide-react"

// Definição das colunas disponíveis por tabela
const tableColumns: Record<string, string[]> = {
  Linha: ["Codigo", "LetreiroNumerico", "DescritivoPrincipal"],
  Parada: ["ParadaCodigo", "ParadaNome", "Latitude", "Longitude"],
  Veiculo: ["Prefixo", "AcessoPcd"],
  Corredor: ["CorredorCodigo", "CorredorNome"],
  Itinerario: ["DataReferencia", "PrevisaoChegada"],
  LinhaParada: ["LinhaId", "ParadaId", "Sequencia"],
}

interface ColumnSelectorProps {
  selectedTables: string[]
  selectedColumns: Record<string, string[]>
  setSelectedColumns: (columns: Record<string, string[]>) => void
}

export default function ColumnSelector({ selectedTables, selectedColumns, setSelectedColumns }: ColumnSelectorProps) {
  const [open, setOpen] = useState(false)
  const [tempSelectedColumns, setTempSelectedColumns] = useState<Record<string, string[]>>(selectedColumns)

  // Inicializa as colunas temporárias quando o diálogo é aberto
  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setTempSelectedColumns({ ...selectedColumns })
    }
    setOpen(isOpen)
  }

  // Atualiza as colunas temporárias quando uma coluna é selecionada/deselecionada
  const handleColumnToggle = (table: string, column: string) => {
    setTempSelectedColumns((prev) => {
      const currentColumns = prev[table] || []
      const newColumns = currentColumns.includes(column)
        ? currentColumns.filter((c) => c !== column)
        : [...currentColumns, column]

      return {
        ...prev,
        [table]: newColumns,
      }
    })
  }

  // Seleciona todas as colunas de uma tabela
  const selectAllColumns = (table: string) => {
    setTempSelectedColumns((prev) => ({
      ...prev,
      [table]: [...tableColumns[table]],
    }))
  }

  // Deseleciona todas as colunas de uma tabela
  const deselectAllColumns = (table: string) => {
    setTempSelectedColumns((prev) => ({
      ...prev,
      [table]: [],
    }))
  }

  // Aplica as seleções temporárias
  const applyChanges = () => {
    setSelectedColumns(tempSelectedColumns)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Settings2 className="h-4 w-4" />
          Configurar Colunas
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Selecionar Colunas</DialogTitle>
          <DialogDescription>Escolha quais colunas de cada tabela você deseja exibir nos resultados.</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue={selectedTables[0] || ""} className="mt-4">
          <TabsList className="mb-4 flex flex-wrap">
            {selectedTables.map((table) => (
              <TabsTrigger key={table} value={table} className="flex-grow">
                {table}
              </TabsTrigger>
            ))}
          </TabsList>

          {selectedTables.map((table) => (
            <TabsContent key={table} value={table} className="border-none p-0">
              <div className="mb-4 flex justify-between">
                <Button variant="outline" size="sm" onClick={() => selectAllColumns(table)}>
                  Selecionar Todas
                </Button>
                <Button variant="outline" size="sm" onClick={() => deselectAllColumns(table)}>
                  Desmarcar Todas
                </Button>
              </div>

              <ScrollArea className="h-[300px] rounded-md border p-4">
                <div className="grid grid-cols-2 gap-4">
                  {tableColumns[table]?.map((column) => (
                    <div key={column} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${table}-${column}`}
                        checked={(tempSelectedColumns[table] || []).includes(column)}
                        onCheckedChange={() => handleColumnToggle(table, column)}
                      />
                      <label
                        htmlFor={`${table}-${column}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {column}
                      </label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={applyChanges}>Aplicar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
