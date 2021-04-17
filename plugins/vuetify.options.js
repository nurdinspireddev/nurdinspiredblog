import colors from 'vuetify/es5/util/colors'

export default {
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.lighten3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: colors.blue.lighten3,
        accent: colors.grey.darken3,
        secondary: colors.amber.lighten3,
        warning: colors.amber.darken4,
      },
    }
  }
}
