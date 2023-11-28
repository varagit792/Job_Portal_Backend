import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PersonalDetails } from './personalDetails.entity';

@Entity()
export class Language extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    languageId!: number

    @Column({ default: null })
    language!: string;

    @Column({ default: null })
    proficiency!: string;

    @Column({ default: null })
    read!: boolean;

    @Column({ default: null })
    write!: boolean;

    @Column({ default: null })
    speak!: boolean;

    @ManyToOne(() => PersonalDetails, (personalDetails) => personalDetails.language, { onDelete: 'CASCADE' })
    personalDetails: PersonalDetails | undefined;
}