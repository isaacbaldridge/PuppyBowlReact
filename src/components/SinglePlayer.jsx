import { FetchSinglePlayer } from "../ajaxHelpers"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const SinglePlayer = () => {
    const [ singlePlayer, setSinglePlayer ] = useState({})
    const [ error, setError ] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getFetchSinglePlayer = async () => {
            try {
                await FetchSinglePlayer(id)
                setSinglePlayer(await FetchSinglePlayer(id))

            } catch (error) {
                setError(error)
            }

        }
        getFetchSinglePlayer()
    }, [])
    
    // console.log(singlePlayer.team.name)
    
    return (
        <div>
            {singlePlayer.team && (
            <div>
                <img src={singlePlayer.imageUrl}/>
                <h1>{singlePlayer.name}</h1>
                <h3>| {singlePlayer.breed} | {singlePlayer.status} status | Team {singlePlayer.team.name} |</h3>
            </div>
            )}
        </div>
    )
}

export default SinglePlayer