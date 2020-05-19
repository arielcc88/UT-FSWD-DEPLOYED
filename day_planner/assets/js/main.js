$(document).ready(function () {

    /*
    ---------
    VAR DECLARATION
    ---------
    */


    /*
    ---------
    MAIN
    ---------
    */
   fnRenderCalendarHTML();



    /*
    ---------
    FUNCTION DEF
    ---------
    */
    //Set Calendar funtion
    function fnSetCalendar(){
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
            6: "Sat"
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
    function fnRenderCalendarHTML(calendarObj){
        //function renders a table
        //first create the table element
        let calendarTable = $("<table>");
        //TODO: add table class

        //create and append <th> to table 
        calendarTable.append($("<thead>"), $("<tbody>"));
        //appending table to HTML
        $(".calendar-ctner").append(calendarTable);

        //test
        $(".calendar-ctner > table > thead").append("<tr><th>test</th></tr>");
    }

  //testing moment js
  const test = fnSetCalendar();
  console.log(test[0][0]);
//   console.log(calendar);
//   console.log(calendar[0].days[1]._d.getDate()); //returns day of the month in number format
//   console.log(calendar[0].days[1]._d.getDay()); //returns day of the week in number format -- Sun is 0 - Sat is 6
});
