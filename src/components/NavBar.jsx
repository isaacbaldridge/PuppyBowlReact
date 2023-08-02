import { Link } from "react-router-dom"

const NavBar = () => {

    return(
        <div>
            <Link to = "/">Home</Link>
            {/* <Link to = "/:id">Single Player View</Link> */}
            <Link to = "/newform">Add New Player</Link>
        </div>
    )
}

export default NavBar