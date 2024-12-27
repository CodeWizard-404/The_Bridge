export class Course {
  id!: number;
  title!: string;
  description!: string;
  price!: number;
  duration!: string;
  categoryId!: number;
  imageUrl!: string;
  status!: boolean;

  constructor(init?: Partial<Course>) {
    Object.assign(this, init);
  }
}
