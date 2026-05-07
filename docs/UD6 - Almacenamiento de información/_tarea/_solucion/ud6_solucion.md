# Solucion Tarea UD6 - XQuery

Este documento incluye las consultas XQuery para los tres ejercicios.
Cada bloque corresponde al contenido de un archivo `.xq`.

## Ejercicio 1

### ejer1_1.xq

```xquery
for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
where xs:integer($u/id) <= 20
return $u
```

### ejer1_2.xq

```xquery
for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
where xs:integer($u/edad) >= 20 and xs:integer($u/edad) <= 30
return $u
```

### ejer1_3.xq

```xquery
for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
where $u/pais = "ES" or $u/pais = "IT"
return $u
```

### ejer1_4.xq

```xquery
for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
where ends-with(lower-case(normalize-space($u/email)), ".com")
return $u
```

### ejer1_5.xq

```xquery
for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
where string-length(normalize-space($u/nombre)) <= 5
return $u
```

### ejer1_6.xq

```xquery
for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
where upper-case(normalize-space($u/pais)) = "FR"
return concat(normalize-space($u/nombre), " ", normalize-space($u/apellido))
```

### ejer1_7.xq

```xquery
for $p in distinct-values(
  for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
  return upper-case(normalize-space($u/pais))
)
order by $p
return $p
```

### ejer1_8.xq

```xquery
for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
where xs:integer($u/id) > 50 and xs:integer($u/edad) <= 80
return $u
```

### ejer1_9.xq

```xquery
let $edades :=
  for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
  return xs:decimal($u/edad)
return avg($edades)
```

### ejer1_10.xq

```xquery
let $usuarios :=
  for $u in doc("ud6_ejer1_example.xml")/usuarios/usuario
  return $u
return count($usuarios)
```

## Ejercicio 2

### ejer2_1.xq

```xquery
for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
where lower-case(normalize-space($i/@tipo)) = "laser" or lower-case(normalize-space($i/@tipo)) = "láser"
return normalize-space($i/modelo)
```

### ejer2_2.xq

```xquery
for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
where count($i/tamano) > 1
return concat(normalize-space($i/marca), " ", normalize-space($i/modelo))
```

### ejer2_3.xq

```xquery
for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
where some $t in $i/tamano satisfies upper-case(normalize-space($t)) = "A3"
return concat(normalize-space($i/marca), " ", normalize-space($i/modelo))
```

### ejer2_4.xq

```xquery
for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
where count($i/tamano) = 1 and upper-case(normalize-space($i/tamano)) = "A3"
return concat(normalize-space($i/marca), " ", normalize-space($i/modelo))
```

### ejer2_5.xq

```xquery
for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
where exists($i/enred)
return normalize-space($i/modelo)
```

### ejer2_6.xq

```xquery
let $impresoras :=
  for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
  return $i
return count($impresoras)
```

### ejer2_7.xq

```xquery
for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
where xs:integer($i/@compra) >= 2018
order by xs:integer($i/@compra) ascending
return $i
```

### ejer2_8.xq

```xquery
for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
where xs:decimal($i/peso) >= 5
return $i
```

### ejer2_9.xq

```xquery
for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
where some $c in $i/cartucho satisfies normalize-space($c) = "C-456P"
return $i
```

### ejer2_10.xq

```xquery
let $ordenadas :=
  for $i in doc("ud6_ejer2_example.xml")/impresoras/impresora
  order by xs:decimal($i/peso) descending
  return $i
return subsequence($ordenadas, 1, 1)
```

## Ejercicio 3

### ejer3_1.xq

```xquery
for $a in doc("ud6_ejer3_example.xml")/artistas/artista
return concat(normalize-space($a/nombre), " ", normalize-space($a/pais))
```

### ejer3_2.xq

```xquery
for $a in doc("ud6_ejer3_example.xml")/artistas/artista
where xs:integer($a/nacimiento) < 1500
return normalize-space($a/nombre)
```

### ejer3_3.xq

```xquery
for $a in doc("ud6_ejer3_example.xml")/artistas/artista
where not(exists($a/fallecimiento))
order by normalize-space($a/nombre) ascending
return normalize-space($a/nombre)
```

### ejer3_4.xq

```xquery
for $a in doc("ud6_ejer3_example.xml")/artistas/artista
where exists($a/fallecimiento)
return concat(normalize-space($a/nombre), " ", normalize-space($a/fallecimiento))
```

### ejer3_5.xq

```xquery
<ul>{
  for $a in doc("ud6_ejer3_example.xml")/artistas/artista
  where lower-case(normalize-space($a/pais)) = "españa" or upper-case(normalize-space($a/pais)) = "ES"
  return <li>{normalize-space($a/nombre)}</li>
}</ul>
```

### ejer3_6.xq

```xquery
for $a in doc("ud6_ejer3_example.xml")/artistas/artista
where lower-case(normalize-space($a/pais)) = "italia" or upper-case(normalize-space($a/pais)) = "IT"
return concat(normalize-space($a/nombre), " ", normalize-space($a/@id))
```

### ejer3_7.xq

```xquery
let $seleccion :=
  for $a in doc("ud6_ejer3_example.xml")/artistas/artista
  where xs:integer($a/nacimiento) < 1600
  return $a
return count($seleccion)
```

### ejer3_8.xq

```xquery
for $a in doc("ud6_ejer3_example.xml")/artistas/artista
where starts-with(upper-case(normalize-space($a/nombre)), "P")
return normalize-space($a/nombre)
```

### ejer3_9.xq

```xquery
let $ordenados :=
  for $a in doc("ud6_ejer3_example.xml")/artistas/artista
  where exists($a/fallecimiento)
  order by xs:integer($a/fallecimiento) descending
  return $a
return subsequence($ordenados, 1, 1)
```

### ejer3_10.xq

```xquery
for $a in doc("ud6_ejer3_example.xml")/artistas/artista
where string-length(normalize-space($a/nombre)) > 15
return normalize-space($a/nombre)
```

## Nota de uso en BaseX

Si el XML ya esta abierto como contexto en BaseX, puedes eliminar `doc("...")` de las consultas y usar directamente rutas desde el nodo raiz.
