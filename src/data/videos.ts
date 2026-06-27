export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  duration: string;
  youtubeId?: string;
  featured: boolean;
}

export const videoCategories = ['सभी', 'किसान', 'परिंडा', 'बैठक', 'आंदोलन', 'भाषण'];

export const videos: VideoItem[] = [
  {
    id: 'v-featured',
    title: 'किसानों के लिए कलेक्ट्रेट प्रदर्शन — डॉ. पवन चौधरी का भाषण',
    description: 'झुंझुनू कलेक्ट्रेट पर ऐतिहासिक किसान प्रदर्शन में डॉ. पवन चौधरी का जोशीला भाषण।',
    category: 'आंदोलन',
    date: '15 जून 2025',
    duration: '12:30',
    featured: true,
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `v-${i + 1}`,
    title: [
      'परिंडा अभियान — एक परिंडा अनेक जीवन',
      'किसान संघ की मासिक बैठक',
      'ग्राम हमीनपुर में जनसभा',
      'पर्यावरण संरक्षण अभियान',
      'किसान सम्मेलन 2025',
      'जल संरक्षण अभियान',
      'राष्ट्रीय अधिवेशन रिपोर्ट',
      'ग्रामीण विकास कार्यक्रम',
      'महिला किसान सम्मान',
      'युवा किसान प्रशिक्षण',
    ][i % 10],
    description: `डॉ. पवन चौधरी के नेतृत्व में आयोजित कार्यक्रम की झलकियाँ।`,
    category: ['किसान', 'परिंडा', 'बैठक', 'आंदोलन', 'भाषण'][i % 5],
    date: `${2025 + Math.floor(i / 12)} - ${(i % 12) + 1}`,
    duration: `${5 + (i % 15)}:${String(i * 3 % 60).padStart(2, '0')}`,
    featured: false,
  }))
];
