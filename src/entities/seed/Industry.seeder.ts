import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Industry } from '../industry.entity';

export default class IndustrySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Industry);
    await repository.upsert([

      {
        title: 'IT Services',
        status: true,
      },
      {
        title: 'IT Services & Consulting',
        status: true,
      },
      {
        title: 'BPM',
        status: true,
      },
      {
        title: 'Analytics / KPO / Research',
        status: true,
      },
      {
        title: 'BPO / Call Centre',
        status: true,
      },
      {
        title: 'Technology',
        status: true,
      },
      {
        title: 'Electronic Components / Semiconductors',
        status: true,
      },
      {
        title: 'Electronics Manufacturing',
        status: true,
      },
      {
        title: 'Electronic Manufacturing Services (EMS)',
        status: true,
      },
      {
        title: 'Electronics Manufacturing',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: '3D Printing',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: 'AI/ML',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: 'AR/VR',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: 'Blockchain',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: 'Cloud',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: 'Cybersecurity',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: 'Drones/Robotics',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: 'IoT',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: 'Nanotechnology',
        status: true,
      },
      {
        title: 'Emerging Technologies',
        status: true,
      },
      {
        title: 'Hardware & Networking',
        status: true,
      },
      {
        title: 'Internet',
        status: true,
      },
      {
        title: 'E-Commerce',
        status: true,
      },
      {
        title: 'Internet',
        status: true,
      },
      {
        title: 'OTT',
        status: true,
      },
      {
        title: 'Internet',
        status: true,
      },
      {
        title: 'Software Product',
        status: true,
      },
      {
        title: 'BFSI',
        status: true,
      },
      {
        title: 'Banking',
        status: true,
      },
      {
        title: 'Financial Services',
        status: true,
      },
      {
        title: 'Asset Management',
        status: true,
      },
      {
        title: 'Financial Services',
        status: true,
      },
      {
        title: 'Broking',
        status: true,
      },
      {
        title: 'Financial Services',
        status: true,
      },
      {
        title: 'FinTech / Payments',
        status: true,
      },
      {
        title: 'Insurance',
        status: true,
      },
      {
        title: 'Investment Banking / Venture Capital / Private Equity',
        status: true,
      },
      {
        title: 'NBFC',
        status: true,
      },
      {
        title: 'Micro Finance',
        status: true,
      },
      {
        title: 'NBFC',
        status: true,
      },
      {
        title: 'Education',
        status: true,
      },
      {
        title: 'Education / Training',
        status: true,
      },
      {
        title: 'E-Learning / EdTech',
        status: true,
      },
      {
        title: 'Manufacturing & Production',
        status: true,
      },
      {
        title: 'Auto Components',
        status: true,
      },
      {
        title: 'Tyre',
        status: true,
      },
      {
        title: 'Auto Components',
        status: true,
      },
      {
        title: 'Automobile',
        status: true,
      },
      {
        title: 'Automobile Dealers',
        status: true,
      },
      {
        title: 'Automobile',
        status: true,
      },
      {
        title: 'Electric Vehicle (EV)',
        status: true,
      },
      {
        title: 'Automobile',
        status: true,
      },
      {
        title: 'Building Material',
        status: true,
      },
      {
        title: 'Cement',
        status: true,
      },
      {
        title: 'Building Material',
        status: true,
      },
      {
        title: 'Ceramic',
        status: true,
      },
      {
        title: 'Building Material',
        status: true,
      },
      {
        title: 'Glass',
        status: true,
      },
      {
        title: 'Building Material',
        status: true,
      },
      {
        title: 'Chemicals',
        status: true,
      },
      {
        title: 'Paints',
        status: true,
      },
      {
        title: 'Chemicals',
        status: true,
      },
      {
        title: 'Defence & Aerospace',
        status: true,
      },
      {
        title: 'Electrical Equipment',
        status: true,
      },
      {
        title: 'Fertilizers / Pesticides / Agro chemicals',
        status: true,
      },
      {
        title: 'Industrial Automation',
        status: true,
      },
      {
        title: 'Industrial Equipment / Machinery',
        status: true,
      },
      {
        title: 'Construction Equipment',
        status: true,
      },
      {
        title: 'Industrial Equipment / Machinery',
        status: true,
      },
      {
        title: 'Machine Tools',
        status: true,
      },
      {
        title: 'Industrial Equipment / Machinery',
        status: true,
      },
      {
        title: 'Iron & Steel',
        status: true,
      },
      {
        title: 'Metals & Mining',
        status: true,
      },
      {
        title: 'Packaging & Containers',
        status: true,
      },
      {
        title: 'Petrochemical / Plastics / Rubber',
        status: true,
      },
      {
        title: 'Pulp & Paper',
        status: true,
      },
      {
        title: 'Infrastructure, Transport & Real Estate',
        status: true,
      },
      {
        title: 'Aviation',
        status: true,
      },
      {
        title: 'Courier / Logistics',
        status: true,
      },
      {
        title: 'Logistics Tech',
        status: true,
      },
      {
        title: 'Courier / Logistics',
        status: true,
      },
      {
        title: 'Engineering & Construction',
        status: true,
      },
      {
        title: 'Oil & Gas',
        status: true,
      },
      {
        title: 'Ports & Shipping',
        status: true,
      },
      {
        title: 'Shipbuilding',
        status: true,
      },
      {
        title: 'Ports & Shipping',
        status: true,
      },
      {
        title: 'Power',
        status: true,
      },
      {
        title: 'Hydro',
        status: true,
      },
      {
        title: 'Power',
        status: true,
      },
      {
        title: 'Nuclear',
        status: true,
      },
      {
        title: 'Power',
        status: true,
      },
      {
        title: 'Solar',
        status: true,
      },
      {
        title: 'Power',
        status: true,
      },
      {
        title: 'Wind',
        status: true,
      },
      {
        title: 'Power',
        status: true,
      },
      {
        title: 'Railways',
        status: true,
      },
      {
        title: 'Real Estate',
        status: true,
      },
      {
        title: 'Co-working',
        status: true,
      },
      {
        title: 'Real Estate',
        status: true,
      },
      {
        title: 'Urban Transport',
        status: true,
      },
      {
        title: 'Water Treatment / Waste Management',
        status: true,
      },
      {
        title: 'Consumer, Retail & Hospitality',
        status: true,
      },
      {
        title: 'Beauty & Personal Care',
        status: true,
      },
      {
        title: 'Beverage',
        status: true,
      },
      {
        title: 'Brewery / Distillery',
        status: true,
      },
      {
        title: 'Beverage',
        status: true,
      },
      {
        title: 'Consumer Electronics & Appliances',
        status: true,
      },
      {
        title: 'Fitness & Wellness',
        status: true,
      },
      {
        title: 'FMCG',
        status: true,
      },
      {
        title: 'Tobacco',
        status: true,
      },
      {
        title: 'FMCG',
        status: true,
      },
      {
        title: 'Food Processing',
        status: true,
      },
      {
        title: 'Dairy',
        status: true,
      },
      {
        title: 'Food Processing',
        status: true,
      },
      {
        title: 'Meat / Poultry',
        status: true,
      },
      {
        title: 'Food Processing',
        status: true,
      },
      {
        title: 'Sugar',
        status: true,
      },
      {
        title: 'Food Processing',
        status: true,
      },
      {
        title: 'Furniture & Furnishing',
        status: true,
      },
      {
        title: 'Gems & Jewellery',
        status: true,
      },
      {
        title: 'Hotels & Restaurants',
        status: true,
      },
      {
        title: 'Leather',
        status: true,
      },
      {
        title: 'Retail',
        status: true,
      },
      {
        title: 'Textile & Apparel',
        status: true,
      },
      {
        title: 'Fashion',
        status: true,
      },
      {
        title: 'Textile & Apparel',
        status: true,
      },
      {
        title: 'Handicraft',
        status: true,
      },
      {
        title: 'Textile & Apparel',
        status: true,
      },
      {
        title: 'Home Textile',
        status: true,
      },
      {
        title: 'Textile & Apparel',
        status: true,
      },
      {
        title: 'Technical Textile',
        status: true,
      },
      {
        title: 'Textile & Apparel',
        status: true,
      },
      {
        title: 'Yarn & Fabric',
        status: true,
      },
      {
        title: 'Textile & Apparel',
        status: true,
      },
      {
        title: 'Travel & Tourism',
        status: true,
      },
      {
        title: 'Healthcare & Life Sciences',
        status: true,
      },
      {
        title: 'Biotechnology',
        status: true,
      },
      {
        title: 'Clinical Research / Contract Research',
        status: true,
      },
      {
        title: 'Medical Devices & Equipment',
        status: true,
      },
      {
        title: 'Medical Services / Hospital',
        status: true,
      },
      {
        title: 'Diagnostics',
        status: true,
      },
      {
        title: 'Medical Services / Hospital',
        status: true,
      },
      {
        title: 'Pharmaceutical & Life Sciences',
        status: true,
      },
      {
        title: 'Media, Entertainment & Telecom',
        status: true,
      },
      {
        title: 'Advertising & Marketing',
        status: true,
      },
      {
        title: 'Digital Marketing',
        status: true,
      },
      {
        title: 'Advertising & Marketing',
        status: true,
      },
      {
        title: 'Public Relations',
        status: true,
      },
      {
        title: 'Advertising & Marketing',
        status: true,
      },
      {
        title: 'Animation & VFX',
        status: true,
      },
      {
        title: 'Events / Live Entertainment',
        status: true,
      },
      {
        title: 'Film / Music / Entertainment',
        status: true,
      },
      {
        title: 'Gaming',
        status: true,
      },
      {
        title: 'Printing & Publishing',
        status: true,
      },
      {
        title: 'Sports / Leisure & Recreation',
        status: true,
      },
      {
        title: 'Telecom / ISP',
        status: true,
      },
      {
        title: 'TV / Radio',
        status: true,
      },
      {
        title: 'Professional Services',
        status: true,
      },
      {
        title: 'Accounting / Auditing',
        status: true,
      },
      {
        title: 'Architecture / Interior Design',
        status: true,
      },
      {
        title: 'Content Development / Language',
        status: true,
      },
      {
        title: 'Design',
        status: true,
      },
      {
        title: 'Facility Management Services',
        status: true,
      },
      {
        title: 'Law Enforcement / Security Services',
        status: true,
      },
      {
        title: 'Legal',
        status: true,
      },
      {
        title: 'Management Consulting',
        status: true,
      },
      {
        title: 'Recruitment / Staffing',
        status: true,
      },
      {
        title: 'Miscellaneous',
        status: true,
      },
      {
        title: 'Agriculture / Forestry / Fishing',
        status: true,
      },
      {
        title: 'Agri-tech',
        status: true,
      },
      {
        title: 'Agriculture / Forestry / Fishing',
        status: true,
      },
      {
        title: 'Government / Public Administration',
        status: true,
      },
      {
        title: 'Import & Export',
        status: true,
      },
      {
        title: 'Miscellaneous',
        status: true,
      },
      {
        title: 'NGO / Social Services / Industry Associations',
        status: true,
      }
      // {
      //   title: 'Extermination/Pest Control',
      //   status: true,
      // },
      // {
      //   title: 'Farming(Animal Production)',
      //   status: true,
      // },
      // {
      //   title: 'Farming(Crop Production)',
      //   status: true,
      // },
      // {
      //   title: 'Fishing/Hunting',
      //   status: true,
      // },
      // {
      //   title: 'Landscape Services',
      //   status: true,
      // },
      // {
      //   title: 'Lawn care Services',
      //   status: true,
      // },
      // {
      //   title: 'Other (Agriculture & Forestry/Wildlife)',
      //   status: true,
      // },
      // {
      //   title: 'Consultant',
      //   status: true,
      // },
      // {
      //   title: 'Employment Office',
      //   status: true,
      // },
      // {
      //   title: 'Fundraisers',
      //   status: true,
      // },
      // {
      //   title: 'Going out of Business Sales',
      //   status: true,
      // },
      // {
      //   title: 'Marketing/Advertising',
      //   status: true,
      // },
      // {
      //   title: 'Non Profit Organization',
      //   status: true,
      // },
      // {
      //   title: 'Notary Public',
      //   status: true,
      // },
      // {
      //   title: 'Online Business',
      //   status: true,
      // },
      // {
      //   title: 'Other (Business & Information)',
      //   status: true,
      // },
      // {
      //   title: 'Publishing Services',
      //   status: true,
      // },
      // {
      //   title: 'Record Business',
      //   status: true,
      // },
      // {
      //   title: 'Retail Sales',
      //   status: true,
      // },
      // {
      //   title: 'Technology Services',
      //   status: true,
      // },
      // {
      //   title: 'Telemarketing',
      //   status: true,
      // },
      // {
      //   title: 'Travel Agency',
      //   status: true,
      // },
      // {
      //   title: 'Video Production',
      //   status: true,
      // },
      // {
      //   title: 'AC & Heating',
      //   status: true,
      // },
      // {
      //   title: 'Architect',
      //   status: true,
      // },
      // {
      //   title: 'Building Construction',
      //   status: true,
      // },
      // {
      //   title: 'Building Inspection',
      //   status: true,
      // },
      // {
      //   title: 'Concrete Manufacturing',
      //   status: true,
      // },
      // {
      //   title: 'Contractor',
      //   status: true,
      // },
      // {
      //   title: 'Engineering/Drafting',
      //   status: true,
      // },
      // {
      //   title: 'Equipment Rental',
      //   status: true,
      // },
      // {
      //   title: 'Other (Construction/Utilities/Contracting)',
      //   status: true,
      // },
      // {
      //   title: 'Plumbing',
      //   status: true,
      // },
      // {
      //   title: 'Remodeling',
      //   status: true,
      // },
      // {
      //   title: 'Repair/Maintenance',
      //   status: true,
      // },
      // {
      //   title: 'Child Care Services',
      //   status: true,
      // },
      // {
      //   title: 'College/Universities',
      //   status: true,
      // },
      // {
      //   title: 'Cosmetology School',
      //   status: true,
      // },
      // {
      //   title: 'Elementary & Secondary Education',
      //   status: true,
      // },
      // {
      //   title: 'GED Certification',
      //   status: true,
      // },
      // {
      //   title: 'Other (Education)',
      //   status: true,
      // },
      // {
      //   title: 'Private School',
      //   status: true,
      // },
      // {
      //   title: 'Real Estate School',
      //   status: true,
      // },
      // {
      //   title: 'Technical School',
      //   status: true,
      // },
      // {
      //   title: 'Trade School',
      //   status: true,
      // },
      // {
      //   title: 'Tutoring Services',
      //   status: true,
      // },
      // {
      //   title: 'Vocational Schoo',
      //   status: true,
      // },
      // {
      //   title: 'Accountant',
      //   status: true,
      // },
      // {
      //   title: 'Auditing',
      //   status: true,
      // },
      // {
      //   title: 'Bank/Credit Union',
      //   status: true,
      // },
      // {
      //   title: 'Bookkeeping',
      //   status: true,
      // },
      // {
      //   title: 'Cash Advances',
      //   status: true,
      // },
      // {
      //   title: 'Collection Agency',
      //   status: true,
      // },
      // {
      //   title: 'Insurance',
      //   status: true,
      // },
      // {
      //   title: 'Investor',
      //   status: true,
      // },
      // {
      //   title: 'Other (Finance & Insurance)',
      //   status: true,
      // },
      // {
      //   title: 'Pawn Brokers',
      //   status: true,
      // },
      // {
      //   title: 'Tax Preparation',
      //   status: true,
      // },
      // {
      //   title: 'Alcohol/Tobacco Sales',
      //   status: true,
      // },
      // {
      //   title: 'Alcoholic Beverage Manufacturing',
      //   status: true,
      // },
      // {
      //   title: 'Bakery',
      //   status: true,
      // },
      // {
      //   title: 'Caterer',
      //   status: true,
      // },
      // {
      //   title: 'Food/Beverage Manufacturing',
      //   status: true,
      // },
      // {
      //   title: 'Grocery/Convenience Store(Gas Station)',
      //   status: true,
      // },
      // {
      //   title: 'Grocery/Convenience Store(No Gas Station)',
      //   status: true,
      // },
      // {
      //   title: 'Hotels/Motels(Casino)',
      //   status: true,
      // },
      // {
      //   title: 'Hotels/Motels(No Casino)',
      //   status: true,
      // },
      // {
      //   title: 'Mobile Food Services',
      //   status: true,
      // },
      // {
      //   title: 'Other (Food & Hospitality)',
      //   status: true,
      // },
      // {
      //   title: 'Restaurant/Bar',
      //   status: true,
      // },
      // {
      //   title: 'Specialty Food(Fruit/Vegetables)',
      //   status: true,
      // },
      // {
      //   title: 'Specialty Food(Meat)',
      //   status: true,
      // },
      // {
      //   title: 'Specialty Food(Seafood)',
      //   status: true,
      // },
      // {
      //   title: 'Tobacco Product Manufacturing',
      //   status: true,
      // },
      // {
      //   title: 'Truck Stop',
      //   status: true,
      // },
      // {
      //   title: 'Vending Machine',
      //   status: true,
      // },
      // {
      //   title: 'Auctioneer',
      //   status: true,
      // },
      // {
      //   title: 'Boxing/Wrestling',
      //   status: true,
      // },
      // {
      //   title: 'Casino/Video Gaming',
      //   status: true,
      // },
      // {
      //   title: 'Other (Gaming)',
      //   status: true,
      // },
      // {
      //   title: 'Racetrack',
      //   status: true,
      // },
      // {
      //   title: 'Sports Agent',
      //   status: true,
      // },
      // {
      //   title: 'Acupuncturist',
      //   status: true,
      // },
      // {
      //   title: 'Athletic Trainer',
      //   status: true,
      // },
      // {
      //   title: 'Child/Youth Services',
      //   status: true,
      // },
      // {
      //   title: 'Chiropractic Office',
      //   status: true,
      // },
      // {
      //   title: 'Dentistry',
      //   status: true,
      // },
      // {
      //   title: 'Electrolysis',
      //   status: true,
      // },
      // {
      //   title: 'Embalmer',
      //   status: true,
      // },
      // {
      //   title: 'Emergency Medical Services',
      //   status: true,
      // },
      // {
      //   title: 'Emergency Medical Transportation',
      //   status: true,
      // },
      // {
      //   title: 'Hearing Aid Dealers',
      //   status: true,
      // },
      // {
      //   title: 'Home Health Services',
      //   status: true,
      // },
      // {
      //   title: 'Hospital',
      //   status: true,
      // },
      // {
      //   title: 'Massage Therapy',
      //   status: true,
      // },
      // {
      //   title: 'Medical Office',
      //   status: true,
      // },
      // {
      //   title: 'Mental Health Services',
      //   status: true,
      // },
      // {
      //   title: 'Non Emergency Medical Transportation',
      //   status: true,
      // },
      // {
      //   title: 'Optometry',
      //   status: true,
      // },
      // {
      //   title: 'Other (Health Services)',
      //   status: true,
      // },
      // {
      //   title: 'Pharmacy',
      //   status: true,
      // },
      // {
      //   title: 'Physical Therapy',
      //   status: true,
      // },
      // {
      //   title: 'Physicians Office',
      //   status: true,
      // },
      // {
      //   title: 'Radiology',
      //   status: true,
      // },
      // {
      //   title: 'Residential Care Facility',
      //   status: true,
      // },
      // {
      //   title: 'Speech/Occupational Therapy',
      //   status: true,
      // },
      // {
      //   title: 'Substance Abuse Services',
      //   status: true,
      // },
      // {
      //   title: 'Veterinary Medicine',
      //   status: true,
      // },
      // {
      //   title: 'Vocational Rehabilitation',
      //   status: true,
      // },
      // {
      //   title: 'Wholesale Drug Distribution',
      //   status: true,
      // },
      // {
      //   title: 'Automotive Part Sales',
      //   status: true,
      // },
      // {
      //   title: 'Car Wash/Detailing',
      //   status: true,
      // },
      // {
      //   title: 'Motor Vehicle Rental',
      //   status: true,
      // },
      // {
      //   title: 'Motor Vehicle Repair',
      //   status: true,
      // },
      // {
      //   title: 'New Motor Vehicle Sales',
      //   status: true,
      // },
      // {
      //   title: 'Other (Motor Vehicle)',
      //   status: true,
      // },
      // {
      //   title: 'Recreational Vehicle Sales',
      //   status: true,
      // },
      // {
      //   title: 'Used Motor Vehicle Sales',
      //   status: true,
      // },
      // {
      //   title: 'Conservation Organizations',
      //   status: true,
      // },
      // {
      //   title: 'Environmental Health',
      //   status: true,
      // },
      // {
      //   title: 'Land Surveying',
      //   status: true,
      // },
      // {
      //   title: 'Oil & Gas Distribution',
      //   status: true,
      // },
      // {
      //   title: 'Oil & Gas Extraction/Production',
      //   status: true,
      // },
      // {
      //   title: 'Other (Natural Resources/Environmental)',
      //   status: true,
      // },
      // {
      //   title: 'Pipeline',
      //   status: true,
      // },
      // {
      //   title: 'Water Well Drilling',
      //   status: true,
      // },
      // {
      //   title: 'Other(Business Type Not Listed)',
      //   status: true,
      // },
      // {
      //   title: 'Animal Boarding',
      //   status: true,
      // },
      // {
      //   title: 'Barber Shop',
      //   status: true,
      // },
      // {
      //   title: 'Beauty Salon',
      //   status: true,
      // },
      // {
      //   title: 'Cemetery',
      //   status: true,
      // },
      // {
      //   title: 'Diet Center',
      //   status: true,
      // },
      // {
      //   title: 'Dry cleaning/Laundry',
      //   status: true,
      // },
      // {
      //   title: 'Entertainment/Party Rentals',
      //   status: true,
      // },
      // {
      //   title: 'Event Planning',
      //   status: true,
      // },
      // {
      //   title: 'Fitness Center',
      //   status: true,
      // },
      // {
      //   title: 'Florist',
      //   status: true,
      // },
      // {
      //   title: 'Funeral Director',
      //   status: true,
      // },
      // {
      //   title: 'Janitorial/Cleaning Services',
      //   status: true,
      // },
      // {
      //   title: 'Massage/Day Spa',
      //   status: true,
      // },
      // {
      //   title: 'Nail Salon',
      //   status: true,
      // },
      // {
      //   title: 'Other (Personal Services)',
      //   status: true,
      // },
      // {
      //   title: 'Personal Assistant',
      //   status: true,
      // },
      // {
      //   title: 'Photography',
      //   status: true,
      // },
      // {
      //   title: 'Tanning Salon',
      //   status: true,
      // },
      // {
      //   title: 'Home Inspection',
      //   status: true,
      // },
      // {
      //   title: 'Interior Design',
      //   status: true,
      // },
      // {
      //   title: 'Manufactured Housing',
      //   status: true,
      // },
      // {
      //   title: 'Mortgage Company',
      //   status: true,
      // },
      // {
      //   title: 'Other (Real Estate & Housing)',
      //   status: true,
      // },
      // {
      //   title: 'Property Management',
      //   status: true,
      // },
      // {
      //   title: 'Real Estate Broker/Agent',
      //   status: true,
      // },
      // {
      //   title: 'Warehouse/Storage',
      //   status: true,
      // },
      // {
      //   title: 'Attorney',
      //   status: true,
      // },
      // {
      //   title: 'Bail Bonds',
      //   status: true,
      // },
      // {
      //   title: 'Court Reporter',
      //   status: true,
      // },
      // {
      //   title: 'Drug Screening',
      //   status: true,
      // },
      // {
      //   title: 'Locksmith',
      //   status: true,
      // },
      // {
      //   title: 'Other (Safety/Security & Legal)',
      //   status: true,
      // },
      // {
      //   title: 'Private Investigator',
      //   status: true,
      // },
      // {
      //   title: 'Security Guard',
      //   status: true,
      // },
      // {
      //   title: 'Security System Services',
      //   status: true,
      // },
      // {
      //   title: 'Air Transportation',
      //   status: true,
      // },
      // {
      //   title: 'Boat Services',
      //   status: true,
      // },
      // {
      //   title: 'Limousine Services',
      //   status: true,
      // },
      // {
      //   title: 'Other (Transportation)',
      //   status: true,
      // },
      // {
      //   title: 'Taxi Services',
      //   status: true,
      // },
      // {
      //   title: 'Towing',
      //   status: true,
      // },
      // {
      //   title: 'Truck Transportation(Fuel)',
      //   status: true,
      // },
      // {
      //   title: 'Truck Transportation(Non Fuel)',
      //   status: true,
      // }
    ],
      ["id"]);

  }
}