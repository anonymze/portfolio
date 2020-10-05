module.exports = {
  // important: true,
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/*.jsx'
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
  // ...
}