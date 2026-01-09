import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Box,
  Shield,
  Zap,
  Layers,
  BookOpen,
  Package,
  Workflow,
  Code,
  Sparkles,
} from 'lucide-react';
import { GTSValidator } from '../components/GTSValidator';
import { AnimatedHero } from '../components/AnimatedHero';
import { FragmentationDemo } from '../components/FragmentationDemo';
import { PipelineFlow } from '../components/PipelineFlow';

export const Landing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

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
              Draft Version 0.5 is now available
            </div>
            <h1 className='font-sans text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl animate-slideUp stagger-1'>
              A Universal Language <br className='hidden sm:inline' />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-600'>
                for Data Types
              </span>
            </h1>
            <p className='max-w-[42rem] leading-normal text-slate-600 dark:text-slate-300 sm:text-xl sm:leading-8 animate-slideUp stagger-2'>
              One type definition. Every language. True interoperability.
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
              Define once. Reuse everywhere. Python, Go, Rust, TypeScript and
              more.
            </p>
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
          <div className='mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3'>
            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-brand-500/50 animate-scaleIn stagger-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <BookOpen size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  One source of truth
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Define types once, use everywhere.
                </p>
              </div>
            </div>

            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-500/50 animate-scaleIn stagger-2'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Code size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  Multi-language support
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Automatic bindings for Python, Go, Rust, TypeScript.
                </p>
              </div>
            </div>

            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-purple-500/50 animate-scaleIn stagger-3'>
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Box size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  Human-readable schemas
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Simple JSON-based format, no binary serialization.
                </p>
              </div>
            </div>

            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-emerald-500/50 animate-scaleIn stagger-4'>
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Layers size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  Hybrid storage
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Store common fields in SQL columns and extensions in JSONB. No
                  schema migrations needed.
                </p>
              </div>
            </div>

            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-orange-500/50 animate-scaleIn stagger-5'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Zap size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  Versioning & schema evolution
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Built-in semantic versioning with backward and forward
                  compatibility.
                </p>
              </div>
            </div>

            <div className='group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-pink-500/50 animate-scaleIn stagger-6'>
              <div className='absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-100 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Shield size={20} />
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                  Granular access control
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Define policies using wildcards for fine-grained ABAC without
                  managing explicit lists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRY GTS - Interactive Validator Section */}
        <section id='try-gts' className='py-16 md:py-24 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/30'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white'>
                Try GTS now
              </h2>
              <p className='text-slate-600 dark:text-slate-400 text-lg'>
                See real-time validation against the definitive GTS system rules.
                Enter or modify any GTS identifier below
              </p>
            </div>
            <GTSValidator />
          </div>
        </section>

        {/* ECOSYSTEM - Tools & Ecosystem Section */}
        <section
          id='ecosystem'
          className='container space-y-6 py-8 md:py-12 lg:py-24 mx-auto px-4 border-t border-slate-100 dark:border-slate-900'
        >
          <h2 className='text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white'>
            The GTS ecosystem
          </h2>
          <div className='max-w-3xl mx-auto grid gap-4 md:grid-cols-2'>
            <div className='p-4 border-l-4 border-brand-600 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg'>
              <strong className='text-brand-600 dark:text-brand-400'>
                <a
                  href='https://github.com/GlobalTypeSystem/gts-spec'
                  target='_blank'
                >
                  gts-spec
                </a>
              </strong>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                The official specification
              </p>
            </div>
            <div className='p-4 border-l-4 border-brand-600 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg'>
              <strong className='text-brand-600 dark:text-brand-400'>
                <a
                  href='https://github.com/GlobalTypeSystem/gts-cli'
                  target='_blank'
                >
                  gts-cli
                </a>
              </strong>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Validator and schema tooling
              </p>
            </div>
            <div className='p-4 border-l-4 border-brand-600 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg'>
              <strong className='text-brand-600 dark:text-brand-400'>
                <a
                  href='https://github.com/GlobalTypeSystem/gts-python'
                  target='_blank'
                >
                  gts-python
                </a>
              </strong>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Typed Python bindings
              </p>
            </div>
            <div className='p-4 border-l-4 border-brand-600 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg'>
              <strong className='text-brand-600 dark:text-brand-400'>
                <a
                  href='https://github.com/GlobalTypeSystem/gts-go'
                  target='_blank'
                >
                  gts-go
                </a>
              </strong>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Go type system implementation
              </p>
            </div>
            <div className='p-4 border-l-4 border-brand-600 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg'>
              <strong className='text-brand-600 dark:text-brand-400'>
                <a
                  href='https://github.com/GlobalTypeSystem/gts-rust'
                  target='_blank'
                >
                  gts-rust
                </a>
              </strong>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Rust binding layer
              </p>
            </div>
            <div className='p-4 border-l-4 border-brand-600 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg'>
              <strong className='text-brand-600 dark:text-brand-400'>
                <a
                  href='https://github.com/GlobalTypeSystem/gts-kit'
                  target='_blank'
                >
                  gts-kit
                </a>
              </strong>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Visual schema explorer
              </p>
            </div>
          </div>
          <div className='text-center mt-8'>
            <a
              href='https://github.com/GlobalTypeSystem'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors h-11 px-8 bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20'
            >
              Explore on GitHub
            </a>
          </div>
        </section>

        {/* The Problem Section - MOVED AFTER MAIN 4 */}
        <section className='space-y-6 py-16 md:py-24 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/30'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white animate-slideUp'>
              Type systems are fragmented across the industry
            </h2>
            <p className='text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto text-lg animate-slideUp stagger-1'>
              Each programming language has its own incompatible type system.
              Every service recreates data models from scratch. API schemas
              constantly diverge.
            </p>

            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Interactive Demo */}
              <div className='order-2 lg:order-1'>
                <FragmentationDemo />
              </div>

              {/* Problem Description */}
              <div className='order-1 lg:order-2 space-y-6'>
                <div className='animate-slideUp stagger-2'>
                  <h3 className='text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2'>
                    <span className='text-red-500'>⚠️</span>
                    This fragmentation produces:
                  </h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start gap-3 text-slate-700 dark:text-slate-300 p-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 transition-all hover:border-red-500/50 hover:shadow-md'>
                      <span className='text-red-500 font-bold text-lg'>•</span>
                      <div>
                        <strong className='text-slate-900 dark:text-white'>
                          Endless Duplication
                        </strong>
                        <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>
                          Same schemas recreated in every language
                        </p>
                      </div>
                    </li>
                    <li className='flex items-start gap-3 text-slate-700 dark:text-slate-300 p-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 transition-all hover:border-orange-500/50 hover:shadow-md'>
                      <span className='text-orange-500 font-bold text-lg'>
                        •
                      </span>
                      <div>
                        <strong className='text-slate-900 dark:text-white'>
                          Integration Friction
                        </strong>
                        <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>
                          Constant manual mapping between systems
                        </p>
                      </div>
                    </li>
                    <li className='flex items-start gap-3 text-slate-700 dark:text-slate-300 p-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 transition-all hover:border-yellow-500/50 hover:shadow-md'>
                      <span className='text-yellow-500 font-bold text-lg'>
                        •
                      </span>
                      <div>
                        <strong className='text-slate-900 dark:text-white'>
                          Schema Drift
                        </strong>
                        <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>
                          Changes in one place break everything
                        </p>
                      </div>
                    </li>
                    <li className='flex items-start gap-3 text-slate-700 dark:text-slate-300 p-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 transition-all hover:border-purple-500/50 hover:shadow-md'>
                      <span className='text-purple-500 font-bold text-lg'>
                        •
                      </span>
                      <div>
                        <strong className='text-slate-900 dark:text-white'>
                          Inconsistent Data Contracts
                        </strong>
                        <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>
                          Different interpretations across teams
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className='p-6 rounded-xl bg-gradient-to-br from-brand-500/10 to-blue-500/10 border border-brand-500/20 animate-slideUp stagger-3'>
                  <div className='flex items-start gap-3'>
                    <Sparkles
                      className='text-brand-500 flex-shrink-0 mt-1'
                      size={20}
                    />
                    <div>
                      <h4 className='font-bold text-slate-900 dark:text-white mb-2'>
                        The GTS solution
                      </h4>
                      <p className='text-slate-700 dark:text-slate-300 text-sm leading-relaxed'>
                        GTS eliminates fragmentation by introducing a{' '}
                        <strong className='text-brand-600 dark:text-brand-400'>
                          single, universal type system
                        </strong>{' '}
                        shared across all platforms. One definition, infinite
                        compatibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className='space-y-6 py-16 md:py-24 border-t border-slate-100 dark:border-slate-900'>
          <div className='text-center mb-12 px-4'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white'>
              A unified pipeline for all your types
            </h2>
            <p className='text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto'>
              From schema definition to production code in four simple steps
            </p>
          </div>
          <div className='px-4'>
            <PipelineFlow />
          </div>
        </section>

        {/* Business Scenarios Carousel Section */}
        <section className='space-y-6 py-16 md:py-24 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/30'>
          <div className='max-w-4xl mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white'>
                Ideal for modern organizations
              </h2>
              <p className='text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8'>
                Designed for teams building complex, interconnected systems
                where type safety and consistency are critical.
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
                  aria-label='View Distributed Systems card'
                />
                <button
                  onClick={() => setActiveCard(1)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === 1
                      ? 'bg-purple-500'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                  aria-label='View Extensible Platforms card'
                />
                <button
                  onClick={() => setActiveCard(2)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === 2
                      ? 'bg-emerald-500'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                  aria-label='View Data-Intensive Systems card'
                />
              </div>
              {/* Cards Stack */}
              <div
                className='relative h-[520px] md:h-[380px] perspective-1000 touch-pan-x mb-16'
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
                {/* Card 1 - Distributed Systems */}
                <div
                  className={`absolute inset-0 w-full transition-all duration-700 ease-in-out transform ${
                    activeCard === 0
                      ? 'z-20 scale-105 -translate-y-2 rotate-0'
                      : 'z-10 rotate-0 hover:z-25 hover:scale-105 hover:rotate-0 hover:translate-x-0 hover:translate-y-0'
                  }`}
                >
                  <div
                    className='h-full p-6 md:p-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
                    onClick={() => setActiveCard(0)}
                  >
                    <div className='flex flex-col h-full'>
                      <div className='flex items-center gap-4 mb-6'>
                        <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-100'>
                          <Workflow size={28} />
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                            Distributed Systems
                          </h3>
                          <p className='text-sm text-blue-600 dark:text-blue-400 font-medium'>
                            Cross-service type/schema governance
                          </p>
                        </div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-slate-700 dark:text-slate-200 leading-relaxed text-base mb-6'>
                          Modern distributed architectures span multiple
                          languages, runtimes, and independently deployed
                          services, making consistent data contracts extremely
                          difficult to maintain.
                        </p>
                        <div className='space-y-4'>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Universal type identifiers
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-300 mt-1'>
                                Globally unique, versioned identifiers for every
                                type and instance
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Schema governance
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-300 mt-1'>
                                Services evolve independently without drifting
                                from shared definitions
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Unified validation
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-300 mt-1'>
                                Consistent access control across microservices,
                                databases, and integrations
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Platform Extensions */}
                <div
                  className={`absolute inset-0 w-full transition-all duration-700 ease-in-out transform ${
                    activeCard === 1
                      ? 'z-20 scale-105 -translate-y-2 rotate-0'
                      : 'z-15 rotate-[5deg] hover:z-25 hover:scale-105 hover:rotate-0 hover:translate-x-0 hover:translate-y-0'
                  }`}
                >
                  <div
                    className='h-full p-6 md:p-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
                    onClick={() => setActiveCard(1)}
                  >
                    <div className='flex flex-col h-full'>
                      <div className='flex items-center gap-4 mb-6'>
                        <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-100'>
                          <Package size={28} />
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                            Extensible Platforms
                          </h3>
                          <p className='text-sm text-purple-600 dark:text-purple-400 font-medium'>
                            Third-party apps, plugins, & vendors
                          </p>
                        </div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-slate-700 dark:text-slate-200 leading-relaxed text-base mb-6'>
                          Platforms supporting external apps face challenges
                          with naming collisions, custom schema extensions, and
                          contract evolution.
                        </p>
                        <div className='space-y-4'>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Vendor namespaces
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-300 mt-1'>
                                Each vendor gets predictable, structured type
                                identifiers without conflicts
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Controlled extensions
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-300 mt-1'>
                                Official schemas with controlled inheritance and
                                extension capabilities
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Rich ecosystems
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-300 mt-1'>
                                Security, compatibility, and governance while
                                enabling third-party capabilities
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Data Intensive */}
                <div
                  className={`absolute inset-0 w-full transition-all duration-700 ease-in-out transform ${
                    activeCard === 2
                      ? 'z-20 scale-105 -translate-y-2 rotate-0'
                      : 'z-5 rotate-[5deg] hover:z-25 hover:scale-105 hover:rotate-0 hover:translate-x-0 hover:translate-y-0'
                  }`}
                >
                  <div
                    className='h-full p-6 md:p-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
                    onClick={() => setActiveCard(2)}
                  >
                    <div className='flex flex-col h-full'>
                      <div className='flex items-center gap-4 mb-6'>
                        <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-100'>
                          <Layers size={28} />
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                            Data-Intensive Systems
                          </h3>
                          <p className='text-sm text-emerald-600 dark:text-emerald-400 font-medium'>
                            Event streams, ML pipelines, data lakes
                          </p>
                        </div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-slate-700 dark:text-slate-200 leading-relaxed text-base mb-6'>
                          Systems processing large volumes of events, logs,
                          configuration, and ML metadata rely on consistent and
                          interpretable data types.
                        </p>
                        <div className='space-y-4'>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Stable identifiers
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-300 mt-1'>
                                Every schema has a stable identifier across all
                                data pipelines
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Automatic routing
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-300 mt-1'>
                                Validation, partitioning, and governance of
                                evolving data structures
                              </p>
                            </div>
                          </div>
                          <div className='flex items-start gap-3 text-slate-800 dark:text-slate-200'>
                            <span className='w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2'></span>
                            <div>
                              <span className='text-sm font-medium'>
                                Long-term compatibility
                              </span>
                              <p className='text-xs text-slate-600 dark:text-slate-300 mt-1'>
                                Analytics, stream processors, and ML pipelines
                                understand data as schemas evolve
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

        {/* Community Section */}
        <section className='space-y-6 py-8 md:py-12 lg:py-24 border-t border-slate-100 dark:border-slate-900'>
          <div className='max-w-3xl mx-auto text-center px-4'>
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