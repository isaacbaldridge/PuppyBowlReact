// import {useParams} from "react-router-dom"
import AllPlayers from "./components/AllPlayers"
import NewPlayerform from "./components/NewPlayerForm"

export async function FetchAllPlayers() {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-ftb-et-web-ft/players")
        const data = await response.json()
        // console.log(data.data.players)
        return(data.data.players)
    } catch (err) {
        console.log("error while trying to fetch all players")
    }
}



export async function FetchSinglePlayer (id)  {


    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-ftb-et-web-ft/players/${id}`)
        const data = await response.json()
        // console.log(data.data.player)
        return(data.data.player)

    } catch (err) {
        console.log("error while trying to fetch a single player")
    }
}




// export async function AddNewPlayer (name, breed) {
//     try {
//         const response = await fetch(
//           'https://fsa-puppy-bowl.herokuapp.com/api/2306-ftb-et-web-ft/players',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               name: name,
//               breed: breed,
//             }),
//           }
//         );
//         const newPlayer = await response.json();
//         console.log(newPlayer)

//         const allPlayers = await FetchAllPlayers()
//         AllPlayers(allPlayers)
//         NewPlayerform()

//       } catch (err) {
//         console.error(err);
//       }
// }