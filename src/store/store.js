import { atom } from 'recoil';

export const NowState = atom({ key: 'now', default: '0' });

export const ToggleStartState = atom({ key: 'toggle', default: false });

export const ToggleEndState = atom({ key: 'endToggle', default: false });
