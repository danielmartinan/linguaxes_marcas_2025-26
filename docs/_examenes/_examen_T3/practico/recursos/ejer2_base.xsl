<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="xml" indent="yes" encoding="UTF-8" />
    <xsl:strip-space elements="*" />

    <!-- Clave para calcular zonas únicas en XSLT 1.0 -->
    <xsl:key name="kZona" match="mision/zona" use="." />

    <!-- Convierte una fecha YYYY-MM-DD a día juliano -->
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

    <!-- Devuelve la diferencia en días entre dos fechas YYYY-MM-DD -->
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
                <!-- TODO ALUMNADO:
                     1) Recorrer solo misiones activas.
                     2) Ordenar por prioridad desc y fechaInicio asc.
                     3) Generar cada <mision> con id, prioridad y duracionDias.
                     4) Si no hay fechaFin, usar 1912-12-31 en duracionDias.
                -->
            </misiones-activas>

            <misiones-cerradas>
                <!-- TODO ALUMNADO:
                     1) Recorrer solo misiones cerradas.
                     2) Ordenar por fechaFin asc.
                     3) Generar cada <mision> con id, prioridad y duracionDias.
                     4) En cerradas, usar fechaInicio y fechaFin reales.
                -->
            </misiones-cerradas>

            <resumen>
                <!-- TODO ALUMNADO: completar los 3 primeros conteos -->
                <totalMisiones />
                <totalActivas />
                <totalCerradas />

                <!-- Resuelto: zonas únicas -->
                <zonasUnicas>
                    <xsl:value-of select="count(mision/zona[generate-id() = generate-id(key('kZona', .)[1])])" />
                </zonasUnicas>
            </resumen>
        </centro-control>
    </xsl:template>

</xsl:stylesheet>
