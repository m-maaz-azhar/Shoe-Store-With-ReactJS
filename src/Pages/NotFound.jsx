import Navbar from "../components/Header/Navbar"
import "../styles/common.css"

function NotFound() {
    return (
        <div>
            <Navbar/>
            <center className="my-15">
                <h1>404</h1>
                <h2>Page Not Found</h2>
            </center>
        </div>
    )
}

export default NotFound
