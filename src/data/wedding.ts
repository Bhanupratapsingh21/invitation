// All content transcribed from the printed wedding card.
// `hi` holds the card's original Hindi; English fields are our renderings.

export type WeddingEvent = {
  id: string;
  name: string;
  nameHi: string;
  tithi: string; // Hindu calendar date as printed
  date: string; // ISO date + local time (IST)
  time: string;
  timeHi: string;
  venue?: string;
  venueHi?: string;
  venueMapUrl?: string;
  image: string; // illustration in /public/images
};

export const invocations = {
  top: ["!! श्री जय माँ आशापुरा नमः !!", "!! श्री गणेशाय नमः !!", "!! श्री भैरवाय नमः !!"],
  shlokaLeft: [
    "वक्रतुण्ड महाकाय सुर्यकोटि समप्रभः।",
    "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा।।",
  ],
  shlokaRight: [
    "विघ्न हरण मंगल करण, लम्बोदर गणराज ।",
    "रिद्धि सिद्धि सहित पधारजो, पुरण करजो काज ।।",
  ],
};

export const invitation = {
  greetingHi: "आत्मीय प्रियवर,...",
  blessingHi:
    "मंगलमय श्री विनायक जी महाराज व कुलदेवी आशापुरा माँ की असीम अनुकम्पा से हमारे यहाँ",
  closingHi: [
    "के !! मंगल परिणयोत्सव !!",
    "की सुमधुर बेला पर आपको सादर आमंत्रित करते हैं ।",
    "आपका आगमन ही हमारे लिए गौरव की अनुभूति होगी ।",
  ],
  closing:
    "cordially invite you to the auspicious wedding celebration. Your presence will be our honour.",
};

export const bride = {
  name: "Neha Kanwar",
  nickname: "Naina",
  nameHi: "आयुष्मति नेहा कंवर (नैना)",
  granddaughterOfHi: "श्रीमती एवं श्री स्व. ठा.सा. मोहनसिंह जी चौहान MTO सा.",
  daughterOfHi: "श्रीमती एवं ठा. गोविन्दसिंह चौहान",
  daughterOf: "Smt. & Th. Govind Singh Chauhan",
  granddaughterOf: "Smt. & Late Th. Sa. Mohan Singh ji Chauhan (MTO Sa.)",
  placeHi: "ठि. कोठारिया",
  place: "Kothariya",
};

export const groom = {
  name: "Pawan Singh",
  nameHi: "आयुष्मान कुं. पवन सिंह",
  grandsonOfHi: "स्व. श्रीमती एवं स्व. ठा.सा. श्री प्रेमसिंह जी शेखावत",
  sonOfHi: "श्रीमती एवं ठा.सा. श्री प्रतापसिंह जी शेखावत",
  sonOf: "Smt. & Th. Sa. Shri Pratap Singh ji Shekhawat",
  grandsonOf: "Late Smt. & Late Th. Sa. Shri Prem Singh ji Shekhawat",
  placeHi: "ठि. मानजी की ढाणी, घाटवा (डिडवाना)",
  place: "Manji ki Dhani, Ghatwa (Didwana)",
};

// Every ceremony is at the family home unless an event names its own venue.
export const homeVenue = {
  name: "Family home, Old Girls School, near Satyanarayan Mandir, Kothariya, Nathdwara",
  nameHi: "निवास स्थान, पुरानी गर्ल्स स्कूल, सत्यनारायण मंदिर के पास, कोठारिया, नाथद्वारा",
  short: "Near Satyanarayan Mandir · Kothariya",
  mapUrl: "https://maps.app.goo.gl/SoJ6ENs2Gz2JLivD8",
};

export const weddingDate ="2026-11-21T09:00:00+05:30"; // Panigrahan Sanskar

export const events: WeddingEvent[] = [
  {
    id: "bheru-poojan",
    image: "/images/pooja.webp",
    name: "Bheru Poojan",
    nameHi: "भैरूपूजन",
    tithi: "कार्तिक सुदी 6 रविवार",
    date: "2026-11-15T09:15:00+05:30",
    time: "9:15 AM",
    timeHi: "प्रातः 09.15 बजे",
  },
  {
    id: "mataji-poojan",
    image: "/images/mataji-pooja.webp",
    name: "Mataji Poojan",
    nameHi: "माताजी पूजन",
    tithi: "कार्तिक सुदी 7 सोमवार",
    date: "2026-11-16T10:15:00+05:30",
    time: "10:15 AM",
    timeHi: "प्रातः 10.15 बजे",
  },
  {
    id: "vinayak-sthapana",
    image: "/images/ganesha.webp",
    name: "Vinayak Sthapana",
    nameHi: "विनायक स्थापना",
    tithi: "कार्तिक सुदी 8 मंगलवार",
    date: "2026-11-17T10:15:00+05:30",
    time: "10:15 AM",
    timeHi: "प्रातः 10.15 बजे",
  },
  {
    id: "haldi",
    image: "/images/haldi.webp",
    name: "Haldi Rasm",
    nameHi: "हल्दी रस्म",
    tithi: "कार्तिक सुदी 9 गुरुवार",
    date: "2026-11-19T15:15:00+05:30",
    time: "3:15 PM",
    timeHi: "दोपहर 03.15 बजे",
  },
  {
    id: "kalash-mehendi",
    image: "/images/mehendi.webp",
    name: "Kalash & Mehendi Rasm",
    nameHi: "कलश एवं मेहन्दी रस्म",
    tithi: "कार्तिक सुदी 10 शुक्रवार",
    date: "2026-11-20T12:30:00+05:30",
    time: "12:30 PM & 2:15 PM",
    timeHi: "दोपहर 12.30 एवं 2.15 बजे",
  },
  {
    id: "mayra",
    image: "/images/mayra.webp",
    name: "Mayra",
    nameHi: "मायरा",
    tithi: "कार्तिक सुदी 10 शुक्रवार",
    date: "2026-11-20T16:15:00+05:30",
    time: "4:15 PM",
    timeHi: "दोपहर 4.15 बजे",
  },
  {
    id: "preetibhoj",
    image: "/images/preetibhoj.webp",
    name: "Preetibhoj",
    nameHi: "प्रीतिभोज",
    tithi: "दि. 20 नवम्बर 2026, शुक्रवार",
    date: "2026-11-20T18:00:00+05:30",
    time: "6 PM onwards",
    timeHi: "सायं 6 बजे से आपके आगमन तक",
    venue: "Terapanth Bhawan, Kothariya",
    venueHi: "तेरापंथ भवन, कोठारिया",
    venueMapUrl: "https://maps.app.goo.gl/6KuA18hn4vmC9s8v9",
  },
  {
    // Not on the printed card; added by the family.
    id: "mahila-sangeet",
    image: "/images/mahila-sangeet.webp",
    name: "Mahila Sangeet",
    nameHi: "महिला संगीत",
    tithi: "कार्तिक सुदी 10 शुक्रवार",
    date: "2026-11-20T20:30:00+05:30",
    time: "8:30 PM",
    timeHi: "रात्रि 8.30 बजे",
  },
  {
    id: "panigrahan",
    image: "/images/mandap.webp",
    name: "Panigrahan Sanskar",
    nameHi: "पाणिग्रहण संस्कार",
    tithi: "कार्तिक सुदी 12 शनिवार",
    date: "2026-11-21T09:00:00+05:30",
    time: "9:00 AM",
    timeHi: "प्रातः 9.00 बजे",
  },
];

