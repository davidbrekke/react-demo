export default () => {
  return (
    <article id="dependencies">
      <h2>dependencies</h2>
      <p>Now we need to install some dependencies</p>
      <p>
        The only production dependencies needed are{' '}
        <a
          id="react-link"
          target="_blank"
          href="https://www.npmjs.com/package/react"
        >
          react
        </a>
        , the react.js library, and{' '}
        <a
          id="react-link"
          target="_blank"
          href="https://www.npmjs.com/package/react-dom"
        >
          react-dom
        </a>
        , a library to help react talk to the browser DOM
      </p>
      <pre className="code">
        {`
    yarn add react react-dom
    `}
      </pre>
      <p>
        Now we need some development dependencies to help us bundle all of our
        files into a few main files that we can deploy, we will use{' '}
        <a
          id="webpack-link"
          target="_blank"
          href="https://www.npmjs.com/package/webpack"
        >
          webpack
        </a>
        for that
      </p>
      <pre className="code">
        {`
    yarn add --dev webpack webpack-cli webpack-dev-server html-webpack-plugin
    `}
      </pre>
      <p>
        Next we need some more development dependencies to transpile our modern
        javascript syntax into older syntax so that our code can run on all
        types of browsers, we will use{' '}
        <a id="babel-link" target="_blank" href="https://babeljs.io">
          babel
        </a>
        for that
      </p>
      <pre className="code">
        {`
    yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
    `}
      </pre>
    </article>
  )
}
