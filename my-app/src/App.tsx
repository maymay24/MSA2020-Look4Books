import React, {useState} from 'react';
import './App.css';
import { IUserInput } from './Interfaces/Interfaces';
import SearchBar from "./Components/SearchBarComponent/SearchBar";
import Books from "./Components/BooksComponent/Books";
import {Button, createMuiTheme, MuiThemeProvider} from '@material-ui/core';


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})


function App() {
  document.title="Look4Books"

  const [UserInput, setUserInput] = useState<IUserInput>({
    //Default search query
    SearchQuery: "Flowers"
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
  

  return (
    <div className="App">
      <header className = "App-header">
        {/*Added custom font for header*/}
        <h1>L</h1>
        <h1 className="o-alphabet">oo</h1>
        <h1>k4Books</h1>
      </header>
      <MuiThemeProvider theme={theme}>
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
        <Books SearchQuery={UserInput.SearchQuery}/>
      </MuiThemeProvider>
      
    </div>
  );
}

export default App;

