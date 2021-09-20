import { useEffect, useState } from 'react'
import Api from '../api/api'


export default function useGetPerson(personId) {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [person, setPerson] = useState(null)

    const axois_config = new Api()

    useEffect(() => {

        setPerson(null)
        if (person) {
            setLoading(true)
        }
        setError(false)

        axois_config.getInstance().get('person/' + personId).then(res => {

            setPerson(prevPerson => res.data)
            setLoading(false)

        }).catch(e => {

            setLoading(false)
            if (person) {
                setError(true)
            }


        })
    }, [personId])

    return { loading, error, person }
}