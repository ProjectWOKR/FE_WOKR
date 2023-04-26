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
export const okrCheckSelector = selector({
  key: 'okrCheck',
  // get: ({ get }) => {
  //   const datas = get(krDataAtom)?.map(el => {
  //     console.log(el);
  //     const data = { ...el };
  //     data.checked = true;
  //     return data;
  //   });
  //   return datas;
  // },
  get: ({ get }) => get(krDataAtom),
  set: ({ set }, checkList) => set(krDataAtom, checkList),
});

// TodoPage에서 모든 todo 가져오기
export const allTodoListState = atom({
  key: 'allTodoListState',
  default: null,
});

export const AllTodoSelector = selector({
  key: 'testAllTodoSelector',
  get: ({ get }) => {
    const todoList = get(allTodoListState);
    return todoList;
  },
});
