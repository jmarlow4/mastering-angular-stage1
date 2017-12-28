export interface IntTask {
  uuid?: string;
  title: string;
  description: string;
  dateCreated: Date;
  dateCompleted: Date;
  listId?: string;
}
