import Header from "../Header/Header"
// import form from "../hooks/form"
import TODO from "../TODO/Todo.js"
import Footer from "../Footer/Footer"
export default function Main() {
  return (
    <div className="main">
    
        <Header/>
        {/* <Form/> */}
        <TODO/>
        <Footer/>
      </div>
  )
}