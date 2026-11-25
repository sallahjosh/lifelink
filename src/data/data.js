export const BLOOD_GROUPS = [
  { type: 'A+',  level: 'high', pct: 85, units: 42 },
  { type: 'A-',  level: 'med',  pct: 45, units: 18 },
  { type: 'B+',  level: 'high', pct: 78, units: 38 },
  { type: 'B-',  level: 'low',  pct: 20, units: 8  },
  { type: 'AB+', level: 'med',  pct: 55, units: 22 },
  { type: 'AB-', level: 'low',  pct: 15, units: 6  },
  { type: 'O+',  level: 'high', pct: 92, units: 54 },
  { type: 'O-',  level: 'med',  pct: 40, units: 16 },
];

export const DONORS = [
  { id:1, name:'Kwame Asante',    initials:'KA', location:'Accra, Greater Accra',   blood:'O+',  age:28, gender:'Male',   donations:12, lastDonation:'2 weeks ago',  available:true,  verified:true  },
  { id:2, name:'Ama Mensah',      initials:'AM', location:'Kumasi, Ashanti',         blood:'A+',  age:34, gender:'Female', donations:7,  lastDonation:'1 month ago',  available:true,  verified:true  },
  { id:3, name:'Kofi Boateng',    initials:'KB', location:'Tamale, Northern',        blood:'B+',  age:25, gender:'Male',   donations:3,  lastDonation:'3 months ago', available:true,  verified:false },
  { id:4, name:'Abena Osei',      initials:'AO', location:'Cape Coast, Central',     blood:'AB+', age:30, gender:'Female', donations:9,  lastDonation:'3 weeks ago',  available:false, verified:true  },
  { id:5, name:'Yaw Darko',       initials:'YD', location:'Accra, Greater Accra',    blood:'O-',  age:22, gender:'Male',   donations:1,  lastDonation:'4 months ago', available:true,  verified:false },
  { id:6, name:'Efua Acheampong', initials:'EA', location:'Sunyani, Brong-Ahafo',    blood:'A-',  age:38, gender:'Female', donations:15, lastDonation:'1 week ago',   available:true,  verified:true  },
];

export const HOSPITALS = [
  { id:1, name:'Korle Bu Teaching Hospital',     location:'Accra, Greater Accra',    phone:'+233 302 674 345', hours:'24/7',       bloodBank:true,  status:'open'   },
  { id:2, name:'Komfo Anokye Teaching Hospital', location:'Kumasi, Ashanti',          phone:'+233 322 022 301', hours:'24/7',       bloodBank:true,  status:'open'   },
  { id:3, name:'Tamale Teaching Hospital',       location:'Tamale, Northern Region',  phone:'+233 372 022 530', hours:'24/7',       bloodBank:true,  status:'open'   },
  { id:4, name:'Cape Coast Teaching Hospital',   location:'Cape Coast, Central',      phone:'+233 332 132 480', hours:'08:00–18:00',bloodBank:false, status:'open'   },
  { id:5, name:'Ridge Hospital',                 location:'Accra, Greater Accra',     phone:'+233 302 663 601', hours:'24/7',       bloodBank:true,  status:'open'   },
  { id:6, name:'Ho Teaching Hospital',           location:'Ho, Volta Region',         phone:'+233 362 027 652', hours:'24/7',       bloodBank:false, status:'closed' },
];

export const FAQS = [
  { q:'How do I register as a blood donor?',         a:'Click "Become a Donor" and complete the registration form with your personal details, blood type, and contact information. Your profile will be verified and activated within 24 hours.' },
  { q:'How often can I donate blood?',               a:'Whole blood donors can donate every 3 months (12 weeks). Platelet donors can give every 2 weeks. Plasma donors can give every 4 weeks.' },
  { q:'Is donating blood safe?',                     a:'Yes. All equipment is sterile and single-use. The process is performed by trained healthcare professionals. Most donors feel fine immediately after and are encouraged to rest and hydrate.' },
  { q:'How is my personal information protected?',   a:'LifeLink complies with Ghana\'s Data Protection Act 2012. Your data is encrypted, stored securely, and only shared with verified healthcare professionals with your explicit consent.' },
  { q:'How do I request blood for a patient?',       a:'Use the Request Blood form on this page. Fill in the patient\'s details, required blood type, urgency level, and hospital. Our system will immediately alert compatible available donors.' },
  { q:'Can I update my donor profile?',              a:'Yes. Log into your account, navigate to Profile Settings, and update any information including your availability status, contact details, or medical history.' },
];

export const WALL_DONORS = [
  { initials:'KA', name:'Kwame A.',   count:12 },
  { initials:'AM', name:'Ama M.',     count:7  },
  { initials:'YD', name:'Yaw D.',     count:1  },
  { initials:'EA', name:'Efua A.',    count:15 },
  { initials:'KB', name:'Kofi B.',    count:3  },
  { initials:'AO', name:'Abena O.',   count:9  },
  { initials:'PK', name:'Paa K.',     count:5  },
  { initials:'AS', name:'Akua S.',    count:11 },
  { initials:'BT', name:'Bright T.',  count:2  },
  { initials:'JA', name:'Joyce A.',   count:8  },
  { initials:'MA', name:'Michael A.', count:6  },
  { initials:'RO', name:'Rose O.',    count:4  },
];

export const STATS = [
  { num:'2,400+', label:'Registered Donors' },
  { num:'890+',   label:'Lives Saved'       },
  { num:'48',     label:'Partner Hospitals' },
  { num:'8',      label:'Blood Types Tracked'},
];

export const AWARENESS = [
  {
    tag: 'Why Donate',
    emoji: '💉',
    bg: '#fde8e8',
    title: 'One Donation Can Save Up to 3 Lives',
    text: 'Blood cannot be manufactured — it can only come from generous donors. A single donation is separated into red cells, plasma, and platelets, each helping a different patient.',
  },
  {
    tag: 'Eligibility',
    emoji: '✅',
    bg: '#e8f5e9',
    title: 'Are You Eligible to Donate?',
    text: 'Most healthy adults aged 17–65 weighing at least 50 kg can donate. You must not have donated in the last 3 months and must be free of certain infections.',
  },
  {
    tag: 'Blood Facts',
    emoji: '🩸',
    bg: '#fff3e0',
    title: 'Blood Group Compatibility Guide',
    text: 'O- is the universal donor — anyone can receive it in emergencies. AB+ is the universal recipient. Knowing your blood type and compatible types can be lifesaving.',
  },
];
