/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary':       '#1D4ED8',
        'primary-dark':  '#1E40AF',
        'primary-light': '#EFF6FF',
        'primary-mid':   '#DBEAFE',
        'accent':        '#059669',
        'accent-light':  '#ECFDF5',
        'ink':           '#0F172A',
        'ink-secondary': '#475569',
        'surface':       '#F8FAFC',
        'border':        '#E2E8F0',
        'border-dark':   '#CBD5E1',
      },
      fontFamily: {
        'heading': ['Sora', 'sans-serif'],
        'body':    ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'label': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
      boxShadow: {
        'card':       '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.08), 0 2px 6px -2px rgb(0 0 0 / 0.05)',
        'nav':        '0 1px 0 0 #E2E8F0',
      },
    },
  },
  plugins: [],
};
