export function itensListaEstaoReceita(lista1: Array<unknown>, lista2: Array<unknown>) {
    return lista1.every(itemLista1 => lista2.includes(itemLista1))
}