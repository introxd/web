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
    }
  },
  rules: [
    [
      'font-nunito',
      {
        'font-family': 'Nunito-Medium'
      }
    ],
    [
      'font-linhai',
      {
        'font-family': 'linhai'
      }
    ]
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
