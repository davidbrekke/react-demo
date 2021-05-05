export default () => {
  return (
    <article id="dev-server">
      <h2>dev server</h2>
      <p>Congrats! 🎉 You've created a basic react project!</p>
      <p>
        To see the project in the browser you can run the 'start' script from
        the package.json file to run the dev server on
        <a href="http://localhost:8080">localhost:8080</a>
      </p>
      <pre className="code">
        {`
    yarn start
    `}
      </pre>
    </article>
  )
}
