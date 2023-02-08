export type NoticeState = 'SCHEDULE' | 'BOOKING' | 'PROGRESS' | 'TERMINATION';
export type NoticeItem = {
  id: number;
  startDate: string;
  endDate: string;
  state: NoticeState;
};
