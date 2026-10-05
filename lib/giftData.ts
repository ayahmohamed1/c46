// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Jessica",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `Hey Love 

It's hard for me to express my feelings out and in a text message so i will try as much as i can 
Just wanted you to know that ur the best thing that happened to me in my life and i won't ever let you go 
you brought so much joy , passion , love , funny and unforgettable moments to me that i won't ever forget and hopefully one day we can talk about it all when we are older together 
your smile , your laugh , your eyes and everything about you just changed everything in my life and i will always be grateful to you for that 
you're the most prettiest and attractive person i ever saw in my eyes and i will keep you forever and still annoy you also so you don't forget that 
So Happy 21 Birthday to my Girl and for more and more to come while we are together happy and exploring everything in life 

I Love youuu ♥️♥️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;