import { AppDataSource } from '../config/typeorm';
import { JobSeekerProfileEmployment } from '../entities/jobSeekerProfileEmployment.entity';
import { JobSeekerProfileEmploymentSkills } from '../entities/jobSeekerProfileEmploymentSkills.entity';
const jobSeekerProfileEmploymentRepository = AppDataSource.getRepository(JobSeekerProfileEmployment);
const jobSeekerProfileEmploymentSkillsRepository = AppDataSource.getRepository(JobSeekerProfileEmploymentSkills);

export const saveJobSeekerProfileEmployment = async (jobSeekerProfileEmploymentParams: JobSeekerProfileEmployment) => {
    try {
        console.log("jobSeekerProfileEmploymentParams-->", jobSeekerProfileEmploymentParams);
        
        let jobSeekerProfileEmployment: any;
        let jobSeekerProfileEmploymentSkills: any = new Array();
        if (jobSeekerProfileEmploymentParams?.id) {
            let updatedObj: any = { ...jobSeekerProfileEmploymentParams };
            delete updatedObj.jobSeekerProfileEmploymentSkills;
            let updatedValue = await jobSeekerProfileEmploymentRepository.update(jobSeekerProfileEmploymentParams.id, { ...updatedObj });
            if (updatedValue.affected == 1) {
                await jobSeekerProfileEmploymentSkillsRepository.delete({ jobSeekerProfileEmployment: jobSeekerProfileEmploymentParams.id as any });
                for (let i = 0; i < jobSeekerProfileEmploymentParams.jobSeekerProfileEmploymentSkills.length; i++) {
                    let jspeskills: any = new Object();
                    jspeskills.jobSeekerProfileId = jobSeekerProfileEmploymentParams.jobSeekerProfile;
                    jspeskills.jobSeekerProfileEmployment = jobSeekerProfileEmploymentParams.id;
                    jspeskills.keySkills = jobSeekerProfileEmploymentParams.jobSeekerProfileEmploymentSkills[i];
                    let savedJobSeekerProfileEmploymentSkills = await jobSeekerProfileEmploymentSkillsRepository.save(jspeskills);
                    jobSeekerProfileEmploymentSkills.push(savedJobSeekerProfileEmploymentSkills);
                }
                jobSeekerProfileEmployment = await jobSeekerProfileEmploymentRepository.findOne({
                    where: {
                        id: jobSeekerProfileEmploymentParams.id
                    }
                })
            }
        } else {
            jobSeekerProfileEmployment = await jobSeekerProfileEmploymentRepository.save(jobSeekerProfileEmploymentParams);
            if (jobSeekerProfileEmployment) {
                console.log("jobSeekerProfileEmploymentParams.jobSeekerProfileEmploymentSkills", jobSeekerProfileEmploymentParams.jobSeekerProfileEmploymentSkills);
                
                for (let i = 0; i < jobSeekerProfileEmploymentParams.jobSeekerProfileEmploymentSkills.length; i++) {
                    let jspeskills: any = new Object();
                    jspeskills.jobSeekerProfileId = jobSeekerProfileEmploymentParams.jobSeekerProfile;
                    jspeskills.jobSeekerProfileEmployment = jobSeekerProfileEmployment.id;
                    jspeskills.keySkills = jobSeekerProfileEmploymentParams.jobSeekerProfileEmploymentSkills[i];
                    let savedJobSeekerProfileEmploymentSkills = await jobSeekerProfileEmploymentSkillsRepository.save(jspeskills);
                    jobSeekerProfileEmploymentSkills.push(savedJobSeekerProfileEmploymentSkills);
                }
            }
        }
        //jobSeekerProfileEmployment = JSON.parse(JSON.stringify(jobSeekerProfileEmployment));
        //jobSeekerProfileEmployment.jobSeekerProfileEmploymentSkills = jobSeekerProfileEmploymentSkills;
        console.log("jobSeekerProfileEmployment", jobSeekerProfileEmployment);
        
        return jobSeekerProfileEmployment;
    } catch (error) {
        console.log("error-->", error);
        
        throw error;
    }
}