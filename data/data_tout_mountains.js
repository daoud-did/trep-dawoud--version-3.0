const MOUNTAINS = [
    { id: 1, name: "إيفرست", height: 8849, region: "نيبال", description: "أعلى جبل في العالم", image: "./images/dawoud.jpg" },
    { id: 2, name: "كي 2", height: 8611, region: "باكستان", description: "ثاني أعلى جبل", image: "./images/dawoud.jpg" },
    { id: 3, name: "كانغشينجونغا", height: 8586, region: "نيبال", description: "ثالث أعلى جبل", image: "./images/dawoud.jpg" },
    { id: 4, name: "لهوتسه", height: 8516, region: "نيبال", description: "رابع أعلى جبل", image: "./images/dawoud.jpg" },
    { id: 5, name: "ماكالو", height: 8485, region: "نيبال", description: "خامس أعلى جبل", image: "./images/dawoud.jpg" },
    { id: 6, name: "تشو أويو", height: 8188, region: "نيبال", description: "جبل جميل", image: "./images/dawoud.jpg" },
    { id: 7, name: "ضاولاغيري", height: 8167, region: "نيبال", description: "جبل مثير", image: "./images/dawoud.jpg" },
    { id: 8, name: "مانسالو", height: 8163, region: "نيبال", description: "جبل طويل", image: "./images/dawoud.jpg" },
    { id: 9, name: "نانغا بربات", height: 8126, region: "باكستان", description: "جبل خطر", image: "./images/dawoud.jpg" },
    { id: 10, name: "بروادبيك", height: 8051, region: "باكستان", description: "جبل واسع", image: "./images/dawoud.jpg" },
    { id: 11, name: "جبل مونت بلان", height: 4808, region: "فرنسا", description: "أعلى جبل الألب", image: "./images/dawoud.jpg" },
    { id: 12, name: "جبل ماتيرهورن", height: 4478, region: "سويسرا", description: "جبل أيقوني", image: "./images/dawoud.jpg" },
    { id: 13, name: "جبل إلبروس", height: 5642, region: "روسيا", description: "أعلى جبل أوروبا", image: "./images/dawoud.jpg" },
    { id: 14, name: "جبل كليمنجارو", height: 5895, region: "تنزانيا", description: "أعلى جبل أفريقيا", image: "./images/dawoud.jpg" },
    { id: 15, name: "جبل وادنجتون", height: 4016, region: "كندا", description: "جبل صعب", image: "./images/dawoud.jpg" },
    { id: 16, name: "جبل الدينالي", height: 6190, region: "الولايات المتحدة", description: "أعلى أمريكا الشمالية", image: "./images/dawoud.jpg" },
    { id: 17, name: "جبل تشيمبورازو", height: 6263, region: "الإكوادور", description: "جبل عالي", image: "./images/dawoud.jpg" },
    { id: 18, name: "جبل أكونكاجوا", height: 6961, region: "الأرجنتين", description: "أعلى أمريكا الجنوبية", image: "./images/dawoud.jpg" },
    { id: 19, name: "جبل كوتوباكسي", height: 5897, region: "الإكوادور", description: "بركان نشط", image: "./images/dawoud.jpg" },
    { id: 20, name: "جبل ويليم", height: 4509, region: "بابوا غينيا", description: "أعلى أوقيانوسيا", image: "./images/dawoud.jpg" }
];

// Add 280 more mountains
for (let i = 21; i <= 300; i++) {
    const regions = ["الصين", "الهند", "الجزائر", "تركيا", "مصر", "السودان", "إثيوبيا", "كينيا", "تشيلي", "بيرو", "النمسا", "تشيك", "بولندا", "نيوزيلندا", "أستراليا"];
    const region = regions[Math.floor(Math.random() * regions.length)];
    const height = Math.floor(Math.random() * 6000) + 2000;

    MOUNTAINS.push({
        id: i,
        name: `جبل ${i}`,
        height: height,
        region: region,
        description: `جبل جميل يقع في ${region} بارتفاع ${height} متر`,
        image: "./images/dawoud.jpg"
    });
}

// Add 50 Moroccan Mountains
const moroccanNames = [
    "جبل توبقال", "جبل وازن", "جبل موسى", "جبل بنات إفران", "جبل اودي زيور",
    "جبل تسكاويت", "جبل أياشي", "جبل سارو", "جبل صاغرو", "جبل زاغ",
    "جبل أتلاس الكبير", "جبل الأوسط", "جبل تازة", "جبل الحبيب", "جبل القصبة",
    "جبل الزيتون", "جبل الورد", "جبل النجم", "جبل الرؤية", "جبل الصفاء",
    "جبل الأصالة", "جبل الحرية", "جبل العزة", "جبل الشموخ", "جبل الشرق",
    "جبل الغرب", "جبل الشمال", "جبل الجنوب", "جبل الفجر", "جبل الغروب",
    "جبل الرياح", "جبل الهواء", "جبل الماء", "جبل النار", "جبل الأرض",
    "جبل السماء", "جبل الحياة", "جبل الموت", "جبل الحب", "جبل الحزن",
    "جبل الفرح", "جبل الأمل", "جبل الخيبة", "جبل النصر", "جبل الهزيمة",
    "جبل السلام", "جبل الحرب", "جبل الشرف", "جبل العار", "جبل الكرم"
];

for (let i = 0; i < 50; i++) {
    MOUNTAINS.push({
        id: 301 + i,
        name: moroccanNames[i],
        height: Math.floor(Math.random() * 3000) + 1500,
        region: "المغرب",
        description: `جبل مغربي جميل يقع في سلسلة جبال الأطلس`,
        image: "./images/dawoud.jpg"
    });
}
