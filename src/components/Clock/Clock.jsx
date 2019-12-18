import React, {useState, useEffect} from 'react';

export default function Clock () {
    const [time, setTime] = useState("");

    const getTime = () => {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        const day = today.getDay();
        const year = today.getFullYear();
        const month = today.getMonth();
        const date = today.getDate();
        const time = `${getWeekDay(day)} ${date} ${getMonthName(month)}, ${year} ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${getSuffix(hours)}`;
        setTime(time);
    }

    const getWeekDay = (number) => {
        let weekDay = "";
        switch (number) {
            case 0:
                weekDay = "Sun";
            case 1:
                weekDay = "Mon";
            case 2:
                weekDay = "Tue";
            case 3:
                weekDay = "Wed";
            case 4:
                weekDay = "Thu";
            case 5:
                weekDay = "Fri";
            case 6:
                weekDay = "Sat";
        }
        return weekDay;
    }

    const getMonthName = (number) => {
        let month = "";
        switch (number) {
            case 0:
                month = "Jan";
            case 1:
                month = "Feb";
            case 2:
                month = "Mar";
            case 3:
                month = "Apr";
            case 4:
                month = "May";
            case 5:
                month = "June";
            case 6:
                month = "Jul";
            case 7:
                month = "Aug";
            case 8:
                month = "Sep";
            case 9:
                month = "Oct";
            case 10:
                month = "Nov";
            case 11:
                month = "Dec";
        }
        return month;
    }
    const getSuffix = (hour) => {
        if (hour < 12) {
            return `AM`
        } else {
            return `PM`
        }
    }

    const formatTime = (time) => {
        if (time < 10) {
            return `0${time}`;
        } else {
            return `${time}`
        }
    };

    useEffect(() => {
        setInterval(getTime, 1000);
    }, [time])

    return (<h3>{time}</h3>);
}