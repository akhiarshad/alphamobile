// Product data with modern design elements
const products = {
    anker: {
        id: "powerbank",
        title: "Anker MagGo Power Bank",
        price: "₹1,299",
        originalPrice: "₹1,999",
        discount: "35% OFF",
        rating: 4.5,
        reviewCount: 234,
        badge: "Bestseller",
        badgeClass: "",
        images: [
            "images/Magsafe powerbank.png",
            "images/Magsafe powerbank1.jpg",
            "images/Magsafe powerbank2.jpg",
            "images/Magsafe powerbank3.jpg"
        ],
        description: "Qi2 Certified 15W Ultra-Fast MagSafe-Compatible Portable Charger, 10,000mAh Battery Pack with Smart Display and Foldable Stand.",
        features: [
            "Qi2 Certified Charging",
            "Double Up on Speed",
            "Informative Smart Display",
            "Power Up and Prop Up",
            "Compact & Portable Design",
            "Advanced Safety Protection System"
        ],
        specifications: [
            { label: "Capacity", value: "10000mAh" },
            { label: "Input", value: "5V/2A" },
            { label: "Output", value: "5V/2.1A (Dual Ports)" },
            { label: "Weight", value: "220g" },
            { label: "Dimensions", value: "10 x 7 x 2 cm; 249.48 g" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    spigen: {
        id: "powerbank",
        title: "Spigen ArcPack 10000mAh Power Bank",
        price: "₹1,499",
        originalPrice: "₹1,999",
        discount: "25% OFF",
        rating: 4.5,
        reviewCount: 234,
        badge: "Bestseller",
        badgeClass: "",
        images: [
            "images/Spigen1.jpg",
            "images/Spigen2.jpg",
            "images/Spigen3.jpg",
            "images/Spigen4.jpg"
        ],
        description: "Built-in USB-C Cable,30.0W Fast Charging, 1 Type-C Cable, 1 Type-C Port, 1 USB-A Port - (ABS + PC).",
        features: [
            "Built-in USB-C Cable",
            "Pocket-sized For Everyday Carry",
            "Guaranteed Saftety",
            "30.0W Fast Charging",
            "Compact & Portable Design",
            "Advanced Safety Protection System"
        ],
        specifications: [
            { label: "Capacity", value: "10000mAh" },
            { label: "Input", value: "5V/2A" },
            { label: "Output", value: "5V/2.1A (Dual Ports)" },
            { label: "Weight", value: "220g" },
            { label: "Dimensions", value: "16.6 x 8.3 x 3.6 cm; 200 g" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
     ankerpower: {
        id: "powerbank",
        title: "Anker Power Bank 20000 mAh with 3-Ports",
        price: "₹1,399",
        originalPrice: "₹1,799",
        discount: "22% OFF",
        rating: 4.5,
        reviewCount: 234,
        badge: "Bestseller",
        badgeClass: "",
        images: [
            "images/ankerpower.jpg",
            "images/ankerpower1.jpg",
            "images/ankerpower2.jpg",
            "images/ankerpower3.jpg"
        ],
        description: "30W Max PD Fast Charge, Compatible iPhones, iPads, Macbooks, Samsung Smartphones and Other Android Devices.",
        features: [
            "30W Max PD Fast Charge",
            "High-Capacity",
            "Digital Display",
            "3-way Outputs",
            "Eco Friendly Design",
            "Advanced Safety Protection System"
        ],
        specifications: [
            { label: "Capacity", value: "20000mAh" },
            { label: "Battery Power Rating", value: "20000 Milliamp Hours" },
            { label: "Output", value: "5V/2.1A (Dual Ports)" },
            { label: "Weight", value: "462g" },
            { label: "Dimensions", value: "31.5 x 24.7 x 2.8 Centimeters" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    spigenpower2: {
        id: "powerbank",
        title: "Spigen ArcPack 30000mAh Power Bank",
        price: "₹1,999",
        originalPrice: "₹3,499",
        discount: "43% OFF",
        rating: 4.5,
        reviewCount: 234,
        badge: "Bestseller",
        badgeClass: "",
        images: [
            "images/spigen30kmah.jpg",
            "images/spigen30kmah2.jpg",
            "images/spigen30kmah3.jpg",
            "images/spigen30kmah4.jpg"
        ],
        description: "PD3.0, Fast Charging, 22.5W Max Output, 2 Type-C Ports, 1 USB-A Port- (ABS+PC).",
        features: [
            "Charge Multiple Devices with 3 Ports",
            "22.5W Fast Charging",
            "30000mAh of Robust Power",
            "3-way Outputs",
            "Eco Friendly Design",
            "Guaranteed Saftety"
        ],
        specifications: [
            { label: "Capacity", value: "20000mAh" },
            { label: "Battery Power Rating", value: "20000 Milliamp Hours" },
            { label: "Special features", value: "Fast Charging, LED Indicator Lights, Over Charging Protection" },
            { label: "Weight", value: "462g" },
            { label: "Dimensions", value: "18.1 x 11.6 x 3.6 cm; 553g" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    firebolt: {
        id: "earbuds",
        title: "JBL Wave Buds 2",
        price: "₹999",
        originalPrice: "₹1,499",
        discount: "33% OFF",
        rating: 3.5,
        reviewCount: 189,
        badge: "New",
        badgeClass: "new",
        images: [
            "images/spigenair.jpg",
            "images/spigenair1.jpg",
            "images/spigenair2.jpg",
            "images/spigenair3.jpg"
        ],
        description: "Ear Buds Wireless BluetoothV5.3, Active Noise Cancellation EarBuds,Multi Connect, App for Customized Extra Bass Eq, Relax Mode,Speed Charge, 40H Playback, Fast Pair, 4 Mics,IP54.",
        features: [
            "Active Noise Cancellation",
            "Superior Sound Quality",
            "Long Battery Life (24 hours)",
            "Touch Controls",
            "Water Resistant (IPX4)",
            "Quick Pair Technology"
        ],
        specifications: [
            { label: "Driver Size", value: "10mm" },
            { label: "Battery Life", value: "24 hours (with case)" },
            { label: "Charging Time", value: "1.5 hours" },
            { label: "Bluetooth", value: "5.0" },
            { label: "Weight", value: "45g (each bud)" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    ptron: {
        id: "earbuds",
        title: "pTron Boom Play X4 Dual Driver in-Ear Type C Wired Earphones",
        price: "₹499",
        originalPrice: "₹999",
        discount: "24% OFF",
        rating: 4.5,
        reviewCount: 189,
        badge: "New",
        badgeClass: "new",
        images: [
            "images/ptron boom play.jpg",
            "images/ptron boom play1.jpg",
            "images/ptron boom play2.jpg",
            "images/ptron boom play3.jpg"
        ],
        description: "in-line HD Mic, Music Call Control, Ergo-fit, 1.2m Tangle-Free Cable, Wide Compatibility    .",
        features: [
            "Boom Play X4 wired earphones",
            "Lightweight in-ear wired earphones",
            "Wired earphones with in-line remote and mic for clear",
            "Type-C wired earphones compatible with Type-C audio port devices",
            "1.2m tangle-free TPE cable",
            "Wide compatibility with smartphones/tablets/laptops and other Type-C audio port device "
        ],
        specifications: [
            { label: "Noise Control", value: "Sound Isolation" },
            { label: "Connectivity Technology", value: "Wired" },
            { label: "Included Components", value: "Eartip" },
            { label: "Material", value: "Acrylonitrile Butadiene Styrene (ABS), Thermoplastic Elastomer (TPE)" },
            { label: "Weight", value: "20 Grams" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
     truke: {
        id: "earbuds",
        title: "Truke New Launch [2025] Mega 7 True Wireless in-Ear Earbuds",
        price: "₹899",
        originalPrice: "₹1,299",
        discount: "24% OFF",
        rating: 4.5,
        reviewCount: 189,
        badge: "New",
        badgeClass: "new",
        images: [
            "images/trukeair.jpg",
            "images/trukeair1.jpg",
            "images/trukeair2.jpg",
            "images/trukeair3.jpg"
        ],
        description: "24-Bit 360 Spatial Audio, 60H Playtime & Fast Charging Buds, Dual Pairing, 40ms Low Latency TWS, 4-Mic ENC.",
        features: [
            "24-Bit 360Spatial Sound",
            "60 Hours of Massive Playtime",
            "Dual Pairing Technology",
            "Premium Leather Finish Case",
            "Quad-Mic PureVoice ENC Technology",
            "40ms Ultra Low Latency Gaming Mode "
        ],
        specifications: [
            { label: "Noise Control", value: "Sound Isolation" },
            { label: "Connectivity Technology", value: "Wireless" },
            { label: "Included Components", value: "Eartip" },
            { label: "Material", value: "Acrylonitrile Butadiene Styrene (ABS), Thermoplastic Elastomer (TPE)" },
            { label: "Weight", value: "20 Grams" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    honeywell: {
        id: "charger",
        title: "Honeywell Dual USB with LED Display Car Charger",
        price: "₹599",
        originalPrice: "₹799",
        discount: "25% OFF",
        rating: 4.7,
        reviewCount: 312,
        badge: "Popular",
        badgeClass: "popular",
        images: [
            "images/honeywellcar.jpg",
            "images/honeywellcar1.jpg",
            "images/honeywellcar2.jpg",
            "images/honeywellcar3.jpg"
        ],
        description: "24W Dual USB Charger, QC 3.0 Fast Charging, Compatible with iPhones, Smartphones, Tablets, Smartwatches, Power Banks, Dashcams.",
        features: [
            "24W Fast Charging",
            "Fast Charging, Short Circuit Protection",
            "Built-in intelligent IC chip",
            "Universal compatibility with USB-powered devices",
            "Equipped with LED Display",
            "USB with LED Display Car Charger"
        ],
        specifications: [
            { label: "Output", value: "24W Max" },
            { label: "Input", value: "100-240V AC" },
            { label: "USB Ports", value: "1 x USB-C" },
            { label: "Product Dimensions", value: "4.5 x 11 x 2.5 cm; 43 g" },
            { label: "Special Features", value: "Fast Charging, Short Circuit Protection" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
     ambrane: {
        id: "charger",
        title: "Ambrane 100W GaN Charger",
        price: "₹1,999",
        originalPrice: "₹2,499",
        discount: "20% OFF",
        rating: 4.7,
        reviewCount: 312,
        badge: "Popular",
        badgeClass: "popular",
        images: [
            "images/ambrane.jpg",
            "images/ambrane1.jpg",
            "images/ambrane2.jpg",
            "images/ambrane3.jpg"
        ],
        description: "Adapter with 4 Ports (3 USB-C + 1 USB-A), PD Support, iPhone 0–50% in Minutes, Compatible with All iPhones, Android Phones, Laptops & MacBooks.",
        features: [
            "100W Fast Charging",
            "Wide Compatibility",
            "GaN Technology",
            "Multi-Port Convenience",
            "Advanced Protection",
            "Compact & Portable"
        ],
        specifications: [
            { label: "Output", value: "100W Max" },
            { label: "Input", value: "100-240V AC" },
            { label: "USB Ports", value: "3 x USB-C, 1 x USB-A" },
            { label: "Product Dimensions", value: "5.5 x 4 x 7.7 cm; 189 g" },
            { label: "Special Features", value: "Fast Charging, Short Circuit Protection" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    bestor: {
        id: "charger",
        title: "BESTOR® 60W USB C Multi Fast Charging Cable",
        price: "₹299",
        originalPrice: "₹499",
        discount: "40% OFF",
        rating: 3.5,
        reviewCount: 312,
        badge: "Popular",
        badgeClass: "popular",
        images: [
            "images/Bestro.jpg",
            "images/Bestro1.jpg",
            "images/Bestro2.jpg",
            "images/Bestro3.jpg"
        ],
        description: "Nylon Braided Cord 5-in-1 3A USB/C to Type C/Micro/Phone Fast Sync Charger Cable Compatible with Laptop/Tablet/Phone (1.5 M).",
        features: [
            "Micro USB, USB Type C, iOS",
            "Chargable Speaker, Charging Adapter, Smart Watch, Smartphone",
            "Braided",
            "High Speed, High quality copper",
            "60W Power Delivery for USB-C Laptop",
            "Compact & Portable"
        ],
        specifications: [
            { label: "Connector Type", value: "Micro USB, USB Type C, iOS" },
            { label: "Compatible Devices", value: "Chargable Speaker, Charging Adapter, Smart Watch, Smartphone" },
            { label: "AC Adapter Current", value: "3 Amps" },
            { label: "Product Dimensions", value: "2.3 x 6.1 x 18.2 cm; 100 g" },
            { label: "Special Features", value: "Fast Charging, Short Circuit Protection" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    fireboltsmart: {
        id: "smartwatch",
        title: "Fire-Boltt Axiom",
        price: "₹1,499",
        originalPrice: "₹2,499",
        discount: "27% OFF",
        rating: 4.4,
        reviewCount: 156,
        badge: "Smart",
        badgeClass: "hot",
        images: [
            "images/firebolt.jpg",
            "images/firebolt1.jpg",
            "images/firebolt2.jpg",
            "images/firebolt3.jpg"
        ],
        description: "Advanced smartwatch with health monitoring, fitness tracking, and smartphone connectivity. Track your daily activities and stay connected with style.",
        features: [
            "Heart Rate Monitoring",
            "Fitness Tracking",
            "Sleep Analysis",
            "Water Resistant (IP68)",
            "7-day Battery Life",
            "Smart Notifications"
        ],
        specifications: [
            { label: "Display", value: "1.4\" AMOLED" },
            { label: "Battery Life", value: "7 days" },
            { label: "Water Resistance", value: "IP68" },
            { label: "Sensors", value: "Heart Rate, SpO2, Accelerometer" },
            { label: "Connectivity", value: "Bluetooth 5.0" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    boatsmart: {
        id: "smartwatch",
        title: "boAt Lunar Discovery",
        price: "₹1,299",
        originalPrice: "₹2,299",
        discount: "27% OFF",
        rating: 4.4,
        reviewCount: 156,
        badge: "Smart",
        badgeClass: "hot",
        images: [
            "images/boatsmart.jpg",
            "images/boatsmart1.jpg",
            "images/boatsmart2.jpg",
            "images/boatsmart3.jpg"
        ],
        description: "Advanced smartwatch with health monitoring, fitness tracking, and smartphone connectivity. Track your daily activities and stay connected with style.",
        features: [
            "Heart Rate Monitoring",
            "Fitness Tracking",
            "Sleep Analysis",
            "Water Resistant (IP68)",
            "7-day Battery Life",
            "Smart Notifications"
        ],
        specifications: [
            { label: "Display", value: "1.4\" AMOLED" },
            { label: "Battery Life", value: "7 days" },
            { label: "Water Resistance", value: "IP68" },
            { label: "Sensors", value: "Heart Rate, SpO2, Accelerometer" },
            { label: "Connectivity", value: "Bluetooth 5.0" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    ptronspeaker: {
        id: "speaker",
        title: "Ptron Bluetooth Speaker",
        price: "₹799",
        originalPrice: "₹1,299",
        discount: "22% OFF",
        rating: 4.6,
        reviewCount: 278,
        badge: "Bestseller",
        badgeClass: "",
        images: [
            "images/ptronspeaker.jpg",
            "images/ptronspeaker1.jpg",
            "images/ptronspeaker2.jpg",
            "images/ptronspeaker3.jpg"
        ],
        description: "Portable Bluetooth speaker with powerful sound, deep bass, and long battery life. Perfect for parties, outdoor activities, and home entertainment.",
        features: [
            "Powerful 20W Sound",
            "Deep Bass Technology",
            "12-hour Battery Life",
            "Water Resistant (IPX5)",
            "Bluetooth 5.0",
            "Built-in Microphone"
        ],
        specifications: [
            { label: "Power Output", value: "20W" },
            { label: "Battery Life", value: "12 hours" },
            { label: "Charging Time", value: "3 hours" },
            { label: "Connectivity", value: "Bluetooth 5.0" },
            { label: "Water Resistance", value: "IPX5" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
     dubstep: {
        id: "speaker",
        title: "Dubstep Pop 1200",
        price: "₹699",
        originalPrice: "₹1,199",
        discount: "22% OFF",
        rating: 4.6,
        reviewCount: 278,
        badge: "Bestseller",
        badgeClass: "",
        images: [
            "images/dubstep.jpg",
            "images/dubstep1.jpg",
            "images/dubstep2.jpg",
            "images/dubstep3.jpg"
        ],
        description: "Portable Bluetooth speaker with powerful sound, deep bass, and long battery life. Perfect for parties, outdoor activities, and home entertainment.",
        features: [
            "Powerful 20W Sound",
            "Deep Bass Technology",
            "12-hour Battery Life",
            "Water Resistant (IPX5)",
            "Bluetooth 5.0",
            "Built-in Microphone"
        ],
        specifications: [
            { label: "Power Output", value: "20W" },
            { label: "Battery Life", value: "12 hours" },
            { label: "Charging Time", value: "3 hours" },
            { label: "Connectivity", value: "Bluetooth 5.0" },
            { label: "Water Resistance", value: "IPX5" },
            { label: "Warranty", value: "12 Months" }
        ]
    },
    torras: {
        id: "tempered-glass",
        title: "TORRAS Mil-Grade Shatterproof Screen Guard",
        price: "₹299",
        originalPrice: "₹499",
        discount: "40% OFF",
        rating: 4.2,
        reviewCount: 445,
        badge: "Popular",
        badgeClass: "popular",
        images: [
            "images/Torrastem.jpg",
            "images/Torrastem1.jpg",
            "images/Torrastem2.jpg",
            "images/Torrastem3.jpg"
        ],
        description: "Premium tempered glass screen protector with 9H hardness, scratch resistance, and bubble-free installation. Protect your device with crystal clear clarity.",
        features: [
            "9H Hardness Rating",
            "Scratch Resistant",
            "Bubble-free Installation",
            "Crystal Clear Clarity",
            "Oleophobic Coating",
            "Touch Sensitive"
        ],
        specifications: [
            { label: "Hardness", value: "9H" },
            { label: "Thickness", value: "0.3mm" },
            { label: "Transparency", value: "99%" },
            { label: "Coating", value: "Oleophobic" },
            { label: "Compatibility", value: "Universal" },
            { label: "Warranty", value: "6 Months" }
        ]
    },
    xtrength: {
        id: "xtrength",
        title: "Advanced HD+ Front & Back Ultra Thin Unbreakable Screen Protector ",
        price: "₹189",
        originalPrice: "₹349",
        discount: "40% OFF",
        rating: 3.8,
        reviewCount: 405,
        badge: "Popular",
        badgeClass: "popular",
        images: [
            "images/screenpro.jpg",
            "images/screenpro1.jpg",
            "images/screenpro2.jpg",
            "images/screenpro3.jpg"
        ],
        description: "Edge to Edge Full Mobile Coverage with Easy Installation Kit (Anti-Scratch).",
        features: [
            "3M vinyl film material",
            "Scratch Resistant",
            "Bubble-free Installation",
            "Crystal Clear Clarity",
            "Oleophobic Coating",
            "Touch Sensitive"
        ],
        specifications: [
            { label: "Hardness", value: "3M vinyl" },
            { label: "Thickness", value: "0.3mm" },
            { label: "Transparency", value: "99%" },
            { label: "Coating", value: "Oleophobic" },
            { label: "Compatibility", value: "Universal" },
            { label: "Warranty", value: "6 Months" }
        ]
    },
    opentech: {
        id: "opentech",
        title: "OpenTech® Privacy Tempered Glass Screen Protector",
        price: "₹289",
        originalPrice: "₹399",
        discount: "40% OFF",
        rating: 3.8,
        reviewCount: 405,
        badge: "Popular",
        badgeClass: "popular",
        images: [
            "images/opentechprivacy.jpg",
            "images/opentechprivacy1.jpg",
            "images/opentechprivacy2.jpg",
            "images/opentechprivacy3.jpg"
        ],
        description: "Edge to Edge Full Mobile Coverage with Easy Installation Kit (Anti-Scratch).",
        features: [
            "3M vinyl film material",
            "Scratch Resistant",
            "Bubble-free Installation",
            "Crystal Clear Clarity",
            "Oleophobic Coating",
            "Touch Sensitive"
        ],
        specifications: [
            { label: "Hardness", value: "3M vinyl" },
            { label: "Thickness", value: "0.3mm" },
            { label: "Transparency", value: "99%" },
            { label: "Coating", value: "Oleophobic" },
            { label: "Compatibility", value: "Universal" },
            { label: "Warranty", value: "6 Months" }
        ]
    },
    slimcase: {
        id: "slim-case",
        title: "Drop Protection TPU Stride 2.0 Clear Slim Shockproof Back Cover",
        price: "₹649",
        originalPrice: "₹899",
        discount: "40% OFF",
        rating: 4.2,
        reviewCount: 445,
        badge: "Popular",
        badgeClass: "popular",
        images: [
            "images/Slimcase.jpg",
            "images/Slimcase1.jpg",
            "images/Slimcase2.jpg",
            "images/Slimcase3.jpg"
        ],
        description: "SHOCKPROOF COVER: The case fits the phone like a glove by wrapping every side of your device. It provides effective protection against impact and shock. The case has a raised lip which is higher than the screen and camera to provide full protection. Thin, light weight & durable case which protects your mobile phone from scratches and drops. The raised lip on the case sides offers complete 360 degree protection..",
        features: [
            "Minimal Thickness / Low Profile",
            "Lightweight",
            "Good Grip / Textured Surface",
            "Raised Edges (Bezel Protection)",
            "Shock / Drop Protection (Moderate)",
            "Compatibility with Wireless Charging / MagSafe"
        ],
        specifications: [
            { label: "Material", value: "Silicone" },
            { label: "Thickness", value: "0.5–1.5 mm" },
            { label: "Impact Protection", value: "MIL-STD-810G" },
            { label: "Weight", value: "lightweight" },
            { label: "Grip", value: "glossy" },
            { label: "Wireless", value: "case allows wireless charging" }
        ]
    },
    ruggedcase: {
        id: "ruggedcase",
        title: "MARKILL Compatible with iPhone Case with Ring Stand, Military Grade Drop Protection",
        price: "₹999",
        originalPrice: "₹1299",
        discount: "40% OFF",
        rating: 4.2,
        reviewCount: 445,
        badge: "Popular",
        badgeClass: "popular",
        images: [
            "images/ruggedcase.jpg",
            "images/ruggedcase1.jpg",
            "images/ruggedcase2.jpg",
            "images/ruggedcase3.jpg"
        ],
        description: "Military Grade Drop Protection Full Body Rugged Heavy Duty Protective Durable Cover.",
        features: [
            "Multi-layer / Hybrid Construction",
            "Reinforced Corners & Shock-Absorbing Edges",
            "Raised Bezels / Lip — Screen & Camera Protection",
            "Strong Grip / Non-Slip Surface / Textured Build",
            "Dust, Water, & Environmental Protection (Optional / High-end)",
            "Precise Fit & Full-Coverage Protection"
        ],
        specifications: [
            { label: "Construction type", value: "Hard outer + shock-absorbing inner" },
            { label: "Shock protection rating", value: "MIL-STD-810G" },
            { label: "Edge and corner protection", value: "reinforced corners, raised bezels" },
            { label: "Coating", value: "Oleophobic" },
            { label: "Compatibility", value: "Universal" },
            { label: "Warranty", value: "6 Months" }
        ]
    },
     walletcase: {
        id: "walletcase",
        title: "KARWAN®? Premium Back Cover Shockproof Frosted TPU Case with Card Holder Stand & Camera Protection - (Black)",
        price: "₹699",
        originalPrice: "₹999",
        discount: "40% OFF",
        rating: 4.2,
        reviewCount: 445,
        badge: "Popular",
        badgeClass: "popular",
        images: [
            "images/walletcase.jpg",
            "images/walletcase1.jpg",
            "images/walletcase2.jpg",
            "images/walletcase3.jpg"
        ],
        description: "Crafted by KARWAN trusted by millions for durable and stylish protection..",
        features: [
            "Card & Cash Storage",
            "Convenience & Minimal Everyday Carry",
            "Functionality — Stand / Kickstand Option",
            "Style and Material — Premium Look & Feel",
            "Better Grip / Handling",
            "Less Convenient for Quick Use"
        ],
        specifications: [
            { label: "Construction type", value: "back + card-slot" },
            { label: "Card/Cash Storage Capacity", value: "2-3 cards" },
            { label: "Protection Level", value: "shock absorption; raised edges" },
            { label: "Fit/Compatibility", value: "Precise cut-outs for ports, buttons, camera" },
            { label: "Thickness", value: "Wallet covers tend to be thicker and heavier" },
            { label: "Warranty", value: "6 Months" }
        ]
    },
};



// DOM elements
const urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get('id') || '';

// Map category-specific IDs to existing product keys
const idAliasMap = {
    // Phone Cases
    'slim-case': 'slimcase',
    'rugged-case': 'ruggedcase',
    'wallet-case': 'temperedglass',
    // Screen Protectors
    'tempered-glass': 'torras',
    'film-protector': 'xtrength',
    'privacy-filter': 'opentech',
    // Chargers & Cables
    'wall-charger': 'charger',
    'car-charger': 'charger',
    'usb-c-lightning': 'charger',
    // Power Banks
    'slim-powerbank': 'powerbank',
    'high-capacity-powerbank': 'powerbank',
    'solar-powerbank': 'powerbank',
    // Audio Accessories
    'wireless-earbuds': 'earbuds',
    'headphones': 'earbuds',
    'speakers': 'speaker',
    // Wearable Accessories
    'smartwatch-bands': 'smartwatch',
    'fitness-trackers': 'smartwatch',
    'phone-clips': 'smartwatch'
};

// Normalize and resolve product ID to existing product keys
const normalizeId = (id) => id ? id.replace(/[\s_-]+/g, '').toLowerCase() : '';
if (!products[productId]) {
    const normalized = normalizeId(productId);
    if (products[normalized]) {
        productId = normalized;
    } else if (idAliasMap[productId]) {
        productId = idAliasMap[productId];
    }
}

const product = products[productId];

// Load product data
function loadProductData() {
    if (!product) {
        document.body.innerHTML = '<div style="text-align: center; padding: 50px;"><h1>Product not found</h1><a href="index.html">Go back to home</a></div>';
        return;
    }

    // Update page title
    document.title = `${product.title} - Alpha Mobile`;

    // Update breadcrumb
    document.getElementById('current-product').textContent = product.title;

    // Update product images
    const mainImage = document.getElementById('main-product-img');
    mainImage.src = product.images[0];
    mainImage.alt = product.title;

    // Update thumbnails
    const thumbnailsContainer = document.getElementById('product-thumbnails');
    thumbnailsContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="${product.title} ${index + 1}">`;
        thumbnail.addEventListener('click', () => {
            mainImage.src = image;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumbnail);
    });

    // Update product info
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('current-price').textContent = product.price;
    document.getElementById('original-price').textContent = product.originalPrice;
    document.getElementById('discount').textContent = product.discount;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('rating-count').textContent = `${product.rating} (${product.reviewCount} reviews)`;

    // Update rating stars
    const starsContainer = document.getElementById('product-stars');
    starsContainer.innerHTML = '';
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsContainer.innerHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsContainer.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(product.rating);
    for (let i = 0; i < emptyStars; i++) {
        starsContainer.innerHTML += '<i class="far fa-star"></i>';
    }

    // Update badge
    const badgeElement = document.getElementById('product-badge');
    if (product.badge) {
        badgeElement.textContent = product.badge;
        badgeElement.className = `product-badge-detail ${product.badgeClass}`;
    } else {
        badgeElement.style.display = 'none';
    }

    // Update features
    const featuresContainer = document.getElementById('product-features');
    featuresContainer.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresContainer.appendChild(li);
    });

    // Update specifications
    const specsContainer = document.getElementById('product-specifications');
    specsContainer.innerHTML = '';
    product.specifications.forEach(spec => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${spec.label}</td>
            <td>${spec.value}</td>
        `;
        specsContainer.appendChild(row);
    });

    // Load related products
    loadRelatedProducts();
}

// Load related products
function loadRelatedProducts() {
    const relatedProductsGrid = document.getElementById('related-products-grid');
    relatedProductsGrid.innerHTML = '';

    // Get 3 random products (excluding current product)
    const productIds = Object.keys(products).filter(id => id !== productId);
    const shuffled = productIds.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffled.slice(0, 3);

    selectedProducts.forEach(productId => {
        const relatedProduct = products[productId];
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${relatedProduct.images[0]}" alt="${relatedProduct.title}" class="product-img-default">
                <img src="${relatedProduct.images[1] || relatedProduct.images[0]}" alt="${relatedProduct.title}" class="product-img-hover">
                ${relatedProduct.badge ? `<div class="product-badge ${relatedProduct.badgeClass}">${relatedProduct.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3>${relatedProduct.title}</h3>
                <p class="product-desc">${relatedProduct.description.substring(0, 50)}...</p>
                <div class="product-rating">
                    <div class="stars">${generateStars(relatedProduct.rating)}</div>
                    <span class="rating-count">(${relatedProduct.reviewCount})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">${relatedProduct.price}</span>
                    <span class="original-price">${relatedProduct.originalPrice}</span>
                    <span class="discount">${relatedProduct.discount}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart('${relatedProduct.id}')">Add to Cart</button>
            </div>
        `;
        relatedProductsGrid.appendChild(productCard);
    });
}

// Generate stars HTML
function generateStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    return starsHTML;
}

// Quantity controls
let quantity = 1;
const quantityInput = document.getElementById('quantity');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');

qtyMinus.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
    }
});

qtyPlus.addEventListener('click', () => {
    if (quantity < 99) {
        quantity++;
        quantityInput.value = quantity;
    }
});

quantityInput.addEventListener('change', (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 99) {
        quantity = value;
    } else {
        e.target.value = quantity;
    }
});

// Add to cart functionality
function addToCart(productIdToAdd = null) {
    const currentProductId = productIdToAdd || productId;
    const currentProduct = products[currentProductId];
    
    // Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === currentProductId);
    
    if (existingItem) {
        // Update quantity if product exists
        existingItem.quantity += quantity;
    } else {
        // Add new product to cart
        const cartItem = {
            id: currentProductId,
            name: currentProduct.title,
            price: currentProduct.price,
            quantity: quantity,
            image: currentProduct.images[0]
        };
        cart.push(cartItem);
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show success message
    showNotification('Product added to cart successfully!');
    
    // Update cart count
    updateCartCount();
    
    // Reset quantity
    if (!productIdToAdd) {
        quantity = 1;
        quantityInput.value = 1;
    }
}

// Buy now functionality
document.getElementById('buy-now-btn').addEventListener('click', () => {
    addToCart();
    if (typeof window.openCartDrawer === 'function') {
        window.openCartDrawer();
    }
});

// Add to cart button event listener
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    addToCart();
});

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #27ae60, #2ecc71);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 8px 25px rgba(39, 174, 96, 0.3);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(400px);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElements = document.querySelectorAll('#cart-count, #mobile-cart-count');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        element.style.display = totalItems > 0 ? 'block' : 'none';
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadProductData();
    updateCartCount();
});

// Mobile menu toggle (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }
});

