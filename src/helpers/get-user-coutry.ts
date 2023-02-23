import { countries, timezones } from "@/constants/countries-and-timezones";

let userCountry: string | null = null;

const findUserCountry = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (timezone === "" || !timezone) {
    return null;
  }

  // @ts-ignore
  const _country = timezones[timezone].c[0];
  // @ts-ignore
  const country = countries[_country];

  userCountry = country;
};

export { userCountry, findUserCountry };
