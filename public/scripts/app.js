class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}

/////////////////////////////////////////////DATA//////////////////////////////////////////////////////////////
import json from '../data/cars.json' assert { type: "json" };
const datajson = json;
const data = JSON.parse(JSON.stringify(datajson));

/////////////////////////////////////////////DEKLARASI VARIABEL//////////////////////////////////////////////////////////////

const tipeDriver = document.getElementById('floatingSelectGrid');
const search = document.getElementById('cari');
const dataSection = document.getElementById('hasil-pencarian');
const carCapacity = document.getElementById('jmlPenumpang');
const time = document.getElementById('floatingSelectGridTime');
const date = document.getElementById('exampleInputEmail1');

/////////////////////////////////////////////PROGRAM//////////////////////////////////////////////////////////////

search.addEventListener('click', e => {
//  console.log(date.value);
  
//   if (time.value == true && date.value == false && carCapacity.value == false) {
//     filterCarByTime();
//   } else if (time.value == false && date.value == true && carCapacity.value == false) {
//     filterCarByDate();
//   } else if (time.value == false && date.value == false && carCapacity.value == true) {
//     filterCarByCapacity();
// } else {
    let result = [];
    for (let i = 0; i < data.length; i++) {
    if (data[i].availableAt.includes(time.value)) {
      if (data[i].availableAt.includes(date.value)) {
        if (data[i].capacity == carCapacity.value) {
         result.push(data[i]);
         dataSection.innerHTML += `<div class="col-lg-4" >
         <div class="card">
                       <img src="${data[i].image}" class="card-img-top" alt="...">
                       <div class="card-body p-0" style="height:max-content;">
                           <h2 class="card-title">Nama/Tipe Mobil</h2>
                           <h3>Rp ${data[i].rentPerDay} / hari</h3>
                           <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                               tempor incididunt ut labore et dolore magna aliqua.</p>
                           <div>
                               <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                   <img src="../asset/fi_users.svg" alt=""
                                       style="width: 20px; height: auto; margin: 0 8px 0 0; color: #8A8A8A;">
                                   ${data[i].capacity}
                               </div>
                               <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                   <img src="../asset/fi_settings.svg" alt=""
                                       style="width: 20px; height: auto; margin: 0 8px 0 0;">
                                   ${data[i].transmission}
                               </div>
                               <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                   <img src="../asset/fi_calendar.svg" alt=""
                                       style="width: 20px; height: auto; margin: 0 8px 0 0;">
                                   ${data[i].year}
                               </div>
                           </div>
                           <a href="#"
                               class="btn btn-primary d-flex align-items-center justify-content-center text-center">Pilih
                               Mobil</a>
                       </div>
                   </div>
                   </div>`;
        }
      }
    }
  // }
   
 };  
});


/////////////////////////////////////////////FUNCTION//////////////////////////////////////////////////////////////

  function filterCarByTime() {  
    let result = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].availableAt.includes(time.value)) {
        result.push(data[i]);
        dataSection.innerHTML += `<div class="col-lg-4" >
        <div class="card">
                      <img src="${data[i].image}" class="card-img-top" alt="...">
                      <div class="card-body p-0" style="height:max-content;">
                          <h2 class="card-title">Nama/Tipe Mobil</h2>
                          <h3>Rp ${data[i].rentPerDay} / hari</h3>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div>
                              <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                  <img src="../asset/fi_users.svg" alt=""
                                      style="width: 20px; height: auto; margin: 0 8px 0 0; color: #8A8A8A;">
                                  ${data[i].capacity}
                              </div>
                              <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                  <img src="../asset/fi_settings.svg" alt=""
                                      style="width: 20px; height: auto; margin: 0 8px 0 0;">
                                  ${data[i].transmission}
                              </div>
                              <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                  <img src="../asset/fi_calendar.svg" alt=""
                                      style="width: 20px; height: auto; margin: 0 8px 0 0;">
                                  ${data[i].year}
                              </div>
                          </div>
                          <a href="#"
                              class="btn btn-primary d-flex align-items-center justify-content-center text-center">Pilih
                              Mobil</a>
                      </div>
                  </div>
                  </div>`;
      }
  
    }
  };


function filterCarByDate() {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].availableAt.includes(date.value)) {
      result.push(data[i]);
      dataSection.innerHTML += `<div class="col-lg-4" >
      <div class="card">
                    <img src="${data[i].image}" class="card-img-top" alt="...">
                    <div class="card-body p-0" style="height:max-content;">
                        <h2 class="card-title">Nama/Tipe Mobil</h2>
                        <h3>Rp ${data[i].rentPerDay} / hari</h3>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div>
                            <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                <img src="../asset/fi_users.svg" alt=""
                                    style="width: 20px; height: auto; margin: 0 8px 0 0; color: #8A8A8A;">
                                ${data[i].capacity}
                            </div>
                            <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                <img src="../asset/fi_settings.svg" alt=""
                                    style="width: 20px; height: auto; margin: 0 8px 0 0;">
                                ${data[i].transmission}
                            </div>
                            <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                <img src="../asset/fi_calendar.svg" alt=""
                                    style="width: 20px; height: auto; margin: 0 8px 0 0;">
                                ${data[i].year}
                            </div>
                        </div>
                        <a href="#"
                            class="btn btn-primary d-flex align-items-center justify-content-center text-center">Pilih
                            Mobil</a>
                    </div>
                </div>
                </div>`;
    }
  }
}


  function filterCarByCapacity() {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].capacity == carCapacity.value) {
        result.push(data[i]);
        dataSection.innerHTML += `
        <div class="col-lg-4" >
        <div class="card">
                      <img src="${data[i].image}" class="card-img-top" alt="...">
                      <div class="card-body p-0" style="height:max-content;">
                          <h2 class="card-title">Nama/Tipe Mobil</h2>
                          <h3>Rp ${data[i].rentPerDay} / hari</h3>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div>
                              <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                  <img src="../asset/fi_users.svg" alt=""
                                      style="width: 20px; height: auto; margin: 0 8px 0 0; color: #8A8A8A;">
                                  ${data[i].capacity}
                              </div>
                              <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                  <img src="../asset/fi_settings.svg" alt=""
                                      style="width: 20px; height: auto; margin: 0 8px 0 0;">
                                  ${data[i].transmission}
                              </div>
                              <div class="d-flex flex-row" style="margin: 8px 0; font-size: 14px;">
                                  <img src="../asset/fi_calendar.svg" alt=""
                                      style="width: 20px; height: auto; margin: 0 8px 0 0;">
                                  ${data[i].year}
                              </div>
                          </div>
                          <a href="#"
                              class="btn btn-primary d-flex align-items-center justify-content-center text-center">Pilih
                              Mobil</a>
                      </div>
                  </div>
                  </div>
        `;
      }
    }
  }