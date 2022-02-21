import axios from "axios"
import { useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { useEffect, useState } from "react";


export const Search = () => {
    const { query } = useParams();
    const {search, searchResults} = useState({});


    useEffect(() => {
        getData();
    }, []);

    // const handleData = (e) => {
    //     const { query } = e.target;
    //     set
    // }

    const getData = () => {
        axios.get(`http://localhost:3001/search?q=${query}`).then(({data}) => searchResults(data));
    }
    console.log("search", search);

    return (
        <div>
            <div id="navbar">
                <h4>YOOGLE</h4>
                <input type="text" id="search-box2" placeholder="search" onChange={useParams}/>
                <button id="search" onClick={() => {}}>search</button>
            </div>
            {/* <div id="resultCard">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{search.url}</Card.Subtitle>
                    <Card.Link>{search.title}</Card.Link>
                    <Card.Link>{search.author}</Card.Link>
                    <Card.Text>{search.description}</Card.Text>
                    <Card.Text>Creation Date: {search.creation.date}</Card.Text>
                    <Card.Text>{search.quality}%</Card.Text>
                </Card.Body>
            </Card>
            </div> */}
        </div>
    )
}