for $p in doc('pedidos.xml')/pedidos/pedido
where $p/cliente/@codigo = 'C002'
return $p
