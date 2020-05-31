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
        fnGetOneCallAPIData($("#ct-search-input").val());
    });

    /**** FUNCTIONS ****/
    function fnGetOneCallAPIData(ctName){
        //function returns Lon and Lat for a city
        let regEndPntURL = fnGetEndPntURL(ctName);
        //pass end point URL into the API content retriever function
        fnQueryWeatherEndPnt(regEndPntURL);
    }

    function fnQueryWeatherEndPnt(endPntURL){
        //querying end point to obtain Lon and Lat
        //the response will passed into another function that will 
        //query the API again for one-call data
        $.ajax({
            url: endPntURL,
            method: "GET"
        }).then(fnQueryWeatherEndPntOneCall); //passing function by reference. it is only evaluated once the ajax call is completed/success
    }

    function fnQueryWeatherEndPntOneCall(response){
        //1st getting API End Point for One Call option
        let oneCallEndPointURL = fnGetEndPntURLOneCall(response.coord);
        console.log("One Call URL ", oneCallEndPointURL);
    }



    function fnGetEndPntURL(ctName){
        //function returns current or one call end point for the city requested by user.
        //http://api.openweathermap.org/data/2.5/weather?q=London&appid=e936a49dc35d504b97acf268c22c80da
        let endPntURL = "https://api.openweathermap.org/data/2.5/weather?q=" + ctName + "&appid=" + objEndPntSet.appid;
        return endPntURL;
    }

    function fnGetEndPntURLOneCall(objCoord){
        //function returns current or one call end point for the city requested by user.
        let endPntURL = "";
        let strExclude = "";
        //joining exclude criteria if exclude.legth > 1
        if (objEndPntSet.exclude.length > 1) {
            strExclude = objEndPntSet.exclude.join(",");
        }
        else{
            strExclude = objEndPntSet.exclude[0];
        }
        //https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=e936a49dc35d504b97acf268c22c80da
        endPntURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + objCoord.lat + "&lon=" + objCoord.lon + "&exclude=" + strExclude + "&appid=" + objEndPntSet.appid;
        return endPntURL;
    }
});