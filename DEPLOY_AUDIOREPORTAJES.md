# Instrucciones para Desplegar Audioreportajes en Producción

## Archivos que necesitas subir al servidor:

### 1. Código actualizado
Sube los siguientes archivos/carpetas al servidor en `/radioabc/`:

```
routes/web.php
app/Http/Controllers/Api/AudioReportController.php
resources/js/Pages/AudioReportajeDetail.tsx
resources/js/Components/PodcastView.tsx
public/build/ (toda la carpeta después de ejecutar npm run build)
.htaccess (nuevo archivo en la raíz del proyecto)
public/.htaccess (actualizado)
```

### 2. Estructura de archivos en el servidor

Tu estructura debe verse así:
```
/radioabc/
├── .htaccess (redirige a public/)
├── app/
├── public/
│   ├── .htaccess (maneja las rutas de Laravel)
│   ├── index.php
│   └── build/ (archivos compilados)
└── ...otros archivos
```

### 3. Configuración del .env en producción

Asegúrate de que tu archivo `.env` en producción tenga:
```
APP_URL=https://tudominio.com/radioabc/public
```

### 4. Comandos a ejecutar en el servidor

Después de subir los archivos, ejecuta en el servidor:

```bash
# Limpiar caché de Laravel
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# Regenerar caché de configuración
php artisan config:cache
php artisan route:cache
```

### 5. Verificar permisos

Asegúrate de que Apache pueda leer los archivos .htaccess:
```bash
chmod 644 .htaccess
chmod 644 public/.htaccess
```

## Cómo funciona ahora:

1. **Navegación**: Usa el router de Inertia.js para manejar correctamente las rutas en subdirectorios
2. **Compartir**: Construye URLs usando `window.APP_URL` para generar links correctos
3. **Rutas**: El .htaccess redirige correctamente todas las peticiones a través de Laravel

## URLs de ejemplo:

- Lista de audioreportajes: `https://tudominio.com/radioabc/public/#podcast`
- Detalle de audioreportaje: `https://tudominio.com/radioabc/public/audioreportaje/nombre-del-slug`

## Solución de problemas:

### Si sigues viendo 404:

1. Verifica que mod_rewrite esté habilitado en Apache:
   ```bash
   a2enmod rewrite
   service apache2 restart
   ```

2. Verifica que AllowOverride esté configurado en la configuración de Apache:
   ```apache
   <Directory /var/www/html/radioabc/public>
       AllowOverride All
   </Directory>
   ```

3. Verifica los logs de Apache:
   ```bash
   tail -f /var/log/apache2/error.log
   ```

### Si las imágenes no cargan:

Verifica que el symlink de storage esté creado:
```bash
php artisan storage:link
```

## Notas importantes:

- **NO** modifiques manualmente las URLs en el código
- **SÍ** asegúrate de que APP_URL en .env sea correcto
- **SÍ** ejecuta `npm run build` antes de subir los archivos
- **SÍ** limpia el caché después de cada cambio
