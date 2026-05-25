import { getTranslations } from "next-intl/server";
import ShopPhoto from "./ShopPhoto";

export default async function CompanyStrengths() {
  const t = await getTranslations("CompanyStrengths");

  const strengths = [t("strength1"), t("strength2"), t("strength3"), t("strength4"), t("strength5")];
  const industries = [t("industry1"), t("industry2"), t("industry3"), t("industry4"), t("industry5")];

  return (
    <section className="bg-[#dedede] py-8">
      <div className="mx-auto grid max-w-[1060px] gap-8 px-4 md:grid-cols-[390px_1fr] md:items-center">
        <ShopPhoto className="w-full" />
        <div className="grid gap-8 text-[18px] font-medium leading-[1.35] md:grid-cols-[1fr_300px] md:items-end">
          <div>
            <h2 className="font-black">{t("title")}</h2>
            {strengths.map((item) => (
              <p key={item}>•{item}</p>
            ))}
          </div>
          <div className="relative pl-2">
            <h2 className="font-black">{t("industriesTitle")}</h2>
            {industries.map((item) => (
              <p key={item}>•{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
