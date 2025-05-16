"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

// Dados de exemplo para a tabela
const itineraryData = [
  {
    id: 1,
    linha: "101",
    letreiro: "Centro - Bairro A",
    veiculo: "AB123",
    acessoPcd: true,
    parada: "Terminal Central",
    previsao: "08:15",
    data: "2025-05-13",
  },
  {
    id: 2,
    linha: "102",
    letreiro: "Centro - Bairro B",
    veiculo: "CD456",
    acessoPcd: true,
    parada: "Praça Principal",
    previsao: "08:20",
    data: "2025-05-13",
  },
  {
    id: 3,
    linha: "103",
    letreiro: "Centro - Bairro C",
    veiculo: "EF789",
    acessoPcd: false,
    parada: "Avenida Central",
    previsao: "08:25",
    data: "2025-05-13",
  },
  {
    id: 4,
    linha: "104",
    letreiro: "Centro - Bairro D",
    veiculo: "GH012",
    acessoPcd: true,
    parada: "Estação Norte",
    previsao: "08:30",
    data: "2025-05-13",
  },
  {
    id: 5,
    linha: "105",
    letreiro: "Centro - Bairro E",
    veiculo: "IJ345",
    acessoPcd: true,
    parada: "Estação Sul",
    previsao: "08:35",
    data: "2025-05-13",
  },
  {
    id: 6,
    linha: "106",
    letreiro: "Centro - Bairro F",
    veiculo: "KL678",
    acessoPcd: false,
    parada: "Estação Leste",
    previsao: "08:40",
    data: "2025-05-13",
  },
  {
    id: 7,
    linha: "107",
    letreiro: "Centro - Bairro G",
    veiculo: "MN901",
    acessoPcd: true,
    parada: "Estação Oeste",
    previsao: "08:45",
    data: "2025-05-13",
  },
  {
    id: 8,
    linha: "108",
    letreiro: "Centro - Bairro H",
    veiculo: "OP234",
    acessoPcd: true,
    parada: "Terminal Sul",
    previsao: "08:50",
    data: "2025-05-13",
  },
  {
    id: 9,
    linha: "109",
    letreiro: "Centro - Bairro I",
    veiculo: "QR567",
    acessoPcd: false,
    parada: "Terminal Norte",
    previsao: "08:55",
    data: "2025-05-13",
  },
  {
    id: 10,
    linha: "110",
    letreiro: "Centro - Bairro J",
    veiculo: "ST890",
    acessoPcd: true,
    parada: "Terminal Leste",
    previsao: "09:00",
    data: "2025-05-13",
  },
]

export default function ItineraryTable() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(itineraryData.length / itemsPerPage)

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = itineraryData.slice(startIndex, endIndex)

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Linha</TableHead>
            <TableHead>Letreiro</TableHead>
            <TableHead>Veículo</TableHead>
            <TableHead>Acesso PCD</TableHead>
            <TableHead>Parada</TableHead>
            <TableHead>Previsão</TableHead>
            <TableHead>Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Badge variant="outline">{item.linha}</Badge>
              </TableCell>
              <TableCell>{item.letreiro}</TableCell>
              <TableCell>{item.veiculo}</TableCell>
              <TableCell>
                {item.acessoPcd ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </TableCell>
              <TableCell>{item.parada}</TableCell>
              <TableCell>{item.previsao}</TableCell>
              <TableCell>{item.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
          {Array.from({ length: totalPages }).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={page === i + 1}
                onClick={(e) => {
                  e.preventDefault()
                  setPage(i + 1)
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
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
    </div>
  )
}
