import Header from "../components/Header";
import Popular from "../components/Popular";
import Searchbar from "../components/Searchbar";
import Searched from "../components/Searched";
import Saved from "../components/Favorites";

import React from 'react'

function Home() {
  return (
    <div>
      <Header/>
      <Searchbar/>
      <Popular/>
    </div>
  )
}

export default Home
