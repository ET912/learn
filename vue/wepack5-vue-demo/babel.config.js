module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      // { useBuiltIns: 'entry', corejs: { version: 3 } }
    ]
    // "@babel/preset-react"
    // "babel-preset-typescript-vue3",
    // ["@vue/babel-preset-app"],
  ],
  plugins: ['@vue/babel-plugin-jsx', '@babel/plugin-transform-modules-commonjs']
}