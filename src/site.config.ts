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

/**
 * PRE-LAUNCH CHECKLIST — outstanding items needing the client's confirmation.
 *
 * These used to sit inline as visible `[CONFIRM]` strings, but they were
 * showing on the live preview (Will's QC, Aug 2026), so the placeholder copy
 * was removed from the rendered pages and the open questions moved here.
 *
 * Nothing below renders. Grep this list before launch.
 *
 *  1. Review rating — `trustBar.reviewNote` is blank. Get the real Google /
 *     Yelp / Facebook rating before publishing any "Rated X" claim.
 *  2. Google reviews link — removed from `trustBar.reviewLinks`; it had no URL.
 *  3. Burlington + Gloucester town lists — `coverage.regions[1..2].towns` are
 *     empty. Get the actual towns covered.
 *  4. Camden town list — `coverage.regions[0].towns` is representative only;
 *     confirm the full municipality list.
 *  5. Accident / police-rotation tows — FAQ entry removed; confirm whether
 *     TK's is on a police rotation list and offers accident-scene recovery.
 *  6. Licensing & insurance — FAQ entry removed pending real details.
 *  7. Payment methods — FAQ entry removed pending the accepted methods.
 *  8. Typical response time — no range published; add one if the client wants.
 *  9. Pricing — no rates published; add a base/starting price if wanted.
 * 10. Email address — `business.email` is a guess at info@tkstowing.biz.
 * 11. Contact form delivery — posts nowhere. Wire it to the client's inbox.
 * 12. Equipment weight/size limits — `services.items[3].bullets` says to ask
 *     when you call; replace with the real limits if the client has them.
 */

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
  email: 'info@tkstowing.biz',
  emailHref: 'mailto:info@tkstowing.biz',
  address: {
    street: '208 W Cuthbert Blvd',
    city: 'Haddon Township',
    state: 'NJ',
    zip: '08108',
    full: '208 W Cuthbert Blvd, Haddon Township, NJ 08108',
  },
  hours: 'Open 24 hours a day, 7 days a week, all year',
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
  title: "TK's Towing | 24/7 Flatbed Towing & Roadside Assistance in South Jersey",
  description:
    "Family owned flatbed towing and roadside assistance in Haddon Township, NJ since 1996. Serving all of Camden County plus parts of Burlington and Gloucester. Open 24/7. Call (856) 854-9889.",
} as const;


