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
  Lightbulb
} from 'lucide-react';

// Helper component for slide headers
const SlideHeader = ({ subtitle, title }) => (
  <div className="mb-6">
    <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-1">
      {subtitle}
    </span>
    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
      {title}
    </h2>
    <div className="w-12 h-1 bg-emerald-500 rounded-full mt-2"></div>
  </div>
);

// Slide 1: Title / Cover
export const TitleSlide = () => (
  <div className="flex flex-col justify-between h-full py-6 text-center px-4 relative overflow-hidden">
    {/* Floating accent elements */}
    <div className="absolute top-10 left-10 border border-emerald-500/10 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-400/80 bg-emerald-500/5">
      v1.0.0 // 2026
    </div>

    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
        <Sparkles className="w-3.5 h-3.5" />
        CONFERENCIA INNOVACIÓN
      </div>
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight mb-8">
        Programar en la Era de la IA:
        <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-clip-text text-transparent text-shadow-md">
          Cómo crear aplicaciones 10 veces más rápido
        </span>
      </h1>
      
      <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-8"></div>
    </div>

    {/* Metadata Footer similar to Kar-Go deck */}
    <div className="flex justify-between items-center w-full max-w-3xl mx-auto border-t border-white/5 pt-6 text-left">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[9px] text-slate-500 uppercase font-mono tracking-wider font-bold">Duración</p>
          <p className="text-xs font-bold text-white">Charla de 45 min</p>
        </div>
      </div>

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

// Slide 2: Introducción
export const IntroSlide = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="flex flex-col justify-between h-full">
      <SlideHeader subtitle="01 / INTRODUCCIÓN" title="El mundo de la programación cambió" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
        {/* Left side: Question Card */}
        <div className="lg:col-span-5 bg-[#051129]/65 border border-blue-500/20 rounded-2xl p-6 lg:p-7 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
          
          <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Pregunta Inicial
          </h3>
          <p className="text-xl font-bold text-white mb-6 leading-snug">
            ¿Cuántos creen que la IA reemplazará a los programadores?
          </p>
          
          <button 
            onClick={() => setShowAnswer(!showAnswer)}
            className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg transition-all duration-300 flex items-center gap-1.5 text-xs tracking-wider cursor-pointer uppercase shadow-lg shadow-emerald-500/20"
          >
            Ver la Realidad <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {showAnswer && (
            <div className="mt-5 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-xs font-semibold leading-relaxed animate-fadeIn">
              "La IA no está reemplazando a los programadores. Está reemplazando tareas repetitivas. Los que usan IA están reemplazando a los que no la usan."
            </div>
          )}
        </div>

        {/* Right side: Before vs Now */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Antes */}
            <div className="bg-[#100609]/60 border border-red-500/15 rounded-xl p-5">
              <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2 tracking-widest font-mono">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> ANTES
              </h4>
              <ul className="space-y-3 text-xs text-slate-400 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Investigar horas en Google.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Leer extensas documentaciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Escribir boilerplate manual.</span>
                </li>
              </ul>
            </div>

            {/* Ahora */}
            <div className="bg-[#031515]/60 border border-emerald-500/15 rounded-xl p-5 shadow-lg shadow-emerald-500/5">
              <h4 className="text-emerald-400 font-bold text-sm mb-3 flex items-center gap-2 tracking-widest font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> AHORA
              </h4>
              <ul className="space-y-3 text-xs text-emerald-300 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span>Conversación interactiva con IA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span>Generación automática base.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span>Corrección de bugs al instante.</span>
                </li>
              </ul>
            </div>
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
    <div className="flex flex-col justify-between h-full">
      <SlideHeader subtitle="02 / CONCEPTO CLAVE" title="¿Qué es realmente la IA?" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center flex-1 my-auto">
        {/* Left Side: Language prediction */}
        <div className="bg-[#051129]/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between h-56">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] uppercase tracking-wider mb-2">
              <MessageSquare className="w-3.5 h-3.5" /> Predicción de Texto
            </div>
            <p className="text-slate-400 text-xs mb-3">
              Dada una frase, predice la continuación estadística más probable:
            </p>
            <div className="p-3.5 bg-slate-950/80 rounded-lg font-sans text-base border border-slate-800/80">
              <span className="text-white">{inputText}</span>
              <span className="text-emerald-400 font-semibold animate-pulse"> ...hoy?</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setInputText('Hola, ¿cómo estás')}
              className="text-[10px] bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 px-2.5 py-1.5 rounded cursor-pointer transition-all"
            >
              Ejemplo 1
            </button>
            <button 
              onClick={() => setInputText('El clima está frío y parece que va a')}
              className="text-[10px] bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 px-2.5 py-1.5 rounded cursor-pointer transition-all"
            >
              Ejemplo 2
            </button>
          </div>
        </div>

        {/* Right Side: Code prediction */}
        <div className="bg-[#051129]/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between h-56">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-mono text-[10px] uppercase tracking-wider mb-2">
              <Code className="w-3.5 h-3.5" /> Predicción de Código
            </div>
            <p className="text-slate-400 text-xs mb-3">
              Lo mismo ocurre con el código. El modelo autocompleta la sintaxis lógica:
            </p>
            <div className="p-3.5 bg-slate-950/80 rounded-lg font-mono text-xs border border-slate-800/80 overflow-x-auto whitespace-pre">
              <span className="text-slate-300">{codeText}</span>
              <span className="text-emerald-400 font-semibold block ml-4 animate-pulse">
                {codeText.includes('calculateTotal') 
                  ? 'return items.reduce((acc, item) => acc + item.price, 0);\n}' 
                  : '  const res = await fetch(url);\n  return res.json();\n}'}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCodeText('function calculateTotal(items) {')}
              className="text-[10px] bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 px-2.5 py-1.5 rounded cursor-pointer transition-all"
            >
              Suma de Carrito
            </button>
            <button 
              onClick={() => setCodeText('async function fetchApi(url) {')}
              className="text-[10px] bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 px-2.5 py-1.5 rounded cursor-pointer transition-all"
            >
              Consulta API
            </button>
          </div>
        </div>
      </div>

      <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl text-center text-xs text-slate-400 font-medium">
        La IA actual no "piensa". Es una sofisticada calculadora de probabilidad entrenada con repositorios públicos.
      </div>
    </div>
  );
};

