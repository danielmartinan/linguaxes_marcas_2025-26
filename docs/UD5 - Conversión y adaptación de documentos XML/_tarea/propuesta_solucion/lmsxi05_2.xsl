<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Configura salida XML legible -->
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <!-- Indice para buscar productos por su id -->
  <xsl:key name="kProducto" match="/productos/producto" use="@id"/>

  <!-- Plantilla principal -->
  <xsl:template match="/productos">
    <tienda>
      <!-- Bloque con todos los productos -->
      <productos>
        <xsl:for-each select="producto">
          <producto id="{@id}" precio="{precio}">
            <xsl:value-of select="nombre"/>
          </producto>
        </xsl:for-each>
      </productos>

      <!-- Bloque de productos con descuento -->
      <ofertas>
        <xsl:for-each select="producto[@descuento]">
          <producto id="{@id}" precio="{precio}">
            <xsl:value-of select="nombre"/>
          </producto>
        </xsl:for-each>
      </ofertas>

      <!-- Bloque de ventas -->
      <ventas>
        <xsl:for-each select="ventas/venta">
          <venta id="{@id}" fecha="{fecha}" cantidad="{count(productos/producto)}">
            <xsl:for-each select="productos/producto">
              <xsl:variable name="p" select="key('kProducto', @id)"/>
              <producto precio="{$p/precio}" categoria="{$p/categoria}">
                <xsl:value-of select="$p/nombre"/>
              </producto>
            </xsl:for-each>
          </venta>
        </xsl:for-each>
      </ventas>
    </tienda>
  </xsl:template>
</xsl:stylesheet>
