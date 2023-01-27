import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER_DETAILS,
  GET_USERS_LIST,
  GET_USER_DETAILS,
  USER_LIST_SORT,
  GET_ALL_USER,
  SEARCH_USER,
} from "../Actions/actionType";
let Listing = [
  {
    _id: "63d280a266af5f4c56b788cb",
    age: 22,
    eyeColor: "green",
    name: "Battle Cote",
    gender: "male",
    company: "PHOTOBIN",
    email: "battlecote@photobin.com",
    phone: "+1 (894) 438-2502",
    address: "405 Schenck Street, Haring, Ohio, 1300",
  },
  {
    _id: "63d280a298f03fc1c2149c90",
    age: 21,
    eyeColor: "green",
    name: "Barr Sparks",
    gender: "male",
    company: "ORBAXTER",
    email: "barrsparks@orbaxter.com",
    phone: "+1 (875) 511-3378",
    address: "395 Commerce Street, Germanton, Washington, 6349",
  },
  {
    _id: "63d280a235bea46f6e2967d5",
    index: 429,
    age: 28,
    eyeColor: "brown",
    name: "Evangeline Doyle",
    gender: "female",
    company: "HARMONEY",
    email: "evangelinedoyle@harmoney.com",
    phone: "+1 (949) 438-2106",
    address: "142 Holmes Lane, Mayfair, Nebraska, 4640",
  },
  {
    _id: "63d280a26f369af47b79b43b",
    index: 430,
    age: 21,
    eyeColor: "blue",
    name: "Fox Delacruz",
    gender: "male",
    company: "PUSHCART",
    email: "foxdelacruz@pushcart.com",
    phone: "+1 (960) 512-2144",
    address: "490 Ferry Place, Ebro, Arizona, 3914",
  },
  {
    _id: "63d280a2879c6c1e71c5a94e",
    index: 431,
    age: 30,
    eyeColor: "brown",
    name: "Shepard Velazquez",
    gender: "male",
    company: "NAXDIS",
    email: "shepardvelazquez@naxdis.com",
    phone: "+1 (922) 555-3954",
    address: "287 Shale Street, Caroleen, Colorado, 7919",
  },
  {
    _id: "63d280a217ca993118cd4b60",
    index: 432,
    age: 31,
    eyeColor: "blue",
    name: "Adele Freeman",
    gender: "female",
    company: "REPETWIRE",
    email: "adelefreeman@repetwire.com",
    phone: "+1 (849) 515-3313",
    address: "927 Dictum Court, Bergoo, Northern Mariana Islands, 4908",
  },
  {
    _id: "63d280a26f2c31fea42aa5eb",
    index: 433,
    age: 25,
    eyeColor: "green",
    name: "Sadie Richardson",
    gender: "female",
    company: "PLASTO",
    email: "sadierichardson@plasto.com",
    phone: "+1 (849) 442-3360",
    address: "502 Franklin Avenue, Trinway, Oregon, 7875",
  },
  {
    _id: "63d280a20cbf2ca8bb1fa180",
    index: 434,
    age: 32,
    eyeColor: "brown",
    name: "Smith Acosta",
    gender: "male",
    company: "EGYPTO",
    email: "smithacosta@egypto.com",
    phone: "+1 (888) 420-2230",
    address: "226 Charles Place, Salvo, Alabama, 1416",
  },
  {
    _id: "63d280a26f03420c2463d159",
    index: 435,
    age: 33,
    eyeColor: "brown",
    name: "Elvira Beard",
    gender: "female",
    company: "TETRATREX",
    email: "elvirabeard@tetratrex.com",
    phone: "+1 (858) 508-3772",
    address: "956 Elm Place, Madrid, Mississippi, 7169",
  },
  {
    _id: "63d280a2a9213dfc9130a68d",
    index: 436,
    age: 27,
    eyeColor: "green",
    name: "Beulah Hamilton",
    gender: "female",
    company: "SLAX",
    email: "beulahhamilton@slax.com",
    phone: "+1 (843) 446-2488",
    address: "792 Hamilton Walk, Dodge, New Hampshire, 8769",
  },
  {
    _id: "63d280a212e114d0d6c33057",
    index: 437,
    age: 22,
    eyeColor: "brown",
    name: "Naomi Benson",
    gender: "female",
    company: "OMATOM",
    email: "naomibenson@omatom.com",
    phone: "+1 (846) 500-3264",
    address: "950 Plaza Street, Coyote, Pennsylvania, 8060",
  },
  {
    _id: "63d280a2411a9e182931baa1",
    index: 438,
    age: 29,
    eyeColor: "green",
    name: "Sheree Kim",
    gender: "female",
    company: "MAGMINA",
    email: "shereekim@magmina.com",
    phone: "+1 (918) 496-2739",
    address: "578 Franklin Street, Saddlebrooke, Louisiana, 3109",
  },
  {
    _id: "63d280a2a6b8c59e0e01ac70",
    index: 439,
    age: 39,
    eyeColor: "brown",
    name: "Miriam Mills",
    gender: "female",
    company: "QNEKT",
    email: "miriammills@qnekt.com",
    phone: "+1 (816) 588-3563",
    address: "466 Cranberry Street, Berlin, Kansas, 6377",
  },
  {
    _id: "63d280a2f8f1b89d56f04b4b",
    index: 440,
    age: 26,
    eyeColor: "brown",
    name: "Adams Downs",
    gender: "male",
    company: "TSUNAMIA",
    email: "adamsdowns@tsunamia.com",
    phone: "+1 (805) 462-3348",
    address: "201 Jaffray Street, Turpin, Arkansas, 2659",
  },
  {
    _id: "63d280a284bf01103f90de62",
    index: 441,
    age: 28,
    eyeColor: "blue",
    name: "John Munoz",
    gender: "female",
    company: "ZEROLOGY",
    email: "johnmunoz@zerology.com",
    phone: "+1 (865) 406-2779",
    address: "807 Hawthorne Street, Marysville, Virginia, 5026",
  },
  {
    _id: "63d280a253d5cee7812b0d17",
    index: 442,
    age: 27,
    eyeColor: "green",
    name: "Lila Medina",
    gender: "female",
    company: "KATAKANA",
    email: "lilamedina@katakana.com",
    phone: "+1 (995) 506-2916",
    address: "725 Eastern Parkway, Lafferty, Nevada, 5271",
  },
  {
    _id: "63d280a2e2468ba4a7671b69",
    index: 443,
    age: 23,
    eyeColor: "brown",
    name: "Fannie Daugherty",
    gender: "female",
    company: "ARTWORLDS",
    email: "fanniedaugherty@artworlds.com",
    phone: "+1 (819) 518-3084",
    address: "405 Llama Court, Volta, California, 5947",
  },
  {
    _id: "63d280a22b127c6cd6a7d46e",
    index: 444,
    age: 31,
    eyeColor: "brown",
    name: "Castaneda Lynn",
    gender: "male",
    company: "EYERIS",
    email: "castanedalynn@eyeris.com",
    phone: "+1 (952) 498-3470",
    address: "850 Clymer Street, Fostoria, Maryland, 9085",
  },
  {
    _id: "63d280a25c8a9785cdfdb0bd",
    index: 445,
    age: 37,
    eyeColor: "green",
    name: "Riggs Terrell",
    gender: "male",
    company: "GAPTEC",
    email: "riggsterrell@gaptec.com",
    phone: "+1 (894) 441-2118",
    address: "178 Duryea Place, Gloucester, Utah, 6335",
  },
  {
    _id: "63d280a21e6da38fb0f72ff2",
    index: 446,
    age: 20,
    eyeColor: "green",
    name: "Browning Moore",
    gender: "male",
    company: "QUONK",
    email: "browningmoore@quonk.com",
    phone: "+1 (905) 485-3185",
    address: "617 Irving Avenue, Brady, Michigan, 8177",
  },
  {
    _id: "63d280a27a5f44d08401bafa",
    index: 447,
    age: 32,
    eyeColor: "blue",
    name: "Maureen Jordan",
    gender: "female",
    company: "PAPRICUT",
    email: "maureenjordan@papricut.com",
    phone: "+1 (823) 500-3189",
    address: "323 Hubbard Street, Libertytown, Marshall Islands, 8985",
  },
  {
    _id: "63d280a2199c01301856a4e7",
    index: 448,
    age: 20,
    eyeColor: "blue",
    name: "Hilary Mcfadden",
    gender: "female",
    company: "FURNITECH",
    email: "hilarymcfadden@furnitech.com",
    phone: "+1 (982) 583-2383",
    address: "695 Chester Street, Dunbar, Maine, 2345",
  },
  {
    _id: "63d280a2096fa903050795b7",
    index: 449,
    age: 21,
    eyeColor: "brown",
    name: "Tamara Robinson",
    gender: "female",
    company: "PLASMOS",
    email: "tamararobinson@plasmos.com",
    phone: "+1 (899) 474-3100",
    address: "945 Meadow Street, Worcester, Puerto Rico, 4610",
  },
  {
    _id: "63d280a2750eddf9dc4ecf20",
    index: 450,
    age: 31,
    eyeColor: "green",
    name: "Diane Roy",
    gender: "female",
    company: "ZAGGLES",
    email: "dianeroy@zaggles.com",
    phone: "+1 (864) 494-2618",
    address: "489 Ferris Street, Hobucken, Kentucky, 4548",
  },
  {
    _id: "63d280a23be664dc1322e59c",
    index: 451,
    age: 34,
    eyeColor: "green",
    name: "Randi Horn",
    gender: "female",
    company: "PROVIDCO",
    email: "randihorn@providco.com",
    phone: "+1 (912) 549-2308",
    address: "144 Varanda Place, Grimsley, Iowa, 2266",
  },
  {
    _id: "63d280a2de64d90807c2e245",
    index: 452,
    age: 37,
    eyeColor: "blue",
    name: "Nicholson Mcpherson",
    gender: "male",
    company: "DANCITY",
    email: "nicholsonmcpherson@dancity.com",
    phone: "+1 (944) 568-2959",
    address: "677 Woodrow Court, Coultervillle, New Jersey, 5875",
  },
  {
    _id: "63d280a2597e4a1605e99c1f",
    index: 453,
    age: 30,
    eyeColor: "blue",
    name: "Ramirez Dillard",
    gender: "male",
    company: "DOGNOSIS",
    email: "ramirezdillard@dognosis.com",
    phone: "+1 (909) 464-3132",
    address: "201 Amber Street, Gouglersville, Idaho, 6217",
  },
  {
    _id: "63d280a20ad0ba91e8741719",
    index: 454,
    age: 21,
    eyeColor: "brown",
    name: "Spencer Moss",
    gender: "male",
    company: "BILLMED",
    email: "spencermoss@billmed.com",
    phone: "+1 (883) 486-3887",
    address: "619 Debevoise Street, Fivepointville, Palau, 2244",
  },
  {
    _id: "63d280a2f801e447de96d4c5",
    index: 455,
    age: 36,
    eyeColor: "brown",
    name: "Moreno Welch",
    gender: "male",
    company: "VENOFLEX",
    email: "morenowelch@venoflex.com",
    phone: "+1 (954) 591-3707",
    address: "476 Forrest Street, Clarksburg, Indiana, 4941",
  },
  {
    _id: "63d280a2825292e38318c500",
    index: 456,
    age: 31,
    eyeColor: "brown",
    name: "Fischer Yates",
    gender: "male",
    company: "SUNCLIPSE",
    email: "fischeryates@sunclipse.com",
    phone: "+1 (886) 593-3910",
    address: "769 Grafton Street, Kenmar, Georgia, 7795",
  },
  {
    _id: "63d280a28c73ba2801546391",
    index: 457,
    age: 38,
    eyeColor: "green",
    name: "Theresa Morrow",
    gender: "female",
    company: "KIGGLE",
    email: "theresamorrow@kiggle.com",
    phone: "+1 (977) 526-2303",
    address: "156 Lancaster Avenue, Lithium, Hawaii, 1766",
  },
  {
    _id: "63d280a2ff603f3890c7575e",
    index: 458,
    age: 25,
    eyeColor: "blue",
    name: "Hickman Rollins",
    gender: "male",
    company: "POOCHIES",
    email: "hickmanrollins@poochies.com",
    phone: "+1 (868) 558-2051",
    address: "102 Mill Avenue, Loma, Virgin Islands, 8953",
  },
  {
    _id: "63d280a281bfadb8999bffd9",
    index: 459,
    age: 25,
    eyeColor: "green",
    name: "Logan Berg",
    gender: "male",
    company: "SPEEDBOLT",
    email: "loganberg@speedbolt.com",
    phone: "+1 (829) 597-3548",
    address: "173 Waldorf Court, Sunnyside, Rhode Island, 1379",
  },
  {
    _id: "63d280a2e300776d2304ac5e",
    index: 460,
    age: 28,
    eyeColor: "blue",
    name: "Perez Rhodes",
    gender: "male",
    company: "LIQUIDOC",
    email: "perezrhodes@liquidoc.com",
    phone: "+1 (896) 439-2852",
    address: "251 Kenilworth Place, Carlos, Oklahoma, 7889",
  },
  {
    _id: "63d280a2f2e3740ef49c1728",
    index: 461,
    age: 30,
    eyeColor: "green",
    name: "Sullivan Sampson",
    gender: "male",
    company: "DAIDO",
    email: "sullivansampson@daido.com",
    phone: "+1 (985) 412-2741",
    address: "716 Ross Street, Herlong, Wyoming, 6210",
  },
  {
    _id: "63d280a213d4a2cba42320c7",
    index: 462,
    age: 29,
    eyeColor: "brown",
    name: "Benita Lindsey",
    gender: "female",
    company: "EXTRO",
    email: "benitalindsey@extro.com",
    phone: "+1 (869) 491-3729",
    address: "573 Irving Place, Marion, Texas, 6160",
  },
  {
    _id: "63d280a2b141d3c69213c0f0",
    index: 463,
    age: 29,
    eyeColor: "green",
    name: "Lily Bishop",
    gender: "female",
    company: "BIFLEX",
    email: "lilybishop@biflex.com",
    phone: "+1 (807) 472-2039",
    address: "720 Meserole Street, Wollochet, Missouri, 9729",
  },
  {
    _id: "63d280a22b55517cd9c52944",
    index: 464,
    age: 24,
    eyeColor: "blue",
    name: "Hamilton Garrett",
    gender: "male",
    company: "IM",
    email: "hamiltongarrett@im",
    phone: "+1 (858) 460-2825",
    address: "121 Carroll Street, Frizzleburg, Ohio, 1741",
  },
  {
    _id: "63d280a25131e9489a0d8922",
    index: 465,
    age: 32,
    eyeColor: "brown",
    name: "Marcia Harrison",
    gender: "female",
    company: "EXOTERIC",
    email: "marciaharrison@exoteric.com",
    phone: "+1 (852) 588-2154",
    address: "753 Vista Place, Slovan, Washington, 1100",
  },
  {
    _id: "63d280a2952a30811fbe81c4",
    index: 466,
    age: 40,
    eyeColor: "brown",
    name: "Jacqueline Mclean",
    gender: "female",
    company: "KIDSTOCK",
    email: "jacquelinemclean@kidstock.com",
    phone: "+1 (928) 426-3587",
    address: "478 Kent Street, Roosevelt, Massachusetts, 4519",
  },
  {
    _id: "63d280a27394de2dd5035a46",
    index: 467,
    age: 24,
    eyeColor: "green",
    name: "Leblanc Fernandez",
    gender: "male",
    company: "ZAGGLE",
    email: "leblancfernandez@zaggle.com",
    phone: "+1 (803) 419-2435",
    address: "735 Cooke Court, Blodgett, New Mexico, 9438",
  },
  {
    _id: "63d280a2ff2fa5113db859e8",
    index: 468,
    age: 34,
    eyeColor: "green",
    name: "Holloway Ellison",
    gender: "male",
    company: "GUSHKOOL",
    email: "hollowayellison@gushkool.com",
    phone: "+1 (996) 495-3854",
    address: "465 Colonial Road, Umapine, Guam, 3931",
  },
  {
    _id: "63d280a25692023126d524fd",
    index: 469,
    age: 36,
    eyeColor: "blue",
    name: "Vargas Wilkerson",
    gender: "male",
    company: "QUIZMO",
    email: "vargaswilkerson@quizmo.com",
    phone: "+1 (977) 490-2840",
    address: "971 Mill Road, Bangor, Florida, 1858",
  },
  {
    _id: "63d280a2ed771d84518598ca",
    index: 470,
    age: 27,
    eyeColor: "brown",
    name: "Jeanette Cooley",
    gender: "female",
    company: "CIRCUM",
    email: "jeanettecooley@circum.com",
    phone: "+1 (837) 454-2766",
    address: "664 Cyrus Avenue, Cedarville, Minnesota, 8606",
  },
  {
    _id: "63d280a259c738ba3008c11c",
    index: 471,
    age: 39,
    eyeColor: "green",
    name: "Rosario Rocha",
    gender: "female",
    company: "GLEAMINK",
    email: "rosariorocha@gleamink.com",
    phone: "+1 (902) 411-3993",
    address: "312 Baughman Place, Berwind, Alaska, 8374",
  },
  {
    _id: "63d280a2cd2bda4a32092f0a",
    index: 472,
    age: 31,
    eyeColor: "blue",
    name: "Candy Cameron",
    gender: "female",
    company: "PORTICA",
    email: "candycameron@portica.com",
    phone: "+1 (989) 438-2762",
    address: "626 Miller Avenue, Tuskahoma, New York, 5334",
  },
  {
    _id: "63d280a2f7b6cad01094ed7e",
    index: 473,
    age: 30,
    eyeColor: "blue",
    name: "Torres Rivera",
    gender: "male",
    company: "OVERPLEX",
    email: "torresrivera@overplex.com",
    phone: "+1 (925) 591-2542",
    address: "345 Wortman Avenue, Westwood, West Virginia, 8617",
  },
  {
    _id: "63d280a21a3456d061fbe944",
    index: 474,
    age: 24,
    eyeColor: "green",
    name: "Randolph Zimmerman",
    gender: "male",
    company: "TASMANIA",
    email: "randolphzimmerman@tasmania.com",
    phone: "+1 (985) 537-2276",
    address: "383 Fanchon Place, Hiseville, Wisconsin, 3300",
  },
  {
    _id: "63d280a295d4ad2999075d1c",
    index: 475,
    age: 36,
    eyeColor: "brown",
    name: "Fanny Cotton",
    gender: "female",
    company: "IMMUNICS",
    email: "fannycotton@immunics.com",
    phone: "+1 (867) 472-3178",
    address: "768 Lexington Avenue, Avoca, Tennessee, 5766",
  },
  {
    _id: "63d280a2919f17cd30c9bdb4",
    index: 476,
    age: 27,
    eyeColor: "green",
    name: "Berger Aguilar",
    gender: "male",
    company: "FITCORE",
    email: "bergeraguilar@fitcore.com",
    phone: "+1 (944) 434-3290",
    address: "604 Cumberland Street, Fresno, South Carolina, 4796",
  },
  {
    _id: "63d280a242505a643ab09ee8",
    index: 477,
    age: 30,
    eyeColor: "blue",
    name: "Allison Schroeder",
    gender: "male",
    company: "ACIUM",
    email: "allisonschroeder@acium.com",
    phone: "+1 (834) 446-3989",
    address: "281 Garden Place, Faywood, North Carolina, 3890",
  },
  {
    _id: "63d280a2eedadb04289f3458",
    index: 478,
    age: 37,
    eyeColor: "blue",
    name: "Velazquez Casey",
    gender: "male",
    company: "GENESYNK",
    email: "velazquezcasey@genesynk.com",
    phone: "+1 (801) 479-2343",
    address: "463 Highland Avenue, Lookingglass, South Dakota, 8053",
  },
  {
    _id: "63d280a24c990cc241f17d1e",
    index: 479,
    age: 37,
    eyeColor: "blue",
    name: "Bryan Hurley",
    gender: "male",
    company: "STROZEN",
    email: "bryanhurley@strozen.com",
    phone: "+1 (880) 412-3038",
    address: "699 River Street, Esmont, Montana, 6451",
  },
  {
    _id: "63d280a2cd1be529372d894a",
    index: 480,
    age: 31,
    eyeColor: "brown",
    name: "Angel Underwood",
    gender: "female",
    company: "SUSTENZA",
    email: "angelunderwood@sustenza.com",
    phone: "+1 (965) 531-3626",
    address: "529 Murdock Court, Alleghenyville, Delaware, 8802",
  },
  {
    _id: "63d280a27df3ccedde700a3a",
    index: 481,
    age: 30,
    eyeColor: "brown",
    name: "French Walsh",
    gender: "male",
    company: "BITENDREX",
    email: "frenchwalsh@bitendrex.com",
    phone: "+1 (921) 406-2389",
    address: "656 Drew Street, Stewartville, North Dakota, 2701",
  },
  {
    _id: "63d280a2787817848124f85d",
    index: 482,
    age: 25,
    eyeColor: "green",
    name: "Katie Sheppard",
    gender: "female",
    company: "ZANYMAX",
    email: "katiesheppard@zanymax.com",
    phone: "+1 (817) 548-2861",
    address: "549 Barbey Street, Freeburn, Illinois, 4359",
  },
  {
    _id: "63d280a2b66d27252b9c2c30",
    index: 483,
    age: 34,
    eyeColor: "brown",
    name: "Sasha Cooper",
    gender: "female",
    company: "MITROC",
    email: "sashacooper@mitroc.com",
    phone: "+1 (967) 531-2627",
    address: "210 Gerritsen Avenue, Loveland, District Of Columbia, 8004",
  },
  {
    _id: "63d280a21e8e0d355704efd8",
    index: 484,
    age: 27,
    eyeColor: "brown",
    name: "Farley Flynn",
    gender: "male",
    company: "MANTRIX",
    email: "farleyflynn@mantrix.com",
    phone: "+1 (890) 527-2909",
    address:
      "812 Livingston Street, Smeltertown, Federated States Of Micronesia, 4993",
  },
  {
    _id: "63d280a25eb35525f7deda5c",
    index: 485,
    age: 21,
    eyeColor: "blue",
    name: "Twila Pate",
    gender: "female",
    company: "ZYTRAC",
    email: "twilapate@zytrac.com",
    phone: "+1 (961) 591-3464",
    address: "454 Cherry Street, Delco, Connecticut, 4676",
  },
  {
    _id: "63d280a20817f41608f34c10",
    index: 486,
    age: 38,
    eyeColor: "brown",
    name: "Hallie Kemp",
    gender: "female",
    company: "RUBADUB",
    email: "halliekemp@rubadub.com",
    phone: "+1 (921) 547-3118",
    address: "124 Canarsie Road, Cassel, American Samoa, 5988",
  },
  {
    _id: "63d280a2d6d41499f9a13ef2",
    index: 487,
    age: 32,
    eyeColor: "brown",
    name: "Anderson Blair",
    gender: "male",
    company: "EARTHPURE",
    email: "andersonblair@earthpure.com",
    phone: "+1 (830) 474-3615",
    address: "341 Adams Street, Wikieup, Nebraska, 5109",
  },
  {
    _id: "63d280a22fec9faa3babdc20",
    index: 488,
    age: 29,
    eyeColor: "green",
    name: "Tameka Clayton",
    gender: "female",
    company: "GLOBOIL",
    email: "tamekaclayton@globoil.com",
    phone: "+1 (812) 435-2597",
    address: "850 Senator Street, Topanga, Arizona, 1255",
  },
  {
    _id: "63d280a2f64ae396e15ac6bc",
    index: 489,
    age: 22,
    eyeColor: "brown",
    name: "Judy Nixon",
    gender: "female",
    company: "ENTHAZE",
    email: "judynixon@enthaze.com",
    phone: "+1 (857) 423-2689",
    address: "245 Hooper Street, Hendersonville, Colorado, 845",
  },
  {
    _id: "63d280a20380ec02783ceeae",
    index: 490,
    age: 31,
    eyeColor: "brown",
    name: "Rosa Chase",
    gender: "female",
    company: "MEDICROIX",
    email: "rosachase@medicroix.com",
    phone: "+1 (982) 456-2467",
    address: "252 Bay Avenue, Crumpler, Northern Mariana Islands, 4468",
  },
  {
    _id: "63d280a21770da180b5bc5a5",
    index: 491,
    age: 39,
    eyeColor: "blue",
    name: "Mcmillan Noel",
    gender: "male",
    company: "BARKARAMA",
    email: "mcmillannoel@barkarama.com",
    phone: "+1 (838) 597-3276",
    address: "571 Dunne Court, Cliff, Oregon, 9017",
  },
  {
    _id: "63d280a24dc49f114ee31e67",
    index: 492,
    age: 21,
    eyeColor: "blue",
    name: "Kaitlin Harrington",
    gender: "female",
    company: "QUIZKA",
    email: "kaitlinharrington@quizka.com",
    phone: "+1 (964) 508-3370",
    address: "330 Portland Avenue, Wakarusa, Alabama, 2616",
  },
  {
    _id: "63d280a242a7b2da38626185",
    index: 493,
    age: 36,
    eyeColor: "brown",
    name: "Gillespie Adams",
    gender: "male",
    company: "MUSIX",
    email: "gillespieadams@musix.com",
    phone: "+1 (800) 438-3921",
    address: "615 Turner Place, Columbus, Mississippi, 1903",
  },
  {
    _id: "63d280a249774cc1b61b10f6",
    index: 494,
    age: 31,
    eyeColor: "green",
    name: "Palmer Rodriguez",
    gender: "male",
    company: "ECSTASIA",
    email: "palmerrodriguez@ecstasia.com",
    phone: "+1 (827) 546-3490",
    address: "877 Sunnyside Avenue, Canoochee, New Hampshire, 6747",
  },
  {
    _id: "63d280a285b6d1c83ac83530",
    index: 495,
    age: 28,
    eyeColor: "green",
    name: "Erma Drake",
    gender: "female",
    company: "PROWASTE",
    email: "ermadrake@prowaste.com",
    phone: "+1 (801) 529-2367",
    address: "687 Fillmore Avenue, Carrizo, Pennsylvania, 9570",
  },
  {
    _id: "63d280a2aa1851abf6cf3749",
    index: 496,
    age: 34,
    eyeColor: "blue",
    name: "Wynn Hammond",
    gender: "male",
    company: "COMDOM",
    email: "wynnhammond@comdom.com",
    phone: "+1 (966) 507-3360",
    address: "444 Devoe Street, Morningside, Louisiana, 4431",
  },
];

