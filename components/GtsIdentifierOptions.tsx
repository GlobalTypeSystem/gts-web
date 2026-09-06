import React from 'react';

// Token segment component for the bracketed anatomy layout
const TokenSegment: React.FC<{
  token: string;
  label: string;
  sublabel?: string;
  colorClass: string;
}> = ({ token, label, sublabel, colorClass }) => (
  <div className='group flex flex-col items-center px-0.5'>
    <span
      className={`whitespace-nowrap rounded px-1.5 py-0.5 font-mono text-xs font-medium transition-colors group-hover:bg-white/5 sm:text-sm ${colorClass}`}
    >
      {token}
    </span>
    <span
      className={`mt-1.5 h-2 w-full rounded-t border-l border-r border-t opacity-45 transition-opacity group-hover:opacity-100 ${colorClass.replace('text-', 'border-')}`}
    />
    <span className='mt-2 max-w-[10ch] text-center sm:max-w-[14ch]'>
      <em
        className={`block text-[10px] font-semibold not-italic tracking-wide sm:text-[11px] ${colorClass}`}
      >
        {label}
      </em>
      {sublabel && (
        <small className='mt-0.5 block text-[9px] leading-tight text-slate-500 dark:text-slate-400 sm:text-[10px]'>
          {sublabel}
        </small>
      )}
    </span>
  </div>
);

const Separator: React.FC<{ char?: string }> = ({ char = '.' }) => (
  <span className='self-start px-0 py-0.5 font-mono text-xs text-slate-500 dark:text-slate-400 sm:text-sm'>
    {char}
  </span>
);

// Token colors - blueish for types, greenish for instances
const COLORS = {
  dim: 'text-slate-500 dark:text-slate-400',
  // Blueish shades for Type/Schema tokens
  vendor: 'text-blue-400',
  package: 'text-blue-400',
  namespace: 'text-blue-400',
  name: 'text-blue-300',
  version: 'text-blue-400',
  pivot: 'text-blue-200',
  // Greenish shades for Instance tokens
  instVendor: 'text-teal-400',
  instPackage: 'text-emerald-400',
  instNamespace: 'text-green-400',
  instName: 'text-emerald-300',
  instVersion: 'text-emerald-300',
  // Type segment in instance identifier (still blueish)
  typeSegment: 'text-blue-400',
};

const TYPE_FORMAT =
  'gts.<VENDOR>.<PACKAGE>.<NAMESPACE>.<TYPE>.v<MAJOR>[.<MINOR>]~';
const INSTANCE_FORMAT =
  'gts.<T_VENDOR>.<T_PACKAGE>.<T_NAMESPACE>.<T_NAME>.v<MAJOR>[.<MINOR>]~<I_VENDOR>.<I_PACKAGE>.<I_NAMESPACE>.<I_NAME>.v<MAJOR>[.<MINOR>]';

const TYPE_EXAMPLES = [
  {
    value: 'gts.acme.billing.invoices.invoice.v1~',
    explanation:
      'The version 1 Invoice schema published by Acme in its billing package.',
  },
  {
    value: 'gts.acme.platform.events.topic.v2~',
    explanation: 'Version 2 of Acme Platform’s base event topics.',
  },
];

const INSTANCE_EXAMPLES = [
  {
    value:
      'gts.acme.billing.invoices.invoice.v1~acme.customer._.invoice_2026_0001.v1',
    explanation:
      'The statically named invoice_2026_0001 object, which conforms to the Invoice v1 schema.',
  },
  {
    value:
      'gts.acme.platform.events.topic.v2~fabricam.store.orders.topic.v1',
    explanation:
      'The statically named topic for Fabricam Store orders',
  },
];

const Code: React.FC<{ children: string; dark?: boolean }> = ({
  children,
  dark = false,
}) => (
  <code
    className={`block overflow-x-auto rounded-lg px-3 py-2 font-mono text-xs leading-relaxed sm:text-sm ${
      dark
        ? 'bg-slate-950/70 text-slate-100'
        : 'bg-slate-100 text-slate-800 dark:bg-slate-950/50 dark:text-slate-100'
    }`}
  >
    {children}
  </code>
);

const splitChainedIdentifier = (value: string) => {
  const splitIndex = value.indexOf('~');
  if (splitIndex === -1) {
    return { typePart: value, instancePart: '' };
  }

  return {
    typePart: value.slice(0, splitIndex + 1),
    instancePart: value.slice(splitIndex + 1),
  };
};

