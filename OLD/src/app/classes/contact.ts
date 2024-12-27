export class Contact {
    id!: number;
    name!: string;
    email!: string;
    message!: string;
    submittedAt!: Date;
  
    constructor(init?: Partial<Contact>) {
      Object.assign(this, init);
    }
  }
  