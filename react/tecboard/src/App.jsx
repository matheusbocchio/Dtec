
import './App.css'

//function no react é componente
function FormularioDeEvento () {
  return (
    <form className='form-evento'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor=''>Qual o noome do evento?</label>
        <input type="text" id='nome' placeholder='Sumer dev hits'/>
      </fieldset>
    </form>
  )
}

function App() {
  

  return (
      <main>
        <header>
            <img src="/logo.png" alt="logo"></img>
        </header>

        <section>
            <img src="/banner.png" alt="banner principal"></img>
        </section>
        <FormularioDeEvento></FormularioDeEvento>
      </main>
  )
}

export default App
