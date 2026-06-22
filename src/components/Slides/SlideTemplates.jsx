import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Layers, 
  Cpu, 
  Code, 
  Brain, 
  MessageSquare, 
  Zap,
  Play,
  ArrowRightLeft,
  Clock,
  User,
  Lightbulb,
  BookOpen,
  Palette,
  CloudLightning,
  Image as ImageIcon,
  CheckCircle,
  GitBranch
} from 'lucide-react';

// Helper component for slide headers
const SlideHeader = ({ subtitle, title }) => (
  <div className="mb-4">
    <span className="text-emerald-400 font-bold text-[10px] tracking-widest block mb-0.5 font-mono uppercase">
      {subtitle}
    </span>
    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
      {title}
    </h2>
    <div className="w-12 h-0.5 bg-emerald-500 rounded-full mt-1.5"></div>
  </div>
);

// Slide 1: Title / Cover
export const TitleSlide = () => (
  <div className="flex flex-col justify-between h-full py-10 text-center px-4 relative overflow-hidden">
    <div className="flex-1 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight mb-8">
        Programar en la Era de la IA:
        <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-clip-text text-transparent text-glow">
          Cómo crear aplicaciones 10 veces más rápido
        </span>
      </h1>
      
      <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-8"></div>
    </div>

    {/* Metadata Footer without duration */}
    <div className="flex justify-center gap-12 items-center w-full max-w-3xl mx-auto border-t border-white/5 pt-6 text-left">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
          <User className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[9px] text-slate-500 uppercase font-mono tracking-wider font-bold">Expositor</p>
          <p className="text-xs font-bold text-white">Henry Quintero</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[9px] text-slate-500 uppercase font-mono tracking-wider font-bold">Tema</p>
          <p className="text-xs font-bold text-white">Desarrollo con IA</p>
        </div>
      </div>
    </div>
  </div>
);

