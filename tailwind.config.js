module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme_bg: 'var(--background)',
        theme_bg_light: 'var(--background_light)',
        theme_color: 'var(--color)',
        primary: 'var(--primary)',
        primary_dark: 'var(--primary-dark)',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
