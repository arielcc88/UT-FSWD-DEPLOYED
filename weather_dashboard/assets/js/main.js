$(document).ready(function(){

    //**** VAR DECLARATION ****/
    //end point settings object
    let objEndPntSet = {
        "exclude": ["minutely"],
        "appid": "e936a49dc35d504b97acf268c22c80da"
    }

    //Call welcome function. Loads latest city stored in local 
    //TODO: Call welcome function here

    //**** LISTENERS ****/
    $("#wth-sch-button").on("click", function(event){
        //preventing submit event on button click
        event.preventDefault();
        //calling main function to query API end-point
        //TODO: call main function
    });

    /**** FUNCTIONS ****/
    function fnGetLastStoredCity(){

    }

    function fnGetWeatherData(ctName){
        //1. validate ctName is not empty
        if (ctName) {
            //2. call function to assemble end-point URL
            fnGetEndPntURL(ctName);
        }
        else{
            //TODO: 3. return error message to user
        }
    }

    function fnGetEndPntURL(ctName, epType){
        //function returns current or one call end point for the city requested by user.
        let endPntURL = "";
        switch(epType) {
            case "current":
                //http://api.openweathermap.org/data/2.5/weather?q=London&appid=e936a49dc35d504b97acf268c22c80da
                endPntURL = "https://api.openweathermap.org/data/2.5/weather?q=" + ctName + "&appid=" + objEndPntSet.appid;
                break;
            case "onecall":
                //1. obtain lat and lon coords for the city. (onecall feature only works with lon/lat)
                let objLatLon = fnGetLonLat(ctName); //returns an obj "coord": {"lon": -0.13, "lat": 51.51}
                let strExclude = "";
                //joining exclude criteria if exclude.legth > 1
                if (objEndPntSet.exclude.length > 1) {
                    strExclude = objEndPntSet.exclude.join(",");
                }
                else{
                    strExclude = objEndPntSet.exclude[0];
                }
                //https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=e936a49dc35d504b97acf268c22c80da
                endPntURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + objLatLon.coord.lat + "&lon=" + objLatLon.coord.lon + "&exclude=" + strExclude + "&appid=" + objEndPntSet.appid;
        }
        console.log(endPntURL);
        return endPntURL;
    }

    function fnGetLonLat(ctName){

    }
});