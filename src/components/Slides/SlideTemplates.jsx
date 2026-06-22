import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Layers, 
  Cpu, 
  Code, 
  Brain, 
  Compass,
  MessageSquare, 
  ExternalLink,
  Zap,
  CheckCircle,
  Play
} from 'lucide-react';

// Slide 1: Title
export const TitleSlide = () => (
  <div className="flex flex-col justify-center items-center h-full text-center px-4 relative overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
    
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight mb-6 mt-12">
      Programar en la Era de la IA:
      <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-clip-text text-transparent text-glow">
        Cómo crear aplicaciones 10 veces más rápido
      </span>
    </h1>
    
    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-12"></div>
    
    <div className="text-sm text-slate-500 font-mono">
      Usa las flechas del teclado <span className="px-2 py-1 bg-slate-800 rounded text-slate-300">←</span> <span className="px-2 py-1 bg-slate-800 rounded text-slate-300">→</span> para navegar
    </div>
  </div>
);

// Slide 2: Introducción
export const IntroSlide = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center p-4">
      {/* Left side: Icebreaker */}
      <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 slides-glow">
        <h3 className="text-emerald-400 font-mono text-sm uppercase tracking-wider mb-2">Para Romper el Hielo</h3>
        <p className="text-2xl font-bold text-white mb-6">
          ¿Cuántos de ustedes creen que la IA va a reemplazar a los programadores?
        </p>
        <button 
          onClick={() => setShowAnswer(!showAnswer)}
          className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
        >
          Ver la Realidad <ArrowRight className="w-4 h-4" />
        </button>

        {showAnswer && (
          <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-lg font-medium animate-fadeIn">
            "La IA no va a reemplazar a los programadores. Pero los programadores que usan IA sí van a reemplazar a los que no la usan."
          </div>
        )}
      </div>

      {/* Right side: Points & Before/After */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <h2 className="text-3xl font-extrabold text-white">El Mundo Cambió</h2>
        
        {/* Core Points */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</span>
            <p className="text-slate-300 text-lg">La IA no reemplaza desarrolladores, elimina <strong>tareas repetitivas</strong>.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</span>
            <p className="text-slate-300 text-lg">El cuello de botella ya no es escribir la sintaxis, es <strong>diseñar la solución</strong>.</p>
          </div>
        </div>

        {/* Before / After Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="bg-slate-950 border border-red-500/10 rounded-xl p-5">
            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">ANTES</h4>
            <ul className="space-y-2 text-sm text-slate-400 list-disc pl-4">
              <li>Buscar horas y horas en Google / StackOverflow</li>
              <li>Leer extensas páginas de documentación</li>
              <li>Escribir manualmente cada línea de boilerplate</li>
            </ul>
          </div>
          <div className="bg-slate-950 border border-emerald-500/20 rounded-xl p-5">
            <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">AHORA</h4>
            <ul className="space-y-2 text-sm text-emerald-300 list-disc pl-4">
              <li>Conversación fluida y contextual con IA</li>
              <li>Generación automática de código base estructurado</li>
              <li>Detección y corrección de errores en segundos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 3: ¿Qué es realmente la IA?
export const ConceptSlide = () => {
  const [inputText, setInputText] = useState('Hola, ¿cómo estás');
  const [codeText, setCodeText] = useState('function calculateTotal(items) {');

  return (
    <div className="flex flex-col justify-center h-full max-w-5xl mx-auto p-4 gap-6">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">¿Qué es realmente la IA?</h2>
        <p className="text-slate-400 text-lg mt-2">
          La IA actual no "piensa" en el sentido humano. Es un modelo avanzado de <strong>predicción</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
        {/* Text Prediction Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-64">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase mb-3">
              <MessageSquare className="w-4 h-4" /> Predicción de Lenguaje
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Dada una secuencia de palabras, predice las siguientes más probables:
            </p>
            <div className="p-4 bg-slate-950 rounded-lg font-sans text-lg border border-slate-800">
              <span className="text-white">{inputText}</span>
              <span className="text-emerald-400 font-semibold animate-pulse"> ...hoy?</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setInputText('Hola, ¿cómo estás')}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded cursor-pointer"
            >
              Ejemplo 1
            </button>
            <button 
              onClick={() => setInputText('El día está nublado y parece que va a')}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded cursor-pointer"
            >
              Ejemplo 2
            </button>
          </div>
        </div>

        {/* Code Prediction Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-64">
          <div>
            <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase mb-3">
              <Code className="w-4 h-4" /> Predicción de Código
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Lo mismo ocurre con la programación. El modelo autocompleta la estructura lógica:
            </p>
            <div className="p-4 bg-slate-950 rounded-lg font-mono text-sm border border-slate-800 overflow-x-auto whitespace-pre">
              <span className="text-slate-400">{codeText}</span>
              <span className="text-teal-400 font-semibold block ml-4 animate-pulse">
                {codeText.includes('calculateTotal') 
                  ? 'return items.reduce((acc, item) => acc + item.price, 0);\n}' 
                  : '  const res = await fetch(url);\n  return res.json();\n}'}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCodeText('function calculateTotal(items) {')}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded cursor-pointer"
            >
              Suma de Carrito
            </button>
            <button 
              onClick={() => setCodeText('async function fetchApi(url) {')}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded cursor-pointer"
            >
              Llamada API
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 4: Cómo se programa hoy con IA
export const FlowSlide = () => {
  const [activeStep, setActiveStep] = useState(null);

  const traditional = [
    { title: 'Idea', desc: 'Concepto básico.' },
    { title: 'Diseño', desc: 'Semanas de wireframes y maquetas.' },
    { title: 'Código', desc: 'Escribir todo desde cero.' },
    { title: 'Errores', desc: 'Debugging tedioso y frustración.' },
    { title: 'Corrección', desc: 'Ajustes de código manuales.' },
    { title: 'Lanzamiento', desc: 'Despliegue final de la app.' }
  ];

  const modern = [
    { title: 'Idea', desc: 'Concepto y definición clara del prompt.' },
    { title: 'IA Co-pilot', desc: 'Genera estructura, backend y UI en segundos.' },
    { title: 'Prototipo', desc: 'Resultado interactivo inmediato listo para probar.' },
    { title: 'Ajustes', desc: 'Iteración conversacional con la IA.' },
    { title: 'Lanzamiento', desc: 'Despliegue rápido de la solución terminada.' }
  ];

  return (
    <div className="flex flex-col justify-center h-full max-w-5xl mx-auto p-4 gap-6">
      <div>
        <h2 className="text-3xl font-extrabold text-white text-center">El Cambio Radical en la Programación</h2>
        <p className="text-slate-400 text-center mt-2">
          De flujos secuenciales y lentos a iteraciones instantáneas e inteligentes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-2">
        {/* Traditional Flow */}
        <div className="bg-slate-900/40 border border-red-500/10 rounded-2xl p-6">
          <h3 className="text-red-400 font-bold text-lg mb-4 text-center">Flujo Tradicional</h3>
          <div className="flex flex-col gap-2">
            {traditional.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep({ type: 'trad', idx })}
                onMouseLeave={() => setActiveStep(null)}
                className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                  activeStep?.type === 'trad' && activeStep?.idx === idx 
                    ? 'bg-red-950/20 border-red-500/40 scale-[1.02]' 
                    : 'bg-slate-950/40 border-slate-800'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">{idx + 1}. {step.title}</span>
                  {activeStep?.type === 'trad' && activeStep?.idx === idx && (
                    <span className="text-xs text-slate-400 font-sans">{step.desc}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Flow */}
        <div className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl p-6 slides-glow">
          <h3 className="text-emerald-400 font-bold text-lg mb-4 text-center">Flujo Moderno con IA</h3>
          <div className="flex flex-col gap-2">
            {modern.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep({ type: 'mod', idx })}
                onMouseLeave={() => setActiveStep(null)}
                className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                  activeStep?.type === 'mod' && activeStep?.idx === idx 
                    ? 'bg-emerald-950/20 border-emerald-500/40 scale-[1.02]' 
                    : 'bg-slate-950/80 border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-emerald-300">{idx + 1}. {step.title}</span>
                  {activeStep?.type === 'mod' && activeStep?.idx === idx ? (
                    <span className="text-xs text-emerald-400 font-sans">{step.desc}</span>
                  ) : (
                    <Zap className="w-3.5 h-3.5 text-emerald-500/50" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-900/30 border border-slate-800 rounded-xl text-sm text-slate-400 text-center">
        <strong>Ejemplo Real:</strong> "Quiero una app para controlar el mantenimiento vehicular". La IA genera en minutos la base de datos, maquetación, lógica en Flutter/React, API e interfaz.
      </div>
    </div>
  );
};

// Slide 5: Herramientas actuales
export const ToolsGridSlide = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    {
      name: 'ChatGPT',
      tagline: 'El asistente universal',
      desc: 'Ideal para programar, explicar conceptos complicados, corregir errores de código y diseñar arquitecturas lógicas.',
      example: 'Ej: "Crea una pantalla Flutter para registrar vehículos y sus mantenimientos."',
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5'
    },
    {
      name: 'Claude',
      tagline: 'Contexto gigante y análisis',
      desc: 'Excelente para proyectos grandes, lectura de repositorios enteros, refactorización de código y lógica avanzada.',
      example: 'Ej: "Analiza este archivo de 2000 líneas y optimiza las consultas SQL."',
      accent: 'border-orange-500/30 text-orange-400 bg-orange-500/5'
    },
    {
      name: 'NotebookLM',
      tagline: 'Aliado de estudio y PDFs',
      desc: 'Sube tus PDFs, apuntes o libros enteros de programación. Te genera resúmenes interactivos, exámenes e incluso podcasts.',
      example: 'Ej: Sube el manual de React y pregúntale dudas en segundos.',
      accent: 'border-blue-500/30 text-blue-400 bg-blue-500/5'
    },
    {
      name: 'Stitch / v0',
      tagline: 'Generadores de UI',
      desc: 'Describe la interfaz web o móvil que deseas en lenguaje natural y genera el código UI en React, HTML o Vue de forma interactiva.',
      example: 'Ej: "Crea una pantalla de login de estética cyber-dark."',
      accent: 'border-purple-500/30 text-purple-400 bg-purple-500/5'
    },
    {
      name: 'Antigravity',
      tagline: 'El siguiente nivel de desarrollo',
      desc: 'Generación completa y autónoma de aplicaciones a partir de lenguaje natural. Menos código manual, más instrucciones de alto nivel.',
      example: 'Ej: Construye y despliega un backend completo autogenerado.',
      accent: 'border-teal-500/30 text-teal-400 bg-teal-500/5'
    },
    {
      name: 'GitHub Copilot',
      tagline: 'Autocompletado inteligente',
      desc: 'Tu compañero dentro del editor de código. Predice e inserta líneas de código o funciones enteras mientras escribes.',
      example: 'Ej: Escribe la cabecera de la función y presiona Tab.',
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5'
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full max-w-6xl mx-auto p-4 gap-6">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white">Herramientas que Debes Conocer</h2>
        <p className="text-slate-400 text-sm mt-1">
          Haz clic en cualquier tarjeta para profundizar en su utilidad principal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {tools.map((tool, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedTool(selectedTool === idx ? null : idx)}
            className={`border rounded-xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              selectedTool === idx 
                ? `${tool.accent} border-opacity-100 scale-[1.03] shadow-lg shadow-emerald-500/5` 
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-extrabold text-white text-lg">{tool.name}</h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {tool.name === 'Antigravity' ? 'Agentic' : 'Interactive'}
                </span>
              </div>
              <p className="text-xs text-emerald-400 font-semibold mb-3">{tool.tagline}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {tool.desc}
              </p>
            </div>
            
            <div className="border-t border-slate-800/60 pt-3 text-xs text-slate-400 font-mono italic">
              {tool.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Slide 6: Demostración en vivo
export const DemoSlide = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [logMessages, setLogMessages] = useState([]);

  const startDemo = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogMessages([]);
    
    const logs = [
      'Iniciando agente generativo...',
      'Analizando modelo "Citas Médicas"...',
      'Creando base de datos y esquemas SQLite...',
      'Generando componentes de UI en Flutter (CitasList, DoctorProfile)...',
      'Configurando navegación y gestor de estados (Bloc)...',
      '¡Aplicación lista! Compilación exitosa en 4.2 segundos.'
    ];

    logs.forEach((msg, idx) => {
      setTimeout(() => {
        setLogMessages(prev => [...prev, msg]);
        if (idx === logs.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 800);
    });
  };

  return (
    <div className="flex flex-col justify-center h-full max-w-4xl mx-auto p-4 gap-6 text-center">
      <div>
        <h2 className="text-4xl font-extrabold text-white tracking-tight">¡Demostración en Vivo!</h2>
        <p className="text-slate-400 mt-2">
          Mira el poder de la IA creando código base listo para producción.
        </p>
      </div>

      {/* Main Focus Area */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 my-4 flex flex-col justify-center items-center gap-6 min-h-[300px] relative overflow-hidden slides-glow">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500"></div>
        
        <div className="font-mono text-emerald-400 text-lg bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
          "Crea una aplicación Flutter para administrar citas médicas"
        </div>

        {logMessages.length > 0 ? (
          <div className="w-full max-w-lg bg-slate-950 rounded-xl p-4 text-left border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 h-36 overflow-y-auto">
            {logMessages.map((msg, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-emerald-500">{'>'}</span>
                <span>{msg}</span>
              </div>
            ))}
            {isRunning && <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1"></span>}
          </div>
        ) : (
          <p className="text-slate-300 max-w-md">
            Nota para el orador: Muestra cómo se generan pantallas, modelos y navegación en segundos usando tu IDE favorito.
          </p>
        )}

        <div className="flex gap-4">
          <button 
            onClick={startDemo}
            disabled={isRunning}
            className={`px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg ${
              isRunning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 shadow-emerald-500/10'
            }`}
          >
            <Play className="w-5 h-5 fill-current" />
            Simular Generación
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 7: Lo que viene en los próximos años
export const FutureSlide = () => (
  <div className="flex flex-col justify-center h-full max-w-4xl mx-auto p-4 gap-8">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">El Futuro del Desarrollo</h2>
      <p className="text-slate-400 mt-2">¿Hacia dónde va la industria en los próximos 3-5 años?</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
      {/* Agents */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
          <Cpu className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Agentes IA Autónomos</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Ya no solo autocompletan. Analizan errores, planean soluciones, escriben código en múltiples archivos y despliegan la aplicación por sí solos.
        </p>
      </div>

      {/* Conv Dev */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 mb-4">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Desarrollo Conversacional</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          En lugar de escribir sintaxis compleja como <code>Text('Hola')</code>, le pedirás verbalmente o por chat: <em>"Haz un botón elegante que abra el perfil del usuario"</em>.
        </p>
      </div>

      {/* Small teams */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
          <Layers className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Equipos Hiper-Eficientes</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          La figura del programador individual se expande. Un solo desarrollador con IA puede asumir roles de frontend, backend, QA y diseñador UX.
        </p>
      </div>
    </div>
  </div>
);

// Slide 8: Consejo para los estudiantes
export const SkillsSlide = () => {
  const skills = [
    {
      num: '1',
      title: 'Prompt Engineering',
      desc: 'El valor ya no radica en memorizar código de memoria, sino en saber formular instrucciones exactas y estructuradas a la IA para obtener la mejor arquitectura y calidad.'
    },
    {
      num: '2',
      title: 'Pensamiento Crítico',
      desc: 'La IA "alucina" y comete errores. La habilidad del futuro es auditar, validar y asegurar la seguridad del código generado para evitar fallos de producción.'
    },
    {
      num: '3',
      title: 'Resolución de Problemas',
      desc: 'Las empresas nunca contrataron a personas solo por teclear código, pagan por solucionar problemas de negocio. El enfoque debe estar en entender al usuario.'
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full max-w-5xl mx-auto p-4 gap-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">3 Habilidades para el Futuro</h2>
        <p className="text-slate-400 mt-2">Cómo prepararse para el mercado laboral del mañana</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
            <span className="absolute top-2 right-4 text-7xl font-extrabold text-slate-800/30 font-mono -z-0">
              {skill.num}
            </span>
            <div className="z-10">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">{skill.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Slide 9: Cierre
export const ClosingSlide = () => (
  <div className="flex flex-col justify-center items-center h-full text-center px-4 max-w-4xl mx-auto relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

    <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-wider mb-8">Reflexión Final</h2>

    <div className="relative mb-12">
      <span className="absolute -top-16 -left-8 text-9xl text-slate-800/40 font-serif leading-none select-none">“</span>
      <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-snug text-glow relative z-10 px-4">
        La IA no elimina la creatividad humana.
        <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
          La amplifica.
        </span>
      </h3>
    </div>

    <div className="w-16 h-0.5 bg-slate-800 mb-8"></div>

    <p className="text-lg md:text-xl text-slate-400 font-medium italic leading-relaxed max-w-2xl">
      "Antes necesitábamos saber programar para construir ideas. Hoy necesitamos ideas para decirle a la IA qué construir."
    </p>

    <div className="mt-16 text-sm text-slate-500 font-mono">
      ¡Muchas gracias!
    </div>
  </div>
);
