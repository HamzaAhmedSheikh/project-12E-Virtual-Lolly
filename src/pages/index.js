import React from 'react';
import { navigate } from "gatsby";
import Header from '../components/Header';
import Lolly from '../components/Lolly';

export default function Home() {
  return (
    <div className="container">
      <Header />

      <div className="listLollies">
        <Lolly fillLollyTop="#9ADFC5" fillLollyMiddle="#FFA305" fillLollyBottom="#9A1369" /> 
        <Lolly fillLollyTop="#e97393" fillLollyMiddle="#d23a62" fillLollyBottom="#bb1161" /> 
        <Lolly fillLollyTop="#ed265b" fillLollyMiddle="#f77249" fillLollyBottom="#deaa43" /> 
        <Lolly fillLollyTop="#ffc107" fillLollyMiddle="#ec398f" fillLollyBottom="#00a97e" /> 
        <Lolly fillLollyTop="#cd2753" fillLollyMiddle="#d5cfd1" fillLollyBottom="#8fD4FF" />         
      </div>   
      
      <div className="input-wrapper"> 
        <button className='' onClick={() => navigate('/createNew')}>
          Create New Lolly 
        </button>
      </div>
    </div>    
  )  
}
