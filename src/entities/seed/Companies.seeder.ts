import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Companies } from '../companies.entity';

export default class CompaniesSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Companies);
    await repository.upsert([
      {
        title: "TCS",
        companyDescription: "Tata Consultancy Services",
        //jobs: 5,           
        employeeCount:50000,
        rating:4.5, 
        reviews: 7500,
        location:[{id:1},{id:3}]
      },
      {
        title: "Infosys",
        companyDescription: "Infosys Ltd",
             //jobs:6,             
        employeeCount:50000, 
        rating:4, 
        reviews: 6500,
        location: [{ id: 5 }, { id: 9}]
      },
      {
        title: "Capgemini",
        companyDescription: "Capgemini consulting services",
             //jobs:7,             
        employeeCount:50000, 
        rating:3.5, 
        reviews: 7800,
        location: [{ id: 3 }, { id: 6 }]
      },
      {
        title: "Value Labs",
        companyDescription: "Value Labs LLP",
             //jobs:3,             
        employeeCount:50000, 
        rating:2.5, 
        reviews: 6600,
        location: [{ id: 1 }, { id: 3 }]
      },
      // {
      //   title: "Ratna Global Tech",
      //   companyDescription: "Ratna Global Tech",
      //        //jobs:9,             
      //   employeeCount:50000, 
      //   rating:4.5, 
      //   reviews: 2500,
      //   location: [{ id: 1 }, { id: 3 }]
      // },
      {
        title: "Value Labs",
        companyDescription: "Value Labs LLP",
             //jobs:6,             
        employeeCount:50000, 
        rating:3.5, 
        reviews: 5500,
        location: [{ id: 10 }, { id: 13 }]
      },
      {
        title: "Capgemini",
        companyDescription: "Capgemini consulting services",
             //jobs:2,             
        employeeCount:50000, 
        rating:4.5, 
        reviews:3400
       },
      {
        title: "Infosys",
        companyDescription: "Infosys Ltd",
             //jobs:3,             
        employeeCount:50000, 
        rating:1.5, 
        reviews:6500
       },
      {
        title: "ABB",
        companyDescription: "ABB Limited",
        status: true, 
        //jobs:5,        
        employeeCount:50000, 
        rating:3.5, 
        reviews:5500
       },
      {
        title: "NCR",
        companyDescription: "NCR",
        status: true, 
        //jobs:7,        
        employeeCount:50000, 
        rating:4, 
        reviews:8500
       },
      {
        title: "Oracle",
        companyDescription: "Oracle Pvt Ltd",
        status: true, 
        //jobs:10,        
        employeeCount:50000,
        rating:4.5, 
        reviews:9500      
      },
        {
          title: ' ANDHRA BANK',
          status: true,
        },
        {
          title: 'NIPPON KOEI CO LTD',
          status: true,
        },
        {
          title: 'UNIVERSAL ASIA LIMITED',
          status: true,
        },
        {
          title: 'TELECRUZ TECHNOLOGY INC',
          status: true,
        },
        {
          title: 'TYCO HEALTHCARE PTE LTD',
          status: true,
        },
        {
          title: 'QUANTUM CONSULTANTS INC',
          status: true,
        },
        {
          title: 'SERCK CONTROLS LIMITED',
          status: true,
        },
        {
          title: 'DIMON INTERNATIONAL U K LTD',
          status: true,
        },
        {
          title: 'PERRIGO INTERNATIONAL INC',
          status: true,
        },
        {
          title: 'M+W SINGAPORE PTE.LTD.',
          status: true,
        },
        {
          title: 'OVERSEAS DEVELOPMENT INSTITUTE',
          status: true,
        },
        {
          title: 'AISIN ENGINEERING CO LTD',
          status: true,
        },
        {
          title: 'PRAIRIE ENGINEERING INC.',
          status: true,
        },
        {
          title: 'PARAGON GEOPHYSICAL SERVICES INC',
          status: true,
        },
        {
          title: 'DURO FELGUERA S.A.',
          status: true,
        },
        {
          title: 'NISHIMATSU CONSTRUCTION COMPANY LIMITED',
          status: true,
        },
        {
          title: 'ACCURATE GROUP INC',
          status: true,
        },
        {
          title: 'DAEWOONG PHARMACEUTICAL CO. LTD',
          status: true,
        },
        {
          title: 'MSYS INC',
          status: true,
        },
        {
          title: 'VANDERLANDE INDUSTRIES B.V.',
          status: true,
        },
        {
          title: 'ALLSEAS MARINE CONTRACTORS SA',
          status: true,
        },
        {
          title: 'OBJECT TECHNOLOGY SOLUTIONS INC.',
          status: true,
        },
        {
          title: 'UNITED MICROELECTRONICS (EUROPE) BV',
          status: true,
        },
        {
          title: 'NIPPON JOGESUIDO SEKKEI CO LTD',
          status: true,
        },
        {
          title: 'TMEIC INTERNATIONAL CORPORATION',
          status: true,
        },
        {
          title: 'HEARTCOM INC.',
          status: true,
        },
        {
          title: 'LUMERIS INC.',
          status: true,
        },
        {
          title: 'ZOHL INDUSTRIES SDN BHD',
          status: true,
        },
        {
          title: 'SPG MEDIA LTD.',
          status: true,
        },
        {
          title: 'SAAHI SYSTEMS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CATERPILLAR GLOBAL MINING EUROPE GMBH',
          status: true,
        },
        {
          title: 'GOLD CRM COSULTING L.L.C.',
          status: true,
        },
        {
          title: 'AAES ENGINEERING INC.',
          status: true,
        },
        {
          title: 'UNIVERSAL LEAF TOBACCO COMPANY INCORPORATED',
          status: true,
        },
        {
          title: 'SHELADIA ASSOCIATES INC',
          status: true,
        },
        {
          title: 'GHD PTY LTD',
          status: true,
        },
        {
          title: 'NATIONAL TITANIUM DIOXIDE CO. LTD. (CRYSTAL)',
          status: true,
        },
        {
          title: 'HENNECKE ASIA PTE. LTD',
          status: true,
        },
        {
          title: 'TOSHIBA PLANT SYSTEMS AND SERVICES CORPORATION',
          status: true,
        },
        {
          title: 'TRAIDCRAFT EXCHANGE',
          status: true,
        },
        {
          title: 'ULVAC INC',
          status: true,
        },
        {
          title: 'GC ASIA DENTAL PTE LTD',
          status: true,
        },
        {
          title: 'MIDAS PHARMA GMBH',
          status: true,
        },
        {
          title: 'REDEX',
          status: true,
        },
        {
          title: 'ALLIANCE ONE INTERNATIONAL SERVICES LIMITED',
          status: true,
        },
        {
          title: 'VIJAYA ENTERPRISES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CAMECO INDIA LIMITED',
          status: true,
        },
        {
          title: 'MAGMA ENGINEERING ASIA-PACIFIC PTE LTD',
          status: true,
        },
        {
          title: 'QUMU CORPORATION',
          status: true,
        },
        {
          title: 'NARAYANA LEARNING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RITVIK EXTRACTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'P & C TECHNOLOGIES COMPANY LIMITED',
          status: true,
        },
        {
          title: 'MACE MACRO (ASIA PACIFIC) LIMITED',
          status: true,
        },
        {
          title: 'LOCKHEED MARTIN TAS INTERNATIONAL CORPORATION',
          status: true,
        },
        {
          title: 'CIEE',
          status: true,
        },
        {
          title: 'EDINBURG NAPIER UNIVERSITY',
          status: true,
        },
        {
          title: 'MICROSOL INTERNATIONAL LL FZE',
          status: true,
        },
        {
          title: 'ARABIAN TRADING SUPPLIES COMPANY LIMITED',
          status: true,
        },
        {
          title: 'KOSAN CRISPLANT A S',
          status: true,
        },
        {
          title: 'CHEMO AG',
          status: true,
        },
        {
          title: 'OSAKA SEIMITSU KIKAI CO LTD',
          status: true,
        },
        {
          title: 'OPERATION EYESIGHT UNIVERSAL',
          status: true,
        },
        {
          title: 'VISAKHA MEDIGNOSTICS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GENESEO COMMUNICATIONS INC',
          status: true,
        },
        {
          title: 'HIDADA CONTRACTING COMPANY LIMITED',
          status: true,
        },
        {
          title: 'FMC TECHNOLOGIES SINGAPORE PTE LTD',
          status: true,
        },
        {
          title: 'JAPAN INTERNATIONAL CONSULTANTS FOR TRANSPORTATION COMPANY LIMITED',
          status: true,
        },
        {
          title: 'DESMI PUMPING TECHNOLOGY AS',
          status: true,
        },
        {
          title: 'JAPAN RAILWAY TECHNICAL SERVICE',
          status: true,
        },
        {
          title: 'TOKYO ELECTRIC POWER SERVICES COMPANY LIMITED',
          status: true,
        },
        {
          title: 'REFRATECHNIK STEEL GMBH',
          status: true,
        },
        {
          title: 'PACKWIN PACKAGES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CRYSTAL DOT SCAN PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RAJ CLASSIC FOODS LIMITED',
          status: true,
        },
        {
          title: 'NAGARJUNA AGRI-TECH LIMITED',
          status: true,
        },
        {
          title: 'ADVANTA LIMITED',
          status: true,
        },
        {
          title: 'KAVERI SEED COMPANY LTD.',
          status: true,
        },
        {
          title: 'CLASSIC MUSHROOMS LIMITED',
          status: true,
        },
        {
          title: 'DECCAN CHRONICLE RAJAHMUNDRY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ANDHRA SHIP BREAKERS PVTLTD',
          status: true,
        },
        {
          title: 'SREE VICTORY SHRIMP PRODUCTS PVT LTD',
          status: true,
        },
        {
          title: 'KURAPATI REAL ESTATES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VENKATESWARA COLD STORAGE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'JAYANTI BOARDS LIMITED',
          status: true,
        },
        {
          title: 'RAINBOW HOLOGRAPHIX PVT LTD',
          status: true,
        },
        {
          title: 'LISA AMPOULES & VIALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VTC PNEUMACH TECHNOLOGIES LTD.',
          status: true,
        },
        {
          title: 'GENERA AGRI CORP LIMITED',
          status: true,
        },
        {
          title: 'VEL-WHITE HORSE DISTILLERIES PVT LTD',
          status: true,
        },
        {
          title: 'SSF LIMITED',
          status: true,
        },
        {
          title: 'THE WATERBASE LIMITED',
          status: true,
        },
        {
          title: 'ROYCE MARINE PRODUCTS LTD',
          status: true,
        },
        {
          title: 'SHARAT INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'SUVARNA AQUA FARMS & EXPORTS LIMITED',
          status: true,
        },
        {
          title: 'TEKNOMIN AQUA EXPORTS (INDIA) LIMITED',
          status: true,
        },
        {
          title: 'NYLOFILS INDIA LIMITED',
          status: true,
        },
        {
          title: 'COROMANDAL BIOTECH INDUSTRIES (INDIA) LIMITED',
          status: true,
        },
        {
          title: 'VSF PROJECTS LIMITED',
          status: true,
        },
        {
          title: 'BKV INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'ACQUAINT EXPORTS LTD.',
          status: true,
        },
        {
          title: 'REKHA AGRIPLAS LIMITED',
          status: true,
        },
        {
          title: 'ROOPA INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'LINERS INDIA LIMITED',
          status: true,
        },
        {
          title: 'NMDC LIMITED',
          status: true,
        },
        {
          title: 'JOHNMEYERS GRANITE LIMITED',
          status: true,
        },
        {
          title: 'RAVILEELA GRANITES LIMITED',
          status: true,
        },
        {
          title: 'YANTRA NATURAL RESOURCES LIMITED',
          status: true,
        },
        {
          title: 'CCL PRODUCTS (INDIA) LIMITED',
          status: true,
        },
        {
          title: 'G.P INDUSTRIES AND INFRASTRUCTURES LIMITED',
          status: true,
        },
        {
          title: 'SHREE SHAKTHI AGRO OILS LIMITED',
          status: true,
        },
        {
          title: 'GOLDEN AGRO TECH INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'BALAJI AGRO OILS LIMITED',
          status: true,
        },
        {
          title: 'LOTUS CHOCOLATE COMPANY LTD.',
          status: true,
        },
        {
          title: 'MILK PARTNERS INDIA LIMITED',
          status: true,
        },
        {
          title: 'KUSALAVA FINANCE LIMITED',
          status: true,
        },
        {
          title: 'REPUTE PLASTIC COLOURS LTD',
          status: true,
        },
        {
          title: 'DELTA PAPER MILLS LTD',
          status: true,
        },
        {
          title: 'THE ANDHRA SUGARS LIMITED',
          status: true,
        },
        {
          title: 'ANDHRA PRADESH STATE CIVIL SUPPLIES CORPN LTD',
          status: true,
        },
        {
          title: 'DILIGENT INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'KBC CONCRETES (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'AVANTI FEEDS LIMITED',
          status: true,
        },
        {
          title: 'STARLITE GLOBAL ENTERPRISES (INDIA) LIMITED.',
          status: true,
        },
        {
          title: 'SANGHI POLYESTERS LIMITED',
          status: true,
        },
        {
          title: 'THE RAYALASEEMA MILLS LIMITED',
          status: true,
        },
        {
          title: 'CHEBROLU HANUMAIAH AND BROTHERS PVT LTD',
          status: true,
        },
        {
          title: 'SARITA SYNTHETICS AND INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'NUCON INDUSTRIES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SARVARAYA TEXTILES LTD',
          status: true,
        },
        {
          title: 'SURYA LAKSHMI COTTON MILLS LTD',
          status: true,
        },
        {
          title: 'BIT CORP PVT LTD',
          status: true,
        },
        {
          title: 'SHESHADRI INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'ADITYA SPINNERS LIMITED',
          status: true,
        },
        {
          title: 'KUMARS COTEX LIMITED',
          status: true,
        },
        {
          title: 'KALLAM SPINNING MILLS LTD',
          status: true,
        },
        {
          title: 'RITESH EXPORTS LIMITED',
          status: true,
        },
        {
          title: 'SREE SATYANARAYANA SPINNING MILLS LTD',
          status: true,
        },
        {
          title: 'GTN INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'BOMMIDALA BROTHERS PRIVATE LTD',
          status: true,
        },
        {
          title: 'AVANTI LEATHERS LIMITED',
          status: true,
        },
        {
          title: 'ANDHRA PRADESH TANNERIES LTD',
          status: true,
        },
        {
          title: 'DOMESTO PVT LTD',
          status: true,
        },
        {
          title: 'K RAMABRAHMAM AND SONS PVT LTD',
          status: true,
        },
        {
          title: 'RITEWAYS PVT LTD',
          status: true,
        },
        {
          title: 'RIPLEY & COMPANY LIMITED',
          status: true,
        },
        {
          title: 'THE BEZWADA METAL AND STEEL INDUSTRIES LTD',
          status: true,
        },
        {
          title: 'INTERNATIONAL PAPER APPM LIMITED',
          status: true,
        },
        {
          title: 'NAYAGARA PAPER PRODUCTS (INDIA) LIMITED',
          status: true,
        },
        {
          title: 'SRI MAHABIR COMPANY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KOWTHA BUSINESS SYNDICATE (K.B.S.) PVT LTD',
          status: true,
        },
        {
          title: 'ANDHRA SCIENTIFIC CO LIMITED',
          status: true,
        },
        {
          title: 'APOLLO PUBLISHERS LIMITED',
          status: true,
        },
        {
          title: 'TELLABODU CO PVT LTD',
          status: true,
        },
        {
          title: 'HINDUPUR MUTUAL BENEFIT PERMANENT FUND LTD',
          status: true,
        },
        {
          title: 'ADONI ARYA VYSYA FUND LTD',
          status: true,
        },
        {
          title: 'NAGARJUNA OIL REFINERY LIMITED',
          status: true,
        },
        {
          title: 'THE ANDHRA PETROCHEMICALS LIMITED',
          status: true,
        },
        {
          title: 'SREE RAYALASEEMA ALKALIES AND ALLIED CHEMICALS LTD',
          status: true,
        },
        {
          title: 'APT LABS LIMITED',
          status: true,
        },
        {
          title: 'ALUFLUORIDE LTD',
          status: true,
        },
        {
          title: 'ORTIN LABORATORIES LTD.',
          status: true,
        },
        {
          title: 'EMPEE SUGARS AND CHEMICALS LIMITED',
          status: true,
        },
        {
          title: 'STILBENE CHEMICALS LIMITED',
          status: true,
        },
        {
          title: 'SREE RAYALASEEMA HI-STRENGTH HYPO LIMITED',
          status: true,
        },
        {
          title: 'BIMLIPATAM AND CALINGAPATNAM JUTE BALLING CO LTD',
          status: true,
        },
        {
          title: 'PIONEER DISTILLERIES LIMITED',
          status: true,
        },
        {
          title: 'SEA LION OFFSHORE DIVING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ADVANCED GUARDS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CHEMCEL BIO-TECH LIMITED',
          status: true,
        },
        {
          title: 'PRAVAAS REALTY MANAGEMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NAGARJUNA FERTILIZERS AND CHEMICALS LIMITED',
          status: true,
        },
        {
          title: 'BHAGIRADHA CHEMICALS AND INDUSTRIES LTD.',
          status: true,
        },
        {
          title: 'CHALLA ENTERTAINMENTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'TRANS MEDICARE LIMITED',
          status: true,
        },
        {
          title: 'SIGACHI LABORATORIES LIMITED',
          status: true,
        },
        {
          title: 'DEWDILIGENT CONSULTANCY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PFIMEX PHARMACEUTICALS LIMITED',
          status: true,
        },
        {
          title: 'SOURCE NATURAL FOODS AND HERBAL SUPPLEMENTS LIMITED',
          status: true,
        },
        {
          title: 'ASHOMECH ENGINEERING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ANILMAHESH CORPORATE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CONNECTWEL DISTRIBUTOR CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'V CARE COLD STORAGE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FAIRLINKS MARRIAGES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SURCOT INDUSTRIES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'STANDARD MEDICAL & PHARMACEUTICALS LIMITED',
          status: true,
        },
        {
          title: 'SMS PHARMACEUTICALS LIMITED',
          status: true,
        },
        {
          title: 'SAAMYA BIOTECH (INDIA) LIMITED',
          status: true,
        },
        {
          title: 'AMBICA AGARBATHIES AROMA & INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'GULF OIL CORPORATION LIMITED',
          status: true,
        },
        {
          title: 'NILE LIMITED',
          status: true,
        },
        {
          title: 'HINDUSTAN FLUORO CARBONS LTD.',
          status: true,
        },
        {
          title: 'KLJ PLASTICS LIMITED',
          status: true,
        },
        {
          title: 'MARUTI PLASTICS LTD',
          status: true,
        },
        {
          title: 'RAJ PACKAGING INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'TECHTRAN POLYLENSES LTD',
          status: true,
        },
        {
          title: 'REGENCY CERAMICS LTD',
          status: true,
        },
        {
          title: 'PANYAM CEMENTS AND MINERAL INDUSTRTIES LIMITED',
          status: true,
        },
        {
          title: 'P R CEMENTS LTD',
          status: true,
        },
        {
          title: 'KURNOOL INSTITUTE OF ONCOLOGY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ANDHRA CEMENTS LIMITED',
          status: true,
        },
        {
          title: 'SRI CHAKRA CEMENT LIMITED',
          status: true,
        },
        {
          title: 'HEMADRI CEMENTS LTD',
          status: true,
        },
        {
          title: 'PRISM CEMENT LIMITED',
          status: true,
        },
        {
          title: 'MARK RITE ADVISORY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NEAS IT SOLUTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SK TALENTTRACE STAFFING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ATR AGRO TRADE CENTRE (GUNTUR) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ZENOTECH LABORATORIES LIMITED',
          status: true,
        },
        {
          title: 'SRI MEGHANA CONSULTANCY SERVICES (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VBC FERRO ALLOYS LTD',
          status: true,
        },
        {
          title: 'FACOR ALLOYS LIMITED',
          status: true,
        },
        {
          title: 'METKORE ALLOYS & INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'NARAYANA ENGINEERING ENERGY ENVIRONMENT ',
          status: true,
        },
        {
          title: 'MANAGEMENT & TECHNICAL SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI PRAGNAYA SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'TOUCH OF MERCY FOR POOR CHILDREN FOUNDATION',
          status: true,
        },
        {
          title: 'SUDHA MONEY CHANGERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SOUTHERN INSPECTION SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NEO HOSPITALITY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'IN BEAUTY HAIR PRODUCTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MOBE HAIR PROCESSORS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VIDYUT SHAVING PRODUCTS LTD.',
          status: true,
        },
        {
          title: 'PENNAR INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'NELCAST LIMITED',
          status: true,
        },
        {
          title: 'SRINIVASA FERRO ALLOYS LTD',
          status: true,
        },
        {
          title: 'KUMARS METALLURGICAL CORPORATION LTD',
          status: true,
        },
        {
          title: 'BS LIMITED',
          status: true,
        },
        {
          title: 'VIGILANT PROTECTION FORCE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BHAGYANAGAR INDIA LIMITED',
          status: true,
        },
        {
          title: 'PIONEER ALLOY CASTINGS LTD',
          status: true,
        },
        {
          title: 'JAYR HEALTHTECH PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ST. ANTONIO MANAGEMENT SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'COROMANDEL HAIR N SKIN PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'JOCIL LIMITED',
          status: true,
        },
        {
          title: 'VIJAYAWADA BOTTLING COMPANY LTD',
          status: true,
        },
        {
          title: 'ITHUS PRIDE COMMUNICATIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BARTRONICS INDIA LIMITED',
          status: true,
        },
        {
          title: 'MATRA KAUSHAL ENTERPRISE LIMITED',
          status: true,
        },
        {
          title: 'GEM CABLES AND CONDUCTORS LTD.',
          status: true,
        },
        {
          title: 'PAARYA CONSULTING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'AMARA RAJA BATTERIES LIMITED',
          status: true,
        },
        {
          title: 'KHAITAN ELECTRICALS LIMITED',
          status: true,
        },
        {
          title: 'CONSORTEX KARL DOELITZSCH (INDIA) LIMITED',
          status: true,
        },
        {
          title: 'INCAP LIMITED',
          status: true,
        },
        {
          title: 'SEEMA COMMUNICATIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NCL INDUSTRIES LTD',
          status: true,
        },
        {
          title: 'SIBAR AUTO PARTS LTD',
          status: true,
        },
        {
          title: 'PEOPLE PULSE ANALYSIS INDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RADIX INDUSTRIES (INDIA) LIMITED',
          status: true,
        },
        {
          title: 'BGR ENERGY SYSTEMS LIMITED',
          status: true,
        },
        {
          title: 'TAJ GVK HOTELS AND RESORTS LIMITED',
          status: true,
        },
        {
          title: 'ERGON POWER CORPORATION LIMITED',
          status: true,
        },
        {
          title: 'AXIS RAIL INDIA LIMITED',
          status: true,
        },
        {
          title: 'SETHI ENGINEERS AND FOUNDRY LIMITED',
          status: true,
        },
        {
          title: 'MANJEERA CONSTRUCTIONS LTD',
          status: true,
        },
        {
          title: 'SAFIRE GLOBAL MEDICARE LIMITED',
          status: true,
        },
        {
          title: 'PRAJAY ENGINEERS SYNDICATE LTD',
          status: true,
        },
        {
          title: 'IVRCL LIMITED',
          status: true,
        },
        {
          title: 'IL&FS ENGINEERING AND CONSTRUCTION COMPANY LIMITED',
          status: true,
        },
        {
          title: 'VISAKHA IT PARK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KSK ENERGY VENTURES LIMITED',
          status: true,
        },
        {
          title: 'SMILAX INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'JAY MAHESH INFRAVENTURES LIMITED',
          status: true,
        },
        {
          title: 'SUVIDHA SAFETY SOLUTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'STAGE AGRI ESTATE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SOWBHAGYA MEDIA LIMITED',
          status: true,
        },
        {
          title: 'FORCE AGRI ESTATE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PRESENT AGRI ESTATE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SHALOM SECURITY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SREE AKKAMAMBA TEXTILES LTD',
          status: true,
        },
        {
          title: 'DEVESHI RECRUITMENT SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GRK HOMES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SAI-RAMS INNOMATIONS(INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ENDOLIFE SPECIALITY HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SIRI DIGITAL NETWORK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ARC OFFSHORE INDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SINGARENI HOME ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VASAVI FOUNDATION FOR EMPOWERMENT',
          status: true,
        },
        {
          title: 'AJAY FOUNDATION',
          status: true,
        },
        {
          title: 'CITIZEN FORCE FOUNDATION FOR CITIZENS',
          status: true,
        },
        {
          title: 'MEDIA3 INTERNATIONAL PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SABARI ENGINEERING CONTRACTORS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SHRI VISHNU PAHARA SECURITY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'WISTARIA HR SOLUTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ATR AGRO TRADE CENTRE (VIZIANAGARAM) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'AVR TECHNOCRATS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SAMSUNS CONSULTING SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'V-BOND HOME SOLUTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KWALITY WALLCOATINGS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SHARDA AGRO INDUSTRIES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NEOMANTRA FINANCIAL CONSULTANCY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ATLURI CAREER CONSULTANCY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FIRST INFORMATION REPORTING MEDIA (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SYAMA SUNDARA SHELTERS AND ABODES',
          status: true,
        },
        {
          title: 'VICEROY HOTELS LIMITED',
          status: true,
        },
        {
          title: 'SAYEE SAMARDHA MARKETING SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'COASTAL CORPORATION LIMITED',
          status: true,
        },
        {
          title: 'KPR TELEPRODUCTS LIMITED',
          status: true,
        },
        {
          title: 'ANJANI FOODS LIMITED',
          status: true,
        },
        {
          title: 'MERAUX TECHNOSYS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ABHYAS HUMAN RESOURCE DEVELOPMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SAI KAVALI CONVERGENCE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'V R EDUCATION CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'LAKSHMI FINANCE AND INDUSTRIAL CORPORATION LTD',
          status: true,
        },
        {
          title: 'SERVQUAL HOME DELIVERY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'EMIN PEST SOLUTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FRONTVIEW SECURITY & DETECTIVE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SAIRISHI ENTERPRISES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI CHANDRASHEKARA COLD STORAGE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NAOLIN CAPITAL SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI SNEHA TECHNO MARKETING PRIVATE LIMITED',
          status: true,
        },
        {
          title: '21ST CENTURY CABLE NETWORK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DHANWANTI INVESTMENT LIMITED',
          status: true,
        },
        {
          title: 'IKF FINANCE LIMITED',
          status: true,
        },
        {
          title: 'PASIDI CHIT FUND PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DOLPHIN FINANCE AND INVESTMENT COMPANY LIMITED',
          status: true,
        },
        {
          title: 'NAGARJUNA FINANCE LTD',
          status: true,
        },
        {
          title: 'B.N. RATHI SECURITIES LIMITED',
          status: true,
        },
        {
          title: 'BHAAGYALAKSHMI VEGETABLE PRODUCTS LIMITED',
          status: true,
        },
        {
          title: 'DFL FINANCE LIMITED',
          status: true,
        },
        {
          title: 'INANI SECURITIES LIMITED',
          status: true,
        },
        {
          title: 'BNR UDYOG LIMITED',
          status: true,
        },
        {
          title: 'NIHAR INFO GLOBAL LIMITED',
          status: true,
        },
        {
          title: 'NOVEL PATENT SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FINCON TAXATION AND SOLUTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MYTHREYA CHIT FUNDS INDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BIOPRIST PHARMACEUTICALS LIMITED',
          status: true,
        },
        {
          title: 'MEGA SATELLITE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'THIRDEYE FIN MARKETING AND SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'JEEVANA SREE COLD STORAGE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NUUTHAKKI SPATIAL SOLUTIONS (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'AMARA RAJA INDUSTRIAL SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RAGHAVA ESTATES & PROPERTIES LIMITED',
          status: true,
        },
        {
          title: 'COUNTRY CLUB HOSPITALITY & HOLIDAYS LIMITED',
          status: true,
        },
        {
          title: 'SRI SIVASAI MEDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'UNISRAMP OVERSEAS CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'INDOVATION TECHNOLOGIES LIMITED',
          status: true,
        },
        {
          title: 'VAMA INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'NCC LIMITED',
          status: true,
        },
        {
          title: 'AVANTEL LIMITED',
          status: true,
        },
        {
          title: 'DIBBA INFOTECH LIMITED',
          status: true,
        },
        {
          title: 'I.C.S.A. (INDIA) LIMITED',
          status: true,
        },
        {
          title: 'BALAJI-BIOTECH LIMITED',
          status: true,
        },
        {
          title: 'SESHACHAL TECHNOLOGIES LIMITED',
          status: true,
        },
        {
          title: 'TANLA SOLUTIONS LIMITED',
          status: true,
        },
        {
          title: 'ESSEMM INFORMATION SYSTEMS LIMITED',
          status: true,
        },
        {
          title: 'VISU INTERNATIONAL LIMITED',
          status: true,
        },
        {
          title: 'ZR INFRA LIMITED',
          status: true,
        },
        {
          title: 'PRITHVI INFORMATION SOLUTIONS LIMITED',
          status: true,
        },
        {
          title: 'FOURTH GENERATION INFORMATION SYSTEMS LIMITED.',
          status: true,
        },
        {
          title: 'CAMBRIDGE TECHNOLOGY ENTERPRISES LIMITED',
          status: true,
        },
        {
          title: 'PALRED TECHNOLOGIES LIMITED',
          status: true,
        },
        {
          title: 'ORIGIN TELE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DELTA OFFSHORE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ELIXIR IMMIGRATION AND EDUCATIONAL CONSULTING SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: '8K MILES SOFTWARE SERVICES LIMITED',
          status: true,
        },
        {
          title: 'GREEN FIELD AGRI VENTURES LIMITED',
          status: true,
        },
        {
          title: 'STEEL EXCHANGE INDIA LIMITED',
          status: true,
        },
        {
          title: 'ADDLIFE MEDIA MINDS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VISTA LIFE LINE INSURANCE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GRADIENTE INFOTAINMENT LIMITED',
          status: true,
        },
        {
          title: 'STELLAR INSURANCE MANAGEMENT SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BALAJI INDUSTRIAL CORPORATION LIMITED',
          status: true,
        },
        {
          title: 'ALUMECO INDIA EXTRUSION LIMITED',
          status: true,
        },
        {
          title: 'SRIKALAHASTHI PIPES LIMITED',
          status: true,
        },
        {
          title: 'VIRAT CRANE INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'GVK POWER & INFRASTRUCTURE LIMITED',
          status: true,
        },
        {
          title: 'CRAFT CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CDR HEALTH CARE LTD.',
          status: true,
        },
        {
          title: 'EMED.COM TECHNOLOGIES LIMITED.',
          status: true,
        },
        {
          title: 'YUDOFUD CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SIBAR MEDIA AND ENTERTAINMENT LIMITED',
          status: true,
        },
        {
          title: 'UBE INDUSTRIES LIMITED',
          status: true,
        },
        {
          title: 'STILES INDIA LIMITED',
          status: true,
        },
        {
          title: 'KAY QUINONE ORGANICS (INDIA) LTD,',
          status: true,
        },
        {
          title: 'MAG LEISURES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRIHIT LABS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RIDDANCE MARKETING LIMITED',
          status: true,
        },
        {
          title: 'BOP CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SS SYNERGY HR & TECHNICAL SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SYAMALA CONSULTANCY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VAMSI-SRINIVAS STRESSED ASSETS RECOVERY & ALLIED SERVICES AGENCY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NRP CONSULTANCY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SSS CHAITANYA SECURITY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VISAKHA JOBS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ST MARINE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'TECHNI SQUAD CONSULTANCY (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VARAM ENGINEERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DHARWIN ENGINEERING SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VIJAYA SHAKTI CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GIRISH KAILASH CIVIC SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GLADIATOR INVESTIGATION AND SECURITY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GREEN FIELDS POWER SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI VALLABA MICROSUPPORT AND MANAGEMENT SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GOPI MARINE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MEDEAVOR MANAGEMENT SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SHANMUKHA INSURANCE CONSULTANCY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'COASTAL CAR CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RACS ENGINEERING CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ELLANTI MARKETING SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SAI GANESH SECURITY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'APEX VOICE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NEW LIFE CARE INDIA MARKETING SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'K K HEAVY MACHINERY & SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VERTEX VOICE SOLUTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DIVYATEJA HUMAN RESOURCES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ANDHRA PRADESH PROJECT FACILITATORS & CONSULTANCY SERVICES LIMITED',
          status: true,
        },
        {
          title: 'SANJEEVA ENGINEERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI SANTOSH RUPA CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NEW ERA PROFESSIONAL SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ZEAL CONSUMER SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PENINSULA INNOVATIVE TECHNOLOGIES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'A 2 Z MAINTENANCE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KBG CORPORATE CONSULTING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PEACOCK IT & CONSULTANCY SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'K.P.RAO CORPORATE CONSULTANTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VALUE CUSTOMER SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'TIRUMALA TOURISM SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ZEN WEALTH MANAGEMENT SERVICES LIMITED',
          status: true,
        },
        {
          title: 'JAYA LAKSHMI AGENCIES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ANDHRA PRINTERS LTD',
          status: true,
        },
        {
          title: 'VISAKHA FILMCITY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KONDAPALLI HILL RESORTS (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SPI MUSIC PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'EF TOURISM AND ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'AVR WAY WATCH AMENITIES AND ENTERTAINMENTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PROFESSIONAL RECREATION AND ENTERTAINING CENTRE LIMITED',
          status: true,
        },
        {
          title: 'VISAKHA RACE CLUB',
          status: true,
        },
        {
          title: 'STAR CRICKET LEAGUE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'TRANSNATIONAL MEDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FUNZONE FAMILY ENTERTAINMENT CENTERS (VIZAG) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SEVEN HILLS FOREX & TRAVELS (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DASARI RECREATIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'N1 FITNESS STUDIO PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ALANANNA CREATIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MPR BROADCASTING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PJ ENTERTAINMENTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'POLESTAR EVENTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'JAHASS ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'EMOTION SELLERS PRODUCTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SHINY TRADE EVENTS AND EXHIBITIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'JP PRODUCTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CHAKRALA ENTERPRISES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SIVARAMA DIGITAL PRINTERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'AMUSE MEDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RAM AND RAJ GYM AND RECREATION CLUB PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'WEBNEWS BROADCASTING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DAWN SPORTS & RECREATIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SNEHA NEWS CHANNEL LIMITED',
          status: true,
        },
        {
          title: 'VILLAGE ORCHIDS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FAIRY LAND ENTERTAINERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'EVERGREEN ENTERTAINERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SUPREME INDIA TV CHANNEL PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NAVYA CABLE NETWORK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KAIKALUR CITIZENS RECREATION CLUB PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BHASKAR DIGITAL STUDIOS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'HATCH STUDIOS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VANI THEATRES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SESH MAHAL THEATRES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BAYFRONT HORSE CLUB PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GREEN CHILLIES ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VLN SUN BROADBAND NETWORK (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RL EVENT PLANNERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRUSHTI EVENTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MC SPEAR ENTERTAINERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'HAIGREEVA LEISURE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FUNTIME FAMILY ENTERTAINEMENT CENTERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SWARNAMUKHI RECREATION & HOSPITALITY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GREENLANDS ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'WELFARE ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NETHRAA ENTERTAINMENTPARK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SWATHI BEACH RESORTS (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VEGA ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VISAKHA MASTER MEDIA SYSTEMS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SAHAJAS CREATIONS PRIVATE LIMITED (OPC)',
          status: true,
        },
        {
          title: '6TH DIMENSION ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ANNAPURNA STUDIOS PRIVATE LIMITED (PART IX)',
          status: true,
        },
        {
          title: 'SRI VENKATESWARA BHAKTI CHANNEL',
          status: true,
        },
        {
          title: 'NEW ATP CHANNELS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KAVALI ENTERTAINMENT NETWORK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI VENKATA NRISIMHA DIGITAL MEDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MAHESH GRAPHIC PRODUCTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CHELIKAM NETWORKS (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'TULASI BROADCASTING NETWORK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MOKSHA MARGHAMU TELEVISION PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KK MEDIA (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MAHESH BROADCASTING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PRUDENCE EVENTS & ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CVR CHELIKAM CABLE NETWORK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ICON GEO ENVIRONMENTAL AND INFRA SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VIJAYALAKSHMI THEATRES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SQUARE INDIA STUDIOS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'YUVA ANIMATION STUDIOS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'APPLE BROAD BAND SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GRACE CREATIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'YOGIRAJ FILMS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'UCC CABLE COMPANY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CCC CABLE COMPANY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FICUS ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DIVYA DIGITAL NETWORK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ANIM GRAPHIX NEW MEDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SADGURU COMMUNICATIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PANORAMA PENGUIN PRODUCTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SPORTS LED MEDIA (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FLYING PIXEL GRAPHICS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'WALTAIR ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MOTHER VISION PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRINIVASA PICTURE PALACE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SREE GURURAGHAVENDRA FILM EXHIBITORS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MADHAV-GOPIKA COMPLEX PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KRISHNAVENI FILM EXHIBITORS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'LINGAJYOTHI THEATRES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI JAYALAKSHMI TOBACCO CO. LIMITED',
          status: true,
        },
        {
          title: 'INDIRAMOULI THEATRES PVT LTD',
          status: true,
        },
        {
          title: 'POORNA PICTURES PVT LTD',
          status: true,
        },
        {
          title: 'VEDAVYAS MEDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VITAL DREAMS CREATIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'OMKAR MEDIA CHANNELS (INDIA) LIMITED',
          status: true,
        },
        {
          title: 'MY MANGO MOBILE APPS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SPI CINEMAS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RAGHUNATH PROJECTS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ONGOLE POLY SACKS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NEELIMA THEATRES PVT LTD',
          status: true,
        },
        {
          title: 'POORNA CINE THEATRES PVT LTD',
          status: true,
        },
        {
          title: 'CHITRAKALA PVT LTD',
          status: true,
        },
        {
          title: 'DURGA PLASTOVISION PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GRANDHI THEATRES PVT LTD',
          status: true,
        },
        {
          title: 'TRUE CINEMAS INDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PARCHUR COMMUNICATION NETWORK PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'JAAN ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'TSS COMMUNICATIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DASIKA FILM PRODUCTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'AMBICA ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DECCAN BROADCASTING (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DECCAN LEISURES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MYLANDS MEDIA & ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KURNOOL SRI SAI COMMUNICATIONS AND MEDIA WORKS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GR8 PRODUCTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CORAL TELEVISION PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VIDHWESH MEDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PRAGNYA BROADCASTERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: '3K ENTERTAINMENT PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VARSHITH MOVIE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'O.S. REDDY AND CO PVT LTD',
          status: true,
        },
        {
          title: 'INDIAN CHAMBER OF COMMERCE',
          status: true,
        },
        {
          title: 'THE COCONADA CHAMBER OF COMMERCE',
          status: true,
        },
        {
          title: 'CLEANTECH FACADE GLASS & ALLIED SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VISAKHAPATNAM INDUSTRIAL WATER SUPPLY COMPANY LIMITED',
          status: true,
        },
        {
          title: 'PRADEEPTHI ENVIRO ENGINEERS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VIGILANT SECURITY & ALLIED SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI HANUMA HOUSE KEEPING SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BANKA BIOLOO PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SAFE N KLEEN FACILITIES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GLOBAL GREEN ENVIRONMENTAL CONSULTANCY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PHOENIX PROCESSES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'R.K.DIAGNOSTIC SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'THE VIZAGAPATNAM DIOCESAM CORPN PVT LTD',
          status: true,
        },
        {
          title: 'VIRAN TEJA SPEECH & HEARING SOLUTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI SAI CHAITANYA CHARITABLE TRUST.',
          status: true,
        },
        {
          title: 'LAZARSON FOOD & HEALTH CARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ST JOHN JIREH CHARITABLE FOUNDATION.',
          status: true,
        },
        {
          title: 'VIZIANAGAR C.T. SCANNING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MARIDI ECO INDUSTRIES (ANDHRA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GUNTUR INSTITUTE OF ONCOLOGY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BMC HEALTH CARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BEST IMAGING AND DIAGNOSTICS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SIDDANTH CARE & CURE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GAUTHAMI SCAN CENTRE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'S Q L LABS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FRIENDS DIAGNOSTICS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SAI MEDICAL IMAGING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PVS LABORATORIES LIMITED',
          status: true,
        },
        {
          title: 'VIZIANAGAR SCANS AND DIAGNOSTICS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SUSHMITHA MEDICAL CENTRE PVT. LTD.',
          status: true,
        },
        {
          title: 'CHIRALA SCAN DIAGNOSTIC AND RESEARCH CENTRE PVT LTD.',
          status: true,
        },
        {
          title: 'VIRTUCURE HOSPITALS & RESEARCH CENTER PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'HARVEST HEALTH CARE INDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'APTA MEDICAL IMAGING PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DR STANZ PROGRESSIVE HOMOEO CLINICS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CHILUKURI HEALTH CARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SURAKSHA MEDICAL SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'INCOR PADMACHANDRA HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PUR HEALTH ONLINE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SVNS COSTA HOSPITAL PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SATHAYUSH AYURVEDIC INDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VJOVIS HEALTH CARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'STAR POSITIVE HOMEOPATHY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PML HEALTHCARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'TIRUMALA SUPER SPECIALITY HOSPITALS (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NS HEALTH CARE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NOVALIX HEALTH CARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KIMS HOSPITAL ENTERPRISES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'INDO AMRICAN DENTAL HOSPITAL PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ANDHRA HOSPITALS (VIJAYAWADA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MEDSEVA COMPLETE MEDICAL SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FIRSTHEALTH MEDICAL SOLUTIONS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'OXYGEN ANESTHESIA AND CRITICAL CARE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SURYA TEJ SURGICALS & HOSPITALS (VIZAG) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CHINMAYEE HEALTH CARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SREE IMPLANTOLOGY SOLUTIONS INDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KUGLER HEALTHCARE CLUSTER SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI ANU HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GAYATHRI WOMEN & CHILD CARE HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SUN CARE HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'INSIGNIA LABS TECH PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SARVOTTAM HEALTH CARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PRIYABHAVANA HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VEENA HEALTH & HAPPY HOME PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI SRI ARS AROGYA PHARMACY PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI SAI SUDHA MULTI SPECIALITY HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PRAKASAM MEDICAL SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'LEO HERBALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'NADAKUDURU SAI AYURVEDA HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'FRANKWINN FORMULATIONS LIMITED',
          status: true,
        },
        {
          title: 'PRADHAMA MULTI SPECIALITY HOSPITALS & RESEARCH INSTITUTE LIMITED',
          status: true,
        },
        {
          title: 'GYM ZONE BETTER VALUE FITNESS PRIVATE LIMITED (OPC)',
          status: true,
        },
        {
          title: 'GREEN VALLEY REHAB PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VARUN MEDICARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PRITHAM & PRATHIK HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SARVA AROGYA HEALTHCARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRIVATHSA LIFESCIENCES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRC FAMILY SAFETY CLUB PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'MAHATI UROLOGY HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SWATANTRA HOSPITALS (MULTI SPECIALITIES) PVT LTD',
          status: true,
        },
        {
          title: 'HAAS MULTISPECIALITY DENTAL AND RESEARCH PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SINDHURA ENTERPRISES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BOPPANA MEDICARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'PAVITHRA DIAGNOSTIC CENTRE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'BAVYA HEALTH SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'CARE SUPER SPECIALITY DENTAL HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'TARA LABARATORIES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'USHA CARDIAC CENTRE LIMITED',
          status: true,
        },
        {
          title: 'KIMS HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'RATNA GLOBAL TECHNOLOGIES PVT. LTD',
          status: true,
        },
        {
          title: 'ARIC HEALTHCARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'USHODAYA HEALTH CARE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ASHVIINIY HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DENTAL MART PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SMILECARE MULTI SPECIALITY HOSPITALS INDIA PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'UNITED MULTI SPECIALITY HOSPITALS (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SAIVASUJA HEALTHCARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'AROGYA LAKSHMI HEALTH CARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'VISAKHA MULTI SPECIALITY & CLINIC PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'G2 HEALTHCARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'DR. SRIDEVIS MEDIEXCELLANCE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'HOPE SUPER SPECIALITY CHILDCARE PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'INTEGRIS CRITICAL CARE HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KRAANTHI SPECIALITYY HOSPITAL PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'SRI CHAKRA HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'ASTRA MEDICARE SERVICES PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'KURNOOL RAINBOW HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'INDRA HOSPITALS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'STAR DENTISTREE (INDIA) PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'GUDILOVA MEDICALS & DIAGNOSTICS PRIVATE LIMITED',
          status: true,
        },
        {
          title: 'HELAPURI HOSPITALS PRIVATE LIMITED',
          status: true,
      },
      {
        title: "Nokia LLC",
        companyDescription: "Nokia LLC Corp",
        //jobs: 5,           
        employeeCount:50000,
        rating:4.5, 
        reviews: 7500
      },




      ],
        ["id"]);
    }
}