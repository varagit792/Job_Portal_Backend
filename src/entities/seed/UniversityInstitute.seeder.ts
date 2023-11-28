import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { UniversityInstitute } from '../universityInstitute.entity';

export default class UniversityInstituteSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(UniversityInstitute);
    await repository.upsert([
      {
        title: 'A.P.University of Law',
        status: true,
      },
      {
        title: 'Acharya N. G. Ranga Agricultural University',
        status: true,
      },
      {
        title: 'Acharya Nagarjuna University',
        status: true,
      },
      {
        title: 'Adikavi Nannaya University',
        status: true,
      },
      {
        title: 'Andhra Pradesh Open University',
        status: true,
      },
      {
        title: 'Andhra University',
        status: true,
      },
      {
        title: 'Dr. B.R. Ambedkar University, Srikakulam',
        status: true,
      },
      {
        title: 'Dr. Nandamuri Taraka Rama Rao University of Health Sciences, Andhra Pradesh',
        status: true,
      },
      {
        title: 'Dravidian University',
        status: true,
      },
      {
        title: 'Jawaharlal Nehru Architecture and Fine Arts University',
        status: true,
      },
      {
        title: 'Jawaharlal Nehru Technological University, Anantapur',
        status: true,
      },
      {
        title: 'Jawaharlal Nehru Technological University, Hyderabad',
        status: true,
      },
      {
        title: 'Jawaharlal Nehru Technological University, Kakinada',
        status: true,
      },
      {
        title: 'Kakatiya University',
        status: true,
      },
      {
        title: 'Krishna University',
        status: true,
      },
      {
        title: 'Mahatma Gandhi University, Nalgonda',
        status: true,
      },
      {
        title: 'National Academy of Legal Studies and Research',
        status: true,
      },
      {
        title: 'Osmania University',
        status: true,
      },
      {
        title: 'Palamuru University',
        status: true,
      },
      {
        title: 'Potti Sreeramulu Telugu University',
        status: true,
      },
      {
        title: 'Rajiv Gandhi University of Knowledge Technologies',
        status: true,
      },
      {
        title: 'Rayalaseema University',
        status: true,
      },
      {
        title: 'Satavahana University',
        status: true,
      },
      {
        title: 'Sri Krishnadevaraya University',
        status: true,
      },
      {
        title: 'Sri Padmavati Mahila Visvavidyalayam',
        status: true,
      },
      {
        title: 'Sri Venkateswara Institute of Medical Sciences',
        status: true,
      },
      {
        title: 'Sri Venkateswara University',
        status: true,
      },
      {
        title: 'Sri Venkateswara Vedic University',
        status: true,
      },
      {
        title: 'Sri Venkateswara Veterinary University',
        status: true,
      },
      {
        title: 'Telangana University',
        status: true,
      },
      {
        title: 'Vikrama Simhapuri University',
        status: true,
      },
      {
        title: 'Yogi Vemana University',
        status: true,
      },
      {
        title: 'Assam Agricultural University',
        status: true,
      },
      {
        title: 'Dibrugarh University',
        status: true,
      },
      {
        title: 'Gauhati University',
        status: true,
      },
      {
        title: 'Krishna Kanta Handique State Open University',
        status: true,
      },
      {
        title: 'Aryabhatta Knowledge University',
        status: true,
      },
      {
        title: 'B. R. Ambedkar Bihar University',
        status: true,
      },
      {
        title: 'Bhupendra Narayan Mandal University',
        status: true,
      },
      {
        title: 'Chanakya National Law University',
        status: true,
      },
      {
        title: 'Jai Prakash University',
        status: true,
      },
      {
        title: 'Kameshwar Singh Darbhanga Sanskrit University',
        status: true,
      },
      {
        title: 'Lalit Narayan Mithila University',
        status: true,
      },
      {
        title: 'Magadh University',
        status: true,
      },
      {
        title: 'Maulana Mazharul Haque Arabic and Persian University',
        status: true,
      },
      {
        title: 'Nalanda Open University',
        status: true,
      },
      {
        title: 'Patna University',
        status: true,
      },
      {
        title: 'Rajendra Agricultural University',
        status: true,
      },
      {
        title: 'Tilka Manjhi Bhagalpur University',
        status: true,
      },
      {
        title: 'Veer Kunwar Singh University',
        status: true,
      },
      {
        title: 'Panjab University, Chandigarh',
        status: true,
      },
      {
        title: 'Ayush and Health Sciences University of Chhattisgarh',
        status: true,
      },
      {
        title: 'Bastar University',
        status: true,
      },
      {
        title: 'Chhattisgarh Swami Vivekanand Technical University',
        status: true,
      },
      {
        title: 'Hidayatullah National Law University',
        status: true,
      },
      {
        title: 'Indira Gandhi Agricultural University',
        status: true,
      },
      {
        title: 'Indira Kala Sangeet University',
        status: true,
      },
      {
        title: 'Kushabhau Thakre Patrakarita Avam Jansanchar University',
        status: true,
      },
      {
        title: 'Pandit Ravishankar Shukla University',
        status: true,
      },
      {
        title: 'Pandit Sundarlal Sharma (Open) University',
        status: true,
      },
      {
        title: 'Sarguja University',
        status: true,
      },
      {
        title: 'Bharat Ratna Dr. B. R. Ambedkar University',
        status: true,
      },
      {
        title: 'Delhi Technological University',
        status: true,
      },
      {
        title: 'Guru Gobind Singh Indraprastha University',
        status: true,
      },
      {
        title: 'Indraprastha Institute of Information Technology',
        status: true,
      },
      {
        title: 'National Law University, Delhi',
        status: true,
      },
      {
        title: 'Goa University',
        status: true,
      },
      {
        title: 'Anand Agricultural University',
        status: true,
      },
      {
        title: 'Maharaja Krishnakumarsinhji Bhavnagar University',
        status: true,
      },
      {
        title: 'Rai University, Ahmedabad',
        status: true,
      },
      {
        title: 'Centre for Environmental and Planning Technology University',
        status: true,
      },
      {
        title: 'Dharamsinh Desai University',
        status: true,
      },
      {
        title: 'Dr. Babasaheb Ambedkar Open University',
        status: true,
      },
      {
        title: 'Gujarat Ayurved University',
        status: true,
      },
      {
        title: 'Gujarat Forensic Sciences University',
        status: true,
      },
      {
        title: 'Gujarat National Law University',
        status: true,
      },
      {
        title: 'Gujarat Technological University',
        status: true,
      },
      {
        title: 'Gujarat University',
        status: true,
      },
      {
        title: 'Hemchandracharya North Gujarat University',
        status: true,
      },
      {
        title: 'Krantiguru Shyamji Krishna Verma Kachchh University',
        status: true,
      },
      {
        title: 'Maharaja Sayajirao University of Baroda',
        status: true,
      },
      {
        title: 'Sardar Patel University',
        status: true,
      },
      {
        title: 'Sardarkrushinagar Dantiwada Agricultural University',
        status: true,
      },
      {
        title: 'Saurashtra University',
        status: true,
      },
      {
        title: 'Shree Somnath Sanskrit University',
        status: true,
      },
      {
        title: 'Veer Narmad South Gujarat University',
        status: true,
      },
      {
        title: 'Bhagat Phool Singh Mahila Vishwavidyalaya',
        status: true,
      },
      {
        title: 'Chaudhary Charan Singh Haryana Agricultural University',
        status: true,
      },
      {
        title: 'Chaudhary Devi Lal University',
        status: true,
      },
      {
        title: 'Deenbandhu Chhotu Ram University of Science and Technology',
        status: true,
      },
      {
        title: 'Guru Jambheshwar University of Science and Technology',
        status: true,
      },
      {
        title: 'Kurukshetra University',
        status: true,
      },
      {
        title: 'Lala Lajpat Rai University of Veterinary and Animal Sciences',
        status: true,
      },
      {
        title: 'Maharishi Dayanand University',
        status: true,
      },
      {
        title: 'Pandit Bhagwat Dayal Sharma University of Health Sciences',
        status: true,
      },
      {
        title: 'YMCA University of Science and Technology',
        status: true,
      },
      {
        title: 'Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishvavidyalaya',
        status: true,
      },
      {
        title: 'Dr. Yashwant Singh Parmar University of Horticulture and Forestry',
        status: true,
      },
      {
        title: 'Himachal Pradesh Technical University',
        status: true,
      },
      {
        title: 'Himachal Pradesh University',
        status: true,
      },
      {
        title: 'Baba Ghulam Shah Badhshah University',
        status: true,
      },
      {
        title: 'Islamic University of Science and Technology',
        status: true,
      },
      {
        title: 'Sher-e-Kashmir University of Agricultural Sciences and Technology of Kashmir',
        status: true,
      },
      {
        title: 'Shri Mata Vaishno Devi University',
        status: true,
      },
      {
        title: 'University of Jammu',
        status: true,
      },
      {
        title: 'University of Kashmir',
        status: true,
      },
      {
        title: 'Birsa Agricultural University',
        status: true,
      },
      {
        title: 'Kolhan University',
        status: true,
      },
      {
        title: 'National University of Study and Research in Law',
        status: true,
      },
      {
        title: 'Nilamber-Pitamber University',
        status: true,
      },
      {
        title: 'Ranchi University',
        status: true,
      },
      {
        title: 'Sido Kanhu University',
        status: true,
      },
      {
        title: 'Vinoba Bhave University',
        status: true,
      },
      {
        title: 'Bangalore University',
        status: true,
      },
      {
        title: 'Davangere University',
        status: true,
      },
      {
        title: 'Gulbarga University',
        status: true,
      },
      {
        title: 'Kannada University',
        status: true,
      },
      {
        title: 'Karnatak University',
        status: true,
      },
      {
        title: 'Karnataka Samskrit University',
        status: true,
      },
      {
        title: 'Karnataka State Law University',
        status: true,
      },
      {
        title: 'Karnataka State Open University',
        status: true,
      },
      {
        title: 'Karnataka State Womens University',
        status: true,
      },
      {
        title: 'Karnataka Veterinary, Animal and Fisheries Sciences University',
        status: true,
      },
      {
        title: 'KSGH Music and Performing Arts University',
        status: true,
      },
      {
        title: 'Kuvempu University',
        status: true,
      },
      {
        title: 'Mangalore University',
        status: true,
      },
      {
        title: 'National Law School of India University',
        status: true,
      },
      {
        title: 'Rajiv Gandhi University of Health Sciences',
        status: true,
      },
      {
        title: 'Rani Channamma University',
        status: true,
      },
      {
        title: 'Tumkur University',
        status: true,
      },
      {
        title: 'University of Agricultural Sciences, Bangalore',
        status: true,
      },
      {
        title: 'University of Agricultural Sciences, Dharwad',
        status: true,
      },
      {
        title: 'University of Mysore',
        status: true,
      },
      {
        title: 'Visvesvaraya Technological University',
        status: true,
      },
      {
        title: 'Vijayanagara Sri Krishnadevaraya University',
        status: true,
      },
      {
        title: 'Calicut University',
        status: true,
      },
      {
        title: 'Cochin University of Science and Technology',
        status: true,
      },
      {
        title: 'Kannur University',
        status: true,
      },
      {
        title: 'Kerala Agricultural University',
        status: true,
      },
      {
        title: 'Kerala University of Fisheries and Ocean Studies',
        status: true,
      },
      {
        title: 'Kerala University of Health Sciences',
        status: true,
      },
      {
        title: 'Kerala Veterinary and Animal Sciences University',
        status: true,
      },
      {
        title: 'Mahatma Gandhi University',
        status: true,
      },
      {
        title: 'National University of Advanced Legal Studies',
        status: true,
      },
      {
        title: 'Sree Sankaracharya University of Sanskrit',
        status: true,
      },
      {
        title: 'University of Kerala',
        status: true,
      },
      {
        title: 'Awdhesh Pratap Singh University',
        status: true,
      },
      {
        title: 'Barkatullah University',
        status: true,
      },
      {
        title: 'Devi Ahilya University',
        status: true,
      },
      {
        title: 'Jawaharlal Nehru Agricultural University',
        status: true,
      },
      {
        title: 'Jiwaji University',
        status: true,
      },
      {
        title: 'Madhya Pradesh Bhoj Open University',
        status: true,
      },
      {
        title: 'Maharishi Mahesh Yogi Vedic Vishwavidyalaya',
        status: true,
      },
      {
        title: 'Maharshi Panini Sanskrit University',
        status: true,
      },
      {
        title: 'Mahatma Gandhi Chitrakoot Gramoday University',
        status: true,
      },
      {
        title: 'Makhanlal Chaturvedi National University of Journalism',
        status: true,
      },
      {
        title: 'National Law Institute University',
        status: true,
      },
      {
        title: 'Rajiv Gandhi Technical University',
        status: true,
      },
      {
        title: 'Rani Durgavati University',
        status: true,
      },
      {
        title: 'Madhya Pradesh Pashu-Chikitsa Vigyan Vishwavidyalaya',
        status: true,
      },
      {
        title: 'Vikram University',
        status: true,
      },
      {
        title: 'Dr. Babasaheb Ambedkar Marathwada University',
        status: true,
      },
      {
        title: 'Dr. Babasaheb Ambedkar Technological University',
        status: true,
      },
      {
        title: 'Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth',
        status: true,
      },
      {
        title: 'Dr. Panjabrao Deshmukh Krishi Vidyapeeth',
        status: true,
      },
      {
        title: 'Kavi Kulguru Kalidas Sanskrit Vishwavidyalaya',
        status: true,
      },
      {
        title: 'Maharashtra Animal and Fishery Sciences University',
        status: true,
      },
      {
        title: 'Maharashtra University of Health Sciences',
        status: true,
      },
      {
        title: 'Mahatma Phule Krishi Vidyapeeth',
        status: true,
      },
      {
        title: 'Marathwada Agricultural University',
        status: true,
      },
      {
        title: 'North Maharashtra University',
        status: true,
      },
      {
        title: 'Rashtrasant Tukadoji Maharaj Nagpur University',
        status: true,
      },
      {
        title: 'Sant Gadge Baba Amravati University',
        status: true,
      },
      {
        title: 'Shivaji University',
        status: true,
      },
      {
        title: 'Shreemati Nathibai Damodar Thackersey Womens University',
        status: true,
      },
      {
        title: 'Solapur University',
        status: true,
      },
      {
        title: 'Swami Ramanand Teerth Marathwada University',
        status: true,
      },
      {
        title: 'University of Mumbai',
        status: true,
      },
      {
        title: 'University of Pune',
        status: true,
      },
      {
        title: 'Yashwantrao Chavan Maharashtra Open University',
        status: true,
      },
      {
        title: 'Berhampur University',
        status: true,
      },
      {
        title: 'Biju Patnaik University of Technology',
        status: true,
      },
      {
        title: 'Fakir Mohan University',
        status: true,
      },
      {
        title: 'National Law University, Orissa',
        status: true,
      },
      {
        title: 'North Orissa University',
        status: true,
      },
      {
        title: 'Orissa University of Agriculture and Technology',
        status: true,
      },
      {
        title: 'Ravenshaw University',
        status: true,
      },
      {
        title: 'Sambalpur University',
        status: true,
      },
      {
        title: 'Shri Jagannath Sanskrit Vishvavidyalaya',
        status: true,
      },
      {
        title: 'Utkal University',
        status: true,
      },
      {
        title: 'Utkal University of Culture',
        status: true,
      },
      {
        title: 'Veer Surendra Sai University of Technology, Burla',
        status: true,
      },
      {
        title: 'Baba Farid University of Health Sciences',
        status: true,
      },
      {
        title: 'Guru Angad Dev Veterinary and Animal Sciences University',
        status: true,
      },
      {
        title: 'Guru Nanak Dev University',
        status: true,
      },
      {
        title: 'Punjab Agricultural University',
        status: true,
      },
      {
        title: 'Punjab Technical University',
        status: true,
      },
      {
        title: 'Punjabi University',
        status: true,
      },
      {
        title: 'Rajiv Gandhi National University of Law',
        status: true,
      },
      {
        title: 'Jagadguru Ramanadacharya Rajasthan Sanskrit University',
        status: true,
      },
      {
        title: 'Jai Narain Vyas University',
        status: true,
      },
      {
        title: 'Maharaja Ganga Singh University',
        status: true,
      },
      {
        title: 'Maharana Pratap University of Agriculture and Technology',
        status: true,
      },
      {
        title: 'Maharshi Dayanand Saraswati University',
        status: true,
      },
      {
        title: 'Mohanlal Sukhadia University',
        status: true,
      },
      {
        title: 'National Law University, Jodhpur',
        status: true,
      },
      {
        title: 'Rajasthan Agricultural University',
        status: true,
      },
      {
        title: 'Rajasthan Ayurved University',
        status: true,
      },
      {
        title: 'Rajasthan Technical University',
        status: true,
      },
      {
        title: 'Rajasthan University of Health Sciences',
        status: true,
      },
      {
        title: 'University of Kota',
        status: true,
      },
      {
        title: 'University of Rajasthan',
        status: true,
      },
      {
        title: 'Vardhaman Mahaveer Open University',
        status: true,
      },
      {
        title: 'Alagappa University',
        status: true,
      },
      {
        title: 'Anna University, Chennai',
        status: true,
      },
      {
        title: 'Anna University of Technology, Chennai',
        status: true,
      },
      {
        title: 'Anna University of Technology, Coimbatore',
        status: true,
      },
      {
        title: 'Anna University of Technology, Madurai',
        status: true,
      },
      {
        title: 'Anna University of Technology, Tiruchirappalli',
        status: true,
      },
      {
        title: 'Anna University of Technology Tirunelveli',
        status: true,
      },
      {
        title: 'Annamalai University',
        status: true,
      },
      {
        title: 'Bharathiar University',
        status: true,
      },
      {
        title: 'Bharathidasan University',
        status: true,
      },
      {
        title: 'Madurai Kamaraj University',
        status: true,
      },
      {
        title: 'Manonmaniam Sundaranar University',
        status: true,
      },
      {
        title: 'Mother Teresa Womens University',
        status: true,
      },
      {
        title: 'Periyar University',
        status: true,
      },
      {
        title: 'Tamil University',
        status: true,
      },
      {
        title: 'Tamil Nadu Agricultural University',
        status: true,
      },
      {
        title: 'Tamil Nadu Dr. Ambedkar Law University',
        status: true,
      },
      {
        title: 'Tamil Nadu Dr. M.G.R. Medical University',
        status: true,
      },
      {
        title: 'Tamil Nadu Open University',
        status: true,
      },
      {
        title: 'Tamil Nadu Physical Education and Sports University',
        status: true,
      },
      {
        title: 'Tamil Nadu Teacher Education University',
        status: true,
      },
      {
        title: 'Tamil Nadu Veterinary and Animal Sciences University',
        status: true,
      },
      {
        title: 'Thiruvalluvar University',
        status: true,
      },
      {
        title: 'University of Madras',
        status: true,
      },
      {
        title: 'Bundelkhand University',
        status: true,
      },
      {
        title: 'Chandra Shekhar Azad University of Agriculture and Technology',
        status: true,
      },
      {
        title: 'Chaudhary Charan Singh University',
        status: true,
      },
      {
        title: 'Chhatrapati Shahuji Maharaj Medical University',
        status: true,
      },
      {
        title: 'Chhatrapati Shahu Ji Maharaj University',
        status: true,
      },
      {
        title: 'Deen Dayal Upadhyay Gorakhpur University',
        status: true,
      },
      {
        title: 'Dr. B. R. Ambedkar University',
        status: true,
      },
      {
        title: 'Dr. Ram Manohar Lohia Avadh University',
        status: true,
      },
      {
        title: 'Dr. Ram Manohar Lohia National Law University',
        status: true,
      },
      {
        title: 'Dr. Shakuntala Misra Rehabilitation University',
        status: true,
      },
      {
        title: 'Gautam Buddha University',
        status: true,
      },
      {
        title: 'Gautam Buddh Technical University',
        status: true,
      },
      {
        title: 'M. J. P. Rohilkhand University',
        status: true,
      },
      {
        title: 'Mahamaya Technical University',
        status: true,
      },
      {
        title: 'Mahatma Gandhi Kashi Vidyapeeth',
        status: true,
      },
      {
        title: 'Manyavar Sri Kanshi Ram Ji Urdu, Arabi~Farsi University',
        status: true,
      },
      {
        title: 'Narendra Dev University of Agriculture and Technology',
        status: true,
      },
      {
        title: 'Sampurnanand Sanskrit University',
        status: true,
      },
      {
        title: 'Sardar Vallabhbhai Patel University of Agriculture and Technology',
        status: true,
      },
      {
        title: 'University of Lucknow',
        status: true,
      },
      {
        title: 'Uttar Pradesh King Georges University of Dental Sciences',
        status: true,
      },
      {
        title: 'Uttar Pradesh Rajarshi Tandon Open University',
        status: true,
      },
      {
        title: 'Veer Bahadur Singh Purvanchal University',
        status: true,
      },
      {
        title: 'Doon University',
        status: true,
      },
      {
        title: 'G. B. Pant University of Agriculture and Technology',
        status: true,
      },
      {
        title: 'Kumaun University',
        status: true,
      },
      {
        title: 'Uttarakhand Open University',
        status: true,
      },
      {
        title: 'Uttarakhand Technical University',
        status: true,
      },
      {
        title: 'Uttaranchal Sanskrit University',
        status: true,
      },
      {
        title: 'Aliah University',
        status: true,
      },
      {
        title: 'Bengal Engineering and Science University, Shibpur',
        status: true,
      },
      {
        title: 'Bidhan Chandra Krishi Viswavidyalaya',
        status: true,
      },
      {
        title: 'Jadavpur University',
        status: true,
      },
      {
        title: 'Netaji Subhas Open University',
        status: true,
      },
      {
        title: 'Presidency University, Kolkata',
        status: true,
      },
      {
        title: 'Rabindra Bharati University',
        status: true,
      },
      {
        title: 'Sidho Kanho Birsha University',
        status: true,
      },
      {
        title: 'University of Burdwan',
        status: true,
      },
      {
        title: 'University of Calcutta',
        status: true,
      },
      {
        title: 'University of Gour Banga',
        status: true,
      },
      {
        title: 'University of Kalyani',
        status: true,
      },
      {
        title: 'University of North Bengal',
        status: true,
      },
      {
        title: 'Uttar Banga Krishi Vishwavidyalaya',
        status: true,
      },
      {
        title: 'Vidyasagar University',
        status: true,
      },
      {
        title: 'West Bengal State University',
        status: true,
      },
      {
        title: 'West Bengal National University of Juridical Sciences',
        status: true,
      },
      {
        title: 'West Bengal University of Animal and Fishery Sciences',
        status: true,
      },
      {
        title: 'West Bengal University of Health Sciences',
        status: true,
      },
      {
        title: 'West Bengal University of Technology',
        status: true,
      }
    ],
      ["id"]);

  }
}