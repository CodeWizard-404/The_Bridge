export class Course {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    duration: string,
    imageUrl: string,
    status: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.duration = duration;
    this.imageUrl = imageUrl;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
