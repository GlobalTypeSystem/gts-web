import React from 'react';
import { Check } from 'lucide-react';
import { DocPageContent, SidebarSection } from '../types';
import { CodeBlock } from '../components/CodeBlock';

export const SIDEBAR_NAVIGATION: SidebarSection[] = [
  {
    title: 'Introduction',
    items: [
      { title: 'What is GTS?', path: '/docs/introduction' },
      { title: 'Motivation', path: '/docs/motivation' },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'Identifier Format', path: '/docs/identifier-format' },
      { title: 'Semantics & Capabilities', path: '/docs/semantics' },
      { title: 'Parsing & Validation', path: '/docs/parsing' },
    ],
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Version Compatibility', path: '/docs/compatibility' },
      { title: 'Access Control', path: '/docs/access-control' },
      { title: 'Query Language', path: '/docs/query-language' },
    ],
  },
  {
    title: 'Implementation',
    items: [
      { title: 'Typical Use Cases', path: '/docs/use-cases' },
      { title: 'Reference Implementation', path: '/docs/reference-impl' },
      { title: 'Best Practices', path: '/docs/best-practices' },
    ],
  },
  {
    title: 'Comparison & Roadmap',
    items: [
      { title: 'Comparison', path: '/docs/comparison' },
      { title: 'Roadmap', path: '/docs/roadmap' },
    ],
  },
];

