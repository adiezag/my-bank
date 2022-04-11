import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Debits() {
    const [debits, setDebits] = useState([])
    useEffect(()=> {
        axios.get('https://moj-api.herokuapp.com/debits')
        .then(response=>{
            console.log(response)
            setDebits(response.data )
        })
        .catch(error=> {
        console.log(error)
        })
    }, [])
    return (
        <div>
            <h6>{debits.map(post => (
                    <tr>
                        <td>{post.id.substring(0,20)}</td>
                        <td>{post.description}</td>
                        <td>${post.amount}</td>
                        <td>{post.date.substring(0,10)}</td>
                    </tr>
            ))}</h6>
        </div>
    )
}

export default Debits