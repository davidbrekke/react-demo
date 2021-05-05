export default () => {
  return (
    <article id="configure-babel">
      <h2>configure babel</h2>
      <p>
        In order for babel to transpile our code, it needs to be configured to
        use certain presets. In the root of the project, create a
        babel.config.js file and add the following
      </p>
      <pre className="code">
        {`
      module.exports = {
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }], /* dont need to import react when only using jsx */
        ],
      }
      `}
      </pre>
    </article>
  )
}
