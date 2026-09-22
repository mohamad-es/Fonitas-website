export type Locale = "en" | "fa" | "ar";

export const locales: Locale[] = ["en", "fa", "ar"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
};

export const translations: Record<Locale, Record<string, string>> = {
  en: {},
  fa: {
    "Product owners":"صاحبان اپلیکیشن","Investors":"سرمایه‌گذاران","About":"درباره ما","Contact":"تماس با ما","Sign in":"ورود","Create account":"ایجاد حساب","For investors":"برای سرمایه‌گذاران","Investment opportunities":"فرصت‌های سرمایه‌گذاری","Application":"اپلیکیشن","Investment":"سرمایه‌گذاری","Capital":"سرمایه","Growth":"رشد","Revenue":"درآمد","Product":"محصول","I have an application.":"من یک اپلیکیشن دارم.","I'm an investor.":"من سرمایه‌گذار هستم.","Explore Fonitas":"آشنایی با Fonitas","Explore opportunities":"مشاهده فرصت‌ها","One ecosystem. Two paths.":"یک اکوسیستم، دو مسیر.","How investing works":"فرآیند سرمایه‌گذاری","From discovery to investment.":"از کشف فرصت تا سرمایه‌گذاری.","Discover":"کشف فرصت","Evaluate":"ارزیابی","Invest":"سرمایه‌گذاری","Grow":"رشد","Settlement":"تسویه","Selected applications":"اپلیکیشن‌های منتخب","Featured opportunity":"فرصت منتخب","What Fonitas looks for":"Fonitas به دنبال چیست؟","Selection is part of the value.":"انتخاب دقیق، بخشی از ارزش Fonitas است.","Ready to explore?":"آماده بررسی هستید؟","Request investment information":"دریافت اطلاعات سرمایه‌گذاری","Investment network":"شبکه سرمایه‌گذاری"
  },
  ar: {
    "Product owners":"أصحاب التطبيقات","Investors":"المستثمرون","About":"من نحن","Contact":"اتصل بنا","Sign in":"تسجيل الدخول","Create account":"إنشاء حساب","For investors":"للمستثمرين","Investment opportunities":"فرص الاستثمار","Application":"التطبيق","Investment":"الاستثمار","Capital":"رأس المال","Growth":"النمو","Revenue":"الإيرادات","Product":"المنتج","I have an application.":"لدي تطبيق.","I'm an investor.":"أنا مستثمر.","Explore Fonitas":"اكتشف Fonitas","Explore opportunities":"استكشف الفرص","One ecosystem. Two paths.":"منظومة واحدة، مساران.","How investing works":"كيف يعمل الاستثمار","From discovery to investment.":"من اكتشاف الفرصة إلى الاستثمار.","Discover":"اكتشاف","Evaluate":"تقييم","Invest":"استثمار","Grow":"نمو","Settlement":"تسوية","Selected applications":"التطبيقات المختارة","Featured opportunity":"الفرصة المميزة","What Fonitas looks for":"ما الذي تبحث عنه Fonitas؟","Selection is part of the value.":"الاختيار جزء من القيمة.","Ready to explore?":"هل أنت مستعد للاستكشاف؟","Request investment information":"طلب معلومات الاستثمار","Investment network":"شبكة الاستثمار"
  },
};

export function translate(locale: Locale, value: string) {
  return translations[locale][value] ?? value;
}
