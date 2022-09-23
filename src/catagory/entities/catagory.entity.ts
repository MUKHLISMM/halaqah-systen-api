import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";

@Table({
    paranoid:true
})
export class Category extends Model{
    @Column({
        primaryKey:true,
        autoIncrement:true,
        unique:true
    })
    id:number

    @Column
    name:String

    // @ForeignKey(()=> Halaqah)
    // @Column
    // halaqahId:number
    // @BelongsTo(()=> Halaqah)
    // halaqah:Halaqah

}
