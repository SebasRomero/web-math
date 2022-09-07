import {getDocs, collection} from 'firebase/firestore/lite'
import {useEffect, useState} from 'react'
import {db} from '../firebase'

export const useFirestore = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        console.log('getData')
        getData()
    },[])

    const getData = async() => {
        try {
            setLoading(true)
            const querySnapshot = await getDocs(collection(db, "users"));
            const dataDb = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setData(dataDb)
        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        data,
        error, 
        loading,
    }
}