const SORT_ASC = "asc";
const SORT_DESC = "desc";

const defaultSortKey = "name";
// const defaultSortOrder = SORT_ASC;

const initialState = {
  usersList: Listing,
  userDetails: {},
  pageSize: 10,
  pageCount: Listing.length / 10,
  allUser: Listing,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      let offset = action.payload * state.pageSize;
      let list = [...Listing];
      return {
        ...state,
        usersList: list.slice(offset, offset + state.pageSize),
        pageCount: state.pageCount,
      };
    case ADD_USER:
      return {
        ...state,
        usersList: [action.payload, ...state.usersList],
      };
    case GET_USER_DETAILS:
      return {
        ...state,
        userDetails: state.usersList.filter(
          (item) => item._id === action.payload
        ),
      };
    case EDIT_USER_DETAILS:
      return {
        ...state,
        usersList: state.usersList.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(
          (item) => item._id !== action.payload
        ),
      };
    case USER_LIST_SORT: {
      let sortKey = action.payload.sortKey || defaultSortKey;

      if (sortKey === state.sortKey) {
        state.sortOrder = state.sortOrder === SORT_ASC ? SORT_DESC : SORT_ASC;
      }
      return {
        ...state,
        usersList:
          state.usersList.length > 0
            ? [
                ...state.usersList.sort((a, b) => {
                  if (a[sortKey] < b[sortKey])
                    return state.sortOrder === SORT_ASC ? -1 : 1;
                  if (a[sortKey] > b[sortKey])
                    return state.sortOrder === SORT_ASC ? 1 : -1;
                  return 0;
                }),
              ]
            : state.usersList,
        sortKey: sortKey,
        sortOrder: state.sortOrder,
      };
    }
    case GET_ALL_USER:
      return {
        ...state,
        allUser: state.allUser,
      };
      case SEARCH_USER:
        let lists = [...Listing];
        return {
            ...state,
            usersList:lists.filter((item) => {
                return item.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1;
              })
        }
    default:
      return state;
  }
};
