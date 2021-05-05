export default () => {
  return (
    <article id="deploy">
      <h2>deploy</h2>
      <p>
        To easily deploy the project, we can use github pages, a free service
        from github
      </p>
      <p>
        First, we need to create a repository on github and push our code to it.
        You can follow along{' '}
        <a href="https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line">
          here
        </a>{' '}
        if you do not know how to do that
      </p>
      <p>
        Now, to deploy the project we need to add another package to our
        develpoment dependencies, gh-pages
      </p>
      <pre className="code">
        {`
    yarn add --dev gh-pages
    `}
      </pre>
      <p>
        Finally, run the deploy script from the package.json file to publish the
        project
      </p>
      <pre className="code">
        {`
    yarn deploy
    `}
      </pre>
    </article>
  )
}
