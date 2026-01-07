# Calculadora React — Proyecto HITO 4

Esta es una calculadora hecha en React, con tests automáticos y despliegue en Render como Static Site.  
El objetivo es demostrar un pipeline completo de CI/CD: tests → build → deploy → rollback.

---

## Cómo funciona el pipeline

1. **Local**
   - Desarrollas y pruebas con `npm start` y `npm test`.
   - Cuando todo funciona, haces build con `npm run build`.

2. **GitHub**
   - Cada vez que haces push a la rama `main` o abres un pull request, se dispara el workflow.
   - Primero se ejecutan los **tests unitarios e integración**.
   - Si los tests pasan, se genera el **build** de la app.

3. **Render**
   - Render recibe automáticamente el build y publica tu app.
   - Build Command en Render:  
     ```
     npm install && npm test -- --watchAll=false && npm run build
     ```
   - Carpeta publicada: `build`
   - Auto Deploy: activado
   - Rollback manual disponible en caso de error

---

## Comandos principales

```bash
# Para trabajar localmente
npm install       # Instalar dependencias
npm test          # Ejecutar tests
npm start         # Iniciar servidor de desarrollo
npm run build     # Generar build para producción

# En Render (Build Command)
npm install && npm test -- --watchAll=false && npm run build

