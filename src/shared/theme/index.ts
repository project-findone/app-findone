import Constants from 'expo-constants';

export const Theme = {
  COLORS: {
    PRIMARY: '#1ABFCA',
    SECONDARY: '#008DAC',
    TERCIARY: '#00B7A1',
    BG: '#FFFFFF',
    BG_GRADIENT: 'linear-gradient(180deg, #0097A2 13.54%, #00D1B4 100%)',

    SUCESS: '#4FBC83',
    ALERT: '#DF7C7C',

    CAPTION_400: '#8D8D8D',
    CAPTION_500: '#7D7D7E',
    CAPTION_600: 'rgba(0,0,0,0.5)',
    CAPTION_700: '#494949',

    TITLE_800: 'rgba(0,0,0,0.6)',
    TITLE_900: 'rgba(0,0,0,1)',

    TEXT_INVERTED: '#FFFFFF',

    BUTTON: {
      BG_PRIMARY: 'linear-gradient(93.23deg, #06B6C0 0%, rgba(5, 208, 220, 0.85) 100%)',
      BG_SECONDARY: 'linear-gradient(93.23deg, #04C9AD 0%, #02E4C5 100%)',
    },
  },
  FONT_FAMILY: {
    REGULAR: 'Inter_400Regular',
    MEDIUM: 'Inter_500Medium',
    SEMIBOLD: 'Inter_600SemiBold',
    BOLD: 'Inter_700Bold',
  },
  FONT_SIZE: {
    XX_SM: '12px',
    X_SM: '14px',
    SM: '16px',
    MD: '20px',
    LG: '32px',
    X_LG: '36px',
  },
  STATUS_BAR: { HEIGHT: `${Constants.statusBarHeight}px` },
};

export interface ThemeTypes {
  COLORS: {
    PRIMARY: string,
    SECONDARY: string,
    TERCIARY: string,
    BG: string,
    BG_GRADIENT: string,

    SUCESS: string,
    ALERT: string,

    CAPTION_400: string,
    CAPTION_500: string,
    CAPTION_600: string,
    CAPTION_700: string,

    TITLE_800: string,
    TITLE_900: string,

    TEXT_INVERTED: string,

    BUTTON: {
      BG_PRIMARY: string,
      BG_SECONDARY: string,
    },
  },
  FONT_FAMILY: {
    REGULAR: string,
    MEDIUM: string,
    SEMIBOLD: string,
    BOLD: string,
  },
  FONT_SIZE: {
    XX_SM: string,
    X_SM: string,
    SM: string,
    MD: string,
    LG: string,
    X_LG: string,
  },
  STATUS_BAR: { HEIGHT: string },
}
