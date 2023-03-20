import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container } from './Calendar.styled';
import { useQuery } from '@tanstack/react-query';
import { GetTodo } from '../../apis/apiGET';

export default function Calendar() {
  const array = [];
  const [calendarData, setCalendarData] = useState();

  const { data: getTodo } = useQuery(['TODO'], GetTodo, {
    onSuccess: response => {
      // console.log(response);
      response?.map(el => {
        let obj = {
          title: el.toDo,
          date: el.startDate,
          // backgroundColor: '',
          // borderColor: '',
          textColr: '#fff',
        };
        array.push(obj);
        setCalendarData(array);
      });
    },
    onError: response => {},
  });
  // console.log('array', array);

  // console.log('calendarData :', calendarData);

  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        // showNonCurrentDates={false}
        // allDaySlot={true}
        // headerToolbar={{
        //   start: 'title',
        //   center: '',
        //   end: 'listDay,listWeek,listMonth prev,next',
        // }}
        // headerToolbar={{
        //   start: 'dayGridMonth,timeGridWeek,timeGridDay custom1',
        //   center: 'title',
        //   end: 'custom2 prevYear,prev,next,nextYear',
        // }}
        // buttonText={{
        //   today: 'today',
        //   month: 'month',
        //   week: 'week',
        //   day: 'day',
        //   list: 'list',
        // }}
        // views={{
        //   listDay: { buttonText: 'Day' },
        //   listWeek: { buttonText: 'Week' },
        //   listMonth: { buttonText: 'Month' },
        // }}
        events={calendarData}
      />
    </Container>
  );
}
