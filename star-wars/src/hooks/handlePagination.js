import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useHandlePagination(pageNumber) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [people, setPeople] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {

        setLoading(true)
        setError(false)

        axios({
            method: 'GET',
            url: 'http://localhost:8000/people/?page=' + pageNumber,
            params: { },

        }).then(res => {
        
            setPeople(prevPeople => {
                return [...prevPeople, ...res.data.results]
              })
              
            setLoading(false)
            setHasMore(res.data.next != null )
            
        }).catch(e => {

            setLoading(false)
            setError(true)

        })
    }, [pageNumber])

    return { loading, error, people, hasMore }
}