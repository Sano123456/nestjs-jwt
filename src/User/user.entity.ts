import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId, Unique} from "typeorm";
import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';


@Entity("users")
export class User {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id: number;

    @Column("character varying",{ 
        nullable:true,
        length:100000,
        name:"json_params"
        })
    json_params:string;
        
    
    @Column({ nullable: true, default:"" })
    device_id: string;

    @Column({ nullable: false })
    @IsNotEmpty({
        message: 'NOT_EMPTY',
    })
    @IsEmail(
        {},
        {
        message: 'MUST_BE_EMAIL',
        },
    )
    email: string;

    @Column("character varying",{ 
        nullable:true,
        name:"name",
        length:100,
        })
    @IsNotEmpty({message: 'NOT_EMPTY',})
    name: string;

    @Column("character varying",{ 
        nullable:true,
        name:"surname",
        length:100,
        })
    @IsNotEmpty({message: 'NOT_EMPTY',})
    surname: string;

    @Column({ nullable: true })
    nation: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    @IsNotEmpty({
        message: 'NOT_EMPTY',
    })
    
    @Column({ nullable: false, select: false })
    @IsNotEmpty({message: 'NOT_EMPTY',})
    @IsString({
        message: 'MUST_BE_STRING',
    })
    @MinLength(6, {
        message: 'MUST_BE_6_CHAR',
    })
    password: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_date: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    last_active: string;

    @Column("character varying", {
        nullable: false,
        length: 100,
        name: "ruolo"
    })
    @IsNotEmpty({message: 'NOT_EMPTY',})
    ruolo: string;

    @Column({ type: 'boolean', default: () => 'true', name: "isactive" })
    isActive: boolean=true;

    @Column({ type: 'boolean', default: () => 'false', name: "isadmin" })
    isAdmin: boolean=false;

    @Column("text", {
        nullable: false,
        name: "qualifica"
    })
    @IsNotEmpty({message: 'NOT_EMPTY',})
    qualifica: string;

    @Column("character varying", {
        nullable: false,
        length: 50,
        name: "rui_code"
    })
    @IsNotEmpty({message: 'NOT_EMPTY',})
    rui_code: string;

    @Column("date", {
        nullable: false,
        name: "rui_date"
    })
    @IsNotEmpty({message: 'NOT_EMPTY',})
    rui_date: Date;
}