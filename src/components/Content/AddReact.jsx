export default () => {
  return (
    <article id="add-react">
      <h2>add react</h2>
      <p>
        React uses vanilla javascript to target an element from the html file
        and it puts all of the react code we write inside of that element
      </p>
      <p>Inside the body element put a 'main' element with an id of 'root'</p>
      <pre className="code">
        {`
    <main id="root"></main>
    `}
      </pre>
      <p>
        Now inside of the index.js file we will target the element we just
        created and render some text
      </p>
      <pre className="code">
        {`
    import { render } from 'react-dom'
    
    render(<h1>hello world!</h1>, document.getElementById('root'))
    
    `}
      </pre>
    </article>
  )
}
