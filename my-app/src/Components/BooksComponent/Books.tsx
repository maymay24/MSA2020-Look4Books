import React, {useState, useEffect} from 'react';
import DisplayCard from "../CardComponent/DisplayCards";
import {Grid} from "@material-ui/core";
import "./Books.css";

interface IBooksProps {
    SearchQuery: (string | null);
}

function Books(props: IBooksProps) {

    //API key
    const API_Key = process.env.REACT_APP_API_KEY;

    const [ItemArray, setItemArray] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q="+props.SearchQuery+"&key="+API_Key+"&maxResults=30")
        .then(res => res.json())
        .then(res => {
            console.log(res.items)
            setItemArray(res.items);
        })
        .catch(() => console.log("It didn't work!")
        );
    }, [props.SearchQuery]);

    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el, i: Number) => {
        if(!el || !(el["volumeInfo"]["imageLinks"]) || !(el["volumeInfo"]["authors"]) || !(el["volumeInfo"]["previewLink"]) || !(el["volumeInfo"]["publishedDate"])) {
            return null;
        }
        console.log(el["volumeInfo"]["publishedDate"])
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="DisplayGridCard">
                <DisplayCard ImageUrl={el["volumeInfo"]["imageLinks"]["smallThumbnail"]} 
                    BookTitle={el["volumeInfo"]["title"]} 
                    Author={el["volumeInfo"]["authors"]} 
                    BookLink={el["volumeInfo"]["previewLink"]} 
                    PublishedDate={el["volumeInfo"]["publishedDate"]}/>
            </Grid>)
    }) 



    return(
        <div>
            <Grid container spacing={3} className="DisplayGridContainer">
                {Cards}
            </Grid>
        </div>
    );
}

export default Books;
