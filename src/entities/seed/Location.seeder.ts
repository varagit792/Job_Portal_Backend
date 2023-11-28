import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Location } from '../location.entity';

export default class LocationSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(Location);
    await repository.upsert([
      {
        title: 'Port Blair',
        status: true,
      },
      {
        title: 'Andhra Pradesh',
        status: true,
      },
      {
        title: 'Adoni',
        status: true,
      },
      {
        title: 'Amaravati',
        status: true,
      },
      {
        title: 'Anantapur',
        status: true,
      },
      {
        title: 'Chandragiri',
        status: true,
      },
      {
        title: 'Chittoor',
        status: true,
      },
      {
        title: 'Dowlaiswaram',
        status: true,
      },
      {
        title: 'Eluru',
        status: true,
      },
      {
        title: 'Guntur',
        status: true,
      },
      {
        title: 'Kadapa',
        status: true,
      },
      {
        title: 'Kakinada',
        status: true,
      },
      {
        title: 'Kurnool',
        status: true,
      },
      {
        title: 'Machilipatnam',
        status: true,
      },
      {
        title: 'Nagarjunakoṇḍa',
        status: true,
      },
      {
        title: 'Rajahmundry',
        status: true,
      },
      {
        title: 'Srikakulam',
        status: true,
      },
      {
        title: 'Tirupati',
        status: true,
      },
      {
        title: 'Vijayawada',
        status: true,
      },
      {
        title: 'Visakhapatnam',
        status: true,
      },
      {
        title: 'Vizianagaram',
        status: true,
      },
      {
        title: 'Yemmiganur',
        status: true,
      },
      {
        title: 'Arunachal Pradesh',
        status: true,
      },
      {
        title: 'Itanagar',
        status: true,
      },
      {
        title: 'Assam',
        status: true,
      },
      {
        title: 'Dhuburi',
        status: true,
      },
      {
        title: 'Dibrugarh',
        status: true,
      },
      {
        title: 'Dispur',
        status: true,
      },
      {
        title: 'Guwahati',
        status: true,
      },
      {
        title: 'Jorhat',
        status: true,
      },
      {
        title: 'Nagaon',
        status: true,
      },
      {
        title: 'Sivasagar',
        status: true,
      },
      {
        title: 'Silchar',
        status: true,
      },
      {
        title: 'Tezpur',
        status: true,
      },
      {
        title: 'Tinsukia',
        status: true,
      },
      {
        title: 'Bihar',
        status: true,
      },
      {
        title: 'Ara',
        status: true,
      },
      {
        title: 'Barauni',
        status: true,
      },
      {
        title: 'Begusarai',
        status: true,
      },
      {
        title: 'Bettiah',
        status: true,
      },
      {
        title: 'Bhagalpur',
        status: true,
      },
      {
        title: 'Bihar Sharif',
        status: true,
      },
      {
        title: 'Bodh Gaya',
        status: true,
      },
      {
        title: 'Buxar',
        status: true,
      },
      {
        title: 'Chapra',
        status: true,
      },
      {
        title: 'Darbhanga',
        status: true,
      },
      {
        title: 'Dehri',
        status: true,
      },
      {
        title: 'Dinapur Nizamat',
        status: true,
      },
      {
        title: 'Gaya',
        status: true,
      },
      {
        title: 'Hajipur',
        status: true,
      },
      {
        title: 'Jamalpur',
        status: true,
      },
      {
        title: 'Katihar',
        status: true,
      },
      {
        title: 'Madhubani',
        status: true,
      },
      {
        title: 'Motihari',
        status: true,
      },
      {
        title: 'Munger',
        status: true,
      },
      {
        title: 'Muzaffarpur',
        status: true,
      },
      {
        title: 'Patna',
        status: true,
      },
      {
        title: 'Purnia',
        status: true,
      },
      {
        title: 'Pusa',
        status: true,
      },
      {
        title: 'Saharsa',
        status: true,
      },
      {
        title: 'Samastipur',
        status: true,
      },
      {
        title: 'Sasaram',
        status: true,
      },
      {
        title: 'Sitamarhi',
        status: true,
      },
      {
        title: 'Siwan',
        status: true,
      },
      {
        title: 'Chandigarh (union territory)',
        status: true,
      },
      {
        title: 'Chhattisgarh',
        status: true,
      },
      {
        title: 'Ambikapur',
        status: true,
      },
      {
        title: 'Bhilai',
        status: true,
      },
      {
        title: 'Dhamtari',
        status: true,
      },
      {
        title: 'Durg',
        status: true,
      },
      {
        title: 'Jagdalpur',
        status: true,
      },
      {
        title: 'Raipur',
        status: true,
      },
      {
        title: 'Rajnandgaon',
        status: true,
      },
      {
        title: 'Dadra and Nagar Haveli and Daman and Diu (union territory)',
        status: true,
      },
      {
        title: 'Daman',
        status: true,
      },
      {
        title: 'Diu',
        status: true,
      },
      {
        title: 'Silvassa',
        status: true,
      },
      {
        title: 'Delhi (national capital territory)',
        status: true,
      },
      {
        title: 'Delhi',
        status: true,
      },
      {
        title: 'New Delhi',
        status: true,
      },
      {
        title: 'Goa',
        status: true,
      },
      {
        title: 'Madgaon',
        status: true,
      },
      {
        title: 'Panaji',
        status: true,
      },
      {
        title: 'Gujarat',
        status: true,
      },
      {
        title: 'Ahmadabad',
        status: true,
      },
      {
        title: 'Amreli',
        status: true,
      },
      {
        title: 'Bharuch',
        status: true,
      },
      {
        title: 'Bhavnagar',
        status: true,
      },
      {
        title: 'Bhuj',
        status: true,
      },
      {
        title: 'Dwarka',
        status: true,
      },
      {
        title: 'Gandhinagar',
        status: true,
      },
      {
        title: 'Godhra',
        status: true,
      },
      {
        title: 'Jamnagar',
        status: true,
      },
      {
        title: 'Junagadh',
        status: true,
      },
      {
        title: 'Kandla',
        status: true,
      },
      {
        title: 'Khambhat',
        status: true,
      },
      {
        title: 'Kheda',
        status: true,
      },
      {
        title: 'Mahesana',
        status: true,
      },
      {
        title: 'Morbi',
        status: true,
      },
      {
        title: 'Nadiad',
        status: true,
      },
      {
        title: 'Navsari',
        status: true,
      },
      {
        title: 'Okha',
        status: true,
      },
      {
        title: 'Palanpur',
        status: true,
      },
      {
        title: 'Patan',
        status: true,
      },
      {
        title: 'Porbandar',
        status: true,
      },
      {
        title: 'Rajkot',
        status: true,
      },
      {
        title: 'Surat',
        status: true,
      },
      {
        title: 'Surendranagar',
        status: true,
      },
      {
        title: 'Valsad',
        status: true,
      },
      {
        title: 'Veraval',
        status: true,
      },
      {
        title: 'Haryana',
        status: true,
      },
      {
        title: 'Ambala',
        status: true,
      },
      {
        title: 'Bhiwani',
        status: true,
      },
      {
        title: 'Faridabad',
        status: true,
      },
      {
        title: 'Firozpur Jhirka',
        status: true,
      },
      {
        title: 'Gurugram',
        status: true,
      },
      {
        title: 'Hansi',
        status: true,
      },
      {
        title: 'Hisar',
        status: true,
      },
      {
        title: 'Jind',
        status: true,
      },
      {
        title: 'Kaithal',
        status: true,
      },
      {
        title: 'Karnal',
        status: true,
      },
      {
        title: 'Kurukshetra',
        status: true,
      },
      {
        title: 'Panipat',
        status: true,
      },
      {
        title: 'Pehowa',
        status: true,
      },
      {
        title: 'Rewari',
        status: true,
      },
      {
        title: 'Rohtak',
        status: true,
      },
      {
        title: 'Sirsa',
        status: true,
      },
      {
        title: 'Sonipat',
        status: true,
      },
      {
        title: 'Himachal Pradesh',
        status: true,
      },
      {
        title: 'Bilaspur',
        status: true,
      },
      {
        title: 'Chamba',
        status: true,
      },
      {
        title: 'Dalhousie',
        status: true,
      },
      {
        title: 'Dharmshala',
        status: true,
      },
      {
        title: 'Kangra',
        status: true,
      },
      {
        title: 'Kullu',
        status: true,
      },
      {
        title: 'Mandi',
        status: true,
      },
      {
        title: 'Nahan',
        status: true,
      },
      {
        title: 'Shimla',
        status: true,
      },
      {
        title: 'Una',
        status: true,
      },
      {
        title: 'Jammu and Kashmir (union territory)',
        status: true,
      },
      {
        title: 'Anantnag',
        status: true,
      },
      {
        title: 'Baramula',
        status: true,
      },
      {
        title: 'Doda',
        status: true,
      },
      {
        title: 'Gulmarg',
        status: true,
      },
      {
        title: 'Jammu',
        status: true,
      },
      {
        title: 'Kathua',
        status: true,
      },
      {
        title: 'Punch',
        status: true,
      },
      {
        title: 'Rajouri',
        status: true,
      },
      {
        title: 'Srinagar',
        status: true,
      },
      {
        title: 'Udhampur',
        status: true,
      },
      {
        title: 'Jharkhand',
        status: true,
      },
      {
        title: 'Bokaro',
        status: true,
      },
      {
        title: 'Chaibasa',
        status: true,
      },
      {
        title: 'Deoghar',
        status: true,
      },
      {
        title: 'Dhanbad',
        status: true,
      },
      {
        title: 'Dumka',
        status: true,
      },
      {
        title: 'Giridih',
        status: true,
      },
      {
        title: 'Hazaribag',
        status: true,
      },
      {
        title: 'Jamshedpur',
        status: true,
      },
      {
        title: 'Jharia',
        status: true,
      },
      {
        title: 'Rajmahal',
        status: true,
      },
      {
        title: 'Ranchi',
        status: true,
      },
      {
        title: 'Saraikela',
        status: true,
      },
      {
        title: 'Karnataka',
        status: true,
      },
      {
        title: 'Badami',
        status: true,
      },
      {
        title: 'Ballari',
        status: true,
      },
      {
        title: 'Bengaluru',
        status: true,
      },
      {
        title: 'Belagavi',
        status: true,
      },
      {
        title: 'Bhadravati',
        status: true,
      },
      {
        title: 'Bidar',
        status: true,
      },
      {
        title: 'Chikkamagaluru',
        status: true,
      },
      {
        title: 'Chitradurga',
        status: true,
      },
      {
        title: 'Davangere',
        status: true,
      },
      {
        title: 'Halebid',
        status: true,
      },
      {
        title: 'Hassan',
        status: true,
      },
      {
        title: 'Hubballi-Dharwad',
        status: true,
      },
      {
        title: 'Kalaburagi',
        status: true,
      },
      {
        title: 'Kolar',
        status: true,
      },
      {
        title: 'Madikeri',
        status: true,
      },
      {
        title: 'Mandya',
        status: true,
      },
      {
        title: 'Mangaluru',
        status: true,
      },
      {
        title: 'Mysuru',
        status: true,
      },
      {
        title: 'Raichur',
        status: true,
      },
      {
        title: 'Shivamogga',
        status: true,
      },
      {
        title: 'Shravanabelagola',
        status: true,
      },
      {
        title: 'Shrirangapattana',
        status: true,
      },
      {
        title: 'Tumakuru',
        status: true,
      },
      {
        title: 'Vijayapura',
        status: true,
      },
      {
        title: 'Kerala',
        status: true,
      },
      {
        title: 'Alappuzha',
        status: true,
      },
      {
        title: 'Vatakara',
        status: true,
      },
      {
        title: 'Idukki',
        status: true,
      },
      {
        title: 'Kannur',
        status: true,
      },
      {
        title: 'Kochi',
        status: true,
      },
      {
        title: 'Kollam',
        status: true,
      },
      {
        title: 'Kottayam',
        status: true,
      },
      {
        title: 'Kozhikode',
        status: true,
      },
      {
        title: 'Mattancheri',
        status: true,
      },
      {
        title: 'Palakkad',
        status: true,
      },
      {
        title: 'Thalassery',
        status: true,
      },
      {
        title: 'Thiruvananthapuram',
        status: true,
      },
      {
        title: 'Thrissur',
        status: true,
      },
      {
        title: 'Ladakh (union territory)',
        status: true,
      },
      {
        title: 'Kargil',
        status: true,
      },
      {
        title: 'Leh',
        status: true,
      },
      {
        title: 'Madhya Pradesh',
        status: true,
      },
      {
        title: 'Balaghat',
        status: true,
      },
      {
        title: 'Barwani',
        status: true,
      },
      {
        title: 'Betul',
        status: true,
      },
      {
        title: 'Bharhut',
        status: true,
      },
      {
        title: 'Bhind',
        status: true,
      },
      {
        title: 'Bhojpur',
        status: true,
      },
      {
        title: 'Bhopal',
        status: true,
      },
      {
        title: 'Burhanpur',
        status: true,
      },
      {
        title: 'Chhatarpur',
        status: true,
      },
      {
        title: 'Chhindwara',
        status: true,
      },
      {
        title: 'Damoh',
        status: true,
      },
      {
        title: 'Datia',
        status: true,
      },
      {
        title: 'Dewas',
        status: true,
      },
      {
        title: 'Dhar',
        status: true,
      },
      {
        title: 'Dr. Ambedkar Nagar (Mhow)',
        status: true,
      },
      {
        title: 'Guna',
        status: true,
      },
      {
        title: 'Gwalior',
        status: true,
      },
      {
        title: 'Hoshangabad',
        status: true,
      },
      {
        title: 'Indore',
        status: true,
      },
      {
        title: 'Itarsi',
        status: true,
      },
      {
        title: 'Jabalpur',
        status: true,
      },
      {
        title: 'Jhabua',
        status: true,
      },
      {
        title: 'Khajuraho',
        status: true,
      },
      {
        title: 'Khandwa',
        status: true,
      },
      {
        title: 'Khargone',
        status: true,
      },
      {
        title: 'Maheshwar',
        status: true,
      },
      {
        title: 'Mandla',
        status: true,
      },
      {
        title: 'Mandsaur',
        status: true,
      },
      {
        title: 'Morena',
        status: true,
      },
      {
        title: 'Murwara',
        status: true,
      },
      {
        title: 'Narsimhapur',
        status: true,
      },
      {
        title: 'Narsinghgarh',
        status: true,
      },
      {
        title: 'Narwar',
        status: true,
      },
      {
        title: 'Neemuch',
        status: true,
      },
      {
        title: 'Nowgong',
        status: true,
      },
      {
        title: 'Orchha',
        status: true,
      },
      {
        title: 'Panna',
        status: true,
      },
      {
        title: 'Raisen',
        status: true,
      },
      {
        title: 'Rajgarh',
        status: true,
      },
      {
        title: 'Ratlam',
        status: true,
      },
      {
        title: 'Rewa',
        status: true,
      },
      {
        title: 'Sagar',
        status: true,
      },
      {
        title: 'Sarangpur',
        status: true,
      },
      {
        title: 'Satna',
        status: true,
      },
      {
        title: 'Sehore',
        status: true,
      },
      {
        title: 'Seoni',
        status: true,
      },
      {
        title: 'Shahdol',
        status: true,
      },
      {
        title: 'Shajapur',
        status: true,
      },
      {
        title: 'Sheopur',
        status: true,
      },
      {
        title: 'Shivpuri',
        status: true,
      },
      {
        title: 'Ujjain',
        status: true,
      },
      {
        title: 'Vidisha',
        status: true,
      },
      {
        title: 'Maharashtra',
        status: true,
      },
      {
        title: 'Ahmadnagar',
        status: true,
      },
      {
        title: 'Akola',
        status: true,
      },
      {
        title: 'Amravati',
        status: true,
      },
      {
        title: 'Aurangabad',
        status: true,
      },
      {
        title: 'Bhandara',
        status: true,
      },
      {
        title: 'Bhusawal',
        status: true,
      },
      {
        title: 'Bid',
        status: true,
      },
      {
        title: 'Buldhana',
        status: true,
      },
      {
        title: 'Chandrapur',
        status: true,
      },
      {
        title: 'Daulatabad',
        status: true,
      },
      {
        title: 'Dhule',
        status: true,
      },
      {
        title: 'Jalgaon',
        status: true,
      },
      {
        title: 'Kalyan',
        status: true,
      },
      {
        title: 'Karli',
        status: true,
      },
      {
        title: 'Kolhapur',
        status: true,
      },
      {
        title: 'Mahabaleshwar',
        status: true,
      },
      {
        title: 'Malegaon',
        status: true,
      },
      {
        title: 'Matheran',
        status: true,
      },
      {
        title: 'Mumbai',
        status: true,
      },
      {
        title: 'Nagpur',
        status: true,
      },
      {
        title: 'Nanded',
        status: true,
      },
      {
        title: 'Nashik',
        status: true,
      },
      {
        title: 'Osmanabad',
        status: true,
      },
      {
        title: 'Pandharpur',
        status: true,
      },
      {
        title: 'Parbhani',
        status: true,
      },
      {
        title: 'Pune',
        status: true,
      },
      {
        title: 'Ratnagiri',
        status: true,
      },
      {
        title: 'Sangli',
        status: true,
      },
      {
        title: 'Satara',
        status: true,
      },
      {
        title: 'Sevagram',
        status: true,
      },
      {
        title: 'Solapur',
        status: true,
      },
      {
        title: 'Thane',
        status: true,
      },
      {
        title: 'Ulhasnagar',
        status: true,
      },
      {
        title: 'Vasai-Virar',
        status: true,
      },
      {
        title: 'Wardha',
        status: true,
      },
      {
        title: 'Yavatmal',
        status: true,
      },
      {
        title: 'Manipur',
        status: true,
      },
      {
        title: 'Imphal',
        status: true,
      },
      {
        title: 'Meghalaya',
        status: true,
      },
      {
        title: 'Cherrapunji',
        status: true,
      },
      {
        title: 'Shillong',
        status: true,
      },
      {
        title: 'Mizoram',
        status: true,
      },
      {
        title: 'Aizawl',
        status: true,
      },
      {
        title: 'Lunglei',
        status: true,
      },
      {
        title: 'Nagaland',
        status: true,
      },
      {
        title: 'Kohima',
        status: true,
      },
      {
        title: 'Mon',
        status: true,
      },
      {
        title: 'Phek',
        status: true,
      },
      {
        title: 'Wokha',
        status: true,
      },
      {
        title: 'Zunheboto',
        status: true,
      },
      {
        title: 'Odisha',
        status: true,
      },
      {
        title: 'Balangir',
        status: true,
      },
      {
        title: 'Baleshwar',
        status: true,
      },
      {
        title: 'Baripada',
        status: true,
      },
      {
        title: 'Bhubaneshwar',
        status: true,
      },
      {
        title: 'Brahmapur',
        status: true,
      },
      {
        title: 'Cuttack',
        status: true,
      },
      {
        title: 'Dhenkanal',
        status: true,
      },
      {
        title: 'Kendujhar',
        status: true,
      },
      {
        title: 'Konark',
        status: true,
      },
      {
        title: 'Koraput',
        status: true,
      },
      {
        title: 'Paradip',
        status: true,
      },
      {
        title: 'Phulabani',
        status: true,
      },
      {
        title: 'Puri',
        status: true,
      },
      {
        title: 'Sambalpur',
        status: true,
      },
      {
        title: 'Udayagiri',
        status: true,
      },
      {
        title: 'Puducherry (union territory)',
        status: true,
      },
      {
        title: 'Karaikal',
        status: true,
      },
      {
        title: 'Mahe',
        status: true,
      },
      {
        title: 'Puducherry',
        status: true,
      },
      {
        title: 'Yanam',
        status: true,
      },
      {
        title: 'Punjab',
        status: true,
      },
      {
        title: 'Amritsar',
        status: true,
      },
      {
        title: 'Batala',
        status: true,
      },
      {
        title: 'Chandigarh',
        status: true,
      },
      {
        title: 'Faridkot',
        status: true,
      },
      {
        title: 'Firozpur',
        status: true,
      },
      {
        title: 'Gurdaspur',
        status: true,
      },
      {
        title: 'Hoshiarpur',
        status: true,
      },
      {
        title: 'Jalandhar',
        status: true,
      },
      {
        title: 'Kapurthala',
        status: true,
      },
      {
        title: 'Ludhiana',
        status: true,
      },
      {
        title: 'Nabha',
        status: true,
      },
      {
        title: 'Patiala',
        status: true,
      },
      {
        title: 'Rupnagar',
        status: true,
      },
      {
        title: 'Sangrur',
        status: true,
      },
      {
        title: 'Rajasthan',
        status: true,
      },
      {
        title: 'Abu',
        status: true,
      },
      {
        title: 'Ajmer',
        status: true,
      },
      {
        title: 'Alwar',
        status: true,
      },
      {
        title: 'Amer',
        status: true,
      },
      {
        title: 'Barmer',
        status: true,
      },
      {
        title: 'Beawar',
        status: true,
      },
      {
        title: 'Bharatpur',
        status: true,
      },
      {
        title: 'Bhilwara',
        status: true,
      },
      {
        title: 'Bikaner',
        status: true,
      },
      {
        title: 'Bundi',
        status: true,
      },
      {
        title: 'Chittaurgarh',
        status: true,
      },
      {
        title: 'Churu',
        status: true,
      },
      {
        title: 'Dhaulpur',
        status: true,
      },
      {
        title: 'Dungarpur',
        status: true,
      },
      {
        title: 'Ganganagar',
        status: true,
      },
      {
        title: 'Hanumangarh',
        status: true,
      },
      {
        title: 'Jaipur',
        status: true,
      },
      {
        title: 'Jaisalmer',
        status: true,
      },
      {
        title: 'Jalor',
        status: true,
      },
      {
        title: 'Jhalawar',
        status: true,
      },
      {
        title: 'Jhunjhunu',
        status: true,
      },
      {
        title: 'Jodhpur',
        status: true,
      },
      {
        title: 'Kishangarh',
        status: true,
      },
      {
        title: 'Kota',
        status: true,
      },
      {
        title: 'Merta',
        status: true,
      },
      {
        title: 'Nagaur',
        status: true,
      },
      {
        title: 'Nathdwara',
        status: true,
      },
      {
        title: 'Pali',
        status: true,
      },
      {
        title: 'Phalodi',
        status: true,
      },
      {
        title: 'Pushkar',
        status: true,
      },
      {
        title: 'Sawai Madhopur',
        status: true,
      },
      {
        title: 'Shahpura',
        status: true,
      },
      {
        title: 'Sikar',
        status: true,
      },
      {
        title: 'Sirohi',
        status: true,
      },
      {
        title: 'Tonk',
        status: true,
      },
      {
        title: 'Udaipur',
        status: true,
      },
      {
        title: 'Sikkim',
        status: true,
      },
      {
        title: 'Gangtok',
        status: true,
      },
      {
        title: 'Gyalshing',
        status: true,
      },
      {
        title: 'Lachung',
        status: true,
      },
      {
        title: 'Mangan',
        status: true,
      },
      {
        title: 'Tamil Nadu',
        status: true,
      },
      {
        title: 'Arcot',
        status: true,
      },
      {
        title: 'Chengalpattu',
        status: true,
      },
      {
        title: 'Chennai',
        status: true,
      },
      {
        title: 'Chidambaram',
        status: true,
      },
      {
        title: 'Coimbatore',
        status: true,
      },
      {
        title: 'Cuddalore',
        status: true,
      },
      {
        title: 'Dharmapuri',
        status: true,
      },
      {
        title: 'Dindigul',
        status: true,
      },
      {
        title: 'Erode',
        status: true,
      },
      {
        title: 'Kanchipuram',
        status: true,
      },
      {
        title: 'Kanniyakumari',
        status: true,
      },
      {
        title: 'Kodaikanal',
        status: true,
      },
      {
        title: 'Kumbakonam',
        status: true,
      },
      {
        title: 'Madurai',
        status: true,
      },
      {
        title: 'Mamallapuram',
        status: true,
      },
      {
        title: 'Nagappattinam',
        status: true,
      },
      {
        title: 'Nagercoil',
        status: true,
      },
      {
        title: 'Palayamkottai',
        status: true,
      },
      {
        title: 'Pudukkottai',
        status: true,
      },
      {
        title: 'Rajapalayam',
        status: true,
      },
      {
        title: 'Ramanathapuram',
        status: true,
      },
      {
        title: 'Salem',
        status: true,
      },
      {
        title: 'Thanjavur',
        status: true,
      },
      {
        title: 'Tiruchchirappalli',
        status: true,
      },
      {
        title: 'Tirunelveli',
        status: true,
      },
      {
        title: 'Tiruppur',
        status: true,
      },
      {
        title: 'Thoothukudi',
        status: true,
      },
      {
        title: 'Udhagamandalam',
        status: true,
      },
      {
        title: 'Vellore',
        status: true,
      },
      {
        title: 'Telangana',
        status: true,
      },
      {
        title: 'Hyderabad',
        status: true,
      },
      {
        title: 'Karimnagar',
        status: true,
      },
      {
        title: 'Khammam',
        status: true,
      },
      {
        title: 'Mahbubnagar',
        status: true,
      },
      {
        title: 'Nizamabad',
        status: true,
      },
      {
        title: 'Sangareddi',
        status: true,
      },
      {
        title: 'Warangal',
        status: true,
      },
      {
        title: 'Tripura',
        status: true,
      },
      {
        title: 'Agartala',
        status: true,
      },
      {
        title: 'Uttar Pradesh',
        status: true,
      },
      {
        title: 'Agra',
        status: true,
      },
      {
        title: 'Aligarh',
        status: true,
      },
      {
        title: 'Amroha',
        status: true,
      },
      {
        title: 'Ayodhya',
        status: true,
      },
      {
        title: 'Azamgarh',
        status: true,
      },
      {
        title: 'Bahraich',
        status: true,
      },
      {
        title: 'Ballia',
        status: true,
      },
      {
        title: 'Banda',
        status: true,
      },
      {
        title: 'Bara Banki',
        status: true,
      },
      {
        title: 'Bareilly',
        status: true,
      },
      {
        title: 'Basti',
        status: true,
      },
      {
        title: 'Bijnor',
        status: true,
      },
      {
        title: 'Bithur',
        status: true,
      },
      {
        title: 'Budaun',
        status: true,
      },
      {
        title: 'Bulandshahr',
        status: true,
      },
      {
        title: 'Deoria',
        status: true,
      },
      {
        title: 'Etah',
        status: true,
      },
      {
        title: 'Etawah',
        status: true,
      },
      {
        title: 'Faizabad',
        status: true,
      },
      {
        title: 'Farrukhabad-cum-Fatehgarh',
        status: true,
      },
      {
        title: 'Fatehpur',
        status: true,
      },
      {
        title: 'Fatehpur Sikri',
        status: true,
      },
      {
        title: 'Ghaziabad',
        status: true,
      },
      {
        title: 'Ghazipur',
        status: true,
      },
      {
        title: 'Gonda',
        status: true,
      },
      {
        title: 'Gorakhpur',
        status: true,
      },
      {
        title: 'Hamirpur',
        status: true,
      },
      {
        title: 'Hardoi',
        status: true,
      },
      {
        title: 'Hathras',
        status: true,
      },
      {
        title: 'Jalaun',
        status: true,
      },
      {
        title: 'Jaunpur',
        status: true,
      },
      {
        title: 'Jhansi',
        status: true,
      },
      {
        title: 'Kannauj',
        status: true,
      },
      {
        title: 'Kanpur',
        status: true,
      },
      {
        title: 'Lakhimpur',
        status: true,
      },
      {
        title: 'Lalitpur',
        status: true,
      },
      {
        title: 'Lucknow',
        status: true,
      },
      {
        title: 'Mainpuri',
        status: true,
      },
      {
        title: 'Mathura',
        status: true,
      },
      {
        title: 'Meerut',
        status: true,
      },
      {
        title: 'Mirzapur-Vindhyachal',
        status: true,
      },
      {
        title: 'Moradabad',
        status: true,
      },
      {
        title: 'Muzaffarnagar',
        status: true,
      },
      {
        title: 'Partapgarh',
        status: true,
      },
      {
        title: 'Pilibhit',
        status: true,
      },
      {
        title: 'Prayagraj',
        status: true,
      },
      {
        title: 'Rae Bareli',
        status: true,
      },
      {
        title: 'Rampur',
        status: true,
      },
      {
        title: 'Saharanpur',
        status: true,
      },
      {
        title: 'Sambhal',
        status: true,
      },
      {
        title: 'Shahjahanpur',
        status: true,
      },
      {
        title: 'Sitapur',
        status: true,
      },
      {
        title: 'Sultanpur',
        status: true,
      },
      {
        title: 'Tehri',
        status: true,
      },
      {
        title: 'Varanasi',
        status: true,
      },
      {
        title: 'Uttarakhand',
        status: true,
      },
      {
        title: 'Almora',
        status: true,
      },
      {
        title: 'Dehra Dun',
        status: true,
      },
      {
        title: 'Haridwar',
        status: true,
      },
      {
        title: 'Mussoorie',
        status: true,
      },
      {
        title: 'Nainital',
        status: true,
      },
      {
        title: 'Pithoragarh',
        status: true,
      },
      {
        title: 'West Bengal',
        status: true,
      },
      {
        title: 'Alipore',
        status: true,
      },
      {
        title: 'Alipur Duar',
        status: true,
      },
      {
        title: 'Asansol',
        status: true,
      },
      {
        title: 'Baharampur',
        status: true,
      },
      {
        title: 'Bally',
        status: true,
      },
      {
        title: 'Balurghat',
        status: true,
      },
      {
        title: 'Bankura',
        status: true,
      },
      {
        title: 'Baranagar',
        status: true,
      },
      {
        title: 'Barasat',
        status: true,
      },
      {
        title: 'Barrackpore',
        status: true,
      },
      {
        title: 'Basirhat',
        status: true,
      },
      {
        title: 'Bhatpara',
        status: true,
      },
      {
        title: 'Bishnupur',
        status: true,
      },
      {
        title: 'Budge Budge',
        status: true,
      },
      {
        title: 'Burdwan',
        status: true,
      },
      {
        title: 'Chandernagore',
        status: true,
      },
      {
        title: 'Darjeeling',
        status: true,
      },
      {
        title: 'Diamond Harbour',
        status: true,
      },
      {
        title: 'Dum Dum',
        status: true,
      },
      {
        title: 'Durgapur',
        status: true,
      },
      {
        title: 'Halisahar',
        status: true,
      },
      {
        title: 'Haora',
        status: true,
      },
      {
        title: 'Hugli',
        status: true,
      },
      {
        title: 'Ingraj Bazar',
        status: true,
      },
      {
        title: 'Jalpaiguri',
        status: true,
      },
      {
        title: 'Kalimpong',
        status: true,
      },
      {
        title: 'Kamarhati',
        status: true,
      },
      {
        title: 'Kanchrapara',
        status: true,
      },
      {
        title: 'Kharagpur',
        status: true,
      },
      {
        title: 'Cooch Behar',
        status: true,
      },
      {
        title: 'Kolkata',
        status: true,
      },
      {
        title: 'Krishnanagar',
        status: true,
      },
      {
        title: 'Malda',
        status: true,
      },
      {
        title: 'Midnapore',
        status: true,
      },
      {
        title: 'Murshidabad',
        status: true,
      },
      {
        title: 'Nabadwip',
        status: true,
      },
      {
        title: 'Palashi',
        status: true,
      },
      {
        title: 'Panihati',
        status: true,
      },
      {
        title: 'Purulia',
        status: true,
      },
      {
        title: 'Raiganj',
        status: true,
      },
      {
        title: 'Santipur',
        status: true,
      },
      {
        title: 'Shantiniketan',
        status: true,
      },
      {
        title: 'Shrirampur',
        status: true,
      },
      {
        title: 'Siliguri',
        status: true,
      },
      {
        title: 'Siuri',
        status: true,
      },
      {
        title: 'Tamluk',
        status: true,
      },
      {
        title: 'Titagarh',
        status: true,
      }

    ],
      ["id"]);

  }
}