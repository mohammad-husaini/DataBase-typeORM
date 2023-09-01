import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id;
  @Column({ nullable: false })
  user;
  @Column({ nullable: false })
  password;
}
