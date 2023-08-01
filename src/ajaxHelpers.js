

const fetchAllPlayers = async () => {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-ftv-et-web-ft/players")
        const data = await response.json()
        // console.log(data.data.players)
        return(data.data.players)
    } catch (err) {
        console.log("error while trying to fetch all players")
    }
}
 export default fetchAllPlayers