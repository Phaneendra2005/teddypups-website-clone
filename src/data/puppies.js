// Official TeddyPups public media assets and puppy directory
export const getImageUrl = (path) => {
  if (!path) return 'https://puppy.instabizweb.com/brand/logo.png';
  if (path.startsWith('http')) return path;
  return `https://puppy.instabizweb.com/_next/image?url=${encodeURIComponent(path)}&w=640&q=75`;
};

// 15 Available Puppies exactly from https://puppy.instabizweb.com/puppies
export const availablePuppies = [
  {
    slug: 'maltipoo-max-male',
    name: 'Max',
    breed: 'Maltipoo',
    gender: 'Boy',
    age: '3 months',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: true,
    image: '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp',
    gallery: [
      '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp',
      '/media/RH7J577OfQ7f/e776d07dbd/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg'
    ],
    video: '/media/jNYYlZcF2IuE/61af7a5e09/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67.mp4'
  },
  {
    slug: 'korean-teacup-maltipoo-female',
    name: 'Korean Teacup Maltipoo',
    breed: 'Maltipoo',
    gender: 'Girl',
    age: '2 months',
    where: 'Imported for you',
    status: 'Available',
    hasVideo: true,
    image: '/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg',
    gallery: [
      '/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg',
      '/media/VEmjKw7D8k2w/44fc2c4d8f/b942a5_fc2a6555d51b4e65b8ad229592c3755bf002.jpg'
    ],
    video: '/media/sfXWPM3b8qVt/5b2a08dab3/b942a5_fc2a6555d51b4e65b8ad229592c3755b.mp4'
  },
  {
    slug: 'korean-teacup-poodle-female',
    name: 'Korean Teacup Poodle',
    breed: 'Poodle',
    gender: 'Girl',
    age: '2 months',
    where: 'Imported for you',
    status: 'Available',
    hasVideo: false,
    image: '/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg',
    gallery: [
      '/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg'
    ]
  },
  {
    slug: 'maltipoo-cavapoo-male',
    name: 'Maltipoo & Cavapoo',
    breed: 'Maltipoo & Cavapoo',
    gender: 'Boy',
    age: '3 months Maltipoo & 2 months Cavapoo',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: true,
    image: '/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg',
    gallery: [
      '/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg',
      '/media/czRyKKk8Lm5N/6356959786/b942a5_93358f1b7c434434b226b19e9ee0705bf002.jpg'
    ],
    video: '/media/_cJaO-ryO6ev/af9e004679/b942a5_93358f1b7c434434b226b19e9ee0705b.mp4'
  },
  {
    slug: 'toy-poodle-male-female',
    name: 'Toy Poodle',
    breed: 'Toy Poodle',
    gender: 'Boy & Girl',
    age: '2 months',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: false,
    image: '/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg',
    gallery: [
      '/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg'
    ]
  },
  {
    slug: 'maltipoo-female-2',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'Girl',
    age: '3 months',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: false,
    image: '/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg',
    gallery: [
      '/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg'
    ]
  },
  {
    slug: 'pomeranian-female',
    name: 'Pomeranian',
    breed: 'Pomeranian',
    gender: 'Girl',
    age: '3 months',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: false,
    image: '/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg',
    gallery: [
      '/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg'
    ]
  },
  {
    slug: 'copper-male',
    name: 'Copper',
    breed: 'Cavapoo',
    gender: 'Boy',
    age: '2 months',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: false,
    image: '/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg',
    gallery: [
      '/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg'
    ]
  },
  {
    slug: 'shitzu-female',
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    gender: 'Girl',
    age: '2 months',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: false,
    image: '/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg',
    gallery: [
      '/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg'
    ]
  },
  {
    slug: 'shitzu-male',
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    gender: 'Boy',
    age: '2 months',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: false,
    image: '/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg',
    gallery: [
      '/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg'
    ]
  },
  {
    slug: 'maltipoo-female-1',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'Girl',
    age: '2.5 months',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: false,
    image: '/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg',
    gallery: [
      '/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg'
    ]
  },
  {
    slug: 'maltipoo-female',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'Girl',
    age: '2 months',
    where: 'In our showroom',
    status: 'Available',
    hasVideo: false,
    image: '/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg',
    gallery: [
      '/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg'
    ]
  },
  {
    slug: 'korean-teacup-pomeranian-1',
    name: 'Korean Teacup Pomeranian',
    breed: 'Pomeranian',
    gender: 'Girl',
    age: '2 months',
    where: 'Imported for you',
    status: 'Available',
    hasVideo: false,
    image: '/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg',
    gallery: [
      '/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg'
    ]
  },
  {
    slug: 'korean-teacup-pomeranian',
    name: 'Korean Teacup Pomeranian',
    breed: 'Pomeranian',
    gender: 'Girl',
    age: '2 months',
    where: 'Imported for you',
    status: 'Available',
    hasVideo: false,
    image: '/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg',
    gallery: [
      '/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg'
    ]
  },
  {
    slug: 'korean-teacup-pomeranian-male',
    name: 'Korean Teacup Pomeranian',
    breed: 'Pomeranian',
    gender: 'Boy',
    age: '2 months',
    where: 'Imported for you',
    status: 'Available',
    hasVideo: false,
    image: '/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg',
    gallery: [
      '/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg'
    ]
  }
];

// Gone home puppies
export const goneHomePuppies = [
  {
    slug: 'pomeranian-ace-boy',
    name: 'Pomeranian',
    breed: 'Pomeranian',
    gender: 'Boy',
    status: 'Gone home',
    image: '/media/mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif'
  },
  {
    slug: 'poodle-leo-male',
    name: 'Poodle',
    breed: 'Poodle',
    gender: 'Boy',
    status: 'Gone home',
    image: '/media/QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif'
  },
  {
    slug: 'maltipoo-mia-girl',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'Girl',
    status: 'Gone home',
    image: '/media/4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif'
  },
  {
    slug: 'maltipoo-sadie-girl',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    gender: 'Girl',
    status: 'Gone home',
    image: '/media/159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif'
  },
  {
    slug: 'blue-marle-pomeranian',
    name: 'Blue Merle Pomeranian',
    breed: 'Pomeranian',
    gender: 'Boy',
    status: 'Gone home',
    image: '/media/bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif'
  }
];
