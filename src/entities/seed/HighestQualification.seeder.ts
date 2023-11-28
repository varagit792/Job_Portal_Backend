import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { HighestQualification } from '../highestQualification.entity';

export default class HighestQualificationSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(HighestQualification);
    await repository.upsert([
      {
        title: 'BBus',
        status: true,
      },
      {
        title: 'BCom',
        status: true,
      },
      {
        title: 'BComGlobal',
        status: true,
      },
      {
        title: 'BEconFin',
        status: true,
      },
      {
        title: 'BBusInfoSys',
        status: true,
      },
      {
        title: 'BBusInfoSys(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BCompSc',
        status: true,
      },
      {
        title: 'BCompSc(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BIT',
        status: true,
      },
      {
        title: 'BIT(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BITInt',
        status: true,
      },
      {
        title: 'BMath',
        status: true,
      },
      {
        title: 'BMathAdv',
        status: true,
      },
      {
        title: 'BMedRadPhys',
        status: true,
      },
      {
        title: 'BMedMath',
        status: true,
      },
      {
        title: 'BMedMath(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BA',
        status: true,
      },
      {
        title: 'BA(DeansSchol)',
        status: true,
      },
      {
        title: 'BCMS',
        status: true,
      },
      {
        title: 'BCMS(DeansSchol) ',
        status: true,
      },
      {
        title: 'BCA',
        status: true,
      },
      {
        title: 'BCA(DeansSchol) ',
        status: true,
      },
      {
        title: 'BIntSt',
        status: true,
      },
      {
        title: 'BIntSt(DeansSchol) ',
        status: true,
      },
      {
        title: 'BJrnl',
        status: true,
      },
      {
        title: 'BPerf',
        status: true,
      },
      {
        title: 'BPerf(DeansSchol) ',
        status: true,
      },
      {
        title: 'BPPE',
        status: true,
      },
      {
        title: 'BPPE(DeansSchol) ',
        status: true,
      },
      {
        title: 'BExSc',
        status: true,
      },
      {
        title: 'BHlthSc(IndigHlth)',
        status: true,
      },
      {
        title: 'BMarSc',
        status: true,
      },
      {
        title: 'BMedHlthSc',
        status: true,
      },
      {
        title: 'BNurse',
        status: true,
      },
      {
        title: 'BNurse(Conversion)',
        status: true,
      },
      {
        title: 'BNurse(OSQualNurses)',
        status: true,
      },
      {
        title: 'BNutrSc',
        status: true,
      },
      {
        title: 'BPreMedScHlth',
        status: true,
      },
      {
        title: 'BSc',
        status: true,
      },
      {
        title: 'BA(Psyc)',
        status: true,
      },
      {
        title: 'BGeog',
        status: true,
      },
      {
        title: 'BPsycSc',
        status: true,
      },
      {
        title: 'BPubHlth',
        status: true,
      },
      {
        title: 'BPubHlth(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BPubHlthNutr',
        status: true,
      },
      {
        title: 'BSocSc',
        status: true,
      },
      {
        title: 'BSocSc(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BSocSc(Psyc)',
        status: true,
      },
      {
        title: 'BSusCommunities',
        status: true,
      },
      {
        title: 'LLB',
        status: true,
      },
      {
        title: 'BExScRehab',
        status: true,
      },
      {
        title: 'BNurseAdv',
        status: true,
      },
      {
        title: 'BEdEarlyYears',
        status: true,
      },
      {
        title: 'BEdEarlyYears(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BHlthPhyEd',
        status: true,
      },
      {
        title: 'BHlthPhyEd(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BMathEd',
        status: true,
      },
      {
        title: 'BMathEd(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BPrimEd',
        status: true,
      },
      {
        title: 'BPrimEd(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BScEd',
        status: true,
      },
      {
        title: 'BScEd(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BSocWork',
        status: true,
      },
      {
        title: 'BComGlobal(Hons)',
        status: true,
      },
      {
        title: 'BCompScGlobal(Hons)',
        status: true,
      },
      {
        title: 'BE(Hons)',
        status: true,
      },
      {
        title: 'BE(Hons)(Schol)',
        status: true,
      },
      {
        title: 'BMathFin(Hons)',
        status: true,
      },
      {
        title: 'BMathFin(Hon)(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BMedRadPhysAdv(Hons)',
        status: true,
      },
      {
        title: 'BScAdv(Hons)(Phys)',
        status: true,
      },
      {
        title: 'BBioNan(Hons)',
        status: true,
      },
      {
        title: 'BBioNan(Hons)(DeansSchol) ',
        status: true,
      },
      {
        title: 'BConsBio(Hons)',
        status: true,
      },
      {
        title: 'BConsBio(Hons)(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BEnvSc(Hons)',
        status: true,
      },
      {
        title: 'BEnvSc(Hons)(DeansSchol) ',
        status: true,
      },
      {
        title: 'BMarSc(Hons)',
        status: true,
      },
      {
        title: 'BMarSc(Hons)(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BMedHlthSc(Hons)(DeansSchol) ',
        status: true,
      },
      {
        title: 'BMedBiotech(Hons)',
        status: true,
      },
      {
        title: 'BMedBiotech(Hons)(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BMedChem(Hons)',
        status: true,
      },
      {
        title: 'BMedChem(Hons)(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BNutrDiet(Hons)',
        status: true,
      },
      {
        title: 'BNutrDiet(Hons)(DeansSchol) ',
        status: true,
      },
      {
        title: 'BHlthPhyEd(Hons)',
        status: true,
      },
      {
        title: 'BPrimEd(Hons)',
        status: true,
      },
      {
        title: 'BPsyc(Hons)',
        status: true,
      },
      {
        title: 'BCom(Hons)',
        status: true,
      },
      {
        title: 'BCompSc(Hons)',
        status: true,
      },
      {
        title: 'BIT(Hons)',
        status: true,
      },
      {
        title: 'BMath(Hons)',
        status: true,
      },
      {
        title: 'BMathAdv(Hons)',
        status: true,
      },
      {
        title: 'BMedMath(Hons)',
        status: true,
      },
      {
        title: 'BSc(Phys)(Hons)',
        status: true,
      },
      {
        title: 'BA(Hons)',
        status: true,
      },
      {
        title: 'BIntSt(Hons)',
        status: true,
      },
      {
        title: 'LLB(Hons)',
        status: true,
      },
      {
        title: 'MBBS(Hons)',
        status: true,
      },
      {
        title: 'BNurse(Hons)',
        status: true,
      },
      {
        title: 'BPsycSc(Hons)',
        status: true,
      },
      {
        title: 'BPubHlth(Hons)',
        status: true,
      },
      {
        title: 'BPubHlthNutr(Hons)',
        status: true,
      },
      {
        title: 'BSocSc(Hons)',
        status: true,
      },
      {
        title: 'BBus-BIT',
        status: true,
      },
      {
        title: 'BCompSc-BSc ',
        status: true,
      },
      {
        title: 'BE(Hons)-BA',
        status: true,
      },
      {
        title: 'BE(Hons)-BCom',
        status: true,
      },
      {
        title: 'BE(Hons)-BCompSc',
        status: true,
      },
      {
        title: 'BE(Hons)-BExSc',
        status: true,
      },
      {
        title: 'BE(Hons)-BMath',
        status: true,
      },
      {
        title: 'BE(Hons)-BSc',
        status: true,
      },
      {
        title: 'BMath-BCompSc',
        status: true,
      },
      {
        title: 'BMath-BSc',
        status: true,
      },
      {
        title: 'BSc(Phys)-BA',
        status: true,
      },
      {
        title: 'BA-BCom ',
        status: true,
      },
      {
        title: 'BA-BCMS',
        status: true,
      },
      {
        title: 'BA-BCMS(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BA-BEcon&Fin',
        status: true,
      },
      {
        title: 'BA-BIntSt',
        status: true,
      },
      {
        title: 'BA-BIntSt(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BA-LLB',
        status: true,
      },
      {
        title: 'BA(Psyc)-LLB',
        status: true,
      },
      {
        title: 'BBusInfoSys-LLB',
        status: true,
      },
      {
        title: 'BCom-LLB',
        status: true,
      },
      {
        title: 'BCMS-BCom',
        status: true,
      },
      {
        title: 'BCMS-BEcon&Fin',
        status: true,
      },
      {
        title: 'BCMS-BIntSt',
        status: true,
      },
      {
        title: 'BCMS-BIntSt(Dean’sSchol)',
        status: true,
      },
      {
        title: 'BCMS-LLB',
        status: true,
      },
      {
        title: 'BCMS-BSc',
        status: true,
      },
      {
        title: 'BCompSc-LLB',
        status: true,
      },
      {
        title: 'BCA-BA',
        status: true,
      },
      {
        title: 'BCA-BCom',
        status: true,
      },
      {
        title: 'BCA-BCMS',
        status: true,
      },
      {
        title: 'BCA-BCompSci',
        status: true,
      },
      {
        title: 'BCA-BIntSt',
        status: true,
      },
      {
        title: 'BCA-BJrnl',
        status: true,
      },
      {
        title: 'BCA-LLB',
        status: true,
      },
      {
        title: 'BCA-BSc',
        status: true,
      },
      {
        title: 'BEcon&Fin-LLB',
        status: true,
      },
      {
        title: 'BE(Hons)-LLB',
        status: true,
      },
      {
        title: 'BIT-LLB',
        status: true,
      },
      {
        title: 'BIntSt-BCom',
        status: true,
      },
      {
        title: 'BIntSt-BEcon&Fin',
        status: true,
      },
      {
        title: 'BIntSt-LLB',
        status: true,
      },
      {
        title: 'BJrnl-BA',
        status: true,
      },
      {
        title: 'BJrnl-BCom',
        status: true,
      },
      {
        title: 'BJrnl-BCMS',
        status: true,
      },
      {
        title: 'BJrnl-BE(Hons)',
        status: true,
      },
      {
        title: 'BJrnl-BIntSt',
        status: true,
      },
      {
        title: 'BJrnl-LLB',
        status: true,
      },
      {
        title: 'BJrnl-BSc',
        status: true,
      },
      {
        title: 'BMath-LLB',
        status: true,
      },
      {
        title: 'BPPE-LLB',
        status: true,
      },
      {
        title: 'BPsycSc-LLB',
        status: true,
      },
      {
        title: 'BSc-LLB',
        status: true,
      },
      {
        title: 'BSc-BA',
        status: true,
      },
      {
        title: 'BSc-BCom',
        status: true,
      },
      {
        title: 'BA(Psyc)-BCom',
        status: true,
      },
      {
        title: 'BPsycSc-BCom',
        status: true,
      },
      {
        title: 'BPsycSc-BSocSc',
        status: true,
      },
      {
        title: 'BPsyc(Hons)-BCom',
        status: true,
      },
      {
        title: 'LLB ',
        status: true,
      },
      {
        title: 'LLB(Hons) ',
        status: true,
      },
      {
        title: 'BA-LLB(Hons) ',
        status: true,
      },
      {
        title: 'BCom-LLB(Hons) ',
        status: true,
      },
      {
        title: 'BCM-LLB(Hons) ',
        status: true,
      },
      {
        title: 'BIntSt-LLB(Hons) ',
        status: true,
      },
      {
        title: 'GCertAppFin',
        status: true,
      },
      {
        title: 'GCertBus',
        status: true,
      },
      {
        title: 'GCertBusCoach',
        status: true,
      },
      {
        title: 'GCertHRM',
        status: true,
      },
      {
        title: 'GCertInno&Entrep',
        status: true,
      },
      {
        title: 'GCertMark',
        status: true,
      },
      {
        title: 'GCertProfAccy',
        status: true,
      },
      {
        title: 'GCertPubRel',
        status: true,
      },
      {
        title: 'GCertComp',
        status: true,
      },
      {
        title: 'GCertElecPowEng',
        status: true,
      },
      {
        title: 'GCertEng',
        status: true,
      },
      {
        title: 'GCertEngAssetMgmt',
        status: true,
      },
      {
        title: 'GCertMathSt',
        status: true,
      },
      {
        title: 'GCertRollStockEng',
        status: true,
      },
      {
        title: 'GCertGlobalCit',
        status: true,
      },
      {
        title: 'GCertLaw(CrimPrac)',
        status: true,
      },
      {
        title: 'GCertMaritimeSt',
        status: true,
      },
      {
        title: 'GCertBiofabrication',
        status: true,
      },
      {
        title: 'GCertDementiaCare',
        status: true,
      },
      {
        title: 'GCertErth&EnviSc',
        status: true,
      },
      {
        title: 'GCertEmergDisasterLead',
        status: true,
      },
      {
        title: 'GCertExRehab',
        status: true,
      },
      {
        title: 'GCertG&RStud',
        status: true,
      },
      {
        title: 'GCertHLM',
        status: true,
      },
      {
        title: 'GCertIndHlth',
        status: true,
      },
      {
        title: 'GCertIndigTrauma&RecPrac',
        status: true,
      },
      {
        title: 'GCertMedEd',
        status: true,
      },
      {
        title: 'GCertMedScHlthRes',
        status: true,
      },
      {
        title: 'GCertMntlHlthNurse',
        status: true,
      },
      {
        title: 'GCertNurse',
        status: true,
      },
      {
        title: 'GCertNut',
        status: true,
      },
      {
        title: 'GCertPrimHlthCare',
        status: true,
      },
      {
        title: 'GCertRegSc',
        status: true,
      },
      {
        title: 'GCertSci',
        status: true,
      },
      {
        title: 'IntGCertSc',
        status: true,
      },
      {
        title: 'GCertEdSt',
        status: true,
      },
      {
        title: 'GCertHlthProm',
        status: true,
      },
      {
        title: 'GCertHlth&PhysEd',
        status: true,
      },
      {
        title: 'GCertPubHlth',
        status: true,
      },
      {
        title: 'GCertTertTLP',
        status: true,
      },
      {
        title: 'GCertTESOL',
        status: true,
      },
      {
        title: 'GCertWHS',
        status: true,
      },
      {
        title: 'GCertAutism',
        status: true,
      },
      {
        title: 'GDipBusCoach',
        status: true,
      },
      {
        title: 'GDipCompSc',
        status: true,
      },
      {
        title: 'GDipEng',
        status: true,
      },
      {
        title: 'GDipMedRadPhys',
        status: true,
      },
      {
        title: 'GDipSc',
        status: true,
      }

    ],
      ["id"]);

  }
}