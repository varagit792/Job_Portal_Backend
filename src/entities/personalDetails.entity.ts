import { Entity, Column, OneToOne, JoinColumn, OneToMany, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { JobSeekerProfile } from './jobSeekerProfile.entity';
import { Language } from './language.entity';

@Entity()
export class PersonalDetails extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id!: number

    @Column({ default: null })
    gender!: string;

    @Column({ default: null })
    maritalStatus!: string;

    @Column({ default: null })
    birthDate!: string;

    @Column({ default: null })
    category!: string;

    @Column({ default: null })
    differentlyAbled!: boolean

    @Column({ default: null })
    careerBreak!: boolean

    @Column({ default: null })
    permanentAddress!: string

    @Column({ default: null })
    homeTown!: string

    @Column({ default: null })
    pinCode!: string

    @OneToOne(() => JobSeekerProfile, jobSeekerProfile => jobSeekerProfile.personalDetails)
    @JoinColumn()
    jobSeekerProfile: JobSeekerProfile | undefined;

    @OneToMany(() => Language, (language) => language.personalDetails, { createForeignKeyConstraints: true, cascade: true })
    language: Language[] | undefined;
}

