import React, { useState } from "react";
import "./grid.scss";

const Grid = () => {
    const passingClass = (e) => {
        const text = e.currentTarget; 
        text.classList.add('highlighted');
        console.log(text)
    }
    const clearClass = (e) => {
        const allDivs = document.querySelectorAll('.grid-container div');
        allDivs.forEach(div => {
            div.classList.remove('highlighted');
        });
    }
    return(
        <div className="container">
            <h1>The Game of Grid</h1>
            <div className="grid-container">
                <div onClick={passingClass} className="grid-num">1</div>
                <div onClick={passingClass} className="grid-num">2</div>
                <div onClick={passingClass} className="grid-num">3</div>
                <div onClick={passingClass} className="grid-num">4</div>
                <div onClick={passingClass} className="grid-num">5</div>
                <div onClick={passingClass} className="grid-num">6</div>
            </div>
            <button className="clear-btn" onClick={clearClass}>Clear</button>
        </div>
    )
}

export default Grid