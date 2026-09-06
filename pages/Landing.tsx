import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Layers,
  BookOpen,
  Package,
  Workflow,
  Puzzle,
  ShieldCheck,
  Database,
  GitBranch,
  Lock,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { IconType } from 'react-icons';
import {
  SiPython,
  SiGo,
  SiRust,
  SiTypescript,
  SiDotnet,
  SiJson,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { GTSValidator } from '../components/GTSValidator';
import { AnimatedHero } from '../components/AnimatedHero';
import { FragmentationDemo } from '../components/FragmentationDemo';
import { PipelineFlow } from '../components/PipelineFlow';
import { GtsIdentifierDiagram } from '../components/GtsIdentifierDiagram';
import {
  GtsIdentifierFormat,
  GtsIdentifierFormatOption2,
} from '../components/GtsIdentifierOptions';

interface EcosystemProject {
  name: string;
  description: string;
  href: string;
  Icon: IconType;
  color: string;
}

const VSCODE_SCREENSHOTS = [
  {
    src: '/images/vscode/gts-kit-01.png',
    alt: 'GTS Kit extension overview in Visual Studio Code',
    label: 'Extension overview',
  },
  {
    src: '/images/vscode/gts-kit-02.png',
    alt: 'GTS type schema validation in Visual Studio Code',
    label: 'Schema validation',
  },
  {
    src: '/images/vscode/gts-kit-03.png',
    alt: 'GTS identifier assistance in Visual Studio Code',
    label: 'Identifier assistance',
  },
  {
    src: '/images/vscode/gts-kit-04.png',
    alt: 'GTS schema explorer in Visual Studio Code',
    label: 'Schema explorer',
  },
  {
    src: '/images/vscode/gts-kit-05.png',
    alt: 'GTS diagnostics in Visual Studio Code',
    label: 'Editor diagnostics',
  },
] as const;

const ECOSYSTEM_PROJECTS: EcosystemProject[] = [
  {
    name: 'gts-spec',
    description: 'The official specification',
    href: 'https://github.com/GlobalTypeSystem/gts-spec',
    Icon: SiJson,
    color: '#0d9488',
  },
  {
    name: 'gts-cli',
    description: 'Validator and schema tooling',
    href: 'https://github.com/GlobalTypeSystem/gts-cli',
    Icon: Terminal as unknown as IconType,
    color: '#0d9488',
  },
  {
    name: 'gts-ts',
    description: 'TypeScript bindings and validation utilities',
    href: 'https://github.com/GlobalTypeSystem/gts-ts',
    Icon: SiTypescript,
    color: '#3178c6',
  },
  {
    name: 'gts-python',
    description: 'Typed Python bindings',
    href: 'https://github.com/GlobalTypeSystem/gts-python',
    Icon: SiPython,
    color: '#3776ab',
  },
  {
    name: 'gts-go',
    description: 'Go type system implementation',
    href: 'https://github.com/GlobalTypeSystem/gts-go',
    Icon: SiGo,
    color: '#00add8',
  },
  {
    name: 'gts-rust',
    description: 'Rust binding layer',
    href: 'https://github.com/GlobalTypeSystem/gts-rust',
    Icon: SiRust,
    color: '#dea584',
  },
  {
    name: 'gts-dotnet',
    description: '.NET bindings and tooling',
    href: 'https://github.com/GlobalTypeSystem/gts-dotnet',
    Icon: SiDotnet,
    color: '#512bd4',
  },
  {
    name: 'gts-kit',
    description: 'VS Code plugins and visual schema explorer',
    href: 'https://github.com/GlobalTypeSystem/gts-kit',
    Icon: VscVscode,
    color: '#007acc',
  },
];

export const Landing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [activeVsCodeScreenshot, setActiveVsCodeScreenshot] = useState(0);
  const [isVsCodeGalleryOpen, setIsVsCodeGalleryOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-slate-950 overflow-hidden'>
      <main className='flex-1'>
        {/* Hero Section - ABOUT */}
        <section
          id='about'
          className='relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 min-h-[90vh] flex items-center'
        >
          <AnimatedHero />
          <div
            className={`container relative z-10 flex max-w-[64rem] flex-col items-center gap-6 text-center mx-auto px-4 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className='rounded-2xl bg-slate-100 dark:bg-slate-900 px-4 py-1.5 text-sm font-medium text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 animate-fadeIn flex items-center gap-2'>
              <Sparkles size={14} className='text-brand-500' />
              Draft Version 0.13 is now available
            </div>
            <h1 className='font-sans text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl animate-slideUp stagger-1'>
              Global Type System <br className='hidden sm:inline' />
            </h1>
            <p className='max-w-[42rem] leading-normal text-slate-600 dark:text-slate-400 sm:text-xl sm:leading-8 animate-slideUp stagger-2'>
              Human-readable, versioned identifiers and metadata conventions for
              data schemas and instances across teams, vendors, and runtimes.
            </p>
            <div className='space-x-4 animate-slideUp stagger-3'>
              <Link
                to='/docs/introduction'
                className='inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 h-11 px-8 bg-brand-600 text-white hover:bg-brand-700 hover:scale-105 hover:shadow-xl shadow-lg shadow-brand-500/20 animate-glow'
              >
                Read the Spec
                <ArrowRight size={16} className='ml-2' />
              </Link>
              <a
                href='https://github.com/GlobalTypeSystem'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 h-11 px-8 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 hover:scale-105 text-slate-900 dark:text-slate-100'
              >
                View on GitHub
              </a>
            </div>
            <p className='text-sm text-slate-500 dark:text-slate-400 italic mt-4 animate-fadeIn stagger-4'>
              Built for CTOs, architects, and engineering leaders.<br />
              Language-agnostic and compatible with JSON Schema, YAML, and TypeSpec.
            </p>
          </div>
        </section>

        {/* WHAT IS GTS - Overview */}
        <section
          id='what-is-gts'
          className='container space-y-6 py-8 md:py-12 lg:py-24 mx-auto px-4 border-t border-slate-100 dark:border-slate-900'
        >
          <div className='mx-auto max-w-6xl text-center'>
            <h2 className='text-3xl font-bold mb-4 text-slate-900 dark:text-white animate-slideUp'>
              What is GTS?
            </h2>
          </div>

          {/* Sub-section 1b: GTS identifiers (option 2) */}
          <div className='mx-auto max-w-6xl mt-14'>
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-3 animate-slideUp'>
              1. GTS identifiers format
            </h3>
            <p className='text-slate-600 dark:text-slate-400 animate-slideUp stagger-1'>
              GTS provides a human-readable naming convention for data types
              (schemas) and instances (objects). Every named segment includes
              four tokens: <strong>vendor</strong>, <strong>package</strong>,{' '}
              <strong>namespace</strong>, and a{' '}
              <strong>type or instance name</strong>.
            </p>

            <GtsIdentifierFormatOption2 />
          </div>

          {/* Sub-section 2: reference & inheritance diagram */}
          <div className='mx-auto max-w-6xl mt-16'>
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-3 animate-slideUp'>
              2. Data types inheritance
            </h3>
            <p className='text-slate-600 dark:text-slate-400 mb-2 animate-slideUp stagger-1'>
              GTS expresses <strong>type inheritance</strong> by chaining
              identifiers with the{' '}
              <code className='font-mono text-sm text-brand-600 dark:text-brand-400'>
                ~
              </code>{' '}
              separator: a derived type inherits from the base on its left, and
              each link must stay compatible with its predecessor. The same
              mechanism <strong>links an object instance to its type</strong>,
              or chains through several <strong>derived types</strong>.
            </p>

            <div className='mb-3 space-y-2'>
              <div className='rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-3'>
                <p className='text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5'>
                  Inheritance format
                </p>
                <div className='flex flex-wrap items-center gap-1 font-mono text-xs sm:text-sm'>
                  <span className='rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-1 text-slate-500 dark:text-slate-400'>
                    gts.
                  </span>
                  <span className='rounded-md border border-sky-400/70 dark:border-sky-500/70 bg-sky-50 dark:bg-sky-950/40 px-2 py-1 text-sky-700 dark:text-blue-300'>
                    base_type
                  </span>
                  <span className='text-slate-400'>~</span>
                  <span className='rounded-md border border-blue-400/70 dark:border-sky-500/70 bg-blue-50 dark:bg-blue-950/40 px-2 py-1 text-blue-700 dark:text-blue-300'>
                    derived_type
                  </span>
                  <span className='text-slate-400'>~</span>
                  <span className='text-slate-500 dark:text-slate-400'>
                    (trailing <code className='font-mono'>~</code> ⇒ a Type)
                  </span>
                </div>
                <div className='mt-2 flex flex-wrap items-center gap-1 font-mono text-xs sm:text-sm'>
                  <span className='rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-1 text-slate-500 dark:text-slate-400'>
                    gts.
                  </span>
                  <span className='rounded-md border border-sky-400/70 dark:border-sky-500/70 bg-sky-50 dark:bg-sky-950/40 px-2 py-1 text-sky-700 dark:text-blue-300'>
                    base_type
                  </span>
                  <span className='text-slate-400'>~</span>
                  <span className='rounded-md border border-blue-400/70 dark:border-sky-500/70 bg-blue-50 dark:bg-blue-950/40 px-2 py-1 text-blue-700 dark:text-blue-300'>
                    derived_type
                  </span>
                  <span className='text-slate-400'>~</span>
                  <span className='rounded-md border border-emerald-400/70 dark:border-emerald-500/70 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 text-emerald-700 dark:text-emerald-300'>
                    instance
                  </span>
                  <span className='text-slate-500 dark:text-slate-400'>
                    (no trailing <code className='font-mono'>~</code> ⇒ an
                    Instance)
                  </span>
                </div>
              </div>
            </div>

            <p className='text-slate-600 dark:text-slate-400 mb-1 animate-slideUp stagger-1'>
              In JSON Schema, a derived type commonly references its base with{' '}
              <code className='font-mono text-sm text-blue-600 dark:text-blue-400'>
                allOf
              </code>{' '}
              /{' '}
              <code className='font-mono text-sm text-blue-600 dark:text-blue-400'>
                $ref
              </code>
              . This is recommended but not required: the chained{' '}
              <code className='font-mono text-sm text-blue-600 dark:text-blue-400'>
                $id
              </code>{' '}
              establishes the derivation relationship. The highlighted boxes below
              are GTS identifiers; the arrows show how they reference and inherit.
            </p>
            <GtsIdentifierDiagram />
          </div>
        </section>

        {/* WHY GTS - Feature Grid */}
        <section
          id='why-gts'
          className='container space-y-6 py-8 md:py-12 lg:py-24 mx-auto px-4 border-t border-slate-100 dark:border-slate-900'
        >
          <h2 className='text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white animate-slideUp'>
            Why teams choose GTS
          </h2>
          <div className='mx-auto grid justify-center gap-6 sm:grid-cols-2 max-w-6xl lg:grid-cols-3'>
            {/* 1. Human-readable identifiers */}
            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-brand-500/50 animate-scaleIn stagger-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <BookOpen size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  Human-readable identifiers
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Every identifier encodes vendor, package, namespace, type, and
                  version — instantly comprehensible in logs, traces, and
                  debugging sessions without lookup tables.
                </p>
              </div>
            </div>

            {/* 2. JSON Schema / YAML / TypeSpec compatible */}
            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-sky-500/50 animate-scaleIn stagger-2'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <ShieldCheck size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  JSON Schema / YAML / TypeSpec compatible
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  GTS Type Schemas are standard JSON Schema documents with{' '}
                  <code className='text-blue-500 dark:text-blue-400'>
                    x-gts-*
                  </code>{' '}
                  extensions. Standard JSON Schema tooling can process the schema
                  body, while GTS-aware tooling enforces the additional registry
                  rules. YAML and TypeSpec sources may compile to the canonical form.
                </p>
              </div>
            </div>

            {/* 3. Versioned identifiers */}
            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-purple-500/50 animate-scaleIn stagger-3'>
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <GitBranch size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  Versioned identifiers
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Major and optional minor versions are part of the identifier.
                  Automated compatibility checks (backward, forward, full)
                  enforce safe evolution — add fields, register derived types,
                  and deploy independently.
                </p>
              </div>
            </div>

            {/* 4. Cross-system unique identifiers */}
            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-emerald-500/50 animate-scaleIn stagger-4'>
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Puzzle size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  Cross-system unique identifiers
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  The vendor-qualified structure prevents naming collisions
                  across teams, services, and third-party integrations. UUID v5
                  derivation provides stable, fixed-length keys when needed.
                </p>
              </div>
            </div>

            {/* 5. API data types extension */}
            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-orange-500/50 animate-scaleIn stagger-5'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Database size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  API data types extension
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Derive compatible types from platform base schemas. Store base
                  fields in indexed columns and vendor extensions in JSON/JSONB
                  — no DDL migrations, full API compatibility preserved.
                </p>
              </div>
            </div>

            {/* 6. Granular access control */}
            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-pink-500/50 animate-scaleIn stagger-6'>
              <div className='absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Lock size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  Granular access control
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Build RBAC/ABAC policies with wildcard patterns like{' '}
                  <code className='text-pink-500 dark:text-pink-400'>
                    gts.vendor.pkg.*
                  </code>
                  . Authorize entire type families or filter by attribute
                  predicates — no explicit allowlists to maintain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Scenarios Carousel Section */}
        <section
          id='use-cases'
          className='space-y-6 py-16 md:py-24 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/30'
        >
          <div className='max-w-6xl mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white'>
                Where GTS fits best
              </h2>
              <p className='text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8'>
                GTS delivers the most value when type ownership crosses team,
                vendor, and runtime boundaries. Three domains where typed
                contracts matter most:
              </p>
            </div>

            {/* Carousel Container */}
            <div className='relative'>
              {/* Card Navigation Dots */}
              <div className='flex justify-center gap-2 mb-8'>
                <button
                  onClick={() => setActiveCard(0)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === 0
                      ? 'bg-blue-500'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                  aria-label='View Integration & Platform Ecosystems card'
                />
                <button
                  onClick={() => setActiveCard(1)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === 1
                      ? 'bg-purple-500'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                  aria-label='View AI Harness Contracts card'
                />
                <button
                  onClick={() => setActiveCard(2)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === 2
                      ? 'bg-emerald-500'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                  aria-label='View Data Systems card'
                />
              </div>
              {/* Cards Stack */}
              <div
                className='relative min-h-0 perspective-1000 touch-pan-x mb-16 lg:h-[420px]'
                onTouchStart={(e) => {
                  const touchStart = e.touches[0].clientX;
                  const handleTouchEnd = (endEvent: TouchEvent) => {
                    const touchEnd = endEvent.changedTouches[0].clientX;
                    const diff = touchStart - touchEnd;

                    if (Math.abs(diff) > 50) {
                      // Minimum swipe distance
                      if (diff > 0 && activeCard < 2) {
                        setActiveCard(activeCard + 1); // Swipe left - next card
                      } else if (diff < 0 && activeCard > 0) {
                        setActiveCard(activeCard - 1); // Swipe right - previous card
                      }
                    }

                    document.removeEventListener('touchend', handleTouchEnd);
                  };

                  document.addEventListener('touchend', handleTouchEnd);
                }}
              >
                {/* Card 1 - Integration & Platform Ecosystems (merged) */}
                <div
                  className={`${
                    activeCard === 0
                      ? 'relative lg:absolute lg:inset-0 lg:w-full z-20 lg:scale-105 lg:-translate-y-2 rotate-0'
                      : 'hidden lg:block lg:absolute lg:inset-0 lg:w-full z-10 rotate-0 hover:z-25 hover:scale-105 hover:rotate-0 hover:translate-x-0 hover:translate-y-0'
                  } transition-all duration-700 ease-in-out transform`}
                >
                  <div
                    className='h-auto lg:h-full p-6 md:p-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
                    onClick={() => setActiveCard(0)}
                  >
                    <div className='flex flex-col h-auto lg:h-full'>
                      <div className='flex items-center gap-4 mb-6'>
                        <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-100'>
                          <Workflow size={28} />
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                            Integration & Platform Ecosystems
                          </h3>
                          <p className='text-sm text-blue-600 dark:text-blue-400 font-medium'>
                            Multi-vendor APIs, plugins, and extensible control
                            planes
                          </p>
                        </div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-slate-700 dark:text-slate-200 leading-relaxed text-base mb-6'>
                          Platforms that integrate partner APIs, third-party
                          plugins, and internal services need contracts that
                          remain verifiable and portable across every boundary.
                        </p>
                        <div className='space-y-4'>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Vendor-qualified namespaces
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>
                                Every extension gets a globally unique,
                                human-readable home — no naming collisions
                                across partners
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Granular access control
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>
                                Implement type-based or object-name ABAC with
                                wildcard patterns — authorize entire families
                                without explicit allowlists
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Hybrid storage patterns
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>
                                Index base-type fields in columns, store vendor
                                extensions in JSON/JSONB — no DDL migrations per
                                plugin
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - AI Harness Contracts */}
                <div
                  className={`${
                    activeCard === 1
                      ? 'relative lg:absolute lg:inset-0 lg:w-full z-20 lg:scale-105 lg:-translate-y-2 rotate-0'
                      : 'hidden lg:block lg:absolute lg:inset-0 lg:w-full z-15 rotate-[5deg] hover:z-25 hover:scale-105 hover:rotate-0 hover:translate-x-0 hover:translate-y-0'
                  } transition-all duration-700 ease-in-out transform`}
                >
                  <div
                    className='h-auto lg:h-full p-6 md:p-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
                    onClick={() => setActiveCard(1)}
                  >
                    <div className='flex flex-col h-auto lg:h-full'>
                      <div className='flex items-center gap-4 mb-6'>
                        <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-100'>
                          <Sparkles size={28} />
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                            AI Harness Contracts
                          </h3>
                          <p className='text-sm text-purple-600 dark:text-purple-400 font-medium'>
                            MCP tools, model configs, prompts, and agent
                            artifacts
                          </p>
                        </div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-slate-700 dark:text-slate-200 leading-relaxed text-base mb-6'>
                          AI systems juggle tool declarations, model parameters,
                          prompt templates, and configuration objects. Typed
                          contracts keep them discoverable, versionable, and
                          interoperable.
                        </p>
                        <div className='space-y-4'>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                MCP tools, prompts, and configs
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>
                                Define tool input/output contracts, prompt
                                templates, and agent configs as versioned GTS
                                types; validate at runtime and evolve safely
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Custom UI elements in chat
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>
                                Let LLMs render rich UI widgets directly in the
                                conversation by returning JSON objects compliant
                                with pre-defined widget schemas
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Multi-vendor agent orchestration
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>
                                Namespace artifacts by vendor/package; authorize
                                tool families with wildcard policies
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Data Systems */}
                <div
                  className={`${
                    activeCard === 2
                      ? 'relative lg:absolute lg:inset-0 lg:w-full z-20 lg:scale-105 lg:-translate-y-2 rotate-0'
                      : 'hidden lg:block lg:absolute lg:inset-0 lg:w-full z-5 rotate-[5deg] hover:z-25 hover:scale-105 hover:rotate-0 hover:translate-x-0 hover:translate-y-0'
                  } transition-all duration-700 ease-in-out transform`}
                >
                  <div
                    className='h-auto lg:h-full p-6 md:p-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
                    onClick={() => setActiveCard(2)}
                  >
                    <div className='flex flex-col h-auto lg:h-full'>
                      <div className='flex items-center gap-4 mb-6'>
                        <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-100'>
                          <Database size={28} />
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                            Data Systems
                          </h3>
                          <p className='text-sm text-emerald-600 dark:text-emerald-400 font-medium'>
                            Events, audit logs, ETL definitions, and schema
                            catalogs
                          </p>
                        </div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-slate-700 dark:text-slate-200 leading-relaxed text-base mb-6'>
                          Events, audit records, and data pipeline definitions
                          outlive individual services. Typed identifiers keep
                          their meaning intact from ingestion through analysis.
                        </p>
                        <div className='space-y-4'>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Event and audit log schemas
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>
                                Carry an explicit, versioned type identity with
                                each event; validate structure at ingestion and
                                replay
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                ETL and pipeline definitions
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>
                                Define transformation contracts as GTS types;
                                enforce compatibility between pipeline stages
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Schema catalog and governance
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-400 mt-1'>
                                Register warehouse/lake schemas in a GTS
                                registry; evolve versions without breaking
                                downstream consumers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className='mt-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='flex gap-2'>
                  <button
                    onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
                    disabled={activeCard === 0}
                    className='px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm'
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveCard(Math.min(2, activeCard + 1))}
                    disabled={activeCard === 2}
                    className='px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm'
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRY GTS - Interactive Validator Section */}
        <section
          id='try-gts'
          className='py-16 md:py-24 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/30'
        >
          <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white'>
                Try GTS now
              </h2>
              <p className='text-slate-600 dark:text-slate-400 text-lg'>
                See real-time validation against the definitive GTS system
                rules. Enter or modify any GTS identifier below
              </p>
            </div>
            <GTSValidator />
          </div>
        </section>

        {/* ECOSYSTEM - Tools & Ecosystem Section */}
        <section
          id='ecosystem'
          className='container space-y-6 py-6 md:py-9 lg:py-[4.5rem] mx-auto px-4 border-t border-slate-100 dark:border-slate-900'
        >
          <h2 className='text-3xl font-bold text-center mb-9 text-slate-900 dark:text-white'>
            The GTS ecosystem
          </h2>
          <p className='mx-auto mb-8 max-w-3xl text-center text-sm text-slate-500 dark:text-slate-400'>
            These are related projects and tooling links, not normative capabilities
            of the GTS v0.13 specification. Availability and feature support should
            be verified in each project.
          </p>
          <div className='max-w-6xl mx-auto grid gap-4 md:grid-cols-2'>
            {ECOSYSTEM_PROJECTS.map(
              ({ name, description, href, Icon, color }) => (
                <a
                  key={name}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-start gap-4 p-4 border-l-4 border-brand-600 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer'
                >
                  <div className='mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700'>
                    <Icon size={22} color={color} aria-hidden='true' />
                  </div>
                  <div>
                    <strong className='text-brand-600 dark:text-brand-400'>
                      {name}
                    </strong>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>
                      {description}
                    </p>
                  </div>
                </a>
              )
            )}
          </div>
          <div
            id='vscode-plugins'
            className='max-w-6xl mx-auto mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6'
          >
            <div className='flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-4'>
              <div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                  VS Code plugins
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>
                  Editor plugins for Visual Studio Code and Windsurf, published
                  under the gts-kit extension family.
                </p>
              </div>
              <p className='text-sm text-slate-500 dark:text-slate-400'>
                Install from your preferred marketplace.
              </p>
            </div>
            <div className='grid gap-3 md:grid-cols-2'>
              <a
                href='https://marketplace.visualstudio.com/items?itemName=GlobalTypeSystem.gts-kit'
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-between gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
              >
                <div>
                  <strong className='block text-slate-900 dark:text-white'>
                    Visual Studio Code Marketplace
                  </strong>
                  <span className='text-sm text-slate-600 dark:text-slate-400'>
                    GlobalTypeSystem.gts-kit
                  </span>
                </div>
                <ArrowRight size={16} className='text-slate-400' />
              </a>
              <a
                href='https://marketplace.windsurf.com/extension/GlobalTypeSystem/gts-kit'
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-between gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
              >
                <div>
                  <strong className='block text-slate-900 dark:text-white'>
                    Windsurf Marketplace
                  </strong>
                  <span className='text-sm text-slate-600 dark:text-slate-400'>
                    GlobalTypeSystem/gts-kit
                  </span>
                </div>
                <ArrowRight size={16} className='text-slate-400' />
              </a>
            </div>
            <div className='mt-8'>
              <h4 className='text-lg font-bold text-slate-900 dark:text-white'>
                See GTS Kit in action
              </h4>
              <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>
                Select a screenshot to explore the extension in detail.
              </p>
              <div className='mt-4 grid grid-cols-5 gap-2'>
                {VSCODE_SCREENSHOTS.map((screenshot, index) => (
                  <button
                    key={screenshot.src}
                    onClick={() => {
                      setActiveVsCodeScreenshot(index);
                      setIsVsCodeGalleryOpen(true);
                    }}
                    className='group relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100 text-left shadow-sm transition hover:border-brand-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:focus:ring-offset-slate-900'
                    aria-label={`Open ${screenshot.label} preview`}
                  >
                    <span className='flex h-full items-center justify-center px-2 text-center text-xs text-slate-500 dark:text-slate-400'>
                      {screenshot.label}
                    </span>
                    <img
                      src={screenshot.src}
                      alt=''
                      className='absolute inset-0 h-full w-full object-cover'
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {isVsCodeGalleryOpen && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm'
            onClick={() => setIsVsCodeGalleryOpen(false)}
          >
            <div
              role='dialog'
              aria-modal='true'
              aria-label='VS Code screenshot gallery'
              className='flex h-[80vh] w-[80vw] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-white shadow-2xl dark:bg-slate-900'
              onClick={(event) => event.stopPropagation()}
            >
              <div className='flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700'>
                <div>
                  <p className='font-semibold text-slate-900 dark:text-white'>
                    {VSCODE_SCREENSHOTS[activeVsCodeScreenshot].label}
                  </p>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    {activeVsCodeScreenshot + 1} of {VSCODE_SCREENSHOTS.length}
                  </p>
                </div>
                <button
                  onClick={() => setIsVsCodeGalleryOpen(false)}
                  className='rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  aria-label='Close VS Code screenshot gallery'
                >
                  Close ×
                </button>
              </div>
              <div className='relative flex min-h-0 flex-1 items-center justify-center bg-slate-100 p-4 dark:bg-slate-950'>
                <div className='flex aspect-video w-full max-h-full items-center justify-center px-6 text-center text-slate-500 dark:text-slate-400'>
                  Add {VSCODE_SCREENSHOTS[activeVsCodeScreenshot].src} to view
                  this screenshot.
                </div>
                <img
                  key={VSCODE_SCREENSHOTS[activeVsCodeScreenshot].src}
                  src={VSCODE_SCREENSHOTS[activeVsCodeScreenshot].src}
                  alt={VSCODE_SCREENSHOTS[activeVsCodeScreenshot].alt}
                  className='absolute inset-0 h-full w-full object-contain'
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className='flex items-center justify-between border-t border-slate-200 px-4 py-3 dark:border-slate-700'>
                <button
                  onClick={() =>
                    setActiveVsCodeScreenshot((current) =>
                      current === 0
                        ? VSCODE_SCREENSHOTS.length - 1
                        : current - 1
                    )
                  }
                  className='rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800'
                >
                  ← Previous
                </button>
                <div
                  className='flex gap-2'
                  aria-label='VS Code screenshot navigation'
                >
                  {VSCODE_SCREENSHOTS.map((screenshot, index) => (
                    <button
                      key={screenshot.src}
                      onClick={() => setActiveVsCodeScreenshot(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        activeVsCodeScreenshot === index
                          ? 'bg-brand-600'
                          : 'bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500'
                      }`}
                      aria-label={`View ${screenshot.label}`}
                      aria-current={activeVsCodeScreenshot === index}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setActiveVsCodeScreenshot((current) =>
                      current === VSCODE_SCREENSHOTS.length - 1
                        ? 0
                        : current + 1
                    )
                  }
                  className='rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800'
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* How It Works Section — temporarily commented out */}
        {false && (
          <section className='space-y-6 py-16 md:py-24 border-t border-slate-100 dark:border-slate-900'>
            <div className='max-w-6xl mx-auto text-center mb-12 px-4'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white'>
                A unified pipeline for all your types
              </h2>
              <p className='text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto'>
                From schema definition to production code in four simple steps
              </p>
            </div>
            <div className='max-w-6xl mx-auto px-4'>
              <PipelineFlow />
            </div>
          </section>
        )}

        {/* What GTS connects */}
        <section className='py-16 md:py-24 border-t border-slate-100 dark:border-slate-900'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white animate-slideUp'>
              One type system for every contract
            </h2>
            <p className='text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto text-lg animate-slideUp stagger-1'>
              GTS introduces a{' '}
              <a
                href='https://globaltypesystem.org/#/docs/introduction'
                target='_blank'
                rel='noreferrer'
                className='font-semibold text-brand-600 dark:text-brand-400 hover:underline'
              >
                single, universal type system
              </a>{' '}
              shared across all systems -- allowing you to define contracts,
              build integrations, and maintain a global registry of typed
              objects (e.g. a graph store) with cross-vendor type safety and
              schema evolution built in.
            </p>

            <div className='animate-slideUp stagger-2'>
              <FragmentationDemo />
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className='space-y-6 py-8 md:py-12 lg:py-24 border-t border-slate-100 dark:border-slate-900'>
          <div className='max-w-6xl mx-auto text-center px-4'>
            <h2 className='text-3xl font-bold mb-4 text-slate-900 dark:text-white'>
              Open. Transparent. Community-driven.
            </h2>
            <p className='text-slate-600 dark:text-slate-400 mb-8'>
              GTS is fully open-source and governed by the community.
              Contributors, companies, and platform builders collaborate on
              shaping the future of global type interoperability.
            </p>
            <a
              href='https://github.com/GlobalTypeSystem'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors h-11 px-8 bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20'
            >
              Join the community
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
