function getRandomDate() {
  const startDate = new Date("2023-01-01");
  const endDate = new Date(); // Current date
  return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
}
const testProducts = [
  {
    name: "Apple AirPods Pro 2 Wireless Earbuds",
    description:
      "AirPods Pro 2—featuring pro-level Active Noise Cancellation, Adaptive Audio, Transparency mode, " +
      "Personalized Spatial Audio, and a breakthrough in hearing health with a scientifically validated Hearing Test, clinical-grade Hearing Aid capability, and active Hearing Protection.",
    features: [
      "Pioneering Hearing: AirPods Pro 2 unlock the world’s first all-in-one hearing health experience:" +
        " a scientifically validated Hearing Test, clinical-grade Hearing Aid feature, and active Hearing Protection.",

      "Intelligent Noise Control: Active Noise Cancellation removes up to 2x more background noise." +
        " Transparency mode lets you hear the world around you, and Adaptive Audio seamlessly blends Active Noise Cancellation and Transparency mode for the best listening experience in any environment." +
        " And when you’re speaking with someone nearby, Conversation Awareness automatically lowers the volume of what’s playing.",

      "Improved Sound and Call Quality: The Apple-designed H2 chip helps to create deeply immersive sound." +
        " The low-distortion, custom-built driver delivers crisp, clear high notes and full, rich bass in stunning definition." +
        " Voice Isolation improves the quality of phone calls in loud conditions.",

      "Customizable Fit: Includes four pairs of silicone tips (XS, S, M, L) to fit a wide range of ear shapes and provide all-day comfort." +
        " The tips create an acoustic seal to help keep out noise and secure AirPods Pro 2 in place.",

      "Dust, Sweat, and Water Resistant: Both AirPods Pro 2 and the MagSafe Charging Case are IP54 dust, sweat, and water resistant," +
        " so you can listen comfortably in more conditions.",

      "Personalized Spatial Audio: With sound that suits your unique ear shape along with dynamic head tracking," +
        " AirPods Pro 2 deliver an immersive listening experience that places sound all around you." +
        " You can also listen to select songs, shows, and movies in Dolby Atmos.",

      "A Higher Level of Control: Simply swipe, press, and hold the stem to manage playback functions using Touch control." +
        " And with Siri Interactions, simply nod your head yes or shake your head no when Siri asks if you’d like to hear a message," +
        " answer a call, or manage a notification.",

      "Long Battery Life: Get up to 6 hours of listening time with Active Noise Cancellation enabled." +
        " And get up to 30 hours of total listening time with Active Noise Cancellation enabled, using the case.",

      "A More Capable Case: Keep track of AirPods Pro 2 with Precision Finding and a built-in speaker." +
        " A lanyard loop helps keep your AirPods Pro 2 close." +
        " Charge with an Apple Watch or MagSafe charger, USB-C Charge Cable, or Qi-certified charger.",
    ],
    price: 139.99,
    stock: 100,
    category: "Headphones",
    brand: "Apple",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "White",
    },
    originalPrice: 159.99,
    imageUrl: [
      "https://m.media-amazon.com/images/I/61f1YfTkTDL.jpg",
      "https://m.media-amazon.com/images/I/611pEx7220L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Kd2CPdWBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61n7MpBGeBL._AC_SL1500_.jpg",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Crystal Clear Sound!",
        comment:
          "The audio quality is unmatched, and the noise cancellation is top-notch. Perfect for commuting or working in noisy environments.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Super Comfortable Fit",
        comment: "These earbuds fit perfectly and stay in place even during workouts. Comfort level is incredible!",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Good, but Pricey",
        comment: "The sound quality and features are excellent, but the price is a bit steep compared to competitors.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Battery Life Could Be Better",
        comment:
          "While the audio is amazing, I wish the battery life lasted longer, especially for long flights or workdays.",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "Issues with Connectivity",
        comment:
          "Sometimes, the AirPods disconnect randomly, and I have to reconnect them manually. A bit frustrating for the price.",
        rating: 2,
        createdAt: getRandomDate(),
      },
      {
        title: "Not Impressed",
        comment:
          "The noise cancellation is decent, but the sound quality doesn't justify the high price. Expected more from Apple.",
        rating: 2,
        createdAt: getRandomDate(),
      },
      {
        title: "Perfect for the Gym!",
        comment:
          "I love using these AirPods Pro 2 during my workouts. They stay in place, and the noise cancellation helps me focus without distractions.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Great for Traveling",
        comment:
          "I travel frequently and these earbuds are a lifesaver. The noise cancellation works wonders on flights, and the case makes it easy to keep them safe while on the go.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Best Sound I’ve Heard!",
        comment:
          "The sound quality of these AirPods is amazing. I never realized how much I was missing until I tried these. The bass is deep, and the clarity is crystal clear.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Disappointing Battery Life",
        comment:
          "While the sound quality is fantastic, the battery life doesn't last long enough for me. I need a bit more longevity out of the battery for long trips.",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "Great Value for the Price",
        comment:
          "After trying a few different brands, I find the AirPods Pro 2 to be the best value. They offer excellent sound, good connectivity, and reliable performance for the price.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Comfortable but Pricey",
        comment:
          "The comfort level is top-notch, and the sound quality is great, but I still think they’re a little overpriced. If you can afford them, they’re worth it.",
        rating: 3,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: "Samsung - Galaxy S24 Ultra 512GB (Unlocked) - Titanium Black",
    description:
      "Do more with Galaxy AI on the epic Galaxy S24 Ultra. Wondering where the cool museum that your favorite influencer visited is located? Simply Circle to Search with Google and start planning your own trip to the Louvre. Then get ready to experience local flavors by calling ahead with Live Translate to make a reservation in French, even if all you know is “Bonjour.” Capture every detail of your candlelight meal with impressive Nightography and zoom in to see the live violinist playing across the room. Once you’re back in your hotel, elevate your pics from good to great right on your Galaxy S24 Ultra. You can even use your built in S Pen to add fun doodles before posting. Unleash new ways to create, connect and more with Galaxy AI on Galaxy S24 Ultra. Epic, just like that. ",
    features: [
      "Circle it, search it, find it. Just like that: What’s your favorite influencer wearing? Where’d they go on vacation? What’s that word mean? Don’t try to describe it—use Circle to Search with Google and get the answer in a snap. With Galaxy S24 Ultra, simply circle it on your screen and learn more.",

      "Bring details out of the darkness: Regardless of darkness or distance, capture clear content using Nightography Zoom with Galaxy AI on Galaxy S24 Ultra.",

      "Break down barriers to language: Speak foreign languages on the spot using Live Translate with Galaxy AI. Unlock the power of convenient communication with near-real-time voice translations, right through your Samsung Phone app.",

      "Zoom in and take it all in: Take incredible photos, even from far away, with the impressive high resolution camera of Galaxy S24 Ultra. Snap crystal clear candids, close ups and colorful nature shots with amazing detail, no matter the distance.",

      "Take a great photo. Then make it better: Turn every photo into a post-worthy masterpiece. Move or remove objects. Fill in empty space. Simply snap a pic and then take it from great to jaw-dropping with Generative Edit powered by Galaxy AI.",

      "Game and stream, edge to edge: Take your streaming and gaming to the edge with Galaxy S24 Ultra. Whether you’re watching, winning or even writing, the brighter, flatter screen gives you more room to do what you love.",

      "Titanium tough: With the new, sturdy titanium frame and the ultra-strong Gorilla® Glass Victus® 2 screen, Galaxy S24 Ultra keeps you doing what you do best because you know your phone is up to the challenge.",

      "Simply smooth video: Capture the show like you’re in the very front row with Galaxy S24 Ultra. Effortless stabilization makes every clip crystal clear, and the incredible zoom takes you closer to the action.",

      "Note smarter, not harder: Focus on capturing your notes and spend less time perfecting them. Note Assist with Galaxy AI will summarize, format, and even translate them for you. All of your notes are organized neatly so that you can find what you need when you need it.",

      "What you see is what you get: Create crystal clear content worth sharing with Galaxy S24 Ultra. From bustling cityscape to a serene landscape, capture a masterpiece of detail with the 200MP camera and let Galaxy S24 Ultra adjust each hue and shade to reflect the world as you see it.",

      "Our powerful Galaxy smartphone: Jump seamlessly between apps without the wait and see content in high quality with our fast processor, Snapdragon® 8 Gen 3 for Galaxy.",

      "Put your best text forward: Say the right thing at the right time in no time with Chat Assist with Galaxy AI on Galaxy S24 Ultra. Get real-time tone suggestions to make your writing sound more professional or conversational. Plus, make typos a thing of the past. Focus on what you want to say, and let Chat Assist handle the rest.",

      "Focus on life. Not battery life: The all-new Galaxy S24 Ultra stays ready so you can live to the fullest. Power your day with a battery built for every app, every battle, and every moment.",

      "Escape the outlet. Embrace the moment: Life’s best moments rarely happen near an outlet. With Super Fast Charging, you can get back to snapping selfies with friends, recording videos, and posting it all.",

      "Write when you need it: With S Pen, you can easily make last-minute edits to work projects, jot down your latest idea, or sign important docs on your Galaxy S24 Ultra. Take doing to whole new heights with the built-in S Pen.",

      "The easy click to take a pic: Capture epic selfies and beautiful photos with the click of your S Pen. Simply open up the camera app, place the phone down, and click the button on S Pen instead of the screen. Getting that great shot just got easier.",

      "To save or not to save? That’s a silly question: With Galaxy S24 Ultra, there’s room for photos, apps, and documents. Confidently save all your proudest highlights and bloopers and forget stressing about which files to delete.",

      "Your phone? Your Watch? Your call: Conveniently keep your conversations going even while your Galaxy S24 Ultra phone stays in your pocket. Seamlessly sync your phone and Galaxy Watch in an instant, and enjoy the ease of answering calls and checking texts at a glance.",
    ],
    price: 1000.99,
    stock: 50,
    category: "Phones",
    brand: "Samsung",
    specs: {
      processor: "Qualcomm Snapdragon 8 Gen 3 8-core",
      graphics: "Adreno 750 8-core",
      memory: "12GB",
      storage: "512GB",
      displayType: "AMOLED",
      screenSize: "6.8",
      screenResolution: "3120 x 1440",
      color: "Titanium Black",
    },
    originalPrice: 1419.99,
    imageUrl: [
      "https://m.media-amazon.com/images/I/71WcjsOVOmL._AC_UF894,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71yelMyyFJL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71FPf9lJ9YL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61cv4U+K9gL._AC_SL1500_.jpg",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Outstanding Camera Quality",
        comment:
          "The camera is absolutely phenomenal, especially in low light. The zoom capabilities are unmatched. A photographer's dream!",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Blazing Fast Performance",
        comment:
          "With the latest chipset and 512GB storage, this phone handles everything with ease. No lag, even with heavy multitasking.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Amazing Display, as Always",
        comment:
          "The 120Hz AMOLED screen is stunning, with vibrant colors and smooth performance. Watching videos on this is a treat!",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Solid Performance but Overpriced",
        comment:
          "The phone is great, but the price is too high compared to competitors offering similar features. Still, a solid choice for Galaxy fans.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Bulky and Heavy",
        comment:
          "While the phone is powerful, it's a bit too bulky and heavy for comfortable one-handed use. Not ideal for smaller hands.",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "Battery Drains Quickly",
        comment:
          "Expected better battery life from such a premium device. It struggles to last a full day with heavy use.",
        rating: 2,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: "ASUS TUF Gaming 27 2K HDR Gaming Monitor (VG27AQ) - QHD (2560 x 1440), 165Hz, 1ms, Extreme Low Motion Blur, Speaker, G-SYNC Compatible, Black",
    description:
      "TUF Gaming VG27AQ is a 27-inch, WQHD (2560x1440), HDR IPS display with an ultrafast 165Hz designed for professional gamers and those seeking immersive gameplay. Those are some serious specs, but not even the most exciting thing the VG27AQ has in store. For the first time in any gaming monitor, Motion Blur Reduction and Adaptive-sync can be enabled at the same time. This new technology is called ASUS Extreme Low Motion Blur Sync (ELMB SYNC). ELMB SYNC works with G-SYNC Compatible, allowing gamers to enjoy sharp, high speed frames. ",
    features: [
      "Viewable Screen Size and Panel Type: 27in screen size with LED backlight that enhances the display performance to deliver an outstanding color range and contrast ratio.",

      "LCD Display: Enjoy stunning, luminescent visual images with LCD display.",

      "Viewing Angle: This stylish Gaming LCD Monitor offers 178°/178° viewing angles for some great viewing experience no matter where and how you look at it.",

      "VESA Compatible: VESA mount compatibility allows you to mount the display on a wall or with a stand depending on your specific needs.",

      "Brightness: View your content easily in well-lit areas with 350 Nit - Typical brightness.",

      "Gaming: With 165 Hz refresh rate it is specially designed for gaming.",
    ],
    price: 149.99,
    stock: 26,
    category: "Monitors",
    brand: "ASUS",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "IPS",
      screenSize: "27",
      screenResolution: "2560 x 1440",
      color: "",
    },
    originalPrice: 199.99,
    imageUrl: [
      "https://m.media-amazon.com/images/I/71L4fB4r8rL._AC_UF894,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71f37hmEuXL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71MIUIR55cL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71rxc69AZxL._AC_SL1500_.jpg",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Perfect for Competitive Gaming",
        comment:
          "The 144Hz refresh rate and low response time make this monitor a fantastic choice for FPS games. Smooth and responsive gameplay!",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Excellent Picture Quality",
        comment:
          "The colors are vibrant, and the contrast is sharp. Great for both gaming and watching movies. Truly a versatile monitor!",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Solid Build, Great Value",
        comment:
          "The monitor feels premium and sturdy. For the price, it’s one of the best 144Hz monitors available. Highly recommended for gamers on a budget.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Good Performance but Limited Features",
        comment:
          "The performance is great for gaming, but I wish it had built-in speakers or USB ports for added convenience.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Noticeable Backlight Bleed",
        comment:
          "The monitor works well for gaming, but there’s some noticeable backlight bleed in dark scenes, which can be distracting.",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "Disappointing Quality Control",
        comment: "Received a monitor with a few dead pixels and uneven brightness. Not what I expected from ASUS.",
        rating: 2,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: "Apple - MacBook Pro 14-inch Apple M4 Pro chip Built for Apple Intelligence - 24GB Memory - 512GB SSD - Space Black",
    description:
      "The 14-inch MacBook Pro with M4 Pro and M4 Max chips gives you outrageous performance in a powerhouse laptop built for Apple Intelligence. With up to 22 hours of battery life and a breathtaking Liquid Retina XDR display with up to 1600 nits peak brightness, it’s pro in every way.",
    features: [
      "SUPERCHARGED BY M4 PRO OR M4 MAX: The M4 Pro chip blazes through demanding tasks like compiling millions of lines of code. M4 Max can handle the most challenging workflows like rendering intricate 3D content.",

      "BUILT FOR APPLE INTELLIGENCE: Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data—not even Apple.",

      "UP TO 22 HOURS OF BATTERY LIFE: The 14-inch MacBook Pro delivers the same exceptional performance whether it’s running on battery or plugged in.",

      "APPS FLY WITH APPLE SILICON: All your favorites, including Microsoft 365 and Adobe Creative Cloud, run lightning fast in macOS.",

      "IF YOU LOVE IPHONE, YOU’LL LOVE MAC: Mac works like magic with your other Apple devices. View and control what’s on your iPhone from your Mac with iPhone Mirroring. Copy something on iPhone and paste it on Mac. Send texts with Messages or use your Mac to make and answer FaceTime calls.",

      "BRILLIANT PRO DISPLAY: The 14.2-inch Liquid Retina XDR display features 1600 nits peak brightness and up to 1000 nits sustained brightness, 1,000,000:1 contrast.",

      "ADVANCED CAMERA AND AUDIO: Stay perfectly framed and sound great with a 12MP Center Stage camera, three studio-quality mics, and six speakers with Spatial Audio with support for Dolby Atmos.",

      "CONNECT IT ALL: The 14-inch MacBook Pro features three Thunderbolt 4 ports, a MagSafe 3 charging port, SDXC card slot, HDMI port, and headphone jack. And it supports up to two external displays with M4 Pro, or up to four with M4 Max.",

      "PRIVACY AND SECURITY ARE BUILT RIGHT IN: Every Mac comes with robust defenses against viruses and malware. If your Mac is lost or stolen, Find My can help you get it back. FileVault makes sure your files are encrypted so others cannot access them. And free security updates help keep your Mac protected.",
    ],
    price: 1799.99,
    stock: 30,
    category: "Laptops",
    brand: "Apple",
    specs: {
      processor: "Apple M4 Pro 12-core",
      graphics: "Apple M4 Pro 16-core",
      memory: "24GB LPDDR5",
      storage: "512GB SSD",
      displayType: "Liquid Retina XDR MiniLED",
      screenSize: "14",
      screenResolution: "3024 x 1964",
      color: "Space Black",
    },
    originalPrice: 1799.99,
    imageUrl: [
      "https://m.media-amazon.com/images/I/61-oTP1X4rL._AC_UF894,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/61F6Ng0di0L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61CRbTpxNwL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/612x5YczCzL._AC_SL1500_.jpg",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Exceptional Performance",
        comment:
          "The M-series chip delivers lightning-fast performance, even with heavy tasks like video editing and 3D rendering. Truly a powerhouse!",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Stunning Display",
        comment:
          "The Liquid Retina XDR display is gorgeous with deep blacks and vivid colors. Perfect for creative professionals who need color accuracy.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Excellent Battery Life",
        comment:
          "Battery life is impressive, lasting a full workday with ease. A game-changer for people who work on the go.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Pricey, but Worth It",
        comment:
          "It’s expensive, but the build quality, performance, and software integration make it worth the investment if you need a professional-grade laptop.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Heavy for Its Size",
        comment:
          "While it’s compact, it feels heavier than expected, especially when carrying it around all day in a backpack.",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "Limited Ports",
        comment:
          "Great laptop overall, but the limited number of USB-C ports is frustrating. You’ll likely need to buy extra adapters.",
        rating: 3,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: "Apple - iPhone 16 Pro Max 256GB - Apple Intelligence - Black Titanium",
    description:
      "iPhone 16 Pro Max. Built for Apple Intelligence. Featuring a stunning titanium design. Camera Control. 4K 120 fps Dolby Vision. And A18 Pro chip.",
    features: [
      "STUNNING TITANIUM DESIGN: iPhone 16 Pro Max has a strong and light titanium design with a larger 6.9-inch Super Retina XDR display. It’s remarkably durable with the latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass.",

      "BUILT FOR APPLE INTELLIGENCE: Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data.",

      "TAKE TOTAL CAMERA CONTROL: Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time.",

      "MAGNIFICENT SHOTS: Take your videos to a whole new level with 4K 120 fps Dolby Vision, enabled by the 48MP Fusion camera. The improved 48MP Ultra Wide camera lets you capture mesmerizing detail in macro photos and wide-angle shots.",

      "PHOTOGRAPHIC STYLES: The latest-generation Photographic Styles give you greater creative flexibility, so you can make every photo even more you. And thanks to advances in the image pipeline, you can now reverse any style, any time.",

      "THE POWER OF A18 PRO: A18 Pro chip enables Apple Intelligence with a faster Neural Engine, improved CPU and GPU, and a big jump in memory bandwidth. It also drives advanced video and photo features and powers AAA gaming.",

      "A HUGE LEAP IN BATTERY LIFE: iPhone 16 Pro Max delivers an incredibly power-efficient performance with up to 33 hours video playback. Charge via USB-C or snap on a MagSafe charger for faster wireless charging.",

      "CUSTOMIZE YOUR IPHONE: With iOS 18 you can tint your Home Screen icons with any color. Find your favorite shots faster in the redesigned Photos app. And add playful, animated effects to any word, phrase, or emoji in iMessage.",

      "SATELLITE CONNECTIVITY: If you don't have cell service or Wi-Fi, iPhone can connect to a satellite so you can send and receive messages and Tapbacks. In a severe car crash, iPhone can connect to emergency services when you can't.",
    ],
    price: 1199.0,
    stock: 40,
    category: "Phones",
    brand: "Apple",
    specs: {
      processor: "Apple A18 Pro 6-core",
      graphics: "Apple A18 Pro 6-core",
      memory: "8GB",
      storage: "256GB",
      displayType: "Super Retina XDR OLED",
      screenSize: "6.9",
      screenResolution: "2868 x 1320",
      color: "Black Titanium",
    },
    originalPrice: 1199.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/019cf921-6f51-46bf-8f61-b43b08c2b6da.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/ef6c9245-0dc3-4471-83ed-507ae9776b1b.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/fa06bef9-0666-4a56-8ffd-f1d94de52d8d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/62533240-b32d-4539-bc09-4815ff9f8c91.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/36c56a7b-69cd-4f42-8c48-0dc1e63a58d2.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7b8349ea-c417-492a-978b-9d585005d63b.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/16533a99-f1ce-40d5-be47-ef1b95b5856a.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Incredible Camera System",
        comment:
          "The new camera upgrades are amazing, especially the zoom capabilities. Perfect for photography enthusiasts looking for pro-quality shots.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Best iPhone Yet",
        comment:
          "The performance of the new chip is unmatched, and the battery easily lasts through an entire day of heavy use. Highly impressed!",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Gorgeous Design and Display",
        comment:
          "The build quality is premium, and the display is incredibly bright and smooth. Watching videos and gaming on this device is a joy.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Great Performance but Overpriced",
        comment:
          "While the phone is amazing in every way, the price is steep, and I’m not sure the upgrades justify the cost for existing iPhone 15 users.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Battery Life Needs Improvement",
        comment:
          "The battery life is decent but not as good as I’d hoped for a flagship device. Needs charging by the end of the day with heavy use.",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "Connectivity Issues",
        comment:
          "The device occasionally has trouble staying connected to 5G networks. Hopefully, this can be resolved with a software update.",
        rating: 2,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: "Apple - 13-inch iPad Pro M4 chip Built for Apple Intelligence Wi-Fi 256GB with OLED - Space Black",
    description:
      "The new iPad Pro is impossibly thin, featuring outrageous performance with the Apple M4 chip, a breakthrough Ultra Retina XDR display, and superfast Wi-Fi 6E. Along with Apple Pencil Pro and Magic Keyboard, it brings endless versatility, creativity, and productivity to your fingertips. ",
    features: [
      "13-INCH ULTRA RETINA XDR DISPLAY: Ultra Retina XDR delivers extreme brightness and contrast, exceptional color accuracy, and features advanced technologies like ProMotion, P3 wide color, and True Tone. Plus a nano-texture glass option is available in 1TB and 2TB configurations.",

      "BUILT FOR APPLE INTELLIGENCE: Apple Intelligence helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data—not even Apple.",

      "PERFORMANCE AND STORAGE: Up to 10-core CPU in the M4 chip delivers powerful performance, while the 10‑core GPU provides blazing-fast graphics. And with all-day battery life, you can do everything you can imagine on iPad Pro. Up to 2TB of storage means you can store everything from apps to large files like 4K video.",

      "IPADOS + APPS: iPadOS makes iPad more productive, intuitive, and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. Stage Manager makes multitasking easy with resizable, overlapping apps and external display support. iPad Pro comes with essential apps like Safari, Messages, and Keynote, with over a million more apps available on the App Store.",

      "APPLE PENCIL AND MAGIC KEYBOARD FOR IPAD PRO: Apple Pencil Pro transforms iPad Pro into an immersive drawing canvas and the world’s best note‑taking device. Apple Pencil (USB-C) is also compatible with iPad Pro. Magic Keyboard for iPad Pro features a thin and light design, great typing experience, and a built‑in glass trackpad with haptic feedback, while doubling as a protective cover for iPad. Accessories sold separately.",

      "ADVANCED CAMERAS: iPad Pro features a landscape 12MP Ultra Wide front camera that supports Center Stage for videoconferencing or epic Portrait mode selfies. The 12MP Wide back camera with adaptive True Tone flash is great for capturing photos or 4K video with ProRes support. Four studio-quality microphones and a four-speaker audio system provide rich audio. And AR experiences are enhanced with the LiDAR Scanner to capture a depth map of any space.",

      "CONNECTIVITY: Wi-Fi 6E gives you fast wireless connections. Work from almost anywhere with quick transfers of photos, documents, and large video files. Connect to external displays, drives, and more using the USB-C connector with support for Thunderbolt / USB 4.",

      "UNLOCK AND PAY WITH FACE ID: Unlock your iPad Pro, securely authenticate purchases, sign in to apps, and more—all with just a glance.",
    ],
    price: 1199.99,
    stock: 14,
    category: "Tablets",
    brand: "Apple",
    specs: {
      processor: "Apple M4 9-core",
      graphics: "Apple M4 10-core",
      memory: "8GB",
      storage: "256GB",
      displayType: "Ultra Retina Tandem OLED",
      screenSize: "13",
      screenResolution: "2064 x 2752",
      color: "Space Black",
    },
    originalPrice: 1299.99,
    imageUrl: [
      "https://m.media-amazon.com/images/I/7147JzEtrqL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/714-7INRdwL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/812UO7Ja2nL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71XYcPrgeQL._AC_SL1500_.jpg",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Unmatched Performance",
        comment:
          "The M4 chip makes this iPad incredibly fast and responsive. Whether for gaming, video editing, or multitasking, it handles everything with ease.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Perfect for Creative Professionals",
        comment:
          "The screen is gorgeous with rich colors and high brightness. Paired with the Apple Pencil, it’s a great tool for artists and designers.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Battery Life is Impressive",
        comment:
          "I can easily get through a full day of heavy usage, including drawing, video streaming, and web browsing, without needing to charge.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Very Expensive",
        comment:
          "While the performance and features are excellent, the price is a little high, especially when compared to some Windows alternatives.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Limited Software Support for Productivity",
        comment:
          "Despite the powerful hardware, I feel the iPadOS is still limited for productivity tasks like full desktop software support. Great for media consumption, but lacks flexibility for work tasks.",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "Great Device but Lacking Ports",
        comment:
          "It’s a great device overall, but I miss having more ports for better connectivity with external devices. You’ll need adapters for many peripherals.",
        rating: 3,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: "Sony - PlayStation 5 Pro Console - White",
    description:
      "Vertical Stand sold separately. With the PlayStation 5 Pro console, the world’s greatest game creators can enhance their games with incredible features like advanced ray tracing, super sharp image clarity for your 4K TV, and high frame rate gameplay.* That means you get to play PS5 games with the most impressive visuals ever possible on a PlayStation console, and with 2TB of SSD storage included, your favorite games will be ready and waiting for you to jump right in for your next awesome adventure.3 PS5 Pro is an all-digital console with no disc drive. Sign into your account for PlayStation Network and go to PlayStation Store to buy and download games.6 You can also add a Disc Drive to your PS5 Pro console if you would like to play PS5 or PS4 games on Blu-ray Disc, or if you want to watch movies and shows on 4K Ultra HD Blu-ray Discs, Blu-ray Discs, and DVDs. The compatible Disc Drive is sold separately. *Features only available on select PS5 games that have been enhanced for PS5 Pro when compared with PS5. PS5 Pro enhanced features will vary by game. 3A portion of the SSD is reserved for system software and other functions so the available SSD capacity may vary. ",
    features: [
      "PlayStation Spectral Super Resolution (PSSR): Get super sharp image clarity on your 4K TV using AI enhanced resolution for ultra-high definition play with astonishing detail.",

      "Optimized Console Performance: Reach higher and more consistent frame rates for silky smooth gameplay with support for 60Hz and 120Hz displays.",

      "Advanced Ray Tracing: Experience next level realism with ray traced reflections, shadows, and high-quality global illumination as you explore stunning game worlds.",

      "2TB of Storage: Keep your favorite games ready and waiting for you to jump in and play with 2TB of SSD storage built in.",

      "Play at 60fps, or up to 120fps, with 4K Output and Ray Tracing for Compatible Games: With the power of the PS5 Pro, compatible games can be played at 60fps, or up to 120fps, with Ray Tracing and AI enhanced 4K resolution using PSSR— all at the same time—on your 4K TV.",

      "PS5 Pro Game Boost and Backwards Compatibility: The PS5 Pro console can play over 8,500 PS4 games. With the PS5 Proversion of the Game Boost feature, you can even enjoy faster and smoother frame rates in some of the PS4 and PS5 console’s greatest games.",

      "Enhanced Image Quality for PS4 Games: Turn on the Enhanced Image Quality for PS4 games feature to enable additional system post processing power that can improve the resolution for select PS4 games.",

      "Next Level Online Wireless Connectivity: PS5 Pro supports enhanced wireless internet capabilities with more usable bandwidth to increase transfer speeds with IEEE 802.11be and your compatible router, which means you can experience reduced latency and boosted stability when playing online.",

      "Ultra-High Speed SSD: Maximize your play sessions with near instant load times for installed PS5 games.",

      "Integrated I/O: The custom integration of the PS5 Pro console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible.",

      "4K-TV Gaming: Play your favorite PS5 games on your stunning 4K TV.",

      "1440p HDMI Video Output: Enjoy the crisp visual performance of games that natively support 1440p resolution. If you’re playing a game with a higher native resolution (such as 4K), you may benefit from improved anti-aliasing through supersampling down to 1440p output.",

      "8K Gaming Support: The PS5 Pro console is compatible with your 8K display through HDMI 2.1 support, so you can play games that support 8K resolution output.",

      "Up to 120fps with 120Hz Output: Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.",

      "Variable Refresh Rate (VRR): Enhance the visual performance of compatible PS5 games by enabling VRR. This syncs the display’s refresh rate to the console’s output. Gameplay feels smoother as scenes render seamlessly, graphics look crisper with frame pacing issues and screen tearing minimized.",

      "HDR Technology: With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors.",

      "Tempest 3D AudioTech: Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Your surroundings truly come alive with Tempest 3D AudioTech in supported games.",

      "Haptic Feedback: Experience haptic feedback via the DualSense wireless controller in select PS5 titles and feel the effects and impact of your in-game actions through dynamic sensory feedback.",

      "Adaptive Triggers: Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games.",

      "Includes ASTRO’S Playroom: Explore four worlds, each one showcasing innovative gameplay using the versatile features of the DualSense wireless controller, in this game included for all PS5 Pro console users.",
    ],
    price: 699.99,
    stock: 10,
    category: "Gaming",
    brand: "Sony",
    specs: {
      processor: "AMD Ryzen 7 8-core",
      graphics: "AMD",
      memory: "16GB",
      storage: "2TB",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "White",
    },
    originalPrice: 699.99,
    imageUrl: [
      "https://m.media-amazon.com/images/I/61vR3ovb2UL.jpg",
      "https://m.media-amazon.com/images/I/51oMlsMZKFL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/6101Kxr2fXL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61wVCsSsy2L._SL1500_.jpg",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Next-Gen Gaming at Its Best",
        comment:
          "The PlayStation 5 Pro takes gaming to the next level with its enhanced graphics, 4K support, and lightning-fast loading times. A true next-gen experience.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Stunning Visuals and Performance",
        comment:
          "The graphics are phenomenal, and the performance is incredibly smooth with 120Hz gameplay. Whether you're playing shooters or RPGs, everything looks stunning.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Great Value for Hardcore Gamers",
        comment:
          "The PS5 Pro delivers fantastic value for those who want to experience high-quality gaming. The upgrade in power over the regular PS5 is definitely noticeable.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Expensive, but Worth It",
        comment:
          "It’s a pricey console, but for the performance boost, it’s worth every penny. Perfect for those who want to future-proof their gaming setup.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "A Little Bulky",
        comment:
          "While the performance is great, the console is quite large and might not fit easily in your entertainment center. Make sure you have space!",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "Limited Game Library for 120Hz Support",
        comment:
          "The PS5 Pro is amazing, but not all games support 120Hz yet. While the console is ready for future titles, current offerings are limited.",
        rating: 3,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: 'ASUS - ROG Zephyrus G16 16" OLED 240Hz Gaming Laptop - Intel Core Ultra 9 - 32GB LPDDR5X - NVIDIA GeForce RTX 4090 - 2TB SSD - Eclipse Gray',
    description:
      "Experience the height of gaming innovation with the ROG Zephyrus G16. Featuring an all-new premium aluminum chassis with customizable lighting, this laptop merges style and durability. Its ultra-slim 0.59” profile and lightweight 4.30lbs 16” chassis redefines portability without compromising performance. Powered by Windows 11, an Intel Core Ultra 9 185H processor, and an NVIDIA GeForce RTX 4090 GPU, the Zephyrus G16 seamlessly aligns with your lifestyle, meeting all your gaming and creative demands. ROG Intelligent Cooling features liquid metal for reduced CPU temperatures and upgraded Arc Flow Fans for improved airflow to sustain peak performance on the Zephyrus G16 no matter the task. Immerse yourself in the OLED ROG Nebula Display and enjoy rapid 0.2ms response times, vivid 2.5K resolution, and a smooth 240Hz refresh rate.",
    features: [
      "Make everyday easier with Windows 11 Operating System - Game, create, turn up the volume with family and friends - Windows 11 is the place for it all. With a fresh new feel and tools that make it easier to be efficient, it has whatever you need for what's next.",
      "Windows Copilot AI assistant - Meet Copilot in Windows – your AI-powered assistant for quick answers, creative inspiration, and focused tasks. Boost productivity with fast answers, image generation, and more. Elevate your Windows 11 experience and unleash creativity!",
      "OLED ROG Nebula Display and NVIDIA G-SYNC - Elevate your visual experience with the Zephyrus G16, featuring an OLED ROG Nebula Display. Enjoy rapid 0.2ms response times, vivid 2.5K resolution, and a smooth 240Hz refresh rate. With NVIDIA G-SYNC, eliminate visual tearing, minimize stuttering, and reduce input lag.",
      "AI-powered Intel Core Ultra 9 185H processor - Accelerate your workflow with the Intel Core Ultra 9 185H processor. This chip features built-in AI accelerators that are ready to take advantage of the latest in technology. Dedicated Neural Processing Unit (NPU) cores allow AI to reduce power consumption for longer battery life during sustained AI workloads.",
      "Top-of-the-line graphics with NVIDIA GeForce RTX 4090 - Maximize gaming and creativity with an NVIDIA GeForce RTX 4090 laptop GPU, with a max TGP of 115W. Game-changing features like DLSS 3.5 and ray racing technology bring game graphics to life by simulating sunlight and creating a realistic environment for an immersive gaming experience.",
      "Seamless multitasking with 32GB of LPDDR5X RAM - Equipped with 32GB of LPDDR5X RAM, the Zephyrus G16 effortlessly handles multitasking demands whether you're gaming, creating, or simply browsing for the latest trends.",
      "Rapid loading times with 2TB of PCIe 4.0 SSD Storage - Save files rapidly and store more data and games. With massive amounts of storage and advanced communication power, PCIe SSDs are great for major gaming applications, multiple servers, daily backups, and more.",
      "Premium Aluminum CNC Chassis - The Zephyrus G16 sports a premium aluminum chassis meticulously crafted through CNC machining. Along with the customizable Slash lighting array, this laptop is the perfect blend of durability, elegance, and individuality.",
      '4.30lbs light and 0.59" slim - Embrace portability without compromise. The ROG Zephyrus G16’s ultra slim 0.59” profile and lightweight 4.30lbs 16-inch chassis redefine gaming on the go.',
      "Xbox Game Pass Ultimate included - Play Minecraft Legends and hundreds of other PC games on the ROG Zephyrus G16 with 3 months of Game Pass. *Terms apply.",
      "Stay cool with ROG Intelligent Cooling - Sustain peak performance with ROG Intelligent Cooling featuring liquid metal that reduces CPU temperatures by up to 13 degrees, 2nd Gen Arc Flow Fans, and a Vapor Chamber.",
      "NVIDIA Advanced Optimus with MUX Switch - A MUX Switch increases gaming performance by 5-10% by routing frames directly from the dGPU to the display bypassing the iGPU. With Advanced Optimus the switch between iGPU and dGPU becomes automatic based on the task, optimizing battery life.",
      "Audio excellence with 6 speakers and Dolby Atmos - Pump up the volume with newly improved woofers on the Zephyrus G16 offering 47% volume increase and 100Hz bass frequency. Dolby Atmos support, AI noise cancellation and a 3D mic array further enhance your audio experience.",
      "Advanced Connectivity - Stay connected with dual USB-C ports, HDMI 2.1, USB 3.2 Gen2 Type-A ports, and a dedicated UHS-II MicroSD card reader.",
    ],
    price: 2499.99,
    stock: 6,
    category: "Laptops",
    brand: "ASUS",
    specs: {
      processor: "Intel Core Ultra 9",
      graphics: "NVIDIA GeForce RTX 4090",
      memory: "32GB DDR5",
      storage: "2TB SSD",
      displayType: "OLED 240Hz",
      screenSize: "16",
      screenResolution: "2560 x 1600",
      color: "Eclipse Gray",
    },
    originalPrice: 3299.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570220_rd.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570220cv3d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570220cv11d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570220cv12d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570220cv13d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570220cv15d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Unbeatable Gaming Performance",
        comment:
          "This laptop is an absolute powerhouse. The RTX 4090 and Core Ultra 9 chip make it run every game on max settings without breaking a sweat. A must-have for serious gamers.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Stunning OLED Display",
        comment:
          "The 16-inch OLED display is vibrant and sharp, with deep blacks and true-to-life colors. The 240Hz refresh rate is perfect for fast-paced gaming.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Top-Tier Build Quality",
        comment:
          "The Zephyrus G16 is built like a tank. It feels premium and durable, and the cooling system does a great job of keeping everything running cool even during intense gaming sessions.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Incredible Performance but Expensive",
        comment:
          "While the performance is unmatched, the price tag is on the high side. If you're not a hardcore gamer or content creator, it may be overkill.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Battery Life Could Be Better",
        comment:
          "With all this power, battery life takes a hit. You’ll need to keep it plugged in during heavy usage, but it’s expected from a high-performance gaming laptop.",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "A Bit Heavy for a Laptop",
        comment:
          "The Zephyrus G16 is powerful, but it’s quite heavy compared to other gaming laptops. It’s not the most portable if you’re planning to carry it around often.",
        rating: 3,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: "Apple - 11-inch iPad Pro M4 chip Built for Apple Intelligence Wi-Fi 256GB with OLED - Space Black",
    description:
      "The new iPad Pro is impossibly thin, featuring outrageous performance with the Apple M4 chip, a breakthrough Ultra Retina XDR display, and superfast Wi-Fi 6E. Along with Apple Pencil Pro and Magic Keyboard, it brings endless versatility, creativity, and productivity to your fingertips.",
    features: [
      "11-INCH ULTRA RETINA XDR DISPLAY—Ultra Retina XDR delivers extreme brightness and contrast, exceptional color accuracy, and features advanced technologies like ProMotion, P3 wide color, and True Tone. Plus a nano-texture glass option is available in 1TB and 2TB configurations.⁴",
      "BUILT FOR APPLE INTELLIGENCE: Apple Intelligence helps you write, express yourself, and get things done effortlessly.¹ With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data—not even Apple.",
      "PERFORMANCE AND STORAGE—Up to 10-core CPU in the M4 chip delivers powerful performance, while the 10‑core GPU provides blazing-fast graphics. And with all-day battery life, you can do everything you can imagine on iPad Pro.⁵ Up to 2TB of storage means you can store everything from apps to large files like 4K video.⁶",
      "IPADOS + APPS—iPadOS makes iPad more productive, intuitive, and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. Stage Manager makes multitasking easy with resizable, overlapping apps and external display support. iPad Pro comes with essential apps like Safari, Messages, and Keynote, with over a million more apps available on the App Store.",
      "APPLE PENCIL AND MAGIC KEYBOARD FOR IPAD PRO—Apple Pencil Pro transforms iPad Pro into an immersive drawing canvas and the world’s best note‑taking device. Apple Pencil (USB-C) is also compatible with iPad Pro. Magic Keyboard for iPad Pro features a thin and light design, great typing experience, and a built‑in glass trackpad with haptic feedback, while doubling as a protective cover for iPad. Accessories sold separately.",
      "ADVANCED CAMERAS—iPad Pro features a landscape 12MP Ultra Wide front camera that supports Center Stage for videoconferencing or epic Portrait mode selfies. The 12MP Wide back camera with adaptive True Tone flash is great for capturing photos or 4K video with ProRes support. Four studio-quality microphones and a four-speaker audio system provide rich audio. And AR experiences are enhanced with the LiDAR Scanner to capture a depth map of any space.",
      "CONNECTIVITY—Wi-Fi 6E² gives you fast wireless connections. Work from almost anywhere with quick transfers of photos, documents, and large video files. Connect to external displays, drives, and more using the USB-C connector with support for Thunderbolt / USB 4.",
      "UNLOCK AND PAY WITH FACE ID—Unlock your iPad Pro, securely authenticate purchases, sign in to apps, and more—all with just a glance.",
    ],
    price: 849.99,
    stock: 4,
    category: "Tablets",
    brand: "Apple",
    specs: {
      processor: "Apple M4 9-core",
      graphics: "Apple M4 10-core",
      memory: "8GB",
      storage: "256GB",
      displayType: "Ultra Retina Tandem OLED",
      screenSize: "11",
      screenResolution: "2420 x 1668",
      color: "Space Black",
    },
    originalPrice: 899.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5495/5495362cv11d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5495/5495362cv12d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5495/5495362cv18d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5495/5495362cv19d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5495/5495362cv14d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Incredible Power and Performance",
        comment:
          "The M4 chip makes this iPad incredibly fast. Whether you're multitasking, gaming, or editing videos, it handles everything effortlessly.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Stunning OLED Display",
        comment:
          "The OLED display is absolutely gorgeous. The colors are rich and vibrant, with deep blacks, making it a joy for media consumption and creative work.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Perfect for Creative Professionals",
        comment:
          "The combination of the M4 chip and OLED screen makes this iPad ideal for artists and designers. Drawing with the Apple Pencil on this screen is a dream.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Great for Productivity but Expensive",
        comment:
          "It’s great for productivity with the power of the M4 chip, but the price is steep, especially for those who don’t need all the performance it offers.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Battery Life Could Be Better",
        comment:
          "Battery life is decent, but with heavy usage, especially with power-intensive tasks, you’ll need to charge it by the end of the day.",
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "No Significant Changes from Previous Models",
        comment:
          "While the M4 chip is impressive, there aren’t many other major changes compared to the previous model, making it hard to justify the upgrade for existing iPad Pro users.",
        rating: 3,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: 'HP - Victus 15.6" Full HD Gaming Laptop - AMD Ryzen 5-7535HS - 8GB DDR5 Memory - AMD Radeon RX 6550M - 512GB SSD - Mica Silver',
    description:
      "Follow the Laptop. Fulfill Your Gaming Destiny. The Victus 15 is packed with the power of desktop to keep up with the biggest games and the best players. This all-in-one gaming powerhouse is ready to roll with an AMD CPU and graphics, all sleekly designed in a mighty little package.",
    features: [
      "Get a fresh perspective with Windows 11—From a rejuvenated Start menu, to new ways to connect to your favorite people, news, games, and content—Windows 11 is the place to think, express, and create in a natural way.",
      "AMD Ryzen 5 7535HS—Speed meets endurance in this gaming laptop powered by an AMD Ryzen processor.",
      "AMD Radeon RX 6550M Mobile graphics—The powerful AMD Radeon RX 6550M graphics card, engineered with AMD RDNA 2 architecture and 4 GB of GDDR6 to double performance and accelerate 1080p game play.",
      "144Hz FHD anti-glare display—Reduce frustrating lag and image ghosting with a display that combines a 144Hz refresh rate and 1080p Full High Definition resolution for smooth, crisp gameplay.",
      "IPS panel—No matter where you stand, this screen delivers clear, vivid images with 178-degree wide-viewing angles, so everyone can get a great view.",
      "PCIe NVMe SSD storage—Get up to 15x faster performance than a traditional hard drive.¹",
      "AMD FreeSync Premium Technology—Every gamer deserves perfectly smooth gameplay and peak performance. Game confidently with a high refresh rate, low framerate compensation, and low latency.",
      "HP Fast Charge—Go from 0 to 50% charge in approximately 30 minutes.²",
      "Effortlessly connected—Enjoy faster speeds, improved performance and greater capacity with Wi-Fi 6 and Bluetooth 5.3 wireless card.",
      "HP Wide Vision HD Camera—The 88-degree, wide-angle field of view lets you video chat with the entire family or group of friends in crystal clear detail.",
      "Enlarged touchpad—More room on your touchpad makes controlling your PC effortless and intuitive.",
      "Micro-edge display—By squeezing a larger screen into a smaller frame, this ultra-thin, barely visible bezel revolutionizes your display's appearance with a beautifully efficient design.",
      "Backlit keyboard with integrated numeric pad—Keep going comfortably even in darker environments.",
      "Try PC Game Pass for free—Play hundreds of high-quality PC games on your new HP device with 3 free months of PC Game Pass.",
    ],
    price: 429.99,
    stock: 10,
    category: "Laptops",
    brand: "HP",
    specs: {
      processor: "AMD Ryzen 5 7535HS 6-core",
      graphics: "AMD Radeon RX 6550M",
      memory: "8GB DDR5",
      storage: "512GB SSD",
      displayType: "LED IPS 144Hz 300 nits",
      screenSize: "15.6",
      screenResolution: "1920 x 1080",
      color: "Mica Silver",
    },
    originalPrice: 799.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/e36918ec-9f8e-41e0-aed9-bb14bb16131c.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/22a88a17-18bc-4a51-8923-017e3e21d1d1.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8a33b986-e603-42bf-b022-f7d0088a7386.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3bffcd52-5c03-45d8-a23a-c0ece676b817.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/bdb82854-72f8-435d-af6e-31e5bee92cb2.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Great Budget Gaming Laptop",
        comment:
          "For the price, this laptop is an excellent choice. It runs most modern games at medium settings with solid frame rates, and the performance is great for casual gaming.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Smooth Full HD Experience",
        comment:
          'The 15.6" Full HD display looks fine, and the AMD Radeon RX 6550M delivers smooth gameplay for most games I play. A great value for entry-level gamers.',
        rating: 3,
        createdAt: getRandomDate(),
      },
      {
        title: "Okay Performance for the Price",
        comment:
          "The Ryzen 5 processor and 8GB DDR5 RAM delivers solid overall performance for both gaming and productivity tasks. It’s perfect for users who want a balance between price and power.",
        rating: 2,
        createdAt: getRandomDate(),
      },
      {
        title: "Decent Battery Life",
        comment:
          "Battery life is decent but not exceptional, especially during gaming sessions. Expect to keep it plugged in during more demanding tasks.",
        rating: 2,
        createdAt: getRandomDate(),
      },
      {
        title: "Build Quality Could Be Better",
        comment:
          "While functional, the build quality feels a bit flimsy, especially the keyboard and the chassis. It’s not the most premium feeling laptop out there.",
        rating: 2,
        createdAt: getRandomDate(),
      },
      {
        title: "Lacks Upgrade Options",
        comment:
          "It’s unfortunate that the RAM is not easily upgradeable, limiting future-proofing for users who may want to push the laptop further in the future.",
        rating: 2,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: "Alienware - Aurora R16 Gaming Desktop - Intel Core i7-14700KF - 32GB Memory - NVIDIA GeForce RTX 4070 SUPER - 1TB SDD - Black",
    description:
      "Designed to prioritize airflow efficiency by introducing larger passageways and optimized internal cable management. This allows fans to be more productive at lower RPM, resulting in quieter acoustics.",
    features: [
      "240 MM HEAT EXCHANGER: Game cool and quietly thanks to a 240mm heat exchanger* that heightens the system’s thermal resistance and ensures temperatures stay managed during longer gaming sessions.",
      "12-Phase Voltage Regulation: All R16 configurations are equipped with 12-phase voltage regulation technology that ensures clean energy is consistently available, enabling [up to 13th Gen Intel Core] processors to deliver high-level performance for hour on end.",
      "Legend 3 Design: The R16 debuts our minimalist and functional Legend 3 design that focuses on simplicity with features that are optimized for any desktop gaming setup. The R16 is up to 40% smaller, 20% quieter, and 7% cooler than its predecessor.",
      "High Performance Graphics: Experience immersive gameplay your way by choosing NVIDIA GeForce RTX 40 Series graphics options.",
      "Total Command: Featuring the revamped Alienware Command Center software, where you can intuitively tailor and monitor your system’s performance and customize lighting and other settings across your setup.",
    ],
    price: 2043.99,
    stock: 3,
    category: "Desktops",
    brand: "Alienware",
    specs: {
      processor: "Intel Core i7 14700KF",
      graphics: "NVIDIA GeForce RTX 4070 SUPER",
      memory: "32GB DDR5",
      storage: "1TB SSD",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "Black",
    },
    originalPrice: 2199.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6577/6577352ld.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/19fad074-c569-442c-b6c6-a6713a16fb3a.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6577/6577352cv2d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/12ddc573-6718-49d0-b4c8-536ba44a0e81.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6b0b41e3-367d-4de1-9bc2-07dc5c11e36b.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "Awesome Performance",
        comment:
          "This computer is super fast! I can play all my games on the highest settings and it never lags. The RTX 4070 SUPER is crazy good.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Cool and Quiet",
        comment:
          "It doesn’t make much noise at all, even when I'm gaming for hours. Plus, it stays cool the whole time, so no worries about overheating.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Looks Great",
        comment:
          "The design is clean and simple. It fits perfectly in my room, and it’s not too big either, which I like.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Plays Everything Smoothly",
        comment:
          "All my games look amazing and run smoothly. I can’t believe how good the graphics are. Definitely recommend it for any gamer.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Super Easy to Set Up",
        comment:
          "Setting up the Alienware was easy, and the software that comes with it makes it even easier to change settings. Great for beginners!",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Worth the Price",
        comment:
          "It’s a little pricey, but totally worth it if you want a high-end gaming desktop. The performance is unbeatable.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Best Gaming Rig",
        comment:
          "I’ve tried a lot of desktops, but this one blows them all away. The RTX 4070 SUPER makes everything look so realistic. Love it.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Super Quiet",
        comment:
          "This thing is almost silent. Even when it’s running really hard, you can barely hear it. Perfect for gaming marathons.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Great for AAA Games",
        comment:
          "I can play all the newest games with no problems. No lag, no freezing. It’s like having a pro gaming setup.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "Could Use More Storage",
        comment:
          "It’s fast with the 1TB SSD, but I wish there was more space for all my games. Definitely need an extra hard drive.",
        rating: 4,
        createdAt: getRandomDate(),
      },
      {
        title: "Incredible Graphics",
        comment:
          "The graphics on this thing are insane. The RTX 4070 SUPER really makes everything look next-level, especially when I play games like Fortnite and Call of Duty.",
        rating: 5,
        createdAt: getRandomDate(),
      },
      {
        title: "A Beast of a PC",
        comment:
          "This is one seriously powerful computer. It can handle everything I throw at it, from gaming to video editing.",
        rating: 5,
        createdAt: getRandomDate(),
      },
    ],
  },
  {
    name: "Apple Watch Series 10 (GPS) 42mm Aluminum Case with Black Sport Band - S/M - Jet Black - (2024)",
    description:
      "Meet Apple Watch Series 10. A bigger display with more screen area and a thinner, lighter design. Get advanced fitness and health features with Sleep Apnea Notifications, plus faster charging.",
    features: [
      "WHY APPLE WATCH SERIES 10—Bigger display with up to 30 percent more screen area.² A thinner, lighter, and more comfortable design.² Advanced health and fitness features provide invaluable insights.³ Safety features connect you to help when you need it.⁴ Faster charging gives you 80 percent battery in about 30 minutes.⁵",
      "ADVANCED HEALTH INSIGHTS—Take an ECG⁶ anytime. Get notifications if you have high or low heart rate or an irregular heart rhythm.⁷ Understand your menstrual cycle and get retrospective ovulation estimates.⁸ See overnight health metrics like heart rate, respiratory rate, and more with the Vitals app.⁹ Track sleep and get notifications if signs of sleep apnea are detected.¹",
      "A POWERFUL FITNESS PARTNER—Measure all the ways you move with Activity Rings, which are customizable to match your lifestyle. Get advanced metrics for a range of workouts with the Workout app. Track the intensity of your workouts with training load. Use depth and water temperature sensors for your aquatic adventures. And Apple Watch comes with three months of Apple Fitness+ free.¹⁰",
      "STAY CONNECTED—Send a text, take a call, listen to music and podcasts, use Siri, and get notifications on the go. Apple Watch Series 10 (GPS) works with your iPhone or Wi-Fi to keep you connected.",
      "INNOVATIVE SAFETY FEATURES—Fall Detection¹¹ and Crash Detection can connect you with emergency services in the event of a hard fall or a severe car crash. Emergency SOS lets you call for help with the press of a button.⁴ Check In automatically notifies a loved one when you’ve arrived at a your destination.¹²",
      "INCREDIBLE DURABILITY—Crack resistant and IP6X-certified dust resistant. With 50m water resistance.¹³",
      "CARBON NEUTRAL—Configure any Apple Watch Series 10 case material or finish to be carbon neutral. Learn more about Apple’s commitment to the environment at apple.com/2030.",
      "SIMPLY COMPATIBLE—It works seamlessly with your Apple devices and services.¹⁴ Unlock your Mac automatically. Get approximate distance and directions to your iPhone with Precision Finding on supported iPhone models.¹⁵ Pay and send money with Apple Pay.",
      "EASILY CUSTOMIZABLE—With watch bands in a range of styles, materials, and colors and fully customizable watch faces, you can change your watch to fit your mood or the moment.",
    ],
    price: 329.0,
    stock: 26,
    category: "Watches",
    brand: "Apple",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "64GB",
      displayType: "Retina LTPO3 OLED",
      screenSize: "42mm",
      screenResolution: "374 x 446",
      color: "Jet Black",
    },
    originalPrice: 699.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/93ebbb6c-3b98-4a8c-9fc0-7892f20502d8.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/aea902a6-5b08-4879-97e2-e8d18a427496.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/67dd81cb-2f36-4965-9cde-af7856c23ccb.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/cfc134f9-45c9-4afd-a7c1-9735f5d59f38.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/199b7c14-f763-4986-9d78-f048a780ab75.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/e6732cb1-c74d-4dd0-8212-15db461b88cb.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9bc1452d-b13d-43a6-b05e-4673b35733b9.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/ab52504a-fb54-4a35-b97d-edba8ec22a14.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "cool", comment: "its, cool. i guess", rating: 5, createdAt: getRandomDate() }],
  },
  {
    name: "Samsung B series 2.1 ch. DTS Virtual:X Soundbar - Black",
    description:
      "Good times are just a beat away. Enjoy an intense, dynamic, all encompassing listening experience with this crowd pleasing audio sidekick. Powerful bass booms from the included subwoofer, while the soundbar expertly spreads the sound around. When you game, the experience is optimized with perfectly synced, directional audio. ",
    features: [
      "DTS Virtual:X",
      "Expand your listening experience. DTS Virtual:X creates spacious 3D sound putting you at the center of the action for an elevated and immersive home theater experience.",
      "Subwoofer Included",
      "Get that big boom with our included subwoofer. Bring home intense sound with rich, powerful bass. Elevate the action and take things to the next level.",
      "Surround Sound Expansion",
      "Invite your friends. This soundbar expands the optimal listening zone emanating sound all around you. Now everyone can hear like they claimed the best spot on the sofa.",
      "Game Mode",
      "Optimize your gaming experience with perfectly synced directional audio that moves with the onscreen action. Game Mode eliminates distractions so you can hear better and play harder. So next time the game is on the line, you’ll have a leg up on the competition.¹",
      "Bluetooth® TV Connection",
      "Effortless connection. No cable necessary. Hear your TV’s audio through your soundbar with Bluetooth® TV Connection.²",
      "One Remote Control",
      "Keep your finger on the pulse. This do it all remote controls both your Samsung TV and soundbar, helping you streamline your home entertainment setup.",
      "Night Mode",
      "Stay up late and enjoy stellar sound even when they’re sleeping. Switch on Night Mode to turn down the volume and compress the bass.",
      "Voice Enhance",
      "Ensure voices cut through the noise. Voice Enhance optimizes the equalizer and amplifies the dialogue on the screen so that voices can be heard more clearly.",
    ],
    price: 119.99,
    stock: 4,
    category: "Soundbars",
    brand: "Samsung",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "Black",
    },
    originalPrice: 279.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/36d35756-1024-46c3-96b6-c5c05c4c4701.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/202794b1-b2f3-4b71-85ca-8d9b2531255e.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2cc312bb-46b4-4296-82a6-8ebb91127ed1.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4280db37-3418-483a-b7e4-626fd4dfbbd3.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3dadabb9-53a8-46fc-b5c9-df58bd0fa853.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/ce080e8c-cad4-45f5-b592-bd8c57bb1736.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "Does the job", comment: "i mean its ok", rating: 4 }],
  },
  {
    name: "LG - 4.1 ch Sound Bar with Wireless Subwoofer and Rear Speakers - Black",
    description: "LG 4.1 ch Sound Bar with Wireless Subwoofer and Rear Speakers",
    features: [
      "Surround Sound Expansion",
      "Feel the sound all around you with rear speakers that wirelessly pair with the sound bar.¹ Experience lifelike sounds that put you in the middle of the scene; hear each raindrop falling on the ground and feel thunder rumbling all around you.",
      "Complementary Design",
      "Specifically designed to match and enhance your TV, the LG Sound Bar perfectly complements your décor.",
      "4.1 Channel",
      "Amp up your listening experience with 4.1 channels and a booming wireless subwoofer that will transform an ordinary TV night into an extraordinary viewing experience.",
      "Wireless Subwoofer",
      "A wireless subwoofer dramatically improves the cinematic audio experience, adding room-shaking bass to movies and more².",
      "TV Remote Compatibility",
      "Control your LG Sound Bar and TV with one remote for more convenience and less clutter.³",
      "Bluetooth",
      "Connect your phone or tablet to the LG Sound Bar via Bluetooth and enjoy your favorite songs through the high-quality sound bar.",
      "Multiple Connection",
      "Choose how you want to connect your device with the LG Sound Bar that supports USB, optical, portable in and Bluetooth connectivity.",
      "¹Rear speakers wirelessly transmit to the LG Sound Bar, but require power and speaker wires back to the transmitter.",
      "²Sound Bar and subwoofer must be plugged into power source.",
      "³Feature available with select TV models from LG, Vizio, SONY, Samsung, Philips, Panasonic, Toshiba, Sharp.",
    ],
    price: 179.99,
    stock: 10,
    category: "Soundbars",
    brand: "LG",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "Black",
    },
    originalPrice: 399.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6559/6559015ld.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6559/6559015_sd.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6559/6559015_rd.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6559/6559015_bd.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6559/6559015cv15d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6559/6559015cv21d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "Good sound", comment: "10/10 bass, very good", rating: 5 }],
  },
  {
    name: "Samsung - 43” Class DU6900 Series Crystal UHD 4K Smart Tizen TV (2024)",
    description:
      "This essential TV features a range of contrast and color and smart capabilities.​ Enjoy your content with richer details, brighter images and clearer resolution with 4K Upscaling.",
    features: [
      "PurColor",
      "See a wide spectrum of colors than traditional RGB models with PurColor. From green turf to an amazing sunset, you’ll enjoy true-to-life picture quality with our innovative color technology.",
      "4K Upscaling",
      "Get a clearer picture for more of your shows and videos. 4K Upscaling transforms each pixel for improved content.",
      "Motion Xcelerator",
      "Watch your content smoothly while experiencing less lag and blur. It improves motion between frames so you have a seamless picture.",
      "Object Tracking Sound Lite",
      "You’ll hear 3D surround sound that follows the movement on screen using our incredible virtual top channel audio—putting you right in the middle of the car chase, stampede or party scene.",
      "Mega Contrast",
      "Automatically adjusts the brightness and contrast. It reduces the difference between light and dark areas so that objects on screen stand out more.",
      "HDR",
      "Take in an impressive spectrum of colors and fine details, even in the darkest scenes. Brightness and contrast are automatically dialed into their ideal levels in every frame so you can see your content as it’s meant to be seen–from the subtle highlights in a dark, moody alleyway to the deep shadows cast on a bright and sunny afternoon.",
      "Q-Symphony",
      "Only Samsung gives you the power to unlock incredible when you pair your TV with a soundbar. With Q-Symphony, your TV speakers paired with Q-Series and S-Series soundbar operate as one. Together, they can optimize all the channels to bring you our most powerful sound experience.¹",
      "Crystal Processor 4K",
      "Watch the content you love upgraded to dazzling 4K resolution. You’ll be able to better enjoy your TV’s capabilities as the Crystal Processor automatically transforms your favorite movies and shows with 3D color mapping and Adaptive Sound. Even if the content you’re watching wasn’t produced in 4K, you can enjoy it like it was.",
      "Samsung TV Plus",
      "Turn on and tune into free live TV with just your WiFi connection. From popular shows and movies to local news and world sports—Samsung TV Plus gives you instant access to a diverse lineup of live streaming TV content to satisfy any interest, occasion or mood. You’ll find more than 250+ channels plus 1,000's of movies on demand, right on a home screen that’s easy to use and discover. It’s all yours to enjoy with no strings attached and without a subscription.²",
      "Samsung Tizen OS",
      "Stream your favorite shows. Follow recipes. Play games. Work out with a trainer. Do all you enjoy with Smart TV Powered by Tizen. In just a few clicks, get instant access to your must-have apps and endless content from the streaming services you love. And with Voice Assistants built into your TV, it’s easy to get to it all with just the sound of your voice.²",
    ],
    price: 219.99,
    stock: 26,
    category: "TVs",
    brand: "Samsung",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "LED",
      screenSize: "50in",
      screenResolution: "4k (2160p)",
      color: "",
    },
    originalPrice: 399.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/438cf2fe-2952-45bd-bac9-1858bbff150e.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/758ac4c8-2226-4031-aa1d-d5069e40c9ad.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/438cf2fe-2952-45bd-bac9-1858bbff150e.jpg;maxHeight=1000;maxWidth=1000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/47a8aec1-9d96-40bf-8f5d-d1eb0c494489.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/c2d19304-5a4c-4d4d-8a64-56e901c38702.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/f283c0b4-7f44-4e3c-ab99-fa599a33d2ff.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      { title: "worst quality ive ever seen", comment: "i didnt know it was possible to look this bad", rating: 1 },
    ],
  },
  {
    name: "Samsung - 55” Class DU6900 Series Crystal UHD 4K Smart Tizen TV (2024)",
    description:
      "This essential TV features a range of contrast and color and smart capabilities.​ Enjoy your content with richer details, brighter images and clearer resolution with 4K Upscaling.",
    features: [
      "PurColor",
      "See a wide spectrum of colors than traditional RGB models with PurColor. From green turf to an amazing sunset, you’ll enjoy true-to-life picture quality with our innovative color technology.",
      "4K Upscaling",
      "Get a clearer picture for more of your shows and videos. 4K Upscaling transforms each pixel for improved content.",
      "Motion Xcelerator",
      "Watch your content smoothly while experiencing less lag and blur. It improves motion between frames so you have a seamless picture.",
      "Object Tracking Sound Lite",
      "You’ll hear 3D surround sound that follows the movement on screen using our incredible virtual top channel audio—putting you right in the middle of the car chase, stampede or party scene.",
      "Mega Contrast",
      "Automatically adjusts the brightness and contrast. It reduces the difference between light and dark areas so that objects on screen stand out more.",
      "HDR",
      "Take in an impressive spectrum of colors and fine details, even in the darkest scenes. Brightness and contrast are automatically dialed into their ideal levels in every frame so you can see your content as it’s meant to be seen–from the subtle highlights in a dark, moody alleyway to the deep shadows cast on a bright and sunny afternoon.",
      "Q-Symphony",
      "Only Samsung gives you the power to unlock incredible when you pair your TV with a soundbar. With Q-Symphony, your TV speakers paired with Q-Series and S-Series soundbar operate as one. Together, they can optimize all the channels to bring you our most powerful sound experience.¹",
      "Crystal Processor 4K",
      "Watch the content you love upgraded to dazzling 4K resolution. You’ll be able to better enjoy your TV’s capabilities as the Crystal Processor automatically transforms your favorite movies and shows with 3D color mapping and Adaptive Sound. Even if the content you’re watching wasn’t produced in 4K, you can enjoy it like it was.",
      "Samsung TV Plus",
      "Turn on and tune into free live TV with just your WiFi connection. From popular shows and movies to local news and world sports—Samsung TV Plus gives you instant access to a diverse lineup of live streaming TV content to satisfy any interest, occasion or mood. You’ll find more than 250+ channels plus 1,000's of movies on demand, right on a home screen that’s easy to use and discover. It’s all yours to enjoy with no strings attached and without a subscription.²",
      "Samsung Tizen OS",
      "Stream your favorite shows. Follow recipes. Play games. Work out with a trainer. Do all you enjoy with Smart TV Powered by Tizen. In just a few clicks, get instant access to your must-have apps and endless content from the streaming services you love. And with Voice Assistants built into your TV, it’s easy to get to it all with just the sound of your voice.²",
    ],
    price: 219.99,
    stock: 26,
    category: "TVs",
    brand: "Samsung",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "LED",
      screenSize: "43in",
      screenResolution: "4k (2160p)",
      color: "",
    },
    originalPrice: 399.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/438cf2fe-2952-45bd-bac9-1858bbff150e.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/758ac4c8-2226-4031-aa1d-d5069e40c9ad.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/c2d19304-5a4c-4d4d-8a64-56e901c38702.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/622e1913-bce5-4081-b8d6-00ce2ad511bd.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/70aeb31e-80da-4aa2-b3d9-e0d132caafb0.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/10f93820-7d8c-41a2-9c4e-a26f6a12b147.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [
      {
        title: "2nd worst quality ive ever seen",
        comment: "i didnt know it was possible to look this bad, twice",
        rating: 2,
      },
    ],
  },
  {
    name: "LG - 65” Class UT70 Series LED 4K UHD Smart webOS TV (2024)",
    description:
      "Bring home 4K resolution in an impressive range of screen sizes with LG UHD TVs. Enjoy swift, easy browsing and tons of personalized recommendations including 300+ free LG channels you can't get anywhere else.",
    features: [
      "4K UHD TV",
      "Everything you need to bring your favorite content to life with the power of 4K and the extras you crave.",
      "α5 AI Processor Gen7",
      "Enhanced brightness, improved sound, refined picture detail. It all comes together for a thrilling watching experience powered by the α5 AI Processor Gen 7.",
      "FILMMAKER MODE",
      "Enjoy movies and TV shows upscaled to 4K for a sharper image and more lifelike details.² See it as the director intended with FILMMAKER MODE. HDR10 Pro allows you to enjoy the latest HDR content with extended contrast for visuals that pop off the screen.",
      "Powerful Gameplay",
      "Quickly customize your gaming experience in one location with the LG Game Optimizer. And, with GeForce NOW included, you can automatically stream and get in the game.³",
      "AI Sound 5.1",
      "The α5 AI Processor Gen7 lets you feel the action all around you as it automatically up-mixes 2-channel audio into virtual 5.1 channel sound for an immersive audio experience.",
      "webOS & LG Channels",
      "With webOS & LG Channels, browse your favorite streaming apps & view 300+ free channels. Enjoy up to 5 years of software updates with webOS Re:New.⁴",
    ],
    price: 379.99,
    stock: 10,
    category: "TVs",
    brand: "LG",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "LED",
      screenSize: "65in",
      screenResolution: "4k (2160p)",
      color: "",
    },
    originalPrice: 599.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d3154864-4a49-409d-838d-71ca55093151.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/0319b0d5-ad02-49a5-84a0-8393fd093bcc.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d3154864-4a49-409d-838d-71ca55093151.jpg;maxHeight=1000;maxWidth=1000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1c6be338-038f-4460-8b60-2d3d3d8d41c6.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/ca643671-a236-4998-907b-186621305b57.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/71080596-f1ab-44ee-9a49-3ac168c0ae23.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "actually not bad", comment: "good for my bathroom tv", rating: 1 }],
  },
  {
    name: 'LG UltraGear 39" OLED Curved WQHD 240Hz 0.03ms FreeSync and NVIDIA G-SYNC Compatible Gaming Monitor with HDR400 - Black',
    description:
      "Experience stunning performance with the huge 39” curved WQHD LG UltraGear OLED gaming monitor. Stay a step ahead of the competition with an ultra-fast refresh rate up to 240Hz and .03ms response time that will bring you into the game like never before¹. And with the steep and dramatic 800R curve, you’ll feel enveloped in the action from virtually all around you. This UltraGear's ultra-thin bezel design, height, tilt and swivel adjustability along with impressive connectivity options and make this UltraGear, ultra-essential for your battlestation setup.",
    features: [
      "Up to 240Hz & 0.03ms For Outrageously Fast OLED Gaming",
      "Gear up for smooth gameplay with an ultra-fast 240Hz OLED display. The faster speed lets you respond quickly to opponents and stay a step ahead of the competition. Plus, enjoy smoother scenes with less lag or ghosting thanks to LG UltraGear OLED's nearly instantaneous 0.03ms (GtG) response time.¹",
      "VESA DisplayHDR True Black 400 & 1.5M:1 contrast ratio",
      "VESA DisplayHDR True Black 400 certified means this monitor meets industry standards for brightness as well as deep, rich black color expression. With a 1.5M:1 contrast ratio, the benefit for gaming is impeccable color and image detail in dark scenes for a stunning visual experience.",
      "NVIDIA G-SYNC Compatible and AMD FreeSync Premium Pro",
      "Officially validated by NVIDIA as G-SYNC Compatible² and equipped with AMD FreeSync Premium Pro means this UltraGear provides smooth, fast action that reduces screen tearing and stutter. Never miss a frame of the action as you clinch your victories.",
      "The 800R Curve Envelops You As You Play",
      "This UltraGear OLED monitor's dramatic and steep 800R curve draws you in with gameplay by extending the periphery to feel like you're surrounded by the action.",
      "Designed For the Win",
      "Lose yourself in the game with a virtually borderless, ultra-thin design that optimizes space within your battlestation. Easily make height, tilt, and swivel adjustments to the display to be able to see and play exactly to your specs.",
      "Anti-Glare / Low Reflection OLED",
      "Play with less distractions thanks to an anti-glare screen that minimizes light reflections and lets you concentrate on winning.",
      "2 Year UltraGear OLED Warranty",
      "Game with peace of mind. This UltraGear OLED gaming monitor is protected by a two-year limited warranty covering internal and functional parts and labor, including OLED Display Panel. See Warranty Information on this page for all warranty details.",
      "Amp Up Your Game Audio with DTS Headphone:X",
      "DTS Headphone:X³ provides accurate spatialization and localization in games for 3D audio over headphones. Supports channel-based, scene-based, and object-based audio. Plus, a 4-pole headphone jack lets you carry a stereo headphone signal and mono microphone signal with common ground.",
      "Serious Connections for Serious Gamers",
      "Enjoy smoother, vivid colors and high-resolution graphics thanks to HDMI 2.1 and DisplayPort 1.4. Both connections are supported on this display and let you experience up to 240Hz refresh rate.⁴",
      'Bold Color On A 39" OLED Screen',
      'Bring big-time color to the screen. The LG UltraGear OLED 34" display lets you explore HDR content the way it was meant to be seen with up to 98.5% DCI-P3 color gamut expression — an elevated color spectrum that showcases brilliant color.',
    ],
    price: 879.99,
    stock: 10,
    category: "",
    brand: "",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 1499.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/20e3c94b-e3d5-4b54-97aa-f06e54553a2d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/310c40f6-8ec3-4c50-be7a-578008947397.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d46f059a-e68b-484c-a7f3-70e6c53b2f3e.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/db7008eb-8c68-4965-8006-1303e57bb380.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/c5b58a9a-0b35-4e9e-b80f-4dacd82faae0.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/84e1275c-a301-4e98-94c2-ceff97e1f485.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "good", comment: "beautiful quality", rating: 5 }],
  },
  {
    name: 'Dell - S2421NX 23.8" IPS LED FHD - AMD FreeSync - VESA - Monitor (HDMI) - Black',
    description:
      "The Dell 24” FHD monitor is beautifully designed to sit easily into any space ready for your everyday lifestyle. Built-in dual HDMI ports keep your devices always plugged in. The three-sided ultrathin bezel design lets you enjoy superb screen clarity in 1920 x 1080 Full HD resolution. Smooth, tear-free experience with AMD FreeSync technology, featuring up to 75Hz refresh rate. This TÜV-certified monitor has a flicker-free screen with ComfortView, a feature that reduces harmful blue light emissions. ",
    features: [
      "Full HD 1920 x 1080 resolution High resolutions that deliver a solid gaming or video experience without undue strain on your graphics card.",
      "75Hz Refresh Rate Delivers powerful performance so that you can get the most out of your games and videos.",
      "IPS Technology Get virtually seamless views with consistent colors across a wide 178°/178° viewing angle with In-Plane Switching (IPS) technology",
    ],
    price: 79.99,
    stock: 10,
    category: "Monitors",
    brand: "Dell",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "IPS LED",
      screenSize: "23.8",
      screenResolution: "FHD (1080p)",
      color: "",
    },
    originalPrice: 129.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/c288beca-be35-477e-a867-01705bcab0b4.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/e8817c1e-b8c4-4e20-8b8f-50faed47a095.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8c0736d1-8a2b-45fb-b828-2872fa2cbb13.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7ee16a2b-5c9f-449f-8ebc-3c5fa755d656.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2c28861d-eaf1-46b2-9125-64c7203656e9.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "good", comment: "beautiful quality", rating: 5 }],
  },
  {
    name: "Nintendo - Switch with Neon Blue and Neon Red Joy‑Con - Multi",
    description:
      "Play at home or on the go with one system. The Nintendo Switch system is designed to go wherever you do, instantly transforming from a home console you play on TV to a portable system you can play anywhere. So you get more time to play the games you love, however you like. Enjoy three modes in one system. TV mode: Connect your system to the TV using the included dock to enjoy a traditional gaming experience in HD. Handheld mode: Bring your games on your next travel adventure, or simply carve out some “me” time in the coziest seat in the house. Tabletop mode: Pop the kickstand on the screen and detach the included Joy-Con controllers to enjoy game time even without a TV. Games for the whole family. Nintendo Switch systems are the home of games like Super Mario Bros. Wonder, Mario Kart 8 Deluxe, and others starring Mario and friends. And don’t forget series like Animal Crossing, The Legend of Zelda, Splatoon, Pikmin, and more! Connect and play together. Share the smiles! You can buddy up on one system, play online, or even link your systems together wherever you are for multiplayer favorites like the Super Smash Bros. Ultimate game. Joy-Con controllers included. The two included Joy-Con controllers let you play multiplayer games right out of the box—just pass one to a friend and go. Attach both to the screen for handheld mode or use both as a single controller when you play on the big screen. Plus, built-in motion controls really put you in the game in titles like Super Mario Party. ",
    features: ["", ""],
    price: 279.99,
    stock: 10,
    category: "Gaming",
    brand: "Nintendo",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 299.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522225_sd.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522225cv12d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522225cv11d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "fun", comment: "fun", rating: 5 }],
  },
  {
    name: "Google - Pixel 9 128GB (Unlocked) - Obsidian",
    description:
      "Meet Pixel 9 with Gemini. Engineered by Google, Pixel gets the best of Google’s AI first. So you can take amazing photos, make edits like magic, and get things done even easier. Pixel can protect against spam and other threats. It helps you in an emergency.10 And it’s built to last.",
    features: ["", ""],
    price: 649.99,
    stock: 10,
    category: "Phones",
    brand: "Google",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 699.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/69d6984c-f687-4dc4-ba00-292c9ce2828b.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/e8ffd85f-cc8a-4cd9-8eae-172d2f2e2206.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/014084cb-ea08-45da-87a3-b7357d93c85c.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/a74d0a5e-82cb-4e89-816c-0203353464ad.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8d844cf8-c436-46a3-bc9c-72cf8f17c54b.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "yeah", comment: "yeah", rating: 5 }],
  },
  {
    name: "Apple - iPhone 16 128GB - Apple Intelligence - Black",
    description: "",
    features: ["", ""],
    price: 829.99,
    stock: 10,
    category: "Phones",
    brand: "Apple",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 829.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/98d25850-46ea-43d2-993a-36367a197821.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "nice", comment: "cool", rating: 4 }],
  },
  {
    name: "Apple - iPhone 16 128GB - Apple Intelligence - White",
    description: "",
    features: ["", ""],
    price: 829.99,
    stock: 10,
    category: "Phones",
    brand: "Apple",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 829.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/bc47bf65-209a-411d-b8eb-48b2aeda773d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/0e00d0e6-b126-4480-aef3-4b821409a533.jpg;maxHeight=2000;maxWidth=2000;format=webp",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/30d6432b-ff74-4f13-9046-df0da205d194.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "nice", comment: "cool", rating: 4 }],
  },
  {
    name: "SteelSeries - Apex Pro TKL V2 Wired HyperMagnetic Gaming Keyboard – With Rapid Tap, Rapid Trigger, Adjustable Actuation - Black",
    description: "",
    features: ["", ""],
    price: 129.99,
    stock: 10,
    category: "Keyboards",
    brand: "Steelseries",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 189.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/b5732f49-ff85-45be-ad26-540069bd08c6.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "nice", comment: "cool", rating: 4 }],
  },
  {
    name: "CORSAIR - K70 RGB PRO Full-size Wired Mechanical Cherry MX Speed Linear Switch Gaming Keyboard with PBT Double-Shot Keycaps - Black",
    description: "",
    features: ["", ""],
    price: 99.99,
    stock: 10,
    category: "Keyboards",
    brand: "Corsair",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 159.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6491/6491897_sd.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "nice", comment: "cool", rating: 4 }],
  },
  {
    name: "Logitech - G305 LIGHTSPEED Wireless Optical 6 Programmable Button Gaming Mouse with 12,000 DPI HERO Sensor - Black",
    description: "",
    features: ["", ""],
    price: 29.99,
    stock: 10,
    category: "Mouses",
    brand: "Logitech",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 49.99,
    imageUrl: [
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/04d8ca11-0503-4e18-bbcc-618139ff5a3d.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    ],

    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{ title: "nice", comment: "cool", rating: 4 }],
  },
];

const test = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/product/multiple", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: testProducts,
      }),
    });

    if (!response.ok) {
      throw new Error("Response not ok");
    }
    console.log("Products uploaded successfully!");
  } catch (error) {
    console.error("Error uploading products:", error);
  }
};
test();

/*
{
    name: "",
    description:
      "",
    features: [
"",""
    ],
    price: 699.99,
    stock: 10,
    category: "",
    brand: "",
    specs: {
      processor: "",
      graphics: "",
      memory: "",
      storage: "",
      displayType: "",
      screenSize: "",
      screenResolution: "",
      color: "",
    },
    originalPrice: 699.99,
    imageUrl: [
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    
    userId: "d446b038-db54-4dcd-b620-29a256f9d0d3",
    reviews: [{title: "", comment: "", rating: 1}],
  },
*/
