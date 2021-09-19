import {React, useState, useEffect} from 'react';
import '../styles/Sidebar.css';
import PeopleService from "../endpoints/people";
import {LoadingIndicator} from "./LoadingIndicator"

const peopleService = new PeopleService();

export const Sidebar = () =>  {
    
    const [people, setPeople] = useState([])
    const [query, setQuery] = useState('')

    async function getPeople() {
        try {
       
          const response = await peopleService.getPeople(query)
          console.log(response)
          setPeople(people.concat(response.results))
          
        } catch (e) {
          // console.log(e);
        }
    }

    function renderLoading(){
        if(people.length === 0)
           return <LoadingIndicator/>
        return null
     }

    useEffect(() => {
        getPeople()
    }, []);

    return(
        <div className="Sidebar">
            {renderLoading()}
            {people.map(person => (
                <p key={person.id}>{person.name}</p>       
            ))}
        </div>
    )
}
