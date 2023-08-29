import Cabecalho from "./components/Cabecalho";
import Section from "./components/Section";
import Footer from "./components/Footer";
import reactLogo from "./assets/react.svg"

export default function App() {

  const alt = "React logo"
  const lists = [<li>GitHub</li>, <li>Instagram</li>, <li>Linkedin</li>]

  return (
    <>
      <div className="container">
        <Cabecalho/>
        <Section reactLogoProps={reactLogo} altProps={alt} />
        <Footer listsProps={lists} />
      </div>
    </>
  )
}

// rfc
