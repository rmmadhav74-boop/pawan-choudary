export interface TimelineEvent {
  id: string;
  year: string;
  month: string;
  title: string;
  description: string;
  icon: string;
  category: 'kisan' | 'parinda' | 'social' | 'meeting' | 'award';
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'te1',
    year: '2025',
    month: 'जनवरी',
    title: 'जिला अध्यक्ष नियुक्ति',
    description: 'भारतीय किसान संघ, झुंझुनू के जिला अध्यक्ष के रूप में नियुक्ति। जिले भर के किसानों की आवाज बनने का संकल्प।',
    icon: '🌾',
    category: 'kisan'
  },
  {
    id: 'te2',
    year: '2025',
    month: 'मार्च',
    title: 'परिंडा अभियान की शुरुआत',
    description: '"एक परिंडा – अनेक जीवन" अभियान का शुभारम्भ। 50 परिंडे लगाने का प्रारंभिक लक्ष्य निर्धारित।',
    icon: '🕊️',
    category: 'parinda'
  },
  {
    id: 'te3',
    year: '2025',
    month: 'अप्रैल',
    title: 'पिलानी न्यायालय में परिंडे',
    description: 'पिलानी न्यायालय परिसर में 11 परिंडे स्थापित। न्यायालय परिसर में पक्षियों के लिए पानी की व्यवस्था।',
    icon: '⚖️',
    category: 'parinda'
  },
  {
    id: 'te4',
    year: '2025',
    month: 'मई',
    title: '500 परिंडे का संकल्प',
    description: 'जन-भागीदारी की भारी सफलता के बाद परिंडा लक्ष्य 50 से बढ़ाकर 500 किया। पूरे जिले में अभियान का विस्तार।',
    icon: '🌳',
    category: 'parinda'
  },
  {
    id: 'te5',
    year: '2025',
    month: 'जून',
    title: 'हमीनपुर में ग्राम इकाइयों का गठन',
    description: 'हमीनपुर, गाडौली, बेरी, लिखवा और केहरपुरा में ग्राम इकाइयों का गठन। संगठन को जमीनी स्तर पर मजबूत किया।',
    icon: '🏡',
    category: 'meeting'
  },
  {
    id: 'te6',
    year: '2025',
    month: 'जुलाई',
    title: 'कलेक्ट्रेट प्रदर्शन',
    description: 'किसानों के अधिकारों की मांग को लेकर झुंझुनू कलेक्ट्रेट पर जोरदार प्रदर्शन। जिला कलेक्टर को ज्ञापन सौंपा।',
    icon: '✊',
    category: 'kisan'
  },
  {
    id: 'te7',
    year: '2025',
    month: 'अगस्त',
    title: 'राष्ट्रीय अधिवेशन में भागीदारी',
    description: 'दांते वाडा सरदार कृषि नगर यूनिवर्सिटी, गुजरात में राष्ट्रीय किसान अधिवेशन में प्रतिनिधित्व।',
    icon: '🇮🇳',
    category: 'meeting'
  },
  {
    id: 'te8',
    year: '2025',
    month: 'सितम्बर',
    title: 'दिशा समिति राजस्थान — राज्य समिति सदस्य',
    description: 'दिशा समिति राजस्थान के राज्य समिति सदस्य के रूप में नियुक्ति। राज्य स्तर पर किसान हितों की आवाज।',
    icon: '⭐',
    category: 'kisan'
  },
  {
    id: 'te9',
    year: '2025',
    month: 'अक्टूबर',
    title: '500 परिंडे का लक्ष्य पूर्ण',
    description: 'पूरे जिले में 500 से अधिक परिंडे स्थापित। हजारों पक्षियों को गर्मी में जीवनदायी पानी मिला।',
    icon: '🏆',
    category: 'parinda'
  },
  {
    id: 'te10',
    year: '2026',
    month: 'जनवरी',
    title: 'किसान सम्मेलन 2026',
    description: 'जिला स्तरीय किसान सम्मेलन का आयोजन। 18,000 से अधिक किसानों तक संगठन की पहुँच।',
    icon: '🌾',
    category: 'kisan'
  },
  {
    id: 'te11',
    year: '2026',
    month: 'मार्च',
    title: 'ग्रामीण विकास अभियान',
    description: '1000 से अधिक परिवारों तक जनसेवा। ग्रामीण क्षेत्रों में स्वास्थ्य शिविर, शिक्षा सहायता और कृषि प्रशिक्षण।',
    icon: '🤝',
    category: 'social'
  },
  {
    id: 'te12',
    year: '2026',
    month: 'जून',
    title: '50 जनआंदोलन का मील का पत्थर',
    description: 'जिले में 50 से अधिक जनआंदोलनों का सफल नेतृत्व। किसानों, महिलाओं और युवाओं के अधिकारों के लिए संघर्ष।',
    icon: '✊',
    category: 'social'
  }
];

export const stats = [
  { number: 50, suffix: '+', label: 'जनआंदोलन' },
  { number: 500, suffix: '+', label: 'परिंडे अभियान' },
  { number: 18000, suffix: '+', label: 'किसानों की आवाज' },
  { number: 1000, suffix: '+', label: 'परिवारों तक सेवा' },
];
