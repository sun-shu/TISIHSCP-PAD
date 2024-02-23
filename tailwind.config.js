/** @type {} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/pages/**/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-D9': '#D9F0F2',
        black: '#323746',
        'gray-F6': '#F6F9FA',
        'gray-FA': '#FAFAFA',
        'gray-D8': '#D8D8D8',
        'gray-D8': '#D8D8D8',
        'red-FF': '#FF7144',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '28px',
        '3xl': '32px',
      },
      textColor: {
        'gray-5E': '#5E5E5E',
        'gray-97': '#979797',
        'gray-32': '#323746',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
