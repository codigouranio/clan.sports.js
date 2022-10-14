import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  streeAddress: string;

  @Column()
  postalCode: string;

  @Column()
  addressCountry: string;

  @Column()
  addressState: string;

  @Column()
  photo: string;

  @Column({ default: true })
  isActive: boolean;
}
