 function showSelectedCountry(event){
      if (event.target.value === "belgrade"){
        let belgradeTime = moment.tz("Europe/Belgrade").format("dddd, MMMMM D, YYYY h:m A");
        alert (`It is currently ${belgradeTime} in Belgrade,Serbia`);
    }

     if (event.target.value === "dubai"){
         let dubaiTime = moment.tz("Asia/Dubai").format("dddd, MMMMM D, YYYY h:m A");
        alert (`It is currently ${dubaiTime} in Dubai, United Arab Emirates`);
    }
    
     if (event.target.value === "cairo"){
              let ciaroTime = moment.tz("Africa/Cairo").format("dddd, MMMMM D, YYYY h:m A");
        alert (`It is currently ${ciaroTime} in Ciaro, Egypt`);  
    }
 }


let countrySelect = document.querySelector("#country");
countrySelect.addEventListener("change",showSelectedCountry);