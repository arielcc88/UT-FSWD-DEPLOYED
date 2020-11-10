import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { format } from 'date-fns';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import "../../../App.css";


export default function DashboardCalendar() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focus, setFocus] = useState(START_DATE);
    const handleFocusChange = newFocus => {
      setFocus(newFocus || START_DATE)
    };

    const style = {
        height: '350px'
    }

    const history = useHistory();
      //redirecting function
    const redirectRouter = (routePath) => {
        history.push(routePath);
    }

    return (
      <div className="calendar-row-item calendar">
          <div className="dashboard-table-header">
            <h3>Lesson Scheduler</h3>
            <Button className="primary-button dashboard-button" onClick={() => {redirectRouter('/instructor/courses')}}>View Courses</Button>
          </div>
          <div className="date-range-picker">
              <div>Start Date: {startDate ? format(startDate, 'dd MMM yyyy') : 'none'}</div>
              <div>End Date: {endDate ? format(endDate, 'dd MMM yyyy') : 'none'}</div>
              {/* <p>Currently selecting: {focus}</p> */}
          </div>
          <div className="date-picker">
              <DateRangePickerCalendar
                  style={style}
                  startDate={startDate}
                  endDate={endDate}
                  focus={focus}
                  onStartDateChange={setStartDate}
                  onEndDateChange={setEndDate}
                  onFocusChange={handleFocusChange}
              />
          </div>
      </div>
    )
}