"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Search, Database, ChevronDown } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface DashboardSidebarProps {
  availableTables: string[]
  selectedTables: string[]
  setSelectedTables: (tables: string[]) => void
}

export default function DashboardSidebar({
  availableTables,
  selectedTables,
  setSelectedTables,
}: DashboardSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleTableToggle = (table: string) => {
    if (selectedTables.includes(table)) {
      setSelectedTables(selectedTables.filter((t) => t !== table))
    } else {
      setSelectedTables([...selectedTables, table])
    }
  }

  const filteredTables = availableTables.filter((table) => table.toLowerCase().includes(searchQuery.toLowerCase()))

  const tableGroups = {
    Principais: ["Linha", "Parada", "Veiculo"],
    Relacionamentos: ["LinhaParada", "Itinerario"],
    Infraestrutura: ["Corredor"],
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-2">
        <div className="flex items-center gap-2 py-1">
          <Database className="h-5 w-5" />
          <span className="font-semibold">Tabelas do Banco</span>
        </div>
        <div className="relative mt-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar tabelas..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Filtros de Tabelas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.entries(tableGroups).map(([groupName, tables]) => {
                const filteredGroupTables = tables.filter((table) => filteredTables.includes(table))

                if (filteredGroupTables.length === 0) return null

                return (
                  <Collapsible key={groupName} defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          {groupName}
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    </SidebarMenuItem>
                    <CollapsibleContent>
                      {filteredGroupTables.map((table) => (
                        <div key={table} className="flex items-center space-x-2 px-8 py-2">
                          <Checkbox
                            id={`table-${table}`}
                            checked={selectedTables.includes(table)}
                            onCheckedChange={() => handleTableToggle(table)}
                          />
                          <label
                            htmlFor={`table-${table}`}
                            className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {table}
                          </label>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Tabelas Selecionadas</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-4 py-2">
              {selectedTables.length > 0 ? (
                <ul className="space-y-1">
                  {selectedTables.map((table) => (
                    <li key={table} className="flex items-center justify-between text-sm">
                      <span>{table}</span>
                      <button
                        onClick={() => handleTableToggle(table)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-muted-foreground">Nenhuma tabela selecionada</p>
              )}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarTrigger className="absolute right-4 top-4 md:hidden" />
    </Sidebar>
  )
}
