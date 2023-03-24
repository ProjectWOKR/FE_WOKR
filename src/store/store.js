import { atom } from 'recoil';

export const NowState = atom({ key: 'now', default: '0' });

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
