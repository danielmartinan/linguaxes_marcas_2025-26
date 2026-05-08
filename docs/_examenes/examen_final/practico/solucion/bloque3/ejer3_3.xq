for $estado in distinct-values(doc('pedidos.xml')/pedidos/pedido/@estado)
let $total := count(doc('pedidos.xml')/pedidos/pedido[@estado = $estado])
order by $estado
return
  <resumen estado="{$estado}">
    <total>{$total}</total>
  </resumen>