/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: 'Haddon Township, NJ · Since 1996',
  heading: 'Fast, reliable towing across South Jersey, 24/7',
  sub: 'Flatbed towing and roadside assistance from a family owned crew that has been answering the phone in Camden County for nearly 30 years. Call at any hour and someone picks up.',
  primaryCta: `Call ${business.phone}`,
  secondaryCta: 'Our services',
  secondaryCtaHref: '#services',
  trustLine: [
    'Since 1996',
    'Family owned',
    'Open 24/7',
    'Camden, Burlington & Gloucester',
  ],
  imageAlt: "TK's Towing flatbed truck",
  imageCaption: '',

  // Left utility rail (vintage framed shell)
  rail: {
    vertical: 'Haddon Township, NJ · Family Owned Since 1996',
  },

  // Ken Burns slideshow — captions per frame. Images are wired in Hero.astro.
  // Kicker sits above each service label. Real TK's work, no invented claims.
  slideshow: {
    kicker: 'On the job',
    slides: [
      {
        label: 'Flatbed Towing',
        alt: "TK's Towing flatbed truck, cab and empty deck, parked in the garage",
      },
      {
        label: 'Auto & Light-Truck Towing',
        alt: "A blue Porsche 911 secured on the TK's Towing flatbed",
      },
      {
        label: 'Roadside Assistance',
        alt: "A sedan loaded on the TK's flatbed on the highway shoulder",
      },
      {
        label: 'Long-Distance Towing',
        alt: "The TK's Towing flatbed loaded and on the road at dusk",
      },
      {
        label: 'Recovery & Hauling',
        alt: "Large medical equipment strapped to the TK's flatbed at night under the truck's work lights",
      },
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
/* Intro / About (sits directly under the hero)                        */
/* ------------------------------------------------------------------ */

export const intro = {
  eyebrow: 'Who we are',
  heading: 'The local flatbed crew South Jersey has trusted since 1996',
  lead: 'Our job is simple: get to you fast and move your vehicle safely.',
  body: 'A breakdown is stressful enough on its own, so we keep the tow itself easy. Family owned and operated for over 25 years, right here in Haddon Township. When you call, you are talking to the people who own the trucks.',
  seal: {
    ring: "TK’S TOWING · EST. 1996 · HADDON TOWNSHIP NJ · ",
    centerTop: 'Since',
    centerBig: '1996',
    centerBottom: 'Family Owned',
  },
  pillars: [
    {
      icon: 'shield',
      title: 'Family owned & operated',
      text: 'Nearly 30 years, same family, same town.',
    },
    {
      icon: 'clock',
      title: 'Open 24/7, 365',
      text: 'Someone answers, even on holidays.',
    },
    {
      icon: 'flatbed',
      title: 'Flatbed towing',
      text: 'Your car rides on the deck, never dragged.',
    },
    {
      icon: 'pin',
      title: 'Local & fast',
      text: 'Based in the middle of Camden County.',
    },
  ],
  primaryCta: 'Read our story',
  primaryHref: '#story',
  secondaryCta: `Call ${business.phone}`,
  imageAlt:
    'A volunteer firefighter in full turnout gear kneeling after a call, the community service roots behind TK’s Towing',
  imageKicker: 'On & off the job',
  imageCaption: 'HTFD volunteer firefighter since 2009',
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
  reviewNote: '',
  reviewLinks: [
    { label: 'Facebook', href: 'https://facebook.com/tkstowingservice' },
    {
      label: 'Yelp',
      href: 'https://www.yelp.com/biz/tks-towing-service-haddon-township',
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const services = {
  eyebrow: 'What we do',
  heading: 'Flatbed towing and roadside help',
  intro:
    'Flatbed towing for autos and light trucks, plus roadside help when you do not need a tow. Tap any service for the details.',
  items: [
    {
      slug: 'flatbed-towing',
      imageAlt: "A black Audi sports car secured on the TK's Towing flatbed",
      icon: 'flatbed',
      title: 'Flatbed Towing',
      summary: 'Autos and light trucks, carried on the deck instead of dragged.',
      detail:
        'Flatbed towing for autos and light trucks. Your vehicle rides fully on the deck, so the drivetrain and bodywork stay off the road. That is the safest way to move a car that has been in an accident, has all-wheel drive, sits low, or just will not roll. The driver who shows up has done this for years and brings the right equipment to load your car safely.',
      bullets: [
        'Cars, SUVs and light trucks',
        'Accident and breakdown recovery',
        'Low-clearance and AWD friendly',
        'Secured with straps and chains for the whole ride',
      ],
    },
    {
      slug: 'roadside-assistance',
      imageAlt: "A sedan loaded on the TK's flatbed on the highway shoulder",
      icon: 'roadside',
      title: 'Roadside Assistance',
      summary: 'Jump-starts, tire changes, lockouts and fuel delivery.',
      detail:
        'Not every problem needs a tow. If a jump, a spare, a fuel can or a door unlock will get you moving again, that is what we will do, and you are back on your way in minutes instead of waiting on a tow yard.',
      bullets: [
        'Jump-starts',
        'Tire changes',
        'Lockouts',
        'Fuel delivery',
      ],
    },
    {
      slug: 'long-distance-towing',
      imageAlt: "The TK's Towing flatbed loaded and on the road at dusk",
      icon: 'distance',
      title: 'Long-Distance Towing',
      summary: 'Local or long distance, we take it the whole way.',
      detail:
        'We run local and long distance tows. Three miles to your mechanic in Haddon Township or a trip well past the county line, either way we quote it up front and your vehicle rides the flatbed the entire way.',
      bullets: [
        'Across Camden County and beyond',
        'Out-of-area and interstate runs',
        'Quoted before we roll',
      ],
    },
    {
      slug: 'equipment-transport',
      imageAlt: "A forklift loaded on the TK's Towing flatbed at a loading dock",
      icon: 'equipment',
      title: 'Light Equipment Transport & Hauling',
      summary: 'Small machines and equipment moved on the deck.',
      detail:
        'We also haul light equipment. If it fits safely on a flatbed and is within our weight range, call with the dimensions and we will tell you straight whether we can move it.',
      bullets: [
        'Light equipment and small machinery',
        'Loading and tie-down handled by our operator',
        'Weight and size limits: ask when you call',
      ],
    },
  ],
  footnote: `We are a flatbed operation for autos and light trucks. We do not advertise heavy-duty or semi towing. If you are not sure whether your vehicle fits, call and ask.`,
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

/* Every menu entry is now its own page — no homepage anchors left in the nav.
   The homepage keeps the same sections; these are the expanded versions.
   Home leads so the hero topnav's `is-active` first item is right on the
   homepage. */
export const nav = {
  links: [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      /* Drops down to the individual service pages. Derived from services.items
         so a new service appears in the menu automatically. */
      children: services.items.map((service) => ({
        label: service.title,
        href: `/services/${service.slug}/`,
        icon: service.icon,
      })),
    },
    { label: 'Service Areas', href: '/service-areas' },
    /* Replaces the old '/#story' anchor: /about is that story, expanded. */
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ],
  callCta: `Call ${business.phone}`,
  callCtaShort: 'Call Now',
} as const;

/* ------------------------------------------------------------------ */
/* Services page (/services)                                           */
/* ------------------------------------------------------------------ */

/* The homepage `services` block, given its own page. Nothing new is claimed
   here: hero and section copy are `services` verbatim, and each service keeps
   its own detail and bullets. `items` carry the slugs the homepage cards and
   the footer link to as /services#slug. */
export const servicesPage = {
  meta: {
    title: "Towing Services | Flatbed, Roadside & Long-Distance | TK's Towing",
    description:
      'Flatbed towing, roadside assistance, long-distance towing and light equipment hauling from a family owned crew in Haddon Township, NJ. Open 24/7. Call (856) 854-9889.',
  },

  hero: {
    eyebrow: services.eyebrow,
    heading: services.heading,
    lead: services.intro,
    /* Masthead furniture. All reused: the rail is the homepage hero's rail
       text, the meta note is `business.hoursShort`, and the crumb labels are
       the nav labels. Nothing here is a new claim. */
    railText: hero.rail.vertical,
    meta: business.hoursShort,
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services' }],
  },

  /* Label above each service's expanded detail — the wording the homepage
     service cards already use. */
  detailLabel: 'What’s included',

  items: services.items,
  footnote: services.footnote,

  primaryCta: `Call ${business.phone}`,
  secondaryCta: 'Service areas',
  secondaryCtaHref: '/service-areas',
} as const;

/* ------------------------------------------------------------------ */
/* Individual service pages (/services/[slug])                          */
/* ------------------------------------------------------------------ */

/**
 * Chrome for the per-service pages. Every service's own words —title, summary,
 * detail, bullets — come straight from `services.items`; this block only holds
 * the labels around them.
 *
 * Meta titles and descriptions are composed per service in the route from
 * those same fields, so no page carries hand-written marketing copy.
 */
export const servicePage = {
  /* Breadcrumb: Home / Services / <service title> */
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
  ],

  detailLabel: servicesPage.detailLabel,

  /* The overview section had no heading of its own — it opened straight on a
     paragraph. Eyebrow is `services.eyebrow`; the heading is composed per
     service in the component as "<title> in detail". */
  overviewHeadingSuffix: 'in detail',

  /* Closing pair at the end of the service content. Both labels are wording
     already used elsewhere on the site. */
  closing: {
    heading: 'Need this now?',
    body: business.staffLine,
    primaryCta: `Call ${business.phone}`,
    secondaryCta: 'Request a quote',
    secondaryHref: '/contact',
  },

  /* Heading over the cross-links to the other three services. */
  relatedHeading: 'Other services',
  relatedCta: 'View service',

  /* Real facts, reused verbatim from the homepage hero's proof strip. */
  facts: hero.proof,

  /* The overview band closes on two CTAs instead of repeating the bullet list
     — the list is the whole subject of the `includes` section below, and
     printing it twice on one page made the band read as a duplicate. The
     secondary CTA anchors to that section. */
  overview: {
    primaryCta: `Call ${business.phone}`,
    secondaryCta: servicesPage.detailLabel,
    secondaryHref: '#included',

    /* Fills the copy column so it runs level with the photo beside it, and
       gives the band something to say between the detail paragraph and the
       buttons. Deliberately NOT the service's own bullets — those are the
       subject of the `includes` section below and printing them twice is what
       made this band read as a duplicate in the first place.

       `intro.pillars` verbatim: the four points the homepage already makes
       about the business, which are true of every service. */
    pointsHeading: 'Every job, every time',
    points: intro.pillars,
  },

  /* --- Deep-detail sections below the overview ---------------------- */

  /* Each service's own bullets, broken out one per card. The bullets are
     `services.items[].bullets` verbatim — this section only changes how they
     are presented, from a list to a grid. Icons cycle through the set below;
     an icon is a label, not a claim. */
  includes: {
    eyebrow: 'In detail',
    heading: 'What this service covers',
    intro:
      'Every point below is part of the job, so nothing gets tacked onto the quote after the truck arrives.',
    icons: ['check', 'flatbed', 'shield', 'clock', 'pin', 'tag'],
  },

  /* Photos of this service, pulled from the gallery by category. The mapping is
     descriptive: a car on the deck illustrates flatbed towing. Slugs key into
     `galleryPage.categories`. */
  work: {
    eyebrow: 'On the job',
    heading: 'Recent work',
    cta: 'See the full gallery',
    ctaHref: '/gallery',
    /* service slug -> gallery category key */
    categoryBySlug: {
      'flatbed-towing': 'cars',
      'roadside-assistance': 'roadside',
      'long-distance-towing': 'roadside',
      'equipment-transport': 'equipment',
    } as Record<string, string>,
  },

  /* Where this service runs. The component reads `coverage` directly for the
     region names, statuses, notes and intro — all verbatim. It cannot be
     referenced here: `coverage` is declared further down this file, so reading
     it from this object literal would hit the temporal dead zone at import. */
  areas: {
    heading: 'Where we run this service',
    cta: 'All service areas',
    ctaHref: '/service-areas',
  },

  primaryCta: `Call ${business.phone}`,
  secondaryCta: 'All services',
  secondaryCtaHref: '/services',

  /* Masthead furniture, matching the other inner pages. */
  railText: hero.rail.vertical,
  meta: business.hoursShort,
} as const;

/* ------------------------------------------------------------------ */
/* Coverage                                                            */
/* ------------------------------------------------------------------ */

export const coverage = {
  eyebrow: 'Coverage area',
  heading: 'Where we tow',
  intro:
    "We tow across all of Camden County and into parts of Burlington and Gloucester County, local and long distance both.",
  primaryLabel: 'Camden County',
  primaryNote: 'Full coverage, every town, every hour',
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
      townsNote: '',
    },
    {
      name: 'Burlington County',
      status: 'Partial coverage',
      note: 'We regularly run into the western and southern parts of the county. Call with your location and we will tell you straight away.',
      towns: [],
      townsNote: '',
    },
    {
      name: 'Gloucester County',
      status: 'Partial coverage',
      note: 'Same story on the Gloucester side. Much of the county is well within our range.',
      towns: [],
      townsNote: '',
    },
  ],
  outsideHeading: 'Outside the area?',
  outsideBody:
    'Long-distance runs are part of what we do. If the pickup or the drop-off is outside South Jersey, call and we will quote the trip.',
  mapPlaceholder: 'PLACEHOLDER — COVERAGE MAP (Camden County highlighted)',
} as const;

/* ------------------------------------------------------------------ */
/* Coverage page (/coverage)                                           */
/* ------------------------------------------------------------------ */

/* The homepage coverage section given its own page. Hero copy is `coverage`
   verbatim; the map and region cards below it are the same component. */
export const coveragePage = {
  meta: {
    title: "Service Areas | Camden County & South Jersey Towing | TK's Towing",
    description:
      'Where TK’s Towing tows: all of Camden County plus parts of Burlington and Gloucester. Local to long distance, open 24/7. Call (856) 854-9889.',
  },

  /* The section heading ("Where we tow") works inside the page but is thin as
     an h1 — it names no place. This one carries the county and the region, both
     of which `coverage.intro` already asserts, so it restates confirmed copy
     rather than claiming anything new. Same for the points: every one is a
     region name and status straight out of `coverage.regions`. */
  hero: {
    eyebrow: coverage.eyebrow,
    heading: 'Towing service areas across Camden County & South Jersey',
    lead: coverage.intro,
    body: coverage.outsideBody,
    points: [
      `${coverage.regions[0].name} · ${coverage.regions[0].status}`,
      `${coverage.regions[1].name} · ${coverage.regions[1].status}`,
      `${coverage.regions[2].name} · ${coverage.regions[2].status}`,
      `${business.hoursShort} · ${business.address.city}, ${business.address.state}`,
    ],
    railText: hero.rail.vertical,
    meta: business.hoursShort,
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Service Areas' }],
  },

  /* Full town index, listed once per county. The town names, the statuses and
     the [CONFIRM] note are all `coverage.regions` verbatim — only the two
     labels below are new, and they are navigational, not claims. */
  towns: {
    eyebrow: 'Towns we cover',
    heading: 'Areas we serve',
    regions: coverage.regions,
  },

  /* Icon strips for the page. No new copy: the three proof items are
     `hero.proof` and the four boxes are `intro.pillars`, both verbatim from the
     homepage. Only the icon names are chosen here, and an icon is not a claim. */
  highlights: {
    proof: [
      { ...hero.proof[0], icon: 'medal' },
      { ...hero.proof[1], icon: 'clock' },
      { ...hero.proof[2], icon: 'map' },
    ],
    pillars: intro.pillars,
  },

  /* What we run across the area — the homepage service list, as icon boxes that
     hand off to the matching block on /services. Copy is `services` verbatim. */
  services: {
    eyebrow: services.eyebrow,
    heading: services.heading,
    intro: services.intro,
    items: services.items,
  },

  primaryCta: `Call ${business.phone}`,
  secondaryCta: 'Our services',
  secondaryCtaHref: '/services',
} as const;

/* ------------------------------------------------------------------ */
/* Story — the signature section                                       */
/* ------------------------------------------------------------------ */

export const story = {
  eyebrow: 'The TK’s story',
  heading: 'A local who protects and serves, on the job and off it',
  paragraphs: [
    "TK's Towing started in 1996 in Haddon Township, New Jersey. Same family, same town, same phone number ever since. That is going on thirty years of answering calls from neighbors having a bad day.",
    'In 2009 the owner joined the Haddon Township Fire Department, and he has served the community as a volunteer firefighter ever since. It is the same instinct that built the towing company: when the call comes in, you go.',
    'That is who shows up when you call: a local operator who lives here, works here, and answers to his neighbors, not a dispatch center three states away.',
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
  ownerImageAlt: "The owners of TK's Towing",
  ownerImageCaption: '',
  secondaryImageAlt:
    'A volunteer firefighter in turnout gear with an air pack, kneeling after a call',
  secondaryImageCaption: '',
} as const;

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */

export const whyUs = {
  eyebrow: 'Why TK’s',
  heading: 'Six reasons people keep our number saved',
  intro:
    'A breakdown is stressful enough on its own. Our job is to get to you fast, handle your vehicle carefully, and keep everything else simple.',
  items: [
    {
      title: '24/7, and we mean it',
      icon: 'clock',
      body: 'Open 24 hours a day, 7 days a week, all year. Our 24/7 staff is here when you need us. Two in the morning on a holiday is still a normal call for us.',
    },
    {
      title: 'Since 1996',
      icon: 'medal',
      body: 'Nearly thirty years of South Jersey roads, weather and traffic. There is very little we have not already seen.',
    },
    {
      title: 'Family owned & local',
      icon: 'home',
      body: 'Family owned and operated for over 25 years, out of Haddon Township. You are talking to the people who own the trucks.',
    },
    {
      title: 'Fast dispatch',
      icon: 'bolt',
      body: 'We are based in the middle of our coverage area, which is why Camden County calls get a truck moving quickly.',
    },
    {
      title: 'Careful flatbed handling',
      icon: 'flatbed',
      body: 'Your vehicle rides on the deck, strapped and chained, off its own wheels. That is how it stays in the condition you left it in.',
    },
    {
      title: 'Honest pricing',
      icon: 'tag',
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
  intro:
    'Here is exactly what happens, from the moment you call to the moment your vehicle is back on the ground.',
  steps: [
    {
      title: 'Call us',
      icon: 'phone',
      summary: 'One number, any hour.',
      detail:
        'Call (856) 854-9889. Tell us where you are, what you are driving, and what happened. If you are somewhere unsafe, like a shoulder, a travel lane or a dark road, say so first and stay in a safe spot while we get moving.',
    },
    {
      title: 'We dispatch fast',
      icon: 'clock',
      summary: 'A truck starts rolling from Haddon Township.',
      detail:
        'We confirm the price and send the nearest available flatbed. We tell you what to expect instead of leaving you guessing.',
    },
    {
      title: 'Safe flatbed pickup',
      icon: 'flatbed',
      summary: 'Winched on, strapped down, secured.',
      detail:
        'Our operator loads your vehicle onto the deck, secures it with straps and chains, and double-checks it before moving. Nothing drags, nothing scrapes.',
    },
    {
      title: 'Delivered where you need',
      icon: 'pin',
      summary: 'Your shop, your driveway, or across the state.',
      detail:
        'We drop at your mechanic, your home, a dealership, or wherever the vehicle is headed, local or long distance. It comes off the deck as carefully as it went on.',
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
    'Recent work off the TK’s flatbeds: classics, daily drivers and equipment hauls across South Jersey.',
  // Used as alt text on the gallery tiles.
  captions: {
    a: 'A classic Ford Mustang loaded on the flatbed',
    b: 'An Aston Martin secured on the flatbed',
    c: 'A concession trailer loaded on the flatbed',
    d: 'A Chevrolet Corvette loaded on the flatbed',
    e: 'A night job at a hospital loading dock, truck lights on',
    f: 'A fire scene with hose lines run from the engine',
  },
} as const;

/* ------------------------------------------------------------------ */
/* Gallery page (/gallery)                                             */
/* ------------------------------------------------------------------ */

/* The homepage gallery given its own page. Hero copy is `gallery` verbatim. */
export const galleryPage = {
  meta: {
    title: "Gallery | Recent Flatbed Towing Jobs | TK's Towing, Haddon Township NJ",
    description:
      'Recent work off the TK’s Towing flatbeds: classics, daily drivers and equipment hauls across South Jersey.',
  },

  /* "The work" is a fine section head and a poor h1 — it names neither the
     service nor the place. This one does both, using only wording already in
     `services` and `coverage`. Points restate `hero.proof`. */
  hero: {
    eyebrow: gallery.eyebrow,
    heading: 'Recent flatbed towing jobs across South Jersey',
    lead: gallery.intro,
    points: [
      `${hero.proof[0].value} · ${hero.proof[0].note}`,
      `${hero.proof[1].value} · ${hero.proof[1].note}`,
      `${hero.proof[2].value} · ${hero.proof[2].note}`,
      `${business.address.city}, ${business.address.state}`,
    ],
    railText: hero.rail.vertical,
    meta: business.hoursShort,
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Gallery' }],
  },

  /* Filter tabs. Every label describes what is visible in the photos it holds
     — a Corvette on the deck is a car on the deck — so no category asserts
     anything about the job that is not in the frame. Deliberately NOT named
     after the services: a loaded flatbed at dusk cannot be shown to have been a
     long-distance run, and the photo would be filed under a claim.
     `all` is the default tab; `key` is matched against each item's `category`. */
  categories: [
    { key: 'all', label: 'All work' },
    { key: 'cars', label: 'Cars & sports cars', icon: 'flatbed' },
    { key: 'trucks', label: 'SUVs & light trucks', icon: 'roadside' },
    { key: 'equipment', label: 'Equipment & hauling', icon: 'equipment' },
    { key: 'roadside', label: 'On the road', icon: 'distance' },
  ],

  /* One entry per photo. `src` is the key the component maps to an import;
     images live in src/assets. Alt text is either reused verbatim from
     `gallery.captions` / `services.items[].imageAlt` / `hero.slideshow`, or —
     for the four photos not previously on the site — written to describe only
     what is in the frame. */
  items: [
    { src: 'mustang', category: 'cars', alt: gallery.captions.a },
    { src: 'aston', category: 'cars', alt: gallery.captions.b },
    { src: 'corvette', category: 'cars', alt: gallery.captions.d },
    {
      src: 'porsche',
      category: 'cars',
      alt: "A blue Porsche 911 secured on the TK's Towing flatbed",
    },
    {
      src: 'audi',
      category: 'cars',
      alt: "A black Audi sports car secured on the TK's Towing flatbed",
    },
    {
      src: 'suv',
      category: 'trucks',
      alt: "A red Toyota RAV4 loaded on the TK's Towing flatbed on a residential street",
    },
    {
      src: 'f250',
      category: 'trucks',
      alt: "A white Ford F-250 Super Duty winched onto the TK's Towing flatbed",
    },
    {
      src: 'boxVan',
      category: 'trucks',
      alt: "A contractor's box van loaded on the TK's Towing flatbed in the snow",
    },
    { src: 'trailer', category: 'equipment', alt: gallery.captions.c },
    {
      src: 'forklift',
      category: 'equipment',
      alt: "A forklift loaded on the TK's Towing flatbed at a loading dock",
    },
    {
      src: 'nightEquipment',
      category: 'equipment',
      alt: "Large medical equipment strapped to the TK's flatbed at night under the truck's work lights",
    },
    { src: 'nightHospital', category: 'equipment', alt: gallery.captions.e },
    {
      src: 'highway',
      category: 'roadside',
      alt: "A sedan loaded on the TK's flatbed on the highway shoulder",
    },
    {
      src: 'loadedRoad',
      category: 'roadside',
      alt: "The TK's Towing flatbed loaded and on the road at dusk",
    },
    {
      src: 'garage',
      category: 'roadside',
      alt: "TK's Towing flatbed truck, cab and empty deck, parked in the garage",
    },
  ],

  /* Shown when a tab is empty. Cannot happen with the list above, but the tabs
     are data-driven and the client will add photos. */
  emptyNote: 'No photos in this category yet.',
  countLabel: 'photos',

  primaryCta: `Call ${business.phone}`,
  secondaryCta: 'Our services',
  secondaryCtaHref: '/services',
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
      a: 'Yes. We are open 24 hours a day, 7 days a week, all year. Nights, weekends and holidays are all normal working hours for us.',
    },
    {
      q: 'What areas do you cover?',
      a: "All of Camden County, plus parts of Burlington and Gloucester County. We also run long distance tows, so if your pickup or drop-off falls outside that area, call and we will quote the trip.",
    },
    {
      q: 'What kinds of vehicles do you tow?',
      a: `Autos and light trucks: cars, SUVs, vans and light pickups, all on the flatbed. If you are unsure whether your vehicle fits, call with the year, make and model and we will tell you straight. We do not advertise heavy-duty or commercial semi towing.`,
    },
    {
      q: 'Do you do roadside assistance, or only towing?',
      a: 'Both. Roadside assistance services include jump-starts, tire changes, lockouts and fuel delivery. If a quick fix on the spot will get you moving, that is cheaper and faster than a tow and it is what we will do.',
    },
    {
      q: 'Do you do long-distance tows?',
      a: 'Yes. We run local and long distance tows, and we quote long runs up front so you know the number before the truck leaves.',
    },
    {
      q: 'How fast can you get to me?',
      a: `It depends on where you are, the time of day and how many trucks are out. We are based in Haddon Township, in the middle of our coverage area, so most Camden County calls are reached quickly. When you call, we will give you a realistic time rather than a number that sounds good.`,
    },
    {
      q: 'How much does a tow cost?',
      a: `Price depends on distance, vehicle and what the recovery involves. A driveway pickup is not the same job as pulling a car off a shoulder. Call with your location and destination and you will get a price before we dispatch.`,
    },
    {
      q: 'Will my car get damaged on the tow?',
      a: 'That is exactly why we run flatbeds. Your vehicle rides fully on the deck, secured with straps and chains for the whole trip, instead of being dragged on its own wheels. It is the safest way to move a damaged, low or all-wheel-drive vehicle.',
    },
    {
      q: 'Who actually shows up?',
      a: "A local operator from a family owned company that has worked out of Haddon Township since 1996, not a national dispatch app subcontracting your call to a stranger. The owner has also served on the Haddon Township Fire Department as a volunteer firefighter since 2009.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  eyebrow: "We're here for you!",
  heading: 'Call now, or send a quote request',
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
        'Vehicle, pickup location, destination. Whatever you can tell us.',
      files: 'Attach files (optional)',
      filesNote: 'Photos of the vehicle or the equipment help us quote faster.',
    },
    submit: 'Send request',
    disclaimer: '',
  },
  detailsHeading: 'Where to find us',
  hoursHeading: 'Hours',
  socialHeading: 'Follow along',
  mapPlaceholder: 'PLACEHOLDER — GOOGLE MAP EMBED (208 W Cuthbert Blvd)',
} as const;

/* ------------------------------------------------------------------ */
/* Contact page (/contact)                                             */
/* ------------------------------------------------------------------ */

/* The homepage contact section given its own page. Hero copy is `contact`
   verbatim; the call panel, details and quote form below are the same
   component the homepage uses. */
export const contactPage = {
  meta: {
    title: "Contact TK's Towing | 24/7 Flatbed Towing in Haddon Township, NJ",
    description:
      'Call TK’s Towing at (856) 854-9889, open 24 hours a day, 7 days a week, all year. 208 W Cuthbert Blvd, Haddon Township, NJ. Or send a quote request.',
  },

  /* Heading names the town, which is the whole point of a contact page for
     local search. Every point is a `business` field verbatim. */
  hero: {
    eyebrow: contact.eyebrow,
    heading: 'Contact TK’s Towing in Haddon Township, NJ',
    lead: contact.intro,
    body: business.hours,
    points: [
      business.phone,
      business.address.full,
      business.hoursShort,
      business.staffLine,
    ],
    railText: hero.rail.vertical,
    meta: business.hoursShort,
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Contact' }],
  },

  primaryCta: `Call ${business.phone}`,
  secondaryCta: 'Service areas',
  secondaryCtaHref: '/service-areas',
} as const;

/* ------------------------------------------------------------------ */
/* Final CTA + footer                                                  */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Floating quick-action bar (desktop)                                  */
/* ------------------------------------------------------------------ */

/**
 * Segmented action bar pinned bottom-right on desktop. Mobile keeps the
 * full-width MobileCallBar instead — a corner bar is worse for thumb reach and
 * the two would overlap.
 *
 * Labels are wording already used elsewhere on the site (nav.callCtaShort,
 * contact.form.heading, hero.secondaryCta), so nothing new is invented.
 */
export const quickActions = {
  ariaLabel: 'Quick actions',
  items: [
    { icon: 'phone', label: nav.callCtaShort, href: business.phoneHref },
    { icon: 'tag', label: 'Request a Quote', href: '/contact' },
    { icon: 'flatbed', label: 'Our Services', href: '/services' },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Quote drawer (slide-in sidebar, mounted once in Base.astro)         */
/* ------------------------------------------------------------------ */

/**
 * Opened by any element carrying [data-quote-open] (QuickActions' quote
 * button, the sticky header's quote button). Wording reuses `contact.form`
 * verbatim wherever a string already exists; only the fields the drawer adds
 * (ZIP, the service picker) and its trigger label are new. The service
 * options are the `services.items` titles, so a new service shows up here
 * automatically.
 */
export const quoteDrawer = {
  trigger: 'Request a Quote', // same wording as quickActions.items[1].label
  heading: contact.form.heading,
  /* Second sentence of contact.form.note, verbatim — the drawer header is
     capped at one short reassurance line. */
  note: 'If you need a truck now, call instead.',
  closeLabel: 'Close quote form',
  fields: {
    name: contact.form.fields.name,
    phone: contact.form.fields.phone,
    email: contact.form.fields.email,
    zip: 'ZIP code',
    service: 'Service needed',
    servicePlaceholder: 'Select a service',
  },
  services: services.items.map((s) => s.title),
  submit: contact.form.submit,
} as const;

export const finalCta = {
  heading: '24/7 towing you can count on.',
  sub: 'Call now.',
  cta: `Call ${business.phone}`,
} as const;

/* ------------------------------------------------------------------ */
/* About page (/about)                                                 */
/* ------------------------------------------------------------------ */

/**
 * The About page reuses confirmed copy that already lives in this file —
 * `intro`, `story`, `whyUs`, `process` and `story.facts` — so nothing on the
 * page is newly written marketing text.
 *
 * The ONLY new wording is `story.chapters[].title` below: three short labels
 * needed as accordion headings for paragraphs that never had titles. They are
 * navigation labels, not claims. Marked for Will's approval.
 */
export const about = {
  meta: {
    title: "About TK's Towing | Family Owned in Haddon Township Since 1996",
    description:
      "The family behind TK's Towing: flatbed towing and roadside assistance in Haddon Township, NJ since 1996, run by a Haddon Township Fire Department volunteer.",
  },

  /* Points recombine facts already asserted elsewhere in this file — the four
     `intro.pillars` titles, plus the town and the founding year the heading and
     `business` already carry. No new claim, and the local terms sit next to the
     h1 where they are worth the most. */
  hero: {
    eyebrow: intro.eyebrow,
    heading: intro.heading,
    lead: intro.lead,
    body: intro.body,
    points: [
      `${business.address.city}, ${business.address.state} · ${business.yearsInBusiness}`,
      intro.pillars[0].title,
      intro.pillars[1].title,
      intro.pillars[3].title,
    ],
    railText: hero.rail.vertical,
    meta: business.hoursShort,
    crumbs: [{ label: 'Home', href: '/' }, { label: 'About' }],
  },

  /* Scrolling service ticker under the page heading. Every line is an existing
     service name, verbatim: the four services.items titles plus the two
     hero.slideshow labels that name work the services list groups together. */
  marquee: {
    label: 'What we do',
    items: [
      'Flatbed Towing',
      'Auto & Light-Truck Towing',
      'Roadside Assistance',
      'Long-Distance Towing',
      'Light Equipment Transport & Hauling',
      'Recovery & Hauling',
    ],
  },

  story: {
    eyebrow: story.eyebrow,
    heading: story.heading,
    /** Paragraph text is verbatim story.paragraphs; only the titles are new. */
    chapters: [
      {
        title: `How it started ${CONFIRM}`,
        body: story.paragraphs[0],
      },
      {
        title: `The fire department ${CONFIRM}`,
        body: story.paragraphs[1],
      },
      {
        title: `Who shows up when you call ${CONFIRM}`,
        body: story.paragraphs[2],
      },
    ],
    pullQuote: story.pullQuote,
    pullQuoteAttribution: story.pullQuoteAttribution,
  },

  /* Both groups are rendered as expandable rows; copy is untouched. */
  why: {
    eyebrow: whyUs.eyebrow,
    heading: whyUs.heading,
    intro: whyUs.intro,
    items: whyUs.items,
  },

  process: {
    eyebrow: process.eyebrow,
    heading: process.heading,
    intro: process.intro,
    steps: process.steps,
  },

  pillars: intro.pillars,

  primaryCta: `Call ${business.phone}`,
  secondaryCta: 'See our services',
  secondaryCtaHref: '/services',
} as const;

export const footer = {
  logoPlaceholder: "TK'S TOWING LOGO",
  tagline: 'Flatbed towing & roadside assistance for South Jersey.',
  meta: 'Since 1996 · Haddon Township, NJ',
  /* Vertical text on the framed footer's left utility rail. */
  railText: 'Haddon Township, NJ · Family Owned',
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'Flatbed Towing', href: '/services/flatbed-towing/' },
        { label: 'Roadside Assistance', href: '/services/roadside-assistance/' },
        {
          label: 'Long-Distance Towing',
          href: '/services/long-distance-towing/',
        },
        {
          label: 'Light Equipment Transport',
          href: '/services/equipment-transport/',
        },
      ],
    },
    {
      heading: 'Service Areas',
      links: [
        { label: 'Camden County', href: '/service-areas' },
        { label: 'Burlington County', href: '/service-areas' },
        { label: 'Gloucester County', href: '/service-areas' },
        { label: 'Long distance', href: '/service-areas' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Story', href: '/about#company' },
        { label: 'Why TK’s', href: '/#why' },
        { label: 'How It Works', href: '/#process' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'FAQ', href: '/contact#faq' },
      ],
    },
  ],
  contactHeading: 'Contact',
  copyright: `© ${new Date().getFullYear()} TK's Towing. All rights reserved.`,
  credit: 'Site by Lockard Design Co.',
  creditHref: 'https://lockard.co',
} as const;
