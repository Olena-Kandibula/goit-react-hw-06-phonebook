import './App.css';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>

      <Container>
        <ContactForm></ContactForm>
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
      <Container>
        <Counter />
      </Container>
    </div>
  );
}

export default App;
