import { get } from 'react-scroll/modules/mixins/scroller';
import { atom, selector } from 'recoil';

// export const NowState = atom({
//   key: 'menu',
//   default: 'Dashboard',
// });

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
