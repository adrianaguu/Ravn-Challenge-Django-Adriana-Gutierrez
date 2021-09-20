import { useEffect, useState, useRef } from 'react'
import Api from '../api/api'



export default function useGetPerson(personId) {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [person, setPerson] = useState(null)

    const axois_config = new Api()

    const mountRef = useRef(false)

    useEffect(() => {

        console.log(mountRef.current)

        if (mountRef.current) {

            setPerson(null)
            setLoading(true)
            setError(false)

            axois_config.getInstance().get('person/' + personId).then(res => {

                setPerson(prevPerson => res.data)
                setLoading(false)

            }).catch(e => {

                setLoading(false)
                setError(true)

            })

        }
        else{
            mountRef.current = true 
        }


    }, [personId])

    return { loading, error, person }
}