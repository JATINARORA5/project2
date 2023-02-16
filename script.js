"use strict";

const container = document.querySelector(".container");
const centerName = document.querySelector(".center-name");
const cityName = document.querySelector(".city-name");
const stateName = document.querySelector(".state-name");
let inputText = document.querySelector(".input-text");
const stateBtn = document.querySelector(".state-btn");
const cityBtn = document.querySelector(".city-btn");
const centerBtn = document.querySelector(".center-btn");

fetch("https://isro.vercel.app/api/centres")
  .then((item) => {
    return item.json();
  })
  .then((objectData) => {
    let list = "";
    objectData.centres.map((mov) => {
      list += `
        <div class = "row">
            <div class="center">
                <p>Center</p>
                <p class="center-name">${mov.name}</p>
            </div>
            <div class="city">
                <p>City</p>
                <p class="city-name">${mov.Place}</p>
            </div>
            <div class="state">
                <p>State</p>
                <p class="state-name">${mov.State}</p>
            </div>
        </div>
        `;
    });

    container.innerHTML = list;
  });

stateBtn.addEventListener("click", function () {
  const matchString = inputText.value.toLowerCase();
  let flag = false;

  fetch("https://isro.vercel.app/api/centres")
    .then((data) => data.json())
    .then((objectData) => {
      let list = ``;
      objectData.centres.map((mov) => {
        const state = mov.State.toLowerCase();
        if (state === matchString) {
            flag = true;
          list += `
        <div class = "row">
            <div class="center">
                <p>Center</p>
                <p class="center-name">${mov.name}</p>
            </div>
            <div class="city">
                <p>City</p>
                <p class="city-name">${mov.Place}</p>
            </div>
            <div class="state">
                <p>State</p>
                <p class="state-name">${mov.State}</p>
            </div>
        </div>
        `;
        }
      });

      if(flag === false){
        list = `<h1>No Search result</h1>`;
     }
      container.innerHTML = list;
      
    });

    inputText.value = "";
});

cityBtn.addEventListener("click", function () {
    const matchString = inputText.value.toLowerCase();
    let flag = false;
  
    fetch("https://isro.vercel.app/api/centres")
      .then((data) => data.json())
      .then((objectData) => {
        let list = ``;
        objectData.centres.map((mov) => {
          const city = mov.Place.toLowerCase();
          if (city === matchString) {
              flag = true;
            list += `
          <div class = "row">
              <div class="center">
                  <p>Center</p>
                  <p class="center-name">${mov.name}</p>
              </div>
              <div class="city">
                  <p>City</p>
                  <p class="city-name">${mov.Place}</p>
              </div>
              <div class="state">
                  <p>State</p>
                  <p class="state-name">${mov.State}</p>
              </div>
          </div>
          `;
          }
        });
  
        if(flag === false){
          list = `<h1>No Search result</h1>`;
       }
        container.innerHTML = list;
        
      });
  
      inputText.value = "";
  });

  centerBtn.addEventListener("click", function () {
    const matchString = inputText.value.toLowerCase();
    let flag = false;
  
    fetch("https://isro.vercel.app/api/centres")
      .then((data) => data.json())
      .then((objectData) => {
        let list = ``;
        objectData.centres.map((mov) => {
          const name = mov.name.toLowerCase();
          if (name === matchString) {
              flag = true;
            list += `
          <div class = "row">
              <div class="center">
                  <p>Center</p>
                  <p class="center-name">${mov.name}</p>
              </div>
              <div class="city">
                  <p>City</p>
                  <p class="city-name">${mov.Place}</p>
              </div>
              <div class="state">
                  <p>State</p>
                  <p class="state-name">${mov.State}</p>
              </div>
          </div>
          `;
          }
        });
  
        if(flag === false){
          list = `<h1>No Search result</h1>`;
       }
        container.innerHTML = list;
        
      });
  
      inputText.value = "";
  });