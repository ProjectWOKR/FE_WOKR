import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container } from './Calendar.styled';

export default function Calendar() {
  return (
    <Container>
      <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' />
    </Container>
  );
}
