const apiData = [
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Rami Amichay, Maayan Lubell",
    title:
      "Israeli authorities probe suspected Gaza intelligence leak by Netanyahu aide - Reuters",
    description:
      "A court ruling partially lifting a gag order has provided a glimpse of the case which the court said compromised security sources and may have harmed Israel's war effort.",
    url: "https://www.reuters.com/world/middle-east/israeli-authorities-probe-suspected-gaza-intelligence-leak-by-netanyahu-aide-2024-11-03/",
    urlToImage:
      "https://www.reuters.com/resizer/v2/FPQEI44JKJN5DOQNFGHJIMG5XY.jpg?auth=d4c368a4649b8f73bb03a226d694cbcc56add609c5ec3f7c57b35f33e3615952&height=1005&width=1920&quality=80&smart=true",
    publishedAt: "2024-11-03T20:30:08Z",
    content: null,
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Gregory Krieg",
    title:
      "Trump says he ‘shouldn’t have left’ the White House as he closes campaign with increasingly dark message - CNN",
    description:
      "Donald Trump, who said in Pennsylvania on Sunday that he regrets leaving the White House in 2021, is ending the 2024 campaign the way he began it – dishing out a stew of violent, disparaging rhetoric and repeated warnings that he will not accept defeat if it …",
    url: "https://www.cnn.com/2024/11/03/politics/trump-dark-closing-message/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2182697515.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-11-03T20:00:00Z",
    content:
      "Donald Trump, who said in Pennsylvania on Sunday that he regrets leaving the White House in 2021, is ending the 2024 campaign the way he began it dishing out a stew of violent, disparaging rhetoric a… [+7089 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Atika Shubert",
    title:
      "Angry crowds boo and throw eggs at Spanish king as he visits flood-hit Valencia - CNN",
    description:
      "Angry residents in flood devastated areas of Valencia, booed King Felipe of Spain and pelted him with eggs and mud as scuffles broke out around him.",
    url: "https://www.cnn.com/2024/11/03/europe/spanish-king-valencia-angry-crowds-intl/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2181990265.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-11-03T19:20:00Z",
    content:
      "Angry residents booed and threw eggs at Spains King Felipe and Queen Letizia as they visited the Valencia region, where more than 200 people have died in devastating floods.\r\nThe king faced chants of… [+3942 chars]",
  },
  {
    source: {
      id: null,
      name: "NBC 10 Philadelphia",
    },
    author: "Jill Colvin, Darlene Superville, Bill Barrow, Jonathan J. Cooper",
    title:
      "Harris goes to church while Trump muses about reporters being shot - NBC Philadelphia",
    description:
      "On the last Sunday before Election Day, Republican Donald Trump gave a profane-laden speech while Democrat Kamala Harris offered to heal division.",
    url: "https://www.nbcphiladelphia.com/decision-2024/harris-church-trump-reporters-shot/4017209/",
    urlToImage:
      "https://media.nbcphiladelphia.com/2024/11/AP24307805562495.jpg?quality=85&strip=all&resize=1200%2C675",
    publishedAt: "2024-11-03T19:12:45Z",
    content:
      "Kamala Harris told a Michigan church on Sunday that God offers America a divine plan strong enough to heal division, while Donald Trump gave a profane and conspiracy-laden speech in which he mused ab… [+4333 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Jake Piazza",
    title:
      "Trump says RFK Jr. plan to remove fluoride from public water 'sounds okay to me' - CNBC",
    description:
      'Donald Trump said Robert F. Kennedy Jr.\'s proposal to remove fluoride from the U.S. water systems "sounds okay" to him, raising alarms for public health.',
    url: "https://www.cnbc.com/2024/11/03/trump-rfk-plan-to-remove-fluoride-from-public-water-sounds-okay.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/108056685-17306549882024-10-24t010817z_281417333_rc2s6aauce5a_rtrmadp_0_usa-election-trump.jpeg?v=1730655024&w=1920&h=1080",
    publishedAt: "2024-11-03T18:58:44Z",
    content:
      'Former president Donald Trump said Sunday that Robert F. Kennedy Jr.\'s proposal to remove fluoride from the U.S. water system "sounds okay" to him, a position that runs counter to the advice of publi… [+2672 chars]',
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Jason Owens",
    title:
      "Saints' Chris Olave carted off field on backboard, hospitalized after illegal hit resulted in concussion - Yahoo Sports",
    description: "Olave suffered his second concussion since Week 6.",
    url: "https://sports.yahoo.com/saints-chris-olave-carted-off-field-on-backboard-hospitalized-after-illegal-hit-resulted-in-concussion-184715356.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/HZKl6b2HYIBMMktd59wdRQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-10/d77dd9a0-9a13-11ef-bbaf-13cf75adc6fd",
    publishedAt: "2024-11-03T18:48:21Z",
    content:
      "Saints receiver Chris Olave was hospitalized after suffering his second concussion in three weeks. (AP Photo/Jacob Kupferman)\r\nNew Orleans Saints wide receiver Chis Olave took a violent hit against t… [+2893 chars]",
  },
  {
    source: {
      id: null,
      name: "TMZ",
    },
    author: "TMZ Staff",
    title: "James Van Der Beek Battling Colorectal Cancer - TMZ",
    description:
      "James Van Der Beek is batting colorectal cancer ... TMZ has confirmed.",
    url: "https://www.tmz.com/2024/11/03/james-van-der-beek-battling-colorectal-cancer/",
    urlToImage:
      "https://imagez.tmz.com/image/12/16by9/2024/11/03/12856490660947e1ac9e036d70bb2786_xl.jpg",
    publishedAt: "2024-11-03T18:42:47Z",
    content:
      "James Van Der Beek is batting colorectal cancer ... TMZ has confirmed.\r\nThe 47-year-old actor, best known for \"Dawson's Creek,\" was recently diagnosed with the disease -- telling People he's receivin… [+1171 chars]",
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
    publishedAt: "2024-11-03T17:59:00Z",
    content: "[Removed]",
  },
  {
    source: {
      id: null,
      name: "New York Post",
    },
    author: "Ronny Reyes",
    title:
      "Elite Israeli commandos storm Lebanon beach to capture top Hezbollah official Imad Amhaz in speedboat: IDF - New York Post ",
    description:
      "The highly specialized soldiers rushed the beach to reach the terrorists’ hold and capture Imad Amhaz, throwing the suspected Hezbollah senior official into a speedboat and carting him off, a…",
    url: "https://nypost.com/2024/11/03/world-news/elite-israeli-commandos-storm-beach-to-snatch-top-hezbollah-official-idf/",
    urlToImage:
      "https://nypost.com/wp-content/uploads/sites/2/2024/11/israel-lebanon-comp.jpg?quality=75&strip=all&w=1024",
    publishedAt: "2024-11-03T17:29:00Z",
    content:
      "Israel’s equivalent of the elite Navy SEALs stormed a beach in Lebanon over the weekend, snatched a nearby senior Hezbollah operative and then raced off with him in a speedboat, officials say.\r\nThe w… [+3091 chars]",
  },
  {
    source: {
      id: null,
      name: "Deadline",
    },
    author: "Anthony D'Alessandro",
    title:
      "‘Here’ Misfires With $5M; Robert Zemeckis Says “Theatrical Movie Business Is In A Stressful Situation Right Now”: What Happened With ‘Forrest Gump’ Reteam At B.O. - Deadline",
    description:
      "How 'Here' the 'Forrest Gump' reteam of Robert Zemeckis, Tom Hanks, Robin Wright & Eric Roth bombed at the box office with $5M opening.",
    url: "http://deadline.com/2024/11/here-box-office-bomb-tom-hanks-1236165725/",
    urlToImage:
      "https://deadline.com/wp-content/uploads/2024/11/MCDHERE_TR016.jpg?w=1024",
    publishedAt: "2024-11-03T17:14:00Z",
    content:
      "Robert Zemeckis has always been about a great technological or storytelling conceit in his movies whether it’s the live-action animated hybrid of the 3x Oscar winning Who Framed Roger Rabbit?, the in… [+4624 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Paradise Afshar, Chris Boyette, Lauren Mascarenhas",
    title:
      "At least 6 were injured after tornado-spawning thunderstorms left a trail of destruction across parts of Oklahoma - CNN",
    description:
      "At least six people were injured as severe thunderstorms moved across parts of Oklahoma early Sunday, with tornadoes and flooding reported overnight, authorities said.",
    url: "https://www.cnn.com/2024/11/03/weather/oklahoma-thunderstorms-tornado/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/still-21096228-441637-157-still.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-11-03T17:01:00Z",
    content:
      "Tornadoes and flooding spawned by severe thunderstorms tore through parts of Oklahoma overnight, leaving six people injured and shredding homes and other properties.\r\nSix people were taken to the hos… [+3899 chars]",
  },
  {
    source: {
      id: null,
      name: "Cageside Seats",
    },
    author: "M. G0MEZ",
    title:
      "Roman Reigns’ loss at Crown Jewel sets the stage for Survivor Series and beyond - Cageside Seats",
    description: "Observations following WWE’s latest trip to Saudi Arabia.",
    url: "https://www.cagesideseats.com/wwe/2024/11/3/24286217/5-key-takeaways-wwe-crown-jewel-2024-solo-sikoa-kevin-owens",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/UoWjY9CcLL4Xby5MLCoA9CbZSzU=/0x0:1366x715/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25712551/Screenshot_2024_11_02_20.21.20.png",
    publishedAt: "2024-11-03T17:00:00Z",
    content:
      "WWE raised the stakes at this years Crown Jewel by matching the mens and womens world champions in a best of the best showdown. The event also advanced the Bloodline Civil War storyline and featured … [+4140 chars]",
  },
  {
    source: {
      id: null,
      name: "Prideofdetroit.com",
    },
    author: "Erik Schlitt",
    title:
      "Detroit Lions updated 2024 depth chart: Week 9 at Green Bay Packers - Pride Of Detroit",
    description:
      "A lot of injuries and roster moves this week. So here’s an updated look at the 2024 Detroit Lions’ depth chart heading into their matchup with the Green Bay Packers.",
    url: "https://www.prideofdetroit.com/2024/11/3/24282402/detroit-lions-updated-2024-depth-chart-week-9-at-green-bay-packers",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/cGSQvS1AlI0U8xfKZxLMBiaJe0I=/0x39:3650x1950/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25704321/usa_today_24602333.jpg",
    publishedAt: "2024-11-03T16:30:00Z",
    content:
      "The Detroit Lions (6-1) are taking on the Green Bay Packers (5-2) in Week 9, in an important NFC North showdown.\r\nWere looking forward to this, Lions coach Dan Campbell said on Friday. Well be in the… [+2645 chars]",
  },
  {
    source: {
      id: "politico",
      name: "Politico",
    },
    author: "Marcia Brown",
    title:
      "This swing state saw some of the country’s highest food inflation. Republicans hope voters blame Dems. - POLITICO",
    description:
      'Democrats struggle to land "price-gouging" message with undecided voters.',
    url: "https://www.politico.com/news/2024/11/03/grocery-prices-surge-philadelphia-00186460",
    urlToImage:
      "https://static.politico.com/12/f9/625ba3fb4f0cb3ee80126e259273/20241031-katsanis-groceries-20.jpg",
    publishedAt: "2024-11-03T16:00:00Z",
    content:
      "And last month in Kittanning, northeast of Pittsburgh, Trump handed a mother of three $100 during a stop at a local grocery store.\r\nIt [the cost] just went down 100 bucks, he told the woman, Jenny Ka… [+3310 chars]",
  },
  {
    source: {
      id: null,
      name: "New York Post",
    },
    author: "Elizabeth Karpen",
    title:
      "Thousands of runners compete in 2024 NYC Marathon as fans flock to support: photos - New York Post ",
    description:
      "Thousands of runners and supports came out Sunday morning for the New York City Marathon in its 53rd year.",
    url: "https://nypost.com/2024/11/03/us-news/thousands-of-runners-compete-in-2024-annual-nyc-marathon-photos/",
    urlToImage:
      "https://nypost.com/wp-content/uploads/sites/2/2024/11/newspress-collage-zo9efqe9l-1730649095905.jpg?quality=90&strip=all&1730631126&w=1024",
    publishedAt: "2024-11-03T15:52:00Z",
    content: "",
  },
  {
    source: {
      id: null,
      name: "9to5Mac",
    },
    author: "Benjamin Mayo",
    title:
      "Siri on your iPhone running iOS 18.1 may look different, but it still works the same - 9to5Mac",
    description:
      "If you have an iPhone 15 Pro or iPhone 16 model, you can access Apple Intelligence when updating to iOS...",
    url: "https://9to5mac.com/2024/11/03/new-apple-intelligence-siri-looks-different-works-the-same/",
    urlToImage:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/11/apple-intelligence-iphone-ios-18-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2024-11-03T15:41:00Z",
    content:
      "If you have an iPhone 15 Pro or iPhone 16 model, you can access Apple Intelligence when updating to iOS 18.1. This includes a new look for Siri, with a beautiful edge-lit animation.\r\nHowever, the new… [+4929 chars]",
  },
  {
    source: {
      id: "usa-today",
      name: "USA Today",
    },
    author: "glenn erby",
    title:
      "What channel is Ravens vs. Broncos on today? Time, TV schedule for Week 9 game - Ravens Wire",
    description:
      "It’s the Baltimore Ravens vs. Denver Broncos in Week 9 of the 2024 NFL season. Here’s how to watch, including time, channel, TV schedule and streaming info.",
    url: "https://ravenswire.usatoday.com/lists/ravens-broncos-nfl-week-9-streaming-cbs-tv/",
    urlToImage:
      "https://ravenswire.usatoday.com/wp-content/uploads/sites/55/2022/12/USATSI_19562137.jpg?w=1024&h=576&crop=1",
    publishedAt: "2024-11-03T14:57:00Z",
    content:
      "Week 7 10/21 @ Buccaneers 8:15 PM EDT\r\nWeek 8 10/27 @ Browns 1:00 PM EDTWeek 9 11/03 vs Broncos 1:00 PM EST\r\nWeek 10 vs. Cincinnati Bengals 8: 15 EST\r\nWe occasionally recommend interesting products a… [+846 chars]",
  },
  {
    source: {
      id: null,
      name: "Wccftech",
    },
    author: "Omar Sohail",
    title:
      "M4 Ultra Designed For The Mac Pro Has Been Hinted To Feature Up To An 80-Core GPU, As Apple Said To Be In A Better Position To Enter The Mainstream Gaming Market - Wccftech",
    description:
      "The latest report talks about the M4 Ultra featuring up to an 80-core GPU when running in the Mac Pro, making it more than capable of playing games",
    url: "https://wccftech.com/m4-ultra-for-the-mac-pro-rumored-to-feature-an-80-core-gpu/",
    urlToImage:
      "https://cdn.wccftech.com/wp-content/uploads/2024/11/M2-Ultra-chipset-on-the-2023-Mac-Pro-motherboard.jpg",
    publishedAt: "2024-11-03T14:40:00Z",
    content:
      "Apple is officially done with launching its trio of M4 chipsets, which includes the top-end M4 Max, and it is an exceptional performer. Just recently, it became the fastest CPU in Geekbench 6s single… [+2701 chars]",
  },
  {
    source: {
      id: null,
      name: "News-Press",
    },
    author: "John Gallas",
    title:
      "See latest spaghetti models, radar images of Invest 97L. Florida impacts? - News-Press",
    description:
      "National Hurricane Center forecasters say there's a 80% chance Invest 97L will develop in the next two days. Here's is what the systems look like.",
    url: "https://www.news-press.com/story/weather/hurricane/2024/11/03/invest-97l-spaghetti-models-track-path-sunday/76027825007/",
    urlToImage:
      "https://www.news-press.com/gcdn/authoring/authoring-images/2024/11/03/NDNJ/76027861007-spaghetti-promo-20241103-8-am-sun.jpg?crop=551,310,x0,y25&width=551&height=310&format=pjpg&auto=webp",
    publishedAt: "2024-11-03T13:23:38Z",
    content:
      "Caribbean waters are warm enough for tropical development of Invest 97L which forecasters believe will soon become a tropical storm and work its way into the Gulf of Mexico.\r\nBut wind shear, or disru… [+1060 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Chris Pandolfo",
    title:
      "American journalist detained in Iran as Supreme Leader Khamenei threatens US, Israel, State Department says - Fox News",
    description:
      "An Iranian-American journalist has been detained in Iran, as the U.S. ordered more bombers and warships to the Middle East amid rising tensions.",
    url: "https://www.foxnews.com/world/american-journalist-detained-iran-supreme-leader-khamenei-threatens-us-israel-state-department-says",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2024/11/iranians-burn-american-flag.jpg",
    publishedAt: "2024-11-03T13:12:00Z",
    content:
      "Authorities say an Iranian-American journalist who worked for a U.S.-funded broadcaster is believed to have been detained by Iran for months, according to a report.\r\nState Department officials acknow… [+4304 chars]",
  },
  {
    source: {
      id: "the-hill",
      name: "The Hill",
    },
    author: "Becket Adams, Opinion Contributor",
    title:
      "No, Trump did not threaten Liz Cheney with a firing squad - The Hill",
    description:
      "The “firing squad” claim isn’t even a little bit true. It doesn’t lack context. He simply didn’t say what they said he said.",
    url: "https://thehill.com/opinion/campaign/4967807-trump-firing-squad-claims/",
    urlToImage:
      "https://thehill.com/wp-content/uploads/sites/2/2024/11/trumpdonald_103124ap01_w.jpg?w=1280",
    publishedAt: "2024-11-03T13:30:00Z",
    content:
      "Skip to content\r\nNo one knows how Election Day will turn out.\r\nBut if the press’s panicked behavior this week is any sign, including its false claim that former President Donald Trump called for Repu… [+4844 chars]",
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
    publishedAt: "2024-11-03T13:05:00Z",
    content: "[Removed]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Leslie Josephs",
    title:
      "Why flights to Europe are the cheapest they've been in years - CNBC",
    description:
      "Airlines have ramped up capacity between the U.S. and Europe in the wake of the Covid-19 pandemic.",
    url: "https://www.cnbc.com/2024/11/03/flights-to-europe-fall-to-3-year-low.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107435173-17196070452024-06-28t201115z_620935682_rc2gk8abfwye_rtrmadp_0_greece-tourism.jpeg?v=1730493188&w=1920&h=1080",
    publishedAt: "2024-11-03T13:00:01Z",
    content:
      "Flights between the U.S. and Europe have not been this cheap in three years, when many countries were just lifting Covid-19 era rules.\r\nFares are low even for the traditionally slow late-fall and win… [+3320 chars]",
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
    publishedAt: "2024-11-03T12:33:53Z",
    content: "[Removed]",
  },
  {
    source: {
      id: "the-hill",
      name: "The Hill",
    },
    author: "Addy Bink",
    title:
      "Daylight saving ends: Where do efforts to ‘lock the clocks’ stand? - The Hill",
    description: "Tired of changing the clocks twice a year? You aren’t alone.",
    url: "https://thehill.com/homenews/nexstar_media_wire/4957487-daylight-saving-ends-where-do-efforts-to-lock-the-clocks-stand/",
    urlToImage:
      "https://thehill.com/wp-content/uploads/sites/2/2024/11/GettyImages-851602378-e1730146169756.jpg?w=1280",
    publishedAt: "2024-11-03T12:30:00Z",
    content:
      "Skip to content\r\n(NEXSTAR) — It’s the first Sunday of November, which can only mean one thing for the U.S.: daylight saving time is ending. We will now trade away the later sunrises and sunsets we’ve… [+4568 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Amber Dance",
    title:
      "New research on migraines raises the prospect of better therapies - The Washington Post",
    description:
      "One class of drugs has already found success in treating the painful, disorienting and common attacks. Excitement is building about a slew of additional drug targets.",
    url: "https://www.washingtonpost.com/wellness/2024/11/03/migraine-headache-nausea-cgrp-therapies/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TICH4M6TIZHE7EUFU6TZPR3XXY.jpg&w=1440",
    publishedAt: "2024-11-03T12:11:09Z",
    content:
      "For Cherise Irons, chocolate, red wine and aged cheeses are dangerous. So are certain sounds, perfumes, cold weather and thunderstorms. Stress and lack of sleep, too.\r\nShe suspects all of these thing… [+194 chars]",
  },
  {
    source: {
      id: "associated-press",
      name: "Associated Press",
    },
    author: "ANNE D'INNOCENZIO",
    title:
      "A TV as big as a bed? With the holidays approaching, stores stock more supersize sets - The Associated Press",
    description:
      "For some television viewers, size apparently does matter. Forget the 65-inch TVs that were considered bigger than average just a few years ago. In time for the holidays, manufacturers and retailers are rolling out more XXL screens measuring more than 8 feet a…",
    url: "https://apnews.com/article/big-tv-screens-technology-holidays-43ca60a7306284c0f2f11eba9bc1d09f",
    urlToImage:
      "https://dims.apnews.com/dims4/default/a0655b0/2147483647/strip/true/crop/5760x3240+0+300/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcd%2Fd7%2F4dc9bb0d4edb39b44e815701f02c%2F9c05f00dd8264314ac463843df47c75c",
    publishedAt: "2024-11-03T11:50:00Z",
    content:
      "NEW YORK (AP) For some television viewers, size apparently does matter. \r\nForget the 65-inch TVs that were considered bigger than average a decade ago. In time for the holidays, manufacturers and ret… [+5979 chars]",
  },
  {
    source: {
      id: "associated-press",
      name: "Associated Press",
    },
    author: "JOSEPH WILSON",
    title:
      "Crashing waves in a hilltop village, a night of terror from Spain’s floods - The Associated Press",
    description:
      "Irene Cuevas says she has the roar of the waves produced by a flash flood burned into her memory. The resident of Chiva spent a night of terror when the gorge of her village in eastern Spain quickly filled with rushing water and unleashed a wave of death and …",
    url: "https://apnews.com/article/spain-floods-valencia-chiva-edcef9ff9430d0d35e2f464b068cec7d",
    urlToImage:
      "https://dims.apnews.com/dims4/default/83d4763/2147483647/strip/true/crop/8309x4674+0+433/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe4%2Fd9%2Fd5927870e43d4a0bab8ac7a5adb4%2F0848008db3514ea4b603fd3616dcae7d",
    publishedAt: "2024-11-03T11:33:00Z",
    content:
      "CHIVA, Spain (AP) Irene Cuevas will never forget the sound of the waves crashing below her apartments balcony.\r\nIf only there had been a flash of lightning in the darkness to let her glimpse what sou… [+4304 chars]",
  },
  {
    source: {
      id: null,
      name: "Detroit Free Press",
    },
    author: "Dave Birkett, Carlos Monarrez, Jeff Seidel, Shawn Windsor",
    title:
      "Detroit Lions predictions vs. Green Bay Packers: Who'll be kings of NFC North, for 1 week? - Detroit Free Press",
    description:
      "Four Free Press sports writers make their picks for the NFC North showdown between the Detroit Lions and the Green Bay Packers.",
    url: "https://www.freep.com/story/sports/nfl/lions/2024/11/03/detroit-lions-predictions-vs-green-bay-packers-nfc-north-kings/76008091007/",
    urlToImage:
      "https://www.freep.com/gcdn/authoring/authoring-images/2023/09/29/PDTF/70997567007-gty-1706930470.jpg?crop=2999,1687,x0,y0&width=2999&height=1687&format=pjpg&auto=webp",
    publishedAt: "2024-11-03T11:08:47Z",
    content:
      "The Detroit Lions continue their march toward history with a trip to Green Bay, Wisconsin, to face the Packers as God intended: With Tom Brady watching.\r\nWe kid, but there should be an electric atmos… [+2648 chars]",
  },
  {
    source: {
      id: null,
      name: "Phys.Org",
    },
    author: "Jenna Travers",
    title:
      "'Doomsday' Antarctic glacier melting faster than expected, fueling calls for geoengineering - Phys.org",
    description:
      'New studies about the Thwaites Glacier, also called the "Doomsday Glacier," have sparked a conversation about geoengineering as a climate change solution.',
    url: "https://phys.org/news/2024-11-doomsday-antarctic-glacier-faster-fueling.html",
    urlToImage:
      "https://scx2.b-cdn.net/gfx/news/2024/doomsday-antarctic-gla.jpg",
    publishedAt: "2024-11-03T11:00:01Z",
    content:
      'New studies about the Thwaites Glacier, also called the "Doomsday Glacier," have sparked a conversation about geoengineering as a climate change solution.\r\nOne study published in May and led by Unive… [+7045 chars]',
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
    publishedAt: "2024-11-03T10:44:00Z",
    content: "[Removed]",
  },
  {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "ABC News",
    title: "Tornado warning issued on University of Oklahoma campus - ABC News",
    description: null,
    url: "https://abcnews.go.com/US/tornado-warning-issued-university-oklahoma-campus/story?id\\\\u003d115436662",
    urlToImage: null,
    publishedAt: "2024-11-03T10:35:49Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Laurelle Stelle",
    title:
      "Scientists uncover 'saltshaker' breakthrough in quest for limitless energy — here's how it could transform the future - Yahoo! Voices",
    description:
      'This could be a huge deal for fusion experiments around the globe, which could lead to what has been called the "holy grail" of clean, efficient, abundant...',
    url: "https://www.yahoo.com/tech/scientists-uncover-saltshaker-breakthrough-quest-101506097.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/_yPjMFOQ0H5lAwjxdvLJsQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MDM-/https://media.zenfs.com/en/the_cool_down_737/63f8775aa0b2ca2f0105b307ef22e046",
    publishedAt: "2024-11-03T10:15:06Z",
    content:
      "Scientists are getting closer to functioning, sustainable fusion energy, and they've just taken another big step: finding a way to prevent material on the chamber walls from interfering in the reacti… [+2040 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Jason Parham",
    title:
      "The Toymaker Who Wants to Be the Next Willy Wonka of Sex Tech - WIRED",
    description:
      "As the industry looks to AI and robotics for the next big thing, Our Erotic Journey’s James Guo just wants to build you the perfect vibrator.",
    url: "https://www.wired.com/story/the-toymaker-who-wants-to-be-the-next-willy-wonka-of-sex-tech/",
    urlToImage:
      "https://media.wired.com/photos/6722b7189cf1f05a209b1f89/191:100/w_1280,c_limit/Willy-Wonka-Sex-Tech-Culture.jpg",
    publishedAt: "2024-11-03T10:00:00Z",
    content:
      "But where Guo, who is 35, sometimes falls short in imagination, he more than makes up for in vigilance. Users expect and deserve products that meet stringent safety standards, and any deviation can d… [+2780 chars]",
  },
  {
    source: {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
    },
    author: "Al Jazeera",
    title:
      "US Women’s March 2024: Huge rally in DC to back Harris, abortion rights - Al Jazeera English",
    description:
      "Thousands of women rally in Washington, DC for Harris and reproductive rights days before elections",
    url: "https://www.aljazeera.com/gallery/2024/11/3/us-womens-march-2024-huge-rally-in-dc-to-back-harris-abortion-rights",
    urlToImage:
      "https://www.aljazeera.com/wp-content/uploads/2024/11/AFP__20241102__36LG6ZR__v1__Preview__UsRightsWomenMarch-1730616833.jpg?resize=1200%2C630",
    publishedAt: "2024-11-03T09:41:35Z",
    content:
      "Thousands of women have rallied in Washington, DC, in support of Democratic presidential candidate Kamala Harris and reproductive rights.\r\nThe vice president has made abortion rights a central plank … [+1948 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Homero De La Fuente",
    title:
      "NBA investigating reports that Philadelphia 76ers’ Joel Embiid shoved columnist - CNN",
    description:
      "The National Basketball Association is investigating reports that Philadelphia 76ers star center Joel Embiid “shoved” a columnist following the team’s loss to the Memphis Grizzlies on Saturday night.",
    url: "https://www.cnn.com/2024/11/03/sport/76ers-embiid-reportedly-shoves-reporter-nba-investigates-spt-intl/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/ap24308112857712.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-11-03T09:20:00Z",
    content:
      "The National Basketball Association is investigating reports that Philadelphia 76ers star center Joel Embiid shoved a columnist following the teams loss to the Memphis Grizzlies on Saturday night.\r\nA… [+3096 chars]",
  },
  {
    source: {
      id: null,
      name: "Wccftech",
    },
    author: "Omar Sohail",
    title:
      "Apple Is Charging The Exact Same Price For A Single Base M4 Mac mini If Buyers Want To Double The Existing Unified RAM And Internal Storage - Wccftech",
    description:
      "For those wanting to double their RAM and storage on the M4 Mac mini, Apple is charging the same price as the base model",
    url: "https://wccftech.com/apple-charging-same-m4-mac-mini-for-doubling-storage-and-ram/",
    urlToImage:
      "https://cdn.wccftech.com/wp-content/uploads/2024/11/M4-Mac-mini.jpg",
    publishedAt: "2024-11-03T09:19:00Z",
    content:
      "The pricing of the M4 Mac mini was nailed to absolute perfection because Apple not only continues to sell the base model for $599, it has topped it out by offering 16GB RAM as standard instead of 8GB… [+1879 chars]",
  },
  {
    source: {
      id: null,
      name: "Pff.com",
    },
    author: "Judah Fortgang",
    title: "NFL Week 9 Anytime touchdown bets - Pro Football Focus",
    description:
      "Three anytime touchdown bets ahead of NFL Week 9, including Arizona Cardinals RB James Conner.",
    url: "https://www.pff.com/news/bet-nfl-week-9-anytime-touchdown-bets",
    urlToImage:
      "https://media.pff.com/2023/08/Conner-James-Alamy-scaled.jpg?w=1200&h=675",
    publishedAt: "2024-11-03T08:00:03Z",
    content:
      "RB James Conner, Arizona Cardinals: Conner has one of the most secure roles among running backs, handling the lions share of carries especially near the goal line, where he has 50% of his teams touch… [+2246 chars]",
  },
  {
    source: {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
    },
    author: "Al Jazeera Staff",
    title:
      "US election: 2 days left – What polls say, what Harris and Trump are up to - Al Jazeera English",
    description:
      "Harris and Trump are locked in a dead heat in several swing states as one survey shows the Democrat leading in Iowa.",
    url: "https://www.aljazeera.com/news/2024/11/3/us-election-2-days-left-what-polls-say-what-harris-and-trump-are-up-to",
    urlToImage:
      "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24304037053551-1730621668_fbacd8-1730621886.jpg?resize=1200%2C630&quality=80",
    publishedAt: "2024-11-03T07:57:29Z",
    content:
      "The US presidential candidates campaigned in the key swing state of North Carolina on Saturday, seeking to lock in more votes for the election on Tuesday, November 5.\r\nIt marked the fourth day in a r… [+6363 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author:
      "Adam Taylor, Mustafa Salim, Bryan Pietsch, Suzan Haidamous, Heidi Levine",
    title:
      "Iran’s Khamenei warns of ‘crushing’ response to Israeli strikes - The Washington Post",
    description:
      "Supreme Leader Ali Khamenei did not explicitly say an attack would originate from Iran, adding to speculation Tehran plans to retaliate from neighboring Iraq.",
    url: "https://www.washingtonpost.com/world/2024/11/02/israel-iran-khamanei-strike/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JVHDQ4QRWAGGPVVRMAVVDTU3TA.jpg&w=1440",
    publishedAt: "2024-11-03T06:28:52Z",
    content:
      "TEL AVIV Irans supreme leader vowed Saturday to give a crushing response to Israels attacks on Iranian military and missile defense sites, saying they would not go unanswered and hinting at a potenti… [+337 chars]",
  },
];

export default apiData;
