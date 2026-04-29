# Propuesta de solución - Examen práctico T3

Esta propuesta está alineada con los recursos de `../recursos/` y con ejecución en BaseX.

## Ejercicio 1 - XPath (ejer1_xpath.txt)

```xpath
/expediciones/expedicion
/expediciones/expedicion[fechaInicio >= '1850-01-01']
/expediciones/expedicion/tripulacion/integrante[translate(@rol, 'ó', 'o') = 'cartografo']
/expediciones/expedicion[count(tripulacion/integrante) > 5]
/expediciones/expedicion[not(number(presupuesto) < /expediciones/expedicion/presupuesto)]
/expediciones/expedicion[@id='E002']/ruta/punto/@lat
```

## Ejercicio 2 - XSLT (ejer2_transformacion.xsl)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  exclude-result-prefixes="xs">

  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
  <xsl:strip-space elements="*"/>

  <!-- Fecha de referencia para misiones activas sin fecha de fin -->
  <xsl:variable name="fechaRef" select="xs:date('1912-12-31')"/>

  <xsl:template match="/misiones">
    <centro-control>
      <misiones-activas>
        <xsl:for-each select="mision[@estado='activa']">
          <xsl:sort select="number(@prioridad)" order="descending"/>
          <xsl:sort select="fechaInicio" order="ascending"/>

          <mision>
            <xsl:attribute name="id" select="@id"/>
            <xsl:attribute name="prioridad" select="@prioridad"/>
            <xsl:attribute name="duracionDias"
              select="days-from-duration($fechaRef - xs:date(fechaInicio))"/>
            <xsl:value-of select="nombre"/>
          </mision>
        </xsl:for-each>
      </misiones-activas>

      <misiones-cerradas>
        <xsl:for-each select="mision[@estado='cerrada']">
          <xsl:sort select="fechaFin" order="ascending"/>

          <mision>
            <xsl:attribute name="id" select="@id"/>
            <xsl:attribute name="prioridad" select="@prioridad"/>
            <xsl:attribute name="duracionDias"
              select="days-from-duration(xs:date(fechaFin) - xs:date(fechaInicio))"/>
            <xsl:value-of select="nombre"/>
          </mision>
        </xsl:for-each>
      </misiones-cerradas>

      <resumen>
        <totalMisiones>
          <xsl:value-of select="count(mision)"/>
        </totalMisiones>
        <totalActivas>
          <xsl:value-of select="count(mision[@estado='activa'])"/>
        </totalActivas>
        <totalCerradas>
          <xsl:value-of select="count(mision[@estado='cerrada'])"/>
        </totalCerradas>
        <zonasUnicas>
          <xsl:value-of select="count(distinct-values(mision/zona))"/>
        </zonasUnicas>
      </resumen>
    </centro-control>
  </xsl:template>
</xsl:stylesheet>
```

## Ejercicio 3 - XQuery (ejer3_1.xq ... ejer3_6.xq)

### ejer3_1.xq

```xquery
for $c in /cientificos/cientifico
let $nexp := count($c/expediciones/expedicion)
where $nexp > 3
return $c
```

### ejer3_2.xq

```xquery
for $c in /cientificos/cientifico
let $pais := $c/pais/string()
where $pais = 'ES' or $pais = 'FR' or $pais = 'UK'
return concat($c/nombre/string(), ' - ', $c/especialidad/string())
```

### ejer3_3.xq

```xquery
for $esp in distinct-values(/cientificos/cientifico/especialidad)
let $total := count(
  for $c in /cientificos/cientifico
  where $c/especialidad/string() = $esp
  return $c
)
order by $esp
return <especialidad nombre="{$esp}" total="{$total}"/>
```

### ejer3_4.xq

```xquery
for $c in /cientificos/cientifico
let $refs := $c/expediciones/expedicion/@ref
where some $r in $refs satisfies data($r) = 'E002'
return $c/nombre/string()
```

### ejer3_5.xq

```xquery
let $maxPub := max(
  for $c in /cientificos/cientifico
  return number($c/publicaciones)
)
for $c in /cientificos/cientifico
where number($c/publicaciones) = $maxPub
return $c
```

### ejer3_6.xq

```xquery
for $c in /cientificos/cientifico
let $nexp := count($c/expediciones/expedicion)
order by $nexp descending
return $c
```

## Nota

Si se quiere entregar exactamente como en el enunciado, copia cada bloque XQuery en su archivo correspondiente dentro de `ejer3/` y las 6 líneas XPath en `ejer1_xpath.txt`.
