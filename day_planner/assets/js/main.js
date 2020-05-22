$(document).ready(function () {
  /*
    ---------
    VAR DECLARATION
    ---------
    */
  //business hours
  const startDay = 8; //8:00 am
  const endDay = 17; //5:00 pm

  /*
    ---------
    MAIN
    ---------
    */
  //testing moment js
  const test = fnSetCalendar();
  fnRenderCalendarHTML(test);
  fnTaskGridRender("5/21/2020");
  //   console.log(calendar);
  //   console.log(calendar[0].days[1]._d.getDate()); //returns day of the month in number format
  //   console.log(calendar[0].days[1]._d.getDay()); //returns day of the week in number format -- Sun is 0 - Sat is 6

  /*
    ---------
    FUNCTION DEF
    ---------
    */
  //Set Calendar funtion
  function fnSetCalendar() {
    const startWeek = moment().startOf("month").week(); //defines the starting week of current month
    const endWeek = moment().endOf("month").week(); //defines the ending week of current month
    let calendar = [];
    //defining link of day name to day number (non-ISO format based on moment js doc)
    calendar.push({
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat",
    });
    for (var week = startWeek; week <= endWeek; week++) {
      //for each week of the month, below code creates an object with week number (of current year)
      //and an array with all 7 days of the week starting at Sunday (not ISOweek)
      calendar.push({
        week: week,
        days: Array(7)
          .fill(0)
          .map((n, i) =>
            moment()
              .week(week)
              .startOf("week")
              .clone()
              .add(n + i, "day")
          ),
      });
    }
    //return
    return calendar;
  }

  //Render calendar html
  function fnRenderCalendarHTML(calendarObj) {
    //function renders a table
    //first create the table element
    const calendarTable = $("<table>");
    //add table class
    calendarTable.addClass("table");
    //create and append <th> to table
    calendarTable.append($("<thead>"), $("<tbody>"));
    //appending table to HTML
    $(".calendar-ctner").append(calendarTable);
    //appending column header row
    $(".calendar-ctner > table > thead").append('<tr class="theader"></tr>');
    //Rendering
    for (item in calendarObj) {
      if (item === "0") {
        //call fnGetCalendarHeader()
        fnGetCalendarHeader(calendarObj[0]);
      } else {
        //call function to load table body content
        fnGetCalendarBody(calendarObj[item]);
        // console.log('item: ', calendarObj[item]);
        // console.log('item: ', calendarObj[item].days[0]._d.toLocaleDateString());
      }
    }
  }

  function fnGetCalendarHeader(calendarDaysObj) {
    //loading headers
    const calendarHeadRow = $(".calendar-ctner > table > thead > tr.theader");
    for (const dayName in calendarDaysObj) {
      //creating <th> per each day
      calendarHeadRow.append("<th>" + calendarDaysObj[dayName] + "</th>");
    }
  }

  function fnGetCalendarBody(CalendarWeekObj) {
    //target table body
    const calendarBody = $(".calendar-ctner > table > tbody");
    //create a new row each time this function is called -- means a new week is rendered
    const calendarBodyRowNew = $("<tr>");
    for (day of CalendarWeekObj["days"]) {
      //getting day of month using moment js getDate() method
      if (fnIsPassed(day._d)) {
        // console.log("isPassed");
        calendarBodyRowNew.append(
          '<td class="passed" data-localedate="' +
            day._d.toLocaleDateString() +
            '">' +
            day._d.getDate() +
            "</td>"
        );
      } else if (fnIsToday(day._d)) {
        //console.log("isToday");
        calendarBodyRowNew.append(
          '<td class="today" data-localedate="' +
            day._d.toLocaleDateString() +
            '">' +
            day._d.getDate() +
            "</td>"
        );
      } else if (fnIsFuture(day._d)) {
        //console.log("isFuture");
        calendarBodyRowNew.append(
          '<td class="future" data-localedate="' +
            day._d.toLocaleDateString() +
            '">' +
            day._d.getDate() +
            "</td>"
        );
      }
    }
    //apending tr element to existing table
    calendarBody.append(calendarBodyRowNew);
  }

  //fnIsPassed compares today's date and the date being rendered in Calendar
  //and returns true if the date is past
  function fnIsPassed(momentDate) {
    //getting Now as moment object
    const moToday = moment();
    return moment(momentDate, "d").isBefore(moToday, "d");
  }

  //fnIsToday compares today's date and the date being rendered in Calendar
  //and returns true if the date matches today's
  function fnIsToday(momentDate) {
    //getting Now as moment object
    const moToday = moment();
    return moment(momentDate, "d").isSame(moToday, "d");
  }

  //fnIsPassed compares today's date and the date being rendered in Calendar
  //and returns true if the date is future
  function fnIsFuture(momentDate) {
    //getting Now as moment object
    const moToday = moment();
    return moment(momentDate, "d").isAfter(moToday, "d");
  }

  //fnIsCurrentMonth checks if the date belogns to current month
  function fnIsCurrentMonth(momentDate) {
    const moToday = moment();
    return moment(momentDate, "M").isSame(moToday, "M");
  }

  //function getStoredTasks() receives a date in string format which will serve
  //as key to retrieve tasks from local storage
  //TODO
  function fnGetStoredTasks(moDate) {}

  //function fnTaskFactory defines a new Task Object
  function fnTaskFactory(tDate, tStartT, tEndT, tAction, tPriority, tStatus) {
    return {
      tDate: tDate,
      tStartT: tStartT,
      tEndT: tEndT,
      tAction: tAction,
      tPriority: tPriority,
      tStatus: tStatus,
    };
  }

  //function fnStoreNewTask() sends new tasks to Local Storage
  //TODO
  function fnStoreNewTask(taskObj) {
    //getting existing data if any
    //   let storedObj = localStorage.getItem(objName);
    //if no existing object, create one.
    //otherwise, retrieve existing data
    //   storedObj = storedObj ? JSON.parse(storedObj) : {};
    //set new key-value
    //   storedObj[objKey] = objValue;
    //store back the object in the local storage
    //   localStorage.setItem(objName, JSON.stringify(storedObj));
  }

  //function that renders time blocks with any existing task for that day
  //function receives a date (by default it uses today's date)
  function fnTaskGridRender(dateToRender) {
    //TODO: validate if date is past, present or future and adjust New Task btn class
    const taskGridDiv = $(".task-line-grid");
    const dateToMomentObj = moment(dateToRender, "MM-DD-YYYY");
    console.log("grid Render", dateToMomentObj);
    for (let i = startDay; i <= endDay; i++) {
      //repeating same process per each business hour
      //call function to create hour display div
      taskGridDiv.append(fnHourDisplayDiv(i));
      //TODO function to render stored tasks
      taskGridDiv.append('<div class="col-sm-7 task-ctner d-border">Task Titles</div>');
      taskGridDiv.append(fnSetNewTaskBtn(dateToRender, fnGetTimeSlot(i)));
    }
  }

  //function fnHourDisplayDiv returns a div element for displaying the hour
  function fnHourDisplayDiv(hourIteration) {
    //checking whether ante or post meridiem
    const divElement = $("<div>");
    divElement.addClass("col-sm-2 dtime d-border");
    divElement.text(fnGetTimeSlot(hourIteration));

    return divElement;
  }

  function fnGetTimeSlot(hourIteration) {
    let meridiemText = "";
    if (hourIteration < 12) {
      meridiemText = String(hourIteration) + ":00 AM";
    } else {
      meridiemText =
        hourIteration > 12
          ? String(hourIteration - 12) + ":00 PM"
          : String(hourIteration) + ":00 PM";
    }

    return meridiemText;
  }

  //function fnSetNewTaskBtn() creates the New Task button for each hour block
  function fnSetNewTaskBtn(blkDate, blkTimeSlot) {
    //the date and time slots will be added to the button using data-* attrs.
    const newTBtn = $("<button>");
    const divElement = $("<div>");
    divElement.addClass("col-sm-3 btn-add d-border");
    newTBtn.text("New Task");
    newTBtn.addClass("btn btn-outline-primary");
    newTBtn.attr({
      "data-date": blkDate,
      "data-time": blkTimeSlot,
    });
    divElement.append(newTBtn);

    return divElement;
  }
});
