export interface TaskType{
  initTime: string | number;
  endTime: string | number;
  duration: string | number;

  name: string;
  description: string;

  state: unknown;
  owner: string;

  initDate: unknown;
  endDate: unknown;
}