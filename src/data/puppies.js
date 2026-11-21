// Reference image asset helper
export const getImageUrl = (path) => {
  if (!path) return 'https://puppy.instabizweb.com/brand/logo.png';
  if (path.startsWith('http')) return path;
  return `https://puppy.instabizweb.com/_next/image?url=${encodeURIComponent(path)}&w=640&q=75`;
};

export const availablePuppies = [
  {
    slug: 'maltipoo-max-male',
    name: 'Max',
    breed: 'Maltipoo',
    gender: 'boy',
    age: '3 months',
    origin: 'local',
    status: 'available',
    hasVideo: true,
    price: 'AED 8,500',
    description: 'Max is an affectionate, playful teacup Maltipoo with a lush apricot coat and warm personality. Raised in a loving home environment, fully vaccinated, vet-checked, and ready for his forever home.',
    image: '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp',
    gallery: [
      '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp',
      '/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg'
    ]
  },
  {
    slug: 'korean-teacup-maltipoo-female',
    name: 'Korean Teacup Maltipoo',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '2 months',
    origin: 'imported',
    status: 'available',
    hasVideo: true,
    price: 'AED 12,000',
    description: 'Rare Korean bloodline mini Maltipoo girl with doll face features, compact structure, hypoallergenic non-shedding coat, and gentle calm temperament.',
    image: '/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg',
    gallery: [
      '/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg',
      '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp'
    ]
  },
  {
    slug: 'korean-teacup-poodle-female',
    name: 'Korean Teacup Poodle',
    breed: 'Poodle',
    gender: 'girl',
    age: '2 months',
    origin: 'imported',
    status: 'available',
    hasVideo: false,
    price: 'AED 13,500',
    description: 'Exquisite apricot Korean teacup poodle with extremely short muzzle and huge eyes. Microchipped, passport included, IATA approved health records.',
    image: '/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg',
    gallery: [
      '/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg'
    ]
  },
  {
    slug: 'maltipoo-cavapoo-male',
    name: 'Maltipoo & Cavapoo',
    breed: 'Cavapoo',
    gender: 'boy',
    age: '3 months Maltipoo & 2 months Cavapoo',
    origin: 'local',
    status: 'available',
    hasVideo: true,
    price: 'AED 9,000',
    description: 'Littermates with stunning curly coats and social dispositions. Perfect with children and other pets, toilet trained basics began.',
    image: '/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg',
    gallery: [
      '/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg'
    ]
  },
  {
    slug: 'toy-poodle-male-female',
    name: 'Toy Poodle',
    breed: 'Poodle',
    gender: 'boy & girl',
    age: '2 months',
    origin: 'local',
    status: 'available',
    hasVideo: false,
    price: 'AED 7,500',
    description: 'Intelligent, active, and eager to please. Toy poodles are hypoallergenic and make fantastic companions for apartment living in Dubai.',
    image: '/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg',
    gallery: [
      '/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg'
    ]
  },
  {
    slug: 'maltipoo-female-2',
    name: 'Maltipoo Girl',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '3 months',
    origin: 'local',
    status: 'available',
    hasVideo: false,
    price: 'AED 8,800',
    description: 'Sweet honey-cream coat with white chest marking. Incredibly gentle and loves to snuggle.',
    image: '/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg',
    gallery: [
      '/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg'
    ]
  },
  {
    slug: 'pomeranian-female',
    name: 'Pomeranian Girl',
    breed: 'Pomeranian',
    gender: 'girl',
    age: '3 months',
    origin: 'local',
    status: 'available',
    hasVideo: false,
    price: 'AED 9,200',
    description: 'Fluffy cloud with bright eyes and teddy bear face profile. Super affectionate and lively.',
    image: '/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg',
    gallery: [
      '/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg'
    ]
  },
  {
    slug: 'copper-male',
    name: 'Copper',
    breed: 'Cavapoo',
    gender: 'boy',
    age: '2 months',
    origin: 'local',
    status: 'available',
    hasVideo: false,
    price: 'AED 9,500',
    description: 'Copper is a gorgeous red ruby Cavapoo boy with silky waves and curious eyes.',
    image: '/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg',
    gallery: [
      '/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg'
    ]
  },
  {
    slug: 'shitzu-female',
    name: 'Shih Tzu Princess',
    breed: 'Shih Tzu',
    gender: 'girl',
    age: '2 months',
    origin: 'local',
    status: 'available',
    hasVideo: false,
    price: 'AED 6,800',
    description: 'Charming tricolor Shih Tzu girl with luxurious double coat and friendly temperament.',
    image: '/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg',
    gallery: [
      '/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg'
    ]
  },
  {
    slug: 'shitzu-male',
    name: 'Shih Tzu Prince',
    breed: 'Shih Tzu',
    gender: 'boy',
    age: '2 months',
    origin: 'local',
    status: 'available',
    hasVideo: false,
    price: 'AED 6,500',
    description: 'Playful boy with sweet expression and healthy appetite. Loves human company and cuddles.',
    image: '/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg',
    gallery: [
      '/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg'
    ]
  },
  {
    slug: 'maltipoo-female-1',
    name: 'Maltipoo Honey',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '2.5 months',
    origin: 'local',
    status: 'available',
    hasVideo: false,
    price: 'AED 8,600',
    description: 'Petite girl with curly apricot fur. Sociable, happy, and fully adjusted to home routine.',
    image: '/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg',
    gallery: [
      '/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg'
    ]
  },
  {
    slug: 'maltipoo-female',
    name: 'Maltipoo Bella',
    breed: 'Maltipoo',
    gender: 'girl',
    age: '2 months',
    origin: 'local',
    status: 'available',
    hasVideo: false,
    price: 'AED 8,900',
    description: 'Snow white with soft cream highlights. Microchipped, passport and initial vaccination done.',
    image: '/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg',
    gallery: [
      '/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg'
    ]
  },
  {
    slug: 'korean-teacup-pomeranian-1',
    name: 'Korean Teacup Pom (Snow)',
    breed: 'Pomeranian',
    gender: 'girl',
    age: '2 months',
    origin: 'imported',
    status: 'available',
    hasVideo: true,
    price: 'AED 14,000',
    description: 'Pure white show quality Korean line with micro muzzle, short legs, and full double coat.',
    image: '/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg',
    gallery: [
      '/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg'
    ]
  },
  {
    slug: 'korean-teacup-pomeranian',
    name: 'Korean Teacup Pom (Cream)',
    breed: 'Pomeranian',
    gender: 'girl',
    age: '2 months',
    origin: 'imported',
    status: 'available',
    hasVideo: true,
    price: 'AED 13,800',
    description: 'Cream puff miniature teddy face with gentle temperament and excellent international pedigree.',
    image: '/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg',
    gallery: [
      '/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg'
    ]
  },
  {
    slug: 'korean-teacup-pomeranian-male',
    name: 'Korean Teacup Pom (Boy)',
    breed: 'Pomeranian',
    gender: 'boy',
    age: '2 months',
    origin: 'imported',
    status: 'available',
    hasVideo: true,
    price: 'AED 13,500',
    description: 'Charming boy with incredible coat density, compact body frame, and sweet loving nature.',
    image: '/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg',
    gallery: [
      '/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg'
    ]
  }
];

export const goneHomePuppies = [
  {
    slug: 'pomeranian-ace-boy',
    name: 'Ace',
    breed: 'Pomeranian',
    gender: 'boy',
    family: 'Now with the Al-Maktoum Family, Dubai',
    image: '/media/mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif'
  },
  {
    slug: 'poodle-leo-male',
    name: 'Leo',
    breed: 'Poodle',
    gender: 'boy',
    family: 'Adopted by David & Sarah, Palm Jumeirah',
    image: '/media/QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif'
  },
  {
    slug: 'maltipoo-mia-girl',
    name: 'Mia',
    breed: 'Maltipoo',
    gender: 'girl',
    family: 'Living joyfully in Abu Dhabi with the Rahmans',
    image: '/media/4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif'
  },
  {
    slug: 'maltipoo-sadie-girl',
    name: 'Sadie',
    breed: 'Maltipoo',
    gender: 'girl',
    family: 'Happy home in Dubai Marina with Elena & Marc',
    image: '/media/159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif'
  },
  {
    slug: 'blue-marle-pomeranian',
    name: 'Sky',
    breed: 'Pomeranian',
    gender: 'boy',
    family: 'Adopted in Jumeirah Islands',
    image: '/media/bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif'
  }
];
