# LMSXI07 - Instalación y configuración de Odoo

## Descripción de la tarea

En esta tarea se propone la instalación y configuración de **Odoo**, un sistema de gestión empresarial integral que combina las funcionalidades de un ERP y un CRM. El objetivo es familiarizarse con el proceso de despliegue mediante **Docker**, la configuración inicial del sistema, la gestión de usuarios y la utilización del módulo de Ventas para generar un presupuesto en PDF.

Todo el proceso deberá documentarse con capturas de pantalla y explicaciones detalladas de cada paso.

:::info Requisito previo
Si no conoces Docker, consulta el [Anexo: Introducción a Docker](#anexo-introducción-a-docker) antes de comenzar.
:::

## Parte 1 — Despliegue de Odoo con Docker

### Paso 1. Instalar Docker Desktop (Windows/macOS)

Si trabajas en Windows o macOS, la forma más sencilla de usar Docker es a través de **Docker Desktop**. Sigue estos pasos para instalarlo:

1. Accede a [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop) y descarga la versión para tu sistema operativo.
2. Ejecuta el instalador y sigue los pasos. En Windows, acepta la integración con WSL 2 si el instalador lo solicita.
3. Una vez instalado, abre **Docker Desktop** y espera a que el motor de Docker arranque (el icono de la barra de tareas dejará de mostrar la animación de carga).
4. Abre un terminal (PowerShell en Windows, Terminal en macOS/Linux) y comprueba que Docker está en funcionamiento:

```bash
docker --version
docker compose version
```

Deberías ver algo similar a:

```plaintext
Docker version 27.x.x, build ...
Docker Compose version v2.x.x
```

### Paso 1. Instalar Docker Engine (Linux)

En Linux, la instalación de Docker se realiza a través del gestor de paquetes de tu distribución. Aquí tienes los comandos para las distribuciones más comunes:

#### Ubuntu/Debian

```bash
sudo apt update
sudo apt install -y docker.io docker-compose
sudo systemctl start docker
sudo systemctl enable docker
```

Una vez instalado, verifica la instalación:

```bash
docker --version
docker compose version
```

> Para otras distribuciones, consulta la [documentación oficial de Docker](https://docs.docker.com/engine/install/).

### Paso 2. Crear la carpeta del proyecto

Crea una carpeta dedicada al proyecto, por ejemplo `odoo-docker`, y sitúate dentro de ella:

```bash
mkdir odoo-docker
cd odoo-docker
```

### Paso 3. Crear el archivo `docker-compose.yml`

Dentro de la carpeta `odoo-docker`, crea un archivo llamado `docker-compose.yml` con el siguiente contenido:

```yaml
services:

  db:
    image: postgres:15
    restart: unless-stopped
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: odoo
      POSTGRES_PASSWORD: odoo
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  web:
    image: odoo:17
    restart: unless-stopped
    depends_on:
      - db
    ports:
      - "8069:8069"
    environment:
      HOST: db
      USER: odoo
      PASSWORD: odoo
    volumes:
      - odoo-web-data:/var/lib/odoo

volumes:
  odoo-db-data:
  odoo-web-data:
```

:::tip ¿Qué hace este archivo?

Define dos **servicios** que se ejecutan en **contenedores**:

- **db**: una base de datos PostgreSQL, necesaria para que Odoo almacene su información.
- **web**: el propio servidor de Odoo, que escucha en el puerto **8069** de tu equipo.

Los datos se guardan en **volúmenes** gestionados por Docker, por lo que no se pierden al detener los contenedores.
:::

### Paso 4. Arrancar los contenedores

Desde la carpeta `odoo-docker`, ejecuta:

```bash
docker compose up -d
```

La opción `-d` (*detached*) hace que los contenedores se ejecuten en segundo plano. La primera vez, Docker descargará las imágenes de Odoo y PostgreSQL, lo que puede tardar varios minutos dependiendo de la velocidad de la conexión.

Para comprobar que los contenedores están en ejecución:

```bash
docker compose ps
```

Deberías ver los dos servicios (`db` y `web`) con estado **running**.

### Paso 5. Acceder a Odoo

Abre el navegador y ve a:

```plaintext
http://localhost:8069
```

Se mostrará el asistente de creación de la base de datos inicial de Odoo.

## Parte 2 — Configuración inicial de Odoo

### Paso 6. Crear la base de datos y el usuario administrador

En el asistente de creación de base de datos, rellena los campos:

| Campo | Valor |
|---|---|
| Master Password | odoo *(o la que prefieras)* |
| Database Name | odoo |
| Email | tu dirección de correo |
| Password | una contraseña segura |
| Phone Number | *(opcional)* |
| Language | Español |
| Country | España |
| Demo data | ✅ Activado |

Activa la opción **Demo data** (cargar datos de demostración) y haz clic en **Create database**.

### Paso 7. Modificar el nombre del usuario administrador

1. Una vez iniciada sesión, haz clic en la esquina superior izquierda, donde aparece un icono con cuadrados (menú de aplicaciones).
2. Haz clic en ajustes, y en la sección de usuarios, haz clic en *Gestionar usuarios*.
3. Selecciona el usuario administrador (normalmente llamado *Mitchell Admin*). 
4. Cambia el nombre al tuyo y guarda los cambios.

### Paso 8. Eliminar el usuario de demostración

1. En el mismo menú que en el apartado anterior, localiza el usuario de demo (normalmente llamado *Marc Demo*).
2. Ábrelo y haz clic en **Acción** → **Archivar** (o elimínalo si la opción está disponible).

### Paso 9. Crear un nuevo usuario con permisos de administración

1. En **Ajustes** → **Usuarios** → **Gestionar usuarios**, haz clic en **Nuevo**.
2. Rellena los datos del nuevo usuario (nombre, correo electrónico).
3. En la sección **Administración**, marca la opción **Ajustes**.
4. En la parte superior izquierda, haz clic en el engranaje y selecciona **Cambiar contraseña**. Establece una contraseña segura para el nuevo usuario.
5. Guarda el registro y establece una contraseña mediante el botón **Enviar correo de invitación** o **Cambiar contraseña**.

### Paso 10. Iniciar sesión con el nuevo usuario

1. Cierra la sesión actual (menú de usuario → **Cerrar sesión**).
2. Inicia sesión con las credenciales del nuevo usuario creado en el paso anterior.

### Paso 11. Filtrar las aplicaciones instaladas

1. Ve al menú principal (icono de las nueve cuadrículas o acceso a **Aplicaciones**).
2. En el buscador de aplicaciones, aplica el filtro **Instaladas** para ver únicamente los módulos que están activos.

### Paso 12. Modificar el nombre y el logo de la compañía

1. Ve a **Ajustes** → **Compañías** → **Actualizar información**.
2. Cambia el **Nombre de la compañía** por `LMSXI`.
3. Haz clic en el logo actual y sube una imagen personalizada. Este logo aparecerá en la pantalla de inicio de sesión y en los documentos generados.
4. Guarda los cambios.

## Parte 3 — Módulo de Ventas

### Paso 13. Instalar el módulo de Ventas

1. Accede a **Aplicaciones**.
2. Busca **Ventas** en el catálogo.
3. Haz clic en **Instalar** y espera a que finalice el proceso.

### Paso 14. Crear un presupuesto en PDF

1. Ve a **Ventas** → **Pedidos** → **Presupuestos**.
2. Haz clic en **Nuevo**.
3. Selecciona o crea un cliente.
4. En la sección de líneas de pedido, añade **al menos 2 productos** con sus correspondientes cantidades y precios.
5. En la esquina superior izquierda, haz clic en el engranaje, y clica en **Imprimir** → **Presupuesto** para generar el PDF.
6. Descarga el PDF y comprueba que contiene el logo y el nombre de la compañía configurados anteriormente.

## Parte 4 — Detener el entorno Docker

Cuando termines de trabajar, detén los contenedores para liberar recursos:

```bash
docker compose stop
```

Para volver a iniciarlos en otra sesión:

```bash
docker compose start
```

:::warning No uses `docker compose down` salvo que quieras eliminar los contenedores
El comando `docker compose down` elimina los contenedores, aunque los datos persisten en los volúmenes. Si añades la opción `-v`, se eliminan también los volúmenes y **perderás todos los datos de Odoo**.
:::

## Entrega

Elabora un documento (PDF) con:

- Una breve introducción describiendo la tarea.
- **Capturas de pantalla** de cada uno de los pasos, con los elementos clave resaltados (recuadros, flechas o anotaciones).
- Una **explicación breve** bajo cada captura que describa qué se está haciendo y por qué.
- El **presupuesto en PDF** generado desde el módulo de Ventas, adjunto al final del documento.

Deberás subir el informe, con el nombre `LMSXI07_Tarea_Odoo.pdf`, junto al presupuesto en PDF, comprimidos en un archivo .zip, con el nombre `LMSXI07_Tarea_Odoo.zip`, a la plataforma de entrega antes de la fecha límite.
