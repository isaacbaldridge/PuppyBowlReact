import { useState, useEffect } from "react"
import { FetchAllPlayers } from "../ajaxHelpers"
import AllPlayers from "./AllPlayers"

const NewPlayerform = ({setAllPlayers}) => {
    const [ newPuppy, setNewPuppy ] = useState("")
    const [ newBreed, setNewBreed ] = useState("")

    // useEffect(() => {
        // const getAddNewPlayer = async (e) => {
        //     // e.preventDefault()
        //     await AddNewPlayer(newPuppy, newBreed)
        // const allPlayers = await FetchAllPlayers()
        // AllPlayers(allPlayers)
        // NewPlayerform()
        // }
        // getAddNewPlayer()
        // }, [])

async function handleSubmit(e) {
    e.preventDefault()
    try {
        const response = await fetch(
            "https://fsa-puppy-bowl.herokuapp.com/api/2306-ftb-et-web-ft/players",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newPuppy,
                    breed: newBreed
                })
            }
            )
            const data = await response.json()
            console.log(data)

            const newAllPlayers = await FetchAllPlayers()
            console.log(newAllPlayers)
            setAllPlayers(newAllPlayers)
            return(newAllPlayers)
            // NewPlayerform()
            
        } catch (err) {
            console.log("error")
        }

}




        console.log(newPuppy, newBreed)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label name="newPuppy">Name your puppy: </label>
                <input value={newPuppy} onChange={(e) => setNewPuppy(e.target.value)}/>
                <label name="newBreed">Specify your puppy's breed: </label>
                <input value={newBreed} onChange={(e) => setNewBreed(e.target.value)}/>

                <button type="submit">Add puppy</button>
            </form>
        </div>
    )
}

export default NewPlayerform