import {FetchAllPlayers} from "../ajaxHelpers"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AllPlayers = () => {
    const [ allPlayers, setAllPlayers ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getFetchAllPlayers = async () => {

            await FetchAllPlayers()

            setAllPlayers(await FetchAllPlayers())
        }
        
        getFetchAllPlayers()
        
    }, [])
    
    console.log(allPlayers)

    return(
        <div>
            {allPlayers.map((player, index) => {
                return (
                    <div key = {index}>
                        <h1>{player.name}</h1>
                        <img src={player.imageUrl}/>
                        <button onClick={()=> navigate(`/player/${player.id}`)}>See Details</button>
                        <button>Delete</button>

                    </div>
                )
            })}
        </div>
    )
}

export default AllPlayers