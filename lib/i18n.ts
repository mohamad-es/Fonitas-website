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
    "Product owners":"صاحبان اپلیکیشن","Investors":"سرمایه‌گذاران","About":"درباره ما","Contact":"تماس با ما","Sign in":"ورود","Create account":"ایجاد حساب",
    "For investors":"برای سرمایه‌گذاران","Investment opportunities":"فرصت‌های سرمایه‌گذاری","Application":"اپلیکیشن","Investment":"سرمایه‌گذاری","Capital":"سرمایه","Growth":"رشد","Revenue":"درآمد","Product":"محصول",
    "I have an application.":"من یک اپلیکیشن دارم.","I'm an investor.":"من سرمایه‌گذار هستم.","Explore Fonitas":"آشنایی با Fonitas","Explore opportunities":"مشاهده فرصت‌ها","One ecosystem. Two paths.":"یک اکوسیستم، دو مسیر.",
    "How investing works":"فرآیند سرمایه‌گذاری","From discovery to investment.":"از کشف فرصت تا سرمایه‌گذاری.","Discover":"کشف فرصت","Evaluate":"ارزیابی","Invest":"سرمایه‌گذاری","Grow":"رشد","Settlement":"تسویه",
    "Selected applications":"اپلیکیشن‌های منتخب","Featured opportunity":"فرصت منتخب","What Fonitas looks for":"Fonitas به دنبال چیست؟","Selection is part of the value.":"انتخاب دقیق، بخشی از ارزش Fonitas است.",
    "Ready to explore?":"آماده بررسی هستید؟","Request investment information":"دریافت اطلاعات سرمایه‌گذاری","Investment network":"شبکه سرمایه‌گذاری",
    "Bring your application from build to growth.":"اپلیکیشن خود را از ساخت تا رشد همراه کنید.","Application publishing, growth & investment":"انتشار، رشد و سرمایه‌گذاری برای اپلیکیشن‌ها",
    "From application to market.":"از اپلیکیشن تا بازار.","More than publishing.":"بیش از انتشار.","Publishing":"انتشار","Operate":"مدیریت","Publish":"انتشار","QA":"کنترل کیفیت",
    "Your application. Our publishing workflow.":"اپلیکیشن شما؛ فرآیند انتشار ما.","Talk to Fonitas":"با Fonitas گفتگو کنید","Start a conversation":"شروع گفتگو",
    "Welcome back":"خوش آمدید","Access your applications, publishing workflow, and collaboration activity.":"به اپلیکیشن‌ها، فرآیند انتشار و فعالیت‌های همکاری خود دسترسی پیدا کنید.",
    "Authentication is currently a front-end prototype. Backend account access will be connected in a later phase.":"احراز هویت در حال حاضر یک نمونه اولیه فرانت‌اند است. دسترسی حساب کاربری در مرحله بعد به بک‌اند متصل خواهد شد.",
    "Email":"ایمیل","Password":"رمز عبور","Remember me":"مرا به خاطر بسپار","Forgot password?":"رمز عبور را فراموش کرده‌اید؟","Don't have an account?":"حساب کاربری ندارید؟","Create one":"ایجاد حساب",
    "Get started":"شروع کنید","Create your account to manage applications and collaborate with the Fonitas publishing workflow.":"حساب خود را ایجاد کنید تا اپلیکیشن‌ها را مدیریت کرده و با فرآیند انتشار Fonitas همکاری کنید.",
    "Full name":"نام و نام خانوادگی","Work email":"ایمیل کاری","Confirm password":"تکرار رمز عبور","I agree to the terms and acknowledge the Fonitas publishing workflow.":"با شرایط موافقم و فرآیند انتشار Fonitas را می‌پذیرم.",
    "Already have an account?":"قبلاً حساب دارید؟","Read article":"خواندن مقاله","Read more":"ادامه مطلب","Latest notes":"آخرین مطالب","The publishing desk.":"یادداشت‌های انتشار.","Insights":"بینش‌ها",
    "Ideas around":"ایده‌هایی درباره","the release.":"فرآیند انتشار.","Publishing intelligence":"هوشمندی انتشار","From release preparation to financial close.":"از آماده‌سازی انتشار تا تسویه مالی.",
    "Back to insights":"بازگشت به بینش‌ها","Written by":"نوشته‌شده توسط","Next conversation":"گفتگوی بعدی","Ready to move an application to market?":"آماده‌اید اپلیکیشن را به بازار برسانید؟",
    "How it works":"چگونه کار می‌کند","Pricing":"قیمت‌گذاری","FAQ":"سؤالات متداول","Capabilities":"قابلیت‌ها","Financial close":"تسویه مالی","Publishing models":"مدل‌های انتشار",
    "Application / Product":"اپلیکیشن / محصول","Investment / Capital":"سرمایه‌گذاری / سرمایه","Growth / Revenue":"رشد / درآمد","Evaluated":"ارزیابی‌شده","Opportunity":"فرصت","Potential":"پتانسیل",
    "Fonitas investment":"سرمایه‌گذاری Fonitas","Explore opportunity":"مشاهده فرصت","View investment opportunity":"مشاهده فرصت سرمایه‌گذاری",
    "Opportunities":"فرصت‌ها","All":"همه","All stages":"همه مراحل","Showing":"نمایش","opportunities":"فرصت","What Fonitas looks for":"Fonitas چه چیزی را بررسی می‌کند؟",
    "Product":"محصول","Market":"بازار","Traction":"کشش بازار","Team":"تیم","Business model":"مدل کسب‌وکار","Growth potential":"پتانسیل رشد",
    "Request investment information":"دریافت اطلاعات سرمایه‌گذاری","Investment thesis":"منطق سرمایه‌گذاری","Due diligence":"بررسی دقیق","Verified":"تأییدشده",
    "Investment terms":"شرایط سرمایه‌گذاری","Risks & considerations":"ریسک‌ها و ملاحظات","Target raise":"سرمایه هدف","Minimum investment":"حداقل سرمایه‌گذاری",
    "Valuation":"ارزش‌گذاری","Instrument":"نوع سرمایه‌گذاری","Round status":"وضعیت دور سرمایه‌گذاری","Use of funds":"نحوه استفاده از سرمایه",
    "Problem":"مسئله","Solution":"راهکار","Target market":"بازار هدف","Why now":"چرا اکنون؟","Traction & financials":"کشش بازار و مالی",
    "Annualized revenue":"درآمد سالانه‌شده","Gross margin":"حاشیه سود ناخالص","Risks":"ریسک‌ها","Diligence":"بررسی دقیق",
    "Application publishing":"انتشار اپلیکیشن","Growth":"رشد","Revenue":"درآمد","Settlement":"تسویه"
  },
  ar: {
    "Product owners":"أصحاب التطبيقات","Investors":"المستثمرون","About":"من نحن","Contact":"اتصل بنا","Sign in":"تسجيل الدخول","Create account":"إنشاء حساب",
    "For investors":"للمستثمرين","Investment opportunities":"فرص الاستثمار","Application":"التطبيق","Investment":"الاستثمار","Capital":"رأس المال","Growth":"النمو","Revenue":"الإيرادات","Product":"المنتج",
    "I have an application.":"لدي تطبيق.","I'm an investor.":"أنا مستثمر.","Explore Fonitas":"اكتشف Fonitas","Explore opportunities":"استكشف الفرص","One ecosystem. Two paths.":"منظومة واحدة، مساران.",
    "How investing works":"كيف يعمل الاستثمار","From discovery to investment.":"من اكتشاف الفرصة إلى الاستثمار.","Discover":"اكتشاف","Evaluate":"تقييم","Invest":"استثمار","Grow":"نمو","Settlement":"تسوية",
    "Selected applications":"التطبيقات المختارة","Featured opportunity":"الفرصة المميزة","What Fonitas looks for":"ما الذي تبحث عنه Fonitas؟","Selection is part of the value.":"الاختيار جزء من القيمة.",
    "Ready to explore?":"هل أنت مستعد للاستكشاف؟","Request investment information":"طلب معلومات الاستثمار","Investment network":"شبكة الاستثمار",
    "Bring your application from build to growth.":"انقل تطبيقك من البناء إلى النمو.","Application publishing, growth & investment":"نشر التطبيقات والنمو والاستثمار",
    "From application to market.":"من التطبيق إلى السوق.","More than publishing.":"أكثر من مجرد نشر.","Publishing":"النشر","Operate":"التشغيل","Publish":"النشر","QA":"ضمان الجودة",
    "Your application. Our publishing workflow.":"تطبيقك، ومسار النشر لدينا.","Talk to Fonitas":"تحدث مع Fonitas","Start a conversation":"ابدأ محادثة",
    "Welcome back":"مرحباً بعودتك","Access your applications, publishing workflow, and collaboration activity.":"الوصول إلى تطبيقاتك ومسار النشر وأنشطة التعاون الخاصة بك.",
    "Authentication is currently a front-end prototype. Backend account access will be connected in a later phase.":"المصادقة حالياً نموذج أولي للواجهة الأمامية. سيتم ربط الوصول إلى الحساب بالخلفية في مرحلة لاحقة.",
    "Email":"البريد الإلكتروني","Password":"كلمة المرور","Remember me":"تذكرني","Forgot password?":"هل نسيت كلمة المرور؟","Don't have an account?":"ليس لديك حساب؟","Create one":"أنشئ حساباً",
    "Get started":"ابدأ الآن","Create your account to manage applications and collaborate with the Fonitas publishing workflow.":"أنشئ حسابك لإدارة التطبيقات والتعاون مع مسار النشر في Fonitas.",
    "Full name":"الاسم الكامل","Work email":"بريد العمل","Confirm password":"تأكيد كلمة المرور","I agree to the terms and acknowledge the Fonitas publishing workflow.":"أوافق على الشروط وأقر بمسار النشر في Fonitas.",
    "Already have an account?":"لديك حساب بالفعل؟","Read article":"اقرأ المقال","Read more":"اقرأ المزيد","Latest notes":"أحدث المقالات","The publishing desk.":"مكتب النشر.","Insights":"رؤى",
    "Ideas around":"أفكار حول","the release.":"الإطلاق.","Publishing intelligence":"ذكاء النشر","From release preparation to financial close.":"من تجهيز الإطلاق إلى التسوية المالية.",
    "Back to insights":"العودة إلى الرؤى","Written by":"بقلم","Next conversation":"المحادثة التالية","Ready to move an application to market?":"هل أنت مستعد لنقل التطبيق إلى السوق؟",
    "How it works":"كيف يعمل","Pricing":"الأسعار","FAQ":"الأسئلة الشائعة","Capabilities":"الإمكانات","Financial close":"التسوية المالية","Publishing models":"نماذج النشر",
    "Application / Product":"التطبيق / المنتج","Investment / Capital":"الاستثمار / رأس المال","Growth / Revenue":"النمو / الإيرادات","Evaluated":"تم التقييم","Opportunity":"فرصة","Potential":"إمكانات",
    "Fonitas investment":"استثمار Fonitas","Explore opportunity":"استكشف الفرصة","View investment opportunity":"عرض فرصة الاستثمار",
    "Opportunities":"الفرص","All":"الكل","All stages":"جميع المراحل","Showing":"عرض","opportunities":"فرص","What Fonitas looks for":"ما الذي تبحث عنه Fonitas؟",
    "Market":"السوق","Traction":"الزخم","Team":"الفريق","Business model":"نموذج العمل","Growth potential":"إمكانات النمو",
    "Investment thesis":"أطروحة الاستثمار","Due diligence":"العناية الواجبة","Verified":"تم التحقق","Investment terms":"شروط الاستثمار","Risks & considerations":"المخاطر والاعتبارات",
    "Target raise":"التمويل المستهدف","Minimum investment":"الحد الأدنى للاستثمار","Valuation":"التقييم","Instrument":"أداة الاستثمار","Round status":"حالة الجولة","Use of funds":"استخدام الأموال",
    "Problem":"المشكلة","Solution":"الحل","Target market":"السوق المستهدف","Why now?":"لماذا الآن؟","Traction & financials":"الزخم والبيانات المالية",
    "Annualized revenue":"الإيرادات السنوية المقدرة","Gross margin":"الهامش الإجمالي","Risks":"المخاطر","Diligence":"العناية الواجبة","Application publishing":"نشر التطبيقات"
  }
};

export function translate(locale: Locale, value: string) {
  return translations[locale][value] ?? value;
}
