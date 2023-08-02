import { FetchSinglePlayer } from "../ajaxHelpers"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const SinglePlayer = () => {
    const [ singlePlayer, setSinglePlayer ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getFetchSinglePlayer = async () => {
            await FetchSinglePlayer(id)
            setSinglePlayer(await FetchSinglePlayer(id))

        }
        getFetchSinglePlayer()
    }, [])

    // console.log(singlePlayer)
    
    return (
        <div>
            <img src={singlePlayer.imageUrl}/>
            {/* <h1>{singlePlayer.name}</h1> */}
            {/* <h3>| {singlePlayer.breed} | {singlePlayer.status} status | Team {singlePlayer.team.name} |</h3> */}

        </div>
    )
}

export default SinglePlayer