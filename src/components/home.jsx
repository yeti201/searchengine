import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1>YOOGLE SEARCH</h1>
            <br />
            <input type="text" className="search-box" placeholder="search"/>
            <Link to="/search">Search</Link>
        </div>
    )
}