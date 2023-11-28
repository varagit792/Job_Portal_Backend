import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Course } from '../course.entity';

export default class CourseSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Course);
    await repository.upsert([
      {
        title: 'BCA',
        status: true,
      },
      {
        title: 'BBA',
        status: true,
      },
      {
        title: 'BBM',
        status: true,
      },
      {
        title: 'MCA',
        status: true,
      },
      {
        title: 'MBA',
        status: true,
      },
      {
        title: 'BSE',
        status: true,
      },
      {
        title: 'B.A',
        status: true,
      },
      {
        title: 'B.E',
        status: true,
      },
      {
        title: 'M.ED',
        status: true,
      },
      {
        title: 'B.SC',
        status: true,
      },
      {
        title: 'B.TECH',
        status: true,
      },
      {
        title: 'B.J',
        status: true,
      },
      {
        title: 'M.SC.AG.',
        status: true,
      },
      {
        title: 'M.D',
        status: true,
      },
      {
        title: 'D.LITT.',
        status: true,
      },
      {
        title: 'B.PHARMA.',
        status: true,
      },
      {
        title: 'AICTE',
        status: true,
      },
      {
        title: 'IIT',
        status: true,
      },
      {
        title: 'CERC',
        status: true,
      },
      {
        title: 'IASRI',
        status: true,
      },
      {
        title: 'CBSE',
        status: true,
      },
      {
        title: 'ICSE',
        status: true,
      },
      {
        title: 'PUC',
        status: true,
      },
      {
        title: 'SSC',
        status: true,
      },
      {
        title: 'IEEE',
        status: true,
      },
      {
        title: 'SSLC',
        status: true,
      },
      {
        title: 'NIIT',
        status: true,
      },
      {
        title: 'IIM',
        status: true,
      },
      {
        title: 'BCJ',
        status: true,
      },
      {
        title: 'BDS',
        status: true,
      },
      {
        title: 'AIIMS',
        status: true,
      },
      {
        title: 'AMIE',
        status: true,
      },
      {
        title: 'MME',
        status: true,
      },
      {
        title: 'NIT',
        status: true,
      },
      {
        title: 'PDU',
        status: true,
      },
      {
        title: 'BSM',
        status: true,
      },
      {
        title: 'NDTF',
        status: true,
      },
      {
        title: 'DTE',
        status: true,
      },
      {
        title: 'MBBS',
        status: true,
      },
      {
        title: 'BTC',
        status: true,
      },
      {
        title: 'LLB',
        status: true,
      },
      {
        title: 'FPT',
        status: true,
      },
      {
        title: 'BAMS',
        status: true,
      },
      {
        title: 'BEMS',
        status: true,
      },
      {
        title: 'BME',
        status: true,
      },
      {
        title: 'BIO',
        status: true,
      },
      {
        title: 'MSCIT',
        status: true,
      },
      {
        title: 'IPE',
        status: true,
      },
      {
        title: 'MDU',
        status: true,
      },
      {
        title: 'PGDCA',
        status: true,
      },
      {
        title: 'PGDM',
        status: true,
      },
      {
        title: 'PGT',
        status: true,
      },
      {
        title: 'BHM',
        status: true,
      },
      {
        title: 'BPT',
        status: true,
      },
      {
        title: 'EEE',
        status: true,
      },
      {
        title: 'ECM',
        status: true,
      },
      {
        title: 'EIE',
        status: true,
      },
      {
        title: 'CSE',
        status: true,
      },
      {
        title: 'CPE',
        status: true,
      },
      {
        title: 'CHE',
        status: true,
      },
      {
        title: 'IPA',
        status: true,
      },
      {
        title: 'HSC',
        status: true,
      },
      {
        title: 'CCE',
        status: true,
      },
      {
        title: 'TGT',
        status: true,
      },
      {
        title: 'DOEACC',
        status: true,
      },
      {
        title: 'SOP',
        status: true,
      },
      {
        title: 'RTI',
        status: true,
      },
      {
        title: 'RGPV',
        status: true,
      },
      {
        title: 'BSW',
        status: true,
      },
      {
        title: 'BHMCT',
        status: true,
      },
      {
        title: 'Dr.',
        status: true,
      },
      {
        title: 'BITS',
        status: true,
      },
      {
        title: 'BSI',
        status: true,
      },
      {
        title: 'CIET',
        status: true,
      },
      {
        title: 'CMERI',
        status: true,
      },
      {
        title: 'CSDS',
        status: true,
      },
      {
        title: 'HESI',
        status: true,
      },
      {
        title: 'IAMR',
        status: true,
      },
      {
        title: 'CGPA',
        status: true,
      },
      {
        title: 'IGNCA',
        status: true,
      },
      {
        title: 'ISC',
        status: true,
      },
      {
        title: 'KBE',
        status: true,
      },
      {
        title: 'DCA',
        status: true,
      },
      {
        title: 'GPA',
        status: true,
      },
      {
        title: 'B.Sc.Ag.',
        status: true,
      },
      {
        title: 'BFA',
        status: true,
      },
      {
        title: 'M.S',
        status: true,
      },
      {
        title: 'IETE',
        status: true,
      },
      {
        title: 'B.M',
        status: true,
      },
      {
        title: 'M.A',
        status: true,
      },
      {
        title: 'AME',
        status: true,
      },
      {
        title: 'NID',
        status: true,
      },
      {
        title: 'CCDP',
        status: true,
      },
      {
        title: 'EDCIL',
        status: true,
      },
      {
        title: 'INST',
        status: true,
      },
      {
        title: 'BSBA',
        status: true,
      },
      {
        title: 'BFSc',
        status: true,
      },
      {
        title: 'LLM',
        status: true,
      },
      {
        title: 'M.E',
        status: true,
      },
      {
        title: 'PRT',
        status: true,
      },
      {
        title: 'JNU',
        status: true,
      },
      {
        title: 'CEERI',
        status: true,
      },
      {
        title: 'ETC',
        status: true,
      },
      {
        title: 'DARE',
        status: true,
      },
      {
        title: 'M.M',
        status: true,
      },
      {
        title: 'PTI',
        status: true,
      },
      {
        title: 'CAB',
        status: true,
      },
      {
        title: 'ARWU',
        status: true,
      },
      {
        title: 'B.Phil.',
        status: true,
      },
      {
        title: 'CCNA',
        status: true,
      },
      {
        title: 'CGIAR',
        status: true,
      },
      {
        title: 'M.Com',
        status: true,
      },
      {
        title: 'PESB',
        status: true,
      },
      {
        title: 'FTII',
        status: true,
      },
      {
        title: 'LKG',
        status: true,
      },
      {
        title: 'BLSc.',
        status: true,
      },
      {
        title: 'B.Arch',
        status: true,
      },
      {
        title: 'GGSIPU',
        status: true,
      },
      {
        title: 'CCC',
        status: true,
      },
      {
        title: 'CV',
        status: true,
      },
      {
        title: 'IIIT',
        status: true,
      },
      {
        title: 'BVSc.',
        status: true,
      },
      {
        title: 'BASLP',
        status: true,
      },
      {
        title: 'SSA',
        status: true,
      },
      {
        title: 'IISER',
        status: true,
      },
      {
        title: 'CAZRI',
        status: true,
      },
      {
        title: 'ICAR',
        status: true,
      },
      {
        title: 'D.Sc',
        status: true,
      },
      {
        title: 'BMS',
        status: true,
      },
      {
        title: 'B.Com',
        status: true,
      },
      {
        title: 'CPHERI',
        status: true,
      },
      {
        title: 'NEERI',
        status: true,
      },
      {
        title: 'NLU',
        status: true,
      },
      {
        title: 'CECRI',
        status: true,
      },
      {
        title: 'B.Ed',
        status: true,
      },
      {
        title: 'CSSRI',
        status: true,
      },
      {
        title: 'ISI',
        status: true,
      },
      {
        title: 'DST',
        status: true,
      },
      {
        title: 'FORE',
        status: true,
      },
      {
        title: 'M.Tech',
        status: true,
      },
      {
        title: 'ACED',
        status: true,
      },
      {
        title: 'M.J',
        status: true,
      },
      {
        title: 'M.Arch',
        status: true,
      },
      {
        title: 'TSA',
        status: true,
      },
      {
        title: 'SE',
        status: true,
      },
      {
        title: 'IPCC',
        status: true,
      },
      {
        title: 'BPE',
        status: true,
      },
      {
        title: 'CSIS',
        status: true,
      },
      {
        title: 'IIHM',
        status: true,
      },
      {
        title: 'SERB',
        status: true,
      },
      {
        title: 'NITS',
        status: true,
      },
      {
        title: 'DASA',
        status: true,
      },
      {
        title: 'INSA',
        status: true,
      },
      {
        title: 'IFI',
        status: true,
      },
      {
        title: 'EFA',
        status: true,
      },
      {
        title: 'DLO',
        status: true,
      },
      {
        title: 'CSMCRI',
        status: true,
      },
      {
        title: 'BMC',
        status: true,
      },
      {
        title: 'BHMS',
        status: true,
      },
      {
        title: 'HPU',
        status: true,
      },
      {
        title: 'CLAWS',
        status: true,
      },
      {
        title: 'NISTADS',
        status: true,
      },
      {
        title: 'ECA',
        status: true,
      },
      {
        title: 'DMRT',
        status: true,
      },
      {
        title: 'DBT',
        status: true,
      },
      {
        title: 'IGNOU',
        status: true,
      },
      {
        title: 'GSI',
        status: true,
      },
      {
        title: 'JIPMER',
        status: true,
      },
      {
        title: 'CRIDA',
        status: true,
      },
      {
        title: 'NIEPA',
        status: true,
      },
      {
        title: 'NCBE',
        status: true,
      },
      {
        title: 'IIAS',
        status: true,
      },
      {
        title: 'ERNET',
        status: true,
      },
      {
        title: 'NCCS',
        status: true,
      },
      {
        title: 'SRIHER',
        status: true,
      },
      {
        title: 'UCEK',
        status: true,
      },
      {
        title: 'VMRF',
        status: true,
      },
      {
        title: 'MAMC',
        status: true,
      },
      {
        title: 'CMC',
        status: true,
      },
      {
        title: 'GSMC',
        status: true,
      },
      {
        title: 'KEM',
        status: true,
      },
      {
        title: 'PIMS',
        status: true,
      },
      {
        title: 'SVMCHRC',
        status: true,
      },
      {
        title: 'MAHER',
        status: true,
      },
      {
        title: 'DNB',
        status: true,
      },
      {
        title: 'GIAN',
        status: true,
      },
      {
        title: 'JAIIB',
        status: true,
      },
      {
        title: 'IELTS',
        status: true,
      },
      {
        title: 'AFMC',
        status: true,
      },
      {
        title: 'MGMCRI',
        status: true,
      },
      {
        title: 'COMEDK',
        status: true,
      },
      {
        title: 'NEP',
        status: true,
      },
      {
        title: 'DPEP',
        status: true,
      },
      {
        title: 'TIFR',
        status: true,
      },
      {
        title: 'NCTE',
        status: true,
      },
      {
        title: 'PhD',
        status: true,
      },
      {
        title: 'IBSE',
        status: true,
      },
      {
        title: 'NIST',
        status: true,
      },
      {
        title: 'MIT',
        status: true,
      },
      {
        title: 'IGIDS',
        status: true,
      },
      {
        title: 'IIP',
        status: true,
      },
      {
        title: 'CIHTS',
        status: true,
      },
      {
        title: 'MAKAIAS',
        status: true,
      },
      {
        title: 'DSSC',
        status: true,
      },
      {
        title: 'IIFM',
        status: true,
      },
      {
        title: 'NISM',
        status: true,
      },
      {
        title: 'IIFPT',
        status: true,
      },
      {
        title: 'NIFTEM',
        status: true,
      },
      {
        title: 'CTSA',
        status: true,
      },
      {
        title: 'DEB',
        status: true,
      },
      {
        title: 'LBSNAA',
        status: true,
      },
      {
        title: 'JKSBSE',
        status: true,
      },
      {
        title: 'HPBOSE',
        status: true,
      },
      {
        title: 'CGBSE',
        status: true,
      },
      {
        title: 'PSEB',
        status: true,
      },
      {
        title: 'HBSE',
        status: true,
      },
      {
        title: 'CISCE',
        status: true,
      },
      {
        title: 'NIOS',
        status: true,
      },
      {
        title: 'BSEB',
        status: true,
      },
      {
        title: 'MSBSHSE',
        status: true,
      },
      {
        title: 'WBBSE',
        status: true,
      },
      {
        title: 'WBCHSE',
        status: true,
      },
      {
        title: 'WBBPE',
        status: true,
      },
      {
        title: 'MPBSE',
        status: true,
      },
      {
        title: 'WBBME',
        status: true,
      },
      {
        title: 'WBSCTE',
        status: true,
      },
      {
        title: 'WBSCT&VE&SD',
        status: true,
      },
      {
        title: 'JAC',
        status: true,
      },
      {
        title: 'TSBIE',
        status: true,
      },
      {
        title: 'UBSE',
        status: true,
      },
      {
        title: 'NBSE',
        status: true,
      },
      {
        title: 'SCERT',
        status: true,
      },
      {
        title: 'TBSE',
        status: true,
      },
      {
        title: 'MBOSE',
        status: true,
      },
      {
        title: 'UPMSP',
        status: true,
      },
      {
        title: 'IGCSE',
        status: true,
      },
      {
        title: 'JMI',
        status: true,
      },
      {
        title: 'AMU',
        status: true,
      },
      {
        title: 'GKV',
        status: true,
      },
      {
        title: 'WBCROS',
        status: true,
      },
      {
        title: 'RSOS',
        status: true,
      },
      {
        title: 'BSER',
        status: true,
      },
      {
        title: 'CHSE',
        status: true,
      },
      {
        title: 'KBPE',
        status: true,
      },
      {
        title: 'JKSOS',
        status: true,
      },
      {
        title: 'BIEC',
        status: true,
      },
      {
        title: 'AHSEC',
        status: true,
      },
      {
        title: 'BIEAP',
        status: true,
      },
      {
        title: 'MAKAUT',
        status: true,
      },
      {
        title: 'JBT',
        status: true,
      }

    ],
      ["id"]);

  }
}