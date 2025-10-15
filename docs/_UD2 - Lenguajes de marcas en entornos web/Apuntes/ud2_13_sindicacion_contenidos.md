# Sindicación de contenidos

## Introducción

La sindicación de contenidos es una tecnología que permite distribuir y compartir información de manera automatizada entre diferentes sitios web y aplicaciones. Gracias a la sindicación, los usuarios pueden recibir actualizaciones de múltiples fuentes en un solo lugar, sin necesidad de visitar cada página individualmente.

## Tecnologías y lenguajes de marcas para sindicación

La base de la sindicación de contenidos son los lenguajes de marcas, especialmente aquellos basados en XML. Los principales estándares son:

### RSS (Really Simple Syndication)

- Basado en XML.
- Permite distribuir titulares, resúmenes y enlaces a contenidos completos.
- Existen varias versiones, siendo RSS 2.0 la más extendida.
- Ejemplo de feed RSS:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Ejemplo de RSS</title>
    <link>https://www.ejemplo.com/</link>
    <description>Últimas noticias de Ejemplo</description>
    <item>
      <title>Noticia 1</title>
      <link>https://www.ejemplo.com/noticia1</link>
      <description>Resumen de la noticia 1</description>
      <pubDate>Mon, 15 Oct 2025 10:00:00 +0000</pubDate>
    </item>
  </channel>
</rss>
```

### Atom

- Alternativa a RSS, también basado en XML.
- Más estricto y flexible en su estructura.
- Ejemplo de feed Atom:

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Ejemplo de Atom</title>
  <link href="https://www.ejemplo.com/"/>
  <updated>2025-10-15T10:00:00Z</updated>
  <entry>
    <title>Noticia 1</title>
    <link href="https://www.ejemplo.com/noticia1"/>
    <id>https://www.ejemplo.com/noticia1</id>
    <updated>2025-10-15T10:00:00Z</updated>
    <summary>Resumen de la noticia 1</summary>
  </entry>
</feed>
```

### JSON Feed

- Alternativa moderna basada en JSON.
- Menos extendida, pero utilizada en algunos blogs y servicios actuales.
- Más información: [https://jsonfeed.org/](https://jsonfeed.org/)

## Ámbitos de aplicación de la sindicación

- **Blogs y medios de comunicación**: Publicación automática de noticias y artículos.
- **Podcasts y videoblogs**: Distribución de episodios y contenidos multimedia.
- **Agregadores de noticias**: Plataformas que reúnen contenidos de múltiples fuentes.
- **Aplicaciones empresariales**: Monitorización de novedades, alertas y flujos de información interna.
- **Redes sociales y automatización**: Herramientas como IFTTT o Zapier permiten conectar feeds con otras aplicaciones.

### Agregadores de noticias

Los agregadores de noticias (o lectores de feeds) son aplicaciones o servicios web que permiten suscribirse a múltiples fuentes de información (feeds RSS, Atom, etc.) y consultar todas las actualizaciones en un único lugar. Su principal ventaja es la centralización y organización de contenidos, evitando tener que visitar cada sitio web por separado.

**¿Cómo funcionan?**

1. El usuario añade la URL del feed de un sitio web al agregador.
2. El agregador consulta periódicamente ese feed y muestra las nuevas publicaciones.
3. El usuario puede leer titulares, resúmenes o el contenido completo, marcar como leído, guardar o compartir.

**Tipos de agregadores:**

- Agregadores online: funcionan desde el navegador y permiten acceder a los feeds desde cualquier dispositivo (ej: Feedly, Inoreader).
- Aplicaciones de escritorio: programas instalados en el ordenador (ej: Thunderbird, QuiteRSS).
- Apps móviles: aplicaciones específicas para smartphones y tablets (ej: Feedly, NewsBlur, Reeder).

**Ejemplos populares:**

- [Feedly](https://feedly.com/): uno de los más usados, con versión gratuita y de pago.
- [Inoreader](https://www.inoreader.com/): muy completo, con opciones de automatización.
- [Thunderbird](https://www.thunderbird.net/): cliente de correo que también permite gestionar feeds.
- [NewsBlur](https://newsblur.com/): agregador online y app móvil.
- [The Old Reader](https://theoldreader.com/): interfaz clásica, similar al antiguo Google Reader.

**Ventajas de los agregadores:**

- Ahorro de tiempo y centralización de información.
- Personalización de fuentes y categorías.
- Posibilidad de buscar, filtrar, guardar y compartir contenidos.

**¿Siguen vigentes?**

A pesar de la popularidad de las redes sociales, los agregadores siguen siendo muy utilizados en entornos profesionales, técnicos y por usuarios que desean controlar la información que reciben, sin algoritmos ni publicidad intrusiva.

## Ejemplos prácticos

### Ejemplo de archivo RSS

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Noticias TIC</title>
    <link>https://www.noticias-tic.com/</link>
    <description>Actualidad tecnológica</description>
    <item>
      <title>Lanzamiento de nuevo smartphone</title>
      <link>https://www.noticias-tic.com/smartphone</link>
      <description>La marca X presenta su nuevo modelo.</description>
      <pubDate>Wed, 15 Oct 2025 09:00:00 +0000</pubDate>
    </item>
  </channel>
</rss>
```

### Ejemplo de archivo Atom

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Noticias TIC</title>
  <link href="https://www.noticias-tic.com/"/>
  <updated>2025-10-15T09:00:00Z</updated>
  <entry>
    <title>Lanzamiento de nuevo smartphone</title>
    <link href="https://www.noticias-tic.com/smartphone"/>
    <id>https://www.noticias-tic.com/smartphone</id>
    <updated>2025-10-15T09:00:00Z</updated>
    <summary>La marca X presenta su nuevo modelo.</summary>
  </entry>
</feed>
```

### Cómo suscribirse a un feed

- Copia la URL del feed (RSS o Atom) de tu web favorita.
- Pega la URL en un lector de feeds (Feedly, Inoreader, Thunderbird, etc.).
- El lector mostrará automáticamente las actualizaciones.

### Integración de feeds en una web

- Muchos CMS (WordPress, Joomla, Drupal) generan feeds automáticamente.
- Se pueden mostrar feeds de terceros en tu web usando widgets o plugins.

## Ventajas y limitaciones

**Ventajas:**

- Actualización automática de contenidos.
- Centralización de información de múltiples fuentes.
- Interoperabilidad entre plataformas.
- Automatización de tareas y flujos de trabajo.

**Limitaciones:**

- Menor uso entre usuarios generales por el auge de redes sociales.
- Algunos lectores y servicios han dejado de dar soporte.
- Riesgo de spam o feeds abandonados.

## Recursos y herramientas

- [Feedly](https://feedly.com/): Lector de feeds online.
- [Inoreader](https://www.inoreader.com/): Lector avanzado con automatizaciones.
- [Thunderbird](https://www.thunderbird.net/): Cliente de correo con soporte RSS.
- [Validador RSS/Atom de W3C](https://validator.w3.org/feed/): Para comprobar la validez de un feed.
- [JSON Feed](https://jsonfeed.org/): Documentación y ejemplos de feeds en JSON.
- [IFTTT](https://ifttt.com/) y [Zapier](https://zapier.com/): Automatización de tareas usando feeds.

---

> **Nota:** Aunque el uso de RSS y Atom ha disminuido entre el público general, siguen siendo tecnologías vigentes y ampliamente utilizadas en entornos profesionales, técnicos y de automatización.
