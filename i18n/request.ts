import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fa", "ar"] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const requested = cookieStore.get("fonitas-locale")?.value as Locale | undefined;
  const locale = requested && locales.includes(requested) ? requested : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
