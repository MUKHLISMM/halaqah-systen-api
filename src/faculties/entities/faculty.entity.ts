import { Column, Model, Table } from "sequelize-typescript";

@Table({
    paranoid: true
})
export class Faculty  extends Model{
    @Column({
        primaryKey: true,
        autoIncrement:true,
        unique:true
    })
    id: number

    @Column
    name: String

    @Column
    shortName: String

}
