export default () => {
  return (
    <article id="build">
      <h2>build</h2>
      <p>
        Now its time to build the project into a bundle that can be deployed. We
        can do this by running the 'build' script from the package.json file.
        This bundles all of our files and puts them into a new folder called
        'dist' in the root of our project that webpack creates for us
      </p>
      <pre className="code">
        {`
    yarn build
    `}
      </pre>
    </article>
  )
}
