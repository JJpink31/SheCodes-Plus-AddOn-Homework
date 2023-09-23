function showSelectedCountry(event){
    alert(event.target.value);
}
 function showSelectedCountry(event){
    if (event.target.value.length >= 0){
      if (event.target.value === "Belgrade"){
        let belgradeTime=moment.tz("Europe/Belgrade").format("dddd, MMMMM D, YYYY h:m A");
        alert (`It is currently ${belgradeTime} in Belgrade,Serbia`);
    }

     if (event.target.value === "Dubai"){
         let dubaiTime=moment.tz("Asia/Dubai").format("dddd, MMMMM D, YYYY h:m A");
        alert (`It is currently ${dubaiTime} in Dubai, United Arab Emirates`);
    }
    
     if (event.target.value === "Cairo"){
              let ciaroTime=moment.tz("Africa/Cairo").format("dddd, MMMMM D, YYYY h:m A");
        alert (`It is currently ${ciaroTime} in Ciaro, Egypt`);  
    }
 }
}

let countrySelect = document.querySelector("#country");
countrySelect.addEventListener("change",showSelectedCountry);