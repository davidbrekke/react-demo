export default () => {
  return (
    <article id="getting-started">
      <h2>getting started</h2>
      <p className="">
        Start by creating a new folder with two files ( package.json and
        index.js ) and a src folder with one file ( index.html )
      </p>
      <p>
        package.json is a file that holds relevant metadata about this project
      </p>
      <pre className="code">
        {`{
    "name": "react-demo",
    "private": true,
    "scripts": {
        "start": "webpack serve",
        "build": "webpack"
    },
    "dependencies": {

    },
    "devDependencies": {

    }
}`}
      </pre>
    </article>
  )
}
