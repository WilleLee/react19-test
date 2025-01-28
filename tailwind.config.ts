import { join } from 'path';

import type { Config } from 'tailwindcss';

export default {
  content: [join(__dirname, 'apps/**/*.{js,ts,jsx,tsx,mdx}'), join(__dirname, 'packages/**/*.{js,ts,jsx,tsx,mdx}')],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
