import React, {useState} from "react";
import {Button, createMuiTheme, Grid, TextField} from "@material-ui/core";
import {IUserInput} from "../../Interfaces/Interfaces";
import "./SearchBar.css";

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {
    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) =>{
        setSearchQuery(s);
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        console.log(SearchQuery);

        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }

    return <div className="SearchBarContainer">
    <Grid container spacing={3} justify="center" align-items="center">
        <Grid item xs={12} sm={3}>
            <TextField className = "TextField"
                required
                id="outlined-required"
                label="Search Book"
                variant="outlined"
                error={HasFocus && SearchQuery === ""}
                onClick={() => setHasFocus(true)}
                value={SearchQuery}
                onChange={e => handleSearchQueryChange(e.target.value)}
            />
        
        </Grid>
        <Grid item xs={12} sm={3}>
                <Button className = "SubmitButton" style = {{
                    backgroundColor: "#040E5A",
                    color: "white",
                    width: "130px",
                    height: "50px"
                }}
                variant="contained" onClick={handleSubmit}>
                    Search
                </Button>
        </Grid>

    </Grid>
</div>
}

export default SearchBar;