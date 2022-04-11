import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Credits() {
    const [credits, setCredits] = useState([])
    useEffect(()=> {
        axios.get('https://moj-api.herokuapp.com/credits')
        .then(response=>{
            console.log(response)
            setCredits(response.data )
        })
        .catch(error=> {
        console.log(error)
        })
    }, [])
    return (
        <div>            
            <h6>{credits.map(post => (
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

export default Credits