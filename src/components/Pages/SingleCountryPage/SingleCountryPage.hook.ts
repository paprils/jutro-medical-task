import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { country } from "@/interfaces/country";

const useSingleCountryPage = (data: country[]) => {
  const router = useRouter();
  const [activeCountry, setActiveCountry] = useState<country>({
    name: "",
    code: "",
    emoji: "",
    languages: [],
  });

  useEffect(() => {
    const innerCountry: country = data.find(
      (e) => e.code === router.query.code
    )!;
    setActiveCountry(innerCountry);
  }, [router, data]);

  return { activeCountry };
};

export default useSingleCountryPage;
