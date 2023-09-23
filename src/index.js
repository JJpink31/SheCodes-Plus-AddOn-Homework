function showSelectedCountry(event){
    
    if (event.target.value === "Belgrade"){
        alert ("Belgrade");
    }
     if (event.target.value === "New Delhi"){
        alert ("New Delhi");
    }
     if (event.target.value === "Montego Bay"){
        alert ("Montego Bay");
    }
}

let countrySelect = document.querySelector("#country");
countrySelect.addEventListener("change",showSelectedCountry);