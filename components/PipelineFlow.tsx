import React, { useState } from 'react';
import {
  FileCode,
  CheckCircle,
  Code2,
  Rocket,
  ChevronRight,
} from 'lucide-react';

interface PipelineStage {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  color: string;
}

export const PipelineFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [flowActive, setFlowActive] = useState(false);

  const stages: PipelineStage[] = [
    {
      id: 1,
      icon: <FileCode size={24} />,
      title: 'Define schema',
      description: 'Create GTS schema',
      detail:
        'Write your type definitions using the GTS format with vendor, package, namespace, and versioning',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      icon: <CheckCircle size={24} />,
      title: 'Validate',
      description: 'Run gts-cli validator',
      detail:
        'Ensure schema correctness and compatibility with existing types using built-in validation rules',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      icon: <Code2 size={24} />,
      title: 'Generate bindings',
      description: 'Multi-language output',
      detail:
        'Automatically generate type-safe bindings for Python, Go, Rust, TypeScript, and more',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 4,
      icon: <Rocket size={24} />,
      title: 'Use in apps',
      description: 'Production ready',
      detail:
        'Import generated types into your applications with full IDE support and type safety',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <div className='max-w-5xl mx-auto'>
      {/* Pipeline Visualization */}
      <div className='relative'>
        {/* Connection line */}
        <div className='absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 -translate-y-1/2 hidden md:block'>
          {flowActive && (
            <div className='absolute inset-0 bg-gradient-to-r from-brand-500 via-blue-500 to-emerald-500 animate-pulse'></div>
          )}
        </div>

        {/* Stages */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative'>
          {stages.map((stage, index) => (
            <div key={stage.id} className='relative'>
              {/* Stage card */}
              <div
                className={`relative group cursor-pointer transition-all duration-300 ${
                  activeStage === stage.id ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setActiveStage(stage.id)}
                onMouseLeave={() => setActiveStage(null)}
              >
                {/* Glow effect */}
                {activeStage === stage.id && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-20 blur-xl rounded-2xl`}
                  ></div>
                )}

                {/* Card */}
                <div
                  className={`relative bg-white dark:bg-slate-900 rounded-2xl border-2 p-6 transition-all duration-300 ${
                    activeStage === stage.id
                      ? 'border-transparent shadow-xl'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Stage number badge */}
                  <div
                    className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {stage.id}
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stage.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stage.icon}
                  </div>

                  {/* Content */}
                  <h3 className='font-bold text-slate-900 dark:text-white mb-2'>
                    {stage.title}
                  </h3>
                  <p className='text-sm text-slate-600 dark:text-slate-400 mb-3'>
                    {stage.description}
                  </p>

                  {/* Detail (shows on hover) */}
                  <div
                    className={`text-xs text-slate-500 dark:text-slate-500 transition-all duration-300 overflow-hidden ${
                      activeStage === stage.id
                        ? 'max-h-20 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    {stage.detail}
                  </div>

                  {/* Status indicator */}
                  <div className='mt-4 flex items-center gap-2'>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activeStage === stage.id
                          ? 'bg-emerald-500 animate-pulse'
                          : 'bg-slate-300 dark:bg-slate-700'
                      }`}
                    ></div>
                    <span className='text-xs text-slate-400'>
                      {activeStage === stage.id ? 'Active' : 'Ready'}
                    </span>
                  </div>
                </div>

                {/* Flow particles (only on active stage) */}
                {activeStage === stage.id && index < stages.length - 1 && (
                  <div className='hidden md:block absolute top-1/2 -right-8 -translate-y-1/2'>
                    <ChevronRight
                      className={`text-gradient-to-r ${stage.color} animate-pulse`}
                      size={32}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Example output preview */}
      {activeStage && (
        <div className='mt-12 p-6 bg-slate-900 rounded-xl border border-slate-800 animate-fadeIn'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='flex gap-1.5'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
            <span className='text-xs text-slate-400 font-mono ml-2'>
              Stage {activeStage}: {stages[activeStage - 1].title}
            </span>
          </div>
          <pre className='text-sm text-slate-300 font-mono overflow-x-auto'>
            {activeStage === 1 && (
              <code>{`# Define GTS Schema
gts.mycompany.users.api.user.v1~

{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "name": { "type": "string" }
  },
  "required": ["id", "email"]
}`}</code>
            )}
            {activeStage === 2 && (
              <code>{`$ gts validate schema.json

✓ Schema ID valid: gts.mycompany.users.api.user.v1~
✓ JSON Schema validation passed
✓ No compatibility issues found
✓ Ready for code generation`}</code>
            )}
            {activeStage === 3 && (
              <code>{`$ gts generate --lang=python,typescript,go

Generated:
  ✓ python/mycompany_users_api_user_v1.py
  ✓ typescript/mycompany_users_api_user_v1.ts
  ✓ go/mycompany_users_api_user_v1.go

All bindings generated successfully!`}</code>
            )}
            {activeStage === 4 && (
              <code>{`// TypeScript: Full IDE support & type safety
import { User } from './mycompany_users_api_user_v1';

const user: User = {
  id: "usr_123",
  email: "dev@example.com",
  name: "Alex Smith"
};

// ✓ Type-checked at compile time
// ✓ Autocomplete in IDE
// ✓ Consistent across all services`}</code>
            )}
          </pre>
        </div>
      )}
    </div>
  );
};