const ChainedInstanceCode: React.FC<{ value: string; inline?: boolean }> = ({
  value,
  inline = false,
}) => {
  const { typePart, instancePart } = splitChainedIdentifier(value);

  return (
    <code
      className={
        inline
          ? 'font-mono text-xs leading-relaxed'
          : 'block overflow-x-auto rounded-lg bg-slate-950/70 px-3 py-2 font-mono text-xs leading-relaxed sm:text-sm'
      }
    >
      <span
        className={
          inline ? 'text-blue-700 dark:text-blue-300' : 'text-blue-200'
        }
      >
        {typePart}
      </span>
      {instancePart ? (
        <span
          className={
            inline
              ? 'text-emerald-700 dark:text-emerald-300'
              : 'text-emerald-200'
          }
        >
          {instancePart}
        </span>
      ) : null}
    </code>
  );
};

export const GtsIdentifierFormat: React.FC = () => (
  <div className='mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50'>
    <div className='space-y-5'>
      <section>
        <div className='mb-2 flex flex-wrap items-center gap-2'>
          <span className='rounded-full bg-blue-500/15 px-2 py-1 font-mono text-[10px] font-semibold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300'>
            TYPE / SCHEMA
          </span>
          <span className='text-xs text-slate-500 dark:text-slate-400'>
            Ends with <code>~</code>
          </span>
        </div>
        <Code dark>{TYPE_FORMAT}</Code>
        <div className='mt-4 space-y-0'>
          {TYPE_EXAMPLES.map((example) => (
            <p
              key={example.value}
              className='font-mono text-xs leading-relaxed text-slate-700 dark:text-slate-300'
            >
              <code className='text-blue-700 dark:text-blue-300'>
                {example.value}
              </code>
              <span className='mx-2 text-slate-400 dark:text-slate-600'>—</span>
              <span className='font-sans text-slate-600 dark:text-slate-400'>
                {example.explanation}
              </span>
            </p>
          ))}
        </div>
      </section>

      <div className='border-t border-slate-200 dark:border-slate-700' />

      <section>
        <div className='mb-2 flex flex-wrap items-center gap-2'>
          <span className='rounded-full bg-emerald-500/15 px-2 py-1 font-mono text-[10px] font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300'>
            STATIC INSTANCE / OBJECT
          </span>
          <span className='text-xs text-slate-500 dark:text-slate-400'>
            No final <code>~</code>
          </span>
        </div>
        <ChainedInstanceCode value={INSTANCE_FORMAT} />
        <div className='mt-4 space-y-0'>
          {INSTANCE_EXAMPLES.map((example) => (
            <p
              key={example.value}
              className='font-mono text-xs leading-relaxed text-slate-700 dark:text-slate-300'
            >
              <ChainedInstanceCode value={example.value} inline />
              <span className='mx-2 text-slate-400 dark:text-slate-600'>—</span>
              <span className='font-sans text-slate-600 dark:text-slate-400'>
                {example.explanation}
              </span>
            </p>
          ))}
        </div>
      </section>
    </div>
  </div>
);

// Colored example code for Option 2
const ColoredTypeExample: React.FC<{ example: (typeof TYPE_EXAMPLES)[0] }> = ({
  example,
}) => {
  // Parse: gts.acme.billing.invoices.invoice.v1~
  const parts = example.value.match(
    /^(gts)\.([\w]+)\.([\w]+)\.([\w]+)\.([\w]+)\.(v[\d.]+)(~)$/
  );
  if (!parts) return <code>{example.value}</code>;
  const [, , vendor, pkg, ns, name, version, tilde] = parts;
  return (
    <code className='font-mono text-xs sm:text-sm'>
      <span className={COLORS.dim}>gts.</span>
      <span className={COLORS.vendor}>{vendor}</span>
      <span className={COLORS.dim}>.</span>
      <span className={COLORS.package}>{pkg}</span>
      <span className={COLORS.dim}>.</span>
      <span className={COLORS.namespace}>{ns}</span>
      <span className={COLORS.dim}>.</span>
      <span className={COLORS.name}>{name}</span>
      <span className={COLORS.dim}>.</span>
      <span className={COLORS.version}>{version}</span>
      <span className={COLORS.pivot}>{tilde}</span>
    </code>
  );
};

const ColoredInstanceExample: React.FC<{
  example: (typeof INSTANCE_EXAMPLES)[0];
}> = ({ example }) => {
  // Parse: gts.acme.billing.invoices.invoice.v1~acme.customer._.invoice_2026_0001.v1
  const parts = example.value.match(
    /^(gts)\.([\w.]+\.v[\d.]+)(~)([\w.]+\.v[\d.]+)$/
  );
  if (!parts) return <code>{example.value}</code>;
  const [, , typeSeg, tilde, instSeg] = parts;
  return (
    <code className='font-mono text-xs sm:text-sm'>
      <span className={COLORS.dim}>gts.</span>
      <span className={COLORS.typeSegment}>{typeSeg}</span>
      <span className={COLORS.pivot}>{tilde}</span>
      <span className={COLORS.instName}>{instSeg}</span>
    </code>
  );
};

