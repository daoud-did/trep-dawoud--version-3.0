/**
 * TREP DAWOUD - Blog Posts Data
 * بيانات مقالات المدونة لنظام TREP DAWOUD
 */

const BLOG_POSTS = [
    {
        id: 1,
        title: "دليل المبتدئين لتسلق الجبال الآمن",
        image: "assets/images/dawoud.jpg",
        excerpt: "تعلم أساسيات تسلق الجبال بأمان مع نصائح من خبراء التسلق...",
        content: "تسلق الجبال هو رياضة مثيرة ولكنها تحتاج إلى تحضير جيد. في هذا الدليل سنغطي كل ما يحتاجه المبتدئ...",
        author: "داوود",
        date: "2024-01-15",
        readTime: "5 دقائق",
        category: "دليل",
        tags: ["مبتدئين", "أمان", "تسلق"],
        featured: true
    },
    {
        id: 2,
        title: "أفضل المعدات لتسلق الجبال في 2024",
        image: "assets/images/dawoud.jpg",
        excerpt: "مراجعة شاملة لأحدث المعدات والأدوات المطلوبة لتسلق الجبال...",
        content: "اختيار المعدات المناسبة هو مفتاح النجاح في رحلات التسلق. سنراجع أفضل الحقائب والأحذية...",
        author: "داوود",
        date: "2024-01-10",
        readTime: "8 دقائق",
        category: "معدات",
        tags: ["معدات", "تسلق", "2024"],
        featured: false
    },
    {
        id: 3,
        title: "رحلة إلى قمة جبل توبقال",
        image: "assets/images/dawoud.jpg",
        excerpt: "قصة رحلة مثيرة إلى أعلى قمة في المغرب العربي...",
        content: "جبل توبقال هو تحدي كبير لكل متسلق. في هذه الرحلة واجهنا تحديات عديدة...",
        author: "داوود",
        date: "2024-01-05",
        readTime: "12 دقيقة",
        category: "رحلات",
        tags: ["توبقال", "مغرب", "قمة"],
        featured: true
    },
    {
        id: 4,
        title: "تدريب بدني لتسلق الجبال",
        image: "assets/images/dawoud.jpg",
        excerpt: "برنامج تدريب شامل لتحضير الجسم لتحديات التسلق...",
        content: "التدريب البدني هو أساس نجاح أي رحلة تسلق. سنقدم برنامج تدريبي متكامل...",
        author: "داوود",
        date: "2024-01-01",
        readTime: "10 دقائق",
        category: "تدريب",
        tags: ["تدريب", "بدني", "لياقة"],
        featured: false
    },
    {
        id: 5,
        title: "نصائح للتخييم في الجبال",
        image: "assets/images/dawoud.jpg",
        excerpt: "كيفية اختيار موقع التخييم وإعداد المخيم بأمان...",
        content: "التخييم في الجبال يتطلب خبرة وتحضيراً. تعلم كيفية اختيار الموقع المناسب...",
        author: "داوود",
        date: "2023-12-28",
        readTime: "7 دقائق",
        category: "تخييم",
        tags: ["تخييم", "أمان", "جبل"],
        featured: false
    },
    {
        id: 6,
        title: "أجمل الجبال حول العالم",
        image: "assets/images/dawoud.jpg",
        excerpt: "جولة افتراضية في أجمل الجبال وأكثرها تحدياً...",
        content: "من جبال الألب إلى جبال الهيمالايا، سنستعرض أجمل الجبال في العالم...",
        author: "داوود",
        date: "2023-12-25",
        readTime: "15 دقيقة",
        category: "عالمي",
        tags: ["جبال", "عالم", "سياحة"],
        featured: true
    }
];

// تصدير البيانات للاستخدام في الوحدات الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BLOG_POSTS;
}
