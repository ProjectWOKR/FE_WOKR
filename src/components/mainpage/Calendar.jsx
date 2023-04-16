import { GetTodo } from '../../apis/apiGET';
import { patchTodoInfo } from '../../store/store';
import Potal from '../global/globalModal/Potal';
import TodoModal from '../global/globalModal/TodoModal';
import TodoPathModal from './../global/globalModal/TodoPathModal';
import { Container } from './Calendar.styled';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

export default function Calendar() {
  const [todoModalOn, setTodoModalOn] = useState(false);
  const [createModalOn, setCreateModalOn] = useState(false);
  const array = [];
  const [calendarData, setCalendarData] = useState();
  // console.log(calendarData);

  const [formCalendar, setFormCalendar] = useState(true);
  const [dateInfo, setDateInfo] = useState({
    start: '',
    startDateTime: '',
  });

  // console.log(dateInfo);

  const setPatchTodoInfo = useSetRecoilState(patchTodoInfo);

  const closePathModal = () => {
    setTodoModalOn(!todoModalOn);
  };

  const closeCrModal = () => {
    setCreateModalOn(!createModalOn);
  };

  const patchTodo = (
    id,
    todo,
    memo,
    startDate,
    startDateTime,
    endDate,
    endDateTime,
    priority
  ) => {
    setPatchTodoInfo({
      id,
      toDo: todo,
      memo,
      startDate,
      startDateTime,
      endDate,
      endDateTime,
      priority,
    });
    setTodoModalOn(!todoModalOn);
  };

  const { data: getTodo } = useQuery(['TODO'], GetTodo, {
    onSuccess: response => {
      // console.log(response);
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
          id: el.toDoId,

          todo: el.toDo,
          memo: el.memo,
          startDate: el.startDate,
          startDateTime: el.startDateTime,
          endDate: el.endDate,
          endDateTime: el.endDateTime,
          priority: el.priority,
        };
        array.push(obj);
        return setCalendarData(array);
      });
    },
    onError: response => {},
  });

  const handleDateClick = clickDateInfo => {
    // console.log(clickDateInfo);
    setDateInfo({
      ...dateInfo,
      start: clickDateInfo.startStr,
      startDateTime: '00:00',
    });
    console.log('생성');
    setCreateModalOn(true);
  };

  const handleEventClick = clickDateInfo => {
    console.log(clickDateInfo.event.id);
    console.log('수정');
    patchTodo(
      clickDateInfo.event.id,
      clickDateInfo.event.extendedProps.todo,
      clickDateInfo.event.extendedProps.memo,
      clickDateInfo.event.extendedProps.startDate,
      clickDateInfo.event.extendedProps.startDateTime,
      clickDateInfo.event.extendedProps.endDate,
      clickDateInfo.event.extendedProps.endDateTime,
      clickDateInfo.event.extendedProps.priority
    );
    setTodoModalOn(true);
  };

  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        locale='ko'
        // dateClick={handleDateClick}
        // eventContent={renderEventContent}
        selectable={true}
        select={handleDateClick}
        eventClick={handleEventClick}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        events={calendarData}
      />
      <Potal>
        {todoModalOn ? <TodoPathModal onCloseModal={closePathModal} /> : null}
      </Potal>
      <Potal>
        {createModalOn && (
          <TodoModal
            onCloseTodoModal={closeCrModal}
            formCalendar={formCalendar}
            dateInfo={dateInfo}
          />
        )}
      </Potal>
    </Container>
  );
}
