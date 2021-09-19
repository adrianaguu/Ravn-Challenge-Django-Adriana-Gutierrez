import { useRef, useState, useCallback } from 'react';
import '../styles/Sidebar.css';
import { Person } from './Person';
import { NoticeError } from './NoticeError';
import { LoadingIndicator } from "./LoadingIndicator"
import useHandlePagination from '../hooks/handlePagination'


export const Sidebar = (props) => {

    const [page, setPage] = useState(1)

    const { loading, error, people, hasMore } = useHandlePagination(page)

    const observer = useRef()
    const lastPersonRef = useCallback(node => {

        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])


    return (
        <div className="Sidebar">

            {people.map((person, index) => {
                const _person = <Person name={person.name} species={person.species} homeworld={person.homeworld} />
                if (people.length === index + 1) {
                    return <div ref={lastPersonRef} key={person.id} onClick={() => props.handleClick(person.id)}>
                        {_person}
                    </div>
                } else {
                    return <div key={person.id} onClick={() => props.handleClick(person.id)}>
                        {_person}
                    </div>
                }
            })}

            <div>{loading && <LoadingIndicator />}</div>
            <div>{error && <NoticeError />}</div>

        </div>
    )
}

