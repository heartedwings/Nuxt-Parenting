module.exports = {
  mode: "jit",
  // Purgeオプションを設定することで使用したクラスのみビルド対象となり、ファイルサイズを小さくできます。
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 'カラー名': 'カラーコード'
        'dark-red': 'rgb(150, 50, 50)',
        'light-red': 'rgb(180, 98, 98)',
        'moka':'rgb(133, 110, 110)'
      },
    },
  },
  variants: {
    extend: {},
    visibility: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('tailwind-hamburgers'),
  ]
}
