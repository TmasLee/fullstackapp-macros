const renderFullPage = (initialMarkup,preloadedState) => {
  return `
  <!doctype html>
    <html>
      <head>
        <title>Macros Brah</title>
      </head>
      <body>
        <div id="root">${initialMarkup}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}

export default renderFullPage;