export const baraatNote = {
  hi: "बारात ठा.सा. श्री प्रतापसिंह जी शेखावत ठि. घाटवा (डिडवाना) के यहाँ से दि. 21.11.2026 शनिवार को प्रातः 6 बजे आएगी।",
  en: "The baraat from Th. Sa. Shri Pratap Singh ji Shekhawat, Ghatwa (Didwana), arrives on Saturday, 21 November 2026 at 6 AM.",
};

// Family lists, kept in the card's original Hindi.
export const families = {
  hosts: {
    titleHi: "उत्तराकांक्षी",
    names: [
      "ठा. गोविन्दसिंह चौहान",
      "कुं. नरेन्द्रसिंह चौहान",
      "बाईसा कीर्तिसिंह",
      "बाईसा भाविका कुंवर",
    ],
  },
  darshanabhilashi: {
    titleHi: "दर्शनाभिलाषी",
    names: [
      "ठा.सा. नाहरसिंहजी",
      "प्रेमसिंहजी",
      "शम्भूसिंहजी",
      "सत्यनारायणसिंहजी",
      "योगेन्द्रसिंह",
      "परमेन्द्रसिंह",
      "देवेन्द्रसिंह",
      "इन्द्रसिंहप्रतापसिंह",
      "रविन्द्रप्रतापसिंह",
      "करणसिंह",
      "महेन्द्रसिंह",
      "पंकजसिंह",
      "हितेन्द्रप्रतापसिंह",
      "हुकुमप्रतापसिंह चौहान एवं समस्त चौहान परिवार",
    ],
  },
  nanihal: {
    titleHi: "ननिहाल पक्ष",
    names: [
      "ठा.सा. राजेन्द्रसिंह जी",
      "प्रीतमसिंह जी",
      "लक्ष्मणसिंह",
      "कुं. बलवन्तसिंह जी",
      "भानूप्रतापसिंह जी",
      "भं. जीवायसिंह",
      "अन्नतसिंह सिसोदिया",
      "एवं समस्त सिसोदिया परिवार",
    ],
    place: "ठि. पिथोरागढ़ (U.K.) हा.मु. ब्यावर",
  },
  jawai: {
    titleHi: "जवाई पक्ष",
    names: [
      "कुं.सा. बाघसिंह जी सुवावत, ठि. ओनारसिंह जी की भागल",
      "ठा.सा. करणसिंह जी पंवार, ठि. सलूम्बर",
      "ठा.सा. हुकुमसिंह जी सिसोदिया, ठि. फतहनगर",
      "ठा.सा. ललितसिंह जी गौड़, ठि. उदयपुर",
      "कुं.सा. विक्रमसिंह जी चौहान, ठि. अजमेर",
      "ठा.सा. आशीषसिंह पंवार, ठि. अजमेर",
      "ठा. अमरसिंह चौहान, ठि. नीमच",
    ],
  },
  vishesh: {
    titleHi: "विशेष आग्रह",
    names: ["ठा.सा. फतहसिंह चौहान", "ठा.सा. सूरजसिंह चौहान"],
  },
  balManuhar: {
    titleHi: "बालमनुहार",
    names: [
      "केशव", "भव्या", "चैष्ठा", "समृद्धिसिंह", "माधविका", "मृत्युन्जय",
      "नकुलराज", "लक्ष्यराज", "जयराज", "चीनू", "सैजल", "नैनू",
      "भावना", "मिष्ठी", "जितू", "दित्या", "गर्वित", "हार्दिक", "कृष्णा",
      "सोहम", "परी", "रुहान",
    ],
  },
  visheshBalManuhar: {
    titleHi: "विशेष बालमनुहार",
    names: ["जिनी", "जेनी", "आर्या", "जूली", "बेला", "मुकू", "रिको"],
  },
};
