import { useRef, useState, useCallback } from 'react';
import '../styles/Sidebar.css';

import { LoadingIndicator } from "./LoadingIndicator"
import useHandlePagination from '../hooks/handlePagination'




const SidebarContent = () => {

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
        <div >
            {console.log(loading, error)}
            {people.map((person, index) => {
                if (people.length === index + 1) {
                    return <div ref={lastPersonRef} key={person.id}>{person.name}</div>
                } else {
                    return <div key={person.id}>{person.name}</div>
                }
            })}
            <div>{loading && <LoadingIndicator />}</div>
            <div>{error && 'Error..'}</div>

        </div>
    )
}

export const Sidebar = () => {
    return (
        <div className="Sidebar">
            <SidebarContent />
        </div>
    )
}