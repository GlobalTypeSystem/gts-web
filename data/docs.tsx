import React from 'react';
import { Check } from 'lucide-react';
import { DocPageContent, SidebarSection } from '../types';
import { CodeBlock } from '../components/CodeBlock';

export const SIDEBAR_NAVIGATION: SidebarSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', path: '/docs/introduction' },
      { title: 'Terminology', path: '/docs/terminology' },
      { title: 'Quick Start', path: '/docs/quick-start' },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'Identifier Format', path: '/docs/identifier-format' },
      { title: 'Types vs Instances', path: '/docs/types-vs-instances' },
      { title: 'Chained Identifiers', path: '/docs/chained-identifiers' },
      { title: 'Parsing & Validation', path: '/docs/parsing' },
    ],
  },
  {
    title: 'Type System',
    items: [
      { title: 'Type Inheritance', path: '/docs/type-inheritance' },
      { title: 'Derivation Compatibility', path: '/docs/derivation-compatibility' },
      { title: 'Schema Evolution', path: '/docs/schema-evolution' },
      { title: 'Content Models', path: '/docs/content-models' },
    ],
  },
  {
    title: 'Schema Extensions',
    items: [
      { title: 'JSON Schema Conventions', path: '/docs/json-schema-conventions' },
      { title: 'Schema Traits', path: '/docs/schema-traits' },
      { title: 'Schema Modifiers', path: '/docs/schema-modifiers' },
      { title: 'GTS References', path: '/docs/gts-references' },
    ],
  },
  {
    title: 'Runtime & Operations',
    items: [
      { title: 'Query Language', path: '/docs/query-language' },
      { title: 'Access Control', path: '/docs/access-control' },
      { title: 'Wildcard Patterns', path: '/docs/wildcard-patterns' },
    ],
  },
  {
    title: 'Implementation',
    items: [
      { title: 'Core Operations', path: '/docs/core-operations' },
      { title: 'GTS Registry', path: '/docs/gts-registry' },
      { title: 'Best Practices', path: '/docs/best-practices' },
    ],
  },
  {
    title: 'Use Cases',
    items: [
      { title: 'Platform Ecosystems', path: '/docs/use-case-platforms' },
      { title: 'AI & MCP Contracts', path: '/docs/use-case-ai' },
      { title: 'Data Systems', path: '/docs/use-case-data' },
    ],
  },
  {
    title: 'Reference',
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
    next: { title: 'Terminology', path: '/docs/terminology' },
    content: (
      <>
        <p className='lead text-xl text-slate-600 dark:text-slate-400 mb-8'>
          GTS is a simple, human-readable, globally unique identifier and
          referencing system for data type definitions (e.g., JSON Schemas) and
          data instances (e.g., JSON objects). It is specification-first,
          language-agnostic, and intentionally minimal, with a primary focus on
          JSON and JSON Schema.
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
          GTS identifiers can be used instead of a UUID, ULID, URN, JSON Schema
          URL, or XML Namespace URI to identify a wide range of objects and
          definitions:
        </p>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            API data types and typed payloads (e.g. custom resource attributes)
          </li>
          <li>RPC contracts, API errors, headers, and semantics definitions</li>
          <li>Event catalogs, messages, and stream topics</li>
          <li>Workflow categories and instances; FaaS function contracts</li>
          <li>
            Policy objects (RBAC/ABAC/IAM) and UI elements, schemas, and forms
          </li>
          <li>
            Observability payloads, IoT/Edge telemetry, and warehouse/lake
            schemas
          </li>
          <li>
            ML/AI artifacts, config-as-data templates, database schemas, and
            much more
          </li>
        </ul>

        <div className='bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900 rounded-lg p-6 my-8'>
          <h3 className='text-brand-800 dark:text-brand-300 font-bold mb-2'>
            Key Benefits
          </h3>
          <ul className='space-y-2 text-sm text-brand-900 dark:text-brand-100'>
            <li>
              ✓ <strong>Extensible plugin architectures:</strong> Third-party
              vendors safely extend platform base types — fields, events,
              settings, UI, roles — without forking.
            </li>
            <li>
              ✓ <strong>Cross-vendor type safety:</strong> Automated
              compatibility checking of contracts across vendors in a middleware
              layer.
            </li>
            <li>
              ✓ <strong>Hybrid database storage:</strong> Base fields in indexed
              columns, vendor extensions in JSON/JSONB — no migrations.
            </li>
            <li>
              ✓ <strong>Granular access control:</strong> Wildcard and
              attribute-based (ABAC) policies without maintaining explicit
              lists.
            </li>
            <li>
              ✓ <strong>Human-readable debugging:</strong> Vendor, package,
              namespace, and version are encoded directly in the ID.
            </li>
            <li>
              ✓ <strong>Schema evolution without downtime:</strong> Add optional
              fields and deploy producers and consumers independently.
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
          1. Unifying Data Governance and Interoperability
        </h3>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Human- and Machine-Readable:</strong> GTS identifiers are
          semantically meaningful, incorporating vendor, package, namespace, and
          version information directly into the ID. This makes them instantly
          comprehensible to developers, architects, and automated systems for
          logging, tracing, and debugging.
        </p>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Vendor and Domain Agnostic:</strong> By supporting explicit
          vendor registration, GTS facilitates safe, cross-vendor data exchange
          (e.g., in event buses or plugin systems) while preventing naming
          collisions and making the origin of a definition clear.
        </p>

        <h3 className='text-xl font-semibold mb-3 text-slate-900 dark:text-white'>
          2. Enforcing Type Safety and Extensibility
        </h3>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Explicit Type/Instance Distinction:</strong> The GTS naming
          format clearly separates a GTS Type from a concrete GTS Instance,
          enabling unambiguous type resolution and validation.
        </p>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Inheritance and Conformance Lineage:</strong> The chained
          identifier system provides a robust, first-class mechanism for
          expressing type derivation and instance conformance—critical for
          ecosystems where third-parties must safely extend core types while
          guaranteeing compatibility with the base schema.
        </p>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Built-in Compatibility Checking:</strong> By adopting a
          constrained Semantic Versioning model, GTS supports automated
          schema-compatibility checking between successive definitions of a type
          identity. Casting and application-level processing remain separate
          operational contracts.
        </p>

        <h3 className='text-xl font-semibold mb-3 text-slate-900 dark:text-white'>
          3. Simplifying Policy and Tooling
        </h3>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Granular Access Control:</strong> The structured nature of the
          identifier enables coarse-grained access control policies using
          wildcard matching (e.g., <code>gts.myvendor.accounting.*</code>).
        </p>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Deterministic Opaque IDs:</strong> GTS supports deterministic
          derivation of UUIDs (v5), providing a stable, fixed-length key for
          database indexing and external APIs while maintaining an auditable
          link back to the source type.
        </p>
        <p className='mb-6 text-slate-700 dark:text-slate-300'>
          <strong>Specification-First:</strong> As a language- and
          format-agnostic specification (prioritizing JSON/JSON Schema), GTS
          provides a stable foundation for interchangeable validation and
          parsing tools across any ecosystem.
        </p>
      </>
    ),
  },
  'identifier-format': {
    id: 'identifier-format',
    title: 'Identifier Format',
    description: 'Structure, grammar, and chaining rules for GTS identifiers.',
    prev: { title: 'Quick Start', path: '/docs/quick-start' },
    next: { title: 'Types vs Instances', path: '/docs/types-vs-instances' },
    content: (
      <>
        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Canonical Form
        </h2>
        <p className='mb-4'>
          A GTS identifier names either a <strong>GTS Type</strong> (defined by
          a GTS Type Schema) or a <strong>GTS Instance</strong> that conforms to
          a type.
        </p>

        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          <div>
            <h4 className='font-semibold mb-2'>GTS Type Identifier</h4>
            <p className='text-sm text-slate-500 mb-2'>Ends with a tilde (~)</p>
            <CodeBlock code='gts.<vendor>.<package>.<namespace>.<type>.v<MAJOR>[.<MINOR>]~' />
          </div>
          <div>
            <h4 className='font-semibold mb-2'>GTS Instance Identifier</h4>
            <p className='text-sm text-slate-500 mb-2'>
              No trailing tilde; must include a left-hand type segment
            </p>
            <CodeBlock code='gts.<vendor>.<package>.<namespace>.<type>.v<MAJOR>[.<MINOR>]~<vendor>.<package>.<namespace>.<type>.v<MAJOR>[.<MINOR>]' />
          </div>
        </div>

        <p className='text-sm text-slate-500 mb-8'>
          Since v0.7, well-known instances MUST be expressed as a chain (a
          left-hand type segment plus the instance segment). A combined
          anonymous instance instead ends in a UUID tail, e.g.{' '}
          <code>gts.x.core.events.type.v1~&lt;uuid&gt;</code>.
        </p>

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

        <div className='bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-4 mt-6 mb-8 text-sm text-slate-700 dark:text-slate-300'>
          <strong>Canonical identifier rules:</strong> identifiers are at most 1024
          characters, use lowercase ASCII letters, digits, and underscores, and
          contain no leading or trailing whitespace. The reserved <code>_</code>
          placeholder is allowed only in the namespace segment.
        </div>

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
          vendor-specific extensions in JSON/JSONB — no schema migrations
          needed."
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
    prev: { title: 'Chained Identifiers', path: '/docs/chained-identifiers' },
    next: { title: 'Type Inheritance', path: '/docs/type-inheritance' },
    content: (
      <>
        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Single-segment Regex
        </h2>
        <p className='mb-4'>
          Matches a standalone GTS Type Identifier. A non-tilde single segment is
          not a valid instance identifier; instances must include a left-hand type
          segment and are validated with the chained form below.
        </p>
        <CodeBlock
          language='regex'
          code={`^gts\\.([a-z_][a-z0-9_]*)\\.([a-z_][a-z0-9_]*)\\.([a-z_][a-z0-9_]*)\\.([a-z_][a-z0-9_]*)\\.v(0|[1-9]\\d*)(?:\\.(0|[1-9]\\d*))?~$`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Chained Identifier Regex
        </h2>
        <p className='mb-4'>
          Ensures all segments except the last are type IDs (ending with tilde).
        </p>
        <CodeBlock
          language='regex'
          code={`^gts\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.v(0|[1-9]\\d*)(?:\\.(0|[1-9]\\d*))?(?:~[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.[a-z_][a-z0-9_]*\\.v(0|[1-9]\\d*)(?:\\.(0|[1-9]\\d*))?)*(?:~(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?)?$`}
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
          GTS separates two relations (spec v0.13, §4).{' '}
          <strong>Type Derivation Compatibility</strong> is a one-way,
          unconditional rule: every instance valid against a derived type must
          also be valid against its base (
          <code>Valid(derived) ⊆ Valid(base)</code>).{' '}
          <strong>Type Schema Evolution Compatibility</strong> governs
          successive definitions of one type identity and is selected per use
          case from the modes below.
        </p>
        <p className='mb-6 text-sm text-slate-600 dark:text-slate-400'>
          Compatibility is defined by comparing accepted-instance sets. The OP#8
          checker reports a <strong>tri-state</strong> verdict for each
          relation—<code>compatible</code>, <code>incompatible</code>, or{' '}
          <code>unknown</code>—so an inconclusive check is never conflated with
          incompatibility.
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
              The new schema accepts every instance accepted by the old schema; application processing is a separate contract.
            </p>
          </div>
          <div className='p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900'>
            <strong className='block text-brand-600 dark:text-brand-400'>
              Forward
            </strong>
            <p className='text-sm mt-2 text-slate-600 dark:text-slate-400'>
              The old schema accepts every instance accepted by the new schema; tolerant-reader behavior is separate.
            </p>
          </div>
          <div className='p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900'>
            <strong className='block text-brand-600 dark:text-brand-400'>
              Full
            </strong>
            <p className='text-sm mt-2 text-slate-600 dark:text-slate-400'>
              Both schemas accept the same instances; deployment order still depends on application behavior.
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
          <li className='flex items-center gap-2 text-red-500'>✕ Backward</li>
          <li className='flex items-center gap-2'>
            <Check className='text-emerald-500' size={16} /> Forward
          </li>
          <li className='flex items-center gap-2 text-red-500'>✕ Full</li>
        </ul>

        <p className='mb-2'>
          Example: <strong>Adding required property (open model)</strong>
        </p>
        <ul className='flex gap-4 text-sm mb-6'>
          <li className='flex items-center gap-2 text-red-500'>✕ Backward</li>
          <li className='flex items-center gap-2'>
            <Check className='text-emerald-500' size={16} /> Forward
          </li>
          <li className='flex items-center gap-2 text-red-500'>✕ Full</li>
        </ul>
        <p className='text-sm text-slate-500 mb-6'>
          For a closed model, adding a required property is not compatible in any
          mode because old instances may omit it and new instances may contain a
          property rejected by the old schema.
        </p>

        <p className='text-sm text-slate-500 italic'>
          Compatibility is a schema accepted-instance-set relation. Application
          processing, tolerant readers, casting, and default materialization are
          separate runtime contracts. Use a new MAJOR for breaking changes as a
          best practice; publication policy is implementation-defined.
        </p>
      </>
    ),
  },
  'access-control': {
    id: 'access-control',
    title: 'Access Control',
    description: 'Using wildcards for granular permissions.',
    prev: { title: 'Query Language', path: '/docs/query-language' },
    next: { title: 'Wildcard Patterns', path: '/docs/wildcard-patterns' },
    content: (
      <>
        <p className='mb-6'>
          Wildcards (<code>*</code>) enable policy scopes that cover families of
          identifiers. Useful in RBAC/ABAC engines.
        </p>
        <CodeBlock
          code={`# Grants access to all audit events from vendor 'xyz'
gts.x.core.events.type.v1~x.core._.audit_event.v1~xyz.*

# A query predicate uses an exact value; combine it with a separate wildcard
# policy pattern rather than embedding '*' inside the query
gts.x.ui.left_menu.menu_item.v1[screen_type="gts.x.ui.core_ui.screens.v1~abc.home.v1"]`}
        />

        <p className='mb-6 text-sm text-slate-600 dark:text-slate-400'>
          GTS defines identifier and pattern syntax, not a universal authorization
          engine. The following are implementation recommendations; policy engines
          may choose different evaluation strategies.
        </p>

        <h3 className='text-xl font-semibold mb-4 mt-8 text-slate-900 dark:text-white'>
          Recommended Evaluation Guidelines
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
    prev: { title: 'GTS References', path: '/docs/gts-references' },
    next: { title: 'Access Control', path: '/docs/access-control' },
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

# Query predicates use exact values; apply wildcard matching separately
# in the policy pattern rather than embedding '*' in the query
gts.x.ui.left_menu.menu_item.v1[screen_type="gts.x.ui.core_ui.screens.v1~abc.home.v1"]`}
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
            <li>Do not combine a wildcard with <code>@</code> or <code>[]</code>.</li>
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
          Core Operations (OP#1–OP#13)
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
            <strong>OP#6:</strong> Instance Validation
          </li>
          <li>
            <strong>OP#7:</strong> Relationship Resolution
          </li>
          <li>
            <strong>OP#8:</strong> Type Schema Evolution Compatibility
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
          <li>
            <strong>OP#12:</strong> Type Derivation Validation
          </li>
          <li>
            <strong>OP#13:</strong> Schema Traits Validation
          </li>
        </ul>

        <h3 className='text-xl font-semibold mb-4 text-slate-900 dark:text-white'>
          JSON Schema Conventions
        </h3>
        <div className='space-y-4 mb-8'>
          <div>
            <h4 className='font-bold text-slate-900 dark:text-slate-200'>
              <code>$id</code> and <code>$ref</code> Fields
            </h4>
            <p className='text-slate-600 dark:text-slate-400 text-sm mb-2'>
              In JSON Schema, GTS Type Schema <code>$id</code> values and GTS type
              <code>$ref</code> targets should use the <code>gts://</code> prefix
              to make them URI-compatible:
            </p>
            <pre className='bg-slate-100 dark:bg-slate-800 p-3 rounded text-xs overflow-x-auto'>
              {`{
  "$id": "gts://gts.x.core.events.type.v1~",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "allOf": [
    { "$ref": "gts://gts.x.core.events.base.v1~" }
  ]
}`}
            </pre>
            <p className='text-slate-600 dark:text-slate-400 text-sm mt-2'>
              <strong>Note:</strong> The canonical GTS identifier (without{' '}
              <code>gts://</code>) is used everywhere else: runtime validation,
              database storage, API responses, and JSON instance <code>id</code>{' '}
              or <code>type</code> fields.
            </p>
          </div>
        </div>

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
    prev: { title: 'GTS Registry', path: '/docs/gts-registry' },
    next: { title: 'Platform Ecosystems', path: '/docs/use-case-platforms' },
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
            stateful GTS Registry—scoping both Type Schemas and well-known
            Instances—for rigorous diffing and compatibility validation.
          </li>
        </ul>
      </>
    ),
  },
  comparison: {
    id: 'comparison',
    title: 'How GTS Stands Out',
    description: 'Comparing GTS with other type systems and schema solutions.',
    prev: { title: 'Data Systems', path: '/docs/use-case-data' },
    next: { title: 'Roadmap', path: '/docs/roadmap' },
    content: (
      <>
        <p className='mb-8 text-slate-700 dark:text-slate-300'>
          GTS offers a unique combination of features that set it apart from
          existing solutions in the schema and type system ecosystem.
        </p>
        <p className='mb-8 text-sm text-slate-500 dark:text-slate-400'>
          This is an informal, high-level comparison rather than a normative part
          of the v0.13 specification. Support varies by implementation and should
          be verified for the specific toolchain.
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
          The GTS project is actively evolving. The items below are non-normative
          project planning ideas, not commitments made by the v0.13 specification:
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

  // ============================================================================
  // NEW PAGES - GETTING STARTED
  // ============================================================================
  terminology: {
    id: 'terminology',
    title: 'Terminology',
    description: 'Precise definitions of GTS concepts and terms.',
    prev: { title: 'Introduction', path: '/docs/introduction' },
    next: { title: 'Quick Start', path: '/docs/quick-start' },
    content: (
      <>
        <p className='mb-6'>
          This specification uses the following terms with precise meanings.
          Understanding these definitions is essential for working with GTS.
        </p>

        <div className='space-y-6'>
          <div className='border-l-4 border-brand-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              GTS Type
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              A type entity identified by a GTS Type Identifier and defined by a
              GTS Type Schema. A GTS Type may exist as a standalone document (e.g.,
              a <code>*.schema.json</code> file), be exchanged between systems, or
              be stored in a GTS Registry.
            </p>
          </div>

          <div className='border-l-4 border-blue-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              GTS Type Identifier
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              A canonical GTS identifier <strong>ending with ~</strong> that
              identifies a GTS Type.
            </p>
            <CodeBlock code='gts.x.core.events.type.v1~' />
          </div>

          <div className='border-l-4 border-purple-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              GTS Type Schema
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              The canonical definition of a GTS Type — a JSON Schema document
              annotated with GTS-specific keywords (<code>x-gts-*</code>),
              describing the type's instance shape, traits, and derivation.
            </p>
            <p className='text-slate-600 dark:text-slate-400 text-sm mt-2'>
              Implementations MAY accept alternative source forms (e.g., TypeSpec,
              YAML) provided they deterministically map to a canonical GTS Type
              Schema.
            </p>
          </div>

          <div className='border-l-4 border-emerald-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              GTS Instance
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              A concrete object, value, or document that conforms to a GTS Type.
            </p>
          </div>

          <div className='border-l-4 border-orange-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              GTS Instance Identifier
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              A GTS identifier <strong>without the trailing ~</strong>, used to
              identify a well-known instance. Instance identifiers MUST include a
              left-hand type segment in a chain.
            </p>
            <CodeBlock code='gts.x.core.events.topic.v1~x.commerce._.orders.v1.0' />
          </div>

          <div className='border-l-4 border-pink-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              GTS Registry
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              A registry that stores and resolves GTS entities — Type Schemas and
              well-known Instances — by GTS Identifier. The registry is a critical
              infrastructure component for maintaining type safety guarantees.
            </p>
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-10 text-slate-900 dark:text-white'>
          Quick Reference
        </h2>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm text-sm'>
            <thead>
              <tr className='bg-slate-100 dark:bg-slate-800'>
                <th className='p-3 text-left font-semibold'>Term</th>
                <th className='p-3 text-left font-semibold'>Ends with ~</th>
                <th className='p-3 text-left font-semibold'>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3 font-medium'>GTS Type Identifier</td>
                <td className='p-3 text-emerald-600 dark:text-emerald-400'>Yes</td>
                <td className='p-3 font-mono text-xs'>
                  gts.x.core.events.type.v1~
                </td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3 font-medium'>GTS Instance Identifier</td>
                <td className='p-3 text-red-600 dark:text-red-400'>No</td>
                <td className='p-3 font-mono text-xs'>
                  gts.x.core.events.topic.v1~x.app._.orders.v1
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-10 text-slate-900 dark:text-white'>
          JSON Document Classification
        </h2>
        <p className='mb-4 text-slate-700 dark:text-slate-300'>
          For JSON documents, the top-level <code>$schema</code> field is the
          primary schema-versus-instance discriminator. A document with{' '}
          <code>$schema</code> is treated as a schema; without it, the document is
          treated as an instance. The exact instance ID and type field names are
          implementation-defined, but common defaults are <code>id</code> and{' '}
          <code>type</code>.
        </p>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            A GTS Type Schema has <code>$schema</code> and a GTS Type Identifier in
            <code>$id</code>.
          </li>
          <li>
            A well-known instance uses a chained GTS Instance Identifier in its ID
            field; its type is derived from the chain.
          </li>
          <li>
            An anonymous instance uses an opaque ID and a separate GTS Type
            Identifier, commonly in <code>type</code>.
          </li>
          <li>
            Extraction APIs should return a GTS Type Identifier or <code>null</code>
            as <code>type_id</code>; a JSON Schema dialect URL is not a GTS type ID.
          </li>
        </ul>
      </>
    ),
  },

  'quick-start': {
    id: 'quick-start',
    title: 'Quick Start',
    description: 'A hands-on tutorial to get started with GTS.',
    prev: { title: 'Terminology', path: '/docs/terminology' },
    next: { title: 'Identifier Format', path: '/docs/identifier-format' },
    content: (
      <>
        <p className='mb-6'>
          This tutorial walks through a practical example: building a multi-vendor
          event management system where different vendors can safely extend a
          platform's base event type.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Step 1: Define a Base Event Type
        </h2>
        <p className='mb-4'>
          First, the platform vendor (<code>x</code>) defines a base event schema
          that all events must conform to:
        </p>
        <CodeBlock
          language='json'
          title='gts.x.core.events.type.v1~'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.events.type.v1~",
  "title": "Base Event",
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "type": { "type": "string" },
    "timestamp": { "type": "integer" },
    "payload": { "type": "object", "additionalProperties": true }
  },
  "required": ["id", "type", "timestamp", "payload"],
  "additionalProperties": false
}`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Step 2: Create a Derived Event Type
        </h2>
        <p className='mb-4'>
          A third-party vendor (<code>abc</code>) creates a specific event type for
          order placements that extends the base:
        </p>
        <CodeBlock
          language='json'
          title='gts.x.core.events.type.v1~abc.app.store.purchase_event.v1~'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.events.type.v1~abc.app.store.purchase_event.v1~",
  "title": "Purchase Event",
  "type": "object",
  "allOf": [
    { "$ref": "gts://gts.x.core.events.type.v1~" },
    {
      "properties": {
        "payload": {
          "type": "object",
          "properties": {
            "orderId": { "type": "string" },
            "amount": { "type": "number" },
            "currency": { "type": "string" }
          },
          "required": ["orderId", "amount", "currency"]
        }
      }
    }
  ]
}`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Step 3: Create an Event Instance
        </h2>
        <p className='mb-4'>
          When the application emits an event, it includes the type identifier:
        </p>
        <CodeBlock
          language='json'
          title='Event Instance'
          code={`{
  "id": "e81307e5-5ee8-4c0a-8d1f-bd98a65c517e",
  "type": "gts.x.core.events.type.v1~abc.app.store.purchase_event.v1~",
  "timestamp": 1743466200,
  "payload": {
    "orderId": "ORD-12345",
    "amount": 99.99,
    "currency": "USD"
  }
}`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Step 4: Process the Event
        </h2>
        <p className='mb-4'>
          When the event manager receives this event, it can:
        </p>
        <ol className='list-decimal pl-6 space-y-3 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Parse the type chain</strong> to see the inheritance:
            <code className='ml-2 text-sm'>base event → purchase event</code>
          </li>
          <li>
            <strong>Validate</strong> against the most specific schema (purchase
            event), which automatically ensures conformance to the base
          </li>
          <li>
            <strong>Authorize</strong> using wildcard patterns like{' '}
            <code>gts.x.core.events.type.v1~abc.*</code>
          </li>
          <li>
            <strong>Route</strong> based on the type chain for appropriate handling
          </li>
        </ol>

        <div className='bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6 my-8'>
          <h3 className='text-emerald-800 dark:text-emerald-300 font-bold mb-2'>
            What You've Learned
          </h3>
          <ul className='space-y-2 text-sm text-emerald-900 dark:text-emerald-100'>
            <li>
              <Check className='inline mr-2' size={14} />
              GTS Type Schemas are JSON Schema documents with a{' '}
              <code>gts://</code> prefixed <code>$id</code>
            </li>
            <li>
              <Check className='inline mr-2' size={14} />
              Type identifiers end with <code>~</code>, instance identifiers don't
            </li>
            <li>
              <Check className='inline mr-2' size={14} />
              Chained identifiers express inheritance (base~derived)
            </li>
            <li>
              <Check className='inline mr-2' size={14} />
              Derived types commonly use <code>allOf</code> with <code>$ref</code> to
              extend base types; this is recommended but not required when the
              chained <code>$id</code> and schema constraints establish compatibility
            </li>
          </ul>
        </div>
      </>
    ),
  },

  // ============================================================================
  // CORE CONCEPTS - NEW PAGES
  // ============================================================================
  'types-vs-instances': {
    id: 'types-vs-instances',
    title: 'Types vs Instances',
    description:
      'Understanding the distinction between GTS Types and Instances.',
    prev: { title: 'Identifier Format', path: '/docs/identifier-format' },
    next: { title: 'Chained Identifiers', path: '/docs/chained-identifiers' },
    content: (
      <>
        <p className='mb-6'>
          GTS clearly separates <strong>types</strong> (schema definitions) from{' '}
          <strong>instances</strong> (concrete objects). This distinction is
          fundamental to the system.
        </p>

        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800'>
            <h3 className='font-bold text-lg text-blue-800 dark:text-blue-200 mb-3'>
              GTS Type
            </h3>
            <ul className='space-y-2 text-sm text-blue-700 dark:text-blue-300'>
              <li>• Defined by a GTS Type Schema (JSON Schema)</li>
              <li>
                • Identifier ends with <code>~</code>
              </li>
              <li>• Describes the shape of data</li>
              <li>• Stored in a GTS Registry</li>
              <li>• Can be derived from other types</li>
            </ul>
          </div>
          <div className='bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800'>
            <h3 className='font-bold text-lg text-emerald-800 dark:text-emerald-200 mb-3'>
              GTS Instance
            </h3>
            <ul className='space-y-2 text-sm text-emerald-700 dark:text-emerald-300'>
              <li>• A concrete object conforming to a type</li>
              <li>
                • Identifier does NOT end with <code>~</code>
              </li>
              <li>• Contains actual data</li>
              <li>• References its type for validation</li>
              <li>• Can be well-known or anonymous</li>
            </ul>
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Well-known vs Anonymous Instances
        </h2>

        <h3 className='text-xl font-semibold mb-3 text-slate-900 dark:text-white'>
          Well-known Instances (Named)
        </h3>
        <p className='mb-4'>
          Used for unique, globally-defined objects that benefit from a stable
          human-readable name: catalog entries, topics/streams, modules,
          capabilities, etc.
        </p>
        <ul className='list-disc pl-6 space-y-2 mb-4 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>MUST</strong> be expressed as a chain where the left segment is
            the type and the rightmost segment is the instance name
          </li>
          <li>Single-segment instance identifiers are prohibited</li>
          <li>
            Field naming: typically <code>id</code> (alternatives:{' '}
            <code>gtsId</code>, <code>gts_id</code>)
          </li>
        </ul>
        <CodeBlock
          language='json'
          title='Well-known Instance Example'
          code={`{
  "id": "gts.x.core.events.topic.v1~x.commerce._.orders.v1.0",
  "name": "orders",
  "description": "Order lifecycle events topic"
}`}
        />

        <h3 className='text-xl font-semibold mb-3 mt-8 text-slate-900 dark:text-white'>
          Anonymous Instances
        </h3>
        <p className='mb-4'>
          Used for runtime-created objects where a globally meaningful name is not
          required: events/messages, database rows, audit records, etc.
        </p>
        <ul className='list-disc pl-6 space-y-2 mb-4 text-slate-700 dark:text-slate-300'>
          <li>
            Use an opaque identifier as <code>id</code> (typically a UUID)
          </li>
          <li>
            Store the GTS Type Identifier separately in a <code>type</code> field
          </li>
          <li>
            Field naming: <code>type</code> (alternatives: <code>gtsType</code>,{' '}
            <code>gts_type</code>)
          </li>
        </ul>
        <CodeBlock
          language='json'
          title='Anonymous Instance Example'
          code={`{
  "id": "7a1d2f34-5678-49ab-9012-abcdef123456",
  "type": "gts.x.core.events.type.v1~x.commerce.orders.order_placed.v1~",
  "occurredAt": "2025-09-20T18:35:00Z",
  "payload": { "orderId": "ORD-123", "amount": 99.99 }
}`}
        />

        <h3 className='text-xl font-semibold mb-3 mt-8 text-slate-900 dark:text-white'>
          Combined Anonymous Instance
        </h3>
        <p className='mb-4'>
          Some services support a combined representation where the type and UUID
          are merged:
        </p>
        <CodeBlock code='gts.x.core.events.type.v1~x.commerce.orders.order_placed.v1~7a1d2f34-5678-49ab-9012-abcdef123456' />
        <p className='text-sm text-slate-600 dark:text-slate-400 mt-2'>
          In this case, the explicit <code>type</code> field MAY be omitted since
          the GTS Type Identifier can be derived from the <code>id</code> prefix up
          to the final <code>~</code>.
        </p>

        <div className='bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mt-8'>
          <h4 className='font-bold text-amber-800 dark:text-amber-200 mb-2'>
            Common Pattern
          </h4>
          <p className='text-sm text-amber-700 dark:text-amber-300'>
            In event systems, <strong>topics/streams</strong> are often well-known
            instances (they have stable names), while individual{' '}
            <strong>events</strong> are anonymous (they're runtime-created with
            UUIDs).
          </p>
        </div>
      </>
    ),
  },

  'chained-identifiers': {
    id: 'chained-identifiers',
    title: 'Chained Identifiers',
    description:
      'Expressing type derivation and instance conformance through chains.',
    prev: { title: 'Types vs Instances', path: '/docs/types-vs-instances' },
    next: { title: 'Parsing & Validation', path: '/docs/parsing' },
    content: (
      <>
        <p className='mb-6'>
          Multiple GTS identifiers can be chained with <code>~</code> to express
          derivation (inheritance) and conformance. The chain follows{' '}
          <strong>left-to-right inheritance</strong> semantics.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Chain Pattern
        </h2>
        <CodeBlock
          code='gts.<segment1>~<segment2>~<segment3>'
          title='Chaining Pattern'
        />

        <div className='space-y-3 my-6'>
          <div className='flex items-start gap-3'>
            <span className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono'>
              segment1
            </span>
            <p className='text-slate-700 dark:text-slate-300'>
              <strong>Base type</strong> — GTS Type Identifier ending with ~
            </p>
          </div>
          <div className='flex items-start gap-3'>
            <span className='bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm font-mono'>
              segment2
            </span>
            <p className='text-slate-700 dark:text-slate-300'>
              <strong>Derived type</strong> — extends segment1 with additional
              constraints. MUST be compatible with segment1.
            </p>
          </div>
          <div className='flex items-start gap-3'>
            <span className='bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded text-sm font-mono'>
              segment3
            </span>
            <p className='text-slate-700 dark:text-slate-300'>
              <strong>Instance</strong> — conforms to segment2 (and by
              transitivity, segment1)
            </p>
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Chaining Rules
        </h2>
        <ol className='list-decimal pl-6 space-y-3 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            All elements except the rightmost <strong>MUST</strong> be type
            identifiers (conceptually ending with ~)
          </li>
          <li>
            The rightmost element determines the identifier's nature:
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>
                Ends with <code>~</code> → the whole identifier represents a{' '}
                <strong>GTS Type</strong>
              </li>
              <li>
                No trailing <code>~</code> → the whole identifier represents a{' '}
                <strong>GTS Instance</strong>
              </li>
            </ul>
          </li>
          <li>
            The <code>gts.</code> prefix appears <strong>only once</strong> at the
            very beginning
          </li>
          <li>
            Segments after the first are relative identifiers (no{' '}
            <code>gts.</code> prefix)
          </li>
          <li>
            Use <code>_</code> as a placeholder when namespace is not applicable
          </li>
        </ol>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Examples
        </h2>
        <CodeBlock
          code={`# Base type only (standalone schema)
gts.x.core.events.type.v1~

# Derived type extending base (both are schemas - trailing ~)
gts.x.core.events.type.v1~ven.app._.custom_event.v1~

# Instance conforming to derived type (no trailing ~)
gts.x.core.events.topic.v1~ven.app._.custom_topic.v1.2

# Three-level chain: base → audit_event → vendor_audit
gts.x.core.events.type.v1~x.core.audit.event.v1~abc.app.store.purchase_audit.v1~`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Inheritance Semantics
        </h2>
        <p className='mb-4'>
          In a chain like <code>gts.A~B~C</code>:
        </p>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>Type B extends type A by adding constraints or refining fields</li>
          <li>Type C further extends type B in the same manner</li>
          <li>
            Each derived type MUST satisfy{' '}
            <strong>Type Derivation Compatibility</strong> with its predecessor
          </li>
          <li>
            An instance conforming to C also conforms to B and A (by transitivity)
          </li>
          <li>
            Validation against the rightmost type automatically ensures conformance
            to all base types
          </li>
        </ul>

        <div className='bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900 rounded-lg p-6 my-8'>
          <h3 className='text-brand-800 dark:text-brand-300 font-bold mb-2'>
            Key Insight
          </h3>
          <p className='text-brand-900 dark:text-brand-100'>
            This inheritance model enables <strong>safe extensibility</strong>:
            third-party vendors can extend platform base types while preserving
            conformance to the core system. The platform can validate, authorize,
            and route data based on any level in the chain.
          </p>
        </div>
      </>
    ),
  },

  // ============================================================================
  // TYPE SYSTEM - NEW PAGES
  // ============================================================================
  'type-inheritance': {
    id: 'type-inheritance',
    title: 'Type Inheritance',
    description: 'How GTS types extend and inherit from base types.',
    prev: { title: 'Parsing & Validation', path: '/docs/parsing' },
    next: {
      title: 'Derivation Compatibility',
      path: '/docs/derivation-compatibility',
    },
    content: (
      <>
        <p className='mb-6'>
          GTS chained identifiers express type derivation through{' '}
          <strong>left-to-right inheritance</strong>. This model enables safe
          extensibility where third-party vendors can extend platform base types
          while preserving conformance guarantees.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Inheritance Model
        </h2>
        <p className='mb-4'>
          In a chain like <code>gts.A~B~C</code>:
        </p>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            Type <strong>B</strong> extends type <strong>A</strong> by adding
            constraints or refining field definitions
          </li>
          <li>
            Type <strong>C</strong> further extends type <strong>B</strong> in the
            same manner
          </li>
          <li>
            Each derived type MUST satisfy Type Derivation Compatibility with its
            predecessor
          </li>
        </ul>

        <div className='bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900 rounded-lg p-6 my-8'>
          <h3 className='text-brand-800 dark:text-brand-300 font-bold mb-2'>
            Derivation Compatibility Guarantee
          </h3>
          <p className='text-brand-900 dark:text-brand-100'>
            Every valid instance of a derived type is also a valid instance of all
            its base types in the chain. This means:
          </p>
          <ul className='mt-3 space-y-2 text-sm text-brand-900 dark:text-brand-100'>
            <li>• An instance conforming to C also conforms to B and A</li>
            <li>
              • Validation against the rightmost type automatically ensures
              conformance to all base types
            </li>
            <li>
              • Derived types can tighten constraints but never loosen what a base
              accepts
            </li>
          </ul>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          What Derived Types Can Do
        </h2>
        <div className='grid md:grid-cols-2 gap-4 mb-8'>
          <div className='bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800'>
            <h4 className='font-semibold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center gap-2'>
              <Check size={16} /> Allowed
            </h4>
            <ul className='text-sm text-emerald-700 dark:text-emerald-300 space-y-1'>
              <li>• Declare properties the base left open</li>
              <li>• Tighten existing constraints</li>
              <li>• Provide more specific definitions</li>
              <li>• Add required properties to open payloads</li>
            </ul>
          </div>
          <div className='bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800'>
            <h4 className='font-semibold text-red-800 dark:text-red-200 mb-2'>
              Not Allowed
            </h4>
            <ul className='text-sm text-red-700 dark:text-red-300 space-y-1'>
              <li>• Loosen what a base accepts</li>
              <li>• Add properties to closed objects</li>
              <li>• Remove required properties</li>
              <li>• Change property types incompatibly</li>
            </ul>
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Implementation Pattern: Hybrid Storage
        </h2>
        <p className='mb-4'>
          GTS type inheritance enables a powerful database design pattern combining
          structured storage for base fields with flexible JSON storage for
          extensions:
        </p>
        <CodeBlock
          language='sql'
          title='Hybrid Storage Example'
          code={`CREATE TABLE events (
    id VARCHAR(255) PRIMARY KEY,     -- Indexed for fast fetch
    type_id VARCHAR(255) NOT NULL,   -- Indexed for filtering by type
    occurred_at TIMESTAMP NOT NULL,  -- Indexed for time-range queries
    payload JSONB NOT NULL,          -- Vendor-specific extensions
    INDEX idx_type_occurred (type_id, occurred_at)
);`}
        />
        <p className='mt-4 text-slate-600 dark:text-slate-400'>
          <strong>Benefits:</strong> No schema migrations for new event types,
          efficient queries on indexed fields, vendor isolation through type_id
          patterns, full validation against registered GTS schemas.
        </p>
      </>
    ),
  },

  'derivation-compatibility': {
    id: 'derivation-compatibility',
    title: 'Derivation Compatibility',
    description:
      'The one-way compatibility relation between derived and base types.',
    prev: { title: 'Type Inheritance', path: '/docs/type-inheritance' },
    next: { title: 'Schema Evolution', path: '/docs/schema-evolution' },
    content: (
      <>
        <p className='mb-6'>
          GTS defines two distinct compatibility relations. Understanding the
          difference is critical for working with GTS types correctly.
        </p>

        <div className='overflow-x-auto mb-8'>
          <table className='w-full border-collapse bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm text-sm'>
            <thead>
              <tr className='bg-slate-100 dark:bg-slate-800'>
                <th className='p-3 text-left font-semibold'></th>
                <th className='p-3 text-left font-semibold'>Type Derivation</th>
                <th className='p-3 text-left font-semibold'>Schema Evolution</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3 font-medium'>Holds between</td>
                <td className='p-3'>Derived type and its base types</td>
                <td className='p-3'>
                  Successive definitions of one type identity
                </td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3 font-medium'>Relation</td>
                <td className='p-3'>
                  <code>Valid(derived) ⊆ Valid(base)</code>
                </td>
                <td className='p-3'>
                  Selected mode: backward, forward, or full
                </td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3 font-medium'>Direction</td>
                <td className='p-3'>One-way, always</td>
                <td className='p-3'>Chosen per type identity</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3 font-medium'>Permits</td>
                <td className='p-3'>
                  Declaring open properties, tightening constraints
                </td>
                <td className='p-3'>Depends on selected mode</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Type Derivation Compatibility
        </h2>
        <p className='mb-4'>
          A derived type must satisfy this relation with its base type: every
          instance valid against the derived schema must also be valid against the
          base schema.
        </p>
        <CodeBlock code='Valid(derived) ⊆ Valid(base)' title='Derivation Rule' />
        <p className='mt-4 mb-6 text-slate-600 dark:text-slate-400'>
          This relation is <strong>one-way and unconditional</strong>. It is not
          selected per type and is never qualified by a mode name. A derived type
          either satisfies Type Derivation Compatibility or it does not.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Validation Semantics
        </h2>

        <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>
          Instance → Schema Validation
        </h3>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            Resolve the <strong>rightmost type</strong> in the identifier chain
          </li>
          <li>Validate the instance payload against that JSON Schema</li>
          <li>
            If the chain includes multiple types (A~B~instance), validating against
            B implies conformance to A by transitivity
          </li>
        </ul>

        <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>
          Schema → Schema Validation
        </h3>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            Given a derived type chain (A~B~ or A~B~C~), validate that each derived
            schema is compatible with its immediate predecessor
          </li>
          <li>
            The compatibility rule: every valid instance of the derived schema MUST
            also be valid against the base schema
          </li>
        </ul>

        <div className='bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mt-8'>
          <h4 className='font-bold text-amber-800 dark:text-amber-200 mb-2'>
            additionalProperties Restriction
          </h4>
          <p className='text-sm text-amber-700 dark:text-amber-300'>
            If a base schema defines an object with{' '}
            <code>additionalProperties: false</code>, derived schemas MUST NOT
            introduce new properties at that object level. Derived schemas MAY
            still tighten constraints of existing properties or specify
            previously-open nested objects.
          </p>
        </div>
      </>
    ),
  },

  'schema-evolution': {
    id: 'schema-evolution',
    title: 'Schema Evolution',
    description: 'Rules for evolving schemas across versions.',
    prev: {
      title: 'Derivation Compatibility',
      path: '/docs/derivation-compatibility',
    },
    next: { title: 'Content Models', path: '/docs/content-models' },
    content: (
      <>
        <p className='mb-6'>
          Type Schema Evolution Compatibility governs successive definitions of one
          type identity. Unlike derivation (which is one-way), evolution
          compatibility is selected per use case from three modes.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Versioning Model
        </h2>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>MAJOR version increments</strong> (v1 → v2): Always indicate
            breaking changes
          </li>
          <li>
            <strong>Successive definitions within one MAJOR</strong>: Must maintain
            compatibility according to one of three strategies when that strategy is
            selected by the implementation
          </li>
          <li>
            A successor may use a new MINOR identifier, or an implementation may
            replace a definition under the same identifier. Registry publication and
            revision policy are implementation-defined.
          </li>
        </ul>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Compatibility Modes
        </h2>
        <p className='mb-4'>
          <code>Valid(S)</code> means all JSON instances accepted by schema S under
          the JSON Schema dialect declared by that schema.
        </p>

        <div className='space-y-4 mb-8'>
          <div className='border-l-4 border-emerald-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              Backward Compatibility
            </h3>
            <p className='text-slate-700 dark:text-slate-300 mb-2'>
              <code>Valid(old) ⊆ Valid(new)</code>
            </p>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              A consumer validating with the <strong>new schema</strong> accepts
              every instance valid under the <strong>old schema</strong>.
            </p>
            <p className='text-sm text-slate-500 dark:text-slate-500 mt-1'>
              <strong>Use case:</strong> Consumers can be updated before producers
              (e.g., API servers before clients for request payloads).
            </p>
          </div>

          <div className='border-l-4 border-blue-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              Forward Compatibility
            </h3>
            <p className='text-slate-700 dark:text-slate-300 mb-2'>
              <code>Valid(new) ⊆ Valid(old)</code>
            </p>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              A consumer validating with the <strong>old schema</strong> accepts
              every instance valid under the <strong>new schema</strong>.
            </p>
            <p className='text-sm text-slate-500 dark:text-slate-500 mt-1'>
              <strong>Use case:</strong> Producers are updated before consumers, or
              to support rollback scenarios.
            </p>
          </div>

          <div className='border-l-4 border-purple-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              Full Compatibility
            </h3>
            <p className='text-slate-700 dark:text-slate-300 mb-2'>
              <code>Valid(old) = Valid(new)</code>
            </p>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Changes are both backward and forward compatible.
            </p>
            <p className='text-sm text-slate-500 dark:text-slate-500 mt-1'>
              <strong>Use case:</strong> Producers and consumers can be deployed in
              any order. Safest but most restrictive.
            </p>
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Common Evolution Patterns
        </h2>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm text-sm'>
            <thead>
              <tr className='bg-slate-100 dark:bg-slate-800'>
                <th className='p-3 text-left font-semibold'>Change</th>
                <th className='p-3 text-center font-semibold'>Backward</th>
                <th className='p-3 text-center font-semibold'>Forward</th>
                <th className='p-3 text-center font-semibold'>Full</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Adding optional property (closed model)</td>
                <td className='p-3 text-center text-emerald-600'>✓</td>
                <td className='p-3 text-center text-red-600'>✗</td>
                <td className='p-3 text-center text-red-600'>✗</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Adding optional property (open model)</td>
                <td className='p-3 text-center text-red-600'>✗</td>
                <td className='p-3 text-center text-emerald-600'>✓</td>
                <td className='p-3 text-center text-red-600'>✗</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Adding required property (open model)</td>
                <td className='p-3 text-center text-red-600'>✗</td>
                <td className='p-3 text-center text-emerald-600'>✓</td>
                <td className='p-3 text-center text-red-600'>✗</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Adding required property (closed model)</td>
                <td className='p-3 text-center text-red-600'>✗</td>
                <td className='p-3 text-center text-red-600'>✗</td>
                <td className='p-3 text-center text-red-600'>✗</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Adding new enum value</td>
                <td className='p-3 text-center text-emerald-600'>✓</td>
                <td className='p-3 text-center text-red-600'>✗</td>
                <td className='p-3 text-center text-red-600'>✗</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Removing enum value</td>
                <td className='p-3 text-center text-red-600'>✗</td>
                <td className='p-3 text-center text-emerald-600'>✓</td>
                <td className='p-3 text-center text-red-600'>✗</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Updating description/examples</td>
                <td className='p-3 text-center text-emerald-600'>✓</td>
                <td className='p-3 text-center text-emerald-600'>✓</td>
                <td className='p-3 text-center text-emerald-600'>✓</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Renaming property</td>
                <td className='p-3 text-center text-red-600'>✗</td>
                <td className='p-3 text-center text-red-600'>✗</td>
                <td className='p-3 text-center text-red-600'>✗</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  'content-models': {
    id: 'content-models',
    title: 'Content Models',
    description:
      'Understanding open, closed, and partially-open content models.',
    prev: { title: 'Schema Evolution', path: '/docs/schema-evolution' },
    next: {
      title: 'JSON Schema Conventions',
      path: '/docs/json-schema-conventions',
    },
    content: (
      <>
        <p className='mb-6'>
          Whether an object accepts undeclared properties is critical for
          compatibility. The content model is a property of the{' '}
          <strong>fully resolved effective schema</strong> at one object level —
          after <code>$ref</code> resolution and <code>allOf</code> composition,
          including constraints from <code>unevaluatedProperties</code>,{' '}
          <code>patternProperties</code>, and <code>propertyNames</code> when the
          selected JSON Schema dialect supports them.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Content Model Types
        </h2>

        <div className='space-y-4 mb-8'>
          <div className='border-l-4 border-emerald-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              Open Content Model
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              The resolved schema accepts an undeclared property with any value.
            </p>
            <CodeBlock
              code={`"additionalProperties": true`}
              language='json'
            />
          </div>

          <div className='border-l-4 border-red-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              Closed Content Model
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              The resolved schema rejects every undeclared property.
            </p>
            <CodeBlock
              code={`"additionalProperties": false`}
              language='json'
            />
          </div>

          <div className='border-l-4 border-amber-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              Partially Open Content Model
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              The resolved schema accepts some undeclared property names or
              constrains their values.
            </p>
            <CodeBlock
              code={`"additionalProperties": { "type": "string" }`}
              language='json'
            />
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Impact on Derivation and Evolution
        </h2>

        <div className='overflow-x-auto mb-8'>
          <table className='w-full border-collapse bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm text-sm'>
            <thead>
              <tr className='bg-slate-100 dark:bg-slate-800'>
                <th className='p-3 text-left font-semibold'>Goal</th>
                <th className='p-3 text-left font-semibold'>
                  Content Model That Supports It
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>
                  Derived types introduce their own properties here
                </td>
                <td className='p-3'>Open, or partially open with compatible schemas</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>
                  Later definitions of this type add optional properties here
                </td>
                <td className='p-3'>Closed</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Both derivation and evolution</td>
                <td className='p-3'>
                  Separate the levels — see recommended pattern below
                </td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3'>Neither; the shape is stable</td>
                <td className='p-3'>
                  Either, though closed states the intent more precisely
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Recommended Pattern: Closed Envelope with Open Containers
        </h2>
        <p className='mb-4'>
          When a type should be both derivable and evolvable, close the top level
          and declare explicit open objects as extension points:
        </p>
        <CodeBlock
          language='json'
          title='Recommended Pattern'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.events.type.v1~",
  "type": "object",
  "required": ["id", "type", "timestamp"],
  "properties": {
    "id": { "type": "string" },
    "type": { "type": "string" },
    "timestamp": { "type": "integer" },
    "payload": { "type": "object", "additionalProperties": true }
  },
  "additionalProperties": false
}`}
        />
        <p className='mt-4 text-slate-600 dark:text-slate-400'>
          The <strong>closed top level</strong> lets later definitions add optional
          envelope properties backward compatibly. The <strong>open payload</strong>{' '}
          lets derived types describe their own content without being rejected by
          the base.
        </p>
      </>
    ),
  },

  // ============================================================================
  // SCHEMA EXTENSIONS
  // ============================================================================
  'json-schema-conventions': {
    id: 'json-schema-conventions',
    title: 'JSON Schema Conventions',
    description: 'How GTS extends JSON Schema with $id, $ref, and gts:// prefix.',
    prev: { title: 'Content Models', path: '/docs/content-models' },
    next: { title: 'Schema Traits', path: '/docs/schema-traits' },
    content: (
      <>
        <p className='mb-6'>
          GTS Type Schemas are standard JSON Schema documents with GTS-specific
          conventions for identifiers and references. GTS is dialect-agnostic: the
          schema's <code>$schema</code> URI selects the JSON Schema dialect, and
          Draft-07 is shown here only as a broadly supported baseline.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          The $id Field
        </h2>
        <p className='mb-4'>
          Put the GTS Type Identifier into the JSON Schema <code>$id</code> field.
          The <code>gts://</code> URI form is the recommended interoperable form:
        </p>
        <CodeBlock
          language='json'
          code={`{
  "$id": "gts://gts.x.core.events.type.v1~",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Event Envelope"
}`}
        />
        <div className='bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mt-4'>
          <p className='text-sm text-amber-700 dark:text-amber-300'>
            <strong>Interoperability recommendation:</strong> Prefer the{' '}
            <code>gts://</code> URI form for GTS identifiers in <code>$id</code> and
            GTS-targeting <code>$ref</code> values. Implementations should normalize
            that form to the canonical identifier by stripping the scheme.
          </p>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          The $ref Field
        </h2>
        <p className='mb-4'>
          Use the same <code>gts://</code> prefix when referencing GTS types:
        </p>
        <CodeBlock
          language='json'
          code={`{
  "allOf": [
    { "$ref": "gts://gts.x.core.events.type.v1~" }
  ]
}`}
        />
        <p className='mt-4 text-slate-600 dark:text-slate-400'>
          Local JSON Pointer references (e.g., <code>"$ref": "#/$defs/Foo"</code>)
          remain valid. The <code>gts://</code> recommendation applies only when{' '}
          <code>$ref</code> targets a GTS Type Identifier.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Implementation Notes
        </h2>
        <ul className='list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300'>
          <li>
            When <code>$id</code> or <code>$ref</code> starts with{' '}
            <code>gts://</code>, implementations should trim the prefix and treat
            the remainder as the canonical GTS identifier
          </li>
          <li>
            The post-<code>gts://</code> content must parse as a valid GTS
            identifier with no wildcards
          </li>
          <li>
            Wildcards and other special tokens are not permitted in GTS Type
            Identifiers
          </li>
        </ul>
      </>
    ),
  },

  'schema-traits': {
    id: 'schema-traits',
    title: 'Schema Traits',
    description: 'Semantic annotations for system behavior using x-gts-traits.',
    prev: { title: 'JSON Schema Conventions', path: '/docs/json-schema-conventions' },
    next: { title: 'Schema Modifiers', path: '/docs/schema-modifiers' },
    content: (
      <>
        <p className='mb-6'>
          A <strong>schema trait</strong> is a semantic annotation attached to a
          GTS Type Schema that describes system behavior for processing instances
          of that type. Traits are not part of the object data model — they
          configure cross-cutting concerns.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Common Trait Use Cases
        </h2>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Retention rules</strong> — how long instances are kept (e.g.,
            object TTL)
          </li>
          <li>
            <strong>Processing directives</strong> — how attributes should be
            handled (e.g., PII masking, indexing hints)
          </li>
          <li>
            <strong>Association links</strong> — linking schemas to related
            entities (e.g., associating an event type with its topic/stream)
          </li>
        </ul>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Keywords
        </h2>
        <div className='overflow-x-auto mb-8'>
          <table className='w-full border-collapse bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm text-sm'>
            <thead>
              <tr className='bg-slate-100 dark:bg-slate-800'>
                <th className='p-3 text-left font-semibold'>Keyword</th>
                <th className='p-3 text-left font-semibold'>Purpose</th>
                <th className='p-3 text-left font-semibold'>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3 font-mono text-sm'>x-gts-traits-schema</td>
                <td className='p-3'>
                  Defines the shape of the trait (property names, types,
                  constraints)
                </td>
                <td className='p-3'>Any schema in the <code>$id</code> chain</td>
              </tr>
              <tr className='border-t border-slate-200 dark:border-slate-700'>
                <td className='p-3 font-mono text-sm'>x-gts-traits</td>
                <td className='p-3'>
                  Provides concrete values for the trait properties
                </td>
                <td className='p-3'>Any schema in the chain; may coexist with x-gts-traits-schema</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Defining a Trait Schema
        </h2>
        <CodeBlock
          language='json'
          title='Base schema with trait definition'
          code={`{
  "$id": "gts://gts.x.core.events.type.v1~",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "x-gts-traits-schema": {
    "type": "object",
    "properties": {
      "topicRef": {
        "description": "GTS ID of the topic where events are published",
        "type": "string",
        "default": "gts.x.core.events.topic.v1~x.core._.default.v1"
      },
      "retention": {
        "description": "ISO 8601 duration for event retention",
        "type": "string",
        "default": "P30D"
      }
    }
  },
  "properties": { ... }
}`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Providing Trait Values
        </h2>
        <CodeBlock
          language='json'
          title='Derived schema with trait values'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.events.type.v1~x.commerce.orders.order_placed.v1~",
  "allOf": [
    { "$ref": "gts://gts.x.core.events.type.v1~" }
  ],
  "x-gts-traits": {
    "topicRef": "gts.x.core.events.topic.v1~x.commerce._.orders.v1",
    "retention": "P90D"
  }
}`}
        />

        <div className='bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900 rounded-lg p-6 my-8'>
          <h3 className='text-brand-800 dark:text-brand-300 font-bold mb-2'>
            Keyword Placement
          </h3>
          <p className='text-brand-900 dark:text-brand-100'>
            Both <code>x-gts-traits-schema</code> and <code>x-gts-traits</code> MUST
            appear at the <strong>top level</strong> of the GTS Type Schema
            document, adjacent to <code>$id</code> and <code>$schema</code> — NOT
            nested inside an <code>allOf</code> entry or any other subschema.
          </p>
        </div>

        <p className='mb-6 text-sm text-slate-600 dark:text-slate-400'>
          The registry composes every <code>x-gts-traits-schema</code> declaration
          along the chained <code>$id</code> using JSON Schema <code>allOf</code>.
          It merges <code>x-gts-traits</code> values from the root to the leaf using
          JSON Merge Patch semantics. Defaults are materialized before completeness
          checking; <code>const</code> belongs in the trait schema when a value must
          be locked across descendants. Non-abstract types must satisfy the effective
          trait schema, while abstract types may leave required trait values for a
          descendant to resolve.
        </p>
      </>
    ),
  },

  'schema-modifiers': {
    id: 'schema-modifiers',
    title: 'Schema Modifiers',
    description: 'Control derivation with x-gts-final and x-gts-abstract.',
    prev: { title: 'Schema Traits', path: '/docs/schema-traits' },
    next: { title: 'GTS References', path: '/docs/gts-references' },
    content: (
      <>
        <p className='mb-6'>
          GTS provides two schema modifiers to control type derivation and
          instantiation behavior.
        </p>

        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800'>
            <h3 className='font-bold text-lg text-red-800 dark:text-red-200 mb-3'>
              x-gts-final
            </h3>
            <p className='text-sm text-red-700 dark:text-red-300 mb-3'>
              Prohibits further derivation from this type.
            </p>
            <CodeBlock
              language='json'
              code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.config.v1~",
  "x-gts-final": true,
  ...
}`}
            />
            <p className='text-xs text-red-600 dark:text-red-400 mt-2'>
              Any attempt to derive from a final type will fail validation.
            </p>
          </div>

          <div className='bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800'>
            <h3 className='font-bold text-lg text-purple-800 dark:text-purple-200 mb-3'>
              x-gts-abstract
            </h3>
            <p className='text-sm text-purple-700 dark:text-purple-300 mb-3'>
              Requires instances to use a concrete derived type.
            </p>
            <CodeBlock
              language='json'
              code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.events.type.v1~",
  "x-gts-abstract": true,
  ...
}`}
            />
            <p className='text-xs text-purple-600 dark:text-purple-400 mt-2'>
              Instances cannot directly reference an abstract type.
            </p>
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Semantics
        </h2>

        <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>
          x-gts-final Semantics
        </h3>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            When validating derived types (OP#12), if any base in the chain is
            marked <code>x-gts-final: true</code>, validation MUST fail
          </li>
          <li>
            Use this to prevent extension of types that should remain stable
          </li>
        </ul>

        <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>
          x-gts-abstract Semantics
        </h3>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            When validating instances (OP#6), if the rightmost type in the chain is
            marked <code>x-gts-abstract: true</code>, validation MUST fail
          </li>
          <li>
            Abstract types cannot have direct instances (well-known or anonymous)
          </li>
          <li>
            Instances must reference a concrete (non-abstract) derived type
          </li>
          <li>
            For trait completeness checking, abstract types skip the completeness
            check — descendants are expected to close any unresolved required traits
          </li>
          <li>
            Both modifiers accept boolean values; an absent or false modifier has no
            effect. A schema MUST NOT set both <code>x-gts-final: true</code> and
            <code>x-gts-abstract: true</code>.
          </li>
          <li>
            Finality and abstractness do not propagate automatically to descendants:
            a derived type is concrete by default unless it declares itself abstract.
          </li>
        </ul>

        <div className='bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800'>
          <h4 className='font-bold text-amber-800 dark:text-amber-200 mb-2'>
            Keyword Placement
          </h4>
          <p className='text-sm text-amber-700 dark:text-amber-300'>
            Like trait keywords, <code>x-gts-final</code> and{' '}
            <code>x-gts-abstract</code> MUST appear at the top level of the GTS
            Type Schema document. A misplaced occurrence MUST be rejected.
          </p>
        </div>
      </>
    ),
  },

  'gts-references': {
    id: 'gts-references',
    title: 'GTS References',
    description: 'Using x-gts-ref to declare GTS entity references.',
    prev: { title: 'Schema Modifiers', path: '/docs/schema-modifiers' },
    next: { title: 'Query Language', path: '/docs/query-language' },
    content: (
      <>
        <p className='mb-6'>
          Use <code>x-gts-ref</code> in GTS schemas to declare that a string field
          is a GTS entity reference, not an arbitrary string. Validators must
          enforce this.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Allowed Values
        </h2>

        <div className='space-y-4 mb-8'>
          <div className='border-l-4 border-brand-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              GTS Identifier Pattern
            </h3>
            <CodeBlock code={`"x-gts-ref": "gts.*"`} language='json' />
            <p className='text-slate-600 dark:text-slate-400 text-sm mt-2'>
              Field must be a valid GTS identifier. Optionally resolve against a
              registry if available.
            </p>
          </div>

          <div className='border-l-4 border-blue-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              Self-Reference
            </h3>
            <CodeBlock code={`"x-gts-ref": "/$id"`} language='json' />
            <p className='text-slate-600 dark:text-slate-400 text-sm mt-2'>
              Relative self-reference; field value must equal the current schema's{' '}
              <code>$id</code> without the <code>gts://</code> prefix.
            </p>
          </div>

          <div className='border-l-4 border-emerald-500 pl-4 py-2'>
            <h3 className='font-bold text-lg text-slate-900 dark:text-white mb-2'>
              Specific Type Prefix
            </h3>
            <CodeBlock
              code={`"x-gts-ref": "gts.x.core.events.topic.v1~"`}
              language='json'
            />
            <p className='text-slate-600 dark:text-slate-400 text-sm mt-2'>
              A literal GTS prefix beyond the normative <code>gts.*</code> form is
              an implementation extension. If supported, the field must be a valid
              GTS identifier beginning with the specified prefix and the behavior
              should be documented.
            </p>
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Example Usage
        </h2>
        <CodeBlock
          language='json'
          title='Schema with x-gts-ref'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.events.type.v1~",
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "x-gts-ref": "/$id"
    },
    "topicRef": {
      "type": "string",
      "x-gts-ref": "gts.x.core.events.topic.v1~"
    }
  }
}`}
        />
      </>
    ),
  },

  // ============================================================================
  // RUNTIME & OPERATIONS
  // ============================================================================
  'wildcard-patterns': {
    id: 'wildcard-patterns',
    title: 'Wildcard Patterns',
    description: 'Using wildcards for policy scopes and identifier matching.',
    prev: { title: 'Access Control', path: '/docs/access-control' },
    next: { title: 'Core Operations', path: '/docs/core-operations' },
    content: (
      <>
        <p className='mb-6'>
          Wildcards (<code>*</code>) enable policy scopes that cover families of
          identifiers rather than single, exact IDs. This is useful in RBAC/ABAC
          engines and relationship-based systems.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Wildcard Examples
        </h2>
        <CodeBlock
          code={`# Grants access to all audit events from vendor 'xyz'
gts.x.core.events.type.v1~x.core._.audit_event.v1~xyz.*

# Query predicates use exact values; apply wildcard matching separately
# in the policy pattern rather than embedding '*' in the query
gts.x.ui.left_menu.menu_item.v1[screen_type="gts.x.ui.core_ui.screens.v1~abc.home.v1"]

# Match all types in a package
gts.vendor.package.*

# Match all derived types under a base
gts.x.core.events.type.v1~*`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Matching Semantics
        </h2>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Implicit derived-type coverage:</strong> Granting access to a
            base GTS Type Identifier without an explicit wildcard (e.g.,{' '}
            <code>gts.a.b.c.d.v1~</code>) SHOULD be treated as an implicit grant to
            all derived types and instances under that base type
          </li>
          <li>
            <strong>Segment-wise prefixing:</strong> The <code>*</code> wildcard
            matches any valid content of the target segment and its suffix hierarchy
          </li>
          <li>
            <strong>Chain awareness:</strong> Patterns may target the base segment,
            derived segments, or instance tail
          </li>
          <li>
            <strong>Minor version semantics:</strong> Patterns without minor
            versions (e.g., <code>gts.vendor.pkg.ns.type.v1~*</code>) match
            candidates with any minor version of that major version
          </li>
          <li>
            A wildcard pattern MUST NOT be combined with an attribute selector{' '}
            (<code>@</code>) or query clause (<code>[]</code>). Policy engines may
            define additional evaluation behavior.
          </li>
        </ul>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Matching Examples
        </h2>
        <p className='mb-4'>
          Given candidate: <code>gts.a.b.c.d.v1~w.x.y.z.v1</code>
        </p>
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800'>
            <h4 className='font-semibold text-emerald-800 dark:text-emerald-200 mb-2'>
              SHOULD Match
            </h4>
            <ul className='text-sm text-emerald-700 dark:text-emerald-300 space-y-1 font-mono'>
              <li>gts.a.b.c.d.v1~</li>
              <li>gts.a.b.c.d.v1~*</li>
              <li>gts.a.b.c.d.v1~w.*</li>
            </ul>
          </div>
          <div className='bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800'>
            <h4 className='font-semibold text-red-800 dark:text-red-200 mb-2'>
              SHOULD NOT Match
            </h4>
            <ul className='text-sm text-red-700 dark:text-red-300 space-y-1 font-mono'>
              <li>gts.a.b.c.d.v1~x.*</li>
              <li>gts.a.b.c.d.v2~*</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },

  // ============================================================================
  // IMPLEMENTATION
  // ============================================================================
  'core-operations': {
    id: 'core-operations',
    title: 'Core Operations',
    description: 'The 13 standard GTS operations (OP#1-OP#13).',
    prev: { title: 'Wildcard Patterns', path: '/docs/wildcard-patterns' },
    next: { title: 'GTS Registry', path: '/docs/gts-registry' },
    content: (
      <>
        <p className='mb-6'>
          The v0.13 reference recommendations describe 13 core operations for
          working with GTS identifiers and schemas. Implementations may expose them
          through different APIs; the operation recommendations are not themselves
          a universal transport or endpoint contract.
        </p>

        <div className='space-y-4'>
          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#1 - ID Validation
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Verify identifier syntax matches the GTS format.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#2 - ID Extraction
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Extract identifiers from JSON objects or JSON Schema documents.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#3 - ID Parsing
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Decompose identifiers into constituent parts (vendor, package,
              namespace, type, version).
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#4 - ID Pattern Matching
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Match identifiers against patterns containing wildcards.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#5 - ID to UUID Mapping
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Generate deterministic UUIDs (v5) from GTS identifiers.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#6 - Schema Validation
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Validate object instances against their corresponding schemas. If the
              rightmost type is marked <code>x-gts-abstract: true</code>, validation
              MUST fail.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#7 - Relationship Resolution
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Load schemas and instances, resolve inter-dependencies, and detect
              broken references.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#8 - Type Schema Evolution Compatibility
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Compare two definitions of one type identity and report compatibility
              verdict (<code>compatible</code>, <code>incompatible</code>, or{' '}
              <code>unknown</code>) for backward, forward, and full relations.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#9 - Version Casting
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Transform instances between compatible MINOR versions.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#10 - Query Execution
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Filter identifier collections using the GTS query language.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#11 - Attribute Access
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Retrieve property values and metadata using the attribute selector (
              <code>@</code>).
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#12 - Type Derivation Validation
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Validate that a derived type correctly extends its base chain. If any
              base is marked <code>x-gts-final: true</code>, validation MUST fail.
            </p>
          </div>

          <div className='border border-slate-200 dark:border-slate-700 rounded-lg p-4'>
            <h3 className='font-bold text-slate-900 dark:text-white mb-1'>
              OP#13 - Schema Traits Validation
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Validate schema traits (<code>x-gts-traits-schema</code> /{' '}
              <code>x-gts-traits</code>) including completeness checking for
              non-abstract types.
            </p>
          </div>
        </div>
      </>
    ),
  },

  'gts-registry': {
    id: 'gts-registry',
    title: 'GTS Registry',
    description: 'The critical infrastructure component for type safety.',
    prev: { title: 'Core Operations', path: '/docs/core-operations' },
    next: { title: 'Best Practices', path: '/docs/best-practices' },
    content: (
      <>
        <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8'>
          <h3 className='text-red-800 dark:text-red-200 font-bold mb-2'>
            Critical Implementation Requirement
          </h3>
          <p className='text-red-700 dark:text-red-300'>
            The architectural guarantees of GTS — particularly type safety across
            inheritance chains and safe minor version evolution — depend entirely on
            a stateful <strong>GTS Registry</strong> component.
          </p>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Registry Capabilities
        </h2>
        <p className='mb-4'>
          Production systems MUST implement or integrate a registry capable of:
        </p>

        <ol className='list-decimal pl-6 space-y-3 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Storing and indexing</strong> registered GTS Type Schemas by
            their GTS Type Identifiers and well-known GTS Instances by their GTS
            Instance Identifiers
          </li>
          <li>
            <strong>Validating compatibility</strong> of each successive schema
            definition against its preceding definition before publication
          </li>
          <li>
            <strong>Enforcing inheritance constraints</strong> to ensure derived
            types remain compatible with their base types
          </li>
          <li>
            <strong>Rejecting incompatible changes</strong> that violate the
            declared compatibility mode (backward/forward/full)
          </li>
          <li>
            <strong>Providing GTS Type resolution</strong> for validation, casting,
            and relationship resolution operations
          </li>
        </ol>

        <div className='bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800'>
          <p className='text-sm text-amber-700 dark:text-amber-300'>
            Without a registry performing rigorous type compatibility validation
            (including schema diffing where applicable), the type safety guarantees
            of GTS cannot be maintained. Implementations should treat the registry
            as a <strong>critical infrastructure component</strong>, similar to a
            database or message broker.
          </p>
        </div>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Reference Implementations
        </h2>
        <ul className='list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300'>
          <li>
            <a
              href='https://github.com/GlobalTypeSystem/gts-python'
              className='text-brand-600 dark:text-brand-400 hover:underline'
            >
              gts-python
            </a>{' '}
            — Python reference implementation
          </li>
          <li>
            <a
              href='https://github.com/GlobalTypeSystem/gts-go'
              className='text-brand-600 dark:text-brand-400 hover:underline'
            >
              gts-go
            </a>{' '}
            — Go reference implementation
          </li>
          <li>
            <a
              href='https://github.com/GlobalTypeSystem/gts-rust'
              className='text-brand-600 dark:text-brand-400 hover:underline'
            >
              gts-rust
            </a>{' '}
            — Rust reference implementation
          </li>
        </ul>
      </>
    ),
  },

  // ============================================================================
  // USE CASES
  // ============================================================================
  'use-case-platforms': {
    id: 'use-case-platforms',
    title: 'Platform Ecosystems',
    description: 'GTS for multi-vendor platforms and plugin architectures.',
    prev: { title: 'Best Practices', path: '/docs/best-practices' },
    next: { title: 'AI & MCP Contracts', path: '/docs/use-case-ai' },
    content: (
      <>
        <p className='mb-6'>
          GTS provides concrete, production-ready capabilities for platform vendors
          and service providers integrating multiple third-party services under a
          single control plane.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Type Safety and Evolution
        </h2>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Automated compatibility checking:</strong> Validate schema
            changes against backward/forward/full compatibility rules before
            deployment
          </li>
          <li>
            <strong>Safe schema evolution:</strong> Combine schema compatibility
            checks with explicit producer and tolerant-reader contracts
          </li>
          <li>
            <strong>Version casting:</strong> Automatically upcast/downcast data
            between minor versions
          </li>
          <li>
            <strong>Breaking change detection:</strong> Prevent accidental breaking
            changes through automated validation in CI/CD pipelines
          </li>
        </ul>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Multi-Vendor Extensibility
        </h2>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Plugin architectures:</strong> Allow third-party vendors to
            extend platform base types while maintaining compatibility guarantees
          </li>
          <li>
            <strong>Hybrid storage:</strong> Store common fields in indexed columns,
            vendor-specific extensions in JSONB — no schema migrations needed
          </li>
          <li>
            <strong>Vendor isolation:</strong> Use GTS chains to track data
            provenance and enforce vendors' data boundaries
          </li>
          <li>
            <strong>Zero-downtime extensions:</strong> Register new derived types
            without altering existing tables or restarting services
          </li>
        </ul>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Access Control and Security
        </h2>
        <ul className='list-disc pl-6 space-y-2 mb-6 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Wildcard-based policies:</strong> Grant permissions using
            patterns like <code>gts.vendor.package.*</code> instead of maintaining
            explicit lists
          </li>
          <li>
            <strong>Attribute-based filtering:</strong> Combine GTS identifiers with
            predicates for fine-grained access control
          </li>
          <li>
            <strong>Chain-aware authorization:</strong> Restrict access to specific
            vendor extensions while allowing base type access
          </li>
          <li>
            <strong>Audit trails:</strong> Log GTS identifiers for complete
            traceability of data access and schema usage
          </li>
        </ul>
      </>
    ),
  },

  'use-case-ai': {
    id: 'use-case-ai',
    title: 'AI & MCP Contracts',
    description: 'GTS for AI/ML artifacts and Model Context Protocol.',
    prev: { title: 'Platform Ecosystems', path: '/docs/use-case-platforms' },
    next: { title: 'Data Systems', path: '/docs/use-case-data' },
    content: (
      <>
        <p className='mb-6'>
          GTS provides a structured way to identify and version AI/ML artifacts,
          including Model Context Protocol (MCP) tool declarations, prompt
          templates, and model metadata.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          MCP Tool Schemas
        </h2>
        <p className='mb-4'>
          Define tool contracts that AI agents can discover and invoke:
        </p>
        <CodeBlock
          language='json'
          title='MCP Tool Definition'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.mcp.tools.search.v1~",
  "title": "Search Tool",
  "type": "object",
  "properties": {
    "query": { "type": "string", "description": "Search query" },
    "limit": { "type": "integer", "default": 10 }
  },
  "required": ["query"]
}`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Prompt Templates
        </h2>
        <p className='mb-4'>
          Version and manage prompt templates with typed parameters:
        </p>
        <CodeBlock
          language='json'
          title='Prompt Template Schema'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.prompts.summarize.v1~",
  "title": "Summarization Prompt",
  "type": "object",
  "properties": {
    "content": { "type": "string" },
    "maxLength": { "type": "integer", "default": 200 },
    "style": {
      "type": "string",
      "enum": ["bullet", "paragraph", "tldr"]
    }
  },
  "required": ["content"]
}`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Custom UI Elements in Chat
        </h2>
        <p className='mb-4'>
          Define schemas for custom UI components rendered in chat interfaces:
        </p>
        <CodeBlock
          language='json'
          title='Chat UI Component Schema'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.ui.chat.card.v1~",
  "title": "Chat Card Component",
  "type": "object",
  "properties": {
    "title": { "type": "string" },
    "description": { "type": "string" },
    "actions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "label": { "type": "string" },
          "action": { "type": "string" }
        }
      }
    }
  }
}`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Benefits for AI Systems
        </h2>
        <ul className='list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Tool discovery:</strong> Agents can query the registry for
            available tools by pattern
          </li>
          <li>
            <strong>Version compatibility:</strong> Ensure prompts and tools evolve
            safely across model updates
          </li>
          <li>
            <strong>Multi-vendor tools:</strong> Different vendors can provide tools
            that extend a common base contract
          </li>
          <li>
            <strong>Audit and compliance:</strong> Track which tool versions were
            used for each interaction
          </li>
        </ul>
      </>
    ),
  },

  'use-case-data': {
    id: 'use-case-data',
    title: 'Data Systems',
    description: 'GTS for event-driven architectures and data pipelines.',
    prev: { title: 'AI & MCP Contracts', path: '/docs/use-case-ai' },
    next: { title: 'Comparison', path: '/docs/comparison' },
    content: (
      <>
        <p className='mb-6'>
          GTS excels in event-driven architectures where multiple producers and
          consumers need to agree on data contracts while evolving independently.
        </p>

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Multi-Vendor Event Platform Example
        </h2>
        <p className='mb-4'>
          Consider a platform vendor (<code>X</code>) operating a multi-tenant event
          management system. Third-party vendor (<code>ABC</code>) needs to emit
          custom audit events.
        </p>

        <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>
          1. Base Event Schema (Platform)
        </h3>
        <CodeBlock
          language='json'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.events.type.v1~",
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "type": { "type": "string" },
    "timestamp": { "type": "integer" },
    "payload": { "type": "object", "additionalProperties": true }
  },
  "required": ["id", "type", "timestamp", "payload"],
  "additionalProperties": false
}`}
        />

        <h3 className='text-lg font-semibold mb-3 mt-6 text-slate-900 dark:text-white'>
          2. Audit Event Schema (Platform)
        </h3>
        <CodeBlock
          language='json'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.events.type.v1~x.core.audit.event.v1~",
  "allOf": [
    { "$ref": "gts://gts.x.core.events.type.v1~" },
    {
      "properties": {
        "payload": {
          "properties": {
            "user_id": { "type": "string" },
            "ip_address": { "type": "string" },
            "data": { "type": "object" }
          },
          "required": ["user_id", "ip_address", "data"]
        }
      }
    }
  ]
}`}
        />

        <h3 className='text-lg font-semibold mb-3 mt-6 text-slate-900 dark:text-white'>
          3. Vendor-Specific Event (Third-Party)
        </h3>
        <CodeBlock
          language='json'
          code={`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "gts://gts.x.core.events.type.v1~x.core.audit.event.v1~abc.app.store.purchase_audit.v1~",
  "allOf": [
    { "$ref": "gts://gts.x.core.events.type.v1~x.core.audit.event.v1~" },
    {
      "properties": {
        "payload": {
          "properties": {
            "data": {
              "properties": {
                "purchase_id": { "type": "string" },
                "amount": { "type": "number" }
              },
              "required": ["purchase_id", "amount"]
            }
          }
        }
      }
    }
  ]
}`}
        />

        <h2 className='text-2xl font-bold mb-4 mt-8 text-slate-900 dark:text-white'>
          Platform Processing
        </h2>
        <ol className='list-decimal pl-6 space-y-2 text-slate-700 dark:text-slate-300'>
          <li>
            <strong>Schema Resolution:</strong> Parse the type chain to identify the
            full inheritance
          </li>
          <li>
            <strong>Validation:</strong> Validate against the most specific schema,
            which ensures conformance to all base types
          </li>
          <li>
            <strong>Authorization:</strong> Check if the producer is authorized for{' '}
            <code>gts.x.core.events.type.v1~x.core.audit.event.v1~abc.*</code>
          </li>
          <li>
            <strong>Routing:</strong> Use the chain to route events to appropriate
            handlers
          </li>
        </ol>
      </>
    ),
  },
};
