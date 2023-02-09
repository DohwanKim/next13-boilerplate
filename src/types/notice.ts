export type NoticeStateType =
  | 'SCHEDULE'
  | 'BOOKING'
  | 'PROGRESS'
  | 'TERMINATION';
export type NoticeItemType = {
  id: number;
  startDate: string;
  endDate: string;
  state: NoticeStateType;
  title: string;
};
