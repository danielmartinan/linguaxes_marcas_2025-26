for $p in doc('pedidos.xml')/pedidos/pedido
where $p/@estado = 'pendiente'
return
  <pedidoPendiente>
    <cliente>{data($p/cliente)}</cliente>
    <importe>{data($p/importe)}</importe>
  </pedidoPendiente>
