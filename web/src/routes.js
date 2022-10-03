import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';



import  Home  from './Home';
import  PreHome  from './PreHome';
import  GameHome  from './GameHome';
import  ListDsScreen  from './ListDsScreen';
import  BlueprintSearch  from './BlueprintSearch';
import  PointsPage  from './PointsPage';
import  Guide  from './Guide';
import  ProductGuide  from './ProductGuide';
import  BuildingGuide  from './BuildingGuide';
import  Lobby from './Lobby';
import PreGame from './PreGame';
import CreateUser from './CreateUser';
import PreGameBonus from './PreGameBonus';


function Routesx() {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<PreHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gamehome" element={<GameHome />} />
        <Route path="/listds" element={<ListDsScreen />} />
        <Route path="/blueprintsearch" element={<BlueprintSearch />} />
        <Route path="/points" element={<PointsPage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/productguide" element={<ProductGuide />} /> 
        <Route path="/buildingguide" element={<BuildingGuide />} />
        <Route path="/lobby" element={<Lobby/>} />
        <Route path="/pregame" element={<PreGame/>} />
        <Route path="/createuser" element={<CreateUser/>} />
        <Route path="/pregamebonus" element={<PreGameBonus/>} />

    </Routes>




    </BrowserRouter>


  );
}

export default Routesx;