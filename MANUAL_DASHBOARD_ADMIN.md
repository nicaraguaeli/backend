# Manual de Usuario - Panel de Administración
**Proyecto:** Radio ABC Admin Dashboard  
**Fecha:** Febrero 2026

---

## 📋 Tabla de Contenidos

1. [Introducción y Acceso](#1-introducción-y-acceso)
2. [Gestión de Noticias](#2-gestión-de-noticias)
   - Crear Nueva Noticia
   - Noticia Principal (Hero) y Destacadas
   - Edición Rápida y Estados
3. [Categorías y Etiquetas](#3-categorías-y-etiquetas)
4. [Gestión de Periodistas](#4-gestión-de-periodistas)
5. [Multimedia: Audio Reportajes](#5-multimedia-audio-reportajes)
6. [Publicidad: Banners](#6-publicidad-banners)
7. [Bolsa de Trabajo (Vacantes)](#7-bolsa-de-trabajo-vacantes)
8. [Usuarios y Permisos](#8-usuarios-y-permisos)
9. [Configuración y Perfil](#9-configuración-y-perfil)

---

## 1. Introducción y Acceso

El **Panel de Administración** permite gestionar todo el contenido visible en el sitio web de Radio ABC. Desde aquí podrá publicar noticias, gestionar publicidad, administrar usuarios y más.

### Iniciar Sesión
1. Diríjase a la ruta `/admin` en su navegador (ej: `su-sitio.com/admin`).
2. Ingrese sus credenciales:
   - **Correo Electrónico**
   - **Contraseña**
3. Haga clic en **Entrar**.

---

## 2. Gestión de Noticias

Esta es la sección más importante para el flujo diario de información.

### 📝 Crear Nueva Noticia
1. En el menú lateral, seleccione **Noticias (News)** > **Crear**.
2. Complete los campos requeridos:
   - **Título**: Titular de la noticia.
   - **Contenido**: Cuerpo de la noticia (editor de texto enriquecido).
   - **Imagen Principal**: Suba una imagen representativa.
   - **Categoría**: Seleccione la sección correspondiente (Nacionales, Deportes, etc.).
   - **Periodista**: Asigne el autor.
   - **Etiquetas (Tags)**: Palabras clave para búsqueda.

### ⭐ Destacar Noticias
Existen dos niveles de destacado:
1. **Hero (Principal)**: Es la noticia grande que aparece al inicio del sitio. Solo puede haber una activa.
   - En la lista de noticias, use la opción **"Set Hero"** o marque la casilla correspondiente.
2. **Highlight (Destacado)**: Noticias que aparecen en la sección "Noticias Destacadas".
   - Active el interruptor de **Destacado** en la lista o edición.

### ⚡ Estados y Edición Rápida
- **Publicado / Borrador**: Controle la visibilidad con el interruptor de estado.
- **Edición Rápida**: Puede cambiar el título o estado sin entrar al formulario completo usando el botón de edición rápida en la tabla de lista.

---

## 3. Categorías y Etiquetas

Organice el contenido del sitio.

### Categorías
- **Crear**: Vaya a **Categorías** > **Nueva**. Ingrese el nombre y, si aplica, una imagen destacada.
- **Reordenar**: Use la función de **Reordenar** para cambiar el orden en que aparecen en el menú principal.

### Etiquetas (Tags)
- Útiles para agrupar noticias por temas específicos (ej: "Elecciones 2026", "Verano", "Tráfico").

---

## 4. Gestión de Periodistas

Administre el equipo de redacción.

- **Nuevo Periodista**: Ingrese Nombre, Biografía, Redes Sociales y Foto de perfil.
- **Estado**: Puede desactivar un periodista si ya no colabora, sin borrar sus noticias históricas.

---

## 5. Multimedia: Audio Reportajes

Gestione el contenido de audio/podcast.

- Vaya a **Audio Reportajes**.
- **Subir**: Cargue el archivo de audio (.mp3) e ingrese un título y descripción.
- Estos reportajes se mostrarán en la sección dedicada o consumidos vía API.

---

## 6. Publicidad: Banners

Controle los espacios publicitarios del sitio.

- **Ubicaciones**: Asigne banners a zonas específicas (Header, Sidebar, Entre noticias).
- **Imagen**: Suba el arte del banner.
- **Link**: Enlace al que dirigirá al hacer clic.
- **Activo/Inactivo**: Active o pause campañas publicitarias fácilmente.

---

## 7. Bolsa de Trabajo (Vacantes)

Publique ofertas laborales en la sección `/empleos`.

- **Crear Vacante**: Título del puesto, Descripción, Requisitos y Fecha de Expiración.
- **Expiración**: Las vacantes se ocultan automáticamente después de la fecha límite.

---

## 8. Usuarios y Permisos

Gestione quién tiene acceso al panel.

- **Usuarios**: Lista de administradores y editores.
- **Roles**: (Si está habilitado) Asigne permisos específicos (solo editar, admin total, etc.).
- **Estado**: Bloquee el acceso a usuarios inactivos.

---

## 9. Configuración y Perfil

### Marca de Agua (Watermark)
- Vaya a **Configuración** o **Marca de Agua**.
- Suba su logo (PNG transparente) para que se aplique automáticamente a las imágenes de noticias subidas.

### Mi Perfil
- **Editar Perfil**: Actualice su nombre o correo.
- **Cambiar Contraseña**: Por seguridad, cambie su contraseña periódicamente desde esta sección.

---
*Este documento es confidencial y para uso exclusivo del personal de Radio ABC.*
