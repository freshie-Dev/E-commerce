import React from 'react'
import "../../Dropdown.css"

export default function Menu() {

    function pressedLocation (e) {
        console.log(e.currentTarget);
        document.getElementsByClassName('location--selected')[0].classList.remove('location--selected');
        e.currentTarget.classList.add('location--selected');
    }

    function dropButton (e) {
        e.currentTarget.classList.toggle('button--pushed');
        document.getElementsByClassName('location-container')[0].classList.toggle('opened');
        document.getElementById('location--header').classList.toggle('active')
        console.log(e.currentTarget)
    }

    function switchClick (e) {
        console.log(e.currentTarget)
        let mainContainer = document.getElementsByClassName('location-container')[0];
        mainContainer.classList.toggle('dark');
        mainContainer.classList.toggle('light');
    }


  return (
    <div id="wrapper">
    <div class="location-container dark">
      <div class="container--header">
        <h3 id="location--header" class="">
          Select <span>City</span>
        </h3>
        <div class="drop-arrow" onClick={dropButton}>
          <span class="">
            <i class=""></i>
          </span>
        </div>
      </div>
      <div class="location location--selected" onClick={pressedLocation}>
        <p>Toronto</p>
      </div>
      <div class="location" location="Sydney" onClick={pressedLocation}>
        <p>Sydney</p>
      </div>
    </div>
    {/* <div id="light-dark-mode">
      <label class="switch">
        <input id="switchBox" type="checkbox" onClick={switchClick} />
        <span class="slider round"></span>
      </label>
    </div> */}
  </div>
  )
}
