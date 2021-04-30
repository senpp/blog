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
            color: colors.coolGray[200],
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
              color: colors.coolGray[200],
            },
            'ul > li::before': {
              backgroundColor: colors.coolGray[600],
            },
            hr: {
              borderColor: colors.coolGray[200],
            },
            blockquote: {
              color: colors.coolGray[200],
              borderLeftColor: colors.coolGray[600],
            },
            'figure figcaption': {
              color: colors.coolGray[400],
            },
            pre: {
              color: colors.coolGray[200],
              backgroundColor: colors.coolGray[800],
            },
            code: {
              color: colors.white,
            },
            'a code': {
              color: colors.white,
            },
            thead: {
              color: colors.white,
              borderBottomColor: colors.coolGray[400],
            },
            'tbody tr': {
              borderBottomColor: colors.coolGray[600],
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