// Slide 2: El Nuevo Paradigma (IA agilizando procesos y tiempos)
export const IntroSlide = () => (
  <div className="flex flex-col justify-between h-full">
    <SlideHeader subtitle="01 / EL NUEVO PARADIGMA" title="IA en el centro del desarrollo" />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1 my-auto">
      {/* Left side: Streamlining text */}
      <div className="space-y-4">
        <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
          Ya no programamos escribiendo código desde cero. 
          <span className="text-emerald-400"> Dirigimos e iteramos.</span>
        </p>
        <p className="text-slate-350 text-sm leading-relaxed">
          La IA agiliza radicalmente la entrega de proyectos al asumir las tareas de boilerplate, documentación e infraestructura inicial, permitiéndonos enfocarnos en la lógica del negocio.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold font-mono">
          <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
          ENTREGA DE PROYECTOS: HASTA 10X MÁS RÁPIDO
        </div>
      </div>

      {/* Right side: Time Comparison Visual */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-2xl p-6 space-y-5">
        <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Tiempo de Desarrollo Estimado</h4>
        
        {/* Traditional Timebar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-red-400 font-bold">Flujo Tradicional</span>
            <span className="text-slate-400">4 a 6 Semanas</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-3.5 overflow-hidden border border-slate-800">
            <div className="bg-red-500/60 h-full rounded-full w-full shadow-lg shadow-red-500/10"></div>
          </div>
        </div>

        {/* AI Assisted Timebar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-emerald-400 font-bold">Flujo Moderno con IA</span>
            <span className="text-emerald-300">2 a 4 Horas</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-3.5 overflow-hidden border border-slate-800">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-1/12 shadow-lg shadow-emerald-500/25"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Slide 3: Flujo de Trabajo Moderno
export const ConceptSlide = () => (
  <div className="flex flex-col justify-between h-full">
    <SlideHeader subtitle="02 / FLOW" title="El flujo de desarrollo práctico" />

    {/* Step Timeline */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 flex-1 my-auto items-stretch">
      {/* Step 1 */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
        <span className="text-3xl font-black text-slate-800/35 font-mono absolute top-2 right-2">1</span>
        <div>
          <BookOpen className="w-6 h-6 text-emerald-400 mb-3" />
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">NotebookLM</h3>
          <p className="text-[10px] text-slate-450 leading-relaxed">
            Planificación de la app y generación de prompts de UI optimizados.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
        <span className="text-3xl font-black text-slate-800/35 font-mono absolute top-2 right-2">2</span>
        <div>
          <Palette className="w-6 h-6 text-blue-400 mb-3" />
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Stitch</h3>
          <p className="text-[10px] text-slate-450 leading-relaxed">
            Diseño e iteración visual de la interfaz (UI Mockups) mediante prompts.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
        <span className="text-3xl font-black text-slate-800/35 font-mono absolute top-2 right-2">3</span>
        <div>
          <Code className="w-6 h-6 text-teal-400 mb-3" />
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Antigravity</h3>
          <p className="text-[10px] text-slate-450 leading-relaxed">
            Generación del código a partir del diseño de Stitch (MCP o Export).
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
        <span className="text-3xl font-black text-slate-800/35 font-mono absolute top-2 right-2">4</span>
        <div>
          <ImageIcon className="w-6 h-6 text-purple-400 mb-3" />
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Gemini</h3>
          <p className="text-[10px] text-slate-450 leading-relaxed">
            Generación autónoma de logotipos, iconos y assets gráficos de la app.
          </p>
        </div>
      </div>

      {/* Step 5 */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
        <span className="text-3xl font-black text-slate-800/35 font-mono absolute top-2 right-2">5</span>
        <div>
          <CloudLightning className="w-6 h-6 text-cyan-400 mb-3" />
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Railway</h3>
          <p className="text-[10px] text-slate-450 leading-relaxed">
            Sincronización con el repositorio Git y despliegue a producción.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Slide 4: Paso 1 - NotebookLM (Planificación y Prompts)
export const FlowSlide = () => (
  <div className="flex flex-col justify-between h-full">
    <SlideHeader subtitle="03 / PASO 1: PLANIFICACIÓN" title=" NotebookLM: Organización Inicial" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1 my-auto">
      {/* Detail list */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-sm tracking-wide">¿Cómo lo usamos en vivo?</h3>
        <ul className="slides-premium-list text-xs space-y-2">
          <li><strong>Estructurar Ideas</strong>: Subimos documentos de requisitos, notas desordenadas o PDFs al cuaderno.</li>
          <li><strong>Generador de Prompts</strong>: Le pedimos que nos redacte prompts de diseño específicos y detallados para Stitch.</li>
          <li><strong>Guía de Arquitectura</strong>: NotebookLM nos ayuda a definir el modelo de datos y las pantallas clave necesarias.</li>
        </ul>
      </div>

      {/* Mock Notebook interface */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-2xl p-5 font-mono text-[10px] text-slate-350 space-y-3">
        <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-[9px] text-slate-500 font-bold">
          <span>NOTEBOOKLM WORKSPACE</span>
          <span className="text-emerald-400">ONLINE</span>
        </div>
        <div className="p-2.5 bg-slate-950/70 border border-slate-900 rounded">
          <span className="text-slate-500">// Documento Subido: Requisitos_App.pdf</span>
          <p className="text-white mt-1">App de Mantenimiento Vehicular: Registro de kilometraje, fecha de cambio de aceite y alertas.</p>
        </div>
        <div className="p-2.5 bg-slate-950/70 border border-slate-900 rounded">
          <span className="text-emerald-400 font-bold">Respuesta del Chat (Prompt para Stitch):</span>
          <p className="text-slate-300 mt-1 italic">
            "Crea una interfaz de estética cyber-dark para registrar mantenimientos de coches. Incluye un listado con barras de progreso de desgaste y un botón flotante verde..."
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Slide 5: Paso 2 - Stitch (Diseño de UI)
export const ToolsGridSlide = () => (
  <div className="flex flex-col justify-between h-full">
    <SlideHeader subtitle="04 / PASO 2: DISEÑO VISUAL" title=" Stitch: Prototipado Interactivo" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1 my-auto">
      {/* Visual Simulation */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-2xl p-5 flex flex-col justify-center items-center min-h-[220px] relative overflow-hidden">
        <div className="absolute top-2 left-2 flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
        </div>
        <span className="text-[9px] text-slate-500 font-mono mb-4 uppercase tracking-wider">Vista previa de Stitch</span>
        
        {/* Mini UI Representation */}
        <div className="w-full max-w-xs bg-slate-950 border border-slate-900 rounded-xl p-4 shadow-xl">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold text-white font-sans">Garaje Digital</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <div className="h-10 bg-slate-900/80 rounded border border-slate-800/80 flex items-center justify-between px-3 mb-2">
            <span className="text-[9px] text-slate-400">Ford Mustang - Aceite</span>
            <span className="text-[9px] text-emerald-400 font-bold">12%</span>
          </div>
          <div className="h-6 bg-emerald-500 rounded text-slate-950 font-bold text-[8px] flex items-center justify-center uppercase tracking-wider">
            Agregar Vehículo
          </div>
        </div>
      </div>

      {/* Info details */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-sm tracking-wide">De Prompt a Interfaz Web</h3>
        <ul className="slides-premium-list text-xs space-y-2">
          <li><strong>Generación Instantánea</strong>: Introducimos el prompt de NotebookLM en Stitch para ver la interfaz interactiva.</li>
          <li><strong>Iteración Conversacional</strong>: Modificamos el diseño pidiéndole cambios estéticos (por ejemplo: "Pon el botón verde").</li>
          <li><strong>Exportación Directa</strong>: El código JSX y CSS está listo para pasarse al editor.</li>
        </ul>
      </div>
    </div>
  </div>
);

// Slide 6: Paso 3 - Antigravity (MCP / Export)
export const DemoSlide = () => (
  <div className="flex flex-col justify-between h-full">
    <SlideHeader subtitle="05 / PASO 3: CÓDIGO & LÓGICA" title=" Antigravity: Integración del Diseño" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1 my-auto">
      {/* Description */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-sm tracking-wide">Conexión y Construcción del Código</h3>
        <ul className="slides-premium-list text-xs space-y-2">
          <li><strong>Integración Directa</strong>: Importamos los archivos JSX generados en Stitch a nuestro espacio local en Antigravity.</li>
          <li><strong>Uso del MCP (Model Context Protocol)</strong>: Conectamos Stitch directamente con Antigravity para leer los diseños sin descargas manuales.</li>
          <li><strong>Lógica y Base de Datos</strong>: Antigravity crea los endpoints, estados e interacciones lógicas detrás de la UI de Stitch.</li>
        </ul>
      </div>

      {/* Visual Terminal */}
      <div className="bg-[#030918]/80 border border-slate-800 rounded-2xl p-5 font-mono text-[10px] text-slate-300 space-y-2.5">
        <div className="flex justify-between items-center text-[8px] text-slate-500 border-b border-slate-850 pb-2 font-bold">
          <span>ANTIGRAVITY TERMINAL // STITCH-MCP</span>
          <span className="text-emerald-400 animate-pulse">ACTIVE</span>
        </div>
        <p className="text-slate-500">// Vinculando diseño de Stitch...</p>
        <p className="text-emerald-400 font-bold">$ antigravity mcp connect stitch --project-id=garage-ui</p>
        <p className="text-white">✓ Importando componente: <code>GarageDashboard.jsx</code></p>
        <p className="text-white">✓ Generando base de datos SQLite y handlers en backend</p>
        <p className="text-emerald-400 font-bold">✓ Código listo para producción.</p>
      </div>
    </div>
  </div>
);

// Slide 7: Paso 4 - Gemini (Generación de Assets y Logos)
export const FutureSlide = () => (
  <div className="flex flex-col justify-between h-full">
    <SlideHeader subtitle="06 / PASO 4: ASSETS & CREATIVIDAD" title=" Gemini: Generación de Identidad Visual" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1 my-auto">
      {/* Simulation Box */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-2xl p-5 flex flex-col justify-center items-center min-h-[220px] relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 border border-emerald-400/30 flex items-center justify-center text-slate-950 font-black text-2xl shadow-xl shadow-emerald-500/10 animate-pulse">
          GD
        </div>
        <span className="text-[9px] text-slate-400 mt-4 font-mono font-bold">Logo: Garaje Digital</span>
        <span className="text-[8px] text-slate-500 font-mono italic">Generado en 2.8s</span>
      </div>

      {/* Description details */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-sm tracking-wide">Creación de Recursos Multimedia</h3>
        <ul className="slides-premium-list text-xs space-y-2">
          <li><strong>Generación de Logotipo</strong>: Le pedimos a Gemini crear la imagen de marca de la app con el prompt adecuado.</li>
          <li><strong>Diseño de Assets e Iconos</strong>: Creamos imágenes representativas de coches y alertas para enriquecer las pantallas.</li>
          <li><strong>Integración en el Proyecto</strong>: Guardamos los assets autogenerados en la carpeta pública del código.</li>
        </ul>
      </div>
    </div>
  </div>
);

// Slide 8: Paso 5 - Railway (Despliegue y Git)
export const SkillsSlide = () => (
  <div className="flex flex-col justify-between h-full">
    <SlideHeader subtitle="07 / PASO 5: PRODUCCIÓN & DEPLOY" title=" Railway: Publicación Automatizada" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1 my-auto">
      {/* Detail list */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-sm tracking-wide">De local a la nube en segundos</h3>
        <ul className="slides-premium-list text-xs space-y-2">
          <li><strong>Git Push</strong>: Hacemos commit de todos los cambios de diseño y código al repositorio GitHub.</li>
          <li><strong>Despliegue en Railway</strong>: Conectamos Railway al repositorio. Cada push de Git inicia automáticamente la compilación.</li>
          <li><strong>Producción en Vivo</strong>: La aplicación se publica bajo una URL pública y segura (HTTPS) lista para usar.</li>
        </ul>
      </div>

      {/* Visual representation */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <GitBranch className="w-3.5 h-3.5" /> git push origin master
          </span>
          <span className="text-slate-500 font-bold font-mono">✓ Éxito</span>
        </div>
        
        {/* Railway Status representation */}
        <div className="p-3 bg-slate-950/70 border border-slate-900 rounded-xl space-y-2">
          <div className="flex justify-between text-[9px] font-mono text-slate-550">
            <span>RAILWAY DEPLOYMENT STATUS</span>
            <span className="text-emerald-400 font-bold">SUCCESSFUL</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
            <div className="bg-emerald-400 h-full rounded-full w-full"></div>
          </div>
          <p className="text-[10px] text-slate-400 font-mono text-center pt-1.5">
            URL: <span className="text-cyan-400 underline">https://garaje-digital.up.railway.app</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Slide 9: Cierre / Reflexión
export const ClosingSlide = () => (
  <div className="flex flex-col justify-center items-center h-full text-center px-4 max-w-4xl mx-auto relative">
    <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-6 block">
      08 / REFLEXIÓN FINAL
    </span>

    <div className="relative mb-8">
      <span className="absolute -top-14 -left-6 text-7xl text-slate-800/40 font-serif leading-none select-none">“</span>
      <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-normal relative z-10 px-4">
        La IA no elimina la creatividad humana.
        <span className="block mt-1 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
          La amplifica.
        </span>
      </h3>
    </div>

    <div className="w-12 h-[1px] bg-slate-800 mb-6"></div>

    <p className="text-sm md:text-base text-slate-400 font-medium italic leading-relaxed max-w-xl">
      "Antes necesitábamos saber programar para construir ideas. Hoy necesitamos ideas para decirle a la IA qué construir."
    </p>

    <div className="mt-12 text-[10px] text-slate-600 font-mono uppercase tracking-widest">
      ¡Gracias por su tiempo! // Henry Quintero
    </div>
  </div>
);
