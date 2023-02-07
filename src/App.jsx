import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Example from './Tests/Example2';
import '../src/App.css'

function App() {
  const data = (Example['formList'])
  return (
    <div className='App'>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