export const GtsIdentifierFormatOption2: React.FC = () => (
  <div className='mt-5 rounded-xl p-0 shadow-sm'>
    <div className='space-y-8'>
      {/* Type / Schema block */}
      <section>
        <div className='mb-4 flex flex-wrap items-baseline gap-3'>
          <h3 className='text-base font-semibold text-slate-800 dark:text-slate-100'>
            Type, or schema GTS identifier
          </h3>
          <span className='font-mono text-xs text-slate-500 dark:text-slate-400'>
            ends with ~
          </span>
        </div>

        {/* Anatomy diagram */}
        <div className='overflow-x-auto rounded-xl border border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 px-5 py-6 sm:px-7 sm:py-8'>
          <div className='flex min-w-max items-start gap-0'>
            <div className='flex flex-col items-center px-0.5'>
              <span
                className={`whitespace-nowrap rounded px-1.5 py-0.5 font-mono text-xs font-medium sm:text-sm ${COLORS.dim}`}
              >
                gts
              </span>
            </div>
            <Separator />
            <TokenSegment
              token='<VENDOR>'
              label='Vendor'
              sublabel='Contract provider'
              colorClass={COLORS.vendor}
            />
            <Separator />
            <TokenSegment
              token='<PACKAGE>'
              label='Package'
              sublabel='Application scope'
              colorClass={COLORS.package}
            />
            <Separator />
            <TokenSegment
              token='<NAMESPACE>'
              label='Namespace'
              sublabel='Contract category'
              colorClass={COLORS.namespace}
            />
            <Separator />
            <TokenSegment
              token='<TYPE>'
              label='Type'
              sublabel='Schema name'
              colorClass={COLORS.name}
            />
            <Separator />
            <TokenSegment
              token='v<MAJOR>[.<MINOR>]'
              label='Version'
              sublabel='Compatible revision'
              colorClass={COLORS.version}
            />
            <TokenSegment
              token='~'
              label='Tilde'
              sublabel='Marks a type'
              colorClass={COLORS.pivot}
            />
          </div>

          {/* Examples */}
          <div className='mt-6 space-y-3 border-t border-slate-700/50 pt-5'>
            {TYPE_EXAMPLES.map((example) => (
              <div
                key={example.value}
                className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4'
              >
                <ColoredTypeExample example={example} />
                <p className='text-xs text-slate-400 sm:text-sm'>
                  {example.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Static Instance / Object block */}
      <section>
        <div className='mb-4 flex flex-wrap items-baseline gap-3'>
          <h3 className='text-base font-semibold text-slate-800 dark:text-slate-100'>
            Static instance, or object GTS identifier
          </h3>
          <span className='font-mono text-xs text-slate-500 dark:text-slate-400'>
            no final ~
          </span>
        </div>

        {/* Anatomy diagram */}
        <div className='overflow-x-auto rounded-xl border border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 px-5 py-6 sm:px-7 sm:py-8'>
          <div className='flex min-w-max items-start gap-0'>
            <div className='flex flex-col items-center px-0.5'>
              <span
                className={`whitespace-nowrap rounded px-1.5 py-0.5 font-mono text-xs font-medium sm:text-sm ${COLORS.dim}`}
              >
                gts.
              </span>
            </div>
            <TokenSegment
              token='<TYPE_IDENTIFIER>'
              label='Type segment'
              sublabel='The schema it conforms to'
              colorClass={COLORS.typeSegment}
            />
            <TokenSegment
              token='~'
              label='Join'
              sublabel='Type, then instance'
              colorClass={COLORS.pivot}
            />
            <TokenSegment
              token='<VENDOR>.<PACKAGE>.<NAMESPACE>.<NAME>.v<MAJOR>[.<MINOR>]'
              label='Instance segment'
              sublabel="The object's own name"
              colorClass={COLORS.instName}
            />
          </div>

          {/* Examples */}
          <div className='mt-6 space-y-3 border-t border-slate-700/50 pt-5'>
            {INSTANCE_EXAMPLES.map((example) => (
              <div
                key={example.value}
                className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4'
              >
                <ColoredInstanceExample example={example} />
                <p className='text-xs text-slate-400 sm:text-sm'>
                  {example.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
);
