import './App.css';
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { PersonData } from "./components/PersonData"
import { useState } from 'react';
import useGetPerson from './hooks/getPerson'
import { LoadingIndicator } from './components/LoadingIndicator';
import { NoticeError } from './components/NoticeError';


function App() {

  const [personId, setPersonId] = useState(null)


  const {loading, error, person} = useGetPerson(personId)

  const renderPersonData = () => {
    if (person) {
      return <PersonData person={person} />
    }
    else{
      return <div className="PersonDataContainer">
        {loading && <LoadingIndicator/>}
        {error && <NoticeError/>}
      </div>
    } 
  }

  return (
    <div className="App">
      <Header />

        <Sidebar handleClick={setPersonId} />
        {renderPersonData()}

    </div>
  );
}

export default App;