export const DOCS_CONTENT: Record<string, DocPageContent> = {
  introduction: {
    id: 'introduction',
    title: 'Global Type System (GTS)',
    description:
      'A simple, human-readable, globally unique identifier and referencing system.',
    next: { title: 'Motivation', path: '/docs/motivation' },
    content: (
      <>
        <p className='lead text-xl text-slate-600 dark:text-slate-400 mb-8'>
          GTS is a specification-first, language-agnostic system designed for
          identifying data type definitions (like JSON Schemas) and data
          instances.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          The Format
        </h2>
        <p className='mb-4'>
          GTS identifiers are semantically meaningful strings following a
          specific pattern:
        </p>
        <CodeBlock
          code={`gts.<vendor>.<package>.<namespace>.<type>.v<MAJOR>[.<MINOR>]`}
          title='Canonical Format'
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Why GTS?
        </h2>
        <p className='mb-4'>
          Instead of opaque UUIDs or long URLs, GTS provides a structured way to
          identify:
        </p>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>API data types and typed payloads</li>
          <li>Event catalogs and stream topics</li>
          <li>Workflow categories and instances</li>
          <li>Policy objects (RBAC/ABAC)</li>
          <li>Database schemas and much more</li>
        </ul>

        <div className='bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900 rounded-lg p-6 my-8'>
          <h3 className='text-brand-800 dark:text-brand-300 font-bold mb-2'>
            Key Benefits
          </h3>
          <ul className='space-y-2 text-sm text-brand-900 dark:text-brand-100'>
            <li>
              ✓ <strong>Human-readable:</strong> Debugging logs becomes instant.
            </li>
            <li>
              ✓ <strong>Cross-vendor:</strong> Safe extension of platform types.
            </li>
            <li>
              ✓ <strong>Versioning:</strong> Built-in semantic versioning
              constraints.
            </li>
            <li>
              ✓ <strong>Hybrid Storage:</strong> No migration schema evolution.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  motivation: {
    id: 'motivation',
    title: 'Motivation',
    description:
      'Why existing identification methods fail modern distributed systems.',
    prev: { title: 'Introduction', path: '/docs/introduction' },
    next: { title: 'Identifier Format', path: '/docs/identifier-format' },
    content: (
      <>
        <p className='mb-6'>
          The proliferation of distributed systems, microservices, and
          event-driven architectures has created a significant challenge in
          maintaining data integrity, system interoperability, and type
          governance across organizational boundaries.
        </p>

        <h3 className='text-xl font-semibold mb-3 text-slate-900 dark:text-white'>
          1. Unifying Data Governance
        </h3>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Human- and Machine-Readable:</strong> GTS identifiers
          incorporate vendor, package, namespace, and version information
          directly. This makes them instantly comprehensible to developers and
          automated systems for logging and tracing.
        </p>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Vendor Agnostic:</strong> By supporting explicit vendor
          registration, GTS facilitates safe, cross-vendor data exchange while
          preventing naming collisions.
        </p>

        <h3 className='text-xl font-semibold mb-3 text-slate-900 dark:text-white'>
          2. Enforcing Type Safety
        </h3>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Inheritance and Conformance:</strong> The chained identifier
          system provides a robust mechanism for expressing type derivation.
          This is critical for ecosystems where third-parties must extend core
          types safely.
        </p>

        <h3 className='text-xl font-semibold mb-3 text-slate-900 dark:text-white'>
          3. Simplifying Policy
        </h3>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Granular Access Control:</strong> The structured nature
          enables wildcard matching policies (e.g.,{' '}
          <code>gts.myvendor.accounting.*</code>).
        </p>
      </>
    ),
  },
  'identifier-format': {
    id: 'identifier-format',
    title: 'Identifier Format',
    description: 'Structure, grammar, and chaining rules for GTS identifiers.',
    prev: { title: 'Motivation', path: '/docs/motivation' },
    next: { title: 'Semantics', path: '/docs/semantics' },
    content: (
      <>
        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Canonical Form
        </h2>
        <p className='mb-4'>
          A GTS identifier can represent a schema (type) or an instance
          (object).
        </p>

        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          <div>
            <h4 className='font-semibold mb-2'>Type Identifier (Schema)</h4>
            <p className='text-sm text-slate-500 mb-2'>Ends with a tilde (~)</p>
            <CodeBlock code='gts.<vendor>.<package>.<namespace>.<type>.v<MAJOR>[.<MINOR>]~' />
          </div>
          <div>
            <h4 className='font-semibold mb-2'>Instance Identifier (Object)</h4>
            <p className='text-sm text-slate-500 mb-2'>
              Does not end with a tilde
            </p>
            <CodeBlock code='gts.<vendor>.<package>.<namespace>.<type>.v<MAJOR>[.<MINOR>]' />
          </div>
        </div>

        <h3 className='text-xl font-semibold mb-4 text-slate-900 dark:text-white'>
          Components
        </h3>
        <ul className='space-y-4 border-l-2 border-slate-200 dark:border-slate-800 pl-4 ml-2'>
          <li>
            <span className='font-mono text-brand-600 dark:text-brand-400 font-bold'>
              vendor
            </span>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Origin of the schema. Useful for cross-vendor exchange.
            </p>
          </li>
          <li>
            <span className='font-mono text-brand-600 dark:text-brand-400 font-bold'>
              package
            </span>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Module, plugin, or application scope.
            </p>
          </li>
          <li>
            <span className='font-mono text-brand-600 dark:text-brand-400 font-bold'>
              namespace
            </span>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Category definition. Use <code>_</code> as a placeholder if not
              applicable.
            </p>
          </li>
          <li>
            <span className='font-mono text-brand-600 dark:text-brand-400 font-bold'>
              type
            </span>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              The specific object type.
            </p>
          </li>
        </ul>

        <h2 className='text-2xl font-bold mb-4 mt-12 text-slate-900 dark:text-white'>
          Chained Identifiers
        </h2>
        <p className='mb-4'>
          Multiple identifiers can be chained with <code>~</code> to express
          derivation (inheritance) and conformance.
        </p>
        <CodeBlock
          code='gts.<segment1>~<segment2>~<segment3>'
          title='Chaining Pattern'
        />

        <p className='mb-4'>
          <strong>Example:</strong> An instance conforming to a derived schema.
        </p>
        <CodeBlock
          code={`# Base type
gts.x.core.events.type.v1~

# Derived schema extending base
gts.x.core.events.type.v1~ven.app._.custom_event.v1~

# Instance conforming to derived schema
gts.x.core.events.topic.v1~ven.app._.custom_event_topic.v1.2`}
        />
      </>
    ),
  },
  semantics: {
    id: 'semantics',
    title: 'Semantics & Capabilities',
    description: 'Core operations, inheritance model, and hybrid storage.',
    prev: { title: 'Identifier Format', path: '/docs/identifier-format' },
    next: { title: 'Parsing', path: '/docs/parsing' },
    content: (
      <>
        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Core Operations
        </h2>
        <ol className='list-decimal pl-6 space-y-2 mb-8 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Global Identification:</strong> Uniquely identify data types
            and instances.
          </li>
          <li>
            <strong>Schema Resolution:</strong> Resolve to JSON Schema
            definitions or validate instances.
          </li>
          <li>
            <strong>Version Compatibility:</strong> Automatically determine if
            schemas are compatible.
          </li>
          <li>
            <strong>Access Control:</strong> Build policies using wildcard
            patterns.
          </li>
        </ol>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Inheritance & Hybrid Storage
        </h2>
        <p className='mb-4'>
          GTS types inheritance enables a powerful database design pattern
          combining structured storage for base fields with flexible JSON
          storage for extensions.
        </p>
        <p className='mb-4 text-slate-600 dark:text-slate-400 italic'>
          "Store base type fields in indexed columns for fast queries,
          vendor-specific extensions in JSON/JSONB—no schema migrations needed."
        </p>

        <CodeBlock
          language='sql'
          title='Hybrid Storage Example'
          code={`CREATE TABLE events (
    id VARCHAR(255) PRIMARY KEY,     -- Indexed for fast fetch
    type_id VARCHAR(255) NOT NULL,   -- Indexed for filtering
    occurred_at TIMESTAMP NOT NULL,  -- Indexed for time-range
    payload JSONB NOT NULL,          -- Vendor-specific extensions
    INDEX idx_type_occurred (type_id, occurred_at)
);`}
        />
      </>
    ),
  },
  parsing: {
    id: 'parsing',
    title: 'Parsing & Validation',
    description: 'Regex patterns for validating GTS identifiers.',
    prev: { title: 'Semantics', path: '/docs/semantics' },
    next: { title: 'Compatibility', path: '/docs/compatibility' },
    content: (
      <>
        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Single-segment Regex
        </h2>
        <p className='mb-4'>Matches a single type or instance identifier.</p>
        <CodeBlock
          language='regex'
          code={`^gts\\.([a-z_][a-z0-9_]*)\\.([a-z_][a-z0-9_]*)\\.([a-z_][a-z0-9_]*)\\.([a-z_][a-z0-9_]*)\\.v(0|[1-9]\\d*)(?:\\.(0|[1-9]\\d*))?~?$`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Chained Identifier Regex
        </h2>
        <p className='mb-4'>
          Ensures all segments except the last are type IDs (ending with tilde).
        </p>
        <CodeBlock
          language='regex'
          code={`^\\s*gts\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.v(0|[1-9]\\d*)(?:\\.(0|[1-9]\\d*))?(?:~[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.v(0|[1-9]\\d*)(?:\\.(0|[1-9]\\d*))?)*~?\\s*$`}
        />

        <div className='bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 my-6'>
          <h5 className='font-bold text-yellow-800 dark:text-yellow-200 flex items-center gap-2'>
            Parsing Strategy
          </h5>
          <p className='text-sm text-yellow-700 dark:text-yellow-300 mt-1'>
            Split on <code>~</code> to get raw segments. The first is absolute
            (starts with <code>gts.</code>), the rest are relative. Validate
            that all segments except possibly the last are types.
          </p>
        </div>
      </>
    ),
  },
  compatibility: {
    id: 'compatibility',
    title: 'Version Compatibility',
    description: 'Rules for Schema Evolution and Compatibility Modes.',
    prev: { title: 'Parsing', path: '/docs/parsing' },
    next: { title: 'Access Control', path: '/docs/access-control' },
    content: (
      <>
        <p className='mb-6'>
          GTS uses semantic versioning. Type derivation (chaining) requires full
          compatibility. Minor version evolution of a single type supports
          different modes.
        </p>

        <h3 className='text-xl font-semibold mb-4 text-slate-900 dark:text-white'>
          Compatibility Modes
        </h3>
        <div className='grid gap-4 md:grid-cols-3 mb-8'>
          <div className='p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900'>
            <strong className='block text-brand-600 dark:text-brand-400'>
              Backward
            </strong>
            <p className='text-sm mt-2 text-slate-600 dark:text-slate-400'>
              New consumers can read old data.
            </p>
          </div>
          <div className='p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900'>
            <strong className='block text-brand-600 dark:text-brand-400'>
              Forward
            </strong>
            <p className='text-sm mt-2 text-slate-600 dark:text-slate-400'>
              Old consumers can read new data.
            </p>
          </div>
          <div className='p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900'>
            <strong className='block text-brand-600 dark:text-brand-400'>
              Full
            </strong>
            <p className='text-sm mt-2 text-slate-600 dark:text-slate-400'>
              Deploy producers and consumers in any order.
            </p>
          </div>
        </div>

        <h3 className='text-xl font-semibold mb-4 text-slate-900 dark:text-white'>
          Safe Schema Changes
        </h3>
        <p className='mb-2'>
          Example: <strong>Adding optional property (open model)</strong>
        </p>
        <ul className='flex gap-4 text-sm mb-6'>
          <li className='flex items-center gap-2'>
            <Check className='text-emerald-500' size={16} /> Backward
          </li>
          <li className='flex items-center gap-2'>
            <Check className='text-emerald-500' size={16} /> Forward
          </li>
          <li className='flex items-center gap-2'>
            <Check className='text-emerald-500' size={16} /> Full
          </li>
        </ul>

        <p className='mb-2'>
          Example: <strong>Adding required property</strong>
        </p>
        <ul className='flex gap-4 text-sm mb-6'>
          <li className='flex items-center gap-2 text-red-500'>✕ Backward</li>
          <li className='flex items-center gap-2 text-red-500'>✕ Forward</li>
          <li className='flex items-center gap-2 text-red-500'>✕ Full</li>
        </ul>

        <p className='text-sm text-slate-500 italic'>
          Always increment MAJOR version for breaking changes.
        </p>
      </>
    ),
  },
  'access-control': {
    id: 'access-control',
    title: 'Access Control',
    description: 'Using wildcards for granular permissions.',
    prev: { title: 'Compatibility', path: '/docs/compatibility' },
    next: { title: 'Query Language', path: '/docs/query-language' },
    content: (
      <>
        <p className='mb-6'>
          Wildcards (<code>*</code>) enable policy scopes that cover families of
          identifiers. Useful in RBAC/ABAC engines.
        </p>
        <CodeBlock
          code={`# Grants access to all audit events from vendor 'xyz'
gts.x.core.events.type.v1~x.core._.audit_event.v1~xyz.*

# Grants access to menu items referring to vendor 'abc' screens
gts.x.ui.left_menu.menu_item.v1[screen_type="gts.x.ui.core_ui.screens.v1~abc.*"]`}
        />

        <h3 className='text-xl font-semibold mb-4 mt-8 text-slate-900 dark:text-white'>
          Evaluation Guidelines
        </h3>
        <ul className='list-disc pl-6 space-y-3 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Deny-over-allow:</strong> Process explicit denies before
            allows.
          </li>
          <li>
            <strong>Most-specific wins:</strong> Prefer the longest concrete
            prefix matching rule.
          </li>
          <li>
            <strong>Tenant Isolation:</strong> Use vendor/package scoping to
            isolate tenants.
          </li>
        </ul>
      </>
    ),
  },
  'query-language': {
    id: 'query-language',
    title: 'Query Language & Selectors',
    description: 'Runtime conveniences for filtering and accessing data.',
    prev: { title: 'Access Control', path: '/docs/access-control' },
    next: { title: 'Typical Use Cases', path: '/docs/use-cases' },
    content: (
      <>
        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Query Syntax
        </h2>
        <p className='mb-4'>
          A compact predicate syntax to constrain results by attributes.
          Attached via square brackets.
        </p>
        <CodeBlock
          code={`gts.x.core.acm.user_setting.v1~[user_type="gts.x.core.acm.user.v1~z.app._.app_admin.v1~"]`}
        />
        <p className='text-sm text-slate-500 mb-8'>
          Note: Use only for runtime queries, not embedded in stored
          identifiers.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Wildcard Queries
        </h2>
        <p className='mb-4'>
          Use trailing wildcards (<code>*</code>) to match multiple identifiers
          with a common prefix. Wildcards are powerful for finding all related
          schemas or instances.
        </p>
        <CodeBlock
          code={`# Find all items from vendor 'x.core'
gts.x.core.acm.user_setting.v1~x.core.*

# Find all v1.x versions of a schema
gts.x.llm.chat.message.v1.*

# Find all derived types of a base schema
gts.x.core.events.type.v1~*

# Query with wildcard in predicate (access control)
gts.x.ui.left_menu.menu_item.v1[screen_type="gts.x.ui.core_ui.screens.v1~abc.*"]`}
        />
        <div className='bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mb-8'>
          <h5 className='font-bold text-amber-800 dark:text-amber-200'>
            Wildcard Rules
          </h5>
          <ul className='text-sm text-amber-700 dark:text-amber-300 mt-2 list-disc pl-5 space-y-1'>
            <li>
              Wildcard must appear at the <strong>end</strong> of the pattern
            </li>
            <li>
              Only <strong>one</strong> wildcard per pattern is allowed
            </li>
            <li>Pattern must start at a valid segment boundary</li>
            <li>Wildcards match any sequence including chain separators (~)</li>
          </ul>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Attribute Selector
        </h2>
        <p className='mb-4'>
          Lightweight attribute accessor using <code>@</code>.
        </p>
        <CodeBlock
          code={`# Refer to the value of the message identifier
gts.x.y.z.message.v1@id

# Nested access
gts.x.y.z.message.v1.0@foo.bar`}
        />
      </>
    ),
  },
  'use-cases': {
    id: 'use-cases',
    title: 'Typical Use Cases',
    description: 'Real-world applications of GTS.',
    prev: { title: 'Query Language', path: '/docs/query-language' },
    next: { title: 'Reference Implementation', path: '/docs/reference-impl' },
    content: (
      <>
        <div className='grid gap-6 md:grid-cols-2 mb-12'>
          <div className='bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm'>
            <h3 className='font-bold text-lg mb-2'>Plugin Architectures</h3>
            <p className='text-slate-600 dark:text-slate-400 text-sm'>
              Allow third-party vendors to extend platform base types while
              maintaining compatibility guarantees.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm'>
            <h3 className='font-bold text-lg mb-2'>Schema Registries</h3>
            <p className='text-slate-600 dark:text-slate-400 text-sm'>
              Build centralized catalogs where schemas are indexed by GTS
              identifiers for discovery and validation.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm'>
            <h3 className='font-bold text-lg mb-2'>Multi-Vendor Events</h3>
            <p className='text-slate-600 dark:text-slate-400 text-sm'>
              Route events based on chain provenance. Isolate data visibility to
              specific tenants.
            </p>
          </div>
          <div className='bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm'>
            <h3 className='font-bold text-lg mb-2'>Developer Experience</h3>
            <p className='text-slate-600 dark:text-slate-400 text-sm'>
              Debug issues by reading human-readable types directly from logs
              and traces.
            </p>
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-4 text-slate-900 dark:text-white'>
          Deterministic UUIDs
        </h2>
        <p className='mb-4'>
          Generate stable UUID v5 from GTS identifiers for external systems.
        </p>
        <CodeBlock
          language='python'
          code={`import uuid
GTS_NS = uuid.uuid5(uuid.NAMESPACE_URL, "gts")
print(uuid.uuid5(GTS_NS, "gts.x.core.events.type.v1~"))`}
        />
      </>
    ),
  },
  'reference-impl': {
    id: 'reference-impl',
    title: 'Reference Implementation',
    description: 'Recommendations for implementing GTS libraries.',
    prev: { title: 'Typical Use Cases', path: '/docs/use-cases' },
    next: { title: 'Best Practices', path: '/docs/best-practices' },
    content: (
      <>
        <h3 className='text-xl font-semibold mb-4 text-slate-900 dark:text-white'>
          Core Operations (OP#1–OP#11)
        </h3>
        <ul className='grid gap-2 text-sm text-slate-700 dark:text-slate-300 mb-8'>
          <li>
            <strong>OP#1:</strong> ID Validation
          </li>
          <li>
            <strong>OP#2:</strong> ID Extraction
          </li>
          <li>
            <strong>OP#3:</strong> ID Parsing
          </li>
          <li>
            <strong>OP#4:</strong> ID Pattern Matching (Wildcards)
          </li>
          <li>
            <strong>OP#5:</strong> ID to UUID Mapping
          </li>
          <li>
            <strong>OP#6:</strong> Schema Validation
          </li>
          <li>
            <strong>OP#7:</strong> Relationship Resolution
          </li>
          <li>
            <strong>OP#8:</strong> Compatibility Checking
          </li>
          <li>
            <strong>OP#9:</strong> Version Casting
          </li>
          <li>
            <strong>OP#10:</strong> Query Execution
          </li>
          <li>
            <strong>OP#11:</strong> Attribute Access
          </li>
        </ul>

        <h3 className='text-xl font-semibold mb-4 text-slate-900 dark:text-white'>
          Integration Support
        </h3>
        <div className='space-y-4'>
          <div>
            <h4 className='font-bold text-slate-900 dark:text-slate-200'>
              x-gts-ref
            </h4>
            <p className='text-slate-600 dark:text-slate-400 text-sm'>
              Use in JSON schemas to declare string fields as GTS references.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-slate-900 dark:text-slate-200'>
              TypeSpec
            </h4>
            <p className='text-slate-600 dark:text-slate-400 text-sm'>
              Generate JSON Schema/OpenAPI using GTS identifiers as{' '}
              <code>$id</code>.
            </p>
          </div>
        </div>
      </>
    ),
  },
  'best-practices': {
    id: 'best-practices',
    title: 'Best Practices',
    description: 'Notes and guidelines for success.',
    prev: { title: 'Reference Implementation', path: '/docs/reference-impl' },
    next: { title: 'Comparison', path: '/docs/comparison' },
    content: (
      <>
        <ul className='list-disc pl-6 space-y-4 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Chain Ordering:</strong> Base system type first, then vendor
            refinements, then instance.
          </li>
          <li>
            <strong>Versioning:</strong> Favor additive changes in MINOR
            versions. Use NEW MAJOR for breaking changes.
          </li>
          <li>
            <strong>Cohesion:</strong> Keep types small. Use{' '}
            <code>namespace</code> to group related types.
          </li>
          <li>
            <strong>Registry:</strong> Production systems MUST implement a
            stateful GTS Schema Registry for rigorous diffing and compatibility
            validation.
          </li>
        </ul>
      </>
    ),
  },
  comparison: {
    id: 'comparison',
    title: 'How GTS Stands Out',
    description: 'Comparing GTS with other type systems and schema solutions.',
    prev: { title: 'Best Practices', path: '/docs/best-practices' },
    next: { title: 'Roadmap', path: '/docs/roadmap' },
    content: (
      <>
        <p className='mb-8 text-slate-700 dark:text-slate-300'>
          GTS offers a unique combination of features that set it apart from
          existing solutions in the schema and type system ecosystem.
        </p>

        <div className='overflow-x-auto mb-8'>
          <table className='w-full border-collapse bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm'>
            <thead>
              <tr className='bg-slate-100 dark:bg-slate-800'>
                <th className='p-4 text-left font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700'>
                  Feature
                </th>
                <th className='p-4 text-center font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700'>
                  GTS
                </th>
                <th className='p-4 text-center font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700'>
                  Protobuf
                </th>
                <th className='p-4 text-center font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700'>
                  JSON Schema
                </th>
                <th className='p-4 text-center font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700'>
                  CUE
                </th>
                <th className='p-4 text-center font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700'>
                  Avro
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-slate-100 dark:border-slate-800'>
                <td className='p-4 font-medium text-slate-700 dark:text-slate-300'>
                  Interoperability
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-amber-600 dark:text-amber-400 font-bold'>
                  ○
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-amber-600 dark:text-amber-400 font-bold'>
                  ○
                </td>
              </tr>
              <tr className='border-b border-slate-100 dark:border-slate-800'>
                <td className='p-4 font-medium text-slate-700 dark:text-slate-300'>
                  Readability
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-red-600 dark:text-red-400 font-bold'>
                  ✗
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-amber-600 dark:text-amber-400 font-bold'>
                  ○
                </td>
              </tr>
              <tr className='border-b border-slate-100 dark:border-slate-800'>
                <td className='p-4 font-medium text-slate-700 dark:text-slate-300'>
                  Schema Evolution
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-amber-600 dark:text-amber-400 font-bold'>
                  ○
                </td>
                <td className='p-4 text-center text-red-600 dark:text-red-400 font-bold'>
                  ✗
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-amber-600 dark:text-amber-400 font-bold'>
                  ○
                </td>
              </tr>
              <tr className='border-b border-slate-100 dark:border-slate-800'>
                <td className='p-4 font-medium text-slate-700 dark:text-slate-300'>
                  SDK Generation
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-red-600 dark:text-red-400 font-bold'>
                  ✗
                </td>
                <td className='p-4 text-center text-amber-600 dark:text-amber-400 font-bold'>
                  ○
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
              </tr>
              <tr>
                <td className='p-4 font-medium text-slate-700 dark:text-slate-300'>
                  Openness
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-amber-600 dark:text-amber-400 font-bold'>
                  ○
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
                <td className='p-4 text-center text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg border border-slate-200 dark:border-slate-800 mt-8'>
          <h3 className='text-xl font-semibold mb-4 text-slate-900 dark:text-white'>
            Legend
          </h3>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-center gap-2'>
              <span className='text-emerald-600 dark:text-emerald-400 font-bold'>
                ✓
              </span>
              <span className='text-slate-700 dark:text-slate-300'>
                Full support
              </span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-amber-600 dark:text-amber-400 font-bold'>
                ○
              </span>
              <span className='text-slate-700 dark:text-slate-300'>
                Partial support
              </span>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-red-600 dark:text-red-400 font-bold'>
                ✗
              </span>
              <span className='text-slate-700 dark:text-slate-300'>
                Limited or no support
              </span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  roadmap: {
    id: 'roadmap',
    title: 'Roadmap',
    description: 'Planned features and future developments for GTS.',
    prev: { title: 'Comparison', path: '/docs/comparison' },
    content: (
      <>
        <p className='mb-8 text-slate-700 dark:text-slate-300'>
          The GTS project is actively evolving. Here are the key initiatives on
          our roadmap:
        </p>

        <div className='space-y-6'>
          <div className='border-l-4 border-brand-600 pl-6 py-2'>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
              TypeScript Runtime
            </h3>
            <p className='text-slate-600 dark:text-slate-400'>
              Native TypeScript support with full type generation for seamless
              integration with TypeScript projects.
            </p>
          </div>

          <div className='border-l-4 border-brand-600 pl-6 py-2'>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
              Java SDK
            </h3>
            <p className='text-slate-600 dark:text-slate-400'>
              Enterprise-grade Java bindings and tooling to bring GTS to the
              Java ecosystem.
            </p>
          </div>

          <div className='border-l-4 border-brand-600 pl-6 py-2'>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
              WASM Toolkit
            </h3>
            <p className='text-slate-600 dark:text-slate-400'>
              WebAssembly runtime for browser and edge environments, enabling
              GTS validation and parsing in any environment.
            </p>
          </div>

          <div className='border-l-4 border-brand-600 pl-6 py-2'>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
              GTS → Protobuf Converter
            </h3>
            <p className='text-slate-600 dark:text-slate-400'>
              Seamless integration with existing Protobuf systems through
              automatic conversion tooling.
            </p>
          </div>

          <div className='border-l-4 border-brand-600 pl-6 py-2'>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
              Enterprise Registry
            </h3>
            <p className='text-slate-600 dark:text-slate-400'>
              Centralized schema registry with governance features, version
              control, and team collaboration.
            </p>
          </div>

          <div className='border-l-4 border-brand-600 pl-6 py-2'>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
              Visual Schema Editor
            </h3>
            <p className='text-slate-600 dark:text-slate-400'>
              Interactive web-based schema design tool for visual schema
              creation and modification.
            </p>
          </div>
        </div>

        <div className='bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900 rounded-lg p-6 mt-12'>
          <h3 className='text-brand-800 dark:text-brand-300 font-bold mb-3'>
            Get Involved
          </h3>
          <p className='text-brand-900 dark:text-brand-100 mb-4'>
            GTS is an open-source project. We welcome contributions, feedback,
            and collaboration from the community.
          </p>
          <a
            href='https://github.com/GlobalTypeSystem'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 text-brand-700 dark:text-brand-300 font-semibold hover:text-brand-900 dark:hover:text-brand-100'
          >
            Join us on GitHub →
          </a>
        </div>
      </>
    ),
  },
};
