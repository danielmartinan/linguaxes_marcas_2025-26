<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/pedidos">
    <resumen-pedidos>
      <!-- Completa la seccion de pedidos pendientes -->
      <!-- Completa la seccion de pedidos completados -->
      <totales>
        <totalPedidos>
          <xsl:value-of select="count(pedido)"/>
        </totalPedidos>
        <!-- Completa los totales restantes -->
      </totales>
    </resumen-pedidos>
  </xsl:template>
</xsl:stylesheet>