// Slide 4: Cómo se programa hoy con IA
export const FlowSlide = () => {
  const [activeStep, setActiveStep] = useState(null);

  const traditional = [
    { title: 'Idea', desc: 'Planteamiento básico.' },
    { title: 'Diseño', desc: 'Semanas maquetando interfaces.' },
    { title: 'Código', desc: 'Escribir toda la sintaxis manual.' },
    { title: 'Errores', desc: 'Búsqueda eterna en foros.' },
    { title: 'Ajustes', desc: 'Refactorizaciones complejas.' },
    { title: 'Lanzamiento', desc: 'Despliegue final manual.' }
  ];

  const modern = [
    { title: 'Idea', desc: 'Estructurar el prompt inicial.' },
    { title: 'IA Co-pilot', desc: 'Genera backend, frontend e interfaces.' },
    { title: 'Prototipo', desc: 'Vista funcional instantánea.' },
    { title: 'Ajustes', desc: 'Iteración guiada por chat.' },
    { title: 'Lanzamiento', desc: 'Despliegue ágil optimizado.' }
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <SlideHeader subtitle="03 / WORKFLOWS" title="El cambio radical en la programación" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-1 my-auto">
        {/* Traditional Flow */}
        <div className="lg:col-span-5 bg-slate-950/40 border border-red-500/10 rounded-2xl p-5">
          <h3 className="text-red-400 font-bold text-sm mb-4 text-center tracking-widest font-mono">FLUJO TRADICIONAL</h3>
          <div className="flex flex-col gap-2">
            {traditional.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep({ type: 'trad', idx })}
                onMouseLeave={() => setActiveStep(null)}
                className={`p-2.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                  activeStep?.type === 'trad' && activeStep?.idx === idx 
                    ? 'bg-red-950/20 border-red-500/35 scale-[1.01]' 
                    : 'bg-[#030918]/60 border-slate-900'
                }`}
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">{idx + 1}. {step.title}</span>
                  {activeStep?.type === 'trad' && activeStep?.idx === idx && (
                    <span className="text-[10px] text-slate-400 font-medium">{step.desc}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Connector */}
        <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shadow-md">
            <ArrowRightLeft className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Modern Flow */}
        <div className="lg:col-span-5 bg-[#051129]/50 border border-emerald-500/20 rounded-2xl p-5 shadow-lg shadow-emerald-500/5">
          <h3 className="text-emerald-400 font-bold text-sm mb-4 text-center tracking-widest font-mono">FLUJO MODERNO CON IA</h3>
          <div className="flex flex-col gap-2">
            {modern.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep({ type: 'mod', idx })}
                onMouseLeave={() => setActiveStep(null)}
                className={`p-2.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                  activeStep?.type === 'mod' && activeStep?.idx === idx 
                    ? 'bg-emerald-950/20 border-emerald-500/35 scale-[1.01]' 
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-emerald-300">{idx + 1}. {step.title}</span>
                  {activeStep?.type === 'mod' && activeStep?.idx === idx ? (
                    <span className="text-[10px] text-emerald-400 font-medium">{step.desc}</span>
                  ) : (
                    <Zap className="w-3.5 h-3.5 text-emerald-500/50" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 5: Herramientas actuales
export const ToolsGridSlide = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tools = [
    {
      name: 'ChatGPT',
      tagline: 'Asistente Universal',
      desc: 'Ideal para programar, explicar conceptos complejos, corregir errores de código y diseñar arquitectura inicial de software.',
      example: 'Ej: "Crea una pantalla Flutter para registrar vehículos y sus mantenimientos."',
      accent: 'emerald'
    },
    {
      name: 'Claude',
      tagline: 'Análisis de Contexto Gigante',
      desc: 'Excelente para proyectos grandes, lectura de repositorios enteros, refactorizaciones y lógica analítica compleja.',
      example: 'Ej: "Analiza este archivo de 2000 líneas y optimiza la lógica del algoritmo."',
      accent: 'orange'
    },
    {
      name: 'NotebookLM',
      tagline: 'Aliado para Estudiantes',
      desc: 'Sube tus PDFs, apuntes o libros enteros. Genera resúmenes interactivos, exámenes simulados e incluso audios con diálogos.',
      example: 'Ej: Sube el manual de React y pregúntale dudas en segundos.',
      accent: 'blue'
    },
    {
      name: 'Stitch / v0',
      tagline: 'Generador de UI Moderno',
      desc: 'Describe la interfaz web o móvil que deseas en lenguaje natural y genera el código UI en React o HTML de forma visual.',
      example: 'Ej: "Crea un dashboard cyber-dark con gráficos interactivos."',
      accent: 'purple'
    },
    {
      name: 'Antigravity',
      tagline: 'Desarrollo Autónomo Agente',
      desc: 'Generación autónoma y completa de aplicaciones a partir de instrucciones simples. Menos código manual, más dirección de alto nivel.',
      example: 'Ej: Prototipa y despliega una aplicación web en minutos.',
      accent: 'teal'
    },
    {
      name: 'GitHub Copilot',
      tagline: 'Socio de Editor Inteligente',
      desc: 'Compañero directo en el IDE. Predice e inserta líneas o funciones de código completas a medida que escribes en tiempo real.',
      example: 'Ej: Escribe el comentario de la función y presiona Tab.',
      accent: 'cyan'
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <SlideHeader subtitle="04 / ECOSISTEMA" title="Herramientas que debes conocer" />

      {/* Grid Layout of Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 my-auto">
        {tools.map((tool, idx) => (
          <div 
            key={idx}
            className="bg-[#051129]/40 border border-slate-800 hover:border-emerald-500/30 rounded-xl p-4 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
          >
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <h3 className="font-extrabold text-white text-base">{tool.name}</h3>
                <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  {tool.accent === 'teal' ? 'Agente' : 'Modelo'}
                </span>
              </div>
              <p className="text-[10px] text-emerald-400 font-semibold mb-2.5 uppercase tracking-wider">{tool.tagline}</p>
              <p className="text-slate-300 text-xs leading-relaxed mb-3">
                {tool.desc}
              </p>
            </div>
            
            <div className="border-t border-slate-850 pt-2.5 text-[10px] text-slate-500 font-mono italic">
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
      'Iniciando agente generativo Antigravity...',
      'Analizando prompt: "Citas Médicas en Flutter"',
      'Construyendo base de datos SQLite y esquemas...',
      'Generando código UI en Flutter (Appointments, Doctors)...',
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
    <div className="flex flex-col justify-between h-full">
      <SlideHeader subtitle="05 / LIVE DEMO" title="Demostración en vivo" />

      {/* Simulator Terminal Card */}
      <div className="bg-[#030918]/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between items-center gap-6 min-h-[280px] flex-1 my-auto relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500"></div>
        
        <div className="font-mono text-emerald-400 text-sm bg-slate-950 px-4 py-2.5 rounded-lg border border-slate-900 max-w-xl text-center">
          "Crea una aplicación Flutter para administrar citas médicas"
        </div>

        {logMessages.length > 0 ? (
          <div className="w-full max-w-lg bg-slate-950/90 rounded-xl p-4 text-left border border-slate-900 font-mono text-[11px] text-slate-300 space-y-1.5 h-36 overflow-y-auto slides-scrollbar">
            {logMessages.map((msg, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-emerald-500">{'>'}</span>
                <span>{msg}</span>
              </div>
            ))}
            {isRunning && <span className="inline-block w-2.5 h-4 bg-emerald-400 animate-pulse ml-1"></span>}
          </div>
        ) : (
          <p className="text-slate-400 text-xs max-w-md text-center leading-relaxed">
            [Espacio para que el presentador cambie de pantalla y muestre las herramientas en vivo]. Haz clic en el botón de abajo para ver una simulación.
          </p>
        )}

        <button 
          onClick={startDemo}
          disabled={isRunning}
          className={`px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer text-xs uppercase tracking-wider ${
            isRunning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 shadow-lg shadow-emerald-500/20'
          }`}
        >
          <Play className="w-4 h-4 fill-current" />
          Ejecutar Simulación
        </button>
      </div>
    </div>
  );
};

// Slide 7: Lo que viene en los próximos años
export const FutureSlide = () => (
  <div className="flex flex-col justify-between h-full">
    <SlideHeader subtitle="06 / TENDENCIAS" title="Lo que viene en los próximos años" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 my-auto">
      {/* Agents */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
        <div>
          <div className="w-9 h-9 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-3">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">Agentes IA Autónomos</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            No solo responden preguntas, actúan. Escriben código, arreglan compilaciones y despliegan por sí solos.
          </p>
        </div>
      </div>

      {/* Conv Dev */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
        <div>
          <div className="w-9 h-9 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-400 mb-3">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">Desarrollo Conversacional</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Menos teclear código de bajo nivel. Le darás instrucciones conversacionales de alto nivel a la IA.
          </p>
        </div>
      </div>

      {/* Teams */}
      <div className="bg-[#051129]/40 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
        <div>
          <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-3">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">Equipos Reducidos</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Un solo desarrollador asistido por IA podrá abarcar diseño, frontend, backend, base de datos y control de calidad.
          </p>
        </div>
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
      desc: 'El valor no está en memorizar APIs, sino en saber formular problemas exactos a los asistentes de inteligencia artificial.'
    },
    {
      num: '2',
      title: 'Pensamiento Crítico',
      desc: 'La IA alucina. Debes entender qué hace el código, validar la seguridad y garantizar que resuelva el problema original.'
    },
    {
      num: '3',
      title: 'Resolución de Problemas',
      desc: 'Las empresas pagan por solucionar retos de negocio, no por redactar líneas de código. Enfócate en el producto y el usuario.'
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <SlideHeader subtitle="07 / CONSEJOS" title="3 Habilidades para el futuro" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 my-auto">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-gradient-to-b from-[#051129]/50 to-[#020918]/50 border border-slate-850 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between shadow-md">
            <span className="absolute top-1.5 right-3.5 text-6xl font-black text-slate-800/20 font-mono -z-0">
              {skill.num}
            </span>
            <div className="z-10 mt-2">
              <h3 className="text-sm font-extrabold text-emerald-400 mb-2 uppercase tracking-wide">{skill.title}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
