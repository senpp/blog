import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',

  extract: {
    include: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
    exclude: ['node_modules/**/*', '.git/**/*'],
  },

  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        gray: colors.trueGray,
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              textShadow: 'unset',
            },
            code: {
              textShadow: 'unset',
            },
            a: {
              textDecoration: 'none',
            },
            'a code': {
              textShadow: 'unset',
            },
            '.token': {
              background: 'unset',
            },
          },
        },

        light: {
          css: {
            color: colors.trueGray[200],
            '[class~="lead"]': {
              color: colors.white,
            },
            strong: {
              color: colors.white,
            },
            h1: {
              color: colors.white,
            },
            h2: {
              color: colors.white,
            },
            h3: {
              color: colors.white,
            },
            h4: {
              color: colors.white,
            },
            a: {
              color: colors.purple[400],
            },
            'ol > li::before': {
              color: colors.trueGray[200],
            },
            'ul > li::before': {
              backgroundColor: colors.trueGray[600],
            },
            hr: {
              borderColor: colors.trueGray[200],
            },
            blockquote: {
              color: colors.trueGray[200],
              borderLeftColor: colors.trueGray[600],
            },
            'figure figcaption': {
              color: colors.trueGray[400],
            },
            pre: {
              color: colors.trueGray[200],
              backgroundColor: colors.trueGray[800],
            },
            code: {
              color: colors.white,
            },
            'a code': {
              color: colors.white,
            },
            thead: {
              color: colors.white,
              borderBottomColor: colors.trueGray[400],
            },
            'tbody tr': {
              borderBottomColor: colors.trueGray[600],
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('windicss/plugin/typography')],
})
