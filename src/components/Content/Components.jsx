export default () => {
  return (
    <article id="components">
      <h2>components</h2>
      <p>
        Modern react components are just javascript functions that return some
        special html called jsx. jsx is just like normal html, but it lets us
        add javascript into the html so that we can do a lot of different things
      </p>
      <p>
        Inside the index.js file, create a function called App. This will be the
        main component that the rest of the rest of the components that are
        built will be added to. For now, inside this component, return an h1 tag
        with whatever you want inside
      </p>
      <pre className="code">
        {`
    function App( ) {
        return <h1>hello world!</h1>
      }
    `}
      </pre>
      <p>
        Now, replace the h1 tag in the render function with the App component
        that we just built, your index.js file should look something like this
      </p>
      <pre className="code">
        {`
    import { render } from "react-dom"

    render(<App />, document.getElementById("root"))
    
    function App( ) {
      return <h1>hello world!</h1>
    }
    `}
      </pre>
      <p>
        Next, lets create a header component to demonstrate how to add
        components into other components
      </p>
      <p>
        Create another function at the bottom of the index.js file and this time
        call it Header (ps. all component names need to start with a capital
        letter). Inside the function return a header element and some text
        within the header
      </p>
      <pre className="code">
        {`
    function Header( ) {
      return <header>THIS IS THE HEADER</header>
    }
    `}
      </pre>
      <p>
        Now add the header component inside of the app component (ps. components
        can only return a single element, use a fragment, {`<></>`}, to render
        multiple components if needed)
      </p>
      <pre className="code">
        {`
    function App( ) {
        return (
          <>
            <Header />
            <h1>hello world!</h1>
          </>
        )
      }
    `}
      </pre>
      <p>
        Now go back to the browser and you should see you header component on
        top of the page!
      </p>
    </article>
  )
}
