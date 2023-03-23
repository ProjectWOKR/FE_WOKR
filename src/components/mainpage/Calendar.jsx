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
          start: `${el.startDate} ${el.startDateTime}`,
          end: `${el.endDate} ${el.endDateTime}`,
          backgroundColor: `${el.color === null ? '#9B9B9B' : el.color}`,
          borderColor: `${el.color === null ? '#9B9B9B' : el.color}`,
          textColr: '#fff',
          fontSize: '17px',
        };
        array.push(obj);
        return setCalendarData(array);
      });
    },
    onError: response => {},
  });

  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        dayMaxEvents={true}
        locale='ko'
        // navLinks={true}
        // showNonCurrentDates={false}
        // allDaySlot={true}
        views={{
          listDay: { buttonText: 'list day' },
          listWeek: { buttonText: 'list week' },
          listMonth: { buttonText: 'list month' },
        }}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
          // ,'timeGridWeek','timeGridDay'
          // end: 'listMonth,listWeek, listDay,listYear',
        }}
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
