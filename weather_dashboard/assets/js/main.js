$(document).ready(function(){

    //**** VAR DECLARATION ****/
    let currCityName = "";
    //history count limit
    let ctNameCount = 5;
    //end point settings object
    let objEndPntSet = {
        "exclude": ["minutely"],
        "units": "imperial",
        "appid": "e936a49dc35d504b97acf268c22c80da"
    }

    //Call welcome function. Loads latest city stored in local 
    //TODO: Call welcome function here

    //**** LISTENERS ****/
    $("#wth-sch-button").on("click", function(event){
        //preventing submit event on button click
        event.preventDefault();
        currCityName = $("#ct-search-input").val();
        //call main function
        fnGetOneCallAPIData(currCityName);
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
        // console.log("One Call URL ", oneCallEndPointURL);
        //getting all required data
        $.ajax({
            url: oneCallEndPointURL,
            method: "GET"
        }).then(function(response){
            if (response !== null) {
                //TODO: store city name here
                fnStoreNewCity(currCityName);
                //display City Name and Date
                setCtNameNDate(response.current.dt);
                //display current conditions icon and text
                setCrConditions(response.current);
                //setting forecast
                setForecastTiles(response.daily);
            }
        });
    }

    function setCtNameNDate(strDate){
        $(".ctdt-ctner > .ct-name").text(currCityName.toUpperCase());
        //API returns date/time as unix format. Moment js makes it simple to converts
        $(".ctdt-ctner > .dt-date").text(moment.unix(strDate).format("MM/DD/YYYY"));
    }

    function setCrConditions(objMain){
        let iconURL = "http://openweathermap.org/img/wn/" + objMain.weather[0].icon + "@2x.png";
        let uvSeverity = fnGetUVSeverityClass(objMain.uvi);
        console.log("severity object ", uvSeverity);
        //adjust src attr of icon img
        $(".cr-cond-icon").attr({"src": iconURL});
        $(".cr-wth-main").text(objMain.weather[0].main.toUpperCase());
        //updating temp
        $(".cr-local-temp").text(Math.floor(objMain.temp) + "°F");
        $(".cr-humidity").html("<i class=\"fas fa-tint\"></i>" + objMain.humidity + "%");
        $(".cr-wind").html("<i class=\"fas fa-wind\"></i>" + objMain.wind_speed + " MPH");
        $(".cr-uvi").html("<i class=\"fas fa-sun\"></i>" + objMain.uvi + "<span class=\"badge badge-pill badge-" + uvSeverity.class + "\">" + uvSeverity.index + "</span>");
        $(".cr-snrise").html("<i class=\"fas fa-arrow-alt-circle-up\"></i>" + moment.unix(objMain.sunrise).format("MM/DD/YYYY hh:mm a"));
        $(".cr-snset").html("<i class=\"fas fa-arrow-alt-circle-down\"></i>" + moment.unix(objMain.sunset).format("MM/DD/YYYY hh:mm a"));
    }

    function fnGetUVSeverityClass(uviValue){
        let uviSeverityObj = {
            "index": "",
            "class": ""
        };
        //classify severity of UVI
        switch(true){
            case (uviValue > 0 && uviValue < 3):
                uviSeverityObj.index = "low";
                uviSeverityObj.class = "success";
                break;
            case (uviValue >= 3 && uviValue < 6):
                uviSeverityObj.index = "moderate";
                uviSeverityObj.class = "warning";
                break;
            case (uviValue >= 6 && uviValue < 8):
                uviSeverityObj.index = "high";
                uviSeverityObj.class = "danger";
                break;
            case (uviValue >= 8 && uviValue < 11):
                uviSeverityObj.index = "very high";
                uviSeverityObj.class = "danger";
                break;
            case (uviValue >= 11):
                uviSeverityObj.index = "extreme";
                uviSeverityObj.class = "dark";
                break;
        }
        return uviSeverityObj;
    }

    function setForecastTiles(objForecast){
        $(".fr-five-ctner").empty();
        for(let i = 1; i <= 5; i++){
            //creating elements
            //card div ctner
            let frCardDivCtner = $("<div>");
            frCardDivCtner.attr({
                "class": "col-sm-12 col-md-2 fr-card"
            });
            //card header -> date
            let frCardHeaderDate = $("<h5>");
            frCardHeaderDate.attr({
                "class": "fr-date-heading"
            });
            frCardHeaderDate.text(moment.unix(objForecast[i].dt).format("MM/DD/YYYY"));
            frCardDivCtner.append(frCardHeaderDate);

            //img for weather conditions
            let frCondIcon = $("<img>");
            frCondIcon.attr({
                "class": "fr-cond-icon",
                "src": "http://openweathermap.org/img/wn/" + objForecast[i].weather[0].icon + "@2x.png",
                "alt": "forecast conditions icon"
            });
            frCardDivCtner.append(frCondIcon);

            //fr-stat-ctner div
            let frStatCtner = $("<div>");
            frStatCtner.attr({
                "class": "fr-stat-ctner"
            });

            //text for temp
            let frTemp = $("<p>");
            frTemp.attr({
                "class": "fr-temp"
            });
            frTemp.html("<i class=\"fas fa-thermometer-half\"></i>" + Math.floor(objForecast[i].temp.day) + "°F");
            frStatCtner.append(frTemp);

            //text for humidity
            let frHum = $("<p>");
            frHum.attr({
                "class": "fr-temp"
            });
            frHum.html("<i class=\"fas fa-tint\"></i>" + Math.floor(objForecast[i].humidity) + "%");
            frStatCtner.append(frHum);

            //appending stat container
            frCardDivCtner.append(frStatCtner);
            console.log("frDiv ", frCardDivCtner);
            $(".fr-five-ctner").append(frCardDivCtner);
        }
    }

    function fnGetEndPntURL(ctName){
        //function returns current or one call end point for the city requested by user.
        //http://api.openweathermap.org/data/2.5/weather?q=London&appid=e936a49dc35d504b97acf268c22c80da
        let endPntURL = "https://api.openweathermap.org/data/2.5/weather?q=" + ctName + "&appid=" + objEndPntSet.appid;
        return endPntURL;
    }

    function fnGetEndPntURLOneCall(objCoord){
        console.log("object ", objCoord);
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
        endPntURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + objCoord.lat + "&lon=" + objCoord.lon + "&units=" + objEndPntSet.units +"&exclude=" + strExclude + "&appid=" + objEndPntSet.appid;
        return endPntURL;
    }

    //TODO: finish below function
    function fnStoreNewCity(ctName) {
        //getting existing data if any for a day
        let storedCtArr = localStorage.getItem("arrCtNames");
        //if no existing object, create one.
        //otherwise, retrieve existing data
        storedCtArr = storedCtArr ? JSON.parse(storedCtArr) : [];
        //checking number of elements on the array. only keeping 5 ct names
        if (storedCtArr && storedCtArr.length === ctNameCount) {
            storedCtArr.shift();
        }
        storedCtArr.push(ctName);
        //store back the object in the local storage
        localStorage.setItem("arrCtNames", JSON.stringify(storedCtArr));
      }
});