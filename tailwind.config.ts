import { createPlugin } from 'windy-radix-palette'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const palette = createPlugin()
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        grey: palette.alias('mauve'),
        greyA: palette.alias('mauveA'),
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          ...(palette.alias('purple') as Record<string, string>),
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        accentA: palette.alias('purpleA'),
        danger: palette.alias('tomato'),
        dangerA: palette.alias('tomatoA'),
        info: palette.alias('sky'),
        infoA: palette.alias('skyA'),
        success: palette.alias('green'),
        successA: palette.alias('greenA'),
        warning: palette.alias('amber'),
        warningA: palette.alias('amberA'),
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        1: 'var(--shadow-inner)',
        2: 'var(--shadow-sm)',
        3: 'var(--shadow-md)',
        4: 'var(--shadow-lg)',
        5: 'var(--shadow-xl)',
        6: 'var(--shadow-2xl)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [palette.plugin],
} satisfies Config
