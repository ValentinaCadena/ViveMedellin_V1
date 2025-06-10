// types/group.ts
export interface Group {
  id?: number;
  image: string;
  title: string;
  topic: string;
  members: number;
  isPrivate: boolean;
  author: string;
  date: string;
}
