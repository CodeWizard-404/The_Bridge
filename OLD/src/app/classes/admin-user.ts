export class AdminUser {
    id!: number;
    username!: string;
    role!: string;
  
    constructor(init?: Partial<AdminUser>) {
      Object.assign(this, init);
    }
  }
  