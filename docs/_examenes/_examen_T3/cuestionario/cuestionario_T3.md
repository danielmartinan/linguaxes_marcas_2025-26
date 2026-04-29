# Cuestionario T3

---

## UD5 - Conversión y adaptación de documentos XML (10 preguntas)

1. ¿Qué condición distingue a un XML bien formado de un XML válido?
	a) El XML bien formado tiene declaración XML obligatoria y el válido no.
	b) El XML válido cumple reglas de un esquema o DTD; el bien formado solo respeta la sintaxis XML.
	c) El XML válido solo puede usar codificación UTF-8.
	d) El XML bien formado permite etiquetas sin cerrar si hay sangría correcta.

2. En una transformación con XSLT, ¿cuál es la función principal de la hoja de estilo?
	a) Convertir automáticamente XML en SQL.
	b) Definir reglas para seleccionar nodos y generar un documento de salida.
	c) Validar el XML contra XSD antes de leerlo.
	d) Comprimir el tamaño final del documento.

3. ¿Qué ventaja aporta estructurar una transformación en varias plantillas xsl:template?
	a) Obliga a procesar los nodos en orden alfabético.
	b) Permite reutilización y mantenimiento más claro de la lógica.
	c) Evita el uso de XPath en toda la hoja de estilo.
	d) Garantiza mejor rendimiento en cualquier procesador XSLT.

4. ¿Qué hace xsl:apply-templates en un contexto típico?
	a) Aplica solo la primera plantilla definida en el archivo.
	b) Ejecuta las plantillas que coinciden con los nodos seleccionados.
	c) Copia nodos al resultado sin evaluarlos.
	d) Sustituye xsl:for-each cuando hay condiciones.

5. ¿Cuál es la diferencia más precisa entre xsl:value-of y xsl:copy-of?
	a) xsl:value-of copia estructura XML completa y xsl:copy-of solo texto.
	b) xsl:value-of devuelve el valor textual del nodo y xsl:copy-of clona nodos con su estructura.
	c) Ambos hacen exactamente lo mismo, pero con distinta sintaxis.
	d) xsl:copy-of solo puede usarse dentro de xsl:attribute.

6. En una hoja XSLT, XPath se usa principalmente para:
	a) Definir tipos de datos de salida.
	b) Seleccionar nodos y navegar por el árbol XML.
	c) Declarar variables globales en JavaScript.
	d) Importar hojas de estilo CSS externas.

7. ¿Qué combinación describe mejor el papel de xsl:for-each y xsl:sort?
	a) xsl:for-each itera nodos y xsl:sort permite ordenarlos antes de producir salida.
	b) xsl:for-each valida datos y xsl:sort elimina duplicados.
	c) xsl:for-each y xsl:sort solo funcionan en salida HTML.
	d) xsl:sort debe declararse fuera de xsl:for-each para ser válido.

8. ¿Qué implica transformar un XML a HTML con XSLT?
	a) Sustituir la codificación por UTF-16 sin tocar el contenido.
	b) Mapear nodos XML a una estructura de presentación web.
	c) Eliminar atributos para reducir el tamaño del documento.
	d) Cambiar etiquetas XML por comentarios HTML automáticamente.

9. ¿Por qué es importante fijar correctamente la codificación en una conversión?
	a) Porque evita errores de representación de caracteres, como tildes o eñes.
	b) Porque acelera siempre la transformación
	c) Porque impide el uso de namespaces.
	d) Porque reemplaza la validación del documento.

10. ¿Qué beneficio clave tiene separar contenido XML y presentación XSL/CSS?
	a) Permite cambiar formato de salida sin reescribir los datos de origen.
	b) Elimina la necesidad de usar procesadores XSLT.
	c) Hace que XML y HTML sean el mismo lenguaje.
	d) Obliga a duplicar el contenido en cada vista.

## UD6 - Almacenamiento de información (10 preguntas)

11. Frente a una base relacional, ¿qué característica define mejor el almacenamiento en XML?
	a) Siempre ocupa menos espacio en disco.
	b) Modela bien estructuras jerárquicas y semiestructuradas.
	c) No necesita índices para consultar rápido.
	d) Impide redundancia por diseño.

12. Una base de datos nativa XML se caracteriza por:
	a) Guardar documentos XML preservando su estructura como unidad principal.
	b) Convertir todo XML en tablas antes de almacenarlo.
	c) Requerir SQL como único lenguaje de consulta.
	d) No permitir validación con esquemas.

