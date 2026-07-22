/**
 * TK's Towing — single source of truth for all site content.
 *
 * RULES:
 *  - No hardcoded copy in components. Everything renders from this file.
 *  - Facts here are pulled from the live site (tkstowing.biz) and the client brief.
 *  - Anything unverified is marked with the [CONFIRM] token so it is visible in
 *    the rendered page and easy to grep before launch.
 */

export const CONFIRM = '[CONFIRM]';

/* ------------------------------------------------------------------ */
/* Business                                                            */
/* ------------------------------------------------------------------ */

export const business = {
  name: "TK's Towing",
  legalName: "TK's Towing",
  tagline: 'Flatbed towing & roadside assistance across South Jersey',
  founded: 1996,
  yearsInBusiness: 'Since 1996',
  phone: '(856) 854-9889',
  phoneHref: 'tel:+18568549889',
  email: `info@tkstowing.biz ${CONFIRM}`,
  emailHref: 'mailto:info@tkstowing.biz',
  address: {
    street: '208 W Cuthbert Blvd',
    city: 'Haddon Township',
    state: 'NJ',
    zip: '08108',
    full: '208 W Cuthbert Blvd, Haddon Township, NJ 08108',
  },
  hours: 'Open 24 hours a day, 7 days a week — all year',
  hoursShort: 'Open 24/7, 365',
  staffLine: 'Our 24/7 staff is here when you need us.',
  socials: [
    { label: 'Facebook', href: 'https://facebook.com/tkstowingservice' },
    {
      label: 'Yelp',
      href: 'https://www.yelp.com/biz/tks-towing-service-haddon-township',
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Meta                                                                */
/* ------------------------------------------------------------------ */

export const meta = {
  title: "TK's Towing | 24/7 Flatbed Towing & Roadside Assistance — South Jersey",
  description:
    "Family owned flatbed towing and roadside assistance in Haddon Township, NJ since 1996. Serving all of Camden County plus parts of Burlington and Gloucester. Open 24/7. Call (856) 854-9889.",
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const nav = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Coverage Area', href: '#coverage' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  callCta: `Call ${business.phone}`,
  callCtaShort: 'Call Now',
} as const;

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: 'Haddon Township, NJ · Since 1996',
  heading: 'Fast, reliable towing across South Jersey — 24/7',
  sub: 'Flatbed towing and roadside assistance from a family owned crew that has been answering the phone in Camden County for nearly 30 years. Day, night, holidays — someone picks up.',
  primaryCta: `Call ${business.phone}`,
  secondaryCta: 'Our services',
  secondaryCtaHref: '#services',
  trustLine: [
    'Since 1996',
    'Family owned',
    'Open 24/7',
    'Camden, Burlington & Gloucester',
  ],
  imageAlt: 'PLACEHOLDER — TOW TRUCK HERO PHOTO (replace with a real TK\'s truck)',
  imageCaption: 'PLACEHOLDER — TOW TRUCK HERO PHOTO',

  // Left utility rail (vintage framed shell)
  rail: {
    vertical: 'Haddon Township, NJ — Family Owned Since 1996',
  },

  // Ken Burns slideshow — captions per frame. Images are wired in Hero.astro.
  // Kicker sits above each service label. Real TK's work, no invented claims.
  slideshow: {
    kicker: 'On the job',
    slides: [
      { label: 'Flatbed Towing' },
      { label: 'Auto & Light-Truck Towing' },
      { label: 'Roadside Assistance' },
      { label: 'Long-Distance Towing' },
      { label: 'Recovery & Hauling' },
    ],
  },

  // Proof strip beneath the slideshow — real facts only.
  proof: [
    { label: 'Established', value: 'Since 1996', note: 'Family owned & operated' },
    { label: 'Availability', value: 'Open 24/7', note: '365 days a year' },
    {
      label: 'Service Area',
      value: 'Camden County',
      note: '+ Burlington & Gloucester',
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Trust bar                                                           */
/* ------------------------------------------------------------------ */

export const trustBar = {
  items: [
    { stat: '24/7', label: 'Real people, any hour' },
    { stat: '1996', label: 'Serving South Jersey since' },
    { stat: 'Family', label: 'Owned & operated' },
    { stat: 'Flatbed', label: 'Careful, damage-free hauling' },
  ],
  reviewNote: `Rated ${CONFIRM} on Google, Yelp and Facebook`,
  reviewLinks: [
    { label: 'Facebook', href: 'https://facebook.com/tkstowingservice' },
    {
      label: 'Yelp',
      href: 'https://www.yelp.com/biz/tks-towing-service-haddon-township',
    },
    { label: `Google ${CONFIRM}`, href: '#contact' },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const services = {
  eyebrow: 'What we do',
  heading: 'Towing and roadside help, done right',
  intro:
    'We offer a comprehensive range of flatbed towing for auto and light trucks. Tap any service for the details.',
  items: [
    {
      slug: 'flatbed-towing',
      icon: 'flatbed',
      title: 'Flatbed Towing',
      summary: 'Autos and light trucks, carried — never dragged.',
      detail:
        'Flatbed towing for autos and light trucks. Your vehicle rides fully on the deck, so the drivetrain and bodywork stay off the road — the safest way to move a car that has been in an accident, has all-wheel drive, sits low, or simply will not roll. Our team of experienced professionals is equipped with the latest tools and equipment to get you back on the road quickly and safely.',
      bullets: [
        'Cars, SUVs and light trucks',
        'Accident and breakdown recovery',
        'Low-clearance and AWD friendly',
        'Secured with straps and chains for the whole ride',
      ],
    },
    {
      slug: 'roadside-assistance',
      icon: 'roadside',
      title: 'Roadside Assistance',
      summary: 'Jump-starts, tire changes, lockouts and fuel delivery.',
      detail:
        'Not every problem needs a tow. If a jump, a spare, a fuel can or a door unlock will get you moving again, that is what we will do — and you are back on your way in minutes instead of waiting on a tow yard.',
      bullets: [
        'Jump-starts',
        'Tire changes',
        'Lockouts',
        'Fuel delivery',
      ],
    },
    {
      slug: 'long-distance-towing',
      icon: 'distance',
      title: 'Long-Distance Towing',
      summary: 'Local to long distance — we will take it the whole way.',
      detail:
        'Local to long distance towing is offered as well. Whether it is three miles to your mechanic in Haddon Township or a run well outside the county, we quote the trip up front and haul it on the flatbed the entire way.',
      bullets: [
        'Across Camden County and beyond',
        'Out-of-area and interstate runs',
        'Quoted before we roll',
      ],
    },
    {
      slug: 'equipment-transport',
      icon: 'equipment',
      title: 'Light Equipment Transport & Hauling',
      summary: 'Small machines and equipment moved on the deck.',
      detail:
        'Light equipment transportation and hauling can be arranged as well. If it fits safely on a flatbed and is within our weight range, give us a call with the dimensions and we will tell you straight whether we can move it.',
      bullets: [
        'Light equipment and small machinery',
        'Loading and tie-down handled by our operator',
        `Weight and size limits — ask when you call ${CONFIRM}`,
      ],
    },
  ],
  footnote: `We are a flatbed operation for autos and light trucks. We do not advertise heavy-duty or semi towing — if you are not sure whether your vehicle fits, call and ask. ${CONFIRM}`,
} as const;

/* ------------------------------------------------------------------ */
/* Coverage                                                            */
/* ------------------------------------------------------------------ */

export const coverage = {
  eyebrow: 'Coverage area',
  heading: 'Where we tow',
  intro:
    "TK's proudly provides towing services to all of Camden County, and parts of Burlington and Gloucester County. Local to long distance towing is offered as well.",
  primaryLabel: 'Camden County',
  primaryNote: 'Full coverage — every town, every hour',
  regions: [
    {
      name: 'Camden County',
      status: 'Full coverage',
      note: 'Our home county. Fastest dispatch, all 37 municipalities.',
      towns: [
        'Haddon Township',
        'Haddonfield',
        'Collingswood',
        'Cherry Hill',
        'Camden',
        'Pennsauken',
        'Gloucester Township',
        'Voorhees',
        'Bellmawr',
        'Audubon',
        'Oaklyn',
        'Barrington',
        'Haddon Heights',
        'Westmont',
        'Merchantville',
        'Runnemede',
        'Mount Ephraim',
        'Lindenwold',
        'Berlin',
        'Sicklerville',
      ],
      townsNote: `Town list is representative — confirm the full municipality list before launch. ${CONFIRM}`,
    },
    {
      name: 'Burlington County',
      status: 'Partial coverage',
      note: 'We regularly run into the western and southern parts of the county. Call with your location and we will tell you straight away.',
      towns: [`Specific Burlington County towns ${CONFIRM}`],
      townsNote: '',
    },
    {
      name: 'Gloucester County',
      status: 'Partial coverage',
      note: 'Same story on the Gloucester side — much of the county is well within our range.',
      towns: [`Specific Gloucester County towns ${CONFIRM}`],
      townsNote: '',
    },
  ],
  outsideHeading: 'Outside the area?',
  outsideBody:
    'Long-distance runs are part of what we do. If the pickup or the drop-off is outside South Jersey, call and we will quote the trip.',
  mapPlaceholder: 'PLACEHOLDER — COVERAGE MAP (Camden County highlighted)',
} as const;

/* ------------------------------------------------------------------ */
/* Story — the signature section                                       */
/* ------------------------------------------------------------------ */

export const story = {
  eyebrow: 'The TK’s story',
  heading: 'A local who protects and serves — on the job and off it',
  paragraphs: [
    "TK's Towing started in 1996 in Haddon Township, New Jersey. Same family, same town, same phone number ever since — going on thirty years of answering calls from neighbors who are having a bad day.",
    'In 2009 the owner joined the Haddon Township Fire Department, and he has served the community as a volunteer firefighter ever since. It is the same instinct that built the towing company: when the call comes in, you go.',
    'That is who shows up when you call. Not a dispatch center three states away — a local operator who lives here, works here, and answers to his neighbors.',
  ],
  pullQuote:
    'When the call comes in, you go. That has not changed since 1996.',
  pullQuoteAttribution: `Owner, TK's Towing · Haddon Township Fire Department volunteer since 2009`,
  facts: [
    { label: 'Founded', value: '1996' },
    { label: 'Home base', value: 'Haddon Township, NJ' },
    { label: 'Ownership', value: 'Family owned & operated' },
    { label: 'Community', value: 'HTFD volunteer firefighter since 2009' },
  ],
  ownerImageAlt:
    'PLACEHOLDER — OWNER PHOTO (in turnout gear or beside the truck)',
  ownerImageCaption: 'PLACEHOLDER — OWNER PHOTO',
  secondaryImageCaption: 'PLACEHOLDER — HTFD / COMMUNITY PHOTO',
} as const;

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */

export const whyUs = {
  eyebrow: 'Why TK’s',
  heading: 'Six reasons people keep our number saved',
  intro:
    'At TKS Towing, our mission is to provide fast, safe, and reliable towing services to our customers. We understand the inconvenience and stress that comes with a vehicle breakdown, and we are committed to making the towing experience as smooth and hassle-free as possible.',
  items: [
    {
      title: '24/7 — and we mean it',
      body: 'Open 24 hours a day, 7 days a week, all year. Our 24/7 staff is here when you need us. Two in the morning on a holiday is still a normal call for us.',
    },
    {
      title: 'Since 1996',
      body: 'Nearly thirty years of South Jersey roads, weather and traffic. There is very little we have not already seen.',
    },
    {
      title: 'Family owned & local',
      body: 'Family owned and operated for over 25 years, out of Haddon Township. You are talking to the people who own the trucks.',
    },
    {
      title: 'Fast dispatch',
      body: 'We are based in the middle of our coverage area, which is why Camden County calls get a truck moving quickly.',
    },
    {
      title: 'Careful flatbed handling',
      body: 'Your vehicle rides on the deck, strapped and chained, off its own wheels. That is how it stays in the condition you left it in.',
    },
    {
      title: 'Honest pricing',
      body: 'You get the price before the truck rolls. No surprise line items when it is time to settle up.',
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const process = {
  eyebrow: 'How it works',
  heading: 'Four steps, one phone call',
  intro: 'Tap any step to see exactly what happens.',
  steps: [
    {
      title: 'Call us',
      summary: 'One number, any hour.',
      detail:
        'Call (856) 854-9889. Tell us where you are, what you are driving, and what happened. If you are somewhere unsafe — a shoulder, a travel lane, a dark road — say so first and stay in a safe spot while we get moving.',
    },
    {
      title: 'We dispatch fast',
      summary: 'A truck starts rolling from Haddon Township.',
      detail:
        'We confirm the price and send the nearest available flatbed. You get told what to expect rather than left guessing.',
    },
    {
      title: 'Safe flatbed pickup',
      summary: 'Winched on, strapped down, secured.',
      detail:
        'Our operator loads your vehicle onto the deck, secures it with straps and chains, and double-checks it before moving. Nothing drags, nothing scrapes.',
    },
    {
      title: 'Delivered where you need',
      summary: 'Your shop, your driveway, or across the state.',
      detail:
        'We drop at your mechanic, your home, a dealership, or wherever the vehicle is headed — local or long distance. Unloaded as carefully as it went on.',
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export const gallery = {
  eyebrow: 'On the road',
  heading: 'The work',
  intro:
    'Placeholder imagery below — real TK’s photos of the trucks, jobs and fire department involvement drop straight into these slots.',
  captions: {
    a: 'PLACEHOLDER — FLATBED WITH VEHICLE LOADED',
    b: 'PLACEHOLDER — TIE-DOWNS / SECURED LOAD DETAIL',
    c: 'PLACEHOLDER — OPERATOR ON A JOB',
    d: 'PLACEHOLDER — TRUCK ON THE ROAD',
    e: 'PLACEHOLDER — NIGHT / AFTER-HOURS CALL',
    f: 'PLACEHOLDER — COMMUNITY / FIRE DEPARTMENT',
  },
} as const;

/* ------------------------------------------------------------------ */
/* Emergency CTA band                                                  */
/* ------------------------------------------------------------------ */

export const emergency = {
  eyebrow: 'Need a truck right now?',
  heading: "Stranded? We'll come to you.",
  body: 'Open 24 hours a day, 7 days a week, all year. One call gets a flatbed moving your way.',
  cta: `Call ${business.phone}`,
  note: 'If you are in a travel lane or an unsafe spot, call 911 first.',
} as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = {
  eyebrow: 'Questions',
  heading: 'Answers before you call',
  items: [
    {
      q: 'Are you really available 24/7?',
      a: 'Yes. We are open 24 hours a day, 7 days a week, all year. Our 24/7 staff is here when you need us — nights, weekends and holidays included.',
    },
    {
      q: 'What areas do you cover?',
      a: "TK's proudly provides towing services to all of Camden County, and parts of Burlington and Gloucester County. Local to long distance towing is offered as well, so if your pickup or drop-off falls outside that area, call and we will quote it.",
    },
    {
      q: 'What kinds of vehicles do you tow?',
      a: `We offer flatbed towing for autos and light trucks — cars, SUVs, vans and light pickups. If you are unsure whether your vehicle fits, call with the year, make and model and we will tell you straight. We do not advertise heavy-duty or commercial semi towing. ${CONFIRM}`,
    },
    {
      q: 'Do you do roadside assistance, or only towing?',
      a: 'Both. Roadside assistance services include jump-starts, tire changes, lockouts and fuel delivery. If a quick fix on the spot will get you moving, that is cheaper and faster than a tow and it is what we will do.',
    },
    {
      q: 'Do you do long-distance tows?',
      a: 'Yes. Local to long distance towing is offered. Long runs are quoted up front so you know the number before the truck leaves.',
    },
    {
      q: 'How fast can you get to me?',
      a: `It depends on where you are, the time of day and how many trucks are out. We are based in Haddon Township, in the middle of our coverage area, so most Camden County calls are reached quickly. When you call, we will give you a realistic time rather than a number that sounds good. ${CONFIRM} — add a typical response-time range if the client wants one published.`,
    },
    {
      q: 'How much does a tow cost?',
      a: `Price depends on distance, vehicle and what the recovery involves — a driveway pickup is not the same job as pulling a car off a shoulder. Call with your location and destination and you will get a price before we dispatch. ${CONFIRM} — publish base rates or a starting price if the client wants them on the site.`,
    },
    {
      q: 'Do you handle accident and police-called tows?',
      a: `${CONFIRM} — confirm whether TK's is on a police rotation list and whether accident-scene recovery is offered before publishing an answer here.`,
    },
    {
      q: 'Are you licensed and insured?',
      a: `${CONFIRM} — confirm licensing and insurance details with the client before this goes live.`,
    },
    {
      q: 'How do I pay?',
      a: `${CONFIRM} — confirm accepted payment methods (cash, card, insurance or motor club direct billing) before publishing.`,
    },
    {
      q: 'Will my car get damaged on the tow?',
      a: 'That is exactly why we run flatbeds. Your vehicle rides fully on the deck rather than being dragged on its own wheels, secured with straps and chains for the whole trip — the safest way to move a damaged, low or all-wheel-drive vehicle.',
    },
    {
      q: 'Who actually shows up?',
      a: "A local operator from a family owned company that has worked out of Haddon Township since 1996 — not a national dispatch app subcontracting your call to a stranger. The owner has also served on the Haddon Township Fire Department as a volunteer firefighter since 2009.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  eyebrow: "We're here for you!",
  heading: 'Call now — or send a quote request',
  intro: 'Our 24/7 staff is here when you need us.',
  callHeading: 'Fastest way to reach us',
  callNote: 'Tap to call. Someone answers, any hour.',
  form: {
    heading: 'Request a quote',
    note: 'For non-urgent quotes and equipment transport questions. If you need a truck now, call instead.',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone (optional)',
      message: 'How can we help?',
      messagePlaceholder:
        'Vehicle, pickup location, destination — whatever you can tell us.',
      files: 'Attach files (optional)',
      filesNote: 'Photos of the vehicle or the equipment help us quote faster.',
    },
    submit: 'Send request',
    disclaimer: `Form delivery is not wired up yet — connect it to the client’s inbox before launch. ${CONFIRM}`,
  },
  detailsHeading: 'Where to find us',
  hoursHeading: 'Hours',
  socialHeading: 'Follow along',
  mapPlaceholder: 'PLACEHOLDER — GOOGLE MAP EMBED (208 W Cuthbert Blvd)',
} as const;

/* ------------------------------------------------------------------ */
/* Final CTA + footer                                                  */
/* ------------------------------------------------------------------ */

export const finalCta = {
  heading: '24/7 towing you can count on.',
  sub: 'Call now.',
  cta: `Call ${business.phone}`,
} as const;

export const footer = {
  logoPlaceholder: "TK'S TOWING LOGO",
  tagline: 'Flatbed towing & roadside assistance for South Jersey.',
  meta: 'Since 1996 · Haddon Township, NJ',
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'Flatbed Towing', href: '#services' },
        { label: 'Roadside Assistance', href: '#services' },
        { label: 'Long-Distance Towing', href: '#services' },
        { label: 'Light Equipment Transport', href: '#services' },
      ],
    },
    {
      heading: 'Coverage Area',
      links: [
        { label: 'Camden County', href: '#coverage' },
        { label: 'Burlington County', href: '#coverage' },
        { label: 'Gloucester County', href: '#coverage' },
        { label: 'Long distance', href: '#coverage' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Our Story', href: '#story' },
        { label: 'Why TK’s', href: '#why' },
        { label: 'How It Works', href: '#process' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
  ],
  contactHeading: 'Contact',
  copyright: `© ${new Date().getFullYear()} TK's Towing. All rights reserved.`,
  credit: 'Site by Lockard Design Co.',
  creditHref: 'https://lockard.co',
} as const;
