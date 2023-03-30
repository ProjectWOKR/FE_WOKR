import { GetTodo } from '../../apis/apiGET';
import { Container } from './Calendar.styled';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

export default function Calendar() {
  const array = [];
  const [calendarData, setCalendarData] = useState();

  const { data: getTodo } = useQuery(['TODO'], GetTodo, {
    onSuccess: response => {
      response?.map(el => {
        const endDate = new Date(el.endDate);
        endDate.setDate(endDate.getDate() + 1);
        const newEndDate = endDate.toISOString().split('T')[0];

        let obj = {
          title: el.toDo,
          start: `${el.startDate} ${el.startDateTime}`,
          end: `${newEndDate} ${el.endDateTime}`,
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
        views={{
          listDay: { buttonText: 'list day' },
          listWeek: { buttonText: 'list week' },
          listMonth: { buttonText: 'list month' },
        }}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        events={calendarData}
      />
    </Container>
  );
}
