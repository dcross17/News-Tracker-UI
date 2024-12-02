const apiData = [
  {
    source: {
      id: null,
      name: "Theregister.com",
    },
    author: "Iain Thomson",
    title:
      "NASA's X-59 plane is aiming for a sonic thump, not a boom - The Register",
    description: "Pilot James 'Clue' Less is ready to take to the skies",
    url: "https://www.theregister.com/2024/11/30/nasa_x59_aircraft/",
    urlToImage:
      "https://regmedia.co.uk/2024/01/12/nasa_lockheed_martin_x59.jpg",
    publishedAt: "2024-11-30T15:35:00Z",
    content:
      "Feature Sitting in the hangar of Lockheed Martin's famous Palmdale, California Skunk Works facility is one of the oddest aircraft ever to take shape: the X-59 that's looking to revive supersonic trav… [+5607 chars]",
  },
  {
    source: {
      id: null,
      name: "[Removed]",
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urlToImage: null,
    publishedAt: "2024-12-01T01:55:00Z",
    content: "[Removed]",
  },
  {
    source: {
      id: null,
      name: "9to5google.com",
    },
    author: "Abner Li",
    title: "Google Maps app showing incident reports from Waze - 9to5Google",
    description:
      "As part of the redesigned incident reporting, Google said Maps would show Waze reports for users to confirm. This is rolling out...",
    url: "http://9to5google.com/2024/11/30/google-maps-waze-reports/",
    urlToImage:
      "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/03/google-maps-logo-circle-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2024-12-01T00:59:00Z",
    content:
      "As part of the redesigned incident reporting across all platforms, Google said Maps would show Waze reports for users to confirm while navigating. This is beginning to roll out.\r\nWhen Google Maps ann… [+1663 chars]",
  },
  {
    source: {
      id: null,
      name: "TheStreet",
    },
    author: "Gabi Hondorp",
    title:
      "Amazon is selling a $100 smartwatch for only $27 this Black Friday thanks to double discounts - TheStreet",
    description:
      "This Matast Smartwatch is over 70% off for Amazon's Black Friday Sale",
    url: "https://www.thestreet.com/deals/matast-smartwatch-amazon-black-friday-sale-2024",
    urlToImage:
      "https://www.thestreet.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjEwMzMwODYyNjIzOTI1NDUy/tazbuzo-travel-backpack-amazon-sale.jpg",
    publishedAt: "2024-12-01T00:30:00Z",
    content:
      "TheStreet aims to feature only the best products and services. If you buy something via one of our links, we may earn a commission.Whether you participated in a Turkey Trot or spent yesterday cooking… [+2102 chars]",
  },
  {
    source: {
      id: null,
      name: "GameSpot",
    },
    author: "Steven Petite",
    title:
      "Get Awesome Meta Quest 3S Or Quest 3 Deal At Amazon Ahead Of Cyber Monday - GameSpot",
    description:
      "Amazon is now offering $75 in store credit if you buy the Meta Quest 3S or Meta Quest 3.",
    url: "https://www.gamespot.com/articles/get-awesome-meta-quest-3s-or-quest-3-deal-at-amazon-ahead-of-cyber-monday/1100-6528029/",
    urlToImage:
      "https://www.gamespot.com/a/uploads/screen_kubrick/1595/15950357/4405628-metaquest3s.jpg",
    publishedAt: "2024-12-01T00:23:45Z",
    content:
      'To get the $75 voucher for either headset at Amazon, you can either click the "Redeem" box located beneath the price on the Amazon page, or you can use the code QUEST75 in the promotional box when yo… [+1422 chars]',
  },
  {
    source: {
      id: "ign",
      name: "IGN",
    },
    author: "Katie Reul",
    title:
      "20 PS5 Games You Can Get for Under $30 This Black Friday, From Elden Ring to The Last of Us Part I - IGN",
    description:
      "We've compiled a list of the 10 best deals on PS5 games under $30 and another 10 options of PS5 games under $20.",
    url: "https://www.ign.com/articles/least-expensive-ps5-games-black-friday-2024",
    urlToImage:
      "https://assets-prd.ignimgs.com/2024/11/30/blackfriday2024-ps5gamesunder30-1732999672363.jpg?width=1280",
    publishedAt: "2024-11-30T22:00:31Z",
    content:
      "As Black Friday deals rage on, incredible discounts on PlayStation 5 games continue to emerge at retailers like Best Buy, GameStop, Target, and Walmart. It's the best time of year to find some top-se… [+3855 chars]",
  },
  {
    source: {
      id: "polygon",
      name: "Polygon",
    },
    author: "Cameron Faulkner",
    title:
      "If I buy an OLED gaming monitor, it’ll be this glossy one that’s $200 off for Black Friday - Polygon",
    description:
      "This Asus 1440p OLED gaming monitor is discounted for Black Friday, and a cut above the rest thanks to its glossy coating, which looks better than matte.",
    url: "https://www.polygon.com/black-friday/486183/asus-glossy-oled-27-inch-gaming-monitor-deal",
    urlToImage:
      "https://platform.polygon.com/wp-content/uploads/sites/2/2024/11/asusglossymosaic.png?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    publishedAt: "2024-11-30T21:30:00Z",
    content:
      "Most OLED gaming monitors have a matte coating, and for some PC gamers, they hurt more than they help. While they succeed at combating glare and fingerprint smudges, this kind of coating removes the … [+1787 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Authority",
    },
    author: null,
    title:
      "T-Mobile customers are getting a chance to take a selfie that's truly out of this world - Android Authority",
    description:
      "T-Mobile customers can score a selfie opportunity with cosmic bragging rights by redeeming a code via the T-Life app on December 3.",
    url: "https://www.androidauthority.com/t-mobile-space-selfie-offer-3504499/",
    urlToImage:
      "https://www.androidauthority.com/wp-content/uploads/2024/06/T-Mobile-logo-on-smartphone-with-colored-background-stock-photo.jpg",
    publishedAt: "2024-11-30T21:01:01Z",
    content:
      "<ul><li>T-Mobile is offering its customers a free opportunity to have their selfies photographed in space.</li><li>Mark Robers satellite will launch in January 2025 and capture images of user-submitt… [+2654 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Jennifer Pattison Tuohy",
    title:
      "This high-powered portable power bank is down to just $74 right now - The Verge",
    description:
      "With a 24,000mAh battery and 140W output, the Anker 737 Power Bank can charge a 16-inch laptop, a smartphone, and headphones on the go. It’s also on sale for Black Friday.",
    url: "https://www.theverge.com/2024/11/30/24309602/black-friday-2024-anker-737-power-bank-charger-cyber-monday",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/UdrZJOpYbNY5DyDe6uzRM0phibo=/0x0:1024x768/1200x628/filters:focal(512x384:513x385)/cdn.vox-cdn.com/uploads/chorus_asset/file/23938513/anker737.001.jpeg",
    publishedAt: "2024-11-30T21:00:00Z",
    content:
      "This high-powered portable power bank is down to just $74 right now\r\nThis high-powered portable power bank is down to just $74 right now\r\n / With a 24,000mAh battery and 140W output, the Anker 737 Po… [+2028 chars]",
  },
  {
    source: {
      id: null,
      name: "Videocardz.com",
    },
    author: null,
    title:
      "Intel Arc B570 specs leaked: 18 Xe2-Cores, 10GB memory and PCIe 4.0×8 - VideoCardz.com",
    description:
      "Intel Arc B570 has 10GB memory, confirms spec sheet from ASRock Almost full specs of Battlemage GPUs have been leaked. Following the disclosure of the Intel Arc Battlemage Limited Edition series, a new leak reveals almost the entire specs of the Arc Battlemag…",
    url: "https://videocardz.com/newz/intel-arc-b570-specs-leaked-18-xe2-cores-10gb-memory-and-pcie-4-0x8",
    urlToImage: "https://cdn.videocardz.com/1/2024/11/ASROCK-B570-HERO.jpg",
    publishedAt: "2024-11-30T19:28:00Z",
    content:
      "Almost full specs of Battlemage GPUs have been leaked.\r\nFollowing the disclosure of the Intel Arc Battlemage Limited Edition series, a new leak reveals almost the entire specs of the Arc Battlemage l… [+2502 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author: "Paul Tassi",
    title:
      "‘Fortnite’ Hits 14.3 Million Players With Juice WRLD, Ice Spice, Snoop Dogg, Eminem Concert - Forbes",
    description:
      "If you think Fortnite peaked years ago, you’re just wrong, no two ways about it.",
    url: "https://www.forbes.com/sites/paultassi/2024/11/30/fortnite-shatters-playercount-record-with-juice-wrld-ice-spice-snoop-dogg-eminem-concert/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/674b6655a25711af7be207f4/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-11-30T19:27:00Z",
    content:
      "Fortnite\r\nEpic\r\nUpdate: While Epic did not offer API data access until the last few years, they tweeted in 2021 that the Galactus event had 15.3 million players, which would put it above this one. Or… [+2392 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Central",
    },
    author: "Andrew Myrick",
    title:
      "WOW! This early Cyber Monday deal makes our favorite cheap Chromebook even cheaper - Android Central",
    description: "This is actually one of the better deals.",
    url: "https://www.androidcentral.com/chromebooks-laptops/wow-this-early-cyber-monday-deal-makes-our-favorite-cheap-chromebook-even-cheaper",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/sDcfPjTHxcDpwoqHcQMbTk-1200-80.jpg",
    publishedAt: "2024-11-30T18:35:08Z",
    content:
      "'Tis the season for spending time with family, cups of hot cocoa, and wacky Chromebook deals. Seriously, we've seen a lot of crazy Black Friday and Cyber Monday Chromebook deals, but being able to ge… [+1920 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Gizmodo Deals",
    title:
      "Bose Is Going Nuts, Its Flagship TV Soundbar Is Now at a Record Low Price After Black Friday - Gizmodo",
    description:
      "If you're looking for a good TV speaker, you won't find any better Black Friday deals than that one.",
    url: "https://gizmodo.com/bose-is-going-nuts-its-flagship-tv-soundbar-is-now-at-a-record-low-price-after-black-friday-2000532342",
    urlToImage: "https://gizmodo.com/app/uploads/2024/11/bose-soundbar.jpg",
    publishedAt: "2024-11-30T17:47:00Z",
    content:
      "If youve ever found yourself frustrated by the lackluster sound quality of your TV, youre not alone. Many of us crave a more immersive audio experience, especially when watching movies or playing vid… [+1999 chars]",
  },
  {
    source: {
      id: null,
      name: "ComicBook.com",
    },
    author: "Tyler Fischer",
    title:
      "Nintendo Switch 2 Leak Comes With Release Date Surprise - ComicBook.com",
    description:
      "A new Nintendo Switch 2 leak has shed some light on the release date of the console, which appears to be very soon.",
    url: "http://comicbook.com/gaming/news/nintendo-switch-2-release-date-leak-surprise/",
    urlToImage:
      "https://comicbook.com/wp-content/uploads/sites/4/2024/11/n-i-n-t-e-n-d-o-s-w-i-t-c-h-2.png?resize=2000,1125",
    publishedAt: "2024-11-30T17:46:44Z",
    content:
      "A new Nintendo Switch 2 leak comes with a release date surprise. Nintendo has confirmed its next console will be a successor to the Nintendo Switch, and thus be backward compatible with the current S… [+2077 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Gizmodo Deals",
    title:
      "One Day After Black Friday, Amazon Slashes The Price Of The AirPods Max To A Record Low - Gizmodo",
    description: "It's one of the best audio headphones with ANC in 2024.",
    url: "https://gizmodo.com/one-day-after-black-friday-amazon-slashes-the-price-of-the-airpods-max-to-a-record-low-2000532330",
    urlToImage: "https://gizmodo.com/app/uploads/2024/11/AirPodsMax-1.jpg",
    publishedAt: "2024-11-30T17:29:17Z",
    content:
      "In a world overflowing with options for Active Noise Cancelling headphones, it can be overwhelming to choose the right pair. With countless brands (Sonos, Bose, Sennheiser, Beats, and more) and model… [+2453 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author: "David Phelan",
    title:
      "Apple’s Own Black Friday Event iPhone 15 And iPad Offers Still Live: Latest Details - Forbes",
    description:
      "The Black Friday and Cyber Monday shopping event it rolling out worldwide. Read on for details of the gift cards you could snag.",
    url: "https://www.forbes.com/sites/davidphelan/2024/11/30/apples-own-black-friday-event-iphone-15-and-ipad-offers-go-live-full-details/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/67487480423f373d168ac4cf/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    publishedAt: "2024-11-30T17:00:25Z",
    content:
      "Updated Nov. 30 with confirmed details for U.S. and U.K. pricing and further addition of other Apple products.\r\nBlack Friday is here. Which means the Apple Black Friday and Cyber Monday shopping even… [+2126 chars]",
  },
  {
    source: {
      id: null,
      name: "Eurogamer.net",
    },
    author: "Vikki Blake",
    title:
      "Stalker 2 drops a second patch less than a day after the first - Eurogamer",
    description:
      "Stalker 2: Heart of Chornobyl developer GSC Game World has dropped a second patch.",
    url: "https://www.eurogamer.net/stalker-2-drops-a-second-patch-less-than-a-day-after-the-first",
    urlToImage:
      "https://assetsio.gnwcdn.com/Stalker-2-promo-image-showing-a-lone-figure-walking-through-a-field-of-flowers.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    publishedAt: "2024-11-30T16:51:08Z",
    content:
      "Stalker 2: Heart of Chornobyl developer GSC Game World has dropped a second patch.\r\nGSC Game World moved quickly to acknowledged concerns after release on 20th November, and its initial patch dropped… [+2271 chars]",
  },
  {
    source: {
      id: null,
      name: "Eurogamer.net",
    },
    author: "Vikki Blake",
    title:
      'Terraria\'s next update is delayed because dev will "not force anyone to crunch for an arbitrary deadline" - Eurogamer',
    description:
      "Re-Logic has confirmed there's \"no way\" we'll see Terraria 1.4.5 released this year.",
    url: "https://www.eurogamer.net/terrarias-next-update-is-delayed-because-dev-will-not-force-anyone-to-crunch-for-an-arbitrary-deadline",
    urlToImage:
      "https://assetsio.gnwcdn.com/terrarias-ultimate-version-arrived-on-ps4-next-week-1415296178466.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    publishedAt: "2024-11-30T16:05:22Z",
    content:
      'Re-Logic has confirmed there\'s "no way" we\'ll see Terraria 1.4.5 released this year.\r\nIn a lengthy update on the official forums, Ted "Loki" Murphy said that whilst the team was approaching the end o… [+1883 chars]',
  },
  {
    source: {
      id: null,
      name: "[Removed]",
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urlToImage: null,
    publishedAt: "2024-11-30T16:00:52Z",
    content: "[Removed]",
  },
  {
    source: {
      id: null,
      name: "Space.com",
    },
    author: "Andrew Jones",
    title:
      "Private Japanese moon lander arrives in Florida ahead of January SpaceX launch (photos) - Space.com",
    description:
      'The "Resilience" moon lander will launch on a SpaceX Falcon 9 rocket no earlier than January 2025',
    url: "https://www.space.com/space-exploration/missions/private-japanese-moon-lander-arrives-in-florida-ahead-of-january-spacex-launch-photos",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/AYgz36CJTzUqLnArCYHMUJ-1200-80.jpg",
    publishedAt: "2024-11-30T16:00:00Z",
    content:
      'Japanese space exploration firm ispace is preparing for a second attempt at landing on the moon.\r\nThe "Resilience" Mission 2 lander has arrived in Florida ahead of launch on a SpaceX\r\nFalcon 9\r\n rock… [+2250 chars]',
  },
];

export default apiData;
