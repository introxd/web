import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
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
      'font-nunito',
      {
        'font-family': 'Nunito-Medium, "Microsoft YaHei", "SimHei", "Arial", sans-serif;'
      }
    ],
    [
      'font-linhai',
      {
        'font-family': 'linhai, "Microsoft YaHei", "SimHei", "Arial", sans-serif;'
      }
    ]
  ],
  shortcuts: [
    ['clickable', 'active:scale-97 transition-transform cursor-pointer']
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),
    presetTypography()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
