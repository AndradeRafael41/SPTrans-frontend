const TableRelationships: Record<string, string[]> = {
  Linha: ["LinhaParada", "Itinerario"],
  Corredor: ["Parada"],
  Parada: ["Corredor", "LinhaParada", "Itinerario"],
  Veiculo: ["Itinerario"],
  LinhaParada: ["Linha", "Parada"],
  Itinerario: ["Linha", "Parada", "Veiculo"],
}

export default TableRelationships
