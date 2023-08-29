export default function Section(props) {
    // área declarativa


    
    // área imperativa
    return (
        <section>
          <p><a href="/">Home Page</a></p>
          <button onClick={() => alert("Hello World")}>Click Me!</button>
          <img src={props.reactLogoProps} alt={props.altProps} />
        </section>
    )
}