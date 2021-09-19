import { useEffect, useState } from 'react'
import Api from '../api/api'


export default function useHandlePagination(pageNumber) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [people, setPeople] = useState([])
    const [hasMore, setHasMore] = useState(false)

    const axois_config = new Api()

    useEffect(() => {

        setLoading(true)
        setError(false)

        axois_config.getInstance().get('people/?page=' + pageNumber).then(res => {
        
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