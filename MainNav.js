/*import { useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //const navigate = useNavigate();
  // useNavigate(() => {
   //  navigate.push("/");
  //  navigate.push("/movies");
  // navigate.push("/series");
  //  navigate.push("/search");
  // },) 
  
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation 
        style={{
          backgroundColor: "#39445a",
          width: "100%",
          height: "50px",
          position: "fixed",
          bottom: 0,
          zIndex: 100,
        }}
        showLabels={true}
        value={value}
        onChange={(event, newValue) => handleChange(event, newValue)}  
         
        
      >
          
        <BottomNavigationAction 
        element={Link} to="/"
          style={{ color: "white", backgroundColor: "#39445a" }}
          label="Trending"
          icon={<WhatshotIcon />}
        /> 
         <BottomNavigationAction
         element={Link} to="/movies"
          style={{ color: "white", backgroundColor: "#39445a" }}
          label="Movies"
          icon={<MovieIcon />}
        />
          <BottomNavigationAction
          element={Link} to="/series"
          style={{ color: "white", backgroundColor: "#39445a" }}
          label="Series"
          icon={<TvIcon />}
           />
        <BottomNavigationAction
        element={Link} to="/search"
          style={{ color: "white", backgroundColor: "#39445a" }}
          label="Search"
          icon={<SearchIcon />}
           />
      </BottomNavigation>
    </Box>
  );
}
*/
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}