import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        DEFAULT: '#64cc96'
      }
    },
    breakpoints: {
      'xs': '320px', // Extra small devices (e.g. phones)
      'sm': '480px', // Small devices (e.g. phones in landscape)
      'md': '768px', // Medium devices (e.g. tablets)
      'lg': '1024px', // Large devices (e.g. desktops)
      'xl': '1280px', // Extra large devices (e.g. large desktops)
      '2xl': '1536px', // 2x large devices (e.g. large monitors)
      '3xl': '1920px' // 3x large devices (e.g. ultra-wide monitors)
    }
  },
  rules: [
    [
      'font-linhai',
      {
        'font-family': 'linhai, "Microsoft YaHei", "SimHei", "Arial", sans-serif;'
      }
    ]
  ],
  shortcuts: [
    ['clickable', 'active:scale-97 transition-transform cursor-pointer'],

    ['pr', 'relative'],
    ['pa', 'absolute'],
    ['pf', 'fixed'],
    ['ps', 'sticky'],

    // position layout
    ['pxc', 'pa left-1/2 -translate-x-1/2'],
    ['pyc', 'pa top-1/2 -translate-y-1/2'],
    ['pcc', 'pxc pyc'],

    // flex layout
    ['fcc', 'flex justify-center items-center'],
    ['fccc', 'fcc flex-col'],
    ['fxc', 'flex justify-center'],
    ['fyc', 'flex items-center'],
    ['fs', 'flex justify-start'],
    ['fsc', 'flex justify-start items-center'],
    ['fse', 'flex justify-start items-end'],
    ['fe', 'flex justify-end'],
    ['fec', 'flex justify-end items-center'],
    ['fb', 'flex justify-between'],
    ['fbc', 'flex justify-between items-center'],
    ['fa', 'flex justify-around'],
    ['fac', 'flex justify-around items-center'],
    ['fw', 'flex justify-wrap'],
    ['fwr', 'flex justify-wrap-reverse']
  ],
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom'
      }
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        nunito: 'Nunito'
      },
      processors: createLocalFontProcessor()
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
