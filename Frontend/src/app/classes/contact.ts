export class Contact {
    id: number;
    name: string;
    email: string;
    message: string;
    submittedAt: Date;
  
    constructor(id: number, name: string, email: string, message: string, submittedAt: Date) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.message = message;
      this.submittedAt = submittedAt;
    }
  }
  