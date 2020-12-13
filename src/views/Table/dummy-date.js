const dummyData = [
    {
      uuid: "64dd29e9-0fd8-4462-8575-5ef344c5aa3b",
      title: "Chief Group Liaison",
      phoneNumber: "488.973.8721 x524",
      address: "53372 Jakubowski Street",
      city: "Titohaven",
      country: "Cambodia",
      createdAt: new Intl.DateTimeFormat('en-US').format(1607801809040),
    },
    {
      uuid: "8338575a-7f47-4c46-a9ee-d3182f2697a6",
      title: "District Accountability Agent",
      phoneNumber: "255.451.6106",
      address: "59628 Linnie Mall",
      city: "East Fiona",
      country: "Niger",
      createdAt: new Intl.DateTimeFormat('en-US').format(1607801809040),
    },
    {
      uuid: "39d0e82b-2ba9-4d63-b050-692e608c4e9c",
      title: "Dynamic Brand Coordinator",
      phoneNumber: "216-234-8706 x581",
      address: "866 Kim Rue",
      city: "Hudsonchester",
      country: "Central African Republic",
      createdAt: 1607802018987
    },
    {
      uuid: "c19daae7-ad15-4892-aff8-570ef5f72120",
      title: "Regional Assurance Director",
      phoneNumber: "480-875-0944",
      address: "6627 Destany Estates",
      city: "New Roscoe",
      country: "Barbados",
      createdAt: 1607793024467
    },
    {
      uuid: "3b80c2e1-1305-400c-90d8-7d627e8e468f",
      title: "Legacy Group Technician",
      phoneNumber: "754-373-4035 x1956",
      address: "35184 Ryan Plains",
      city: "East Rooseveltfurt",
      country: "Bosnia and Herzegovina",
      createdAt: 1607827756535
    },
    {
      uuid: "b50c9553-4ea1-4f92-b2b1-97c3ad3d5f65",
      title: "Global Integration Liaison",
      phoneNumber: "318.514.4647",
      address: "95693 Maggio Extensions",
      city: "New Oscarberg",
      country: "Micronesia",
      createdAt: 1607784004657
    },
    {
      uuid: "03c94273-1bb2-4722-a2b2-f3b7db76652e",
      title: "Future Research Facilitator",
      phoneNumber: "917.297.2646",
      address: "8905 Ferry River",
      city: "Lefflermouth",
      country: "Seychelles",
      createdAt: 1607831972436
    },
    {
      uuid: "9ed8804e-2215-4179-8dc7-b84f209c729b",
      title: "National Applications Director",
      phoneNumber: "1-295-602-8931 x62533",
      address: "9261 Nick Summit",
      city: "New Tonifurt",
      country: "Azerbaijan",
      createdAt: 1607794923960
    },
    {
      uuid: "5aa1a599-c2fc-4b1c-88cd-ff8231f2c161",
      title: "Product Mobility Supervisor",
      phoneNumber: "1-684-331-4464",
      address: "04547 Bogan Burgs",
      city: "South Ulisesmouth",
      country: "New Zealand",
      createdAt: 1607752649251
    },
    {
      uuid: "656676fa-4a1f-4634-8c62-83395c91352a",
      title: "Investor Integration Planner",
      phoneNumber: "342-715-2466",
      address: "08953 Ron Loop",
      city: "Kyleeton",
      country: "Antigua and Barbuda",
      createdAt: 1607760709022
    },
    {
      uuid: "ac5eff73-e983-4efb-8a34-eb9c4c3e0fc8",
      title: "Internal Accounts Facilitator",
      phoneNumber: "896.319.2154",
      address: "69277 Prosacco Key",
      city: "Rayburgh",
      country: "Guam",
      createdAt: 1607900698645
    },
    {
      uuid: "5bdabfd5-e23a-4261-99a0-6c9b3e1a6186",
      title: "Future Metrics Manager",
      phoneNumber: "1-940-631-3049 x434",
      address: "22441 Bogisich Burg",
      city: "Hayleyville",
      country: "Nigeria",
      createdAt: 1607874032330
    },
    {
      uuid: "3a150c53-e299-41e2-8684-70c30131faaf",
      title: "Central Division Director",
      phoneNumber: "(731) 551-5211 x87443",
      address: "519 Donato Garden",
      city: "South Freeda",
      country: "Benin",
      createdAt: 1607911691022
    },
    {
      uuid: "32204124-b2ce-45ec-90a6-de7f259cdc16",
      title: "Dynamic Integration Assistant",
      phoneNumber: "847.874.1507",
      address: "43689 Eriberto Stream",
      city: "South Zachariahberg",
      country: "Niue",
      createdAt: 1607864590146
    },
    {
      uuid: "afe39a64-5ec0-4fd3-bedd-2f443749885b",
      title: "Forward Mobility Facilitator",
      phoneNumber: "(965) 529-7678 x79850",
      address: "7239 Zboncak Viaduct",
      city: "Port Edwinton",
      country: "Azerbaijan",
      createdAt: 1607880776060
    },
    {
      uuid: "ff827977-065b-4528-8b10-fac6362acd2e",
      title: "Human Group Analyst",
      phoneNumber: "668-665-4488",
      address: "36396 Medhurst Ridges",
      city: "Bergnaumfurt",
      country: "Botswana",
      createdAt: 1607902216100
    },
    {
      uuid: "ec1b8432-94b4-4e35-9bd9-145422e7ec84",
      title: "Forward Assurance Architect",
      phoneNumber: "1-784-999-1841",
      address: "80512 Welch Station",
      city: "Kuhicmouth",
      country: "South Africa",
      createdAt: 1607849980741
    },
    {
      uuid: "d78da6ce-f0e7-4a20-89e3-453ea59fad4b",
      title: "Regional Applications Manager",
      phoneNumber: "(461) 779-4620 x2162",
      address: "91406 Powlowski Loaf",
      city: "Brooklynton",
      country: "Northern Mariana Islands",
      createdAt: 1607870695192
    },
    {
      uuid: "b3bb52ce-c9b4-47e2-8027-07d3f04071eb",
      title: "International Factors Representative",
      phoneNumber: "(338) 938-8630 x7817",
      address: "17463 Crist Locks",
      city: "Port Stacy",
      country: "Kiribati",
      createdAt: 1607893452249
    },
    {
      uuid: "2aa08448-80ef-438d-952d-7f3bd1b9f5a7",
      title: "International Tactics Officer",
      phoneNumber: "(741) 948-8225 x653",
      address: "773 Hills Crest",
      city: "South Summermouth",
      country: "Oman",
      createdAt: 1607844870424
    }
  ];
  
  export default dummyData;
  