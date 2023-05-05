/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e6b673',
        secondary: '#0d1017',
        neutral: '#bfbdb6',
      },
      fontFamily: {
        sans: ['var(--open-sans)', 'sans-serif'],
      },
      backgroundImage: {
        waves: 'url("/images/waves.svg")',
      },
      gap: {
        large: '32pt',
        medium: '16pt',
        small: '8pt',
      },
      typography: ({ theme }) => ({
        primary: {
          css: {
            '--tw-prose-body': theme('colors.neutral'),
            '--tw-prose-headings': theme('colors.neutral'),
            '--tw-prose-lead': theme('colors.neutral'),
            '--tw-prose-links': theme('colors.primary'),
            '--tw-prose-bold': theme('colors.neutral'),
            '--tw-prose-counters': theme('colors.primary'),
            '--tw-prose-bullets': theme('colors.primary'),
            '--tw-prose-hr': theme('colors.neutral'),
            '--tw-prose-quotes': theme('colors.neutral'),
            '--tw-prose-quote-borders': theme('colors.primary'),
            '--tw-prose-captions': theme('colors.primary'),
            '--tw-prose-code': theme('colors.primary'),
            '--tw-prose-pre-code': theme('colors.neutral'),
            '--tw-prose-pre-bg': theme('colors.transparent'),
            '--tw-prose-th-borders': theme('colors.neutral'),
            '--tw-prose-td-borders': theme('colors.neutral'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
