<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/pedidos">
    <resumen-pedidos>
      <pendientes>
        <xsl:for-each select="pedido[@estado='pendiente']">
          <pedido codigo="{@codigo}">
            <xsl:value-of select="cliente"/>
          </pedido>
        </xsl:for-each>
      </pendientes>

      <completados>
        <xsl:for-each select="pedido[@estado='completado']">
          <pedido codigo="{@codigo}">
            <xsl:value-of select="cliente"/>
          </pedido>
        </xsl:for-each>
      </completados>

      <totales>
        <totalPedidos>
          <xsl:value-of select="count(pedido)"/>
        </totalPedidos>
        <totalPendientes>
          <xsl:value-of select="count(pedido[@estado='pendiente'])"/>
        </totalPendientes>
        <totalCompletados>
          <xsl:value-of select="count(pedido[@estado='completado'])"/>
        </totalCompletados>
      </totales>
    </resumen-pedidos>
  </xsl:template>
</xsl:stylesheet>
