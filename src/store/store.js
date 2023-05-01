import { atom, selector } from 'recoil';

export const userInfo = atom({
  key: 'userInfo',
  default: null,
});

// accesstoken에서 userId값 추출
export const userId = atom({
  key: 'userId',
  default: null,
});

//OKRData가져오기
export const getOKRData = atom({
  key: 'getOKRData',
  default: null,
});

export const ToggleStartState = atom({ key: 'toggle', default: false });

export const ToggleEndState = atom({ key: 'endToggle', default: false });

export const patchOKRInfo = atom({
  key: 'patchOKRInfo',
  default: {
    id: 0,
    objective: '',
    startData: '',
    endData: '',
    color: '',
  },
});

export const patchKRInfo = atom({
  key: 'patchKRInfo',
  default: {
    id: 0,
    kr: '',
  },
});

export const patchProgressInfo = atom({
  key: 'progressInfo',
  default: {
    id: 0,
    progress: 0,
    state: '',
  },
});

export const patchTodoInfo = atom({
  key: 'todoInfo',
  default: {
    toDo: '',
    memo: '',
    startDate: '',
    startDateTime: '',
    endDate: '',
    endDateTime: '',
    priority: 0,
  },
});

export const krDataAtom = atom({
  key: 'krData',
  default: null,
});

// 수정 필요
// export const okrCheckSelector = selector({
//   key: 'okrCheck',
//   // get: ({ get }) => {
//   //   const datas = get(krDataAtom)?.map(el => {
//   //     console.log(el);
//   //     const data = { ...el };
//   //     data.checked = true;
//   //     return data;
//   //   });
//   //   return datas;
//   // },
//   get: ({ get }) => get(krDataAtom),
//   // set: ({ set }, checkList) => set(krDataAtom, checkList),
// });

// TodoPage에서 모든 todo 가져오기
export const todoListState = atom({
  key: 'allTodoListState',
  default: null,
});

export const todoListSelector = selector({
  key: 'testAllTodoSelector',
  get: ({ get }) => {
    const todoList = get(todoListState);
    return todoList;
  },
});

//ex) 2023-01-01
export const clickDate = atom({
  key: 'DDay',
  default: null,
});

export const todoDateInfo = atom({
  key: 'todoDateInfo',
  default: {
    targetDate: sessionStorage.getItem('targetDate'),
    teamMembers: [JSON.parse(sessionStorage.getItem('userId'))],
    // teamMembers: [],
    KeyResultIds: JSON.parse(sessionStorage.getItem('kr')),
    // KeyResultIds: [],
    orderby: 'endDate',
    orderbyrole: 'desc',
  },
});

export const dateArray = atom({
  key: 'dateArray',
  default: {
    Sunday: '',
    Saturday: '',
    teamMembers: [JSON.parse(sessionStorage.getItem('userId'))],
  },
});

export const isDone = atom({
  key: 'isDone',
  default: ['done', 'notDone'],
});

//[{...},{...}]
export const teamMemberAtom = atom({
  key: 'teamMemberAtom',
  default: [],
});

// 내 userId [131]
export const myUserIdSelecctor = selector({
  key: 'myUserIdSelecctor',
  get: ({ get }) => {
    const todoMember = get(teamMemberAtom);
    const filterMyId = todoMember?.filter(el => el.myInfo);
    let array = [];
    if (filterMyId) {
      array = [filterMyId[0].userId];
    }
    return array;
  },
});

// 팀원들 userId
export const filterTeamMemberSelector = selector({
  key: 'teamMemberTodoSelector',
  get: ({ get }) => {
    const todoMember = get(teamMemberAtom);
    const filterTodoMember = todoMember?.map(el => el.userId);
    // console.log('todoMember :', todoMember);
    // return filterTodoMember;
    return todoMember;
  },
});

// kr들
// export const
