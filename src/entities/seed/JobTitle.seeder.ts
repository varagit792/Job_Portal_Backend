import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { JobTitle } from '../jobTitle.entity';

export default class JobTitleSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(JobTitle);
    await repository.upsert([
      {
        title: 'ABA Therapist',
        status: true,
      },
      {
        title: 'ABAP Developer',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Academic Administrator',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Academic Advisor',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Academic And Behavior Support Staff',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Academic Coach',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Academic Coordinator',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Academic Counselor',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Academic Dean',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Academic Director',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Academic Tutor',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accident Benefits Representative',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accommodation Service Specialist',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accompanist',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Administrator',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Analyst',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Assistant',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Associate',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Based Marketing Manager',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Coordinator',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Development Executive',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Development Manager',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Development Representative',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Director',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Handler',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Manager',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Administrator',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Analyst',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Assistant',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Associate',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Auditor',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Bookkeeper',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Clerk',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Consultant',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Controller',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Coordinator',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Director',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Generalist',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Instructor',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Intern',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Lead',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Manager',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Office Associate',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Officer',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Operations Analyst',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Operations Recruiting Manager',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Professor',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Specialist',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Supervisor',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Support',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Technician',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Accounting Tutor',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Lead',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Payable Clerk',
        status: true,
      },
      {
        title: 'status: true,',
        status: true,
      },


      {
        title: 'Account Receivable Specialist',
        status: true,
      },
      {
        title: 'Account Relationship Manager',
        status: true,
      },
      {
        title: 'Account Representative',
        status: true,
      },
      {
        title: 'Accounts Administrator',
        status: true,
      },
      {
        title: 'Accounts Assistant',
        status: true,
      },
      {
        title: 'Accounts Associate',
        status: true,
      },
      {
        title: 'Accounts Clerk',
        status: true,
      },
      {
        title: 'Accounts Executive',
        status: true,
      },
      {
        title: 'Accounts Manager',
        status: true,
      },
      {
        title: 'Accounts Payable',
        status: true,
      },
      {
        title: 'Accounts Payable Accountant',
        status: true,
      },
      {
        title: 'Accounts Payable Administrator',
        status: true,
      },
      {
        title: 'Accounts Payable Analyst',
        status: true,
      },
      {
        title: 'Accounts Payable And Receivable Clerk',
        status: true,
      },
      {
        title: 'Accounts Payable Assistant',
        status: true,
      },
      {
        title: 'Accounts Payable Associate',
        status: true,
      },
      {
        title: 'Accounts Payable Clerk',
        status: true,
      },
      {
        title: 'Accounts Payable Coordinator',
        status: true,
      },
      {
        title: 'Accounts Payable Lead',
        status: true,
      },
      {
        title: 'Accounts Payable Manager',
        status: true,
      },
      {
        title: 'Accounts Payable Officer',
        status: true,
      },
      {
        title: 'Accounts Payable Processor',
        status: true,
      },
      {
        title: 'Accounts Payable Representative',
        status: true,
      },
      {
        title: 'Accounts Payable Specialist',
        status: true,
      },
      {
        title: 'Accounts Payable Supervisor',
        status: true,
      },
      {
        title: 'Accounts Payable Support',
        status: true,
      },
      {
        title: 'Accounts Payable Team Lead',
        status: true,
      },
      {
        title: 'Accounts Payable Technician',
        status: true,
      },
      {
        title: 'Account Specialist',
        status: true,
      },
      {
        title: 'Accounts Receivable',
        status: true,
      },
      {
        title: 'Accounts Receivable Accountant',
        status: true,
      },
      {
        title: 'Accounts Receivable Admin',
        status: true,
      },
      {
        title: 'Accounts Receivable Administrator',
        status: true,
      },
      {
        title: 'Accounts Receivable Analyst',
        status: true,
      },
      {
        title: 'Accounts Receivable Assistant',
        status: true,
      },
      {
        title: 'Accounts Receivable Associate',
        status: true,
      },
      {
        title: 'Accounts Receivable Clerk',
        status: true,
      },
      {
        title: 'Accounts Receivable Collections Clerk',
        status: true,
      },
      {
        title: 'Accounts Receivable Coordinator',
        status: true,
      },
      {
        title: 'Accounts Receivable Manager',
        status: true,
      },
      {
        title: 'Accounts Receivable Representative',
        status: true,
      },
      {
        title: 'Accounts Receivable Specialist',
        status: true,
      },
      {
        title: 'Accounts Receivable Supervisor',
        status: true,
      },
      {
        title: 'Accounts Receivable Team Lead',
        status: true,
      },
      {
        title: 'Account Executive',
        status: true,
      },
      {
        title: 'Account Strategist',
        status: true,
      },
      {
        title: 'Account Supervisor',
        status: true,
      },
      {
        title: 'Account Support Analyst',
        status: true,
      },
      {
        title: 'Account Support Manager',
        status: true,
      },
      {
        title: 'Account Support Mobile Officer',
        status: true,
      },
      {
        title: 'Account Support Officer',
        status: true,
      },
      {
        title: 'Account Support Specialist',
        status: true,
      },
      {
        title: 'Accountant',
        status: true,
      },
      {
        title: 'Acoustic Consultant',
        status: true,
      },
      {
        title: 'Acquisition Marketing Manager',
        status: true,
      },
      {
        title: 'Acquisitions Associate',
        status: true,
      },
      {
        title: 'Acquisition Specialist',
        status: true,
      },
      {
        title: 'Acrylic Bath Installer',
        status: true,
      },
      {
        title: 'Actuary',
        status: true,
      },
      {
        title: 'Active Directory Engineer',
        status: true,
      },
      {
        title: 'Active Directory System Administrator',
        status: true,
      },
      {
        title: 'Activities Assistant',
        status: true,
      },
      {
        title: 'Activities Coordinator',
        status: true,
      },
      {
        title: 'Activities Director',
        status: true,
      },
      {
        title: 'Activity Aide',
        status: true,
      },
      {
        title: 'Activity Assistant',
        status: true,
      },
      {
        title: 'Activity Coordinator',
        status: true,
      },
      {
        title: 'Activity Leader',
        status: true,
      },
      {
        title: 'Actor',
        status: true,
      },
      {
        title: 'Actuarial Advisor',
        status: true,
      },
      {
        title: 'Actuarial Analyst',
        status: true,
      },
      {
        title: 'Actuarial Assistant',
        status: true,
      },
      {
        title: 'Actuarial Associate',
        status: true,
      },
      {
        title: 'Actuarial Audit Manager',
        status: true,
      },
      {
        title: 'Actuarial Director',
        status: true,
      },
      {
        title: 'Actuarial Manager',
        status: true,
      },
      {
        title: 'Acupuncturist',
        status: true,
      },
      {
        title: 'Acute Care Nurse Practitioner',
        status: true,
      },
      {
        title: 'Ad Campaign Manager',
        status: true,
      },
      {
        title: 'Added Service Technician',
        status: true,
      },
      {
        title: 'Addiction Counselor',
        status: true,
      },
      {
        title: 'Adjudicator',
        status: true,
      },
      {
        title: 'Adjunct Instructor',
        status: true,
      },
      {
        title: 'Adjunct Nursing Faculty',
        status: true,
      },
      {
        title: 'Adjunct Professor',
        status: true,
      },
      {
        title: 'Adjunct Teacher',
        status: true,
      },
      {
        title: 'Adjuster',
        status: true,
      },
      {
        title: 'Administration Assistant',
        status: true,
      },
      {
        title: 'Administration Executive',
        status: true,
      },
      {
        title: 'Administration Manager',
        status: true,
      },
      {
        title: 'Administration Officer',
        status: true,
      },
      {
        title: 'Administrative Analyst',
        status: true,
      },
      {
        title: 'Administrative Assistant',
        status: true,
      },
      {
        title: 'Administrative Assistant Purchasing',
        status: true,
      },
      {
        title: 'Administrative Associate',
        status: true,
      },
      {
        title: 'Administrative Clerk',
        status: true,
      },
      {
        title: 'Administrative Clerks Supervisor',
        status: true,
      },
      {
        title: 'Administrative Coordinator',
        status: true,
      },
      {
        title: 'Administrative Director',
        status: true,
      },
      {
        title: 'Administrative Law Judge',
        status: true,
      },
      {
        title: 'Administrative Manager',
        status: true,
      },
      {
        title: 'Administrative Office Assistant',
        status: true,
      },
      {
        title: 'Administrative Officer',
        status: true,
      },
      {
        title: 'Administrative Operations Specialist',
        status: true,
      },
      {
        title: 'Administrative Processor',
        status: true,
      },
      {
        title: 'Administrative Receptionist',
        status: true,
      },
      {
        title: 'Administrative Sales Assistant',
        status: true,
      },
      {
        title: 'Administrative Secretary',
        status: true,
      },
      {
        title: 'Administrative Services Manager',
        status: true,
      },
      {
        title: 'Administrative Specialist',
        status: true,
      },
      {
        title: 'Administrative Staff',
        status: true,
      },
      {
        title: 'Administrative Store Support',
        status: true,
      },
      {
        title: 'Administrative Supervisor',
        status: true,
      },
      {
        title: 'Administrative Support',
        status: true,
      },
      {
        title: 'Administrative Support Associate',
        status: true,
      },
      {
        title: 'Administrative Support Specialist',
        status: true,
      },
      {
        title: 'Administrative Team Support',
        status: true,
      },
      {
        title: 'Administrative Technician',
        status: true,
      },
      {
        title: 'Administrator',
        status: true,
      },
      {
        title: 'Admin Processor',
        status: true,
      },
      {
        title: 'Admin Specialist',
        status: true,
      },
      {
        title: 'Admin Support',
        status: true,
      },
      {
        title: 'Admissions Advisor',
        status: true,
      },
      {
        title: 'Admissions Assistant',
        status: true,
      },
      {
        title: 'Admissions Coordinator',
        status: true,
      },
      {
        title: 'Admissions Counselor',
        status: true,
      },
      {
        title: 'Admissions Manager',
        status: true,
      },
      {
        title: 'Admissions Officer',
        status: true,
      },
      {
        title: 'Admissions Representative',
        status: true,
      },
      {
        title: 'Admissions Specialist',
        status: true,
      },
      {
        title: 'Admitting Clerk',
        status: true,
      },
      {
        title: 'Adobe Analytics Consultant',
        status: true,
      },
      {
        title: 'Adobe Sign Enterprise Account Executive',
        status: true,
      },
      {
        title: 'Adobe Sign Implementation Consultant',
        status: true,
      },
      {
        title: 'Ad Operations Coordinator',
        status: true,
      },
      {
        title: 'Ad Operations Manager',
        status: true,
      },
      {
        title: 'Ad Operations Specialist',
        status: true,
      },
      {
        title: 'Adoption Social Worker',
        status: true,
      },
      {
        title: 'Adoption Specialist',
        status: true,
      },
      {
        title: 'Ads Manager',
        status: true,
      },
      {
        title: 'Adult Psychiatric Clinician',
        status: true,
      },
      {
        title: 'Advanced Administrative Assistant',
        status: true,
      },
      {
        title: 'Advanced Analytics',
        status: true,
      },
      {
        title: 'Advanced Analytics Manager',
        status: true,
      },
      {
        title: 'Advanced Auditor',
        status: true,
      },
      {
        title: 'Advanced Care Paramedic',
        status: true,
      },
      {
        title: 'Advanced Case Manager',
        status: true,
      },
      {
        title: 'Advanced C++ Developer',
        status: true,
      },
      {
        title: 'Advanced Install Technician',
        status: true,
      },
      {
        title: 'Advanced Manufacturing Engineer',
        status: true,
      },
      {
        title: 'Advanced Medical Support Assistant',
        status: true,
      },
      {
        title: 'Advanced Nurse Practitioner',
        status: true,
      },
      {
        title: 'Advanced Product Specialist',
        status: true,
      },
      {
        title: 'Advanced Service Technician',
        status: true,
      },
      {
        title: 'Advanced System Administrator',
        status: true,
      },
      {
        title: 'Advanced Technician',
        status: true,
      },
      {
        title: 'Advertising Account Executive',
        status: true,
      },
      {
        title: 'Advertising Account Manager',
        status: true,
      },
      {
        title: 'Advertising Assistant',
        status: true,
      },
      {
        title: 'Advertising Compliance Manager',
        status: true,
      },
      {
        title: 'Advertising Consultant',
        status: true,
      },
      {
        title: 'Advertising Coordinator',
        status: true,
      },
      {
        title: 'Advertising Director',
        status: true,
      },
      {
        title: 'Advertising Manager',
        status: true,
      },
      {
        title: 'Advertising Operations Specialist',
        status: true,
      },
      {
        title: 'Advertising Sales',
        status: true,
      },
      {
        title: 'Advertising Sales Representative',
        status: true,
      },
      {
        title: 'Adviser Success Manager',
        status: true,
      },
      {
        title: 'Advisor Financial Planning',
        status: true,
      },
      {
        title: 'Advisor Recruitment Consultant',
        status: true,
      },
      {
        title: 'Advisory Analyst',
        status: true,
      },
      {
        title: 'Advisory Application Developer',
        status: true,
      },
      {
        title: 'Advisory Consultant',
        status: true,
      },
      {
        title: 'Advisory Engagement Manager',
        status: true,
      },
      {
        title: 'Advocate',
        status: true,
      },
      {
        title: 'AEM Architect',
        status: true,
      },
      {
        title: 'AEM Cloud Site Reliability Engineer',
        status: true,
      },
      {
        title: 'AEM Developer',
        status: true,
      },
      {
        title: 'AEM Front End Developer',
        status: true,
      },
      {
        title: 'AEM Technical Architect',
        status: true,
      },
      {
        title: 'AEM Technical Consultant',
        status: true,
      },
      {
        title: 'AEM Technical Lead',
        status: true,
      },
      {
        title: 'Aerial Lineman',
        status: true,
      },
      {
        title: 'Aerodynamics Engineer',
        status: true,
      },
      {
        title: 'Aeronautical Engineer',
        status: true,
      },
      {
        title: 'Aerospace Engineer',
        status: true,
      },
      {
        title: 'Aerospace Technician',
        status: true,
      },
      {
        title: 'Aesthetician',
        status: true,
      },
      {
        title: 'Aesthetic Nurse',
        status: true,
      },
      {
        title: 'Affiliate Account Manager',
        status: true,
      },
      {
        title: 'Affiliate Associate Account Manager',
        status: true,
      },
      {
        title: 'Affiliate Manager',
        status: true,
      },
      {
        title: 'Affiliate Marketing Manager',
        status: true,
      },
      {
        title: 'Affiliate Sales Representative',
        status: true,
      },
      {
        title: 'Affordable Regional Manager',
        status: true,
      },
      {
        title: 'After School Educator',
        status: true,
      },
      {
        title: 'After School Enrichment Pod Instructor',
        status: true,
      },
      {
        title: 'After School Program Leader',
        status: true,
      },
      {
        title: 'After School Teacher',
        status: true,
      },
      {
        title: 'Agency Administrator',
        status: true,
      },
      {
        title: 'Agency Manager',
        status: true,
      },
      {
        title: 'Agency Nurse',
        status: true,
      },
      {
        title: 'Agency Owner',
        status: true,
      },
      {
        title: 'Agents Assistant',
        status: true,
      },
      {
        title: 'Agglomerator Operator',
        status: true,
      },
      {
        title: 'Agile Business Analyst',
        status: true,
      },
      {
        title: 'Agile Coach',
        status: true,
      },
      {
        title: 'Agile Delivery Lead',
        status: true,
      },
      {
        title: 'Agile Delivery Manager',
        status: true,
      },
      {
        title: 'Agile Developer',
        status: true,
      },
      {
        title: 'Agile Marketing Scrum Master',
        status: true,
      },
      {
        title: 'Agile Product Owner',
        status: true,
      },
      {
        title: 'Agile Program Manager',
        status: true,
      },
      {
        title: 'Agile Project Manager',
        status: true,
      },
      {
        title: 'Agile Scrum Master',
        status: true,
      },
      {
        title: 'Agile Transformation Coach',
        status: true,
      },
      {
        title: 'Agribusiness Student',
        status: true,
      },
      {
        title: 'Agricultural Economist',
        status: true,
      },
      {
        title: 'Agricultural Engineer',
        status: true,
      },
      {
        title: 'Agriculture Teacher',
        status: true,
      },
      {
        title: 'Agronomist',
        status: true,
      },
      {
        title: 'A&H Underwriter',
        status: true,
      },
      {
        title: 'A&H Underwriting Manager',
        status: true,
      },
      {
        title: 'AI Deployment Strategist',
        status: true,
      },
      {
        title: 'AI Engineer',
        status: true,
      },
      {
        title: 'Aiops Solution Architect',
        status: true,
      },
      {
        title: 'Airborne Command And Control Subject Matter Expert',
        status: true,
      },
      {
        title: 'Air Conditioning Engineer',
        status: true,
      },
      {
        title: 'Aircraft Assembler',
        status: true,
      },
      {
        title: 'Aircraft Cleaner',
        status: true,
      },
      {
        title: 'Aircraft Dispatcher',
        status: true,
      },
      {
        title: 'Aircraft Electrician',
        status: true,
      },
      {
        title: 'Aircraft Engineer',
        status: true,
      },
      {
        title: 'Aircraft Engine Mechanic',
        status: true,
      },
      {
        title: 'Aircraft Fueler',
        status: true,
      },
      {
        title: 'Aircraft Inspector',
        status: true,
      },
      {
        title: 'Aircraft Maintenance Engineer',
        status: true,
      },
      {
        title: 'Aircraft Maintenance Technician',
        status: true,
      },
      {
        title: 'Aircraft Mechanic',
        status: true,
      },
      {
        title: 'Aircraft Painter',
        status: true,
      },
      {
        title: 'Aircraft Technician',
        status: true,
      },
      {
        title: 'AI Researcher',
        status: true,
      },
      {
        title: 'Air Export Agent',
        status: true,
      },
      {
        title: 'Air Export Coordinator',
        status: true,
      },
      {
        title: 'Air Import Coordinator',
        status: true,
      },
      {
        title: 'Airline Pilot',
        status: true,
      },
      {
        title: 'Airline Sales Manager',
        status: true,
      },
      {
        title: 'Airline Supply Product Lead',
        status: true,
      },
      {
        title: 'Air Marshal',
        status: true,
      },
      {
        title: 'Airport Civil Engineer',
        status: true,
      },
      {
        title: 'Airport Manager',
        status: true,
      },
      {
        title: 'Air Supply Implementation Specialist',
        status: true,
      },
      {
        title: 'Air Traffic Controller',
        status: true,
      },
      {
        title: 'Airworthiness And Engineering Manager',
        status: true,
      },
      {
        title: 'AI Scientist',
        status: true,
      },
      {
        title: 'AIS Fund Administrator',
        status: true,
      },
      {
        title: 'Aix Support Administrator',
        status: true,
      },
      {
        title: 'Alarm Installation Tech',
        status: true,
      },
      {
        title: 'Alarm Installation Technician',
        status: true,
      },
      {
        title: 'Alarm Installer',
        status: true,
      },
      {
        title: 'Alarm Install Technician',
        status: true,
      },
      {
        title: 'Alarm Service Technician',
        status: true,
      },
      {
        title: 'Alarm Technician',
        status: true,
      },
      {
        title: 'Algorithm Developer',
        status: true,
      },
      {
        title: 'Algorithm Engineer',
        status: true,
      },
      {
        title: 'Alliance Manager',
        status: true,
      },
      {
        title: 'Alliances Manager',
        status: true,
      },
      {
        title: 'Allocation Analyst',
        status: true,
      },
      {
        title: 'Allstate Licensed Sales Professional',
        status: true,
      },
      {
        title: 'Alterations Associate',
        status: true,
      },
      {
        title: 'Alterations Manager',
        status: true,
      },
      {
        title: 'Amazon Account Manager',
        status: true,
      },
      {
        title: 'Amazon Delivery Driver',
        status: true,
      },
      {
        title: 'Amazon Marketplace Manager',
        status: true,
      },
      {
        title: 'Ambassador',
        status: true,
      },
      {
        title: 'Ambulance Driver',
        status: true,
      },
      {
        title: 'Amcs Case Manager',
        status: true,
      },
      {
        title: 'AML Analyst',
        status: true,
      },
      {
        title: 'AML Compliance Analyst',
        status: true,
      },
      {
        title: 'AML Investigator',
        status: true,
      },
      {
        title: 'Amphibian Salvage Crew Lead',
        status: true,
      },
      {
        title: 'Analog Design Engineer',
        status: true,
      },
      {
        title: 'Analyst Operations',
        status: true,
      },
      {
        title: 'Analytical Chemist',
        status: true,
      },
      {
        title: 'Analytical Development Chemist',
        status: true,
      },
      {
        title: 'Analytical Lab Supervisor',
        status: true,
      },
      {
        title: 'Analytical Scientist',
        status: true,
      },
      {
        title: 'Analytics And Optimization Manager',
        status: true,
      },
      {
        title: 'Analytics Architect',
        status: true,
      },
      {
        title: 'Analytics Consultant',
        status: true,
      },
      {
        title: 'Analytics Developer',
        status: true,
      },
      {
        title: 'Analytics Engineer',
        status: true,
      },
      {
        title: 'Analytics Manager',
        status: true,
      },
      {
        title: 'Ancillary Revenue Representative',
        status: true,
      },
      {
        title: 'Ancillary Sales Team',
        status: true,
      },
      {
        title: 'Android Application Developer',
        status: true,
      },
      {
        title: 'Android Architect',
        status: true,
      },
      {
        title: 'Android Browser Engineer',
        status: true,
      },
      {
        title: 'Android Developer',
        status: true,
      },
      {
        title: 'Android Engineer',
        status: true,
      },
      {
        title: 'Android Mobile Application Developer',
        status: true,
      },
      {
        title: 'Android Mobile Developer',
        status: true,
      },
      {
        title: 'Android Software Engineer',
        status: true,
      },
      {
        title: 'Android UI Engineer',
        status: true,
      },
      {
        title: 'Anesthesia Assistant',
        status: true,
      },
      {
        title: 'Anesthesia Technician',
        status: true,
      },
      {
        title: 'Anesthesiologist',
        status: true,
      },
      {
        title: 'Anesthesiologist Assistant',
        status: true,
      },
      {
        title: 'Anesthetist',
        status: true,
      },
      {
        title: 'Angular Developer',
        status: true,
      },
      {
        title: 'Angular Frontend Developer',
        status: true,
      },
      {
        title: 'Animal Care Assistant',
        status: true,
      },
      {
        title: 'Animal Care Attendant',
        status: true,
      },
      {
        title: 'Animal Care Taker',
        status: true,
      },
      {
        title: 'Animal Care Technician',
        status: true,
      },
      {
        title: 'Animal Control Officer',
        status: true,
      },
      {
        title: 'Animal Cruelty Investigator',
        status: true,
      },
      {
        title: 'Animal Health Technician',
        status: true,
      },
      {
        title: 'Animal Health Technologist',
        status: true,
      },
      {
        title: 'Animal Keeper',
        status: true,
      },
      {
        title: 'Animal Scientist',
        status: true,
      },
      {
        title: 'Animal Services',
        status: true,
      },
      {
        title: 'Animal Technician',
        status: true,
      },
      {
        title: 'Animal Trainer',
        status: true,
      },
      {
        title: 'Animation Programmer',
        status: true,
      },
      {
        title: 'Animator',
        status: true,
      },
      {
        title: 'Antenna Engineer',
        status: true,
      },
      {
        title: 'Antibody Development and Immunohistochemistry Technician',
        status: true,
      },
      {
        title: 'Anti Reflective Technician',
        status: true,
      },
      {
        title: 'AP Accountant',
        status: true,
      },
      {
        title: 'Apartment Leasing Agent',
        status: true,
      },
      {
        title: 'Apartment Maintenance Supervisor',
        status: true,
      },
      {
        title: 'Apartment Maintenance Technician',
        status: true,
      },
      {
        title: 'Apartment Manager',
        status: true,
      },
      {
        title: 'Apartment Property Manager',
        status: true,
      },
      {
        title: 'AP Clerk',
        status: true,
      },
      {
        title: 'AP Coordinator',
        status: true,
      },
      {
        title: 'API Architect',
        status: true,
      },
      {
        title: 'API Developer',
        status: true,
      },
      {
        title: 'API Engineer',
        status: true,
      },
      {
        title: 'API Integration Specialist',
        status: true,
      },
      {
        title: 'Apparel Associate',
        status: true,
      },
      {
        title: 'Apparel Designer',
        status: true,
      },
      {
        title: 'Apparel Graphic Designer',
        status: true,
      },
      {
        title: 'Apparel Outfitter',
        status: true,
      },
      {
        title: 'Apparel Processing Outfitter',
        status: true,
      },
      {
        title: 'Apparel Processor',
        status: true,
      },
      {
        title: 'Apparel Sales Associate',
        status: true,
      },
      {
        title: 'Apparel Sales Outfitter',
        status: true,
      },
      {
        title: 'Apparel Team Lead',
        status: true,
      },
      {
        title: 'App Developer',
        status: true,
      },
      {
        title: 'Appian Developer',
        status: true,
      },
      {
        title: 'Apple Repair Technician',
        status: true,
      },
      {
        title: 'Appliance Advisor',
        status: true,
      },
      {
        title: 'Appliance Repair Service Technician',
        status: true,
      },
      {
        title: 'Appliance Repair Technician',
        status: true,
      },
      {
        title: 'Appliances Advisor',
        status: true,
      },
      {
        title: 'Appliance Service Technician',
        status: true,
      },
      {
        title: 'Appliance Specialist',
        status: true,
      },
      {
        title: 'Appliance Technician',
        status: true,
      },
      {
        title: 'Application Administrator',
        status: true,
      },
      {
        title: 'Application Analyst',
        status: true,
      },
      {
        title: 'Application Architect',
        status: true,
      },
      {
        title: 'Application Consultant',
        status: true,
      },
      {
        title: 'Application Develop Engineer',
        status: true,
      },
      {
        title: 'Application Developer',
        status: true,
      },
      {
        title: 'Application Developer Consultant',
        status: true,
      },
      {
        title: 'Application Development Engineer',
        status: true,
      },
      {
        title: 'Application Development Lead',
        status: true,
      },
      {
        title: 'Application Development Manager',
        status: true,
      },
      {
        title: 'Application Engineer',
        status: true,
      },
      {
        title: 'Application Integration Engineer',
        status: true,
      },
      {
        title: 'Application Manager',
        status: true,
      },
      {
        title: 'Application Operations Engineer',
        status: true,
      },
      {
        title: 'Application Packager',
        status: true,
      },
      {
        title: 'Application Penetration Tester',
        status: true,
      },
      {
        title: 'Application Programmer',
        status: true,
      },
      {
        title: 'Applications Analyst',
        status: true,
      },
      {
        title: 'Applications Architect',
        status: true,
      },
      {
        title: 'Applications Developer',
        status: true,
      },
      {
        title: 'Applications Development Consultant',
        status: true,
      },
      {
        title: 'Application Security Advisory Analyst',
        status: true,
      },
      {
        title: 'Application Security Analyst',
        status: true,
      },
      {
        title: 'Application Security Architect',
        status: true,
      },
      {
        title: 'Application Security Developer',
        status: true,
      },
      {
        title: 'Application Security Engineer',
        status: true,
      },
      {
        title: 'Application Security Specialist',
        status: true,
      },
      {
        title: 'Applications Engineer',
        status: true,
      },
      {
        title: 'Application Server Administrator',
        status: true,
      },
      {
        title: 'Application Solutions Architect',
        status: true,
      },
      {
        title: 'Application Specialist',
        status: true,
      },
      {
        title: 'Applications Specialist',
        status: true,
      },
      {
        title: 'Applications Support Analyst',
        status: true,
      },
      {
        title: 'Application Support Analyst',
        status: true,
      },
      {
        title: 'Application Support Developer',
        status: true,
      },
      {
        title: 'Application Support Engineer',
        status: true,
      },
      {
        title: 'Application Support Manager',
        status: true,
      },
      {
        title: 'Application Support Specialist',
        status: true,
      },
      {
        title: 'Application Systems Analyst',
        status: true,
      },
      {
        title: 'Application & Tech Supp Spec',
        status: true,
      },
      {
        title: 'Application Test Engineer',
        status: true,
      },
      {
        title: 'Application Tester',
        status: true,
      },
      {
        title: 'Applied Scientist',
        status: true,
      },
      {
        title: 'Appointment Coordinator',
        status: true,
      },
      {
        title: 'Appointment Scheduler',
        status: true,
      },
      {
        title: 'Appointment Setter',
        status: true,
      },
      {
        title: 'Appraiser',
        status: true,
      },
      {
        title: 'Apprentice Automotive Technician',
        status: true,
      },
      {
        title: 'Apprentice Carpenter',
        status: true,
      },
      {
        title: 'Apprentice Electrician',
        status: true,
      },
      {
        title: 'Apprentice Engineer',
        status: true,
      },
      {
        title: 'Apprentice Heavy Equipment Technician',
        status: true,
      },
      {
        title: 'Apprentice Mechanic',
        status: true,
      },
      {
        title: 'Apprentice Motor Vehicle Mechanic',
        status: true,
      },
      {
        title: 'Apprentice Painter',
        status: true,
      },
      {
        title: 'Apprentice Pipefitter',
        status: true,
      },
      {
        title: 'Apprentice Plumber',
        status: true,
      },
      {
        title: 'Apprentice Sheet Metal Worker',
        status: true,
      },
      {
        title: 'Apprentice Simulator Technician',
        status: true,
      },
      {
        title: 'Apprentice Stylist',
        status: true,
      },
      {
        title: 'Apprentice Technician',
        status: true,
      },
      {
        title: 'Apprentice Welder',
        status: true,
      },
      {
        title: 'AP Psychology Content Developer',
        status: true,
      },
      {
        title: 'AP Specialist',
        status: true,
      },
      {
        title: 'A&P Technician',
        status: true,
      },
      {
        title: 'Aquatic Biologists',
        status: true,
      },
      {
        title: 'Aquatic Ecotoxicologist',
        status: true,
      },
      {
        title: 'Aquatics Director',
        status: true,
      },
      {
        title: 'Arabic Linguist',
        status: true,
      },
      {
        title: 'Arabic Teacher',
        status: true,
      },
      {
        title: 'Arabic Translator',
        status: true,
      },
      {
        title: 'Ar Accountant',
        status: true,
      },
      {
        title: 'Ar Analyst',
        status: true,
      },
      {
        title: 'Arbitration Administrator',
        status: true,
      },
      {
        title: 'Arbitration Specialist',
        status: true,
      },
      {
        title: 'Arbitrator',
        status: true,
      },
      {
        title: 'Arborist',
        status: true,
      },
      {
        title: 'Arborist Apprentice',
        status: true,
      },
      {
        title: 'Arborist Climber',
        status: true,
      },
      {
        title: 'Arborist Crew Leader',
        status: true,
      },
      {
        title: 'Arborist Ground Person',
        status: true,
      },
      {
        title: 'Archaeologist',
        status: true,
      },
      {
        title: 'Archaeology Field Technician',
        status: true,
      },
      {
        title: 'Archery Outfitter',
        status: true,
      },
      {
        title: 'Archery Sales Associate',
        status: true,
      },
      {
        title: 'Archery Sales Outfitter',
        status: true,
      },
      {
        title: 'Archery Technician',
        status: true,
      },
      {
        title: 'Architect',
        status: true,
      },
      {
        title: 'Architectural Designer',
        status: true,
      },
      {
        title: 'Architectural Drafter',
        status: true,
      },
      {
        title: 'Architectural Draftsman',
        status: true,
      },
      {
        title: 'Architectural Engineer',
        status: true,
      },
      {
        title: 'Architectural Project Manager',
        status: true,
      },
      {
        title: 'Architectural Sales Consultant',
        status: true,
      },
      {
        title: 'Architectural Services Consultant',
        status: true,
      },
      {
        title: 'Architectural Student Intern',
        status: true,
      },
      {
        title: 'Architectural Technician',
        status: true,
      },
      {
        title: 'Architectural Technologist',
        status: true,
      },
      {
        title: 'AR Clerk',
        status: true,
      },
      {
        title: 'Area Build Coordinator',
        status: true,
      },
      {
        title: 'Area Build Manager',
        status: true,
      },
      {
        title: 'Area Business Manager',
        status: true,
      },
      {
        title: 'Area Director',
        status: true,
      },
      {
        title: 'Area Field Manager',
        status: true,
      },
      {
        title: 'Area Leader',
        status: true,
      },
      {
        title: 'Area Maintenance Manager',
        status: true,
      },
      {
        title: 'Area Manager',
        status: true,
      },
      {
        title: 'Area Marketing Representative',
        status: true,
      },
      {
        title: 'Area Medical Advisor',
        status: true,
      },
      {
        title: 'Area Operations Manager',
        status: true,
      },
      {
        title: 'Area Production Manager',
        status: true,
      },
      {
        title: 'Area Relief Officer',
        status: true,
      },
      {
        title: 'Area Sales Executive',
        status: true,
      },
      {
        title: 'Area Sales Manager',
        status: true,
      },
      {
        title: 'Area Supervisor',
        status: true,
      },
      {
        title: 'Area Support Officer',
        status: true,
      },
      {
        title: 'Area Support Security Officer',
        status: true,
      },
      {
        title: 'Area Vice President',
        status: true,
      },
      {
        title: 'Area Vp Sales Southern Europe',
        status: true,
      },
      {
        title: 'Armed Alarm Response Officer',
        status: true,
      },
      {
        title: 'Armed Guard',
        status: true,
      },
      {
        title: 'Armed Security Guard',
        status: true,
      },
      {
        title: 'Armed Security Officer',
        status: true,
      },
      {
        title: 'Armored Truck Driver',
        status: true,
      },
      {
        title: 'Army Reserve Administrator',
        status: true,
      },
      {
        title: 'Arrears Executive',
        status: true,
      },
      {
        title: 'Arson Investigator',
        status: true,
      },
      {
        title: 'Ar Specialist',
        status: true,
      },
      {
        title: 'Art Assistant',
        status: true,
      },
      {
        title: 'Art Consultant',
        status: true,
      },
      {
        title: 'Art Curator',
        status: true,
      },
      {
        title: 'Art Director',
        status: true,
      },
      {
        title: 'Art Handler',
        status: true,
      },
      {
        title: 'Articling Student',
        status: true,
      },
      {
        title: 'Artificial Intelligence Engineer',
        status: true,
      },
      {
        title: 'Art Instructor',
        status: true,
      },
      {
        title: 'Artisan',
        status: true,
      },
      {
        title: 'Artist',
        status: true,
      },
      {
        title: 'Artistic Director',
        status: true,
      },
      {
        title: 'Artist Manager',
        status: true,
      },
      {
        title: 'Art Model',
        status: true,
      },
      {
        title: 'Art Outsource Manager',
        status: true,
      },
      {
        title: 'Art Professor',
        status: true,
      },
      {
        title: 'Arts Manager',
        status: true,
      },
      {
        title: 'Art Teacher',
        status: true,
      },
      {
        title: 'Art Therapist',
        status: true,
      },
      {
        title: 'Artwork Coordinator',
        status: true,
      },
      {
        title: 'Asbestos Abatement Worker',
        status: true,
      },
      {
        title: 'Asbestos Worker',
        status: true,
      },
      {
        title: 'Aseptic Technician',
        status: true,
      },
      {
        title: 'ASIC Design Engineer',
        status: true,
      },
      {
        title: 'ASIC Design & Technology Engineer',
        status: true,
      },
      {
        title: 'ASIC Engineer',
        status: true,
      },
      {
        title: 'ASIC Verification Engineer',
        status: true,
      },
      {
        title: 'Asphalt Roller Operator',
        status: true,
      },
      {
        title: 'Asp.net Developer',
        status: true,
      },
      {
        title: 'Assemble Packer',
        status: true,
      },
      {
        title: 'Assembler',
        status: true,
      },
      {
        title: 'Assembler Electronics',
        status: true,
      },
      {
        title: 'Assembler Technician',
        status: true,
      },
      {
        title: 'Assembly Associate',
        status: true,
      },
      {
        title: 'Assembly Group Lead',
        status: true,
      },
      {
        title: 'Assembly Line Associate',
        status: true,
      },
      {
        title: 'Assembly Line General Labourer',
        status: true,
      },
      {
        title: 'Assembly Line Operator',
        status: true,
      },
      {
        title: 'Assembly Line Worker',
        status: true,
      },
      {
        title: 'Assembly Operator',
        status: true,
      },
      {
        title: 'Assembly Supervisor',
        status: true,
      },
      {
        title: 'Assembly Technician',
        status: true,
      },
      {
        title: 'Assembly Worker',
        status: true,
      },
      {
        title: 'Assessor',
        status: true,
      },
      {
        title: 'Asset Allocation Strategist',
        status: true,
      },
      {
        title: 'Asset Artist',
        status: true,
      },
      {
        title: 'Asset Management Analyst',
        status: true,
      },
      {
        title: 'Asset Management Consultant',
        status: true,
      },
      {
        title: 'Asset Manager',
        status: true,
      },
      {
        title: 'Asset Protection Agent',
        status: true,
      },
      {
        title: 'Asset Protection Associate',
        status: true,
      },
      {
        title: 'Asset Protection Investigator',
        status: true,
      },
      {
        title: 'Asset Protection Manager',
        status: true,
      },
      {
        title: 'Asset Protection Representative',
        status: true,
      },
      {
        title: 'Asset Protection Specialist',
        status: true,
      },
      {
        title: 'Asset Supervisor',
        status: true,
      },
      {
        title: 'Assignment Editor',
        status: true,
      },
      {
        title: 'Assistant Accountant',
        status: true,
      },
      {
        title: 'Assistant Account Executive',
        status: true,
      },
      {
        title: 'Assistant Account Manager',
        status: true,
      },
      {
        title: 'Assistant Actuary',
        status: true,
      },
      {
        title: 'Assistant Administrator',
        status: true,
      },
      {
        title: 'Assistant ADV',
        status: true,
      },
      {
        title: 'Assistant Apparel Graphic Designer',
        status: true,
      },
      {
        title: 'Assistant Art Director',
        status: true,
      },
      {
        title: 'Assistant Athletic Director',
        status: true,
      },
      {
        title: 'Assistant Bakery Manager',
        status: true,
      },
      {
        title: 'Assistant Banquet Manager',
        status: true,
      },
      {
        title: 'Assistant Blend Line Leader',
        status: true,
      },
      {
        title: 'Assistant Bookkeeper',
        status: true,
      },
      {
        title: 'Assistant Boutique Manager',
        status: true,
      },
      {
        title: 'Assistant Box Office Manager',
        status: true,
      },
      {
        title: 'Assistant Branch Administrator',
        status: true,
      },
      {
        title: 'Assistant Branch Manager',
        status: true,
      },
      {
        title: 'Assistant Branch Manager Trainee',
        status: true,
      },
      {
        title: 'Assistant Brand Manager',
        status: true,
      },
      {
        title: 'Assistant Builder',
        status: true,
      },
      {
        title: 'Assistant Building Superintendent',
        status: true,
      },
      {
        title: 'Assistant Buyer',
        status: true,
      },
      {
        title: 'Assistant Category Manager',
        status: true,
      },
      {
        title: 'Assistant Center Manager',
        status: true,
      },
      {
        title: 'Assistant Chief Engineer',
        status: true,
      },
      {
        title: 'Assistant Chief Operating Engineer',
        status: true,
      },
      {
        title: 'Assistant Coach',
        status: true,
      },
      {
        title: 'Assistant Community Director',
        status: true,
      },
      {
        title: 'Assistant Community Manager',
        status: true,
      },
      {
        title: 'Assistant Compliance Officer',
        status: true,
      },
      {
        title: 'Assistant Construction Manager',
        status: true,
      },
      {
        title: 'Assistant Controller',
        status: true,
      },
      {
        title: 'Assistant Cook',
        status: true,
      },
      {
        title: 'Assistant Credit Manager',
        status: true,
      },
      {
        title: 'Assistant Curator',
        status: true,
      },
      {
        title: 'Assistant Dean',
        status: true,
      },
      {
        title: 'Assistant Designer',
        status: true,
      },
      {
        title: 'Assistant Director',
        status: true,
      },
      {
        title: 'Assistant Director of Admissions',
        status: true,
      },
      {
        title: 'Assistant Director of Care',
        status: true,
      },
      {
        title: 'Assistant Director of Engineering',
        status: true,
      },
      {
        title: 'Assistant Director of Finance',
        status: true,
      },
      {
        title: 'Assistant Director of Food & Beverage',
        status: true,
      },
      {
        title: 'Assistant Director of Housekeeping',
        status: true,
      },
      {
        title: 'Assistant Director of Nursing',
        status: true,
      },
      {
        title: 'Assistant Director of Rooms',
        status: true,
      },
      {
        title: 'Assistant E Commerce',
        status: true,
      },
      {
        title: 'Assistant Editor',
        status: true,
      },
      {
        title: 'Assistant Engineer',
        status: true,
      },
      {
        title: 'Assistant Engineering Manager',
        status: true,
      },
      {
        title: 'Assistant Expert',
        status: true,
      },
      {
        title: 'Assistant Export',
        status: true,
      },
      {
        title: 'Assistant Facilities Manager',
        status: true,
      },
      {
        title: 'Assistant Facilities Officer',
        status: true,
      },
      {
        title: 'Assistant Facility Manager',
        status: true,
      },
      {
        title: 'Assistant Finance Manager',
        status: true,
      },
      {
        title: 'Assistant Financial Accountant',
        status: true,
      },
      {
        title: 'Assistant Financial Analyst',
        status: true,
      },
      {
        title: 'Assistant Financial Controller',
        status: true,
      },
      {
        title: 'Assistant Food And Beverage Manager',
        status: true,
      },
      {
        title: 'Assistant Food & Beverage Manager',
        status: true,
      },
      {
        title: 'Assistant Food Service Manager',
        status: true,
      },
      {
        title: 'Assistant Formation',
        status: true,
      },
      {
        title: 'Assistant Front Desk Manager',
        status: true,
      },
      {
        title: 'Assistant Front Office Manager',
        status: true,
      },
      {
        title: 'Assistant Front Store Manager',
        status: true,
      },
      {
        title: 'Assistant General Counsel',
        status: true,
      },
      {
        title: 'Assistant General Manager',
        status: true,
      },
      {
        title: 'Assistant Grocery Manager',
        status: true,
      },
      {
        title: 'Assistant Head Nurse',
        status: true,
      },
      {
        title: 'Assistant Hospital Manager',
        status: true,
      },
      {
        title: 'Assistant Hotel Manager',
        status: true,
      },
      {
        title: 'Assistant Housekeeping Manager',
        status: true,
      },
      {
        title: 'Assistant IT Manager',
        status: true,
      },
      {
        title: 'Assistant Kitchen Manager',
        status: true,
      },
      {
        title: 'Assistant Line Leader',
        status: true,
      },
      {
        title: 'Assistant Liquor Store Manager',
        status: true,
      },
      {
        title: 'Assistant Machine Operator',
        status: true,
      },
      {
        title: 'Assistant Maintenance',
        status: true,
      },
      {
        title: 'Assistant Maintenance Manager',
        status: true,
      },
      {
        title: 'Assistant Maintenance Supervisor',
        status: true,
      },
      {
        title: 'Assistant Maintenance Technician',
        status: true,
      },
      {
        title: 'Assistant Management Accountant',
        status: true,
      },
      {
        title: 'Assistant Manager',
        status: true,
      },
      {
        title: 'Assistant Manager Convenience Food',
        status: true,
      },
      {
        title: 'Assistant Manager Operations',
        status: true,
      },
      {
        title: 'Assistant Manager Sales',
        status: true,
      },
      {
        title: 'Assistant Manager Soft Services',
        status: true,
      },
      {
        title: 'Assistant Manager Trainee',
        status: true,
      },
      {
        title: 'Assistant Marketing Manager',
        status: true,
      },
      {
        title: 'Assistant Market Leader',
        status: true,
      },
      {
        title: 'Assistant Mcdonalds Manager',
        status: true,
      },
      {
        title: 'Assistant Meat Manager',
        status: true,
      },
      {
        title: 'Assistant Media Planner',
        status: true,
      },
      {
        title: 'Assistant Merchandiser',
        status: true,
      },
      {
        title: 'Assistant Moving Center Manager',
        status: true,
      },
      {
        title: 'Assistant Nurse Manager',
        status: true,
      },
      {
        title: 'Assistant Office Manager',
        status: true,
      },
      {
        title: 'Assistant Operations Manager',
        status: true,
      },
      {
        title: 'Assistant Parts Manager',
        status: true,
      },
      {
        title: 'Assistant Pastry Chef',
        status: true,
      },
      {
        title: 'Assistant Pharmacy',
        status: true,
      },
      {
        title: 'Assistant Placement',
        status: true,
      },
      {
        title: 'Assistant Plant Controller',
        status: true,
      },
      {
        title: 'Assistant Plant Manager',
        status: true,
      },
      {
        title: 'Assistant Portfolio Manager',
        status: true,
      },
      {
        title: 'Assistant Preschool Teacher',
        status: true,
      },
      {
        title: 'Assistant Procurement Manager',
        status: true,
      },
      {
        title: 'Assistant Produce Manager',
        status: true,
      },
      {
        title: 'Assistant Production Manager',
        status: true,
      },
      {
        title: 'Assistant Production Supervisor',
        status: true,
      },
      {
        title: 'Assistant Product Manager',
        status: true,
      },
      {
        title: 'Assistant Professor',
        status: true,
      },
      {
        title: 'Assistant Program Director',
        status: true,
      },
      {
        title: 'Assistant Program Manager',
        status: true,
      },
      {
        title: 'Assistant Project Lead',
        status: true,
      },
      {
        title: 'Assistant Project Manager',
        status: true,
      },
      {
        title: 'Assistant Property Manager',
        status: true,
      },
      {
        title: 'Assistant Quantity Surveyor',
        status: true,
      },
      {
        title: 'Assistant Raw Material Assistant',
        status: true,
      },
      {
        title: 'Assistant Relocation Project Manager',
        status: true,
      },
      {
        title: 'Assistant Reservations Manager',
        status: true,
      },
      {
        title: 'Assistant Resident Manager',
        status: true,
      },
      {
        title: 'Assistant Restaurant Manager',
        status: true,
      },
      {
        title: 'Assistant Retail Manager',
        status: true,
      },
      {
        title: 'Assistant Route Service Sales Representative',
        status: true,
      },
      {
        title: 'Assistant Safety Analyst',
        status: true,
      },
      {
        title: 'Assistant Sales Manager',
        status: true,
      },
      {
        title: 'Assistant Server',
        status: true,
      },
      {
        title: 'Assistant Service Manager',
        status: true,
      },
      {
        title: 'Assistant Showroom Manager',
        status: true,
      },
      {
        title: 'Assistant Site Manager',
        status: true,
      },
      {
        title: 'Assistant Site Superintendent',
        status: true,
      },
      {
        title: 'Assistant Site Supervisor',
        status: true,
      },
      {
        title: 'Assistant Spa Manager',
        status: true,
      },
      {
        title: 'Assistant Store Leader',
        status: true,
      },
      {
        title: 'Assistant Store Manage',
        status: true,
      },
      {
        title: 'Assistant Superintendent',
        status: true,
      },
      {
        title: 'Assistant Supervisor',
        status: true,
      },
      {
        title: 'Assistant Teacher',
        status: true,
      },
      {
        title: 'Assistant Teaching Professor',
        status: true,
      },
      {
        title: 'Assistant Team Leader',
        status: true,
      },
      {
        title: 'Assistant Technical Manager',
        status: true,
      },
      {
        title: 'Assistant Technico Commercial',
        status: true,
      },
      {
        title: 'Assistant Technique',
        status: true,
      },
      {
        title: 'Assistant Transport',
        status: true,
      },
      {
        title: 'Assistant Transport Manager',
        status: true,
      },
      {
        title: 'Assistant Underwriter',
        status: true,
      },
      {
        title: 'Assistant United States Attorney',
        status: true,
      },
      {
        title: 'Assistant Vat Manager',
        status: true,
      },
      {
        title: 'Assistant Video Editor',
        status: true,
      },
      {
        title: 'Assistant Visual Merchandising',
        status: true,
      },
      {
        title: 'Assistant Warehouse Manager',
        status: true,
      },
      {
        title: 'Associate Accountant',
        status: true,
      },
      {
        title: 'Associate Account Executive',
        status: true,
      },
      {
        title: 'Associate Account Manager',
        status: true,
      },
      {
        title: 'Associate Actuary',
        status: true,
      },
      {
        title: 'Associate Adjuster Property',
        status: true,
      },
      {
        title: 'Associate Advisor',
        status: true,
      },
      {
        title: 'Associate Affiliate Manager',
        status: true,
      },
      {
        title: 'Associate Analyst',
        status: true,
      },
      {
        title: 'Associate Analytical Scientist',
        status: true,
      },
      {
        title: 'Associate Analytics Manager',
        status: true,
      },
      {
        title: 'Associate Architect',
        status: true,
      },
      {
        title: 'Associate Attorney',
        status: true,
      },
      {
        title: 'Associate Audit Manager',
        status: true,
      },
      {
        title: 'Associate Automation Engineer',
        status: true,
      },
      {
        title: 'Associate Brand Manager',
        status: true,
      },
      {
        title: 'Associate Brand Manager Intern',
        status: true,
      },
      {
        title: 'Associate Broker',
        status: true,
      },
      {
        title: 'Associate Business Analyst',
        status: true,
      },
      {
        title: 'Associate Buyer',
        status: true,
      },
      {
        title: 'Associate Category Manager',
        status: true,
      },
      {
        title: 'Associate Chemist',
        status: true,
      },
      {
        title: 'Associate Client Advisor',
        status: true,
      },
      {
        title: 'Associate Client Executive',
        status: true,
      },
      {
        title: 'Associate Communications Designer',
        status: true,
      },
      {
        title: 'Associate Consultant',
        status: true,
      },
      {
        title: 'Associate Consulting Director',
        status: true,
      },
      {
        title: 'Associate Corporate Counsel',
        status: true,
      },
      {
        title: 'Associate Counsel',
        status: true,
      },
      {
        title: 'Associate Creative Director',
        status: true,
      },
      {
        title: 'Associate Customer Success Manager',
        status: true,
      },
      {
        title: 'Associate Data Analyst',
        status: true,
      },
      {
        title: 'Associate Data Engineer',
        status: true,
      },
      {
        title: 'Associate Data Management',
        status: true,
      },
      {
        title: 'Associate Data Research Analyst',
        status: true,
      },
      {
        title: 'Associate Data Scientist',
        status: true,
      },
      {
        title: 'Associate Dentist',
        status: true,
      },
      {
        title: 'Associate Designer',
        status: true,
      },
      {
        title: 'Associate Device Engineer',
        status: true,
      },
      {
        title: 'Associate Devops Engineer',
        status: true,
      },
      {
        title: 'Associate Director',
        status: true,
      },
      {
        title: 'Associate Director of Client Success',
        status: true,
      },
      {
        title: 'Associate Director of Corporate IT',
        status: true,
      },
      {
        title: 'Associate Director Quantity Surveying',
        status: true,
      },
      {
        title: 'Associate Director Regulatory Affairs',
        status: true,
      },
      {
        title: 'Associate District Manager',
        status: true,
      },
      {
        title: 'Associate DVM',
        status: true,
      },
      {
        title: 'Associate Editor',
        status: true,
      },
      {
        title: 'Associate Engineer',
        status: true,
      },
      {
        title: 'Associate Executive Director',
        status: true,
      },
      {
        title: 'Associate Facilities Engineer',
        status: true,
      },
      {
        title: 'Associate Field Manager',
        status: true,
      },
      {
        title: 'Associate Finance Manager',
        status: true,
      },
      {
        title: 'Associate Financial Advisor',
        status: true,
      },
      {
        title: 'Associate Full Stack Software Engineer',
        status: true,
      },
      {
        title: 'Associate General Counse',
        status: true,
      },
      {
        title: 'Associate Implementation Specialist',
        status: true,
      },
      {
        title: 'Associate Install Alarm Technician',
        status: true,
      },
      {
        title: 'Associate Install Technician',
        status: true,
      },
      {
        title: 'Associate Investment Advisor',
        status: true,
      },
      {
        title: 'Associate Investment Counselor',
        status: true,
      },
      {
        title: 'Associate IT Systems Administrator',
        status: true,
      },
      {
        title: 'Associate Key Account Manager',
        status: true,
      },
      {
        title: 'Associate Lawyer',
        status: true,
      },
      {
        title: 'Associate Manager',
        status: true,
      },
      {
        title: 'Associate Managing Consultant',
        status: true,
      },
      {
        title: 'Associate Marketing Manager',
        status: true,
      },
      {
        title: 'Associate Material Handler',
        status: true,
      },
      {
        title: 'Associate Medical Director',
        status: true,
      },
      {
        title: 'Associate Medical Writer',
        status: true,
      },
      {
        title: 'Associate Member of Technical Staff',
        status: true,
      },
      {
        title: 'Associate Occupancy Planner',
        status: true,
      },
      {
        title: 'Associate Operations Analyst',
        status: true,
      },
      {
        title: 'Associate Pharmaceutical Technician',
        status: true,
      },
      {
        title: 'Associate Platform Support Specialist',
        status: true,
      },
      {
        title: 'Associate Principal Scientist',
        status: true,
      },
      {
        title: 'Associate Private Banker',
        status: true,
      },
      {
        title: 'Associate Private Banking Advisor',
        status: true,
      },
      {
        title: 'Associate Process Engineer',
        status: true,
      },
      {
        title: 'Associate Producer',
        status: true,
      },
      {
        title: 'Associate Product Manager',
        status: true,
      },
      {
        title: 'Associate Product Marketing Manager',
        status: true,
      },
      {
        title: 'Associate Product Owner',
        status: true,
      },
      {
        title: 'Associate Professor',
        status: true,
      },
      {
        title: 'Associate Program Manager',
        status: true,
      },
      {
        title: 'Associate Project Coordinator',
        status: true,
      },
      {
        title: 'Associate Project Manager',
        status: true,
      },
      {
        title: 'Associate Promotion Manager',
        status: true,
      },
      {
        title: 'Associate Property Manager',
        status: true,
      },
      {
        title: 'Associate Quality Control Analyst',
        status: true,
      },
      {
        title: 'Associate Quality Engineer',
        status: true,
      },
      {
        title: 'Associate R&D Scientist',
        status: true,
      },
      {
        title: 'Associate Recruiter',
        status: true,
      },
      {
        title: 'Associate Relationship Manager',
        status: true,
      },
      {
        title: 'Associate Research Community Manager',
        status: true,
      },
      {
        title: 'Associate Sales Representative',
        status: true,
      },
      {
        title: 'Associate Scientist',
        status: true,
      },
      {
        title: 'Associate Service Technician',
        status: true,
      },
      {
        title: 'Associate Software Application Engineer',
        status: true,
      },
      {
        title: 'Associate Software Developer',
        status: true,
      },
      {
        title: 'Associate Software Engineer',
        status: true,
      },
      {
        title: 'Associate Software Technical Analyst',
        status: true,
      },
      {
        title: 'Associate Store Manager',
        status: true,
      },
      {
        title: 'Associate Structural Engineer',
        status: true,
      },
      {
        title: 'Associate Support Analyst',
        status: true,
      },
      {
        title: 'Associate Systems Engineer',
        status: true,
      },
      {
        title: 'Associate Team Leader',
        status: true,
      },
      {
        title: 'Associate Technical Account Manager',
        status: true,
      },
      {
        title: 'Associate Technical Consultant',
        status: true,
      },
      {
        title: 'Associate Technical Director',
        status: true,
      },
      {
        title: 'Associate Technical Writer',
        status: true,
      },
      {
        title: 'Associate Technician',
        status: true,
      },
      {
        title: 'Associate Test Engineer',
        status: true,
      },
      {
        title: 'Associate Trial Attorney',
        status: true,
      },
      {
        title: 'Associate Trust Officer',
        status: true,
      },
      {
        title: 'Associate Veterinarian',
        status: true,
      },
      {
        title: 'Associate Vice President',
        status: true,
      },
      {
        title: 'Associate Wealth Advisor',
        status: true,
      },
      {
        title: 'Associate Pharmaceutical Information Manager',
        status: true,
      },
      {
        title: 'Associate Chief Engineer',
        status: true,
      },
      {
        title: 'Associate Mgr Inventory',
        status: true,
      },
      {
        title: 'Associate Mgr Merch & Inventory',
        status: true,
      },
      {
        title: 'Associate Mgr Sales Dept',
        status: true,
      },
      {
        title: 'Assurance Associate',
        status: true,
      },
      {
        title: 'Assurance Manager',
        status: true,
      },
      {
        title: 'Astronomer',
        status: true,
      },
      {
        title: 'ATE Test Engineer',
        status: true,
      },
      {
        title: 'ATG Developer',
        status: true,
      },
      {
        title: 'Athlete',
        status: true,
      },
      {
        title: 'Athletic Coordinator',
        status: true,
      },
      {
        title: 'Athletic Director',
        status: true,
      },
      {
        title: 'Athletic Equipment Manager',
        status: true,
      },
      {
        title: 'Athletic Therapist',
        status: true,
      },
      {
        title: 'Athletic Trainer',
        status: true,
      },
      {
        title: 'Atlassian Administrator',
        status: true,
      },
      {
        title: 'Atlassian Developer',
        status: true,
      },
      {
        title: 'Atmospheric Scientist',
        status: true,
      },
      {
        title: 'Atm Technician',
        status: true,
      },
      {
        title: 'Attorney',
        status: true,
      },
      {
        title: 'Attorney General',
        status: true,
      },
      {
        title: 'ATV Sales Lead',
        status: true,
      },
      {
        title: 'ATV Sales Outfitter',
        status: true,
      },
      {
        title: 'ATV Service Technician',
        status: true,
      },
      {
        title: 'Auction Driver',
        status: true,
      },
      {
        title: 'Auctioneer',
        status: true,
      },
      {
        title: 'Audience Development Manager',
        status: true,
      },
      {
        title: 'Audio Designer',
        status: true,
      },
      {
        title: 'Audio Engineer',
        status: true,
      },
      {
        title: 'Audio Enhancement and Signal Processing Engineer',
        status: true,
      },
      {
        title: 'Audiologist',
        status: true,
      },
      {
        title: 'Audiology Assistant',
        status: true,
      },
      {
        title: 'Audio Technician',
        status: true,
      },
      {
        title: 'Audio Visual Technician',
        status: true,
      },
      {
        title: 'Auditor',
        status: true,
      },
      {
        title: 'Audit and Accounts Manager',
        status: true,
      },
      {
        title: 'Audit Assistant',
        status: true,
      },
      {
        title: 'Audit Assistant Manager',
        status: true,
      },
      {
        title: 'Audit Associate',
        status: true,
      },
      {
        title: 'Audit Associate Director',
        status: true,
      },
      {
        title: 'Audit Clerk',
        status: true,
      },
      {
        title: 'Audit Director',
        status: true,
      },
      {
        title: 'Audit Graduate Trainee',
        status: true,
      },
      {
        title: 'Audit Manager',
        status: true,
      },
      {
        title: 'Audit Partner',
        status: true,
      },
      {
        title: 'Audit Supervisor',
        status: true,
      },
      {
        title: 'Author',
        status: true,
      },
      {
        title: 'Autism Program Mental Health Associate',
        status: true,
      },
      {
        title: 'Auto Appraiser',
        status: true,
      },
      {
        title: 'Auto Body Painter',
        status: true,
      },
      {
        title: 'Auto Body Prepper',
        status: true,
      },
      {
        title: 'Auto Body Technician',
        status: true,
      },
      {
        title: 'Autocad Designer',
        status: true,
      },
      {
        title: 'Autocad Drafter',
        status: true,
      },
      {
        title: 'Autocad Draftsman',
        status: true,
      },
      {
        title: 'Autocad Technician',
        status: true,
      },
      {
        title: 'Auto Claims Adjuster',
        status: true,
      },
      {
        title: 'Auto Damage Appraiser',
        status: true,
      },
      {
        title: 'Auto Detailer',
        status: true,
      },
      {
        title: 'Auto Electrician',
        status: true,
      },
      {
        title: 'Auto Glass Technician',
        status: true,
      },
      {
        title: 'Auto Insurance Advisor',
        status: true,
      },
      {
        title: 'Automated Machine Operator',
        status: true,
      },
      {
        title: 'Automation Applications Manager',
        status: true,
      },
      {
        title: 'Automation Architect',
        status: true,
      },
      {
        title: 'Automation Developer',
        status: true,
      },
      {
        title: 'Automation Electrical Manager',
        status: true,
      },
      {
        title: 'Automation Engineer',
        status: true,
      },
      {
        title: 'Automation Engineering Intern',
        status: true,
      },
      {
        title: 'Automation Framework Developer',
        status: true,
      },
      {
        title: 'Automation Manager',
        status: true,
      },
      {
        title: 'Automation QA Engineer',
        status: true,
      },
      {
        title: 'Automation Software Engineer',
        status: true,
      },
      {
        title: 'Automation Specialist',
        status: true,
      },
      {
        title: 'Automation Supervisor',
        status: true,
      },
      {
        title: 'Automation Technician',
        status: true,
      },
      {
        title: 'Automation Test Engineer',
        status: true,
      },
      {
        title: 'Automation Tester',
        status: true,
      },
      {
        title: 'Automation Test Lead',
        status: true,
      },
      {
        title: 'Auto Mechanic',
        status: true,
      },
      {
        title: 'Auto Mechanic Technician',
        status: true,
      },
      {
        title: 'Automobile Mechanic',
        status: true,
      },
      {
        title: 'Automotive Apprentice',
        status: true,
      },
      {
        title: 'Automotive Apprentice Technician',
        status: true,
      },
      {
        title: 'Automotive Body Estimator',
        status: true,
      },
      {
        title: 'Automotive Body Technician',
        status: true,
      },
      {
        title: 'Automotive Business Consultant',
        status: true,
      },
      {
        title: 'Automotive Buyer',
        status: true,
      },
      {
        title: 'Automotive Collision Estimator',
        status: true,
      },
      {
        title: 'Automotive Computer Vision Researcher',
        status: true,
      },
      {
        title: 'Automotive Consultant',
        status: true,
      },
      {
        title: 'Automotive Detailer',
        status: true,
      },
      {
        title: 'Automotive Engineer',
        status: true,
      },
      {
        title: 'Automotive Finance And Insurance Manager',
        status: true,
      },
      {
        title: 'Automotive Finance Manager',
        status: true,
      },
      {
        title: 'Automotive Glass Technician',
        status: true,
      },
      {
        title: 'Automotive Instructor',
        status: true,
      },
      {
        title: 'Automotive Licensed Technician',
        status: true,
      },
      {
        title: 'Automotive & Light Duty Mechanic',
        status: true,
      },
      {
        title: 'Automotive Lot Attendant',
        status: true,
      },
      {
        title: 'Automotive Manager',
        status: true,
      },
      {
        title: 'Automotive Mechanic',
        status: true,
      },
      {
        title: 'Automotive Mechanic Customer Service',
        status: true,
      },
      {
        title: 'Automotive Painter',
        status: true,
      },
      {
        title: 'Automotive Parts Associate',
        status: true,
      },
      {
        title: 'Automotive Parts Specialist',
        status: true,
      },
      {
        title: 'Automotive Product Advisor',
        status: true,
      },
      {
        title: 'Automotive Sales Associate',
        status: true,
      },
      {
        title: 'Automotive Sales Consultant',
        status: true,
      },
      {
        title: 'Automotive Sales Manager',
        status: true,
      },
      {
        title: 'Automotive Sales Professional',
        status: true,
      },
      {
        title: 'Automotive Sales Representative',
        status: true,
      },
      {
        title: 'Automotive Sales Trainer',
        status: true,
      },
      {
        title: 'Automotive Service Advisor',
        status: true,
      },
      {
        title: 'Automotive Service Installer',
        status: true,
      },
      {
        title: 'Automotive Service Manager',
        status: true,
      },
      {
        title: 'Automotive Service Technician',
        status: true,
      },
      {
        title: 'Automotive Service Technician Apprentice',
        status: true,
      },
      {
        title: 'Automotive Store Manager',
        status: true,
      },
      {
        title: 'Automotive Technical Inspector',
        status: true,
      },
      {
        title: 'Automotive Technician',
        status: true,
      },
      {
        title: 'Automotive Technician Apprentice',
        status: true,
      },
      {
        title: 'Automotive Tire Technician',
        status: true,
      },
      {
        title: 'Automotive Title Clerk',
        status: true,
      },
      {
        title: 'Auto Parts Clerk',
        status: true,
      },
      {
        title: 'Auto Parts Delivery Driver',
        status: true,
      },
      {
        title: 'Autopsy Assistant',
        status: true,
      },
      {
        title: 'Auto Service Advisor',
        status: true,
      },
      {
        title: 'Auxiliary Nurse',
        status: true,
      },
      {
        title: 'Auxiliary Power Engineer',
        status: true,
      },
      {
        title: 'Aviation Maintenance Technician',
        status: true,
      },
      {
        title: 'Aviation Manager',
        status: true,
      },
      {
        title: 'Aviation Mechanic',
        status: true,
      },
      {
        title: 'Aviation Planner',
        status: true,
      },
      {
        title: 'Aviation Technician',
        status: true,
      },
      {
        title: 'AV Installation Technician',
        status: true,
      },
      {
        title: 'Avionics Engineer',
        status: true,
      },
      {
        title: 'Avionics Technician',
        status: true,
      },
      {
        title: 'AV Project Manager',
        status: true,
      },
      {
        title: 'AV Technician',
        status: true,
      },
      {
        title: 'AWS Application Developer',
        status: true,
      },
      {
        title: 'AWS Architect',
        status: true,
      },
      {
        title: 'AWS Architect Permanent',
        status: true,
      },
      {
        title: 'AWS Cloud Architect',
        status: true,
      },
      {
        title: 'AWS Cloud Engineer',
        status: true,
      },
      {
        title: 'AWS Data Engineer',
        status: true,
      },
      {
        title: 'AWS Developer',
        status: true,
      },
      {
        title: 'AWS Devops Engineer',
        status: true,
      },
      {
        title: 'AWS Engineer',
        status: true,
      },
      {
        title: 'AWS Product Security Engineer',
        status: true,
      },
      {
        title: 'AWS Solutions Architect',
        status: true,
      },
      {
        title: 'AZ Driver',
        status: true,
      },
      {
        title: 'Azure Ad IAM Solution Integrator',
        status: true,
      },
      {
        title: 'Azure Administrator',
        status: true,
      },
      {
        title: 'Azure Architect',
        status: true,
      },
      {
        title: 'Azure Cloud Architect',
        status: true,
      },
      {
        title: 'Azure Cloud Engineer',
        status: true,
      },
      {
        title: 'Azure Cloud Security Engineer',
        status: true,
      },
      {
        title: 'Azure Cloud Specialist',
        status: true,
      },
      {
        title: 'Azure Data Engineer',
        status: true,
      },
      {
        title: 'Azure Data Factory Developer',
        status: true,
      },
      {
        title: 'Azure Developer',
        status: true,
      },
      {
        title: 'Azure Devops Data Engineer',
        status: true,
      },
      {
        title: 'Azure Devops Data Engineering Analyst',
        status: true,
      },
      {
        title: 'Azure Devops Engineer',
        status: true,
      },
      {
        title: 'Azure Engineer',
        status: true,
      },
      {
        title: 'Azure Solutions Architect',
        status: true,
      },
      {
        title: 'B2B Account Executive',
        status: true,
      },
      {
        title: 'B2B Marketing Manager',
        status: true,
      },
      {
        title: 'B2B Revenue Operations Manager',
        status: true,
      },
      {
        title: 'B2B Sales Executive',
        status: true,
      },
      {
        title: 'B2B Sales Manager',
        status: true,
      },
      {
        title: 'B2B Sales Representative',
        status: true,
      },
      {
        title: 'Babysitter',
        status: true,
      },
      {
        title: 'Backend Developer',
        status: true,
      },
      {
        title: 'Backend Engineer',
        status: true,
      },
      {
        title: 'Backend Java Developer',
        status: true,
      },
      {
        title: 'Backend Java Software Engineer',
        status: true,
      },
      {
        title: 'Backend Php Developer',
        status: true,
      },
      {
        title: 'Backend Software Developer',
        status: true,
      },
      {
        title: 'Backend Software Engineer',
        status: true,
      },
      {
        title: 'Backend Technical Lead',
        status: true,
      },
      {
        title: 'Background Actor',
        status: true,
      },
      {
        title: 'Background Investigator',
        status: true,
      },
      {
        title: 'Backhoe Operator',
        status: true,
      },
      {
        title: 'Back of House Team Member',
        status: true,
      },
      {
        title: 'Backroom Associate',
        status: true,
      },
      {
        title: 'Backroom Coordinator',
        status: true,
      },
      {
        title: 'Backroom Lead',
        status: true,
      },
      {
        title: 'Back Server',
        status: true,
      },
      {
        title: 'Backup Administrator',
        status: true,
      },
      {
        title: 'Baggage Handler',
        status: true,
      },
      {
        title: 'Bagger',
        status: true,
      },
      {
        title: 'Bailiff',
        status: true,
      },
      {
        title: 'Baker',
        status: true,
      },
      {
        title: 'Bakery Assistant',
        status: true,
      },
      {
        title: 'Bakery Assistant Department Manager',
        status: true,
      },
      {
        title: 'Bakery Associate',
        status: true,
      },
      {
        title: 'Bakery Clerk',
        status: true,
      },
      {
        title: 'Bakery Manager',
        status: true,
      },
      {
        title: 'Ballet Teacher',
        status: true,
      },
      {
        title: 'Band Director',
        status: true,
      },
      {
        title: 'Banker',
        status: true,
      },
      {
        title: 'Bank Examiner',
        status: true,
      },
      {
        title: 'Banking Administrator',
        status: true,
      },
      {
        title: 'Banking Advisor',
        status: true,
      },
      {
        title: 'Banking Advisor Intern',
        status: true,
      },
      {
        title: 'Banking Analyst',
        status: true,
      },
      {
        title: 'Banking Centre Leader',
        status: true,
      },
      {
        title: 'Banking Consultant',
        status: true,
      },
      {
        title: 'Banking Finance Ni Solicitor',
        status: true,
      },
      {
        title: 'Banking Manager',
        status: true,
      },
      {
        title: 'Banking Officer',
        status: true,
      },
      {
        title: 'Banking Specialist',
        status: true,
      },
      {
        title: 'Bank Manager',
        status: true,
      },
      {
        title: 'Bank Nursery Assistant',
        status: true,
      },
      {
        title: 'Bankruptcy Paralegal',
        status: true,
      },
      {
        title: 'Bankruptcy Specialist',
        status: true,
      },
      {
        title: 'Bank Teller',
        status: true,
      },
      {
        title: 'Banquet Bartender',
        status: true,
      },
      {
        title: 'Banquet Captain',
        status: true,
      },
      {
        title: 'Banquet Chef',
        status: true,
      },
      {
        title: 'Banquet Cook',
        status: true,
      },
      {
        title: 'Banquet House Attendant',
        status: true,
      },
      {
        title: 'Banqueting Supervisor',
        status: true,
      },
      {
        title: 'Banquet Manager',
        status: true,
      },
      {
        title: 'Banquet Server',
        status: true,
      },
      {
        title: 'Banquet Sous Chef',
        status: true,
      },
      {
        title: 'Banquet Steward',
        status: true,
      },
      {
        title: 'Barback',
        status: true,
      },
      {
        title: 'Barber',
        status: true,
      },
      {
        title: 'Barista',
        status: true,
      },
      {
        title: 'Barista and all Rounder',
        status: true,
      },
      {
        title: 'Barista and Cashier',
        status: true,
      },
      {
        title: 'Barista Maestro',
        status: true,
      },
      {
        title: 'Barman',
        status: true,
      },
      {
        title: 'Bar Manager',
        status: true,
      },
      {
        title: 'Barn Manager',
        status: true,
      },
      {
        title: 'Bar Server',
        status: true,
      },
      {
        title: 'Bar Supervisor',
        status: true,
      },
      {
        title: 'Bartender',
        status: true,
      },
      {
        title: 'Bartender and Server',
        status: true,
      },
      {
        title: 'Bartender and Waitress',
        status: true,
      },
      {
        title: 'Baseball Coach',
        status: true,
      },
      {
        title: 'Basketball Coach',
        status: true,
      },
      {
        title: 'Basketball Referee',
        status: true,
      },
      {
        title: 'Bas Technician',
        status: true,
      },
      {
        title: 'Batcher',
        status: true,
      },
      {
        title: 'Batcher Operator',
        status: true,
      },
      {
        title: 'Batch Maker',
        status: true,
      },
      {
        title: 'Batch Mixer',
        status: true,
      },
      {
        title: 'Battery Changer',
        status: true,
      },
      {
        title: 'BBP Analyst',
        status: true,
      },
      {
        title: 'BCBA',
        status: true,
      },
      {
        title: 'BDC Representative',
        status: true,
      },
      {
        title: 'BDR Manager',
        status: true,
      },
      {
        title: 'Beach Attendant',
        status: true,
      },
      {
        title: 'Beautician',
        status: true,
      },
      {
        title: 'Beauty Advisor',
        status: true,
      },
      {
        title: 'Beauty Boutique Expert',
        status: true,
      },
      {
        title: 'Beauty Boutique Manager',
        status: true,
      },
      {
        title: 'Beauty Consultant',
        status: true,
      },
      {
        title: 'Beauty Counter Manager',
        status: true,
      },
      {
        title: 'Beauty Guide Manager',
        status: true,
      },
      {
        title: 'Beauty Manager',
        status: true,
      },
      {
        title: 'Beauty Sales Advisor',
        status: true,
      },
      {
        title: 'Beauty Sales Consultant',
        status: true,
      },
      {
        title: 'Beauty Salon Manager',
        status: true,
      },
      {
        title: 'Beauty Shop Manager',
        status: true,
      },
      {
        title: 'Beauty Specialist',
        status: true,
      },
      {
        title: 'Beechjet Instructor Pilot',
        status: true,
      },
      {
        title: 'Before and After School Educator',
        status: true,
      },
      {
        title: 'Before and After School Program Manager',
        status: true,
      },
      {
        title: 'Before School Club Assistant',
        status: true,
      },
      {
        title: 'Behavioral Health Counselor',
        status: true,
      },
      {
        title: 'Behavioral Health Professional',
        status: true,
      },
      {
        title: 'Behavioral Health Technician',
        status: true,
      },
      {
        title: 'Behavioral Health Technician Supervisor',
        status: true,
      },
      {
        title: 'Behavioral Interventionist',
        status: true,
      },
      {
        title: 'Behavioral Specialist',
        status: true,
      },
      {
        title: 'Behavioral Technician',
        status: true,
      },
      {
        title: 'Behavioral Therapist',
        status: true,
      },
      {
        title: 'Behavior Analyst',
        status: true,
      },
      {
        title: 'Behavior Interventionist',
        status: true,
      },
      {
        title: 'Behavior Intervention Specialist',
        status: true,
      },
      {
        title: 'Behavior Specialist',
        status: true,
      },
      {
        title: 'Behavior Technician',
        status: true,
      },
      {
        title: 'Behavioural Interventionist',
        status: true,
      },
      {
        title: 'Behaviour Interventionist',
        status: true,
      },
      {
        title: 'Behaviour Support Assistant',
        status: true,
      },
      {
        title: 'Behaviour Support Worker',
        status: true,
      },
      {
        title: 'Behaviour Therapist',
        status: true,
      },
      {
        title: 'Bell Attendant',
        status: true,
      },
      {
        title: 'Bellhop',
        status: true,
      },
      {
        title: 'Bellman',
        status: true,
      },
      {
        title: 'Belt Operator',
        status: true,
      },
      {
        title: 'Bench Jeweler',
        status: true,
      },
      {
        title: 'Bench Scientist',
        status: true,
      },
      {
        title: 'Bench Technician',
        status: true,
      },
      {
        title: 'Benefit Analyst',
        status: true,
      },
      {
        title: 'Benefits Administrator',
        status: true,
      },
      {
        title: 'Benefits Analyst',
        status: true,
      },
      {
        title: 'Benefits Consultant',
        status: true,
      },
      {
        title: 'Benefits Coordinator',
        status: true,
      },
      {
        title: 'Benefits Manager',
        status: true,
      },
      {
        title: 'Benefits Specialist',
        status: true,
      },
      {
        title: 'Beverage Cart Attendant',
        status: true,
      },
      {
        title: 'Beverage Manager',
        status: true,
      },
      {
        title: 'Beverage Server',
        status: true,
      },
      {
        title: 'BGG Business Manager',
        status: true,
      },
      {
        title: 'BI Analyst',
        status: true,
      },
      {
        title: 'BI Consultant',
        status: true,
      },
      {
        title: 'Bicycle Mechanic',
        status: true,
      },
      {
        title: 'Bid and Program Manager',
        status: true,
      },
      {
        title: 'BI Dashboard Developer',
        status: true,
      },
      {
        title: 'Bid Coordinator',
        status: true,
      },
      {
        title: 'BI Developer',
        status: true,
      },
      {
        title: 'Bid Manager',
        status: true,
      },
      {
        title: 'Bidw Business Analyst',
        status: true,
      },
      {
        title: 'Bid Writer',
        status: true,
      },
      {
        title: 'BI Engineer',
        status: true,
      },
      {
        title: 'Big Data Apps Developer',
        status: true,
      },
      {
        title: 'Big Data Architect',
        status: true,
      },
      {
        title: 'Big Data Developer',
        status: true,
      },
      {
        title: 'Big Data Engineer',
        status: true,
      },
      {
        title: 'Big Data Solution Architect',
        status: true,
      },
      {
        title: 'Bike Delivery Specialist',
        status: true,
      },
      {
        title: 'Bike Mechanic',
        status: true,
      },
      {
        title: 'Bike Recovery Team Member',
        status: true,
      },
      {
        title: 'Bilingual Customer Service',
        status: true,
      },
      {
        title: 'Bilingual Teacher',
        status: true,
      },
      {
        title: 'Biller',
        status: true,
      },
      {
        title: 'Billing Accountant Associate',
        status: true,
      },
      {
        title: 'Billing Administrator',
        status: true,
      },
      {
        title: 'Billing Analyst',
        status: true,
      },
      {
        title: 'Billing Assistant',
        status: true,
      },
      {
        title: 'Billing Associate',
        status: true,
      },
      {
        title: 'Billing Clerk',
        status: true,
      },
      {
        title: 'Billing Coordinator',
        status: true,
      },
      {
        title: 'Billing Manager',
        status: true,
      },
      {
        title: 'Billing Representative',
        status: true,
      },
      {
        title: 'Billing Specialist',
        status: true,
      },
      {
        title: 'Billing Supervisor',
        status: true,
      },
      {
        title: 'BIM Coordinator',
        status: true,
      },
      {
        title: 'BIM Manager',
        status: true,
      },
      {
        title: 'BIM Specialist',
        status: true,
      },
      {
        title: 'BIM Technician',
        status: true,
      },
      {
        title: 'Bindery Operator',
        status: true,
      },
      {
        title: 'Biochemical Engineer',
        status: true,
      },
      {
        title: 'Biochemist',
        status: true,
      },
      {
        title: 'Bioinformatician',
        status: true,
      },
      {
        title: 'Bioinformatics',
        status: true,
      },
      {
        title: 'Bioinformatics Data Scientist',
        status: true,
      },
      {
        title: 'Bioinformatics Scientist',
        status: true,
      },
      {
        title: 'Biological Scientist',
        status: true,
      },
      {
        title: 'Biological Technician',
        status: true,
      },
      {
        title: 'Biologist',
        status: true,
      },
      {
        title: 'Biology Expert',
        status: true,
      },
      {
        title: 'Biology Instructor',
        status: true,
      },
      {
        title: 'Biology Professor',
        status: true,
      },
      {
        title: 'Biology Teacher',
        status: true,
      },
      {
        title: 'Biology Tutor',
        status: true,
      },
      {
        title: 'Biomedical Engineer',
        status: true,
      },
      {
        title: 'Biomedical Equipment Technician',
        status: true,
      },
      {
        title: 'Biomedical Scientist',
        status: true,
      },
      {
        title: 'Biomedical Technician',
        status: true,
      },
      {
        title: 'Biomed Technician',
        status: true,
      },
      {
        title: 'Bioprocess Technician',
        status: true,
      },
      {
        title: 'Biostatistician',
        status: true,
      },
      {
        title: 'Bird Survey Crew Lead',
        status: true,
      },
      {
        title: 'Bird Work Team Leader',
        status: true,
      },
      {
        title: 'BI & Reporting Analyst',
        status: true,
      },
      {
        title: 'Bishop',
        status: true,
      },
      {
        title: 'BI Support Specialist',
        status: true,
      },
      {
        title: 'Bizops Engineer',
        status: true,
      },
      {
        title: 'Biztalk Developer',
        status: true,
      },
      {
        title: 'Blackjack Dealer',
        status: true,
      },
      {
        title: 'Blacksmith',
        status: true,
      },
      {
        title: 'Black Student Internship Program',
        status: true,
      },
      {
        title: 'Blended Case Manager',
        status: true,
      },
      {
        title: 'Blender',
        status: true,
      },
      {
        title: 'Blending Operator',
        status: true,
      },
      {
        title: 'Blockchain Developer',
        status: true,
      },
      {
        title: 'Blockchain Engineer',
        status: true,
      },
      {
        title: 'Block Clerk',
        status: true,
      },
      {
        title: 'Blogger',
        status: true,
      },
      {
        title: 'Blog Writer',
        status: true,
      },
      {
        title: 'Blood Drive Technical Assistant',
        status: true,
      },
      {
        title: 'Blow Mold Machine Operator',
        status: true,
      },
      {
        title: 'Blow Mold Operator',
        status: true,
      },
      {
        title: 'Blue Coat Proxy Engineer',
        status: true,
      },
      {
        title: 'Blue Planet Learning Content Developer',
        status: true,
      },
      {
        title: 'Blue Planet Orchestration Pv Engineer',
        status: true,
      },
      {
        title: 'Blue Planet Software Developer',
        status: true,
      },
      {
        title: 'BMS Controls Specialist',
        status: true,
      },
      {
        title: 'Board Certified Behavior Analyst',
        status: true,
      },
      {
        title: 'Board Operator',
        status: true,
      },
      {
        title: 'Boat Business Assistant',
        status: true,
      },
      {
        title: 'Boat Captain',
        status: true,
      },
      {
        title: 'Boat Detailer',
        status: true,
      },
      {
        title: 'Boat Rigger',
        status: true,
      },
      {
        title: 'Boat Sales Consultant',
        status: true,
      },
      {
        title: 'Boat Service Manager',
        status: true,
      },
      {
        title: 'Boat Service Specialist',
        status: true,
      },
      {
        title: 'Bodily Injury Adjuster',
        status: true,
      },
      {
        title: 'Bodyguard',
        status: true,
      },
      {
        title: 'Body Repair Tech',
        status: true,
      },
      {
        title: 'Body Shop Estimator',
        status: true,
      },
      {
        title: 'Body Shop Estimator Trainee',
        status: true,
      },
      {
        title: 'Body Shop Manager',
        status: true,
      },
      {
        title: 'Body Shop Technician',
        status: true,
      },
      {
        title: 'Boh Team Member',
        status: true,
      },
      {
        title: 'Boilermaker',
        status: true,
      },
      {
        title: 'Boiler Operator',
        status: true,
      },
      {
        title: 'Boiler Supervisor',
        status: true,
      },
      {
        title: 'Book Editor',
        status: true,
      },
      {
        title: 'Booking Agent',
        status: true,
      },
      {
        title: 'Booking Assistant',
        status: true,
      },
      {
        title: 'Booking Clerk',
        status: true,
      },
      {
        title: 'Booking Coordinator',
        status: true,
      },
      {
        title: 'Booking & Registration Clerk',
        status: true,
      },
      {
        title: 'Bookkeeper',
        status: true,
      },
      {
        title: 'Bookkeeping and Quickbooks Consultant',
        status: true,
      },
      {
        title: 'Bookkeeping Clerk',
        status: true,
      },
      {
        title: 'Book Reviewer',
        status: true,
      },
      {
        title: 'Bookseller',
        status: true,
      },
      {
        title: 'Bookstore',
        status: true,
      },
      {
        title: 'Bookstore Manager',
        status: true,
      },
      {
        title: 'Boom Truck Operator',
        status: true,
      },
      {
        title: 'Border Patrol Agent',
        status: true,
      },
      {
        title: 'Boss Fulfillment Outfitter',
        status: true,
      },
      {
        title: 'Boss Outfitter',
        status: true,
      },
      {
        title: 'Boston Internal Audit & Financial Advisory Consultant',
        status: true,
      },
      {
        title: 'Botanist',
        status: true,
      },
      {
        title: 'Bottling Line Operator',
        status: true,
      },
      {
        title: 'Bouncer',
        status: true,
      },
      {
        title: 'Boutique Administrator',
        status: true,
      },
      {
        title: 'Boutique Assistant',
        status: true,
      },
      {
        title: 'Boutique Manager',
        status: true,
      },
      {
        title: 'Boutique Supervisor',
        status: true,
      },
      {
        title: 'Boxer',
        status: true,
      },
      {
        title: 'Box Office Agent',
        status: true,
      },
      {
        title: 'Box Office Attendant',
        status: true,
      },
      {
        title: 'Box Office Manager',
        status: true,
      },
      {
        title: 'Box Office Representative',
        status: true,
      },
      {
        title: 'Box Office Seller',
        status: true,
      },
      {
        title: 'Box Office Staff',
        status: true,
      },
      {
        title: 'Box Office Supervisor',
        status: true,
      },
      {
        title: 'Box Office Ticket Agent',
        status: true,
      },
      {
        title: 'Box Office Ticket Seller',
        status: true,
      },
      {
        title: 'Box Truck Driver',
        status: true,
      },
      {
        title: 'Brake Press Operator',
        status: true,
      },
      {
        title: 'Branch Administrator',
        status: true,
      },
      {
        title: 'Branch Advisor',
        status: true,
      },
      {
        title: 'Branch Assistant',
        status: true,
      },
      {
        title: 'Branch Compliance Manager',
        status: true,
      },
      {
        title: 'Branch Compliance Specialist',
        status: true,
      },
      {
        title: 'Branch Coordinator',
        status: true,
      },
      {
        title: 'Branch Director',
        status: true,
      },
      {
        title: 'Branch Manager',
        status: true,
      },
      {
        title: 'Branch Manager Trainee',
        status: true,
      },
      {
        title: 'Branch Office Administrator',
        status: true,
      },
      {
        title: 'Branch Operations Administrator',
        status: true,
      },
      {
        title: 'Branch Operations Assistant',
        status: true,
      },
      {
        title: 'Branch Operations Manager',
        status: true,
      },
      {
        title: 'Branch Recruiter',
        status: true,
      },
      {
        title: 'Branch Supervision Administrator',
        status: true,
      },
      {
        title: 'Branch Supervision Specialist',
        status: true,
      },
      {
        title: 'Brand Ambassador',
        status: true,
      },
      {
        title: 'Brand Associate',
        status: true,
      },
      {
        title: 'Brand Campaign Manager',
        status: true,
      },
      {
        title: 'Brand Consultant',
        status: true,
      },
      {
        title: 'Brand Coordinator',
        status: true,
      },
      {
        title: 'Brand Copywriter',
        status: true,
      },
      {
        title: 'Brand Designer',
        status: true,
      },
      {
        title: 'Brand Design Manager',
        status: true,
      },
      {
        title: 'Brand Director',
        status: true,
      },
      {
        title: 'Brand Manager',
        status: true,
      },
      {
        title: 'Brand Marketing Assistant',
        status: true,
      },
      {
        title: 'Brand Marketing Manager',
        status: true,
      },
      {
        title: 'Brand Marketing Specialist',
        status: true,
      },
      {
        title: 'Brand Operations Manager',
        status: true,
      },
      {
        title: 'Brand Partnerships Manager',
        status: true,
      },
      {
        title: 'Brand Representative',
        status: true,
      },
      {
        title: 'Brand Specialist',
        status: true,
      },
      {
        title: 'Brand Strategist',
        status: true,
      },
      {
        title: 'Brass Instructor',
        status: true,
      },
      {
        title: 'Bread Baker',
        status: true,
      },
      {
        title: 'Breakfast Attendant',
        status: true,
      },
      {
        title: 'Breakfast Chef',
        status: true,
      },
      {
        title: 'Breakfast Cook',
        status: true,
      },
      {
        title: 'Brewer',
        status: true,
      },
      {
        title: 'Brick and Stone Mason',
        status: true,
      },
      {
        title: 'Bricklayer',
        status: true,
      },
      {
        title: 'Brick Mason',
        status: true,
      },
      {
        title: 'Bridal Consultant',
        status: true,
      },
      {
        title: 'Bridge Design Engineer',
        status: true,
      },
      {
        title: 'Bridge Engineer',
        status: true,
      },
      {
        title: 'Bridge Inspector',
        status: true,
      },
      {
        title: 'Broadband Technician',
        status: true,
      },
      {
        title: 'Broadcast Engineer',
        status: true,
      },
      {
        title: 'Broadcast Journalist',
        status: true,
      },
      {
        title: 'Broadcast Producer',
        status: true,
      },
      {
        title: 'Broadcast Technician',
        status: true,
      },
      {
        title: 'Broker',
        status: true,
      },
      {
        title: 'Brokerage Assistant',
        status: true,
      },
      {
        title: 'Brokerage Coordinator',
        status: true,
      },
      {
        title: 'Brokerage Marketing Coordinator',
        status: true,
      },
      {
        title: 'Brokerage Specialist',
        status: true,
      },
      {
        title: 'Brokerage Technology Advisor',
        status: true,
      },
      {
        title: 'Broker Assistant',
        status: true,
      },
      {
        title: 'Broker Onboarding Manager',
        status: true,
      },
      {
        title: 'Broker Sales Manager',
        status: true,
      },
      {
        title: 'Btor Administrator',
        status: true,
      },
      {
        title: 'BU Compliance Consultant',
        status: true,
      },
      {
        title: 'Budget Analyst',
        status: true,
      },
      {
        title: 'Budget Manager',
        status: true,
      },
      {
        title: 'Budget Officer',
        status: true,
      },
      {
        title: 'Budtender',
        status: true,
      },
      {
        title: 'Buffet Attendant',
        status: true,
      },
      {
        title: 'Build and Release Engineer',
        status: true,
      },
      {
        title: 'Build Assurance Engineer',
        status: true,
      },
      {
        title: 'Build Engineer',
        status: true,
      },
      {
        title: 'Builder',
        status: true,
      },
      {
        title: 'Builder Sales Account Manager',
        status: true,
      },
      {
        title: 'Building Caretaker',
        status: true,
      },
      {
        title: 'Building Engineer',
        status: true,
      },
      {
        title: 'Building Envelope Engineer',
        status: true,
      },
      {
        title: 'Building Inspector',
        status: true,
      },
      {
        title: 'Building Maintenance Assistant',
        status: true,
      },
      {
        title: 'Building Maintenance Technician',
        status: true,
      },
      {
        title: 'Building Maintenance Worker',
        status: true,
      },
      {
        title: 'Building Manager',
        status: true,
      },
      {
        title: 'Building Official',
        status: true,
      },
      {
        title: 'Building Operating Engineer',
        status: true,
      },
      {
        title: 'Building Operations Coordinator',
        status: true,
      },
      {
        title: 'Building Operations Manager',
        status: true,
      },
      {
        title: 'Building Operator',
        status: true,
      },
      {
        title: 'Building Resource Teacher',
        status: true,
      },
      {
        title: 'Building Science Consultant',
        status: true,
      },
      {
        title: 'Building Science Engineer',
        status: true,
      },
      {
        title: 'Building Services Coordinator',
        status: true,
      },
      {
        title: 'Building Superintendent',
        status: true,
      },
      {
        title: 'Building Surveyor',
        status: true,
      },
      {
        title: 'Building Technician',
        status: true,
      },
      {
        title: 'Building Wellness Manager',
        status: true,
      },
      {
        title: 'Build Master',
        status: true,
      },
      {
        title: 'Build Project Manager',
        status: true,
      },
      {
        title: 'Bulk Blending Operator',
        status: true,
      },
      {
        title: 'Bursar',
        status: true,
      },
      {
        title: 'Bus Aide',
        status: true,
      },
      {
        title: 'Busboy',
        status: true,
      },
      {
        title: 'Bus Driver',
        status: true,
      },
      {
        title: 'Bus Driver For Special Needs',
        status: true,
      },
      {
        title: 'Business Account Manager',
        status: true,
      },
      {
        title: 'Business Account Manager Intern',
        status: true,
      },
      {
        title: 'Business Account Manager Trainee',
        status: true,
      },
      {
        title: 'Business Acquisition Sales Executive',
        status: true,
      },
      {
        title: 'Business Administrator',
        status: true,
      },
      {
        title: 'Business Advisor',
        status: true,
      },
      {
        title: 'Business Analysis Specialist',
        status: true,
      },
      {
        title: 'Business Analyst',
        status: true,
      },
      {
        title: 'Business Analyst Intern',
        status: true,
      },
      {
        title: 'Business Analyst Manager',
        status: true,
      },
      {
        title: 'Business Analytics Analyst',
        status: true,
      },
      {
        title: 'Business Analytics Consultant',
        status: true,
      },
      {
        title: 'Business Analytics Intern',
        status: true,
      },
      {
        title: 'Business Analytics Manager',
        status: true,
      },
      {
        title: 'Business Analytics & Reporting Analyst',
        status: true,
      },
      {
        title: 'Business Applications Engineer',
        status: true,
      },
      {
        title: 'Business Applications Manager',
        status: true,
      },
      {
        title: 'Business Architect',
        status: true,
      },
      {
        title: 'Business Assistant',
        status: true,
      },
      {
        title: 'Business Associate',
        status: true,
      },
      {
        title: 'Business Banker',
        status: true,
      },
      {
        title: 'Business Banking Relationship Manager',
        status: true,
      },
      {
        title: 'Business Banking Team Member',
        status: true,
      },
      {
        title: 'Business Consultant',
        status: true,
      },
      {
        title: 'Business Continuity Lead',
        status: true,
      },
      {
        title: 'Business Continuity Manager',
        status: true,
      },
      {
        title: 'Business Continuity Specialist',
        status: true,
      },
      {
        title: 'Business Controller',
        status: true,
      },
      {
        title: 'Business Coordinator',
        status: true,
      },
      {
        title: 'Business Data Analyst',
        status: true,
      },
      {
        title: 'Business Developer',
        status: true,
      },
      {
        title: 'Business Development Agent',
        status: true,
      },
      {
        title: 'Business Development Analyst',
        status: true,
      },
      {
        title: 'Business Development and Sales Manager',
        status: true,
      },
      {
        title: 'Business Development Assistant',
        status: true,
      },
      {
        title: 'Business Development Associate',
        status: true,
      },
      {
        title: 'Business Development Consultant',
        status: true,
      },
      {
        title: 'Business Development Coordinator',
        status: true,
      },
      {
        title: 'Business Development Director',
        status: true,
      },
      {
        title: 'Business Development Engineer',
        status: true,
      },
      {
        title: 'Business Development Executive',
        status: true,
      },
      {
        title: 'Business Development Intern',
        status: true,
      },
      {
        title: 'Business Development Lead',
        status: true,
      },
      {
        title: 'Business Development Leader',
        status: true,
      },
      {
        title: 'Business Development Manager',
        status: true,
      },
      {
        title: 'Business Development Officer',
        status: true,
      },
      {
        title: 'Business Development Operations',
        status: true,
      },
      {
        title: 'Business Development Partner',
        status: true,
      },
      {
        title: 'Business Development Representative',
        status: true,
      },
      {
        title: 'Business Development Representative Internship',
        status: true,
      },
      {
        title: 'Business Development Specialist',
        status: true,
      },
      {
        title: 'Business Director',
        status: true,
      },
      {
        title: 'Business Education Teacher',
        status: true,
      },
      {
        title: 'Business Financial Advisor',
        status: true,
      },
      {
        title: 'Business Help Desk Specialist',
        status: true,
      },
      {
        title: 'Business Immigration Paralegal',
        status: true,
      },
      {
        title: 'Business Information Security Officer',
        status: true,
      },
      {
        title: 'Business Initiatives Consultant',
        status: true,
      },
      {
        title: 'Business Insights Analyst',
        status: true,
      },
      {
        title: 'Business Insights Manager',
        status: true,
      },
      {
        title: 'Business Insights Specialist',
        status: true,
      },
      {
        title: 'Business Instructor',
        status: true,
      },
      {
        title: 'Business Insurance Position',
        status: true,
      },
      {
        title: 'Business Intelligence Analyst',
        status: true,
      },
      {
        title: 'Business Intelligence Architect',
        status: true,
      },
      {
        title: 'Business Intelligence Consultant',
        status: true,
      },
      {
        title: 'Business Intelligence Developer',
        status: true,
      },
      {
        title: 'Business Intelligence Engineer',
        status: true,
      },
      {
        title: 'Business Intelligence Lead',
        status: true,
      },
      {
        title: 'Business Intelligence Manager',
        status: true,
      },
      {
        title: 'Business Intelligence Specialist',
        status: true,
      },
      {
        title: 'Business Leader',
        status: true,
      },
      {
        title: 'Business Management Consultant',
        status: true,
      },
      {
        title: 'Business Manager',
        status: true,
      },
      {
        title: 'Business Objects Developer',
        status: true,
      },
      {
        title: 'Business Office Assistant',
        status: true,
      },
      {
        title: 'Business Office Coordinator',
        status: true,
      },
      {
        title: 'Business Office Manager',
        status: true,
      },
      {
        title: 'Business Operations Analyst',
        status: true,
      },
      {
        title: 'Business Operations Associate',
        status: true,
      },
      {
        title: 'Business Operations Coordinator',
        status: true,
      },
      {
        title: 'Business Operations Executive',
        status: true,
      },
      {
        title: 'Business Operations Lead',
        status: true,
      },
      {
        title: 'Business Operations Manager',
        status: true,
      },
      {
        title: 'Business Operations Specialist',
        status: true,
      },
      {
        title: 'Business Partner',
        status: true,
      },
      {
        title: 'Business Performance Analyst',
        status: true,
      },
      {
        title: 'Business Process Analyst',
        status: true,
      },
      {
        title: 'Business Process Associate',
        status: true,
      },
      {
        title: 'Business Process Consultant',
        status: true,
      },
      {
        title: 'Business Process Engineer',
        status: true,
      },
      {
        title: 'Business Processes Consultant',
        status: true,
      },
      {
        title: 'Business Process Expert',
        status: true,
      },
      {
        title: 'Business Process Manager',
        status: true,
      },
      {
        title: 'Business Process Specialist',
        status: true,
      },
      {
        title: 'Business Process Technology Consultant',
        status: true,
      },
      {
        title: 'Business Professional',
        status: true,
      },
      {
        title: 'Business Program Manager',
        status: true,
      },
      {
        title: 'Business Project Manager',
        status: true,
      },
      {
        title: 'Business Recruiter',
        status: true,
      },
      {
        title: 'Business Relationship Manager',
        status: true,
      },
      {
        title: 'Business Sales Representative',
        status: true,
      },
      {
        title: 'Business Services Advisor',
        status: true,
      },
      {
        title: 'Business Solutions Analyst',
        status: true,
      },
      {
        title: 'Business Solutions Architect',
        status: true,
      },
      {
        title: 'Business Solutions Consultant',
        status: true,
      },
      {
        title: 'Business Solutions Manager',
        status: true,
      },
      {
        title: 'Business Solutions Representative',
        status: true,
      },
      {
        title: 'Business Solution Strategist',
        status: true,
      },
      {
        title: 'Business Specialist',
        status: true,
      },
      {
        title: 'Business Strategist',
        status: true,
      },
      {
        title: 'Business Strategy Manager',
        status: true,
      },
      {
        title: 'Business Support',
        status: true,
      },
      {
        title: 'Business Support Analyst',
        status: true,
      },
      {
        title: 'Business Support Consultant',
        status: true,
      },
      {
        title: 'Business Support Manager',
        status: true,
      },
      {
        title: 'Business Support Specialist',
        status: true,
      },
      {
        title: 'Business Systems Analyst',
        status: true,
      },
      {
        title: 'Business Systems Consultant',
        status: true,
      },
      {
        title: 'Business Systems Data Analyst',
        status: true,
      },
      {
        title: 'Business Systems Manager',
        status: true,
      },
      {
        title: 'Business Systems Specialist',
        status: true,
      },
      {
        title: 'Business Tax Manager',
        status: true,
      },
      {
        title: 'Business Teacher',
        status: true,
      },
      {
        title: 'Business Transformation Architect',
        status: true,
      },
      {
        title: 'Business Unit Controller',
        status: true,
      },
      {
        title: 'Business Unit Leader',
        status: true,
      },
      {
        title: 'Business Unit Manager',
        status: true,
      },
      {
        title: 'Business Value Consultant',
        status: true,
      },
      {
        title: 'Bus Mgmt Analyst',
        status: true,
      },
      {
        title: 'Bus Monitor',
        status: true,
      },
      {
        title: 'Bus Operator',
        status: true,
      },
      {
        title: 'Busser',
        status: true,
      },
      {
        title: 'Butcher',
        status: true,
      },
      {
        title: 'Butler',
        status: true,
      },
      {
        title: 'Buyer',
        status: true,
      },
      {
        title: 'Buyer Development Director',
        status: true,
      },
      {
        title: 'Buyer Planner',
        status: true,
      },
      {
        title: 'Buying Assistant',
        status: true,
      },
      {
        title: 'C 130 ATS Subject Matter Expert',
        status: true,
      },
      {
        title: 'C 130 Pilot Instructor',
        status: true,
      },
      {
        title: 'Cab Driver',
        status: true,
      },
      {
        title: 'Cabin Cleaner',
        status: true,
      },
      {
        title: 'Cabinet Assembler',
        status: true,
      },
      {
        title: 'Cabinet Designer',
        status: true,
      },
      {
        title: 'Cabinet Finisher',
        status: true,
      },
      {
        title: 'Cabinet Installer',
        status: true,
      },
      {
        title: 'Cabinet Maker',
        status: true,
      },
      {
        title: 'Cabinet Service Technician',
        status: true,
      },
      {
        title: 'Cable Assembler',
        status: true,
      },
      {
        title: 'Cable Installation Technician',
        status: true,
      },
      {
        title: 'Cable Technician',
        status: true,
      },
      {
        title: 'CAD Designer',
        status: true,
      },
      {
        title: 'CAD Drafter',
        status: true,
      },
      {
        title: 'CAD Engineer',
        status: true,
      },
      {
        title: 'CAD Operator',
        status: true,
      },
      {
        title: 'CAD Specialist',
        status: true,
      },
      {
        title: 'CAD Technician',
        status: true,
      },
      {
        title: 'Cafe Manager',
        status: true,
      },
      {
        title: 'Cafeteria Cook',
        status: true,
      },
      {
        title: 'Cafeteria Worker',
        status: true,
      },
      {
        title: 'Cake Decorator',
        status: true,
      },
      {
        title: 'Calibration Technician',
        status: true,
      },
      {
        title: 'Call Center Agent',
        status: true,
      },
      {
        title: 'Call Center Customer Service',
        status: true,
      },
      {
        title: 'Call Center Customer Service Representative',
        status: true,
      },
      {
        title: 'Call Center Director',
        status: true,
      },
      {
        title: 'Call Center Manager',
        status: true,
      },
      {
        title: 'Call Center Operator',
        status: true,
      },
      {
        title: 'Call Center Phone Sales Representative',
        status: true,
      },
      {
        title: 'Call Center Representative',
        status: true,
      },
      {
        title: 'Call Center Representative Healthcare',
        status: true,
      },
      {
        title: 'Call Center Representative Inbound',
        status: true,
      },
      {
        title: 'Call Center Representative Outbound',
        status: true,
      },
      {
        title: 'Call Center Sales Agent',
        status: true,
      },
      {
        title: 'Call Center Sales Customer Service Representative',
        status: true,
      },
      {
        title: 'Call Center Sales Representative',
        status: true,
      },
      {
        title: 'Call Center Specialist',
        status: true,
      },
      {
        title: 'Call Center Supervisor',
        status: true,
      },
      {
        title: 'Call Center Team Lead',
        status: true,
      },
      {
        title: 'Call Center Team Leader',
        status: true,
      },
      {
        title: 'Caller',
        status: true,
      },
      {
        title: 'Camera Operator',
        status: true,
      },
      {
        title: 'Camo Clothing Outfitter',
        status: true,
      },
      {
        title: 'Camo Sales Associate',
        status: true,
      },
      {
        title: 'Camo Sales Outfitter',
        status: true,
      },
      {
        title: 'Campaign Analyst',
        status: true,
      },
      {
        title: 'Campaign Coordinator',
        status: true,
      },
      {
        title: 'Campaign Director',
        status: true,
      },
      {
        title: 'Campaign Manager',
        status: true,
      },
      {
        title: 'Campaign Marketing Manager',
        status: true,
      },
      {
        title: 'Campaign Operations Manager',
        status: true,
      },
      {
        title: 'Campaign Specialist',
        status: true,
      },
      {
        title: 'Campaign Support Team Member',
        status: true,
      },
      {
        title: 'Campaign Technical Support Engineer',
        status: true,
      },
      {
        title: 'Camp Counselor',
        status: true,
      },
      {
        title: 'Camp Director',
        status: true,
      },
      {
        title: 'Campground Host',
        status: true,
      },
      {
        title: 'Campground Manager',
        status: true,
      },
      {
        title: 'Camping Associate',
        status: true,
      },
      {
        title: 'Camping Outfitter',
        status: true,
      },
      {
        title: 'Camping Sales Associate',
        status: true,
      },
      {
        title: 'Camping Sales Outfitter',
        status: true,
      },
      {
        title: 'Camping Team Lead',
        status: true,
      },
      {
        title: 'Camping Team Leader',
        status: true,
      },
      {
        title: 'Campus Coordinator',
        status: true,
      },
      {
        title: 'Campus Recruiter',
        status: true,
      },
      {
        title: 'Campus Representative',
        status: true,
      },
      {
        title: 'Cancer Registrar',
        status: true,
      },
      {
        title: 'Canine Coach',
        status: true,
      },
      {
        title: 'Cannabis Concierge',
        status: true,
      },
      {
        title: 'Cannista',
        status: true,
      },
      {
        title: 'Canvasser',
        status: true,
      },
      {
        title: 'Capital Markets Application Engineer',
        status: true,
      },
      {
        title: 'Capital Project Manager',
        status: true,
      },
      {
        title: 'Captain',
        status: true,
      },
      {
        title: 'Capture Manager',
        status: true,
      },
      {
        title: 'Car Dealer',
        status: true,
      },
      {
        title: 'Car Detailer',
        status: true,
      },
      {
        title: 'Cardiac Sonographer',
        status: true,
      },
      {
        title: 'Cardiologist',
        status: true,
      },
      {
        title: 'Cardiologue',
        status: true,
      },
      {
        title: 'Cardiology Nurse Practitioner',
        status: true,
      },
      {
        title: 'Cardiothoracic Surgeon',
        status: true,
      },
      {
        title: 'Cardiovascular Technologist',
        status: true,
      },
      {
        title: 'Car Driver',
        status: true,
      },
      {
        title: 'Care Aide',
        status: true,
      },
      {
        title: 'Care Assistant',
        status: true,
      },
      {
        title: 'Care Coordinator',
        status: true,
      },
      {
        title: 'Career Advisor',
        status: true,
      },
      {
        title: 'Career Coach',
        status: true,
      },
      {
        title: 'Career Consultant',
        status: true,
      },
      {
        title: 'Career Counselor',
        status: true,
      },
      {
        title: 'Career Mentor',
        status: true,
      },
      {
        title: 'Career Services Coordinator',
        status: true,
      },
      {
        title: 'Career Specialist',
        status: true,
      },
      {
        title: 'Caregiver',
        status: true,
      },
      {
        title: 'Caregiver For In Home Care',
        status: true,
      },
      {
        title: 'Care Manager',
        status: true,
      },
      {
        title: 'Care Provider',
        status: true,
      },
      {
        title: 'Carer',
        status: true,
      },
      {
        title: 'Care Services Manager',
        status: true,
      },
      {
        title: 'Care Support Assistant',
        status: true,
      },
      {
        title: 'Care Taker',
        status: true,
      },
      {
        title: 'Caretaker',
        status: true,
      },
      {
        title: 'Care Team Assistant',
        status: true,
      },
      {
        title: 'Care Team Lead',
        status: true,
      },
      {
        title: 'Care Worker',
        status: true,
      },
      {
        title: 'Cargo Agent',
        status: true,
      },
      {
        title: 'Cargo Driver',
        status: true,
      },
      {
        title: 'Cargo Handler',
        status: true,
      },
      {
        title: 'Cargo Van Driver',
        status: true,
      },
      {
        title: 'Car Mechanic',
        status: true,
      },
      {
        title: 'Carpenter',
        status: true,
      },
      {
        title: 'Carpenter Apprentice',
        status: true,
      },
      {
        title: 'Carpenter Foreman',
        status: true,
      },
      {
        title: 'Carpenter Helper',
        status: true,
      },
      {
        title: 'Carpenters Helper',
        status: true,
      },
      {
        title: 'Carpentry',
        status: true,
      },
      {
        title: 'Carpentry Supervisor',
        status: true,
      },
      {
        title: 'Carpet Cleaner',
        status: true,
      },
      {
        title: 'Carpet Cleaning Technician',
        status: true,
      },
      {
        title: 'Car Porter',
        status: true,
      },
      {
        title: 'Carrier',
        status: true,
      },
      {
        title: 'Carrier Procurement Specialist',
        status: true,
      },
      {
        title: 'Carrier Sales Representative',
        status: true,
      },
      {
        title: 'Car Salesman',
        status: true,
      },
      {
        title: 'Cart Attendant',
        status: true,
      },
      {
        title: 'Cartographer',
        status: true,
      },
      {
        title: 'Car Wash Attendant',
        status: true,
      },
      {
        title: 'Car Washer',
        status: true,
      },
      {
        title: 'Carwash Supervisor',
        status: true,
      },
      {
        title: 'Case Aide',
        status: true,
      },
      {
        title: 'Case Investigator',
        status: true,
      },
      {
        title: 'Case Manager',
        status: true,
      },
      {
        title: 'Case Manager In Training',
        status: true,
      },
      {
        title: 'Case Packer',
        status: true,
      },
      {
        title: 'Case Picker',
        status: true,
      },
      {
        title: 'Case Specialist',
        status: true,
      },
      {
        title: 'Case Worker',
        status: true,
      },
      {
        title: 'Cash Applications Analyst',
        status: true,
      },
      {
        title: 'Cash Application Specialist',
        status: true,
      },
      {
        title: 'Cash Applications Specialist',
        status: true,
      },
      {
        title: 'Cashier',
        status: true,
      },
      {
        title: 'Cashier and Customer Service',
        status: true,
      },
      {
        title: 'Cashier Associate',
        status: true,
      },
      {
        title: 'Cashier FT',
        status: true,
      },
      {
        title: 'Cashier Outfitter',
        status: true,
      },
      {
        title: 'Cashier PT',
        status: true,
      },
      {
        title: 'Cashier SW',
        status: true,
      },
      {
        title: 'Cashier Team Member',
        status: true,
      },
      {
        title: 'Cash Management Analyst',
        status: true,
      },
      {
        title: 'Cash Management Specialist',
        status: true,
      },
      {
        title: 'Cash Manager',
        status: true,
      },
      {
        title: 'Cash Office Clerk',
        status: true,
      },
      {
        title: 'Cash Room Processor',
        status: true,
      },
      {
        title: 'Casino Dealer',
        status: true,
      },
      {
        title: 'Casino Host',
        status: true,
      },
      {
        title: 'Casino Manager',
        status: true,
      },
      {
        title: 'Cassandra Developer Db & Graph Developer',
        status: true,
      },
      {
        title: 'Casting Assistant',
        status: true,
      },
      {
        title: 'Casual Community Support Worker',
        status: true,
      },
      {
        title: 'Casual Driver Helper',
        status: true,
      },
      {
        title: 'Casual Employee',
        status: true,
      },
      {
        title: 'Casual Health Care Aide',
        status: true,
      },
      {
        title: 'Casual Housekeeper',
        status: true,
      },
      {
        title: 'Casual Licensed Practical Nurse',
        status: true,
      },
      {
        title: 'Casual Receptionist',
        status: true,
      },
      {
        title: 'Casual Security Guard',
        status: true,
      },
      {
        title: 'Casualty Specialist',
        status: true,
      },
      {
        title: 'Casualty Underwriter',
        status: true,
      },
      {
        title: 'Catalog Manager',
        status: true,
      },
      {
        title: 'Catastrophe Field Property Adjuster',
        status: true,
      },
      {
        title: 'Category Analyst',
        status: true,
      },
      {
        title: 'Category Customer Manager',
        status: true,
      },
      {
        title: 'Category Development Manager',
        status: true,
      },
      {
        title: 'Category General Manager',
        status: true,
      },
      {
        title: 'Category Insights Executive',
        status: true,
      },
      {
        title: 'Category Management Analyst',
        status: true,
      },
      {
        title: 'Category Manager',
        status: true,
      },
      {
        title: 'Category Specialist',
        status: true,
      },
      {
        title: 'Caterer',
        status: true,
      },
      {
        title: 'Catering Assistant',
        status: true,
      },
      {
        title: 'Catering Chef',
        status: true,
      },
      {
        title: 'Catering Coordinator',
        status: true,
      },
      {
        title: 'Catering Delivery Driver',
        status: true,
      },
      {
        title: 'Catering Manager',
        status: true,
      },
      {
        title: 'Catering Sales Manager',
        status: true,
      },
      {
        title: 'Catering Server',
        status: true,
      },
      {
        title: 'Cath Lab Tech',
        status: true,
      },
      {
        title: 'Cbsa Program Instructor',
        status: true,
      },
      {
        title: 'Cbt Therapist',
        status: true,
      },
      {
        title: 'C++ Cross Platform Application Developer',
        status: true,
      },
      {
        title: 'CCU RN',
        status: true,
      },
      {
        title: 'CDCA Chemical Dependency Counselor Assistant',
        status: true,
      },
      {
        title: 'C Developer',
        status: true,
      },
      {
        title: 'C# Developer',
        status: true,
      },
      {
        title: 'C++ Developer',
        status: true,
      },
      {
        title: 'CDL Driver',
        status: true,
      },
      {
        title: 'CDM Advisor',
        status: true,
      },
      {
        title: 'Celebrity Youtube Video Producer',
        status: true,
      },
      {
        title: 'Cell Phone Repair Technician',
        status: true,
      },
      {
        title: 'Cell Therapy Specialist',
        status: true,
      },
      {
        title: 'Cell Tower Climber',
        status: true,
      },
      {
        title: 'Cellular Telephone Technician',
        status: true,
      },
      {
        title: 'Cement Finisher',
        status: true,
      },
      {
        title: 'C++ Engineer',
        status: true,
      },
      {
        title: 'Center Director',
        status: true,
      },
      {
        title: 'Center Manager',
        status: true,
      },
      {
        title: 'Center Storage Manager',
        status: true,
      },
      {
        title: 'Central Office Technician',
        status: true,
      },
      {
        title: 'Central Service Technician',
        status: true,
      },
      {
        title: 'Centre Manager',
        status: true,
      },
      {
        title: 'CEO',
        status: true,
      },
      {
        title: 'Certification Specialist',
        status: true,
      },
      {
        title: 'Certified Athletic Trainer',
        status: true,
      },
      {
        title: 'Certified Dental Assistant',
        status: true,
      },
      {
        title: 'Certified Dental Assistant Level',
        status: true,
      },
      {
        title: 'Certified Diabetes Educator',
        status: true,
      },
      {
        title: 'Certified Dietary Manager',
        status: true,
      },
      {
        title: 'Certified Health Care Aide',
        status: true,
      },
      {
        title: 'Certified Home Health Aide',
        status: true,
      },
      {
        title: 'Certified Medical Assistant',
        status: true,
      },
      {
        title: 'Certified Medication Aide',
        status: true,
      },
      {
        title: 'Certified Millwright',
        status: true,
      },
      {
        title: 'Certified Montessori Online Teacher',
        status: true,
      },
      {
        title: 'Certified Nurse Aide',
        status: true,
      },
      {
        title: 'Certified Nurse Assistant',
        status: true,
      },
      {
        title: 'Certified Nurse Midwife',
        status: true,
      },
      {
        title: 'Certified Nursing Assistant',
        status: true,
      },
      {
        title: 'Certified Nursing Assistant Cna',
        status: true,
      },
      {
        title: 'Certified Occupational Therapy Assistant',
        status: true,
      },
      {
        title: 'Certified Ophthalmic Assistant',
        status: true,
      },
      {
        title: 'Certified Payroll',
        status: true,
      },
      {
        title: 'Certified Personal Trainer',
        status: true,
      },
      {
        title: 'Certified Pharmacy Technician',
        status: true,
      },
      {
        title: 'Certified Phlebotomy Technician',
        status: true,
      },
      {
        title: 'Certified Plumber',
        status: true,
      },
      {
        title: 'Certified Professional Coder',
        status: true,
      },
      {
        title: 'Certified Public Accountant',
        status: true,
      },
      {
        title: 'Certified Recovery Specialist',
        status: true,
      },
      {
        title: 'Certified Service Technician',
        status: true,
      },
      {
        title: 'Certified Surgical Technician',
        status: true,
      },
      {
        title: 'Certified Surgical Technologist',
        status: true,
      },
      {
        title: 'Certified Teacher',
        status: true,
      },
      {
        title: 'Certified Teacher Online',
        status: true,
      },
      {
        title: 'Certified Technician',
        status: true,
      },
      {
        title: 'Certified Veterinary Technician',
        status: true,
      },
      {
        title: 'Certified Welding Inspector',
        status: true,
      },
      {
        title: 'Cfaa Fire Alarm Technician',
        status: true,
      },
      {
        title: 'CFD Engineer',
        status: true,
      },
      {
        title: 'CFO',
        status: true,
      },
      {
        title: 'CFX Supervisor',
        status: true,
      },
      {
        title: 'CG Animator',
        status: true,
      },
      {
        title: 'CG Supervisor',
        status: true,
      },
      {
        title: 'Chain Sales Executive',
        status: true,
      },
      {
        title: 'Chain Sales Manager',
        status: true,
      },
      {
        title: 'Chairman',
        status: true,
      },
      {
        title: 'Chairside Dental Assistant',
        status: true,
      },
      {
        title: 'Chanel Beauty Specialist',
        status: true,
      },
      {
        title: 'Change Analyst',
        status: true,
      },
      {
        title: 'Change Consultant',
        status: true,
      },
      {
        title: 'Change Management Advisor',
        status: true,
      },
      {
        title: 'Change Management Analyst',
        status: true,
      },
      {
        title: 'Change Management Consultant',
        status: true,
      },
      {
        title: 'Change Management Lead',
        status: true,
      },
      {
        title: 'Change Management Specialist',
        status: true,
      },
      {
        title: 'Change Manager',
        status: true,
      },
      {
        title: 'Channel Account Manager',
        status: true,
      },
      {
        title: 'Channel Manager',
        status: true,
      },
      {
        title: 'Channel Marketing Manager',
        status: true,
      },
      {
        title: 'Channel Marketing Specialist',
        status: true,
      },
      {
        title: 'Channel & Partner Enablement Manager',
        status: true,
      },
      {
        title: 'Channel Partner Manager',
        status: true,
      },
      {
        title: 'Channel Sales Account Manager',
        status: true,
      },
      {
        title: 'Channel Sales Director',
        status: true,
      },
      {
        title: 'Channel Sales Manager',
        status: true,
      },
      {
        title: 'Channel Services Manager',
        status: true,
      },
      {
        title: 'Chaplain',
        status: true,
      },
      {
        title: 'Chaplain Resident',
        status: true,
      },
      {
        title: 'Character Artist',
        status: true,
      },
      {
        title: 'Chargeback Analyst',
        status: true,
      },
      {
        title: 'Charge Nurse',
        status: true,
      },
      {
        title: 'Chartered Secretary',
        status: true,
      },
      {
        title: 'Charter Pilot',
        status: true,
      },
      {
        title: 'Chauffeur',
        status: true,
      },
      {
        title: 'Checkouts Co Worker',
        status: true,
      },
      {
        title: 'Cheerleading Coach',
        status: true,
      },
      {
        title: 'Cheese Grating Operator',
        status: true,
      },
      {
        title: 'Cheese Packager',
        status: true,
      },
      {
        title: 'Cheese Packager Level',
        status: true,
      },
      {
        title: 'Cheese Packaging Lead',
        status: true,
      },
      {
        title: 'Cheese Production Supervisor',
        status: true,
      },
      {
        title: 'Chef',
        status: true,
      },
      {
        title: 'Chef Assistant',
        status: true,
      },
      {
        title: 'Chef De Cuisine',
        status: true,
      },
      {
        title: 'Chef De Partie',
        status: true,
      },
      {
        title: 'Chef Manager',
        status: true,
      },
      {
        title: 'Chemical Analyst',
        status: true,
      },
      {
        title: 'Chemical Compounder',
        status: true,
      },
      {
        title: 'Chemical Delivery Technician',
        status: true,
      },
      {
        title: 'Chemical Dependency Counselor',
        status: true,
      },
      {
        title: 'Chemical Engineer',
        status: true,
      },
      {
        title: 'Chemical Lab Technician',
        status: true,
      },
      {
        title: 'Chemical Operator',
        status: true,
      },
      {
        title: 'Chemical Plant Operator',
        status: true,
      },
      {
        title: 'Chemical Process Engineer',
        status: true,
      },
      {
        title: 'Chemical Production Operator',
        status: true,
      },
      {
        title: 'Chemical Propulsion Engineer',
        status: true,
      },
      {
        title: 'Chemical Technician',
        status: true,
      },
      {
        title: 'Chemist',
        status: true,
      },
      {
        title: 'Chemistry Professor',
        status: true,
      },
      {
        title: 'Chemistry Teacher',
        status: true,
      },
      {
        title: 'Chemistry Tutor',
        status: true,
      },
      {
        title: 'Cherry Picker',
        status: true,
      },
      {
        title: 'Cherry Picker Forklift Operator',
        status: true,
      },
      {
        title: 'Cherry Picker Operator',
        status: true,
      },
      {
        title: 'Cherry Pickers',
        status: true,
      },
      {
        title: 'Chicago Internal Audit & Financial Advisory Consultant',
        status: true,
      },
      {
        title: 'Chicos Call Center Representative',
        status: true,
      },
      {
        title: 'Chief Accountant',
        status: true,
      },
      {
        title: 'Chief Administrative Officer',
        status: true,
      },
      {
        title: 'Chief Architect',
        status: true,
      },
      {
        title: 'Chief Building Engineer',
        status: true,
      },
      {
        title: 'Chief Commercial Officer',
        status: true,
      },
      {
        title: 'Chief Communications Officer',
        status: true,
      },
      {
        title: 'Chief Compliance Officer',
        status: true,
      },
      {
        title: 'Chief Data Officer',
        status: true,
      },
      {
        title: 'Chief Development Officer',
        status: true,
      },
      {
        title: 'Chief Diversity Officer',
        status: true,
      },
      {
        title: 'Chief Engineer',
        status: true,
      },
      {
        title: 'Chief Estimator',
        status: true,
      },
      {
        title: 'Chief Executive Officer',
        status: true,
      },
      {
        title: 'Chief Financial Officer',
        status: true,
      },
      {
        title: 'Chief Human Resources Officer',
        status: true,
      },
      {
        title: 'Chief Information Officer',
        status: true,
      },
      {
        title: 'Chief Information Security Officer',
        status: true,
      },
      {
        title: 'Chief Investment Officer',
        status: true,
      },
      {
        title: 'Chief Learning Officer',
        status: true,
      },
      {
        title: 'Chief Marketing Officer',
        status: true,
      },
      {
        title: 'Chief Medical Officer',
        status: true,
      },
      {
        title: 'Chief Nursing Officer',
        status: true,
      },
      {
        title: 'Chief of Police',
        status: true,
      },
      {
        title: 'Chief of Staff',
        status: true,
      },
      {
        title: 'Chief Operating Engineer',
        status: true,
      },
      {
        title: 'Chief Operating Officer',
        status: true,
      },
      {
        title: 'Chief Operations Officer',
        status: true,
      },
      {
        title: 'Chief People Officer',
        status: true,
      },
      {
        title: 'Chief Product Officer',
        status: true,
      },
      {
        title: 'Chief Revenue Officer',
        status: true,
      },
      {
        title: 'Chief Risk Officer',
        status: true,
      },
      {
        title: 'Chief Security Officer',
        status: true,
      },
      {
        title: 'Chief Strategy Officer',
        status: true,
      },
      {
        title: 'Chief Technical Officer',
        status: true,
      },
      {
        title: 'Chief Technology Officer',
        status: true,
      },
      {
        title: 'Child Advocate',
        status: true,
      },
      {
        title: 'Child and Adolescent Psychiatrist',
        status: true,
      },
      {
        title: 'Child and Youth Worker',
        status: true,
      },
      {
        title: 'Child Care Assistant',
        status: true,
      },
      {
        title: 'Childcare Assistant',
        status: true,
      },
      {
        title: 'Childcare Cook',
        status: true,
      },
      {
        title: 'Child Care Educator',
        status: true,
      },
      {
        title: 'Child Caregiver',
        status: true,
      },
      {
        title: 'Child Care Live In Caregiver',
        status: true,
      },
      {
        title: 'Child Care Provider',
        status: true,
      },
      {
        title: 'Childcare Provider',
        status: true,
      },
      {
        title: 'Child Care Supervisor',
        status: true,
      },
      {
        title: 'Child Care Teacher',
        status: true,
      },
      {
        title: 'Childcare Teacher',
        status: true,
      },
      {
        title: 'Child Care Worker',
        status: true,
      },
      {
        title: 'Childcare Worker',
        status: true,
      },
      {
        title: 'Child Care Worker Assistant',
        status: true,
      },
      {
        title: 'Child Life Specialist',
        status: true,
      },
      {
        title: 'Child Psychiatrist',
        status: true,
      },
      {
        title: 'Child Psychologist',
        status: true,
      },
      {
        title: 'Childrens Residential Support Worker',
        status: true,
      },
      {
        title: 'Child & Youth Worker',
        status: true,
      },
      {
        title: 'Chinese English Customer Service Agent',
        status: true,
      },
      {
        title: 'Chinese Teacher',
        status: true,
      },
      {
        title: 'Chiropodist',
        status: true,
      },
      {
        title: 'Chiropractic Administrative Assistant',
        status: true,
      },
      {
        title: 'Chiropractic Assistant',
        status: true,
      },
      {
        title: 'Chiropractic Office Assistant',
        status: true,
      },
      {
        title: 'Chiropractor',
        status: true,
      },
      {
        title: 'Choir Director',
        status: true,
      },
      {
        title: 'Choreographer',
        status: true,
      },
      {
        title: 'Church Administrator',
        status: true,
      },
      {
        title: 'Church Musician',
        status: true,
      },
      {
        title: 'Church Organist',
        status: true,
      },
      {
        title: 'Church Secretary',
        status: true,
      },
      {
        title: 'Cinematics Artist',
        status: true,
      },
      {
        title: 'Cinematographer',
        status: true,
      },
      {
        title: 'Circuit Design Engineer',
        status: true,
      },
      {
        title: 'Circulation Manager',
        status: true,
      },
      {
        title: 'Circumstance Remediation Researcher',
        status: true,
      },
      {
        title: 'Cisco Certified Network Specialist',
        status: true,
      },
      {
        title: 'Cisco Engineer',
        status: true,
      },
      {
        title: 'Cisco Instructors',
        status: true,
      },
      {
        title: 'Cisco Network Engineer',
        status: true,
      },
      {
        title: 'Cisco Voice Engineer',
        status: true,
      },
      {
        title: 'CI Supervisor',
        status: true,
      },
      {
        title: 'Citrix Administrator',
        status: true,
      },
      {
        title: 'Citrix Engineer',
        status: true,
      },
      {
        title: 'City Administrator',
        status: true,
      },
      {
        title: 'City Attorney',
        status: true,
      },
      {
        title: 'City Build Manager',
        status: true,
      },
      {
        title: 'City Carrier Assistant',
        status: true,
      },
      {
        title: 'City Clerk',
        status: true,
      },
      {
        title: 'City Driver',
        status: true,
      },
      {
        title: 'City Engineer',
        status: true,
      },
      {
        title: 'City Manager',
        status: true,
      },
      {
        title: 'City Planner',
        status: true,
      },
      {
        title: 'Civil Design Engineer',
        status: true,
      },
      {
        title: 'Civil Designer',
        status: true,
      },
      {
        title: 'Civil Drafter',
        status: true,
      },
      {
        title: 'Civil Engineer',
        status: true,
      },
      {
        title: 'Civil Engineering Intern',
        status: true,
      },
      {
        title: 'Civil Engineering Technician',
        status: true,
      },
      {
        title: 'Civil Engineering Technologist',
        status: true,
      },
      {
        title: 'Civil Engineer In Training',
        status: true,
      },
      {
        title: 'Civil Engineer Specialized in Structure',
        status: true,
      },
      {
        title: 'Civil Estimator',
        status: true,
      },
      {
        title: 'Civil Field Engineer',
        status: true,
      },
      {
        title: 'Civil Foreman',
        status: true,
      },
      {
        title: 'Civil Laborer',
        status: true,
      },
      {
        title: 'Civil Project Engineer',
        status: true,
      },
      {
        title: 'Civil Project Manager',
        status: true,
      },
      {
        title: 'Civil Quality Inspector',
        status: true,
      },
      {
        title: 'Civil Registry Associate',
        status: true,
      },
      {
        title: 'Civil Registry Support Associate',
        status: true,
      },
      {
        title: 'Civil Structural Engineer',
        status: true,
      },
      {
        title: 'Civil Superintendent',
        status: true,
      },
      {
        title: 'Civil Water Engineer',
        status: true,
      },
      {
        title: 'Claim Adjuster',
        status: true,
      },
      {
        title: 'Claim Analyst',
        status: true,
      },
      {
        title: 'Claim Examiner',
        status: true,
      },
      {
        title: 'Claim Representative',
        status: true,
      },
      {
        title: 'Claims Adjuster',
        status: true,
      },
      {
        title: 'Claims Administrator',
        status: true,
      },
      {
        title: 'Claims Advisor',
        status: true,
      },
      {
        title: 'Claims Advocate',
        status: true,
      },
      {
        title: 'Claims Analyst',
        status: true,
      },
      {
        title: 'Claims and Network Analyst',
        status: true,
      },
      {
        title: 'Claims Appraiser',
        status: true,
      },
      {
        title: 'Claims Assistant',
        status: true,
      },
      {
        title: 'Claims Associate',
        status: true,
      },
      {
        title: 'Claims Auditor',
        status: true,
      },
      {
        title: 'Claims Clerk',
        status: true,
      },
      {
        title: 'Claims Coordinator',
        status: true,
      },
      {
        title: 'Claims Examiner',
        status: true,
      },
      {
        title: 'Claims Handler',
        status: true,
      },
      {
        title: 'Claims Intermediate Legal Counsel',
        status: true,
      },
      {
        title: 'Claims Investigator',
        status: true,
      },
      {
        title: 'Claims Manager',
        status: true,
      },
      {
        title: 'Claim Specialist',
        status: true,
      },
      {
        title: 'Claims Processing',
        status: true,
      },
      {
        title: 'Claims Processor',
        status: true,
      },
      {
        title: 'Claims Representative',
        status: true,
      },
      {
        title: 'Claims Resolution Specialist',
        status: true,
      },
      {
        title: 'Claims Service Representative',
        status: true,
      },
      {
        title: 'Claims Service Specialist',
        status: true,
      },
      {
        title: 'Claims Specialist',
        status: true,
      },
      {
        title: 'Claims Supervisor',
        status: true,
      },
      {
        title: 'Claims Technical Advisor',
        status: true,
      },
      {
        title: 'Clamp Forklift Operator',
        status: true,
      },
      {
        title: 'Clamp Lift Operator',
        status: true,
      },
      {
        title: 'Clamp Operator',
        status: true,
      },
      {
        title: 'Clamp Operators',
        status: true,
      },
      {
        title: 'Class 1 Driver',
        status: true,
      },
      {
        title: 'Class 1 Truck Driver',
        status: true,
      },
      {
        title: 'Class 3 Driver',
        status: true,
      },
      {
        title: 'Class 5 Driver',
        status: true,
      },
      {
        title: 'Class A CDL Driver',
        status: true,
      },
      {
        title: 'Class A CDL Truck Driver',
        status: true,
      },
      {
        title: 'Class A Delivery Driver',
        status: true,
      },
      {
        title: 'Class A Driver',
        status: true,
      },
      {
        title: 'Class Assistant',
        status: true,
      },
      {
        title: 'Class B CDL',
        status: true,
      },
      {
        title: 'Class B CDL Driver',
        status: true,
      },
      {
        title: 'Class B Driver',
        status: true,
      },
      {
        title: 'Class Instructor',
        status: true,
      },
      {
        title: 'Classroom Aide',
        status: true,
      },
      {
        title: 'Classroom Assistant',
        status: true,
      },
      {
        title: 'Classroom Teacher',
        status: true,
      },
      {
        title: 'Clean Energy Consultant',
        status: true,
      },
      {
        title: 'Clean Energy Sales Representative',
        status: true,
      },
      {
        title: 'Cleaner',
        status: true,
      },
      {
        title: 'Cleaner Custodian',
        status: true,
      },
      {
        title: 'Cleaning Associate',
        status: true,
      },
      {
        title: 'Cleaning Contractor',
        status: true,
      },
      {
        title: 'Cleaning Crew',
        status: true,
      },
      {
        title: 'Cleaning Janitor Operative',
        status: true,
      },
      {
        title: 'Cleaning Manager',
        status: true,
      },
      {
        title: 'Cleaning Operative',
        status: true,
      },
      {
        title: 'Cleaning Operator',
        status: true,
      },
      {
        title: 'Cleaning Specialist',
        status: true,
      },
      {
        title: 'Cleaning Staff',
        status: true,
      },
      {
        title: 'Cleaning Supervisor',
        status: true,
      },
      {
        title: 'Cleaning Team Leader',
        status: true,
      },
      {
        title: 'Cleaning Technician',
        status: true,
      },
      {
        title: 'Cleaning Validation Specialist',
        status: true,
      },
      {
        title: 'Cleanroom Technician',
        status: true,
      },
      {
        title: 'Clerical Assistant',
        status: true,
      },
      {
        title: 'Clerical Associate',
        status: true,
      },
      {
        title: 'Clerical Support Associate',
        status: true,
      },
      {
        title: 'Clerical Support Clerk',
        status: true,
      },
      {
        title: 'Clerk',
        status: true,
      },
      {
        title: 'Clerk Bakery',
        status: true,
      },
      {
        title: 'Clerk Bakery PT',
        status: true,
      },
      {
        title: 'Clerk Courtesy',
        status: true,
      },
      {
        title: 'Clerk Cut Fruit',
        status: true,
      },
      {
        title: 'Clerk Deli',
        status: true,
      },
      {
        title: 'Clerk Deli FT',
        status: true,
      },
      {
        title: 'Clerk Deli PT',
        status: true,
      },
      {
        title: 'Clerk File Maintenance',
        status: true,
      },
      {
        title: 'Clerk General',
        status: true,
      },
      {
        title: 'Clerk Grocery',
        status: true,
      },
      {
        title: 'Clerk Grocery FT',
        status: true,
      },
      {
        title: 'Clerk Grocery PT',
        status: true,
      },
      {
        title: 'Clerk Grocery Reg. PT',
        status: true,
      },
      {
        title: 'Clerk Hmr and Alc',
        status: true,
      },
      {
        title: 'Clerk Hmr and Alc PT',
        status: true,
      },
      {
        title: 'Clerk Meat',
        status: true,
      },
      {
        title: 'Clerk Meat PT',
        status: true,
      },
      {
        title: 'Clerk Meat Reg. PT',
        status: true,
      },
      {
        title: 'Clerk Operations',
        status: true,
      },
      {
        title: 'Clerk Produce',
        status: true,
      },
      {
        title: 'Clerk Produce FT',
        status: true,
      },
      {
        title: 'Clerk Produce PT',
        status: true,
      },
      {
        title: 'Clerk Seafood',
        status: true,
      },
      {
        title: 'Clerk Seafood PT',
        status: true,
      },
      {
        title: 'Clerk Title',
        status: true,
      },
      {
        title: 'Clerk Typist',
        status: true,
      },
      {
        title: 'Client Accountant',
        status: true,
      },
      {
        title: 'Client Accounting Associate',
        status: true,
      },
      {
        title: 'Client Accounting Manager',
        status: true,
      },
      {
        title: 'Client Account Manager',
        status: true,
      },
      {
        title: 'Client Account Owner',
        status: true,
      },
      {
        title: 'Client Action Team Pursuit Manager',
        status: true,
      },
      {
        title: 'Client Administrative Associate',
        status: true,
      },
      {
        title: 'Client Administrator',
        status: true,
      },
      {
        title: 'Client Advisor',
        status: true,
      },
      {
        title: 'Client Advocate',
        status: true,
      },
      {
        title: 'Client Analyst',
        status: true,
      },
      {
        title: 'Client Architect',
        status: true,
      },
      {
        title: 'Client Associate',
        status: true,
      },
      {
        title: 'Client Care Associate',
        status: true,
      },
      {
        title: 'Client Care Coordinator',
        status: true,
      },
      {
        title: 'Client Care Counsellor',
        status: true,
      },
      {
        title: 'Client Care Manager',
        status: true,
      },
      {
        title: 'Client Care Officer',
        status: true,
      },
      {
        title: 'Client Care Representative',
        status: true,
      },
      {
        title: 'Client Care Specialist',
        status: true,
      },
      {
        title: 'Client Concierge',
        status: true,
      },
      {
        title: 'Client Coordinator',
        status: true,
      },
      {
        title: 'Client Data Analyst',
        status: true,
      },
      {
        title: 'Client Delivery Manager',
        status: true,
      },
      {
        title: 'Client Development Manager',
        status: true,
      },
      {
        title: 'Client Director',
        status: true,
      },
      {
        title: 'Client Engagement Executive',
        status: true,
      },
      {
        title: 'Client Engagement Manager',
        status: true,
      },
      {
        title: 'Client Engineer',
        status: true,
      },
      {
        title: 'Client Executive',
        status: true,
      },
      {
        title: 'Client Experience Associate',
        status: true,
      },
      {
        title: 'Client Experience Manager',
        status: true,
      },
      {
        title: 'Client Facing Business Analyst',
        status: true,
      },
      {
        title: 'Client Financial Services Agent',
        status: true,
      },
      {
        title: 'Client Implementation Manager',
        status: true,
      },
      {
        title: 'Client Implementation Specialist',
        status: true,
      },
      {
        title: 'Client Information Specialist',
        status: true,
      },
      {
        title: 'Client Interfaces Developer',
        status: true,
      },
      {
        title: 'Client Lead',
        status: true,
      },
      {
        title: 'Client Manager',
        status: true,
      },
      {
        title: 'Client Onboarding Specialist',
        status: true,
      },
      {
        title: 'Client Operations Analyst',
        status: true,
      },
      {
        title: 'Client Operations Associate',
        status: true,
      },
      {
        title: 'Client Operations Specialist',
        status: true,
      },
      {
        title: 'Client Partner',
        status: true,
      },
      {
        title: 'Client Partner Executive',
        status: true,
      },
      {
        title: 'Client Project Manager',
        status: true,
      },
      {
        title: 'Client Relations Associate',
        status: true,
      },
      {
        title: 'Client Relationship Associate',
        status: true,
      },
      {
        title: 'Client Relationship Coordinator',
        status: true,
      },
      {
        title: 'Client Relationship Executive',
        status: true,
      },
      {
        title: 'Client Relationship Manager',
        status: true,
      },
      {
        title: 'Client Relations Manager',
        status: true,
      },
      {
        title: 'Client Relations Representative',
        status: true,
      },
      {
        title: 'Client Relations Specialist',
        status: true,
      },
      {
        title: 'Client Representative',
        status: true,
      },
      {
        title: 'Client Service Account Executive',
        status: true,
      },
      {
        title: 'Client Service Administrator',
        status: true,
      },
      {
        title: 'Client Service Advisor',
        status: true,
      },
      {
        title: 'Client Service Analyst',
        status: true,
      },
      {
        title: 'Client Service Associate',
        status: true,
      },
      {
        title: 'Client Service Consultant',
        status: true,
      },
      {
        title: 'Client Service Coordinator',
        status: true,
      },
      {
        title: 'Client Service Director',
        status: true,
      },
      {
        title: 'Client Service Director RHMR',
        status: true,
      },
      {
        title: 'Client Service Manager',
        status: true,
      },
      {
        title: 'Client Service Officer',
        status: true,
      },
      {
        title: 'Client Service Operations',
        status: true,
      },
      {
        title: 'Client Service Operations Specialist',
        status: true,
      },
      {
        title: 'Client Service Representative',
        status: true,
      },
      {
        title: 'Client Services Account Representative',
        status: true,
      },
      {
        title: 'Client Services Administrator',
        status: true,
      },
      {
        title: 'Client Services Advisor',
        status: true,
      },
      {
        title: 'Client Services Agent',
        status: true,
      },
      {
        title: 'Client Services Analyst',
        status: true,
      },
      {
        title: 'Client Services Associate',
        status: true,
      },
      {
        title: 'Client Services Coordinator',
        status: true,
      },
      {
        title: 'Client Services Director',
        status: true,
      },
      {
        title: 'Client Services Executive',
        status: true,
      },
      {
        title: 'Client Services Manager',
        status: true,
      },
      {
        title: 'Client Services Officer',
        status: true,
      },
      {
        title: 'Client Service Specialist',
        status: true,
      },
      {
        title: 'Client Services Representative',
        status: true,
      },
      {
        title: 'Client Services Specialist',
        status: true,
      },
      {
        title: 'Client Services Supervisor',
        status: true,
      },
      {
        title: 'Client Service Supervisor',
        status: true,
      },
      {
        title: 'Client Solution Analyst',
        status: true,
      },
      {
        title: 'Client Solutions Director',
        status: true,
      },
      {
        title: 'Client Solutions Executive',
        status: true,
      },
      {
        title: 'Client Solutions Manager',
        status: true,
      },
      {
        title: 'Client Solutions Officer',
        status: true,
      },
      {
        title: 'Client Solutions Specialist',
        status: true,
      },
      {
        title: 'Client Specialist',
        status: true,
      },
      {
        title: 'Client Specialist Key',
        status: true,
      },
      {
        title: 'Client Strategist',
        status: true,
      },
      {
        title: 'Client Success Analyst',
        status: true,
      },
      {
        title: 'Client Success Associate',
        status: true,
      },
      {
        title: 'Client Success Coordinator',
        status: true,
      },
      {
        title: 'Client Success Executive',
        status: true,
      },
      {
        title: 'Client Success Manager',
        status: true,
      },
      {
        title: 'Client Success Representative',
        status: true,
      },
      {
        title: 'Client Success Specialist',
        status: true,
      },
      {
        title: 'Client Support Analyst',
        status: true,
      },
      {
        title: 'Client Support Associate',
        status: true,
      },
      {
        title: 'Client Support Representative',
        status: true,
      },
      {
        title: 'Client Support Specialist',
        status: true,
      },
      {
        title: 'Climate Risk Assessment Leader',
        status: true,
      },
      {
        title: 'Climate Strategy Lead',
        status: true,
      },
      {
        title: 'Climbing Arborist',
        status: true,
      },
      {
        title: 'Clinical Administrator',
        status: true,
      },
      {
        title: 'Clinical Analyst',
        status: true,
      },
      {
        title: 'Clinical Application Specialist',
        status: true,
      },
      {
        title: 'Clinical Applications Specialist',
        status: true,
      },
      {
        title: 'Clinical Assistant',
        status: true,
      },
      {
        title: 'Clinical Associate',
        status: true,
      },
      {
        title: 'Clinical Business Analyst',
        status: true,
      },
      {
        title: 'Clinical Care Coordinator',
        status: true,
      },
      {
        title: 'Clinical Care Manager',
        status: true,
      },
      {
        title: 'Clinical Consultant',
        status: true,
      },
      {
        title: 'Clinical Coordinator',
        status: true,
      },
      {
        title: 'Clinical Counsellor',
        status: true,
      },
      {
        title: 'Clinical Data Analyst',
        status: true,
      },
      {
        title: 'Clinical Data Associate',
        status: true,
      },
      {
        title: 'Clinical Database Developer',
        status: true,
      },
      {
        title: 'Clinical Data Coordinator',
        status: true,
      },
      {
        title: 'Clinical Data Manager',
        status: true,
      },
      {
        title: 'Clinical Data Scientist',
        status: true,
      },
      {
        title: 'Clinical Development Specialist',
        status: true,
      },
      {
        title: 'Clinical Dietitian',
        status: true,
      },
      {
        title: 'Clinical Director',
        status: true,
      },
      {
        title: 'Clinical Documentation Specialist',
        status: true,
      },
      {
        title: 'Clinical Education Manager',
        status: true,
      },
      {
        title: 'Clinical Educator',
        status: true,
      },
      {
        title: 'Clinical Engagement Specialist',
        status: true,
      },
      {
        title: 'Clinical Engineer',
        status: true,
      },
      {
        title: 'Clinical Exercise Physiologist',
        status: true,
      },
      {
        title: 'Clinical Genomics Technologist',
        status: true,
      },
      {
        title: 'Clinical Informatics Specialist',
        status: true,
      },
      {
        title: 'Clinical Instructor',
        status: true,
      },
      {
        title: 'Clinical Laboratory Assistant',
        status: true,
      },
      {
        title: 'Clinical Laboratory Scientist',
        status: true,
      },
      {
        title: 'Clinical Laboratory Technician',
        status: true,
      },
      {
        title: 'Clinical Laboratory Technologist',
        status: true,
      },
      {
        title: 'Clinical Lab Scientist',
        status: true,
      },
      {
        title: 'Clinical Lab Technician',
        status: true,
      },
      {
        title: 'Clinical Lead',
        status: true,
      },
      {
        title: 'Clinical Liaison',
        status: true,
      },
      {
        title: 'Clinical Manager',
        status: true,
      },
      {
        title: 'Clinical Medical Assistant',
        status: true,
      },
      {
        title: 'Clinical Nurse',
        status: true,
      },
      {
        title: 'Clinical Nurse Educator',
        status: true,
      },
      {
        title: 'Clinical Nurse Manager',
        status: true,
      },
      {
        title: 'Clinical Nurse Specialist',
        status: true,
      },
      {
        title: 'Clinical Nursing Instructor',
        status: true,
      },
      {
        title: 'Clinical Operations Lead',
        status: true,
      },
      {
        title: 'Clinical Operations Manager',
        status: true,
      },
      {
        title: 'Clinical Pharmacist',
        status: true,
      },
      {
        title: 'Clinical Physiotherapist',
        status: true,
      },
      {
        title: 'Clinical Program Manager',
        status: true,
      },
      {
        title: 'Clinical Project Leader',
        status: true,
      },
      {
        title: 'Clinical Project Manager',
        status: true,
      },
      {
        title: 'Clinical Psychologist',
        status: true,
      },
      {
        title: 'Clinical Research',
        status: true,
      },
      {
        title: 'Clinical Research Assistant',
        status: true,
      },
      {
        title: 'Clinical Research Associate',
        status: true,
      },
      {
        title: 'Clinical Research Associate Manager',
        status: true,
      },
      {
        title: 'Clinical Research Coordinator',
        status: true,
      },
      {
        title: 'Clinical Research Director',
        status: true,
      },
      {
        title: 'Clinical Researcher',
        status: true,
      },
      {
        title: 'Clinical Research Manager',
        status: true,
      },
      {
        title: 'Clinical Research Nurse',
        status: true,
      },
      {
        title: 'Clinical Research Patient Recruiter',
        status: true,
      },
      {
        title: 'Clinical Research Physician',
        status: true,
      },
      {
        title: 'Clinical Research Scientist',
        status: true,
      },
      {
        title: 'Clinical Research Specialist',
        status: true,
      },
      {
        title: 'Clinical Research Volunteers',
        status: true,
      },
      {
        title: 'Clinical Responder',
        status: true,
      },
      {
        title: 'Clinical SAS Programmer',
        status: true,
      },
      {
        title: 'Clinical Science Associate',
        status: true,
      },
      {
        title: 'Clinical Scientist',
        status: true,
      },
      {
        title: 'Clinical Social Worker',
        status: true,
      },
      {
        title: 'Clinical Specialist',
        status: true,
      },
      {
        title: 'Clinical Study Manager',
        status: true,
      },
      {
        title: 'Clinical Supervisor',
        status: true,
      },
      {
        title: 'Clinical Supplies Manager',
        status: true,
      },
      {
        title: 'Clinical Supply Chain Manager',
        status: true,
      },
      {
        title: 'Clinical Support Specialist',
        status: true,
      },
      {
        title: 'Clinical Systems Analyst',
        status: true,
      },
      {
        title: 'Clinical Technician',
        status: true,
      },
      {
        title: 'Clinical Therapist',
        status: true,
      },
      {
        title: 'Clinical Trial Assistant',
        status: true,
      },
      {
        title: 'Clinical Trial Associate',
        status: true,
      },
      {
        title: 'Clinical Trial Manager',
        status: true,
      },
      {
        title: 'Clinical Trials Manager',
        status: true,
      },
      {
        title: 'Clinical Veterinarian',
        status: true,
      },
      {
        title: 'Clinic Assistant',
        status: true,
      },
      {
        title: 'Clinic Director',
        status: true,
      },
      {
        title: 'Clinician',
        status: true,
      },
      {
        title: 'Clinician Advocate',
        status: true,
      },
      {
        title: 'Clinic Manager',
        status: true,
      },
      {
        title: 'Clinic Receptionist',
        status: true,
      },
      {
        title: 'Clinic Secretary',
        status: true,
      },
      {
        title: 'Clinic Supervisor',
        status: true,
      },
      {
        title: 'Closing Manager',
        status: true,
      },
      {
        title: 'Closing Specialist',
        status: true,
      },
      {
        title: 'Clothing Outfitter',
        status: true,
      },
      {
        title: 'Clothing Processor',
        status: true,
      },
      {
        title: 'Clothing Sales Associate',
        status: true,
      },
      {
        title: 'Clothing Sales Outfitter',
        status: true,
      },
      {
        title: 'Clothing Team Lead',
        status: true,
      },
      {
        title: 'Cloud Application Architect',
        status: true,
      },
      {
        title: 'Cloud Application Engineer',
        status: true,
      },
      {
        title: 'Cloud Architect',
        status: true,
      },
      {
        title: 'Cloud Automation Engineer',
        status: true,
      },
      {
        title: 'Cloud Back End Engineer',
        status: true,
      },
      {
        title: 'Cloud Business Analyst',
        status: true,
      },
      {
        title: 'Cloud Consultant',
        status: true,
      },
      {
        title: 'Cloud Customer Success Manager',
        status: true,
      },
      {
        title: 'Cloud Data Architect',
        status: true,
      },
      {
        title: 'Cloud Database Systems Developer',
        status: true,
      },
      {
        title: 'Cloud Data Engineer',
        status: true,
      },
      {
        title: 'Cloud Developer',
        status: true,
      },
      {
        title: 'Cloud Development Engineer',
        status: true,
      },
      {
        title: 'Cloud Devops Engineer',
        status: true,
      },
      {
        title: 'Cloud Engagement Lead',
        status: true,
      },
      {
        title: 'Cloud Engineer',
        status: true,
      },
      {
        title: 'Cloud Engineer Placement Scheme',
        status: true,
      },
      {
        title: 'Cloudforte Architect',
        status: true,
      },
      {
        title: 'Cloud Infrastructure Architect',
        status: true,
      },
      {
        title: 'Cloud Infrastructure Developer',
        status: true,
      },
      {
        title: 'Cloud Infrastructure Engineer',
        status: true,
      },
      {
        title: 'Cloud Lead',
        status: true,
      },
      {
        title: 'Cloud Native Developer',
        status: true,
      },
      {
        title: 'Cloud Native Full Stack Application Developer',
        status: true,
      },
      {
        title: 'Cloud Network Engineer',
        status: true,
      },
      {
        title: 'Cloud Network Security Engineer',
        status: true,
      },
      {
        title: 'Cloud Operations Developer',
        status: true,
      },
      {
        title: 'Cloud Operations Engineer',
        status: true,
      },
      {
        title: 'Cloud Operations Lead',
        status: true,
      },
      {
        title: 'Cloud Platform Engineer',
        status: true,
      },
      {
        title: 'Cloud Security Advisor',
        status: true,
      },
      {
        title: 'Cloud Security Analyst',
        status: true,
      },
      {
        title: 'Cloud Security Architect',
        status: true,
      },
      {
        title: 'Cloud Security Engineer',
        status: true,
      },
      {
        title: 'Cloud Security Specialist',
        status: true,
      },
      {
        title: 'Cloud Services Engineer',
        status: true,
      },
      {
        title: 'Cloud Services Platform Architect',
        status: true,
      },
      {
        title: 'Cloud Site Reliability Engineer',
        status: true,
      },
      {
        title: 'Cloud Software Developer',
        status: true,
      },
      {
        title: 'Cloud Software Engineer',
        status: true,
      },
      {
        title: 'Cloud Solution Architect',
        status: true,
      },
      {
        title: 'Cloud Solutions Advisor',
        status: true,
      },
      {
        title: 'Cloud Solutions Architect',
        status: true,
      },
      {
        title: 'Cloud Solutions Centre Account Manager',
        status: true,
      },
      {
        title: 'Cloud Solutions Consultant',
        status: true,
      },
      {
        title: 'Cloud Specialist',
        status: true,
      },
      {
        title: 'Cloud Support Engineer',
        status: true,
      },
      {
        title: 'Cloud Support Specialist',
        status: true,
      },
      {
        title: 'Cloud Systems Administrator',
        status: true,
      },
      {
        title: 'Cloud Systems Engineer',
        status: true,
      },
      {
        title: 'Clown',
        status: true,
      },
      {
        title: 'Club Associate',
        status: true,
      },
      {
        title: 'Club Card Associate',
        status: true,
      },
      {
        title: 'Club Card Outfitter',
        status: true,
      },
      {
        title: 'Club Card Sales Outfitter',
        status: true,
      },
      {
        title: 'Club Customer Service',
        status: true,
      },
      {
        title: 'Club Customer Service Outfitter',
        status: true,
      },
      {
        title: 'Club Manager',
        status: true,
      },
      {
        title: 'Club Membership Manager',
        status: true,
      },
      {
        title: 'Club Outfitter',
        status: true,
      },
      {
        title: 'Cmats Air Traffic Control Instructor',
        status: true,
      },
      {
        title: 'CMM Operator',
        status: true,
      },
      {
        title: 'CMM Programmer',
        status: true,
      },
      {
        title: 'CMMS Administrator',
        status: true,
      },
      {
        title: 'CMMS Operations Administrator',
        status: true,
      },
      {
        title: 'CMMS Operations Technician',
        status: true,
      },
      {
        title: 'CNA',
        status: true,
      },
      {
        title: 'CNA Class',
        status: true,
      },
      {
        title: 'CNC Lathe Machinist',
        status: true,
      },
      {
        title: 'CNC Lathe Operator',
        status: true,
      },
      {
        title: 'CNC Lathe Programmer',
        status: true,
      },
      {
        title: 'CNC Machine Operator',
        status: true,
      },
      {
        title: 'CNC Machinist',
        status: true,
      },
      {
        title: 'CNC Maintenance Technician',
        status: true,
      },
      {
        title: 'CNC Milling Machinist',
        status: true,
      },
      {
        title: 'CNC Mill Machinist',
        status: true,
      },
      {
        title: 'CNC Mill Operator',
        status: true,
      },
      {
        title: 'CNC Operator',
        status: true,
      },
      {
        title: 'CNC Press Brake Operator',
        status: true,
      },
      {
        title: 'CNC Programmer',
        status: true,
      },
      {
        title: 'CNC Sales Representative',
        status: true,
      },
      {
        title: 'CNC Swiss Machinist',
        status: true,
      },
      {
        title: 'C# .Net Developer',
        status: true,
      },
      {
        title: 'Coach',
        status: true,
      },
      {
        title: 'Coach Agile',
        status: true,
      },
      {
        title: 'Coach Sportif',
        status: true,
      },
      {
        title: 'Coach Technique En Architecture Logicielle',
        status: true,
      },
      {
        title: 'Coal Miner',
        status: true,
      },
      {
        title: 'Coating Inspector',
        status: true,
      },
      {
        title: 'Cobol Developer',
        status: true,
      },
      {
        title: 'Cobol Programmer',
        status: true,
      },
      {
        title: 'Coca Cola Glider Installer',
        status: true,
      },
      {
        title: 'Cocktail Server',
        status: true,
      },
      {
        title: 'Cocktail Waitress',
        status: true,
      },
      {
        title: 'Code Enforcement Officer',
        status: true,
      },
      {
        title: 'Coding Instructor',
        status: true,
      },
      {
        title: 'Coding Specialist',
        status: true,
      },
      {
        title: 'Coffee Bar Server',
        status: true,
      },
      {
        title: 'Coffee Roaster',
        status: true,
      },
      {
        title: 'Coffee Shop Manager',
        status: true,
      },
      {
        title: 'Cognos Analyst',
        status: true,
      },
      {
        title: 'Cognos Developer',
        status: true,
      },
      {
        title: 'Coin & Candor Host',
        status: true,
      },
      {
        title: 'Coldfusion Developer',
        status: true,
      },
      {
        title: 'Cold Storage Production Workers',
        status: true,
      },
      {
        title: 'Collaboration Engineer',
        status: true,
      },
      {
        title: 'Collaboration Sales Specialist',
        status: true,
      },
      {
        title: 'Collateral Securities Specialist',
        status: true,
      },
      {
        title: 'Collateral Specialist',
        status: true,
      },
      {
        title: 'Colleague Support Engineer',
        status: true,
      },
      {
        title: 'Collection Agent',
        status: true,
      },
      {
        title: 'Collection Analyst',
        status: true,
      },
      {
        title: 'Collection Assistant',
        status: true,
      },
      {
        title: 'Collection Manager',
        status: true,
      },
      {
        title: 'Collection Officer',
        status: true,
      },
      {
        title: 'Collection Representative',
        status: true,
      },
      {
        title: 'Collections Agent',
        status: true,
      },
      {
        title: 'Collections Analyst',
        status: true,
      },
      {
        title: 'Collections Appeal Advocate',
        status: true,
      },
      {
        title: 'Collections Clerk',
        status: true,
      },
      {
        title: 'Collections Coordinator',
        status: true,
      },
      {
        title: 'Collections & Customer Service Representative',
        status: true,
      },
      {
        title: 'Collections Driver',
        status: true,
      },
      {
        title: 'Collections Manager',
        status: true,
      },
      {
        title: 'Collections Officer',
        status: true,
      },
      {
        title: 'Collection Specialist',
        status: true,
      },
      {
        title: 'Collections Representative',
        status: true,
      },
      {
        title: 'Collections Specialist',
        status: true,
      },
      {
        title: 'Collections Supervisor',
        status: true,
      },
      {
        title: 'Collection Supervisor',
        status: true,
      },
      {
        title: 'Collection Technician',
        status: true,
      },
      {
        title: 'Collector',
        status: true,
      },
      {
        title: 'College Advisor',
        status: true,
      },
      {
        title: 'College Counselor',
        status: true,
      },
      {
        title: 'College Instructor',
        status: true,
      },
      {
        title: 'Collision Estimator',
        status: true,
      },
      {
        title: 'Colorist',
        status: true,
      },
      {
        title: 'Columnist',
        status: true,
      },
      {
        title: 'Co Manager',
        status: true,
      },
      {
        title: 'Combat Engineer',
        status: true,
      },
      {
        title: 'Combo Welder',
        status: true,
      },
      {
        title: 'Comic',
        status: true,
      },
      {
        title: 'Command Center Manager',
        status: true,
      },
      {
        title: 'Commercial Account Executive',
        status: true,
      },
      {
        title: 'Commercial Account Manager',
        status: true,
      },
      {
        title: 'Commercial Account Manager Intern',
        status: true,
      },
      {
        title: 'Commercial Account Manager Trainee',
        status: true,
      },
      {
        title: 'Commercial Account Representative',
        status: true,
      },
      {
        title: 'Commercial Administrator',
        status: true,
      },
      {
        title: 'Commercial Analyst',
        status: true,
      },
      {
        title: 'Commercial Analyst Development Program',
        status: true,
      },
      {
        title: 'Commercial Assistant',
        status: true,
      },
      {
        title: 'Commercial Associate',
        status: true,
      },
      {
        title: 'Commercial B2B',
        status: true,
      },
      {
        title: 'Commercial B2C',
        status: true,
      },
      {
        title: 'Commercial Banker',
        status: true,
      },
      {
        title: 'Commercial Banking Associate',
        status: true,
      },
      {
        title: 'Commercial Business Development Manager',
        status: true,
      },
      {
        title: 'Commercial Cad Designer',
        status: true,
      },
      {
        title: 'Commercial Cleaner',
        status: true,
      },
      {
        title: 'Commercial Construction Project Manager',
        status: true,
      },
      {
        title: 'Commercial Construction Superintendent',
        status: true,
      },
      {
        title: 'Commercial Contracts Manager',
        status: true,
      },
      {
        title: 'Commercial Coordinator',
        status: true,
      },
      {
        title: 'Commercial Counsel',
        status: true,
      },
      {
        title: 'Commercial Credit Analyst',
        status: true,
      },
      {
        title: 'Commercial Credit Officer',
        status: true,
      },
      {
        title: 'Commercial Credit Underwriter',
        status: true,
      },
      {
        title: 'Commercial Director',
        status: true,
      },
      {
        title: 'Commercial Driver',
        status: true,
      },
      {
        title: 'Commercial Effectiveness Manager',
        status: true,
      },
      {
        title: 'Commercial Enterprise Installation Technician',
        status: true,
      },
      {
        title: 'Commercial Enterprise Service Technician',
        status: true,
      },
      {
        title: 'Commercial Executive',
        status: true,
      },
      {
        title: 'Commercial Finance Analyst',
        status: true,
      },
      {
        title: 'Commercial Finance Manager',
        status: true,
      },
      {
        title: 'Commercial Fire Alarm Installer',
        status: true,
      },
      {
        title: 'Commercial Fire Inspection Technician',
        status: true,
      },
      {
        title: 'Commercial Fire Test & Inspection Technician',
        status: true,
      },
      {
        title: 'Commercial Gas Engineer',
        status: true,
      },
      {
        title: 'Commercial Installation Coordinator',
        status: true,
      },
      {
        title: 'Commercial Installation Technician',
        status: true,
      },
      {
        title: 'Commercial Installer',
        status: true,
      },
      {
        title: 'Commercial Install Tech',
        status: true,
      },
      {
        title: 'Commercial Insurance Account Manager',
        status: true,
      },
      {
        title: 'Commercial Insurance Advisor',
        status: true,
      },
      {
        title: 'Commercial Insurance Broker',
        status: true,
      },
      {
        title: 'Commercial Itinerant',
        status: true,
      },
      {
        title: 'Commercialization Manager',
        status: true,
      },
      {
        title: 'Commercial Lawyer',
        status: true,
      },
      {
        title: 'Commercial Lender',
        status: true,
      },
      {
        title: 'Commercial Lines Account Manager',
        status: true,
      },
      {
        title: 'Commercial Lines Underwriter',
        status: true,
      },
      {
        title: 'Commercial Loan Officer',
        status: true,
      },
      {
        title: 'Commercial Loan Specialist',
        status: true,
      },
      {
        title: 'Commercial Manager',
        status: true,
      },
      {
        title: 'Commercial Mortgage Specialist',
        status: true,
      },
      {
        title: 'Commercial Operations Manager',
        status: true,
      },
      {
        title: 'Commercial Overseas',
        status: true,
      },
      {
        title: 'Commercial Painter',
        status: true,
      },
      {
        title: 'Commercial Product Manager',
        status: true,
      },
      {
        title: 'Commercial Project Manager',
        status: true,
      },
      {
        title: 'Commercial Property Accountant',
        status: true,
      },
      {
        title: 'Commercial Property Manager',
        status: true,
      },
      {
        title: 'Commercial Real Estate Agent',
        status: true,
      },
      {
        title: 'Commercial Real Estate Appraiser',
        status: true,
      },
      {
        title: 'Commercial Real Estate Broker',
        status: true,
      },
      {
        title: 'Commercial Real Estate Law Clerk',
        status: true,
      },
      {
        title: 'Commercial Real Estate Paralegal',
        status: true,
      },
      {
        title: 'Commercial Real Estate Sales Associate',
        status: true,
      },
      {
        title: 'Commercial Roofer',
        status: true,
      },
      {
        title: 'Commercial Sales Consultant',
        status: true,
      },
      {
        title: 'Commercial Sales Executive',
        status: true,
      },
      {
        title: 'Commercial Sales Manager',
        status: true,
      },
      {
        title: 'Commercial Sales Representative',
        status: true,
      },
      {
        title: 'Commercial Security Consultant',
        status: true,
      },
      {
        title: 'Commercial Security Guard',
        status: true,
      },
      {
        title: 'Commercial Sedentaire',
        status: true,
      },
      {
        title: 'Commercial Service Apprentice',
        status: true,
      },
      {
        title: 'Commercial Service Coordinator',
        status: true,
      },
      {
        title: 'Commercial Service Manager',
        status: true,
      },
      {
        title: 'Commercial Services Officer',
        status: true,
      },
      {
        title: 'Commercial Service Tech',
        status: true,
      },
      {
        title: 'Commercial Service Technician',
        status: true,
      },
      {
        title: 'Commercial Sprinkler Designer',
        status: true,
      },
      {
        title: 'Commercial Support Analyst',
        status: true,
      },
      {
        title: 'Commercial Territory Manager',
        status: true,
      },
      {
        title: 'Commercial Tire Technician',
        status: true,
      },
      {
        title: 'Commercial Underwriter',
        status: true,
      },
      {
        title: 'Commercial Warehouse Attendant',
        status: true,
      },
      {
        title: 'Commission Analyst',
        status: true,
      },
      {
        title: 'Commissioned Sales Consultant',
        status: true,
      },
      {
        title: 'Commissioning Engineer',
        status: true,
      },
      {
        title: 'Commissioning Manager',
        status: true,
      },
      {
        title: 'Commission Sales Associate',
        status: true,
      },
      {
        title: 'Commissions Analyst',
        status: true,
      },
      {
        title: 'Commissions Processor',
        status: true,
      },
      {
        title: 'Commissions Specialist',
        status: true,
      },
      {
        title: 'Commodity Buyer',
        status: true,
      },
      {
        title: 'Commodity Manager',
        status: true,
      },
      {
        title: 'Commodity Trader',
        status: true,
      },
      {
        title: 'Communicable Disease Monitor',
        status: true,
      },
      {
        title: 'Communication and Social Media Specialist',
        status: true,
      },
      {
        title: 'Communications Advisor',
        status: true,
      },
      {
        title: 'Communications Assistant',
        status: true,
      },
      {
        title: 'Communications Associate',
        status: true,
      },
      {
        title: 'Communications Consultant',
        status: true,
      },
      {
        title: 'Communications Coordinator',
        status: true,
      },
      {
        title: 'Communications Designer',
        status: true,
      },
      {
        title: 'Communications Director',
        status: true,
      },
      {
        title: 'Communications Intern',
        status: true,
      },
      {
        title: 'Communications Lead',
        status: true,
      },
      {
        title: 'Communications Manager',
        status: true,
      },
      {
        title: 'Communications Officer',
        status: true,
      },
      {
        title: 'Communications Specialist',
        status: true,
      },
      {
        title: 'Communications Strategist',
        status: true,
      },
      {
        title: 'Communications Technician',
        status: true,
      },
      {
        title: 'Communication Technician',
        status: true,
      },
      {
        title: 'Communicator',
        status: true,
      },
      {
        title: 'Community Ambassador',
        status: true,
      },
      {
        title: 'Community and Social Services Worker',
        status: true,
      },
      {
        title: 'Community Assistant',
        status: true,
      },
      {
        title: 'Community Associate',
        status: true,
      },
      {
        title: 'Community Association Manager',
        status: true,
      },
      {
        title: 'Community Carer',
        status: true,
      },
      {
        title: 'Community Coordinator',
        status: true,
      },
      {
        title: 'Community Creator Intern',
        status: true,
      },
      {
        title: 'Community Developer',
        status: true,
      },
      {
        title: 'Community Director',
        status: true,
      },
      {
        title: 'Community Disability Worker',
        status: true,
      },
      {
        title: 'Community Energy Advocate',
        status: true,
      },
      {
        title: 'Community Engagement Coordinator',
        status: true,
      },
      {
        title: 'Community Engagement Manager',
        status: true,
      },
      {
        title: 'Community General Manager',
        status: true,
      },
      {
        title: 'Community Health Educator',
        status: true,
      },
      {
        title: 'Community Health Nurse',
        status: true,
      },
      {
        title: 'Community Health Worker',
        status: true,
      },
      {
        title: 'Community Host',
        status: true,
      },
      {
        title: 'Community Integration Specialist',
        status: true,
      },
      {
        title: 'Community Lead',
        status: true,
      },
      {
        title: 'Community Liaison',
        status: true,
      },
      {
        title: 'Community Manager',
        status: true,
      },
      {
        title: 'Community Mental Health Support Worker',
        status: true,
      },
      {
        title: 'Community Mental Health Worker',
        status: true,
      },
      {
        title: 'Community Operations Manager',
        status: true,
      },
      {
        title: 'Community Organizer',
        status: true,
      },
      {
        title: 'Community Outreach Coordinator',
        status: true,
      },
      {
        title: 'Community Outreach Specialist',
        status: true,
      },
      {
        title: 'Community Outreach Worker',
        status: true,
      },
      {
        title: 'Community Planner',
        status: true,
      },
      {
        title: 'Community Relations Coordinator',
        status: true,
      },
      {
        title: 'Community Relations Director',
        status: true,
      },
      {
        title: 'Community Sales Director',
        status: true,
      },
      {
        title: 'Community Sales Manager',
        status: true,
      },
      {
        title: 'Community Service Officer',
        status: true,
      },
      {
        title: 'Community Solar Sales Dealers Needed',
        status: true,
      },
      {
        title: 'Community Support Worker',
        status: true,
      },
      {
        title: 'Community Worker',
        status: true,
      },
      {
        title: 'Companion',
        status: true,
      },
      {
        title: 'Companion Caregiver',
        status: true,
      },
      {
        title: 'Company Driver',
        status: true,
      },
      {
        title: 'Company Secretarial Assistant',
        status: true,
      },
      {
        title: 'Company Secretary',
        status: true,
      },
      {
        title: 'Compensation Advisor',
        status: true,
      },
      {
        title: 'Compensation Analyst',
        status: true,
      },
      {
        title: 'Compensation and Benefits Specialist',
        status: true,
      },
      {
        title: 'Compensation Consultant',
        status: true,
      },
      {
        title: 'Compensation Manager',
        status: true,
      },
      {
        title: 'Compensation Specialist',
        status: true,
      },
      {
        title: 'Compiler Engineer',
        status: true,
      },
      {
        title: 'Complaint Investigator',
        status: true,
      },
      {
        title: 'Complaint Resolution Specialist',
        status: true,
      },
      {
        title: 'Complaints Handler',
        status: true,
      },
      {
        title: 'Complex Claims Examiner',
        status: true,
      },
      {
        title: 'Compliance Administrator',
        status: true,
      },
      {
        title: 'Compliance Analyst',
        status: true,
      },
      {
        title: 'Compliance and Operational Risk Manager',
        status: true,
      },
      {
        title: 'Compliance Assistant',
        status: true,
      },
      {
        title: 'Compliance Associate',
        status: true,
      },
      {
        title: 'Compliance Auditor',
        status: true,
      },
      {
        title: 'Compliance Business Developer',
        status: true,
      },
      {
        title: 'Compliance Business Oversight Analyst',
        status: true,
      },
      {
        title: 'Compliance Consultant',
        status: true,
      },
      {
        title: 'Compliance Coordinator',
        status: true,
      },
      {
        title: 'Compliance Director',
        status: true,
      },
      {
        title: 'Compliance Engineer',
        status: true,
      },
      {
        title: 'Compliance Manager',
        status: true,
      },
      {
        title: 'Compliance Officer',
        status: true,
      },
      {
        title: 'Compliance Product Owner',
        status: true,
      },
      {
        title: 'Compliance Program Manager',
        status: true,
      },
      {
        title: 'Compliance Specialist',
        status: true,
      },
      {
        title: 'Component Engineer',
        status: true,
      },
      {
        title: 'Composite Technician',
        status: true,
      },
      {
        title: 'Compositing Supervisor',
        status: true,
      },
      {
        title: 'Compositor',
        status: true,
      },
      {
        title: 'Compounder',
        status: true,
      },
      {
        title: 'Compounding Associate',
        status: true,
      },
      {
        title: 'Computational Biologist',
        status: true,
      },
      {
        title: 'Computational Linguist',
        status: true,
      },
      {
        title: 'Compute Performance Developer Technology Engineer',
        status: true,
      },
      {
        title: 'Computer Analyst',
        status: true,
      },
      {
        title: 'Computer Assembler',
        status: true,
      },
      {
        title: 'Computer Builds Technician',
        status: true,
      },
      {
        title: 'Computer Engineer',
        status: true,
      },
      {
        title: 'Computer Hardware Engineer',
        status: true,
      },
      {
        title: 'Computer Maintenance Technician',
        status: true,
      },
      {
        title: 'Computer Network Defense and Incident Response Analyst',
        status: true,
      },
      {
        title: 'Computer Network Technician',
        status: true,
      },
      {
        title: 'Computer Operator',
        status: true,
      },
      {
        title: 'Computer Programmer',
        status: true,
      },
      {
        title: 'Computer Repair Technician',
        status: true,
      },
      {
        title: 'Computer Science Teacher',
        status: true,
      },
      {
        title: 'Computer Science Tutor',
        status: true,
      },
      {
        title: 'Computer Scientist',
        status: true,
      },
      {
        title: 'Computer Scientist C++',
        status: true,
      },
      {
        title: 'Computer Support Specialist',
        status: true,
      },
      {
        title: 'Computer Systems Analyst',
        status: true,
      },
      {
        title: 'Computer Teacher',
        status: true,
      },
      {
        title: 'Computer Technician',
        status: true,
      },
      {
        title: 'Computer Vision Engineer',
        status: true,
      },
      {
        title: 'Computer Vision Researcher',
        status: true,
      },
      {
        title: 'Computing Solutions Advisor',
        status: true,
      },
      {
        title: 'Concept Artist',
        status: true,
      },
      {
        title: 'Concierge',
        status: true,
      },
      {
        title: 'Concierge and Errand Running Professional',
        status: true,
      },
      {
        title: 'Concierge Security Analyst',
        status: true,
      },
      {
        title: 'Concierge Security Engineer',
        status: true,
      },
      {
        title: 'Concierge Security Guard',
        status: true,
      },
      {
        title: 'Concierge Supervisor',
        status: true,
      },
      {
        title: 'Concrete Cutter',
        status: true,
      },
      {
        title: 'Concrete Estimator',
        status: true,
      },
      {
        title: 'Concrete Finisher',
        status: true,
      },
      {
        title: 'Concrete Foreman',
        status: true,
      },
      {
        title: 'Concrete Labourer',
        status: true,
      },
      {
        title: 'Concrete Mixer Driver',
        status: true,
      },
      {
        title: 'Concrete Polishing Foreman',
        status: true,
      },
      {
        title: 'Concrete Pump Operator',
        status: true,
      },
      {
        title: 'Concrete Superintendent',
        status: true,
      },
      {
        title: 'Concrete Truck Driver',
        status: true,
      },
      {
        title: 'Concrete Worker',
        status: true,
      },
      {
        title: 'Condominium Administrator',
        status: true,
      },
      {
        title: 'Condominium Manager',
        status: true,
      },
      {
        title: 'Condominium Property Manager',
        status: true,
      },
      {
        title: 'Conductor',
        status: true,
      },
      {
        title: 'Conference Coordinator',
        status: true,
      },
      {
        title: 'Conference Services Manager',
        status: true,
      },
      {
        title: 'Configuration Analyst',
        status: true,
      },
      {
        title: 'Configuration Engineer',
        status: true,
      },
      {
        title: 'Configuration Management Coordinator',
        status: true,
      },
      {
        title: 'Configuration Management Engineer',
        status: true,
      },
      {
        title: 'Configuration Manager',
        status: true,
      },
      {
        title: 'Configurations Tech Level',
        status: true,
      },
      {
        title: 'Configuration Technician',
        status: true,
      },
      {
        title: 'Connectivity Manager',
        status: true,
      },
      {
        title: 'Conservationist',
        status: true,
      },
      {
        title: 'Conservation Officer',
        status: true,
      },
      {
        title: 'Conservator',
        status: true,
      },
      {
        title: 'Console Operator',
        status: true,
      },
      {
        title: 'Constable',
        status: true,
      },
      {
        title: 'Construction Accountant',
        status: true,
      },
      {
        title: 'Construction Admin',
        status: true,
      },
      {
        title: 'Construction Administrative Assistant',
        status: true,
      },
      {
        title: 'Construction Administrator',
        status: true,
      },
      {
        title: 'Construction Analyst',
        status: true,
      },
      {
        title: 'Construction Apprentice',
        status: true,
      },
      {
        title: 'Construction Assistant',
        status: true,
      },
      {
        title: 'Construction Business Analyst',
        status: true,
      },
      {
        title: 'Construction Business Developer',
        status: true,
      },
      {
        title: 'Construction Carpenter',
        status: true,
      },
      {
        title: 'Construction Consultant',
        status: true,
      },
      {
        title: 'Construction Coordinator',
        status: true,
      },
      {
        title: 'Construction Crew Member',
        status: true,
      },
      {
        title: 'Construction Customer Service Manager',
        status: true,
      },
      {
        title: 'Construction Defect Claims Adjuster',
        status: true,
      },
      {
        title: 'Construction Director',
        status: true,
      },
      {
        title: 'Construction Driver',
        status: true,
      },
      {
        title: 'Construction Engineer',
        status: true,
      },
      {
        title: 'Construction Estimator',
        status: true,
      },
      {
        title: 'Construction Field Engineer',
        status: true,
      },
      {
        title: 'Construction Flagger',
        status: true,
      },
      {
        title: 'Construction Foreman',
        status: true,
      },
      {
        title: 'Construction General Labourer',
        status: true,
      },
      {
        title: 'Construction General Manager',
        status: true,
      },
      {
        title: 'Construction Handyman',
        status: true,
      },
      {
        title: 'Construction Helper',
        status: true,
      },
      {
        title: 'Construction Inspector',
        status: true,
      },
      {
        title: 'Construction Intern',
        status: true,
      },
      {
        title: 'Construction Labor',
        status: true,
      },
      {
        title: 'Construction Laborer',
        status: true,
      },
      {
        title: 'Construction Labourer',
        status: true,
      },
      {
        title: 'Construction Labourer and Helper',
        status: true,
      },
      {
        title: 'Construction Lead Hand',
        status: true,
      },
      {
        title: 'Construction Manager',
        status: true,
      },
      {
        title: 'Construction Painter',
        status: true,
      },
      {
        title: 'Construction Painters Supervisor',
        status: true,
      },
      {
        title: 'Construction Project Administrator',
        status: true,
      },
      {
        title: 'Construction Project Coordinator',
        status: true,
      },
      {
        title: 'Construction Project Engineer',
        status: true,
      },
      {
        title: 'Construction Project Manager',
        status: true,
      },
      {
        title: 'Construction Safety Engineer',
        status: true,
      },
      {
        title: 'Construction Safety Officer',
        status: true,
      },
      {
        title: 'Construction Scheduler',
        status: true,
      },
      {
        title: 'Construction Site Superintendent',
        status: true,
      },
      {
        title: 'Construction Site Supervisor',
        status: true,
      },
      {
        title: 'Construction Superintendent',
        status: true,
      },
      {
        title: 'Construction Supervisor',
        status: true,
      },
      {
        title: 'Construction Surveyor',
        status: true,
      },
      {
        title: 'Construction Technician',
        status: true,
      },
      {
        title: 'Construction Underwriter',
        status: true,
      },
      {
        title: 'Construction Worker',
        status: true,
      },
      {
        title: 'Consulting Analyst',
        status: true,
      },
      {
        title: 'Consulting Architect',
        status: true,
      },
      {
        title: 'Consulting Engineer',
        status: true,
      },
      {
        title: 'Consulting Engineer.Customer Delivery',
        status: true,
      },
      {
        title: 'Consulting Manager',
        status: true,
      },
      {
        title: 'Consumables Health & Wellness Sales Floor Associate',
        status: true,
      },
      {
        title: 'Consumer Collections Specialist',
        status: true,
      },
      {
        title: 'Consumer Financial Sales Representative',
        status: true,
      },
      {
        title: 'Consumer Insights Analyst',
        status: true,
      },
      {
        title: 'Consumer Insights Manager',
        status: true,
      },
      {
        title: 'Consumer Loan Underwriter',
        status: true,
      },
      {
        title: 'Consumer Loyalty Representative',
        status: true,
      },
      {
        title: 'Consumer Underwriter',
        status: true,
      },
      {
        title: 'Contact Center Agent',
        status: true,
      },
      {
        title: 'Contact Center Manager',
        status: true,
      },
      {
        title: 'Contact Center Representative',
        status: true,
      },
      {
        title: 'Contact Center Specialist',
        status: true,
      },
      {
        title: 'Contact Center Supervisor',
        status: true,
      },
      {
        title: 'Contact Center Team Leader',
        status: true,
      },
      {
        title: 'Contact Centre Agent',
        status: true,
      },
      {
        title: 'Contact Centre Representative',
        status: true,
      },
      {
        title: 'Contact Tracer',
        status: true,
      },
      {
        title: 'Contact Tracing',
        status: true,
      },
      {
        title: 'Container Unloader',
        status: true,
      },
      {
        title: 'Content Analyst',
        status: true,
      },
      {
        title: 'Content Compliance Analyst',
        status: true,
      },
      {
        title: 'Content Coordinator',
        status: true,
      },
      {
        title: 'Content Copywriter',
        status: true,
      },
      {
        title: 'Content Creator',
        status: true,
      },
      {
        title: 'Content Creator and Community Manager',
        status: true,
      },
      {
        title: 'Content Curator',
        status: true,
      },
      {
        title: 'Content Designer',
        status: true,
      },
      {
        title: 'Content Developer',
        status: true,
      },
      {
        title: 'Content Development Specialist',
        status: true,
      },
      {
        title: 'Content Editor',
        status: true,
      },
      {
        title: 'Content Executive',
        status: true,
      },
      {
        title: 'Content Formatter',
        status: true,
      },
      {
        title: 'Content Integration Advisor',
        status: true,
      },
      {
        title: 'Content Manager',
        status: true,
      },
      {
        title: 'Content Marketer',
        status: true,
      },
      {
        title: 'Content Marketing Associate',
        status: true,
      },
      {
        title: 'Content Marketing Coordinator',
        status: true,
      },
      {
        title: 'Content Marketing Executive',
        status: true,
      },
      {
        title: 'Content Marketing Intern',
        status: true,
      },
      {
        title: 'Content Marketing Lead',
        status: true,
      },
      {
        title: 'Content Marketing Manager',
        status: true,
      },
      {
        title: 'Content Marketing Specialist',
        status: true,
      },
      {
        title: 'Content Operations Manager',
        status: true,
      },
      {
        title: 'Content Partner Account Representative',
        status: true,
      },
      {
        title: 'Content Producer',
        status: true,
      },
      {
        title: 'Content Research Specialist',
        status: true,
      },
      {
        title: 'Content Reviewer',
        status: true,
      },
      {
        title: 'Content & Social Media Specialist',
        status: true,
      },
      {
        title: 'Content Specialist',
        status: true,
      },
      {
        title: 'Content Strategist',
        status: true,
      },
      {
        title: 'Content Writer',
        status: true,
      },
      {
        title: 'Content Writer Intern',
        status: true,
      },
      {
        title: 'Continuing Care Assistant',
        status: true,
      },
      {
        title: 'Continuing Care Coordinator',
        status: true,
      },
      {
        title: 'Continuous Improvement Change Leader',
        status: true,
      },
      {
        title: 'Continuous Improvement Engineer',
        status: true,
      },
      {
        title: 'Continuous Improvement Lead',
        status: true,
      },
      {
        title: 'Continuous Improvement Leader',
        status: true,
      },
      {
        title: 'Continuous Improvement Manager',
        status: true,
      },
      {
        title: 'Continuous Improvement Specialist',
        status: true,
      },
      {
        title: 'Continuous Integration Developer',
        status: true,
      },
      {
        title: 'Contract Administrator',
        status: true,
      },
      {
        title: 'Contract Analyst',
        status: true,
      },
      {
        title: 'Contract Attorney',
        status: true,
      },
      {
        title: 'Contract Coordinator',
        status: true,
      },
      {
        title: 'Contract Designer',
        status: true,
      },
      {
        title: 'Contract Driver',
        status: true,
      },
      {
        title: 'Contracted Care Assistant',
        status: true,
      },
      {
        title: 'Contract Instructor',
        status: true,
      },
      {
        title: 'Contract Management Specialist',
        status: true,
      },
      {
        title: 'Contract Manager',
        status: true,
      },
      {
        title: 'Contract Negotiator',
        status: true,
      },
      {
        title: 'Contractor',
        status: true,
      },
      {
        title: 'Contract Recruiter',
        status: true,
      },
      {
        title: 'Contract Review Lawyer',
        status: true,
      },
      {
        title: 'Contracts Administrator',
        status: true,
      },
      {
        title: 'Contract Sales Representative',
        status: true,
      },
      {
        title: 'Contracts Analyst',
        status: true,
      },
      {
        title: 'Contracts and Procurement Specialist',
        status: true,
      },
      {
        title: 'Contracts Coordinator',
        status: true,
      },
      {
        title: 'Contracts Manager',
        status: true,
      },
      {
        title: 'Contract Specialist',
        status: true,
      },
      {
        title: 'Contracts & Procurement Specialist',
        status: true,
      },
      {
        title: 'Contracts Specialist',
        status: true,
      },
      {
        title: 'Contract Technical Recruiter',
        status: true,
      },
      {
        title: 'Contract Therapist',
        status: true,
      },
      {
        title: 'Control and Automation Engineer',
        status: true,
      },
      {
        title: 'Control Engineer',
        status: true,
      },
      {
        title: 'Controller',
        status: true,
      },
      {
        title: 'Control Room Operator',
        status: true,
      },
      {
        title: 'Controls Design Engineer',
        status: true,
      },
      {
        title: 'Controls Designer',
        status: true,
      },
      {
        title: 'Controls Engineer',
        status: true,
      },
      {
        title: 'Controls Specialist',
        status: true,
      },
      {
        title: 'Controls Technician',
        status: true,
      },
      {
        title: 'Control System Lead',
        status: true,
      },
      {
        title: 'Control Systems Engineer',
        status: true,
      },
      {
        title: 'Control Systems Lead',
        status: true,
      },
      {
        title: 'Control Systems Specialist',
        status: true,
      },
      {
        title: 'Control Systems Tech',
        status: true,
      },
      {
        title: 'Control Systems Technician',
        status: true,
      },
      {
        title: 'Conventional Loan Underwriter',
        status: true,
      },
      {
        title: 'Conversational AI Optimization Specialist',
        status: true,
      },
      {
        title: 'Conversion Optimization Manager',
        status: true,
      },
      {
        title: 'Conversion Rate Optimization Manager',
        status: true,
      },
      {
        title: 'Converting Operator',
        status: true,
      },
      {
        title: 'Conveyancer',
        status: true,
      },
      {
        title: 'Conveyor Maintenance Technician',
        status: true,
      },
      {
        title: 'Cook',
        status: true,
      },
      {
        title: 'Co Op Engineer',
        status: true,
      },
      {
        title: 'Cop',
        status: true,
      },
      {
        title: 'Copier Technician',
        status: true,
      },
      {
        title: 'Copy Editor',
        status: true,
      },
      {
        title: 'Copy Writer',
        status: true,
      },
      {
        title: 'Copywriter',
        status: true,
      },
      {
        title: 'Core Agent',
        status: true,
      },
      {
        title: 'Core Data Engineer',
        status: true,
      },
      {
        title: 'Core Java Developer',
        status: true,
      },
      {
        title: 'Coroner',
        status: true,
      },
      {
        title: 'Corporate Accountant',
        status: true,
      },
      {
        title: 'Corporate Account Executive',
        status: true,
      },
      {
        title: 'Corporate Accounting Analyst',
        status: true,
      },
      {
        title: 'Corporate Accounting Manager',
        status: true,
      },
      {
        title: 'Corporate Account Manager',
        status: true,
      },
      {
        title: 'Corporate Attorney',
        status: true,
      },
      {
        title: 'Corporate Business Development Head',
        status: true,
      },
      {
        title: 'Corporate Communications Manager',
        status: true,
      },
      {
        title: 'Corporate Communications Specialist',
        status: true,
      },
      {
        title: 'Corporate Controller',
        status: true,
      },
      {
        title: 'Corporate Counsel',
        status: true,
      },
      {
        title: 'Corporate Development Analyst',
        status: true,
      },
      {
        title: 'Corporate Development Associate',
        status: true,
      },
      {
        title: 'Corporate Development Director',
        status: true,
      },
      {
        title: 'Corporate Development Manager',
        status: true,
      },
      {
        title: 'Corporate Event Planner',
        status: true,
      },
      {
        title: 'Corporate Finance Manager',
        status: true,
      },
      {
        title: 'Corporate Financial Analyst',
        status: true,
      },
      {
        title: 'Corporate Housing Specialist',
        status: true,
      },
      {
        title: 'Corporate Law Clerk',
        status: true,
      },
      {
        title: 'Corporate Lawyer',
        status: true,
      },
      {
        title: 'Corporate Legal Assistant',
        status: true,
      },
      {
        title: 'Corporate Marketing Manager',
        status: true,
      },
      {
        title: 'Corporate Paralegal',
        status: true,
      },
      {
        title: 'Corporate Pilot',
        status: true,
      },
      {
        title: 'Corporate Receptionist',
        status: true,
      },
      {
        title: 'Corporate Recruiter',
        status: true,
      },
      {
        title: 'Corporate Sales Development Representative',
        status: true,
      },
      {
        title: 'Corporate Sales Manager',
        status: true,
      },
      {
        title: 'Corporate Secretary',
        status: true,
      },
      {
        title: 'Corporate Security Manager',
        status: true,
      },
      {
        title: 'Corporate Solutions Internship',
        status: true,
      },
      {
        title: 'Corporate Strategy Analyst',
        status: true,
      },
      {
        title: 'Corporate Strategy Associate',
        status: true,
      },
      {
        title: 'Corporate Strategy Manager',
        status: true,
      },
      {
        title: 'Corporate Tax',
        status: true,
      },
      {
        title: 'Corporate Tax Associate Director',
        status: true,
      },
      {
        title: 'Corporate Tax Director',
        status: true,
      },
      {
        title: 'Corporate Tax Manager',
        status: true,
      },
      {
        title: 'Corporate Trainer',
        status: true,
      },
      {
        title: 'Corporate Travel Agent',
        status: true,
      },
      {
        title: 'Corporate Travel Consultant',
        status: true,
      },
      {
        title: 'Correctional Officer',
        status: true,
      },
      {
        title: 'Correction Officer',
        status: true,
      },
      {
        title: 'Correspondant Technique Electronique',
        status: true,
      },
      {
        title: 'Corrosion Engineer',
        status: true,
      },
      {
        title: 'Corrosion Technician',
        status: true,
      },
      {
        title: 'Cosmetic Business Manager',
        status: true,
      },
      {
        title: 'Cosmetician',
        status: true,
      },
      {
        title: 'Cosmetician FT',
        status: true,
      },
      {
        title: 'Cosmetician PT',
        status: true,
      },
      {
        title: 'Cosmetic Injector',
        status: true,
      },
      {
        title: 'Cosmetic Merchandiser',
        status: true,
      },
      {
        title: 'Cosmetic Merchandisers',
        status: true,
      },
      {
        title: 'Cosmetic Nurse Injector',
        status: true,
      },
      {
        title: 'Cosmetics Manager',
        status: true,
      },
      {
        title: 'Cosmetics Merchandiser',
        status: true,
      },
      {
        title: 'Cosmetologist',
        status: true,
      },
      {
        title: 'Cosmetology Educator',
        status: true,
      },
      {
        title: 'Cosmetology Instructor',
        status: true,
      },
      {
        title: 'Cosmetology Teacher',
        status: true,
      },
      {
        title: 'Cost Accountant',
        status: true,
      },
      {
        title: 'Cost Accounting Analyst',
        status: true,
      },
      {
        title: 'Cost Accounting Manager',
        status: true,
      },
      {
        title: 'Cost Analyst',
        status: true,
      },
      {
        title: 'Cost Consultant',
        status: true,
      },
      {
        title: 'Cost Controller',
        status: true,
      },
      {
        title: 'Cost Engineer',
        status: true,
      },
      {
        title: 'Cost Estimating Analyst',
        status: true,
      },
      {
        title: 'Cost Estimator',
        status: true,
      },
      {
        title: 'Cost Manager',
        status: true,
      },
      {
        title: 'Costume Designer',
        status: true,
      },
      {
        title: 'Counseling Psychologist',
        status: true,
      },
      {
        title: 'Counselor',
        status: true,
      },
      {
        title: 'Counselor Assistant',
        status: true,
      },
      {
        title: 'Counterbalance Forklift Operator',
        status: true,
      },
      {
        title: 'Counterbalance Operator',
        status: true,
      },
      {
        title: 'Counter Manager',
        status: true,
      },
      {
        title: 'Counter Pro',
        status: true,
      },
      {
        title: 'Counter Sales',
        status: true,
      },
      {
        title: 'Counter Sales Associate',
        status: true,
      },
      {
        title: 'Counter Sales Person',
        status: true,
      },
      {
        title: 'Counter Salesperson',
        status: true,
      },
      {
        title: 'Counter Sales Representative',
        status: true,
      },
      {
        title: 'Country Brand Lead',
        status: true,
      },
      {
        title: 'Country Brand Manager',
        status: true,
      },
      {
        title: 'Country Manager',
        status: true,
      },
      {
        title: 'Courier',
        status: true,
      },
      {
        title: 'Courier Deliveroo',
        status: true,
      },
      {
        title: 'Courier Driver',
        status: true,
      },
      {
        title: 'Courier Operations Analyst',
        status: true,
      },
      {
        title: 'Courier Success Specialist',
        status: true,
      },
      {
        title: 'Courseware Developer',
        status: true,
      },
      {
        title: 'Court Administrator',
        status: true,
      },
      {
        title: 'Court Clerk',
        status: true,
      },
      {
        title: 'Courtesy Clerk',
        status: true,
      },
      {
        title: 'Courtesy Desk Associate',
        status: true,
      },
      {
        title: 'Court Interpreter',
        status: true,
      },
      {
        title: 'Court Officer',
        status: true,
      },
      {
        title: 'Court Reporter',
        status: true,
      },
      {
        title: 'Court Security Officer',
        status: true,
      },
      {
        title: 'Cover Cleaner',
        status: true,
      },
      {
        title: 'Cover Supervisor',
        status: true,
      },
      {
        title: 'Covid 19 Case Investigator',
        status: true,
      },
      {
        title: 'Cowboy',
        status: true,
      },
      {
        title: 'Coworking Center Manager',
        status: true,
      },
      {
        title: 'Coworking Community Manager',
        status: true,
      },
      {
        title: 'CPA',
        status: true,
      },
      {
        title: 'Cpap Consultant',
        status: true,
      },
      {
        title: 'Cpc Digital Print Expert',
        status: true,
      },
      {
        title: 'Cpfr Analyst',
        status: true,
      },
      {
        title: 'CPR Instructor',
        status: true,
      },
      {
        title: 'Cpu Verification Engineer',
        status: true,
      },
      {
        title: 'Craftsman',
        status: true,
      },
      {
        title: 'Craft Technician',
        status: true,
      },
      {
        title: 'Crane Operator',
        status: true,
      },
      {
        title: 'Creative Assistant',
        status: true,
      },
      {
        title: 'Creative Content Writer',
        status: true,
      },
      {
        title: 'Creative Coordinator',
        status: true,
      },
      {
        title: 'Creative Copywriter',
        status: true,
      },
      {
        title: 'Creative Designer',
        status: true,
      },
      {
        title: 'Creative Developer',
        status: true,
      },
      {
        title: 'Creative Director',
        status: true,
      },
      {
        title: 'Creative Lab Technician',
        status: true,
      },
      {
        title: 'Creative Lead',
        status: true,
      },
      {
        title: 'Creative Manager',
        status: true,
      },
      {
        title: 'Creative Marketing Manager',
        status: true,
      },
      {
        title: 'Creative Producer',
        status: true,
      },
      {
        title: 'Creative Project Manager',
        status: true,
      },
      {
        title: 'Creative Services Intern',
        status: true,
      },
      {
        title: 'Creative Services Manager',
        status: true,
      },
      {
        title: 'Creative Strategist',
        status: true,
      },
      {
        title: 'Creative Technologist',
        status: true,
      },
      {
        title: 'Creative Writer',
        status: true,
      },
      {
        title: 'Creative Writing Professor',
        status: true,
      },
      {
        title: 'Creature Supervisor',
        status: true,
      },
      {
        title: 'Creature TD',
        status: true,
      },
      {
        title: 'Creb Underwriter',
        status: true,
      },
      {
        title: 'Credentialed Tax Advisor',
        status: true,
      },
      {
        title: 'Credentialed Tax Expert',
        status: true,
      },
      {
        title: 'Credentialed Veterinary Technician',
        status: true,
      },
      {
        title: 'Credentialed Vet Tech',
        status: true,
      },
      {
        title: 'Credentialed Virtual Tax Professional',
        status: true,
      },
      {
        title: 'Credentialing Coordinator',
        status: true,
      },
      {
        title: 'Credentialing Specialist',
        status: true,
      },
      {
        title: 'Credit Administrator',
        status: true,
      },
      {
        title: 'Credit Analyst',
        status: true,
      },
      {
        title: 'Credit and Collections Analyst',
        status: true,
      },
      {
        title: 'Credit and Collections Clerk',
        status: true,
      },
      {
        title: 'Credit and Collections Manager',
        status: true,
      },
      {
        title: 'Credit and Collections Specialist',
        status: true,
      },
      {
        title: 'Credit Assistance Specialist',
        status: true,
      },
      {
        title: 'Credit Associate',
        status: true,
      },
      {
        title: 'Credit Clerk',
        status: true,
      },
      {
        title: 'Credit & Collection Analyst',
        status: true,
      },
      {
        title: 'Credit & Collections Analyst',
        status: true,
      },
      {
        title: 'Credit & Collections Manager',
        status: true,
      },
      {
        title: 'Credit Collections Specialist',
        status: true,
      },
      {
        title: 'Credit Controller',
        status: true,
      },
      {
        title: 'Credit Counsellor',
        status: true,
      },
      {
        title: 'Credit Counselor',
        status: true,
      },
      {
        title: 'Credit Manager',
        status: true,
      },
      {
        title: 'Credit Officer',
        status: true,
      },
      {
        title: 'Credit Risk Analyst',
        status: true,
      },
      {
        title: 'Credit Risk Manager',
        status: true,
      },
      {
        title: 'Credit Risk Specialist',
        status: true,
      },
      {
        title: 'Credit Specialist',
        status: true,
      },
      {
        title: 'Credit Underwriter',
        status: true,
      },
      {
        title: 'Crematory Operator',
        status: true,
      },
      {
        title: 'Crew Chief',
        status: true,
      },
      {
        title: 'Crew Lead',
        status: true,
      },
      {
        title: 'Crew Leader',
        status: true,
      },
      {
        title: 'Crew Manager',
        status: true,
      },
      {
        title: 'Crew Member',
        status: true,
      },
      {
        title: 'Crew Scheduler',
        status: true,
      },
      {
        title: 'Crew Team Member',
        status: true,
      },
      {
        title: 'Crime Analyst',
        status: true,
      },
      {
        title: 'Crime Scene Investigator',
        status: true,
      },
      {
        title: 'Crime Scene Technician',
        status: true,
      },
      {
        title: 'Criminal Intelligence Analyst',
        status: true,
      },
      {
        title: 'Criminal Investigator',
        status: true,
      },
      {
        title: 'Criminalist',
        status: true,
      },
      {
        title: 'Criminal Justice Instructor',
        status: true,
      },
      {
        title: 'Criminal Justice Professor',
        status: true,
      },
      {
        title: 'Crisis Counselor',
        status: true,
      },
      {
        title: 'Crisis Program Coordinator',
        status: true,
      },
      {
        title: 'Critical Care Nurse',
        status: true,
      },
      {
        title: 'Critical Facilities Technician',
        status: true,
      },
      {
        title: 'Critical Incident Manager',
        status: true,
      },
      {
        title: 'Criticalist',
        status: true,
      },
      {
        title: 'CRM Administrator',
        status: true,
      },
      {
        title: 'CRM Analyst',
        status: true,
      },
      {
        title: 'CRM Associate',
        status: true,
      },
      {
        title: 'CRM Copywriter',
        status: true,
      },
      {
        title: 'CRM Developer',
        status: true,
      },
      {
        title: 'CRM Director',
        status: true,
      },
      {
        title: 'CRM Executive',
        status: true,
      },
      {
        title: 'CRM Manager',
        status: true,
      },
      {
        title: 'CRM Marketing Manager',
        status: true,
      },
      {
        title: 'CRM Project Manager',
        status: true,
      },
      {
        title: 'CRM Specialist',
        status: true,
      },
      {
        title: 'CRM Strategist',
        status: true,
      },
      {
        title: 'CRNA',
        status: true,
      },
      {
        title: 'Crossing Guard',
        status: true,
      },
      {
        title: 'Cross Lob Performance Analyst',
        status: true,
      },
      {
        title: 'Cscs Labourer',
        status: true,
      },
      {
        title: 'C# Software Developer',
        status: true,
      },
      {
        title: 'C++ Software Developer',
        status: true,
      },
      {
        title: 'C# Software Engineer',
        status: true,
      },
      {
        title: 'C++ Software Engineer',
        status: true,
      },
      {
        title: 'CSR',
        status: true,
      },
      {
        title: 'CSR Inbound',
        status: true,
      },
      {
        title: 'CTO',
        status: true,
      },
      {
        title: 'CT Technologist',
        status: true,
      },
      {
        title: 'Culinary Instructor',
        status: true,
      },
      {
        title: 'Culinary Supervisor',
        status: true,
      },
      {
        title: 'Cultivation Technician',
        status: true,
      },
      {
        title: 'Cultivator',
        status: true,
      },
      {
        title: 'Curam Developer',
        status: true,
      },
      {
        title: 'Curator',
        status: true,
      },
      {
        title: 'Curatorial Assistant',
        status: true,
      },
      {
        title: 'Curriculum Coordinator',
        status: true,
      },
      {
        title: 'Curriculum Designer',
        status: true,
      },
      {
        title: 'Curriculum Developer',
        status: true,
      },
      {
        title: 'Curriculum Director',
        status: true,
      },
      {
        title: 'Curriculum Specialist',
        status: true,
      },
      {
        title: 'Curriculum Writer',
        status: true,
      },
      {
        title: 'Custodial Supervisor',
        status: true,
      },
      {
        title: 'Custodial Worker',
        status: true,
      },
      {
        title: 'Custodian',
        status: true,
      },
      {
        title: 'Custodian Worker',
        status: true,
      },
      {
        title: 'Customer Account Coordinator',
        status: true,
      },
      {
        title: 'Customer Account Manager',
        status: true,
      },
      {
        title: 'Customer Account Representative',
        status: true,
      },
      {
        title: 'Customer Account Specialist',
        status: true,
      },
      {
        title: 'Customer Advisor',
        status: true,
      },
      {
        title: 'Customer Advocacy Manager',
        status: true,
      },
      {
        title: 'Customer Advocate',
        status: true,
      },
      {
        title: 'Customer Analyst',
        status: true,
      },
      {
        title: 'Customer Application Analyst',
        status: true,
      },
      {
        title: 'Customer Application Engineer',
        status: true,
      },
      {
        title: 'Customer Applications Engineer',
        status: true,
      },
      {
        title: 'Customer Arrears Support',
        status: true,
      },
      {
        title: 'Customer Arrears Support Advisor',
        status: true,
      },
      {
        title: 'Customer Assistant',
        status: true,
      },
      {
        title: 'Customer Business Lead',
        status: true,
      },
      {
        title: 'Customer Care Administrator',
        status: true,
      },
      {
        title: 'Customer Care Advisor',
        status: true,
      },
      {
        title: 'Customer Care Agent',
        status: true,
      },
      {
        title: 'Customer Care Analyst',
        status: true,
      },
      {
        title: 'Customer Care Associate',
        status: true,
      },
      {
        title: 'Customer Care Call Center',
        status: true,
      },
      {
        title: 'Customer Care Centre Associate',
        status: true,
      },
      {
        title: 'Customer Care Coordinator',
        status: true,
      },
      {
        title: 'Customer Care Lead',
        status: true,
      },
      {
        title: 'Customer Care Manager',
        status: true,
      },
      {
        title: 'Customer Care Outfitter',
        status: true,
      },
      {
        title: 'Customer Care Representative',
        status: true,
      },
      {
        title: 'Customer Care Specialist',
        status: true,
      },
      {
        title: 'Customer Care Supervisor',
        status: true,
      },
      {
        title: 'Customer Care Team Leader',
        status: true,
      },
      {
        title: 'Customer Care Vendor Manager',
        status: true,
      },
      {
        title: 'Customer Category Manager',
        status: true,
      },
      {
        title: 'Customer Champion',
        status: true,
      },
      {
        title: 'Customer Collaboration Analyst',
        status: true,
      },
      {
        title: 'Customer Consultant',
        status: true,
      },
      {
        title: 'Customer Delivery Manager',
        status: true,
      },
      {
        title: 'Customer Development Executive',
        status: true,
      },
      {
        title: 'Customer Development Manager',
        status: true,
      },
      {
        title: 'Customer Disputes Advisor',
        status: true,
      },
      {
        title: 'Customer Enablement Consultant',
        status: true,
      },
      {
        title: 'Customer Engagement Manager',
        status: true,
      },
      {
        title: 'Customer Engagement Representative',
        status: true,
      },
      {
        title: 'Customer Engagement Specialist',
        status: true,
      },
      {
        title: 'Customer Engineer',
        status: true,
      },
      {
        title: 'Customer Experience Advisor',
        status: true,
      },
      {
        title: 'Customer Experience Advocate',
        status: true,
      },
      {
        title: 'Customer Experience Agent',
        status: true,
      },
      {
        title: 'Customer Experience Analyst',
        status: true,
      },
      {
        title: 'Customer Experience and Sales Specialist',
        status: true,
      },
      {
        title: 'Customer Experience Associate',
        status: true,
      },
      {
        title: 'Customer Experience Coor',
        status: true,
      },
      {
        title: 'Customer Experience Coordinator',
        status: true,
      },
      {
        title: 'Customer Experience Executive',
        status: true,
      },
      {
        title: 'Customer Experience Inbound Representative',
        status: true,
      },
      {
        title: 'Customer Experience Lead',
        status: true,
      },
      {
        title: 'Customer Experience Manager',
        status: true,
      },
      {
        title: 'Customer Experience Representative',
        status: true,
      },
      {
        title: 'Customer Experience Salesfloor Associate',
        status: true,
      },
      {
        title: 'Customer Experience Specialist',
        status: true,
      },
      {
        title: 'Customer Experience Supervisor',
        status: true,
      },
      {
        title: 'Customer Experience Team Lead',
        status: true,
      },
      {
        title: 'Customer Fulfillment Associate',
        status: true,
      },
      {
        title: 'Customer Insights Analyst',
        status: true,
      },
      {
        title: 'Customer Insights Manager',
        status: true,
      },
      {
        title: 'Customer Insights Specialist',
        status: true,
      },
      {
        title: 'Customer Marketing Manager',
        status: true,
      },
      {
        title: 'Customer Marketing Specialist',
        status: true,
      },
      {
        title: 'Customer Master Data Specialist',
        status: true,
      },
      {
        title: 'Customer Onboarding Manager',
        status: true,
      },
      {
        title: 'Customer Onboarding Specialist',
        status: true,
      },
      {
        title: 'Customer Operations Analyst',
        status: true,
      },
      {
        title: 'Customer Operations Engineer',
        status: true,
      },
      {
        title: 'Customer Operations Manager',
        status: true,
      },
      {
        title: 'Customer Operations Specialist',
        status: true,
      },
      {
        title: 'Customer Program Manager',
        status: true,
      },
      {
        title: 'Customer Project Manager',
        status: true,
      },
      {
        title: 'Customer Relations Associate',
        status: true,
      },
      {
        title: 'Customer Relations Coordinator',
        status: true,
      },
      {
        title: 'Customer Relations Executive',
        status: true,
      },
      {
        title: 'Customer Relationship Executive',
        status: true,
      },
      {
        title: 'Customer Relationship Manager',
        status: true,
      },
      {
        title: 'Customer Relationship Specialist',
        status: true,
      },
      {
        title: 'Customer Relations Manager',
        status: true,
      },
      {
        title: 'Customer Relations Outfitter',
        status: true,
      },
      {
        title: 'Customer Relations Representative',
        status: true,
      },
      {
        title: 'Customer Relations Specialist',
        status: true,
      },
      {
        title: 'Customer Representative',
        status: true,
      },
      {
        title: 'Customer Retention Agent',
        status: true,
      },
      {
        title: 'Customer Retention Specialist',
        status: true,
      },
      {
        title: 'Customer Sales Analyst',
        status: true,
      },
      {
        title: 'Customer Sales Lead',
        status: true,
      },
      {
        title: 'Customer Sales Representative',
        status: true,
      },
      {
        title: 'Customer Service',
        status: true,
      },
      {
        title: 'Customer Service',
        status: true,
      },
      {
        title: 'Customer Service Admin',
        status: true,
      },
      {
        title: 'Customer Service Administrator',
        status: true,
      },
      {
        title: 'Customer Service Advisor',
        status: true,
      },
      {
        title: 'Customer Service Advocate',
        status: true,
      },
      {
        title: 'Customer Service Agent',
        status: true,
      },
      {
        title: 'Customer Service Analyst',
        status: true,
      },
      {
        title: 'Customer Service and Sales Representative',
        status: true,
      },
      {
        title: 'Customer Service Assistant',
        status: true,
      },
      {
        title: 'Customer Service Associate',
        status: true,
      },
      {
        title: 'Customer Service Call Center',
        status: true,
      },
      {
        title: 'Customer Service Clerk',
        status: true,
      },
      {
        title: 'Customer Service Consultant',
        status: true,
      },
      {
        title: 'Customer Service Contact Centre Representative',
        status: true,
      },
      {
        title: 'Customer Service Coordinator',
        status: true,
      },
      {
        title: 'Customer Service Desk Analyst',
        status: true,
      },
      {
        title: 'Customer Service Director',
        status: true,
      },
      {
        title: 'Customer Service Engineer',
        status: true,
      },
      {
        title: 'Customer Service Executive',
        status: true,
      },
      {
        title: 'Customer Service Expert',
        status: true,
      },
      {
        title: 'Customer Service Internship',
        status: true,
      },
      {
        title: 'Customer Service Lead',
        status: true,
      },
      {
        title: 'Customer Service Manager',
        status: true,
      },
      {
        title: 'Customer Service Officer',
        status: true,
      },
      {
        title: 'Customer Service Operator',
        status: true,
      },
      {
        title: 'Customer Service Outfitter',
        status: true,
      },
      {
        title: 'Customer Service Participant Services',
        status: true,
      },
      {
        title: 'Customer Service Professional',
        status: true,
      },
      {
        title: 'Customer Service Receptionist',
        status: true,
      },
      {
        title: 'Customer Service Representative',
        status: true,
      },
      {
        title: 'Customer Service & Sales Representative',
        status: true,
      },
      {
        title: 'Customer Services Assistant',
        status: true,
      },
      {
        title: 'Customer Service Screener',
        status: true,
      },
      {
        title: 'Customer Services Executive',
        status: true,
      },
      {
        title: 'Customer Services Manager',
        status: true,
      },
      {
        title: 'Customer Service Specialist',
        status: true,
      },
      {
        title: 'Customer Service Supervisor',
        status: true,
      },
      {
        title: 'Customer Service Support',
        status: true,
      },
      {
        title: 'Customer Service Team Lead',
        status: true,
      },
      {
        title: 'Customer Service Team Leader',
        status: true,
      },
      {
        title: 'Customer Service Teammate',
        status: true,
      },
      {
        title: 'Customer Service Team Member',
        status: true,
      },
      {
        title: 'Customer Service Technician',
        status: true,
      },
      {
        title: 'Customer Service Trainer',
        status: true,
      },
      {
        title: 'Customer Service Work From Home',
        status: true,
      },
      {
        title: 'Customer Solutions Architect',
        status: true,
      },
      {
        title: 'Customer Solutions Engineer',
        status: true,
      },
      {
        title: 'Customer Solutions Manager',
        status: true,
      },
      {
        title: 'Customer Strategy and Value Manager',
        status: true,
      },
      {
        title: 'Customer Success Account Manager',
        status: true,
      },
      {
        title: 'Customer Success Advisor',
        status: true,
      },
      {
        title: 'Customer Success Advocate',
        status: true,
      },
      {
        title: 'Customer Success Agent',
        status: true,
      },
      {
        title: 'Customer Success Analyst',
        status: true,
      },
      {
        title: 'Customer Success Associate',
        status: true,
      },
      {
        title: 'Customer Success Consultant',
        status: true,
      },
      {
        title: 'Customer Success Coordinator',
        status: true,
      },
      {
        title: 'Customer Success Director',
        status: true,
      },
      {
        title: 'Customer Success Engineer',
        status: true,
      },
      {
        title: 'Customer Success Executive',
        status: true,
      },
      {
        title: 'Customer Success Intern',
        status: true,
      },
      {
        title: 'Customer Success Lead',
        status: true,
      },
      {
        title: 'Customer Success Manager',
        status: true,
      },
      {
        title: 'Customer Success Operations Manager',
        status: true,
      },
      {
        title: 'Customer Success Operations Specialist',
        status: true,
      },
      {
        title: 'Customer Success Representative',
        status: true,
      },
      {
        title: 'Customer Success Specialist',
        status: true,
      },
      {
        title: 'Customer Success Team Lead',
        status: true,
      },
      {
        title: 'Customer Supply Chain Analyst',
        status: true,
      },
      {
        title: 'Customer Supply Chain Manager',
        status: true,
      },
      {
        title: 'Customer Support Advocate',
        status: true,
      },
      {
        title: 'Customer Support Agent',
        status: true,
      },
      {
        title: 'Customer Support Analyst',
        status: true,
      },
      {
        title: 'Customer Support Associate',
        status: true,
      },
      {
        title: 'Customer Support Coordinator',
        status: true,
      },
      {
        title: 'Customer Support Engineer',
        status: true,
      },
      {
        title: 'Customer Support Executive',
        status: true,
      },
      {
        title: 'Customer Support Lead',
        status: true,
      },
      {
        title: 'Customer Support Manager',
        status: true,
      },
      {
        title: 'Customer Support Representative',
        status: true,
      },
      {
        title: 'Customer Support Specialist',
        status: true,
      },
      {
        title: 'Customer Support Supervisor',
        status: true,
      },
      {
        title: 'Customer Support Team Lead',
        status: true,
      },
      {
        title: 'Customer Support Technician',
        status: true,
      },
      {
        title: 'Customer Technical Services Analyst',
        status: true,
      },
      {
        title: 'Customer Training Specialist',
        status: true,
      },
      {
        title: 'Custom Home Sales Manager',
        status: true,
      },
      {
        title: 'Custom Home Sales Representative',
        status: true,
      },
      {
        title: 'Customs Broker',
        status: true,
      },
      {
        title: 'Customs Brokerage Associate',
        status: true,
      },
      {
        title: 'Customs Document Analyst',
        status: true,
      },
      {
        title: 'Custom Seating Technician',
        status: true,
      },
      {
        title: 'Customs Manager',
        status: true,
      },
      {
        title: 'Customs Rater',
        status: true,
      },
      {
        title: 'Customs Specialist',
        status: true,
      },
      {
        title: 'Cutter Meat',
        status: true,
      },
      {
        title: 'CVS Supervisor',
        status: true,
      },
      {
        title: 'CX Enterprise Sales',
        status: true,
      },
      {
        title: 'Cyber Architect',
        status: true,
      },
      {
        title: 'Cyberark Production Support Engineer',
        status: true,
      },
      {
        title: 'Cyber Fusion Center Triage Analyst',
        status: true,
      },
      {
        title: 'Cyber Security Analyst',
        status: true,
      },
      {
        title: 'Cyber-Security Architect',
        status: true,
      },
      {
        title: 'Cyber Security Consultant',
        status: true,
      },
      {
        title: 'Cyber security Consultant',
        status: true,
      },
      {
        title: 'Cyber Security Defense Analyst',
        status: true,
      },
      {
        title: 'Cyber Security Engineer',
        status: true,
      },
      {
        title: 'Cybers Security Instructor',
        status: true,
      },
      {
        title: 'Cyber Security Integration Engineer',
        status: true,
      },
      {
        title: 'Cyber Security Manager',
        status: true,
      },
      {
        title: 'Cybersecurity Policy Analyst',
        status: true,
      },
      {
        title: 'Cyber Security Presales Architect',
        status: true,
      },
      {
        title: 'Cybersecurity Risk Management Framework Engineer',
        status: true,
      },
      {
        title: 'Cyber Security Specialist',
        status: true,
      },
      {
        title: 'Cybersecurity Teaching Assistant',
        status: true,
      },
      {
        title: 'Cyber Security Trainee',
        status: true,
      },
      {
        title: 'Cyber Threat Analyst',
        status: true,
      },
      {
        title: 'Cyber Threat Intelligence Analyst',
        status: true,
      },
      {
        title: 'Cycle Counter',
        status: true,
      },
      {
        title: 'Cylanceguard Analyst',
        status: true,
      },
      {
        title: 'Cytogenetics Laboratory Technologist',
        status: true,
      },
      {
        title: 'Cytogenetic Technologist',
        status: true,
      },
      {
        title: 'Cytotechnologist',
        status: true,
      },
      {
        title: 'D365 Developer',
        status: true,
      },
      {
        title: 'Dairy Manager',
        status: true,
      },
      {
        title: 'Dallas Internal Audit & Financial Advisory',
        status: true,
      },
      {
        title: 'Dance Instructor',
        status: true,
      },
      {
        title: 'Dancer',
        status: true,
      },
      {
        title: 'Dance Teacher',
        status: true,
      },
      {
        title: 'Data Administrator',
        status: true,
      },
      {
        title: 'Data Analyst',
        status: true,
      },
      {
        title: 'Data Analyst Intern',
        status: true,
      },
      {
        title: 'Data Analytics Analyst',
        status: true,
      },
      {
        title: 'Data Analytics Consultant',
        status: true,
      },
      {
        title: 'Data Analytics Engineer',
        status: true,
      },
      {
        title: 'Data Analytics Manager',
        status: true,
      },
      {
        title: 'Data Analytics & Report Developer',
        status: true,
      },
      {
        title: 'Data Analytics Specialist',
        status: true,
      },
      {
        title: 'Data Architect',
        status: true,
      },
      {
        title: 'Database Administrator',
        status: true,
      },
      {
        title: 'Database Analyst',
        status: true,
      },
      {
        title: 'Database Architect',
        status: true,
      },
      {
        title: 'Database Coordinator',
        status: true,
      },
      {
        title: 'Database Developer',
        status: true,
      },
      {
        title: 'Database Designer',
        status: true,
      },
      {
        title: 'Database Engineer',
        status: true,
      },
      {
        title: 'Database Manager',
        status: true,
      },
      {
        title: 'Database Reliability Engineer',
        status: true,
      },
      {
        title: 'Database Specialist',
        status: true,
      },
      {
        title: 'Data Business Analyst',
        status: true,
      },
      {
        title: 'Data Center Analyst',
        status: true,
      },
      {
        title: 'Data Center Engineer',
        status: true,
      },
      {
        title: 'Data Center Manager',
        status: true,
      },
      {
        title: 'Database Programmer',
        status: true,
      },
      {
        title: 'Data Center Specialist',
        status: true,
      },
      {
        title: 'Data Center Technician',
        status: true,
      },
      {
        title: 'Data Clerk',
        status: true,
      },
      {
        title: 'Data Coach',
        status: true,
      },
      {
        title: 'Data Collector',
        status: true,
      },
      {
        title: 'Data Consultant',
        status: true,
      },
      {
        title: 'Data Consulting Specialist',
        status: true,
      },
      {
        title: 'Data Conversion Consultant',
        status: true,
      },
      {
        title: 'Data Conversion Specialist',
        status: true,
      },
      {
        title: 'Data Coordinator',
        status: true,
      },
      {
        title: 'Data Developer',
        status: true,
      },
      {
        title: 'Data Director',
        status: true,
      },
      {
        title: 'Data Engineer',
        status: true,
      },
      {
        title: 'Data Engineering Analyst',
        status: true,
      },
      {
        title: 'Data Engineering Consultant',
        status: true,
      },
      {
        title: 'Data Engineering Lead',
        status: true,
      },
      {
        title: 'Data Engineering Manager',
        status: true,
      },
      {
        title: 'Data Engineering Team Lead',
        status: true,
      },
      {
        title: 'Data Engineer SME',
        status: true,
      },
      {
        title: 'Data Entry Administrator',
        status: true,
      },
      {
        title: 'Data Entry Agent',
        status: true,
      },
      {
        title: 'Data Entry Analyst',
        status: true,
      },
      {
        title: 'Data Entry Associate',
        status: true,
      },
      {
        title: 'Data Entry Clerk',
        status: true,
      },
      {
        title: 'Data Entry Coordinator',
        status: true,
      },
      {
        title: 'Data Entry Operator',
        status: true,
      },
      {
        title: 'Data Entry Processor',
        status: true,
      },
      {
        title: 'Data Entry Representative',
        status: true,
      },
      {
        title: 'Data Entry Specialist',
        status: true,
      },
      {
        title: 'Data Governance Analyst',
        status: true,
      },
      {
        title: 'Data Governance Consultant',
        status: true,
      },
      {
        title: 'Data Governance Lead',
        status: true,
      },
      {
        title: 'Data Governance Manager',
        status: true,
      },
      {
        title: 'Data Governance Specialist',
        status: true,
      },
      {
        title: 'Data Insights Analyst',
        status: true,
      },
      {
        title: 'Data Integration Developer',
        status: true,
      },
      {
        title: 'Data Integration Engineer',
        status: true,
      },
      {
        title: 'Data Integration Lead',
        status: true,
      },
      {
        title: 'Data Integration Specialist',
        status: true,
      },
      {
        title: 'Data Internship',
        status: true,
      },
      {
        title: 'Data Lead',
        status: true,
      },
      {
        title: 'Data Management Analyst',
        status: true,
      },
      {
        title: 'Data Management Consultant',
        status: true,
      },
      {
        title: 'Data Management Specialist',
        status: true,
      },
      {
        title: 'Data Manager',
        status: true,
      },
      {
        title: 'Data Migration Analyst',
        status: true,
      },
      {
        title: 'Data Migration Specialist',
        status: true,
      },
      {
        title: 'Data Modeler',
        status: true,
      },
      {
        title: 'Data Operations Engineer',
        status: true,
      },
      {
        title: 'Data Operations Lead',
        status: true,
      },
      {
        title: 'Data Operations Manager',
        status: true,
      },
      {
        title: 'Data Operations Specialist',
        status: true,
      },
      {
        title: 'Data Planner',
        status: true,
      },
      {
        title: 'Data Platform Engineer',
        status: true,
      },
      {
        title: 'Data Privacy Officer',
        status: true,
      },
      {
        title: 'Data Processor',
        status: true,
      },
      {
        title: 'Data Product Manager',
        status: true,
      },
      {
        title: 'Data Product Owner',
        status: true,
      },
      {
        title: 'Data Protection Officer',
        status: true,
      },
      {
        title: 'Data Quality Analyst',
        status: true,
      },
      {
        title: 'Data Quality Assurance Analyst',
        status: true,
      },
      {
        title: 'Data Quality Manager',
        status: true,
      },
      {
        title: 'Data Quality Specialist',
        status: true,
      },
      {
        title: 'Data Reporting Analyst',
        status: true,
      },
      {
        title: 'Data Research Analyst',
        status: true,
      },
      {
        title: 'Data Room Cleaner',
        status: true,
      },
      {
        title: 'Data Science Analyst',
        status: true,
      },
      {
        title: 'Data Science Associate',
        status: true,
      },
      {
        title: 'Data Science Consultant',
        status: true,
      },
      {
        title: 'Data Science Co Op',
        status: true,
      },
      {
        title: 'Data Science Director',
        status: true,
      },
      {
        title: 'Data Science Engineer',
        status: true,
      },
      {
        title: 'Data Science Intern',
        status: true,
      },
      {
        title: 'Data Science Lead',
        status: true,
      },
      {
        title: 'Data Science Manager',
        status: true,
      },
      {
        title: 'Data Science Specialist',
        status: true,
      },
      {
        title: 'Data Scientist',
        status: true,
      },
      {
        title: 'Data Scientist Intern',
        status: true,
      },
      {
        title: 'Data Security Engineer',
        status: true,
      },
      {
        title: 'Data Software Engineer',
        status: true,
      },
      {
        title: 'Data Solutions Engineer',
        status: true,
      },
      {
        title: 'Data Specialist',
        status: true,
      },
      {
        title: 'Data Steward',
        status: true,
      },
      {
        title: 'Data Strategist',
        status: true,
      },
      {
        title: 'Data Support Engineer',
        status: true,
      },
      {
        title: 'Data Technician',
        status: true,
      },
      {
        title: 'Data Technology Analyst',
        status: true,
      },
      {
        title: 'Data Visualization Analyst',
        status: true,
      },
      {
        title: 'Data Visualization Developer',
        status: true,
      },
      {
        title: 'Data Visualization Specialist',
        status: true,
      },
      {
        title: 'Data Warehouse Architect',
        status: true,
      },
      {
        title: 'Data Warehouse Developer',
        status: true,
      },
      {
        title: 'Data Warehouse Engineer',
        status: true,
      },
      {
        title: 'Day Camp Counselor',
        status: true,
      },
      {
        title: 'Daycare Attendant',
        status: true,
      },
      {
        title: 'Daycare Director',
        status: true,
      },
      {
        title: 'Daycare Supervisor',
        status: true,
      },
      {
        title: 'Daycare Teacher',
        status: true,
      },
      {
        title: 'Daycare Worker',
        status: true,
      },
      {
        title: 'Daycare Worker Assistant',
        status: true,
      },
      {
        title: 'Dayforce Support Analyst',
        status: true,
      },
      {
        title: 'Day Porter',
        status: true,
      },
      {
        title: 'Day Stocker',
        status: true,
      },
      {
        title: 'Day Support Lead',
        status: true,
      },
      {
        title: 'Daytime Crew Member',
        status: true,
      },
      {
        title: 'Day Trader',
        status: true,
      },
      {
        title: 'Db2 Database Administrator',
        status: true,
      },
      {
        title: 'DBS Cleaner',
        status: true,
      },
      {
        title: 'Deaconess',
        status: true,
      },
      {
        title: 'Deal Administrator',
        status: true,
      },
      {
        title: 'Deal Desk Analyst',
        status: true,
      },
      {
        title: 'Deal Desk Coordinator',
        status: true,
      },
      {
        title: 'Deal Desk Manager',
        status: true,
      },
      {
        title: 'Dealer',
        status: true,
      },
      {
        title: 'Dealer Relations Coordinator',
        status: true,
      },
      {
        title: 'Dealer Relations Manager',
        status: true,
      },
      {
        title: 'Dealer Service Specialist',
        status: true,
      },
      {
        title: 'Dealer Solutions Executive',
        status: true,
      },
      {
        title: 'Deal Specialist',
        status: true,
      },
      {
        title: 'Dean',
        status: true,
      },
      {
        title: 'Debris Supervisor',
        status: true,
      },
      {
        title: 'Debt Collector',
        status: true,
      },
      {
        title: 'Debt Relief Specialist',
        status: true,
      },
      {
        title: 'Debt Specialist',
        status: true,
      },
      {
        title: 'Deckhand',
        status: true,
      },
      {
        title: 'Decorator',
        status: true,
      },
      {
        title: 'Decorator Cake',
        status: true,
      },
      {
        title: 'Dedicated Security Officer',
        status: true,
      },
      {
        title: 'Dedicated Support Engineer',
        status: true,
      },
      {
        title: 'Deep Learning Instructor',
        status: true,
      },
      {
        title: 'Deep Learning Performance Architect',
        status: true,
      },
      {
        title: 'Defense Attorney',
        status: true,
      },
      {
        title: 'Deficiency Sales Representative',
        status: true,
      },
      {
        title: 'Deli Assistant',
        status: true,
      },
      {
        title: 'Deli Assistant Department Manager',
        status: true,
      },
      {
        title: 'Deli Associate',
        status: true,
      },
      {
        title: 'Deli Clerk',
        status: true,
      },
      {
        title: 'Deli Manager',
        status: true,
      },
      {
        title: 'Deli Team Member',
        status: true,
      },
      {
        title: 'Delivery Analyst',
        status: true,
      },
      {
        title: 'Delivery Associate',
        status: true,
      },
      {
        title: 'Delivery Coordinator',
        status: true,
      },
      {
        title: 'Delivery Director',
        status: true,
      },
      {
        title: 'Delivery Dispatcher',
        status: true,
      },
      {
        title: 'Delivery Driver Helper',
        status: true,
      },
      {
        title: 'Delivery Driver',
        status: true,
      },
      {
        title: 'Delivery Driver Helper',
        status: true,
      },
      {
        title: 'Delivery Helper',
        status: true,
      },
      {
        title: 'Delivery Lead',
        status: true,
      },
      {
        title: 'Delivery Manager',
        status: true,
      },
      {
        title: 'Delivery Operations Manager',
        status: true,
      },
      {
        title: 'Delivery Person',
        status: true,
      },
      {
        title: 'Delivery Professional',
        status: true,
      },
      {
        title: 'Delivery Professional Parcel',
        status: true,
      },
      {
        title: 'Delivery Route Driver',
        status: true,
      },
      {
        title: 'Delivery Specialist',
        status: true,
      },
      {
        title: 'Delivery Team Supervisor',
        status: true,
      },
      {
        title: 'Delivery Truck Driver',
        status: true,
      },
      {
        title: 'Demand Analyst',
        status: true,
      },
      {
        title: 'Demand and Capacity Planner',
        status: true,
      },
      {
        title: 'Demand Generation Manager',
        status: true,
      },
      {
        title: 'Demand Generation Marketing Manager',
        status: true,
      },
      {
        title: 'Demand Generation Specialist',
        status: true,
      },
      {
        title: 'Demand Manager',
        status: true,
      },
      {
        title: 'Demand Planner',
        status: true,
      },
      {
        title: 'Demand Planning Analyst',
        status: true,
      },
      {
        title: 'Demand Planning Manager',
        status: true,
      },
      {
        title: 'Demand Planning Specialist',
        status: true,
      },
      {
        title: 'Demo Engineer',
        status: true,
      },
      {
        title: 'Demolition Labourer',
        status: true,
      },
      {
        title: 'Demonstrator',
        status: true,
      },
      {
        title: 'Dental Administrator',
        status: true,
      },
      {
        title: 'Dental Aide',
        status: true,
      },
      {
        title: 'Dental Assistant',
        status: true,
      },
      {
        title: 'Dental Assistant and Receptionist',
        status: true,
      },
      {
        title: 'Dental Ceramist',
        status: true,
      },
      {
        title: 'Dental Front Office Staff',
        status: true,
      },
      {
        title: 'Dental Hygienist',
        status: true,
      },
      {
        title: 'Dental Lab Technician',
        status: true,
      },
      {
        title: 'Dental Network Manager',
        status: true,
      },
      {
        title: 'Dental Office Administrator',
        status: true,
      },
      {
        title: 'Dental Office Assistant',
        status: true,
      },
      {
        title: 'Dental Office Manager',
        status: true,
      },
      {
        title: 'Dental Office Receptionist',
        status: true,
      },
      {
        title: 'Dental Practice Manager',
        status: true,
      },
      {
        title: 'Dental Receptionist',
        status: true,
      },
      {
        title: 'Dental Technician',
        status: true,
      },
      {
        title: 'Dental Treatment Coordinator',
        status: true,
      },
      {
        title: 'Dentist',
        status: true,
      },
      {
        title: 'Department Assistant',
        status: true,
      },
      {
        title: 'Department Manager',
        status: true,
      },
      {
        title: 'Department Production Manager',
        status: true,
      },
      {
        title: 'Department Specialist',
        status: true,
      },
      {
        title: 'Department Supervisor',
        status: true,
      },
      {
        title: 'Deployment Engineer',
        status: true,
      },
      {
        title: 'Deployment Manager',
        status: true,
      },
      {
        title: 'Deployment Specialist',
        status: true,
      },
      {
        title: 'Deployment Strategist',
        status: true,
      },
      {
        title: 'Deployment Technician',
        status: true,
      },
      {
        title: 'Depot Manager',
        status: true,
      },
      {
        title: 'Deputy Director',
        status: true,
      },
      {
        title: 'Deputy Clerk',
        status: true,
      },
      {
        title: 'Deputy Court Clerk',
        status: true,
      },
      {
        title: 'Deputy Editor',
        status: true,
      },
      {
        title: 'Deputy Head of Boutique',
        status: true,
      },
      {
        title: 'Deputy Manager',
        status: true,
      },
      {
        title: 'Deputy Program Manager',
        status: true,
      },
      {
        title: 'Deputy Sheriff',
        status: true,
      },
      {
        title: 'Derivatives Analyst',
        status: true,
      },
      {
        title: 'Dermatologist',
        status: true,
      },
      {
        title: 'Dermatology Nurse Practitioner',
        status: true,
      },
      {
        title: 'Design and Construction Manager',
        status: true,
      },
      {
        title: 'Design Architect',
        status: true,
      },
      {
        title: 'Design Associate',
        status: true,
      },
      {
        title: 'Design Consultant',
        status: true,
      },
      {
        title: 'Design Coordinator',
        status: true,
      },
      {
        title: 'Design Director',
        status: true,
      },
      {
        title: 'Design Engineer',
        status: true,
      },
      {
        title: 'Designer',
        status: true,
      },
      {
        title: 'Designer UX',
        status: true,
      },
      {
        title: 'Designer Web',
        status: true,
      },
      {
        title: 'Design Intern',
        status: true,
      },
      {
        title: 'Design Lead',
        status: true,
      },
      {
        title: 'Design Manager',
        status: true,
      },
      {
        title: 'Design Professional',
        status: true,
      },
      {
        title: 'Design Quality Engineer',
        status: true,
      },
      {
        title: 'Design Researcher',
        status: true,
      },
      {
        title: 'Design Specialist',
        status: true,
      },
      {
        title: 'Design Strategist',
        status: true,
      },
      {
        title: 'Design Studio Open House Associate',
        status: true,
      },
      {
        title: 'Design Supervisor',
        status: true,
      },
      {
        title: 'Design Team Lead',
        status: true,
      },
      {
        title: 'Design Team Leader',
        status: true,
      },
      {
        title: 'Design Technician',
        status: true,
      },
      {
        title: 'Design Technologist',
        status: true,
      },
      {
        title: 'Design Technology Specialist',
        status: true,
      },
      {
        title: 'Design Verification Engineer',
        status: true,
      },
      {
        title: 'Desk Clerk',
        status: true,
      },
      {
        title: 'Desk Receptionist',
        status: true,
      },
      {
        title: 'Deskside Technician',
        status: true,
      },
      {
        title: 'Desktop Administrator',
        status: true,
      },
      {
        title: 'Desktop Engineer',
        status: true,
      },
      {
        title: 'Desktop Publisher',
        status: true,
      },
      {
        title: 'Desktop Support',
        status: true,
      },
      {
        title: 'Desktop Support Analyst',
        status: true,
      },
      {
        title: 'Desktop Support Engineer',
        status: true,
      },
      {
        title: 'Desktop Support Manager',
        status: true,
      },
      {
        title: 'Desktop Support Specialist',
        status: true,
      },
      {
        title: 'Desktop Support Technician',
        status: true,
      },
      {
        title: 'Desktop Systems Specialist',
        status: true,
      },
      {
        title: 'Desktop Technician',
        status: true,
      },
      {
        title: 'Detailer',
        status: true,
      },
      {
        title: 'Detailer Production Paid',
        status: true,
      },
      {
        title: 'Detail Specialist',
        status: true,
      },
      {
        title: 'Detective',
        status: true,
      },
      {
        title: 'Detention Officer',
        status: true,
      },
      {
        title: 'Developer',
        status: true,
      },
      {
        title: 'Developer Advocate',
        status: true,
      },
      {
        title: 'Developer Advocate Leader',
        status: true,
      },
      {
        title: 'Developer Analyst',
        status: true,
      },
      {
        title: 'Developer and Technical Lead',
        status: true,
      },
      {
        title: 'Developer Associate',
        status: true,
      },
      {
        title: 'Developer Chapter Lead',
        status: true,
      },
      {
        title: 'Developer In Test',
        status: true,
      },
      {
        title: 'Developer Relations',
        status: true,
      },
      {
        title: 'Developer Specialist',
        status: true,
      },
      {
        title: 'Developer Support Engineer',
        status: true,
      },
      {
        title: 'Developer Technology Engineer',
        status: true,
      },
      {
        title: 'Developer Tools Engineer',
        status: true,
      },
      {
        title: 'Development Accountant',
        status: true,
      },
      {
        title: 'Developmental Psychologist',
        status: true,
      },
      {
        title: 'Developmental Service Worker',
        status: true,
      },
      {
        title: 'Development Assistant',
        status: true,
      },
      {
        title: 'Development Associate',
        status: true,
      },
      {
        title: 'Development Coordinator',
        status: true,
      },
      {
        title: 'Development Director',
        status: true,
      },
      {
        title: 'Development Engineer',
        status: true,
      },
      {
        title: 'Development Lead',
        status: true,
      },
      {
        title: 'Development Manager',
        status: true,
      },
      {
        title: 'Development Officer',
        status: true,
      },
      {
        title: 'Development Operations Engineer',
        status: true,
      },
      {
        title: 'Development Product Owner',
        status: true,
      },
      {
        title: 'Development Quality Engineer',
        status: true,
      },
      {
        title: 'Development Specialist',
        status: true,
      },
      {
        title: 'Development Team Lead',
        status: true,
      },
      {
        title: 'Development Tech Lead',
        status: true,
      },
      {
        title: 'Development Tester',
        status: true,
      },
      {
        title: 'Dev Java Web Service',
        status: true,
      },
      {
        title: 'Devops Administrator',
        status: true,
      },
      {
        title: 'Devops Advocate',
        status: true,
      },
      {
        title: 'Devops Analyst',
        status: true,
      },
      {
        title: 'Devops Architect',
        status: true,
      },
      {
        title: 'Devops Automation Engineer',
        status: true,
      },
      {
        title: 'Devops Automation Specialist',
        status: true,
      },
      {
        title: 'Devops Cloud Engineer',
        status: true,
      },
      {
        title: 'Devops Consultant',
        status: true,
      },
      {
        title: 'Devops Developer',
        status: true,
      },
      {
        title: 'Devops Engineer',
        status: true,
      },
      {
        title: 'Devops Engineer Permanent',
        status: true,
      },
      {
        title: 'Devops Infrastructure Engineer',
        status: true,
      },
      {
        title: 'Devops Lead',
        status: true,
      },
      {
        title: 'Devops Manager',
        status: true,
      },
      {
        title: 'Devops Security Engineer',
        status: true,
      },
      {
        title: 'Devops Software Developer',
        status: true,
      },
      {
        title: 'Dev Ops Specialist',
        status: true,
      },
      {
        title: 'Devops Specialist',
        status: true,
      },
      {
        title: 'Devops Support Engineer',
        status: true,
      },
      {
        title: 'Devops Team Lead',
        status: true,
      },
      {
        title: 'Devsecops Engineer',
        status: true,
      },
      {
        title: 'Devsecops Specialist',
        status: true,
      },
      {
        title: 'DFT Engineer',
        status: true,
      },
      {
        title: 'DFT Intern',
        status: true,
      },
      {
        title: 'Diagnostic Medical Sonographer',
        status: true,
      },
      {
        title: 'Dialysis Nurse',
        status: true,
      },
      {
        title: 'Dialysis RN',
        status: true,
      },
      {
        title: 'Dialysis Technician',
        status: true,
      },
      {
        title: 'Diamond Driller',
        status: true,
      },
      {
        title: 'Die Maintenance Technician',
        status: true,
      },
      {
        title: 'Die Maker',
        status: true,
      },
      {
        title: 'Diesel Mechanic',
        status: true,
      },
      {
        title: 'Diesel Technician',
        status: true,
      },
      {
        title: 'Dietary Aide',
        status: true,
      },
      {
        title: 'Dietary Aide Certified',
        status: true,
      },
      {
        title: 'Dietary Cook',
        status: true,
      },
      {
        title: 'Dietary Manager',
        status: true,
      },
      {
        title: 'Dietary Supervisor',
        status: true,
      },
      {
        title: 'Dietary Worker',
        status: true,
      },
      {
        title: 'Diet Clerk',
        status: true,
      },
      {
        title: 'Dietetic Assistant',
        status: true,
      },
      {
        title: 'Dietetic Technician',
        status: true,
      },
      {
        title: 'Dietitian',
        status: true,
      },
      {
        title: 'Diet Technician',
        status: true,
      },
      {
        title: 'Digital Account Director',
        status: true,
      },
      {
        title: 'Digital Account Executive',
        status: true,
      },
      {
        title: 'Digital Account Manager',
        status: true,
      },
      {
        title: 'Digital Advertising Analyst',
        status: true,
      },
      {
        title: 'Digital Advertising Coordinator',
        status: true,
      },
      {
        title: 'Digital Advertising Manager',
        status: true,
      },
      {
        title: 'Digital Advertising Specialist',
        status: true,
      },
      {
        title: 'Digital Advertising Strategist',
        status: true,
      },
      {
        title: 'Digital Analyst',
        status: true,
      },
      {
        title: 'Digital Analytics Consultant',
        status: true,
      },
      {
        title: 'Digital Analytics Consultant Intern',
        status: true,
      },
      {
        title: 'Digital Analytics Implementation Specialist',
        status: true,
      },
      {
        title: 'Digital Analytics Manager',
        status: true,
      },
      {
        title: 'Digital Architect',
        status: true,
      },
      {
        title: 'Digital Archivist',
        status: true,
      },
      {
        title: 'Digital Art Director',
        status: true,
      },
      {
        title: 'Digital Artist',
        status: true,
      },
      {
        title: 'Digital Business Analyst',
        status: true,
      },
      {
        title: 'Digital Campaign Manager',
        status: true,
      },
      {
        title: 'Digital Campaigns Manager',
        status: true,
      },
      {
        title: 'Digital Campaign Specialist',
        status: true,
      },
      {
        title: 'Digital Communications Coordinator',
        status: true,
      },
      {
        title: 'Digital Communications Manager',
        status: true,
      },
      {
        title: 'Digital Communications Specialist',
        status: true,
      },
      {
        title: 'Digital Consultant',
        status: true,
      },
      {
        title: 'Digital Content Coordinator',
        status: true,
      },
      {
        title: 'Digital Content Creator',
        status: true,
      },
      {
        title: 'Digital Content Editor',
        status: true,
      },
      {
        title: 'Digital Content Manager',
        status: true,
      },
      {
        title: 'Digital Content Producer',
        status: true,
      },
      {
        title: 'Digital Content Project Manager',
        status: true,
      },
      {
        title: 'Digital Content Specialist',
        status: true,
      },
      {
        title: 'Digital Content Writer',
        status: true,
      },
      {
        title: 'Digital Coordinator',
        status: true,
      },
      {
        title: 'Digital Copywriter',
        status: true,
      },
      {
        title: 'Digital Court Reporter',
        status: true,
      },
      {
        title: 'Digital Creative Designer',
        status: true,
      },
      {
        title: 'Digital Creative Director',
        status: true,
      },
      {
        title: 'Digital Data Analyst',
        status: true,
      },
      {
        title: 'Digital Data Visualization Designer',
        status: true,
      },
      {
        title: 'Digital Delivery Manager',
        status: true,
      },
      {
        title: 'Digital Design Engineer',
        status: true,
      },
      {
        title: 'Digital Designer',
        status: true,
      },
      {
        title: 'Digital Developer',
        status: true,
      },
      {
        title: 'Digital Director',
        status: true,
      },
      {
        title: 'Digital Editor',
        status: true,
      },
      {
        title: 'Digital Experience Manager',
        status: true,
      },
      {
        title: 'Digital Forensics Analyst',
        status: true,
      },
      {
        title: 'Digital Graphic Designer',
        status: true,
      },
      {
        title: 'Digital Home Technician',
        status: true,
      },
      {
        title: 'Digital Insight Analyst',
        status: true,
      },
      {
        title: 'Digital Manager',
        status: true,
      },
      {
        title: 'Digital Marketer',
        status: true,
      },
      {
        title: 'Digital Marketing Account Manager',
        status: true,
      },
      {
        title: 'Digital Marketing Advisor',
        status: true,
      },
      {
        title: 'Digital Marketing Analyst',
        status: true,
      },
      {
        title: 'Digital Marketing Apprentice',
        status: true,
      },
      {
        title: 'Digital Marketing Assistant',
        status: true,
      },
      {
        title: 'Digital Marketing Associate',
        status: true,
      },
      {
        title: 'Digital Marketing Coach',
        status: true,
      },
      {
        title: 'Digital Marketing Consultant',
        status: true,
      },
      {
        title: 'Digital Marketing Content Manager',
        status: true,
      },
      {
        title: 'Digital Marketing Coordinator',
        status: true,
      },
      {
        title: 'Digital Marketing Designer',
        status: true,
      },
      {
        title: 'Digital Marketing Director',
        status: true,
      },
      {
        title: 'Digital Marketing Executive',
        status: true,
      },
      {
        title: 'Digital Marketing Intern',
        status: true,
      },
      {
        title: 'Digital Marketing Internship',
        status: true,
      },
      {
        title: 'Digital Marketing Lead',
        status: true,
      },
      {
        title: 'Digital Marketing Manager',
        status: true,
      },
      {
        title: 'Digital Marketing Officer',
        status: true,
      },
      {
        title: 'Digital Marketing Project Manager',
        status: true,
      },
      {
        title: 'Digital Marketing Specialist',
        status: true,
      },
      {
        title: 'Digital Marketing Strategist',
        status: true,
      },
      {
        title: 'Digital Marketing Technician',
        status: true,
      },
      {
        title: 'Digital Matte Painter',
        status: true,
      },
      {
        title: 'Digital Media Associate',
        status: true,
      },
      {
        title: 'Digital Media Buyer',
        status: true,
      },
      {
        title: 'Digital Media Coordinator',
        status: true,
      },
      {
        title: 'Digital Media Intern',
        status: true,
      },
      {
        title: 'Digital Media Manager',
        status: true,
      },
      {
        title: 'Digital Media Planner',
        status: true,
      },
      {
        title: 'Digital Media Specialist',
        status: true,
      },
      {
        title: 'Digital Media Strategist',
        status: true,
      },
      {
        title: 'Digital Merchandiser',
        status: true,
      },
      {
        title: 'Digital Operations Specialist',
        status: true,
      },
      {
        title: 'Digital Performance Analyst',
        status: true,
      },
      {
        title: 'Digital Performance Manager',
        status: true,
      },
      {
        title: 'Digital Platform Consultant',
        status: true,
      },
      {
        title: 'Digital PR Executive',
        status: true,
      },
      {
        title: 'Digital PR Manager',
        status: true,
      },
      {
        title: 'Digital Producer',
        status: true,
      },
      {
        title: 'Digital Product Analyst',
        status: true,
      },
      {
        title: 'Digital Product Designer',
        status: true,
      },
      {
        title: 'Digital Production Manager',
        status: true,
      },
      {
        title: 'Digital Product Manager',
        status: true,
      },
      {
        title: 'Digital Product Owner',
        status: true,
      },
      {
        title: 'Digital Program Manager',
        status: true,
      },
      {
        title: 'Digital Project Coordinator',
        status: true,
      },
      {
        title: 'Digital Project Manager',
        status: true,
      },
      {
        title: 'Digital PR Specialist',
        status: true,
      },
      {
        title: 'Digital Sales Representative',
        status: true,
      },
      {
        title: 'Digital Security Architect',
        status: true,
      },
      {
        title: 'Digital Solution Architect',
        status: true,
      },
      {
        title: 'Digital Solutions Support Analyst',
        status: true,
      },
      {
        title: 'Digital Strategist',
        status: true,
      },
      {
        title: 'Digital Technical Lead',
        status: true,
      },
      {
        title: 'Digital Technician',
        status: true,
      },
      {
        title: 'Digital Verification Engineer',
        status: true,
      },
      {
        title: 'Digital Visual Designer',
        status: true,
      },
      {
        title: 'Dining Room Assistant',
        status: true,
      },
      {
        title: 'Dining Room Manager',
        status: true,
      },
      {
        title: 'Dining Room Server',
        status: true,
      },
      {
        title: 'Dining Room Supervisor',
        status: true,
      },
      {
        title: 'Dining Services Partner Server',
        status: true,
      },
      {
        title: 'Direct Care Professional',
        status: true,
      },
      {
        title: 'Direct Care Staff',
        status: true,
      },
      {
        title: 'Direct Care Worker',
        status: true,
      },
      {
        title: 'Directional Driller',
        status: true,
      },
      {
        title: 'Director Corporate Strategy',
        status: true,
      },
      {
        title: 'Director Engineering',
        status: true,
      },
      {
        title: 'Director Finance',
        status: true,
      },
      {
        title: 'Director Financial Planning and Analysis',
        status: true,
      },
      {
        title: 'Director of Accounting',
        status: true,
      },
      {
        title: 'Director of Accounting Operations',
        status: true,
      },
      {
        title: 'Director of Account Management',
        status: true,
      },
      {
        title: 'Director of Administrative Services',
        status: true,
      },
      {
        title: 'Director of Admissions',
        status: true,
      },
      {
        title: 'Director of Airline Partnerships',
        status: true,
      },
      {
        title: 'Director of Analyst Relations',
        status: true,
      },
      {
        title: 'Director of Analytics',
        status: true,
      },
      {
        title: 'Director of Banquets',
        status: true,
      },
      {
        title: 'Director of Brand Marketing',
        status: true,
      },
      {
        title: 'Director of Business Development',
        status: true,
      },
      {
        title: 'Director of Business Intelligence',
        status: true,
      },
      {
        title: 'Director of Business Operations',
        status: true,
      },
      {
        title: 'Director of Care',
        status: true,
      },
      {
        title: 'Director of Catering',
        status: true,
      },
      {
        title: 'Director of Channel Partnerships',
        status: true,
      },
      {
        title: 'Director of Client Success',
        status: true,
      },
      {
        title: 'Director of Clinical Services',
        status: true,
      },
      {
        title: 'Director of Communications',
        status: true,
      },
      {
        title: 'Director of Community Marketing',
        status: true,
      },
      {
        title: 'Director of Compliance',
        status: true,
      },
      {
        title: 'Director of Construction',
        status: true,
      },
      {
        title: 'Director of Content',
        status: true,
      },
      {
        title: 'Director of Content Marketing',
        status: true,
      },
      {
        title: 'Director of Culinary Services',
        status: true,
      },
      {
        title: 'Director of Customer Experience',
        status: true,
      },
      {
        title: 'Director of Customer Service',
        status: true,
      },
      {
        title: 'Director of Customer Success',
        status: true,
      },
      {
        title: 'Director of Cyber Security',
        status: true,
      },
      {
        title: 'Director of Data',
        status: true,
      },
      {
        title: 'Director of Data Engineering',
        status: true,
      },
      {
        title: 'Director of Demand Generation',
        status: true,
      },
      {
        title: 'Director of Design',
        status: true,
      },
      {
        title: 'Director of Development',
        status: true,
      },
      {
        title: 'Director of Devops',
        status: true,
      },
      {
        title: 'Director of Digital Marketing',
        status: true,
      },
      {
        title: 'Director of Ecommerce',
        status: true,
      },
      {
        title: 'Director of Education',
        status: true,
      },
      {
        title: 'Director of Engineering',
        status: true,
      },
      {
        title: 'Director of Environmental Services',
        status: true,
      },
      {
        title: 'Director of Events',
        status: true,
      },
      {
        title: 'Director of Facilities',
        status: true,
      },
      {
        title: 'Director of Finance',
        status: true,
      },
      {
        title: 'Director of Finance and Administration',
        status: true,
      },
      {
        title: 'Director of Finance and Operations',
        status: true,
      },
      {
        title: 'Director of Financial Planning and Analysis',
        status: true,
      },
      {
        title: 'Director of Financial Reporting',
        status: true,
      },
      {
        title: 'Director of Food and Beverage',
        status: true,
      },
      {
        title: 'Director of Growth',
        status: true,
      },
      {
        title: 'Director of Growth and Biz Ops',
        status: true,
      },
      {
        title: 'Director of Growth Marketing',
        status: true,
      },
      {
        title: 'Director of Hardware Engineering',
        status: true,
      },
      {
        title: 'Director of Healthcare Strategy',
        status: true,
      },
      {
        title: 'Director of Housekeeping',
        status: true,
      },
      {
        title: 'Director of Human Resources',
        status: true,
      },
      {
        title: 'Director of Impact',
        status: true,
      },
      {
        title: 'Director of Implementation',
        status: true,
      },
      {
        title: 'Director of Information Security',
        status: true,
      },
      {
        title: 'Director of Information Technology',
        status: true,
      },
      {
        title: 'Director of Infrastructure',
        status: true,
      },
      {
        title: 'Director of Inside Sales',
        status: true,
      },
      {
        title: 'Director of IT',
        status: true,
      },
      {
        title: 'Director of Legal Operations',
        status: true,
      },
      {
        title: 'Director of Logistics',
        status: true,
      },
      {
        title: 'Director of Maintenance',
        status: true,
      },
      {
        title: 'Director of Manufacturing',
        status: true,
      },
      {
        title: 'Director of Marketing',
        status: true,
      },
      {
        title: 'Director of Marketing and Sales',
        status: true,
      },
      {
        title: 'Director of Marketing Operations',
        status: true,
      },
      {
        title: 'Director of Merchant Success',
        status: true,
      },
      {
        title: 'Director of Nursing',
        status: true,
      },
      {
        title: 'Director of Operations',
        status: true,
      },
      {
        title: 'Director of Optometry',
        status: true,
      },
      {
        title: 'Director of Outpatient Services',
        status: true,
      },
      {
        title: 'Director of Partnerships',
        status: true,
      },
      {
        title: 'Director of Partner Success',
        status: true,
      },
      {
        title: 'Director of Payment Operations',
        status: true,
      },
      {
        title: 'Director of People',
        status: true,
      },
      {
        title: 'Director of People and Culture',
        status: true,
      },
      {
        title: 'Director of People & Culture',
        status: true,
      },
      {
        title: 'Director of People Operations',
        status: true,
      },
      {
        title: 'Director of Performance Marketing',
        status: true,
      },
      {
        title: 'Director of Photography',
        status: true,
      },
      {
        title: 'Director of Plant Operations',
        status: true,
      },
      {
        title: 'Director of Product',
        status: true,
      },
      {
        title: 'Director of Product Design',
        status: true,
      },
      {
        title: 'Director of Product Development',
        status: true,
      },
      {
        title: 'Director of Product Management',
        status: true,
      },
      {
        title: 'Director of Product Marketing',
        status: true,
      },
      {
        title: 'Director of Product Security Research',
        status: true,
      },
      {
        title: 'Director of Professional Services',
        status: true,
      },
      {
        title: 'Director of Program Management',
        status: true,
      },
      {
        title: 'Director of Programs',
        status: true,
      },
      {
        title: 'Director of Project Management',
        status: true,
      },
      {
        title: 'Director of Public Relations',
        status: true,
      },
      {
        title: 'Director of Public Safety',
        status: true,
      },
      {
        title: 'Director of Purchasing',
        status: true,
      },
      {
        title: 'Director of QA',
        status: true,
      },
      {
        title: 'Director of Quality Assurance',
        status: true,
      },
      {
        title: 'Director of Radiology',
        status: true,
      },
      {
        title: 'Director of R&D',
        status: true,
      },
      {
        title: 'Director of Rehabilitation',
        status: true,
      },
      {
        title: 'Director of Research',
        status: true,
      },
      {
        title: 'Director of Residences',
        status: true,
      },
      {
        title: 'Director of Revenue Cycle Management',
        status: true,
      },
      {
        title: 'Director of Revenue Operations',
        status: true,
      },
      {
        title: 'Director of Rooms',
        status: true,
      },
      {
        title: 'Director of Sales',
        status: true,
      },
      {
        title: 'Director of Sales and Marketing',
        status: true,
      },
      {
        title: 'Director of Sales Development',
        status: true,
      },
      {
        title: 'Director of Sales Enablement',
        status: true,
      },
      {
        title: 'Director of Sales & Marketing',
        status: true,
      },
      {
        title: 'Director of Sales Operations',
        status: true,
      },
      {
        title: 'Director of Security',
        status: true,
      },
      {
        title: 'Director of Service',
        status: true,
      },
      {
        title: 'Director of Site Merchandising',
        status: true,
      },
      {
        title: 'Director of Social Media',
        status: true,
      },
      {
        title: 'Director of Social Services',
        status: true,
      },
      {
        title: 'Director of Social Work',
        status: true,
      },
      {
        title: 'Director of Software Development',
        status: true,
      },
      {
        title: 'Director of Software Engineering',
        status: true,
      },
      {
        title: 'Director of Spa',
        status: true,
      },
      {
        title: 'Director of Special Education',
        status: true,
      },
      {
        title: 'Director of Special Events',
        status: true,
      },
      {
        title: 'Director of Strategic Partnerships',
        status: true,
      },
      {
        title: 'Director of Strategic Sourcing Operations',
        status: true,
      },
      {
        title: 'Director of Strategy',
        status: true,
      },
      {
        title: 'Director of Supply Chain',
        status: true,
      },
      {
        title: 'Director of Sustainability',
        status: true,
      },
      {
        title: 'Director of Talent Acquisition',
        status: true,
      },
      {
        title: 'Director of Technical Operations',
        status: true,
      },
      {
        title: 'Director of Technology',
        status: true,
      },
      {
        title: 'Director of Training',
        status: true,
      },
      {
        title: 'Director of UX Research and Design',
        status: true,
      },
      {
        title: 'Director Operations',
        status: true,
      },
      {
        title: 'Director Product Management',
        status: true,
      },
      {
        title: 'Director Product Marketing',
        status: true,
      },
      {
        title: 'Director Project Management',
        status: true,
      },
      {
        title: 'Director Quality Assurance',
        status: true,
      },
      {
        title: 'Director Software Development',
        status: true,
      },
      {
        title: 'Director Space Missions',
        status: true,
      },
      {
        title: 'Direct Sales Representative',
        status: true,
      },
      {
        title: 'Direct Support Professional',
        status: true,
      },
      {
        title: 'Direct Support Worker',
        status: true,
      },
      {
        title: 'Disability Case Manager',
        status: true,
      },
      {
        title: 'Disability Claims Specialist',
        status: true,
      },
      {
        title: 'Disability Management Consultant',
        status: true,
      },
      {
        title: 'Disability Payment Specialist',
        status: true,
      },
      {
        title: 'Disability Support Worker',
        status: true,
      },
      {
        title: 'Discharge Planner',
        status: true,
      },
      {
        title: 'Disc Jockey',
        status: true,
      },
      {
        title: 'Discovery Representative',
        status: true,
      },
      {
        title: 'Dish Machine Operator',
        status: true,
      },
      {
        title: 'Dishwasher',
        status: true,
      },
      {
        title: 'Dispatch Assistant',
        status: true,
      },
      {
        title: 'Dispatch Clerk',
        status: true,
      },
      {
        title: 'Dispatch Coordinator',
        status: true,
      },
      {
        title: 'Dispatcher',
        status: true,
      },
      {
        title: 'Dispatcher Military Police',
        status: true,
      },
      {
        title: 'Dispatchers Supervisor',
        status: true,
      },
      {
        title: 'Dispatch Field Service Engineer',
        status: true,
      },
      {
        title: 'Dispatch Logistician',
        status: true,
      },
      {
        title: 'Dispatch Manager',
        status: true,
      },
      {
        title: 'Dispatch Supervisor',
        status: true,
      },
      {
        title: 'Dispensing Optician',
        status: true,
      },
      {
        title: 'Display Manager',
        status: true,
      },
      {
        title: 'Dispute and Credit Representative',
        status: true,
      },
      {
        title: 'Distillation Operator',
        status: true,
      },
      {
        title: 'Distribution Associate',
        status: true,
      },
      {
        title: 'Distribution Center Associate',
        status: true,
      },
      {
        title: 'Distribution Center Manager',
        status: true,
      },
      {
        title: 'Distribution Center Supervisor',
        status: true,
      },
      {
        title: 'Distribution Clerk',
        status: true,
      },
      {
        title: 'Distribution Coordinator',
        status: true,
      },
      {
        title: 'Distribution Driver',
        status: true,
      },
      {
        title: 'Distribution Engineer',
        status: true,
      },
      {
        title: 'Distribution Manager',
        status: true,
      },
      {
        title: 'Distribution Operations Coordinator',
        status: true,
      },
      {
        title: 'Distribution Operations Intern',
        status: true,
      },
      {
        title: 'Distribution Project Coordinator',
        status: true,
      },
      {
        title: 'Distribution Specialist',
        status: true,
      },
      {
        title: 'Distribution Stocker',
        status: true,
      },
      {
        title: 'Distribution Supervisor',
        status: true,
      },
      {
        title: 'Distribution Technician',
        status: true,
      },
      {
        title: 'Distribution Warehouse Associate',
        status: true,
      },
      {
        title: 'Distributor',
        status: true,
      },
      {
        title: 'Distributor Sales Manager',
        status: true,
      },
      {
        title: 'District Attorney',
        status: true,
      },
      {
        title: 'District Manager',
        status: true,
      },
      {
        title: 'District Operations Manager',
        status: true,
      },
      {
        title: 'District Operations Specialist',
        status: true,
      },
      {
        title: 'District Sales Executive',
        status: true,
      },
      {
        title: 'District Sales Manager',
        status: true,
      },
      {
        title: 'District Service Manager',
        status: true,
      },
      {
        title: 'District Support Pharmacist',
        status: true,
      },
      {
        title: 'Divemaster',
        status: true,
      },
      {
        title: 'Diver',
        status: true,
      },
      {
        title: 'Diversity and Inclusion Specialist',
        status: true,
      },
      {
        title: 'Diversity & Inclusion Lead',
        status: true,
      },
      {
        title: 'Diversity & Inclusion Recruiter',
        status: true,
      },
      {
        title: 'Diversity Manager',
        status: true,
      },
      {
        title: 'Diving Coach',
        status: true,
      },
      {
        title: 'Division Controller',
        status: true,
      },
      {
        title: 'Division Director AT',
        status: true,
      },
      {
        title: 'Division Director OT',
        status: true,
      },
      {
        title: 'Division Director RH Accounting Operations',
        status: true,
      },
      {
        title: 'Division Director RH Finance and Accounting',
        status: true,
      },
      {
        title: 'Division Order Analyst',
        status: true,
      },
      {
        title: 'DJ',
        status: true,
      },
      {
        title: 'Dna Analyst',
        status: true,
      },
      {
        title: 'Dock Clerk',
        status: true,
      },
      {
        title: 'Dock Supervisor',
        status: true,
      },
      {
        title: 'Dock Worker',
        status: true,
      },
      {
        title: 'Doctor',
        status: true,
      },
      {
        title: 'Doctor Assistant',
        status: true,
      },
      {
        title: 'Document Agent',
        status: true,
      },
      {
        title: 'Document and Servicing Specialist',
        status: true,
      },
      {
        title: 'Documentation Administrator',
        status: true,
      },
      {
        title: 'Documentation Clerk',
        status: true,
      },
      {
        title: 'Documentation Coordinator',
        status: true,
      },
      {
        title: 'Documentation Specialist',
        status: true,
      },
      {
        title: 'Document Clerk',
        status: true,
      },
      {
        title: 'Document Control Administrator',
        status: true,
      },
      {
        title: 'Document Control Coordinator',
        status: true,
      },
      {
        title: 'Document Controller',
        status: true,
      },
      {
        title: 'Document Control Manager',
        status: true,
      },
      {
        title: 'Document Control Specialist',
        status: true,
      },
      {
        title: 'Document Coordinator',
        status: true,
      },
      {
        title: 'Document Management Specialist',
        status: true,
      },
      {
        title: 'Document Prep',
        status: true,
      },
      {
        title: 'Document Prep Specialist',
        status: true,
      },
      {
        title: 'Document Processor',
        status: true,
      },
      {
        title: 'Document Review Analyst',
        status: true,
      },
      {
        title: 'Document Review Attorney',
        status: true,
      },
      {
        title: 'Document Review Clerk',
        status: true,
      },
      {
        title: 'Document Review Specialist',
        status: true,
      },
      {
        title: 'Document Scanner',
        status: true,
      },
      {
        title: 'Documents Coordinator',
        status: true,
      },
      {
        title: 'Document Specialist',
        status: true,
      },
      {
        title: 'Dog Bather',
        status: true,
      },
      {
        title: 'Dog Daycare Attendant',
        status: true,
      },
      {
        title: 'Dog Groomer',
        status: true,
      },
      {
        title: 'Dog Handler',
        status: true,
      },
      {
        title: 'Dog Sitter',
        status: true,
      },
      {
        title: 'Dog Trainer',
        status: true,
      },
      {
        title: 'Dog Walker',
        status: true,
      },
      {
        title: 'Domain Architect',
        status: true,
      },
      {
        title: 'Domestic Gas Engineer',
        status: true,
      },
      {
        title: 'Domestic Violence Advocate',
        status: true,
      },
      {
        title: 'Dominos Manager',
        status: true,
      },
      {
        title: 'Donor Care Associate',
        status: true,
      },
      {
        title: 'Donor Relations Manager',
        status: true,
      },
      {
        title: 'Donor Services Representative',
        status: true,
      },
      {
        title: 'Door Assembler',
        status: true,
      },
      {
        title: 'Door Attendant',
        status: true,
      },
      {
        title: 'Doorman',
        status: true,
      },
      {
        title: 'Door to Door Sales Representative',
        status: true,
      },
      {
        title: 'Dot Net Developer',
        status: true,
      },
      {
        title: 'Downstream Operator',
        status: true,
      },
      {
        title: 'Dozer Operator',
        status: true,
      },
      {
        title: 'Drafter',
        status: true,
      },
      {
        title: 'Drafter Detailer',
        status: true,
      },
      {
        title: 'Drafting Technician',
        status: true,
      },
      {
        title: 'Draftsman',
        status: true,
      },
      {
        title: 'Draftsperson',
        status: true,
      },
      {
        title: 'Drainage Engineer',
        status: true,
      },
      {
        title: 'Drama Teacher',
        status: true,
      },
      {
        title: 'Driller',
        status: true,
      },
      {
        title: 'Drilling Consultant',
        status: true,
      },
      {
        title: 'Drilling Engineer',
        status: true,
      },
      {
        title: 'Drilling Fluids Engineer',
        status: true,
      },
      {
        title: 'Drilling Supervisor',
        status: true,
      },
      {
        title: 'Driver',
        status: true,
      },
      {
        title: 'Driver Helper',
        status: true,
      },
      {
        title: 'Driver Recruiter',
        status: true,
      },
      {
        title: 'Driver Team Leader',
        status: true,
      },
      {
        title: 'Drive Thru Operator',
        status: true,
      },
      {
        title: 'Driving Instructor',
        status: true,
      },
      {
        title: 'Drone Pilot',
        status: true,
      },
      {
        title: 'Drug And Alcohol Counselor',
        status: true,
      },
      {
        title: 'Drug Discovery Project Leader',
        status: true,
      },
      {
        title: 'Drug Safety Associate',
        status: true,
      },
      {
        title: 'Drug Safety Scientist',
        status: true,
      },
      {
        title: 'Drum Instructor',
        status: true,
      },
      {
        title: 'Drupal Back End Developer',
        status: true,
      },
      {
        title: 'Drupal Developer',
        status: true,
      },
      {
        title: 'Drupal Tech Lead',
        status: true,
      },
      {
        title: 'Drupal Technical Architect',
        status: true,
      },
      {
        title: 'Dryer Operator',
        status: true,
      },
      {
        title: 'Dry Packaging Operator',
        status: true,
      },
      {
        title: 'Drywall and Acoustical Installer Helper',
        status: true,
      },
      {
        title: 'Drywaller',
        status: true,
      },
      {
        title: 'Drywall Finisher',
        status: true,
      },
      {
        title: 'Drywall Installer',
        status: true,
      },
      {
        title: 'Drywall Installer and Finisher',
        status: true,
      },
      {
        title: 'Drywall Installer Supervisor',
        status: true,
      },
      {
        title: 'Drywall Taper',
        status: true,
      },
      {
        title: 'DSD Receiver',
        status: true,
      },
      {
        title: 'DSD Warehouse Crew',
        status: true,
      },
      {
        title: 'DSP Engineer',
        status: true,
      },
      {
        title: 'DT Teacher',
        status: true,
      },
      {
        title: 'Duct Cleaner',
        status: true,
      },
      {
        title: 'Dulux Store Sales Specialist',
        status: true,
      },
      {
        title: 'Dumper Driver',
        status: true,
      },
      {
        title: 'Dump Truck Driver',
        status: true,
      },
      {
        title: 'DVM Intern',
        status: true,
      },
      {
        title: 'Dynamics 365 Developer',
        status: true,
      },
      {
        title: 'Dynamics CRM Developer',
        status: true,
      },
      {
        title: 'DZ Delivery Driver',
        status: true,
      },
      {
        title: 'DZ Driver',
        status: true,
      },
      {
        title: 'DZ Truck Driver',
        status: true,
      },
      {
        title: 'E2E Quality Assurance Engineer',
        status: true,
      },
      {
        title: 'Early Childhood Assistant',
        status: true,
      },
      {
        title: 'Early Childhood Education Worker',
        status: true,
      },
      {
        title: 'Early Childhood Educator',
        status: true,
      },
      {
        title: 'Early Childhood Educator Assistant',
        status: true,
      },
      {
        title: 'Early Childhood Teacher',
        status: true,
      },
      {
        title: 'Early Intervention Mental Health Specialist',
        status: true,
      },
      {
        title: 'Early Intervention Specialist',
        status: true,
      },
      {
        title: 'Early Morning Stock Associates',
        status: true,
      },
      {
        title: 'Early Years Teacher',
        status: true,
      },
      {
        title: 'Eavestrough Installer',
        status: true,
      },
      {
        title: 'E-Business Advisor',
        status: true,
      },
      {
        title: 'ECE Assistant',
        status: true,
      },
      {
        title: 'ECE Teacher',
        status: true,
      },
      {
        title: 'Echocardiographer',
        status: true,
      },
      {
        title: 'Echo Technician',
        status: true,
      },
      {
        title: 'EC&I Engineer',
        status: true,
      },
      {
        title: 'Ecologist',
        status: true,
      },
      {
        title: 'Ecommerce and Integration Manager',
        status: true,
      },
      {
        title: 'Ecommerce Assistant',
        status: true,
      },
      {
        title: 'Ecommerce Associate',
        status: true,
      },
      {
        title: 'Ecommerce Business Analyst',
        status: true,
      },
      {
        title: 'Ecommerce Clerk',
        status: true,
      },
      {
        title: 'Ecommerce Coordinator',
        status: true,
      },
      {
        title: 'Ecommerce Manager',
        status: true,
      },
      {
        title: 'Ecommerce Marketing Manager',
        status: true,
      },
      {
        title: 'Ecommerce Operations Department Manager',
        status: true,
      },
      {
        title: 'Ecommerce Operations Manager',
        status: true,
      },
      {
        title: 'Ecommerce Project Manager',
        status: true,
      },
      {
        title: 'Ecommerce Specialist',
        status: true,
      },
      {
        title: 'Ecommerce Trading Manager',
        status: true,
      },
      {
        title: 'Econometrician',
        status: true,
      },
      {
        title: 'Economic Analyst',
        status: true,
      },
      {
        title: 'Economic Consultant',
        status: true,
      },
      {
        title: 'Economics Teacher',
        status: true,
      },
      {
        title: 'Economist',
        status: true,
      },
      {
        title: 'EDI Analyst',
        status: true,
      },
      {
        title: 'EDI Coordinator',
        status: true,
      },
      {
        title: 'EDI Developer',
        status: true,
      },
      {
        title: 'EDI Product Manager',
        status: true,
      },
      {
        title: 'EDI Specialist',
        status: true,
      },
      {
        title: 'Editor',
        status: true,
      },
      {
        title: 'Editorial and Content Associate',
        status: true,
      },
      {
        title: 'Editorial Assistant',
        status: true,
      },
      {
        title: 'Editorial Intern',
        status: true,
      },
      {
        title: 'Editorial Manager',
        status: true,
      },
      {
        title: 'Editor In Chief',
        status: true,
      },
      {
        title: 'Education Administrator',
        status: true,
      },
      {
        title: 'Educational Assistant',
        status: true,
      },
      {
        title: 'Educational Consultant',
        status: true,
      },
      {
        title: 'Educational Diagnostician',
        status: true,
      },
      {
        title: 'Educational Specialist',
        status: true,
      },
      {
        title: 'Education Assistant',
        status: true,
      },
      {
        title: 'Education Consultant',
        status: true,
      },
      {
        title: 'Education Coordinator',
        status: true,
      },
      {
        title: 'Education Teacher',
        status: true,
      },
      {
        title: 'Education Counselor',
        status: true,
      },
      {
        title: 'Education Program Manager',
        status: true,
      },
      {
        title: 'Education Specialist',
        status: true,
      },
      {
        title: 'Educator',
        status: true,
      },
      {
        title: 'Eeda Software and Hardware Engineering Specialist',
        status: true,
      },
      {
        title: 'EEG Technician',
        status: true,
      },
      {
        title: 'EGSE HW Engineer',
        status: true,
      },
      {
        title: 'EG Statistical Programmer',
        status: true,
      },
      {
        title: 'EHS Advisor',
        status: true,
      },
      {
        title: 'EHS Associate',
        status: true,
      },
      {
        title: 'EHS Coordinator',
        status: true,
      },
      {
        title: 'EHS Engineer',
        status: true,
      },
      {
        title: 'EHS Manager',
        status: true,
      },
      {
        title: 'EHS Specialist',
        status: true,
      },
      {
        title: 'E&I Technician',
        status: true,
      },
      {
        title: 'EKG Technician',
        status: true,
      },
      {
        title: 'Elderly Caregiver',
        status: true,
      },
      {
        title: 'Elderly Companion',
        status: true,
      },
      {
        title: 'Elearning Designer',
        status: true,
      },
      {
        title: 'Electrical Drafter',
        status: true,
      },
      {
        title: 'E-Learning Specialist',
        status: true,
      },
      {
        title: 'Electrical and Instrumentation Technician',
        status: true,
      },
      {
        title: 'Electrical Apprentice',
        status: true,
      },
      {
        title: 'Electrical Assembler',
        status: true,
      },
      {
        title: 'Electrical Assembly Technician',
        status: true,
      },
      {
        title: 'Electrical Assistant',
        status: true,
      },
      {
        title: 'Electrical Commissioning Engineer',
        status: true,
      },
      {
        title: 'Electrical Controls Engineer',
        status: true,
      },
      {
        title: 'Electrical Coordinator',
        status: true,
      },
      {
        title: 'Electrical Design Engineer',
        status: true,
      },
      {
        title: 'Electrical Designer',
        status: true,
      },
      {
        title: 'Electrical Engineer',
        status: true,
      },
      {
        title: 'Electrical Engineering Intern',
        status: true,
      },
      {
        title: 'Electrical Engineering Manager',
        status: true,
      },
      {
        title: 'Electrical Engineering Technician',
        status: true,
      },
      {
        title: 'Electrical Engineering Technologist',
        status: true,
      },
      {
        title: 'Electrical Estimator',
        status: true,
      },
      {
        title: 'Electrical Foreman',
        status: true,
      },
      {
        title: 'Electrical Helper',
        status: true,
      },
      {
        title: 'Electrical Inspector',
        status: true,
      },
      {
        title: 'Electrical Instrumentation and Controls Technician',
        status: true,
      },
      {
        title: 'Electrical Maintenance Engineer',
        status: true,
      },
      {
        title: 'Electrical Maintenance Supervisor',
        status: true,
      },
      {
        title: 'Electrical Maintenance Technician',
        status: true,
      },
      {
        title: 'Electrical Project Coordinator',
        status: true,
      },
      {
        title: 'Electrical Project Engineer',
        status: true,
      },
      {
        title: 'Electrical Project Manager',
        status: true,
      },
      {
        title: 'Electrical Superintendent',
        status: true,
      },
      {
        title: 'Electrical Supervisor',
        status: true,
      },
      {
        title: 'Electrical Systems Engineer',
        status: true,
      },
      {
        title: 'Electrical Technical Officer',
        status: true,
      },
      {
        title: 'Electrical Technician',
        status: true,
      },
      {
        title: 'Electrical Tester',
        status: true,
      },
      {
        title: 'Electrical Wiring Technician',
        status: true,
      },
      {
        title: 'Electrician',
        status: true,
      },
      {
        title: 'Electrician Apprentice',
        status: true,
      },
      {
        title: 'Electrician Helper',
        status: true,
      },
      {
        title: 'Electrician Journeyman',
        status: true,
      },
      {
        title: 'Electric Lineman',
        status: true,
      },
      {
        title: 'Electric Pallet Jack',
        status: true,
      },
      {
        title: 'Electric Pallet Jack Driver',
        status: true,
      },
      {
        title: 'Electric Pallet Jack Operator',
        status: true,
      },
      {
        title: 'Electric Pallet Jack Order Puller',
        status: true,
      },
      {
        title: 'Electric Pallet Jack Order Selector',
        status: true,
      },
      {
        title: 'Electro Instrumentist',
        status: true,
      },
      {
        title: 'Electromagnetics Simulation Specialist',
        status: true,
      },
      {
        title: 'Electro-Mechanic',
        status: true,
      },
      {
        title: 'Electro Mechanical Assembler',
        status: true,
      },
      {
        title: 'Electromechanical Technician',
        status: true,
      },
      {
        title: 'Electronic Assembler',
        status: true,
      },
      {
        title: 'Electronic Assembly',
        status: true,
      },
      {
        title: 'Electronic Design Engineer',
        status: true,
      },
      {
        title: 'Electronic Engineer',
        status: true,
      },
      {
        title: 'Electronic Repair Technician',
        status: true,
      },
      {
        title: 'Electronics Assembler',
        status: true,
      },
      {
        title: 'Electronics Design Engineer',
        status: true,
      },
      {
        title: 'Electronics Engineer',
        status: true,
      },
      {
        title: 'Electronics Engineering Technician',
        status: true,
      },
      {
        title: 'Electronics Lab Technician',
        status: true,
      },
      {
        title: 'Electronics Manufacturing Technician',
        status: true,
      },
      {
        title: 'Electronics Technician',
        status: true,
      },
      {
        title: 'Electronics Tester',
        status: true,
      },
      {
        title: 'Electronics Test Technician',
        status: true,
      },
      {
        title: 'Electronic Technician',
        status: true,
      },
      {
        title: 'Electro Technician',
        status: true,
      },
      {
        title: 'Elementary Art Teacher',
        status: true,
      },
      {
        title: 'Elementary Music Teacher',
        status: true,
      },
      {
        title: 'Elementary School Principal',
        status: true,
      },
      {
        title: 'Elementary School Teacher',
        status: true,
      },
      {
        title: 'Elementary Teacher',
        status: true,
      },
      {
        title: 'Elevator Mechanic',
        status: true,
      },
      {
        title: 'Elevator Modernization Superintendent',
        status: true,
      },
      {
        title: 'Elevator Technician',
        status: true,
      },
      {
        title: 'Eligibility Specialist',
        status: true,
      },
      {
        title: 'Eligibility Worker',
        status: true,
      },
      {
        title: 'Email Developer',
        status: true,
      },
      {
        title: 'Email Marketing Associate',
        status: true,
      },
      {
        title: 'Email Marketing Coordinator',
        status: true,
      },
      {
        title: 'Email Marketing Executive',
        status: true,
      },
      {
        title: 'Email Marketing Manager',
        status: true,
      },
      {
        title: 'Email Marketing Specialist',
        status: true,
      },
      {
        title: 'Embalmer',
        status: true,
      },
      {
        title: 'Embedded Developer',
        status: true,
      },
      {
        title: 'Embedded Engineer',
        status: true,
      },
      {
        title: 'Embedded Firmware Developer',
        status: true,
      },
      {
        title: 'Embedded Firmware Engineer',
        status: true,
      },
      {
        title: 'Embedded Software Developer',
        status: true,
      },
      {
        title: 'Embedded Software Engineer',
        status: true,
      },
      {
        title: 'Embedded Systems Engineer',
        status: true,
      },
      {
        title: 'Embroidery Machine Operator',
        status: true,
      },
      {
        title: 'Embryologist',
        status: true,
      },
      {
        title: 'EMC Test Engineer',
        status: true,
      },
      {
        title: 'Emergency Department Technician',
        status: true,
      },
      {
        title: 'Emergency Dispatcher',
        status: true,
      },
      {
        title: 'Emergency Dispatch Operator',
        status: true,
      },
      {
        title: 'Emergency Management Director',
        status: true,
      },
      {
        title: 'Emergency Management Planner',
        status: true,
      },
      {
        title: 'Emergency Management Specialist',
        status: true,
      },
      {
        title: 'Emergency Medical Technician',
        status: true,
      },
      {
        title: 'Emergency Medicine Physician',
        status: true,
      },
      {
        title: 'Emergency Medicine Physician Assistant',
        status: true,
      },
      {
        title: 'Emergency Room Nurse',
        status: true,
      },
      {
        title: 'Emergency Room Technician',
        status: true,
      },
      {
        title: 'Emergency Veterinarian',
        status: true,
      },
      {
        title: 'Emergency Veterinarian Relief',
        status: true,
      },
      {
        title: 'Emergency Veterinary Assistant',
        status: true,
      },
      {
        title: 'Emergency Veterinary Technician',
        status: true,
      },
      {
        title: 'Emerging Leader',
        status: true,
      },
      {
        title: 'Employee Benefits Account Manager',
        status: true,
      },
      {
        title: 'Employee Benefits Sales Representative',
        status: true,
      },
      {
        title: 'Employee Experience Coordinator',
        status: true,
      },
      {
        title: 'Employee Experience Program Manager',
        status: true,
      },
      {
        title: 'Employee Experience Specialist',
        status: true,
      },
      {
        title: 'Employee Relations Consultant',
        status: true,
      },
      {
        title: 'Employee Relations Manager',
        status: true,
      },
      {
        title: 'Employee Relations Specialist',
        status: true,
      },
      {
        title: 'Employee Support Representative',
        status: true,
      },
      {
        title: 'Employee Technology Support Analyst',
        status: true,
      },
      {
        title: 'Employee Libre Service',
        status: true,
      },
      {
        title: 'Employment Attorney',
        status: true,
      },
      {
        title: 'Employment Consultant',
        status: true,
      },
      {
        title: 'Employment Counsellor',
        status: true,
      },
      {
        title: 'Employment Law Attorney',
        status: true,
      },
      {
        title: 'Employment Specialist',
        status: true,
      },
      {
        title: 'Endocrinologist',
        status: true,
      },
      {
        title: 'Endodontist',
        status: true,
      },
      {
        title: 'Endoscopy Technician',
        status: true,
      },
      {
        title: 'Endpoint Security Engineer',
        status: true,
      },
      {
        title: 'End User Computer Analyst',
        status: true,
      },
      {
        title: 'End User Representative',
        status: true,
      },
      {
        title: 'End User Support Technician',
        status: true,
      },
      {
        title: 'End User Technician',
        status: true,
      },
      {
        title: 'Energy Advisor',
        status: true,
      },
      {
        title: 'Energy Analyst',
        status: true,
      },
      {
        title: 'Energy and Sustainability Researcher',
        status: true,
      },
      {
        title: 'Energy Auditor',
        status: true,
      },
      {
        title: 'Energy Consultant',
        status: true,
      },
      {
        title: 'Energy Engineer',
        status: true,
      },
      {
        title: 'Energy Manager',
        status: true,
      },
      {
        title: 'Energy Solutions Sales Representative',
        status: true,
      },
      {
        title: 'Energy & Sustainability Manager',
        status: true,
      },
      {
        title: 'Engagement Coordinator',
        status: true,
      },
      {
        title: 'Engagement Lead',
        status: true,
      },
      {
        title: 'Engagement Manager',
        status: true,
      },
      {
        title: 'Engagement & Retention Marketing Manager',
        status: true,
      },
      {
        title: 'Engagement Specialist',
        status: true,
      },
      {
        title: 'Engineer 3rd Class Power',
        status: true,
      },
      {
        title: 'Engineering Administrator',
        status: true,
      },
      {
        title: 'Engineering and Maintenance Manager',
        status: true,
      },
      {
        title: 'Engineering Assistant',
        status: true,
      },
      {
        title: 'Engineering Consultant',
        status: true,
      },
      {
        title: 'Engineering Coordinator',
        status: true,
      },
      {
        title: 'Engineering Delivery Manager',
        status: true,
      },
      {
        title: 'Engineering Designer',
        status: true,
      },
      {
        title: 'Engineering Director',
        status: true,
      },
      {
        title: 'Engineering Executive',
        status: true,
      },
      {
        title: 'Engineering Intern',
        status: true,
      },
      {
        title: 'Engineering Lab Technician',
        status: true,
      },
      {
        title: 'Engineering Lead',
        status: true,
      },
      {
        title: 'Engineering Manager',
        status: true,
      },
      {
        title: 'Engineering Planner',
        status: true,
      },
      {
        title: 'Engineering Program Manager',
        status: true,
      },
      {
        title: 'Engineering Project Manager',
        status: true,
      },
      {
        title: 'Engineering Recruiter',
        status: true,
      },
      {
        title: 'Engineering Services Manager',
        status: true,
      },
      {
        title: 'Engineering Services S2',
        status: true,
      },
      {
        title: 'Engineering Supervisor',
        status: true,
      },
      {
        title: 'Engineering Teacher',
        status: true,
      },
      {
        title: 'Engineering Team Lead',
        status: true,
      },
      {
        title: 'Engineering Team Leader',
        status: true,
      },
      {
        title: 'Engineering Technician',
        status: true,
      },
      {
        title: 'Engineering Technologist',
        status: true,
      },
      {
        title: 'Engineering Technologist Technician',
        status: true,
      },
      {
        title: 'Engineering Test Technician',
        status: true,
      },
      {
        title: 'Engineer Technician',
        status: true,
      },
      {
        title: 'Engine Programmer',
        status: true,
      },
      {
        title: 'English Editor',
        status: true,
      },
      {
        title: 'English Instructor',
        status: true,
      },
      {
        title: 'English Language Arts Teacher',
        status: true,
      },
      {
        title: 'English Professor',
        status: true,
      },
      {
        title: 'English Teacher',
        status: true,
      },
      {
        title: 'English Tutor',
        status: true,
      },
      {
        title: 'Enologist',
        status: true,
      },
      {
        title: 'Enrichment Coach',
        status: true,
      },
      {
        title: 'Enrolled Agent',
        status: true,
      },
      {
        title: 'Enrollment Advisor',
        status: true,
      },
      {
        title: 'Enrollment Representative',
        status: true,
      },
      {
        title: 'Enrollment Specialist',
        status: true,
      },
      {
        title: 'Enterprise Account Director',
        status: true,
      },
      {
        title: 'Enterprise Account Executive',
        status: true,
      },
      {
        title: 'Enterprise Account Manager',
        status: true,
      },
      {
        title: 'Enterprise Agile Coach',
        status: true,
      },
      {
        title: 'Enterprise Analyst',
        status: true,
      },
      {
        title: 'Enterprise Analytics Service Lead',
        status: true,
      },
      {
        title: 'Enterprise Application Developer',
        status: true,
      },
      {
        title: 'Enterprise Application Specialist',
        status: true,
      },
      {
        title: 'Enterprise Application Support Analyst',
        status: true,
      },
      {
        title: 'Enterprise Architect',
        status: true,
      },
      {
        title: 'Enterprise Associate',
        status: true,
      },
      {
        title: 'Enterprise Business Development Representative',
        status: true,
      },
      {
        title: 'Enterprise Cloud Architect',
        status: true,
      },
      {
        title: 'Enterprise Commerce Specialist',
        status: true,
      },
      {
        title: 'Enterprise Corporate Sales Executive',
        status: true,
      },
      {
        title: 'Enterprise Customer Success Lead',
        status: true,
      },
      {
        title: 'Enterprise Customer Success Manager',
        status: true,
      },
      {
        title: 'Enterprise Data Architect',
        status: true,
      },
      {
        title: 'Enterprise Hardware Repair Datacenter Technician',
        status: true,
      },
      {
        title: 'Enterprise Hardware Repair Field Engineer',
        status: true,
      },
      {
        title: 'Enterprise Installation Apprentice',
        status: true,
      },
      {
        title: 'Enterprise Install Technician',
        status: true,
      },
      {
        title: 'Enterprise Integration Developer',
        status: true,
      },
      {
        title: 'Enterprise Named Account Manager',
        status: true,
      },
      {
        title: 'Enterprise Relationship Manager',
        status: true,
      },
      {
        title: 'Enterprise Renewals Account Manager',
        status: true,
      },
      {
        title: 'Enterprise Sales Account Manager',
        status: true,
      },
      {
        title: 'Enterprise Sales Development Representative',
        status: true,
      },
      {
        title: 'Enterprise Sales Director',
        status: true,
      },
      {
        title: 'Enterprise Sales Engineer',
        status: true,
      },
      {
        title: 'Enterprise Sales Executive',
        status: true,
      },
      {
        title: 'Enterprise Sales Manager',
        status: true,
      },
      {
        title: 'Enterprise Security Architect',
        status: true,
      },
      {
        title: 'Enterprise Software Architect',
        status: true,
      },
      {
        title: 'Enterprise Solution Analyst',
        status: true,
      },
      {
        title: 'Enterprise Solution Architect',
        status: true,
      },
      {
        title: 'Enterprise Solutions Architect',
        status: true,
      },
      {
        title: 'Enterprise Support Consultant',
        status: true,
      },
      {
        title: 'Enterprise Sys Spt',
        status: true,
      },
      {
        title: 'Enterprise Web Application Support Engineer',
        status: true,
      },
      {
        title: 'Entertainer',
        status: true,
      },
      {
        title: 'Entertainment Writer',
        status: true,
      },
      {
        title: 'Entomologist',
        status: true,
      },
      {
        title: 'Entry Writer Coordinator',
        status: true,
      },
      {
        title: 'Environmental Analyst',
        status: true,
      },
      {
        title: 'Environmental Assessment Planner',
        status: true,
      },
      {
        title: 'Environmental Attendant',
        status: true,
      },
      {
        title: 'Environmental Attorney',
        status: true,
      },
      {
        title: 'Environmental Chemist',
        status: true,
      }
    ],
      ["id"]);

  }
}