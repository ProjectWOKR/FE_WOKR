import { GetMyTodo, GetTodo } from '../../../apis/apiGET';
import { patchTodoInfo } from '../../../store/store';
import { Container } from '../../../styles/Calendar.styled';
import Potal from '../../global/globalModal/Potal';
import TodoModal from '../../global/globalModal/TodoModal';
import TodoPathModal from '../../global/globalModal/TodoPathModal';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

export default function Calendar() {
  const [todoModalOn, setTodoModalOn] = useState(false);
  const [createModalOn, setCreateModalOn] = useState(false);
  const [calendarData, setCalendarData] = useState();

  const [fromCalendar, setFromCalendar] = useState(true);
  const [dateInfo, setDateInfo] = useState({
    start: '',
    startDateTime: '',
  });

  const array = [];

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

  const { data: myTodo } = useQuery(['ToDo'], GetMyTodo, {
    onSuccess: response => {
      // console.log(response);
      const completion = [...response.completionTodo];
      const progress = [...response.progressTodo];
      const newArray = [...completion, ...progress];

      newArray?.map(el => {
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
  });

  const handleDateClick = clickDateInfo => {
    setDateInfo({
      ...dateInfo,
      start: clickDateInfo.startStr,
      startDateTime: '00:00',
    });
    setCreateModalOn(true);
  };

  const handleEventClick = clickDateInfo => {
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
            fromCalendar={fromCalendar}
            dateInfo={dateInfo}
          />
        )}
      </Potal>
    </Container>
  );
}
