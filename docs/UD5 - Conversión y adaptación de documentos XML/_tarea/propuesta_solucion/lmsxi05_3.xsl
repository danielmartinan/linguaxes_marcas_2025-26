<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Configura salida HTML en UTF-8 -->
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <!-- Plantilla principal -->
  <xsl:template match="/artistas">
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>Artistas XSLT</title>
      </head>
      <body>
        <table>
          <tbody>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Año de nacimiento</th>
              <th>Año de fallecimiento</th>
              <th>País</th>
              <th>Wikipedia</th>
            </tr>

            <!-- Muestra artistas nacidos después de 1500 y ordena por nacimiento -->
            <xsl:for-each select="artista[nacimiento &gt; 1500]">
              <xsl:sort select="nacimiento" data-type="number" order="ascending"/>
              <tr>
                <td><xsl:value-of select="@id"/></td>
                <td><xsl:value-of select="nombre"/></td>
                <td><xsl:value-of select="nacimiento"/></td>
                <td>
                  <xsl:choose>
                    <xsl:when test="fallecimiento">
                      <xsl:value-of select="fallecimiento"/>
                    </xsl:when>
                    <xsl:otherwise>Desconocido</xsl:otherwise>
                  </xsl:choose>
                </td>
                <td><xsl:value-of select="pais"/></td>
                <td>
                  <a href="{@wikipedia}" target="_blank">Saber más</a>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
