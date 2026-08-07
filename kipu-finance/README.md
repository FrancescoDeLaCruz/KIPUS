# KIPU Finance

KIPU Finance es un sistema operativo financiero personal de próxima generación, diseñado para centralizar, analizar y optimizar la economía personal mediante herramientas inteligentes y una interfaz moderna.

## 🚀 Visión del Proyecto
Inspirado en la tecnología ancestral de los quipus incas, KIPU organiza cada "nudo" de tu información financiera —ingresos, gastos, deudas e inversiones— en un panel de control intuitivo, automatizado y visualmente avanzado.

## 🛠 Tech Stack
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Recharts.
- **Backend**: Node.js, NestJS.
- **Base de Datos**: PostgreSQL, Prisma ORM.
- **Autenticación**: JWT, Refresh Tokens.
- **Infraestructura**: Docker, Vercel, Railway/Render.

## 📂 Arquitectura Modular
El proyecto sigue una estructura escalable diseñada para facilitar el mantenimiento y la futura integración de APIs bancarias:
- `/apps/web`: Aplicación responsive con enfoque Mobile-First.
- `/apps/api`: Servidor modular con lógica de negocio, reportes y motor de IA.
- `/packages`: Módulos compartidos y validaciones (Zod).

## 📊 Módulos Principales
- **Dashboard Financiero**: Vista centralizada de salud financiera.
- **Gestión de Activos/Pasivos**: Control detallado de cuentas, tarjetas y préstamos.
- **KIPU IA**: Asistente de análisis financiero, predicción de liquidez y alertas de riesgo.
- **Reportes e Inteligencia**: Exportación a PDF/Excel y visualización de patrimonio neto.

## 📦 Instalación y Desarrollo
1. Clonar el repositorio.
2. Instalar dependencias: `npm install` en `/apps/web` y `/apps/api`.
3. Configurar variables de entorno (`.env` con `DATABASE_URL`).
4. Sincronizar esquema: `npx prisma db push`.
5. Iniciar entorno de desarrollo: `npm run dev`.

---
*Diseñado para la gestión financiera inteligente.*
