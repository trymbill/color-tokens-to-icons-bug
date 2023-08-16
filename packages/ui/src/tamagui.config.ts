import { createTamagui, createTokens } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens as tamaguiTokens } from '@tamagui/themes'
import { createMedia } from '@tamagui/react-native-media-driver'
import { red } from '@tamagui/colors'

import { animations } from './animations'

const headingFont = createInterFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

// Same color values as green, but with different names
const greenButWithADifferentName = {
  somethingotherthangreen1: 'hsl(136, 50.0%, 98.9%)',
  somethingotherthangreen2: 'hsl(138, 62.5%, 96.9%)',
  somethingotherthangreen3: 'hsl(139, 55.2%, 94.5%)',
  somethingotherthangreen4: 'hsl(140, 48.7%, 91.0%)',
  somethingotherthangreen5: 'hsl(141, 43.7%, 86.0%)',
  somethingotherthangreen6: 'hsl(143, 40.3%, 79.0%)',
  somethingotherthangreen7: 'hsl(146, 38.5%, 69.0%)',
  somethingotherthangreen8: 'hsl(151, 40.2%, 54.1%)',
  somethingotherthangreen9: 'hsl(151, 55.0%, 41.5%)',
  somethingotherthangreen10: 'hsl(152, 57.5%, 37.6%)',
  somethingotherthangreen11: 'hsl(153, 67.0%, 28.5%)',
  somethingotherthangreen12: 'hsl(155, 40.0%, 14.0%)',
}

const tokens = createTokens({
  ...tamaguiTokens,
  color: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#03565c',
    secondary: '#EAF369',
    hex1: '#03565c',
    hex2: '#EAF369',
    hsl1: 'hsl(185, 100%, 30%)',
    hsl2: 'hsl(358, 65.0%, 48.7%)',
    ...greenButWithADifferentName,
    ...red,
  },
})

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
