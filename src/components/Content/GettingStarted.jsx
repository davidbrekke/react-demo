export default () => {
  return (
    <article id="getting-started">
      <h2>getting started</h2>
      <p className="">
        Start by creating a new project folder. Inside the folder create a file
        called 'package.json' and a folder named 'src' with two files,
        'index.js' and 'index.html'
      </p>
      <pre className="code">
        {`
    project-folder
          |
          |__ package.json
          |__ src
                |__ index.js
                |__ index.html
    `}
      </pre>
      <p>
        package.json is a file that holds relevant metadata about the project
      </p>
      <pre className="code">
        {`{
    "name": "react-demo",
    "private": true,
    "scripts": {
        "start": "webpack serve",
        "build": "NODE_ENV=production webpack",
        "deploy": "gh-pages -d dist",
    }
}`}
      </pre>
      <p>
        add some basic html to index.html to get started, we will come back to
        this later
      </p>
      <pre className="code">
        {`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="project description" />
        <meta name="keywords" content="webpack, javascript, react, babel" />
        <meta name="author" content="david magnuson" />
        <title>react demo</title>
      </head>
      <body>
      
      </body>
    </html>
`}
      </pre>
    </article>
  )
}
