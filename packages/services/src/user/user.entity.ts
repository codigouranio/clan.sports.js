import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Index()
  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  streeAddress?: string;

  @Column({ nullable: true })
  postalCode?: string;

  @Column({ nullable: true })
  addressCountry?: string;

  @Column({ nullable: true })
  addressState?: string;

  @Column({ nullable: true })
  photo?: string;

  @Column({ default: true })
  isActive?: boolean;
}
