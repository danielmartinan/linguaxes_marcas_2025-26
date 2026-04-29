<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="xml" indent="yes" encoding="UTF-8" />
    <xsl:strip-space elements="*" />
    <xsl:key name="kZona" match="mision/zona" use="." />

    <xsl:template name="julian-day">
        <xsl:param name="fecha" />

        <xsl:variable name="y" select="number(substring($fecha, 1, 4))" />
        <xsl:variable name="m" select="number(substring($fecha, 6, 2))" />
        <xsl:variable name="d" select="number(substring($fecha, 9, 2))" />

        <xsl:variable name="a" select="floor((14 - $m) div 12)" />
        <xsl:variable name="y2" select="$y + 4800 - $a" />
        <xsl:variable name="m2" select="$m + 12 * $a - 3" />

        <xsl:value-of
            select="$d + floor((153 * $m2 + 2) div 5) + 365 * $y2 + floor($y2 div 4) - floor($y2 div 100) + floor($y2 div 400) - 32045" />
    </xsl:template>

    <xsl:template name="days-between">
        <xsl:param name="inicio" />
        <xsl:param name="fin" />

        <xsl:variable name="jdInicio">
            <xsl:call-template name="julian-day">
                <xsl:with-param name="fecha" select="$inicio" />
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="jdFin">
            <xsl:call-template name="julian-day">
                <xsl:with-param name="fecha" select="$fin" />
            </xsl:call-template>
        </xsl:variable>

        <xsl:value-of select="number($jdFin) - number($jdInicio)" />
    </xsl:template>

    <xsl:template match="/misiones">
        <centro-control>
            <misiones-activas>
                <xsl:for-each select="mision[@estado='activa']">
                    <xsl:sort select="number(@prioridad)" order="descending" />
                    <xsl:sort select="fechaInicio" order="ascending" />

                    <mision>
                        <xsl:attribute name="id"><xsl:value-of select="@id" /></xsl:attribute>
                        <xsl:attribute name="prioridad"><xsl:value-of select="@prioridad" /></xsl:attribute>
                        <xsl:attribute name="duracionDias">
                            <xsl:call-template name="days-between">
                                <xsl:with-param name="inicio" select="fechaInicio" />
                                <xsl:with-param name="fin" select="'1912-12-31'" />
                            </xsl:call-template>
                        </xsl:attribute>
                        <xsl:value-of select="nombre" />
                    </mision>
                </xsl:for-each>
            </misiones-activas>

            <misiones-cerradas>
                <xsl:for-each select="mision[@estado='cerrada']">
                    <xsl:sort select="fechaFin" order="ascending" />

                    <mision>
                        <xsl:attribute name="id"><xsl:value-of select="@id" /></xsl:attribute>
                        <xsl:attribute name="prioridad"><xsl:value-of select="@prioridad" /></xsl:attribute>
                        <xsl:attribute name="duracionDias">
                            <xsl:call-template name="days-between">
                                <xsl:with-param name="inicio" select="fechaInicio" />
                                <xsl:with-param name="fin" select="fechaFin" />
                            </xsl:call-template>
                        </xsl:attribute>
                        <xsl:value-of select="nombre" />
                    </mision>
                </xsl:for-each>
            </misiones-cerradas>

            <resumen>
                <totalMisiones>
                    <xsl:value-of select="count(mision)" />
                </totalMisiones>
                <totalActivas>
                    <xsl:value-of select="count(mision[@estado='activa'])" />
                </totalActivas>
                <totalCerradas>
                    <xsl:value-of select="count(mision[@estado='cerrada'])" />
                </totalCerradas>
                <zonasUnicas>
                    <xsl:value-of select="count(mision/zona[generate-id() = generate-id(key('kZona', .)[1])])" />
                </zonasUnicas>
            </resumen>
        </centro-control>
    </xsl:template>

</xsl:stylesheet>