import { atom, selector } from 'recoil';

// 유저 정보
export const userDetail = atom({
  key: 'userInfo',
  default: undefined,
});

// accesstoken에서 userId값 추출
export const userId = atom({
  key: 'userId',
  default: localStorage.getItem('userId'),
});

export const todayFormat = atom({
  key: 'todayFormat',
  default: localStorage.getItem('targetDate'),
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

export const okrDataAtom = atom({
  key: 'okrDataAtom',
  default: null,
});

export const krDataAtom = atom({
  key: 'krData',
  default: null,
});

export const change = atom({
  key: 'change',
  default: 0,
});
export const myChange = atom({
  key: 'myChange',
  default: 0,
});

// 나의 todoList(진행중, 완료) 가져오기
export const todoListState = atom({
  key: 'allTodoListState',
  default: null,
});

export const clickDate = atom({
  key: 'DDay',
  default: null,
});

//
export const todoDateInfo = atom({
  key: 'todoDateInfo',
  default: {
    targetDate: localStorage.getItem('targetDate'),
    teamMembers: [JSON.parse(localStorage.getItem('userId'))],
    KeyResultIds: JSON.parse(localStorage.getItem('kr')),
    orderby: 'endDate',
    orderbyrole: 'desc',
  },
});

// todo navi(토,일)
export const dateArray = atom({
  key: 'dateArray',
  default: {
    Sunday: '',
    Saturday: '',
    teamMembers: [Number(localStorage.getItem('userId'))],
  },
});

// 해당일자의 kr들
export const allKr = atom({
  key: 'allKr',
  default: [],
});

// 필터링 완료, 미완료
export const isDone = atom({
  key: 'isDone',
  default: ['done', 'notDone'],
});

// 팀원들 정보
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

// get 여러개 test
export const test = selector({
  key: 'test',
  get: ({ get }) => {
    const id = get(userId);
    const obj = {
      // targetDate: sessionStorage.getItem('targetDate'),
      teamMembers: [id],
      // KeyResultIds: JSON.parse(sessionStorage.getItem('kr')),
      orderby: 'endDate',
      orderbyrole: 'desc',
    };
    return obj;
  },
});

// --------------
export const expirationAtom = atom({
  key: 'expirationAtom',
  default: [],
});

export const progressAtom = atom({
  key: 'progressAtom',
  default: [],
});

export const completionAtom = atom({
  key: 'completionAtom',
  default: [],
});
