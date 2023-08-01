import {fetchAllPlayers} from "../ajaxHelpers"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AllPlayers = () => {
    const [ allPlayers, setAllPlyers ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getFetchAllPlayers = async () => {

            await fetchAllPlayers()

            setAllPlyers(await fetchAllPlayers())
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