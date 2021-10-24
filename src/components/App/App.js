import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, TitleH1, TitleH2 } from './App.styled';

export default function App() {
  return (
    <Container>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      <ContactList />
    </Container>
  );
}
