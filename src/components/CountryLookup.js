"use client";

import React, { useEffect, useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState("United States");
  useEffect(function () {
    const fetchIpdata = async function () {
      const response = await fetch("http://ip-api.com/json");
      const countryData = await response.json();
      setCountry(countryData.country);
    };
    fetchIpdata();
  }, []);
  return <div>{country}</div>;
}

export default CountryLookup;