13. ¿Para qué se utiliza XQuery en un entorno con múltiples documentos XML?
	a) Para diseñar interfaces gráficas del gestor.
	b) Para consultar, combinar y transformar información XML.
	c) Para reemplazar completamente XPath en cualquier contexto.
	d) Para comprimir colecciones grandes sin pérdida.

14. ¿Qué relación es correcta entre XPath y XQuery?
	a) XPath consulta JSON y XQuery solo XML local.
	b) XPath selecciona nodos; XQuery amplía esa capacidad con construcción y filtrado más complejos.
	c) Son lenguajes incompatibles que no comparten sintaxis.
	d) XQuery no puede usar expresiones XPath.

15. En una expresión FLWOR, ¿qué cláusula se usa para filtrar resultados?
	a) order by
	b) return
	c) where
	d) let

16. ¿Qué efecto suele tener un índice bien diseñado en consultas sobre grandes volúmenes?
	a) Reduce el tiempo de búsqueda al evitar recorridos completos.
	b) Impide realizar ordenaciones en resultados.
	c) Solo mejora inserciones, no consultas.
	d) Es útil únicamente en documentos pequeños.

17. ¿Qué práctica contribuye mejor a mantener integridad de datos XML almacenados?
	a) Eliminar todos los atributos para simplificar.
	b) Validar con esquemas y aplicar reglas de consistencia en actualización.
	c) Guardar siempre una copia sin validar.
	d) Cambiar nombres de etiquetas en cada versión.

18. ¿Qué ventaja aporta usar DTD o XML Schema antes de almacenar datos?
	a) Garantiza compatibilidad con cualquier ERP sin mapeo.
	b) Define restricciones de estructura y tipos para reducir errores de entrada.
	c) Sustituye la necesidad de hacer copias de seguridad.
	d) Evita toda redundancia entre documentos.

19. Si hay datos duplicados en distintos XML, ¿qué riesgo es más probable?
	a) Mejor trazabilidad automática del dato maestro.
	b) Inconsistencias al actualizar solo una de las copias.
	c) Menor necesidad de validación previa.
	d) Mayor independencia entre aplicaciones sin coste.

20. Para elegir entre relacional, XML nativo o híbrido, el criterio más sólido es:
	a) Usar siempre relacional por ser más estándar.
	b) Decidir según estructura de datos, tipo de consulta e integración requerida.
	c) Elegir XML nativo cuando haya más de 1 GB de información.
	d) Elegir híbrido solo si no existe personal técnico.

## UD7 - Sistemas de Gestión Empresarial (5 preguntas)

21. ¿Cuál describe mejor el objetivo central de un ERP?
	a) Gestionar únicamente el área contable con informes mensuales.
	b) Integrar procesos y datos de la empresa en una plataforma común.
	c) Sustituir todos los sistemas externos de forma inmediata.
	d) Automatizar solo tareas de recursos humanos.

22. ¿Qué conjunto representa módulos habituales de un ERP?
	a) Compras, ventas, inventario, finanzas y recursos humanos.
	b) Navegador, antivirus, correo y videollamadas.
	c) Diseño gráfico, edición de vídeo y CAD.
	d) DNS, firewall, proxy y balanceador.

23. En una implantación ERP, ¿qué combinación refleja un escenario realista?
	a) Beneficios rápidos sin cambios organizativos.
	b) Mejora de trazabilidad, pero con necesidad de formación y ajuste de procesos.
	c) Coste inicial nulo y retorno inmediato.
	d) Eliminación completa de errores humanos desde el primer día.

24. ¿Por qué la integración de datos entre departamentos es crítica en un ERP?
	a) Porque permite duplicar datos para aumentar la disponibilidad.
	b) Porque evita islas de información y mejora la coordinación operativa.
	c) Porque reduce el número de usuarios del sistema.
	d) Porque impide el acceso en tiempo real a la información.

25. ¿Qué papel tiene XML en la integración de un ERP con otras aplicaciones?
	a) Actúa como formato de intercambio estructurado entre sistemas heterogéneos.
	b) Reemplaza por completo las API de integración.
	c) Elimina la necesidad de validar mensajes entrantes.
	d) Solo sirve para generar documentación interna.

---

## Soluciones

1. b
2. b
3. b
4. b
5. b
6. b
7. a
8. b
9. a
10. a
11. b
12. a
13. b
14. b
15. c
16. a
17. b
18. b
19. b
20. b
21. b
22. a
23. b
24. b
25. a
