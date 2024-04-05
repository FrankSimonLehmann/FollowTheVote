export default defineNuxtPlugin(nuxtApp => {
  const copyToClipboard = (text) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => console.log(`Copied: ${text}`),
        (err) => console.error(`Copy failed: ${err}`)
      );
    } else {
      console.warn("Clipboard API not available.");
    }
  };

  // Inject $copyToClipboard to be accessible in the app context and components
  nuxtApp.provide('copyToClipboard', copyToClipboard);
});
