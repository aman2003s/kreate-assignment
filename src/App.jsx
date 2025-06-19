import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/userCard/UserCard";
import { Typography } from "@mui/material";

//Function to debounce starts here
function debounce(callbackFn, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    let context = this;
    setTimeout(() => callbackFn.apply(context, args), delay);
  };
}

//Function to debounce ends here

function App() {
  const [users, setUsers] = useState(null);
  const [isError, setIsError] = useState(null);
  const [seacrhText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  //function to fetch user data starts here
  async function getUsers() {
    try {
      const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await rawData.json();
      setUsers(userData);
      setFilteredData(userData);
    } catch (error) {
      setIsError(error);
    }
  }
  //function to fetch user data ends here

  //function debounced
  const onSearchInput = debounce((searchText) => {
    setFilteredData(
      users.filter((val) =>
        val.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, 500);
  //function debounced

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Typography variant="h3" align="center">
        User's Profile Data
      </Typography>
      {isError && <div>Opps, something went wrong</div>}
      <div className="serachContainer">
        <input
          type="text"
          className="inputBox"
          value={seacrhText}
          onChange={(e) => {
            setSearchText(e.target.value);
            onSearchInput(e.target.value);
          }}
        />
        <button
          className="SearchButton"
          onClick={() => onSearchInput(seacrhText)}
        >
          Search
        </button>
      </div>
      <div className="userProfileContainer">
        {!!filteredData &&
          filteredData.map((user) => (
            <UserCard key={user.id} cardData={user} />
          ))}
      </div>
    </>
  );
}

export default App;
