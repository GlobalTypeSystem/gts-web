import React, { useState } from 'react';
import { FileCode, CheckCircle, Code2, Rocket } from 'lucide-react';

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
  const [clickedStage, setClickedStage] = useState<number | null>(null);

  const handleStageClick = (stageId: number) => {
    if (clickedStage === stageId) {
      setClickedStage(null);
    } else {
      setClickedStage(stageId);
    }
  };

  const isStageActive = (stageId: number) => {
    return (
      clickedStage === stageId ||
      (clickedStage === null && activeStage === stageId)
    );
  };

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
      description: 'Run a GTS validator',
      detail:
        'Ensure schema correctness and compatibility with existing types using built-in validation rules',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      icon: <Code2 size={24} />,
      title: 'Generate artifacts',
      description: 'Schema and API output',
      detail:
        'Generate canonical JSON Schema and OpenAPI artifacts from supported source formats such as TypeSpec',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 4,
      icon: <Rocket size={24} />,
      title: 'Use in apps',
      description: 'Validate and integrate',
      detail:
        'Use the canonical schemas and identifiers in applications with validation and registry resolution',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <div className='max-w-5xl mx-auto'>
      {/* Pipeline Visualization */}
      <div className='relative'>
        {/* Connection line */}
        <div
          className='absolute h-1 bg-slate-200 dark:bg-slate-800 hidden md:block'
          style={{
            top: '3.25rem',
            left: '-50vw',
            right: '-50vw',
            width: '200vw',
          }}
        >
          <div
            className='absolute top-0 h-1 w-32 bg-gradient-to-r from-transparent via-brand-500 to-transparent animate-flow-line'
            style={{ left: '-8rem' }}
          ></div>
        </div>

        {/* Stages */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative'>
          {stages.map((stage, index) => (
            <div key={stage.id} className='relative'>
              {/* Stage card */}
              <div
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isStageActive(stage.id) ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setActiveStage(stage.id)}
                onMouseLeave={() => setActiveStage(null)}
                onClick={() => handleStageClick(stage.id)}
              >
                {/* Glow effect */}
                {isStageActive(stage.id) && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-20 blur-xl rounded-2xl`}
                  ></div>
                )}

                {/* Card */}
                <div
                  className={`relative bg-white dark:bg-slate-900 rounded-2xl border-2 p-6 transition-all duration-300 ${
                    isStageActive(stage.id)
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

                  {/* Detail (shows on hover or click) */}
                  <div
                    className={`text-xs text-slate-500 dark:text-slate-500 transition-all duration-300 overflow-hidden ${
                      isStageActive(stage.id)
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
                        isStageActive(stage.id)
                          ? 'bg-emerald-500 animate-pulse'
                          : 'bg-slate-300 dark:bg-slate-700'
                      }`}
                    ></div>
                    <span className='text-xs text-slate-400'>
                      {isStageActive(stage.id) ? 'Active' : 'Ready'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Example output preview */}
      {(clickedStage || activeStage) && (
        <div className='mt-12 p-6 bg-slate-900 rounded-xl border border-slate-800 animate-fadeIn'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='flex gap-1.5'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
            <span className='text-xs text-slate-400 font-mono ml-2'>
              Stage {clickedStage || activeStage}:{' '}
              {stages[(clickedStage || activeStage)! - 1].title}
            </span>
          </div>
          <pre className='text-sm text-slate-300 font-mono overflow-x-auto'>
            {(clickedStage || activeStage) === 1 && (
              <code>{`# user.v1~.schema.json
{
  "$id": "gts://gts.mycompany.users.api.user.v1~",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "name": { "type": "string" }
  },
  "required": ["id", "email"]
}`}</code>
            )}
            {(clickedStage || activeStage) === 2 && (
              <code>{`$ gts validate user.v1~.schema.json

✓ $id valid: gts://gts.mycompany.users.api.user.v1~
✓ JSON Schema draft-07 validation passed
✓ No compatibility issues with base types
✓ Ready for registry publication`}</code>
            )}
            {(clickedStage || activeStage) === 3 && (
              <code>{`TypeSpec source
      │
      ├── canonical JSON Schema
      └── OpenAPI artifact

GTS identifiers and x-gts-* extensions preserved.
Artifacts are ready for registry publication.`}</code>
            )}
            {(clickedStage || activeStage) === 4 && (
              <code>{`// Application integration
const user = {
  id: "usr_123",
  email: "dev@example.com",
  name: "Alex Smith"
};

// Resolve the GTS Type Identifier through the registry.
// Validate the instance against the resolved Type Schema.
// Apply application-specific processing separately.`}</code>
            )}
          </pre>
        </div>
      )}
    </div>
  );
};
