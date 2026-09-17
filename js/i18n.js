(() => {
  const STORAGE_KEY = "portfolio-lang";

  const dict = {
    en: {
      "meta.title": "Gergana Tsirkova — QA · Design · Engineering",
      "meta.description":
        "Gergana Tsirkova — Senior QA Specialist, UI/UX designer, and full-stack engineer. Bridging flawless quality, pixel-perfect design, and AI-accelerated product engineering.",
      "skip": "Skip to content",
      "nav.focus": "Focus",
      "nav.work": "Work",
      "nav.skills": "Skills",
      "nav.about": "About",
      "nav.art": "Art",
      "nav.contact": "Contact",
      "nav.touch": "Get in Touch",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "nav.home": "Gergana Tsirkova home",
      "lang.aria": "Switch language. Current: English",
      "hero.meta": "Based in Ruse, Bulgaria · Open to remote-only roles",
      "hero.kicker.qa": "Senior QA Specialist",
      "hero.kicker.design": "UI / UX Design",
      "hero.kicker.code": "Full-Stack Engineering",
      "hero.line1": "Bridging <em>Flawless Quality</em>,",
      "hero.line2": "<em>Pixel-Perfect Design</em>,",
      "hero.line3": "and <em>Full-Stack Engineering</em>.",
      "hero.sub":
        "Senior QA Specialist & UI/UX Web Design expert with deep experience in automated validation, test matrices, and building custom web apps through AI-accelerated workflows (vibe-coding).",
      "hero.cta.projects": "Explore Projects",
      "hero.cta.contact": "Get in Touch",
      "hero.badge.design": "Design",
      "hero.badge.quality": "Quality",
      "hero.badge.code": "Code",
      "hero.scroll": "Scroll",
      "marquee":
        "Quality Assurance · UI / UX Design · Full-Stack Engineering · Accessibility · API Validation · AI-Accelerated Builds",
      "focus.eyebrow": "Current Focus",
      "focus.title":
        "Active work from the last three months — high-complexity product modules, not brochure sites.",
      "focus.avtonomera.caption": "Worldwide plate standards · live canvas logic",
      "focus.avtonomera.chip1": "In development",
      "focus.avtonomera.chip2": "WordPress Plugin",
      "focus.avtonomera.title": "Avtonomera · Global License Plate Designer",
      "focus.avtonomera.body":
        "Custom product designer module for avtonomera.eu — a Fancy Product Designer–class experience supporting worldwide license-plate standards through advanced frontend logic, live previews, and country-specific layouts.",
      "focus.avtonomera.li1":
        "Interactive canvas for plate typography, flags, and regional formats",
      "focus.avtonomera.li2":
        "Complex option trees mapped to manufacturing-ready output",
      "focus.avtonomera.li3":
        "WordPress plugin architecture for a production storefront",
      "focus.avtonomera.status": "Private build · public link coming soon",
      "focus.omoniya.caption": "4-step configurator · SVG + dual DB",
      "focus.omoniya.chip1": "Active build",
      "focus.omoniya.chip2": "Laravel · Livewire",
      "focus.omoniya.title": "Omoniya · Custom Door Configurator",
      "focus.omoniya.body":
        "Independent full-stack module translating dimensions, materials, glass inserts, and finishes into real-time SVG previews and dynamic pricing — with the same rigor applied to QA as to the product itself.",
      "focus.omoniya.li1":
        "Boundary-value testing on height/width to protect manufacturing & price",
      "focus.omoniya.li2":
        "Multi-step session state + dual persistence (MySQL / SQLite)",
      "focus.omoniya.li3":
        "PHPUnit coverage for surcharge logic and regression-prone paths",
      "focus.omoniya.status": "Active build · walkthrough available on request",
      "work.eyebrow": "Featured Work",
      "work.title":
        "Client platforms and shipped web products — WordPress brands, conversion sites, and a full-stack marketplace.",
      "work.zhaltitsa.tag": "Culture & Community",
      "work.zhaltitsa.title": "Танцова Задруга Жълтица",
      "work.zhaltitsa.body":
        "Folk dance club site for Ruse — services, schedule, gallery, and enrollment with a warm cultural brand system.",
      "work.zhaltitsa.aria": "Visit Zhaltitsa",
      "work.e2pro.tag": "Energy · Company site",
      "work.e2pro.title": "E2PRO Photovoltaic Systems",
      "work.e2pro.body":
        "Professional presence for consultation, distribution, and installation of photovoltaic systems — trust-led B2B storytelling.",
      "work.e2pro.aria": "Visit E2PRO",
      "work.ivanov.tag": "Legal Services",
      "work.ivanov.title": "Адвокат Светломир Иванов",
      "work.ivanov.body":
        "Law-firm presence for Ruse — practice areas, pricing clarity, and direct contact pathways with a restrained editorial tone.",
      "work.ivanov.aria": "Visit Advokat Ivanov",
      "work.ivona.tag": "Video services",
      "work.ivona.title": "Ivona Toneva",
      "work.ivona.body":
        "Bilingual video-editing portfolio — service offerings, showreel energy, and a scroll-stopping social-content brand.",
      "work.ivona.aria": "Visit Ivona Toneva",
      "work.interior.tag": "Automotive interiors",
      "work.interior.title": "Interior Auto",
      "work.interior.body":
        "Restoration and detailing studio site — leather repair, airbag wheel recovery, and conversion-focused service storytelling.",
      "work.interior.aria": "Visit Interior Auto",
      "work.lens.tag": "Photography & detailing",
      "work.lens.title": "Auto Lens",
      "work.lens.body":
        "Premium auto detailing + sales photography — service story, portfolio lightbox, and files ready for listing platforms.",
      "work.lens.aria": "Visit Auto Lens",
      "work.obyava.tag": "Full-stack marketplace",
      "work.obyava.title": "Obyava",
      "work.obyava.body":
        "Classifieds-style web app inspired by OLX — post, browse, and manage ads across categories. Built and shipped as a SoftUni AI project with a live Netlify deployment.",
      "work.obyava.aria": "Visit Obyava",
      "work.link.live": "Live ↗",
      "work.link.demo": "Live demo ↗",
      "work.link.github": "GitHub ↗",
      "work.link.qa": "QA notes ↗",
      "skills.eyebrow": "Dual-Pillar Expertise",
      "skills.title":
        "A skills matrix built at the intersection of quality engineering and craft.",
      "skills.note": "Scroll to move through the pillars →",
      "skills.1.index": "01 — Design & Frontend",
      "skills.1.title": "UI / UX Web Design & Frontend Engineering",
      "skills.1.body":
        "Primary craft — Figma to production with obsessive spacing, type, and brand consistency; shipping custom modules with modern tooling and AI-accelerated workflows.",
      "skills.1.li1": "UI / UX prototyping · Figma · Adobe XD",
      "skills.1.li2": "HTML5 · CSS3 · JavaScript · Tailwind · LESS",
      "skills.1.li3": "Laravel · Livewire · Filament · Alpine.js",
      "skills.1.li4": "Cursor · GitHub Copilot · vibe-coding",
      "skills.1.li5": "WordPress · Bootstrap · icon systems",
      "skills.2.index": "02 — QA",
      "skills.2.title": "Quality Assurance & Engineering",
      "skills.2.body":
        "End-to-end defect lifecycle on high-traffic automotive e-commerce and microservices — from refinement to production support.",
      "skills.2.li1": "Manual & automation testing",
      "skills.2.li2": "Smoke, functional, GUI, integration, regression, UAT",
      "skills.2.li3": "Test case & plan design · Jira · Redmine",
      "skills.2.li4": "Selenium WebDriver · NUnit · C# · PHPUnit",
      "skills.3.index": "03 — API / Data",
      "skills.3.title": "REST, SQL & Observability",
      "skills.3.body":
        "Data-consistency checks between storefronts and backends, plus log-driven investigation when production drifts.",
      "skills.3.li1": "REST APIs · Postman · Swagger",
      "skills.3.li2": "SQL validation · MySQL · DBeaver · SQLite",
      "skills.3.li3": "Kibana log analysis",
      "skills.3.li4": "JMeter load & stress · Prometheus · Grafana",
      "skills.4.index": "04 — A11y",
      "skills.4.title": "Inclusive & Cross-Browser QA",
      "skills.4.body":
        "WCAG-minded coverage with real assistive tech — because visual polish is incomplete without access.",
      "skills.4.li1": "WCAG guidelines",
      "skills.4.li2": "NVDA · VoiceOver · TalkBack · Narrator",
      "skills.4.li3": "Cross-browser & mobile QA",
      "skills.4.li4": "UI precision transferred from design practice",
      "about.eyebrow": "Background",
      "about.title":
        "Four years hardening e-commerce quality, grounded in design craft and compliance thinking.",
      "about.lead":
        "Detail-oriented Quality Assurance Specialist with 4+ years testing high-traffic automotive e-commerce and microservices at Markovski Solutions — backed by a two-year foundation in web design and frontend, and a prior career in customs compliance that still informs boundary-value thinking.",
      "about.body":
        "Today the practice spans both pillars: architecting test matrices, validating APIs and data, and building custom web applications through AI-accelerated workflows. The through-line is the same — catch the edge case before it ships, and make the interface feel inevitable.",
      "about.stat1": "Years QA engineering",
      "about.stat2": "Years UI / frontend",
      "about.stat3": "Shipped web products",
      "about.t1.time": "May 2026 — Present",
      "about.t1.title": "AI-Assisted Development & QA Engineer",
      "about.t1.body":
        "Independent product work — Omoniya door configurator and Avtonomera plate designer. Full-stack execution with PHPUnit, dual-database persistence, and production plugin architecture.",
      "about.t2.time": "Mar 2022 — Apr 2026",
      "about.t2.title": "Quality Assurance Specialist · Markovski Solutions",
      "about.t2.body":
        "High-traffic B2B automotive e-commerce: discovery → cart → checkout, API/SQL consistency, JMeter performance, WCAG a11y, and two company WordPress sites.",
      "about.t3.time": "Jan 2020 — Feb 2022",
      "about.t3.title": "Web Designer & Front-End · Software Solutions",
      "about.t3.body":
        "Grew from landing pages to MVC front-ends — Figma/XD, HTML/CSS/LESS/Bootstrap, Kendo templates, and custom icon fonts.",
      "about.t4.time": "Mar 2010 — Dec 2019",
      "about.t4.title": "Customs Inspector · National Customs Agency",
      "about.t4.body":
        "Risk-based document verification — the origin of a systematic eye for discrepancies, now applied as boundary and edge-case testing.",
      "art.eyebrow": "Beyond Code & Design",
      "art.title": "Art & Creative Work — the eye that shapes every interface.",
      "art.lead":
        "Outside engineering, I paint vivid folk-abstract worlds — botanical forms, patterned birds, and playful color studies. This is where the palettes, rhythm, and negative-space instincts that later show up in UI/UX get rehearsed. From <em>Mage World</em>, my ongoing series.",
      "art.1.title": "Botanical Spirals",
      "art.1.body": "Rhythm & motion — informs page cadence and micro-transitions.",
      "art.1.alt": "Abstract botanical painting with red spirals and organic forms",
      "art.2.title": "Patterned Pelican",
      "art.2.body": "Focal points & hierarchy — shapes how a hero anchors the eye.",
      "art.2.alt": "Stylized pelican painting with patterned body and pink pouch",
      "art.3.title": "Pattern Fields",
      "art.3.body":
        "Systems & repetition — the same instinct that drives design tokens and grids.",
      "art.3.alt":
        "Colorful abstract painting with polka dots, stripes, and organic shapes",
      "art.4.title": "Coral Garden",
      "art.4.body": "Warm/cool balance — tunes palette temperature across a full UI.",
      "art.4.alt":
        "Vivid botanical painting with red berries, teal foliage, and yellow pod",
      "art.5.title": "Citrus Study",
      "art.5.body":
        "Contrast & luminance — the same discipline used for accessibility ratios.",
      "art.5.alt": "Expressive citrus fruit painting with radiant multicolor segments",
      "art.6.title": "Seafoam Flora",
      "art.6.body": "Negative space & flow — how a layout breathes on a real device.",
      "art.6.alt":
        "Abstract floral painting on seafoam background with striped stem",
      "art.footer":
        'More of the series on <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Mage World</a>. The same eye tests interfaces, tunes palettes, and hunts edge cases.',
      "art.lightbox.close": "Close artwork",
      "contact.eyebrow": "Contact",
      "contact.title":
        "Let’s talk about quality strategy, product craft, and remote collaboration.",
      "contact.kicker": "Available for remote-only roles",
      "contact.copy": "Copy email",
      "contact.copied": "Copied",
      "contact.cv": "QA CV site ↗",
      "footer.copy":
        "© 2026 Gergana Tsirkova. Designed & engineered as a dark-mode agency portfolio.",
      "footer.top": "Back to top",
    },
    bg: {
      "meta.title": "Гергана Циркова — QA · Дизайн · Инженеринг",
      "meta.description":
        "Гергана Циркова — старши QA специалист, UI/UX дизайнер и full-stack инженер. Свързване на безупречно качество, перфектен дизайн и AI-ускорен продуктов инженеринг.",
      "skip": "Към съдържанието",
      "nav.focus": "Фокус",
      "nav.work": "Проекти",
      "nav.skills": "Умения",
      "nav.about": "За мен",
      "nav.art": "Изкуство",
      "nav.contact": "Контакт",
      "nav.touch": "Свържете се",
      "nav.open": "Отвори менюто",
      "nav.close": "Затвори менюто",
      "nav.home": "Гергана Циркова — начало",
      "lang.aria": "Смяна на език. Текущ: български",
      "hero.meta": "Базирана в Русе, България · Отворена за remote роли",
      "hero.kicker.qa": "Старши QA специалист",
      "hero.kicker.design": "UI / UX дизайн",
      "hero.kicker.code": "Full-Stack инженеринг",
      "hero.line1": "Свързване на <em>безупречно качество</em>,",
      "hero.line2": "<em>перфектен дизайн</em>,",
      "hero.line3": "и <em>софтуерен инженеринг</em>.",
      "hero.sub":
        "Старши QA специалист и експерт по UI/UX уеб дизайн с дълбок опит в автоматизирана валидация, тестови матрици и изграждане на персонализирани уеб приложения чрез AI-ускорени работни процеси (vibe-coding).",
      "hero.cta.projects": "Разгледай проектите",
      "hero.cta.contact": "Свържете се",
      "hero.badge.design": "Дизайн",
      "hero.badge.quality": "Качество",
      "hero.badge.code": "Код",
      "hero.scroll": "Надолу",
      "marquee":
        "Осигуряване на качество · UI / UX дизайн · Full-Stack инженеринг · Достъпност · API валидация · AI-ускорени проекти",
      "focus.eyebrow": "Текущ фокус",
      "focus.title":
        "Активна работа от последните три месеца — високосложни продуктови модули, не брошурни сайтове.",
      "focus.avtonomera.caption": "Световни стандарти за табели · live canvas логика",
      "focus.avtonomera.chip1": "В разработка",
      "focus.avtonomera.chip2": "WordPress плъгин",
      "focus.avtonomera.title": "Avtonomera · Глобален дизайнер на регистрационни табели",
      "focus.avtonomera.body":
        "Персонализиран продуктов дизайнерски модул за avtonomera.eu — преживяване от клас Fancy Product Designer със поддръжка на световни стандарти за регистрационни табели чрез напреднала frontend логика, live прегледи и специфични за държавите оформления.",
      "focus.avtonomera.li1":
        "Интерактивен canvas за типография, знамена и регионални формати",
      "focus.avtonomera.li2":
        "Сложни дървета от опции, свързани с производството",
      "focus.avtonomera.li3":
        "Архитектура на WordPress плъгин за продукционен магазин",
      "focus.avtonomera.status": "Частен билд · публичен линк скоро",
      "focus.omoniya.caption": "4-стъпков конфигуратор · SVG + двойна БД",
      "focus.omoniya.chip1": "Активен билд",
      "focus.omoniya.chip2": "Laravel · Livewire",
      "focus.omoniya.title": "Omoniya · Конфигуратор на врати по поръчка",
      "focus.omoniya.body":
        "Независим full-stack модул, който превежда размери, материали, стъклени вложки и покрития в SVG прегледи в реално време и динамично ценообразуване — със същата строгост в QA, както и в самия продукт.",
      "focus.omoniya.li1":
        "Гранично тестване на височина/ширина за защита на производство и цена",
      "focus.omoniya.li2":
        "Многостъпково състояние на сесия + двойна персистенция (MySQL / SQLite)",
      "focus.omoniya.li3":
        "PHPUnit покритие за надбавки и регресионно уязвими пътища",
      "focus.omoniya.status": "Активен билд · презентация по заявка",
      "work.eyebrow": "Избрани проекти",
      "work.title":
        "Клиентски платформи и пуснати уеб продукти — WordPress брандове, конверсионни сайтове и full-stack marketplace.",
      "work.zhaltitsa.tag": "Култура и общност",
      "work.zhaltitsa.title": "Танцова Задруга Жълтица",
      "work.zhaltitsa.body":
        "Сайт на фолклорен танцов клуб в Русе — услуги, график, галерия и записване с топла културна бранд система.",
      "work.zhaltitsa.aria": "Посети Жълтица",
      "work.e2pro.tag": "Енергетика · Корпоративен сайт",
      "work.e2pro.title": "E2PRO Фотоволтаични системи",
      "work.e2pro.body":
        "Професионално присъствие за консултация, дистрибуция и монтаж на фотоволтаични системи — B2B разказ, изграден върху доверие.",
      "work.e2pro.aria": "Посети E2PRO",
      "work.ivanov.tag": "Правни услуги",
      "work.ivanov.title": "Адвокат Светломир Иванов",
      "work.ivanov.body":
        "Сайт на адвокатска практика в Русе — области на работа, ясно ценообразуване и директни пътища за контакт с въздържан редакционен тон.",
      "work.ivanov.aria": "Посети Адвокат Иванов",
      "work.ivona.tag": "Видео услуги",
      "work.ivona.title": "Ivona Toneva",
      "work.ivona.body":
        "Двуезично портфолио за видео монтаж — услуги, енергия на showreel и запомнящ се бранд за социално съдържание.",
      "work.ivona.aria": "Посети Ivona Toneva",
      "work.interior.tag": "Автомобилни интериори",
      "work.interior.title": "Interior Auto",
      "work.interior.body":
        "Сайт на студио за реставрация и детайлинг — ремонт на кожа, възстановяване на волани с airbag и конверсионно ориентиран разказ за услугите.",
      "work.interior.aria": "Посети Interior Auto",
      "work.lens.tag": "Фотография и детайлинг",
      "work.lens.title": "Auto Lens",
      "work.lens.body":
        "Премиум автодетайлинг и продажбена фотография — история на услугите, портфолио lightbox и файлове, готови за платформи за обяви.",
      "work.lens.aria": "Посети Auto Lens",
      "work.obyava.tag": "Full-stack marketplace",
      "work.obyava.title": "Обява",
      "work.obyava.body":
        "Уеб приложение за обяви в стил OLX — публикуване, разглеждане и управление на обяви по категории. Изградено и пуснато като SoftUni AI проект с live Netlify деплой.",
      "work.obyava.aria": "Посети Обява",
      "work.link.live": "На живо ↗",
      "work.link.demo": "Live демо ↗",
      "work.link.github": "GitHub ↗",
      "work.link.qa": "QA бележки ↗",
      "skills.eyebrow": "Двойна експертиза",
      "skills.title":
        "Матрица от умения на пресечната точка между инженеринг на качеството и занаята.",
      "skills.note": "Скролнете, за да преминете през стълбовете →",
      "skills.1.index": "01 — Дизайн и Frontend",
      "skills.1.title": "UI / UX уеб дизайн и фронтенд разработка",
      "skills.1.body":
        "Основен занаят — от Figma до продукция с внимание към разстояния, типография и бранд консистентност; изграждане на персонализирани модули със съвременни инструменти и AI-ускорени работни процеси.",
      "skills.1.li1": "UI / UX прототипиране · Figma · Adobe XD",
      "skills.1.li2": "HTML5 · CSS3 · JavaScript · Tailwind · LESS",
      "skills.1.li3": "Laravel · Livewire · Filament · Alpine.js",
      "skills.1.li4": "Cursor · GitHub Copilot · vibe-coding",
      "skills.1.li5": "WordPress · Bootstrap · иконни системи",
      "skills.2.index": "02 — QA",
      "skills.2.title": "Осигуряване на качество и инженеринг",
      "skills.2.body":
        "Пълен жизнен цикъл на дефектите върху високотрафична автомобилна електронна търговия и микросървиси — от refinement до продукционна поддръжка.",
      "skills.2.li1": "Ръчно и автоматизирано тестване",
      "skills.2.li2": "Smoke, функционални, GUI, интеграционни, регресия, UAT",
      "skills.2.li3": "Дизайн на тест кейсове и планове · Jira · Redmine",
      "skills.2.li4": "Selenium WebDriver · NUnit · C# · PHPUnit",
      "skills.3.index": "03 — API / Данни",
      "skills.3.title": "REST, SQL и наблюдаемост",
      "skills.3.body":
        "Проверки за консистентност на данните между витрини и бекенди, плюс разследване чрез логове, когато продукцията се разминава.",
      "skills.3.li1": "REST API · Postman · Swagger",
      "skills.3.li2": "SQL валидация · MySQL · DBeaver · SQLite",
      "skills.3.li3": "Анализ на логове в Kibana",
      "skills.3.li4": "JMeter натоварване · Prometheus · Grafana",
      "skills.4.index": "04 — Достъпност",
      "skills.4.title": "Приобщаващо и кросбраузърно QA",
      "skills.4.body":
        "Покритие, съобразено с WCAG, с реални асистивни технологии — защото визуалният блясък е непълен без достъп.",
      "skills.4.li1": "WCAG насоки",
      "skills.4.li2": "NVDA · VoiceOver · TalkBack · Narrator",
      "skills.4.li3": "Кросбраузърно и мобилно QA",
      "skills.4.li4": "UI прецизност, пренесена от дизайн практиката",
      "about.eyebrow": "Предистория",
      "about.title":
        "Четири години гарантиране на качеството в електронната търговия, стъпващи върху солиден опит в уеб дизайна и аналитично мислене за съответствие.",
      "about.lead":
        "Детайлно ориентиран QA специалист с над 4 години опит в тестване на високотрафична автомобилна електронна търговия и микросървиси в Markovski Solutions — подкрепен от двугодишна основа в уеб дизайн и frontend и предишна кариера в митническо съответствие, която все още информира граничното мислене.",
      "about.body":
        "Днес практиката обхваща и двата стълба: архитектура на тестови матрици, валидация на API и данни, и изграждане на персонализирани уеб приложения чрез AI-ускорени работни процеси. Червената нишка е една — улови граничния случай преди да стигне до продукция и направи интерфейса да се усеща неизбежен.",
      "about.stat1": "Години QA инженеринг",
      "about.stat2": "Години UI / frontend",
      "about.stat3": "Публикувани уеб продукти",
      "about.t1.time": "май 2026 — настояще",
      "about.t1.title": "AI-асистиран разработчик и QA инженер",
      "about.t1.body":
        "Независима продуктова работа — конфигуратор на врати Omoniya и дизайнер на табели Avtonomera. Full-stack изпълнение с PHPUnit, двойна персистенция на данни и продукционна плъгин архитектура.",
      "about.t2.time": "мар 2022 — апр 2026",
      "about.t2.title": "QA специалист · Markovski Solutions",
      "about.t2.body":
        "Високотрафична B2B автомобилна електронна търговия: discovery → количка → checkout, API/SQL консистентност, JMeter производителност, WCAG достъпност и два корпоративни WordPress сайта.",
      "about.t3.time": "ян 2020 — фев 2022",
      "about.t3.title": "Уеб дизайнер и Front-End · Software Solutions",
      "about.t3.body":
        "От лендинг страници до MVC фронтенди — Figma/XD, HTML/CSS/LESS/Bootstrap, Kendo шаблони и персонализирани иконни шрифтове.",
      "about.t4.time": "мар 2010 — дек 2019",
      "about.t4.title": "Митнически инспектор · Агенция „Митници“",
      "about.t4.body":
        "Рисково базирана проверка на документи — произходът на систематичния поглед към несъответствия, днес приложен като гранично и edge-case тестване.",
      "art.eyebrow": "Отвъд кода и дизайна",
      "art.title": "Изкуство и творческа работа — окото, което оформя всеки интерфейс.",
      "art.lead":
        "Извън инженеринга рисувам ярки фолклорно-абстрактни светове — ботанически форми, шарени птици и игриви цветови изследвания. Тук се репетират палитрите, ритъмът и усетът за негативно пространство, които по-късно се появяват в UI/UX. От <em>Mage World</em> — моята текуща серия.",
      "art.1.title": "Ботанически спирали",
      "art.1.body": "Ритъм и движение — информират каденцата на страницата и микропреходите.",
      "art.1.alt": "Абстрактна ботаническа картина с червени спирали и органични форми",
      "art.2.title": "Шарен пеликан",
      "art.2.body": "Фокусни точки и йерархия — оформя как хероят закрепва погледа.",
      "art.2.alt": "Стилизирана картина на пеликан с шарено тяло и розова торбичка",
      "art.3.title": "Полета от шарки",
      "art.3.body":
        "Системи и повторение — същият инстинкт, който задвижва дизайн токени и мрежи.",
      "art.3.alt":
        "Цветна абстрактна картина с точки, ивици и органични форми",
      "art.4.title": "Коралова градина",
      "art.4.body": "Топло/студено равновесие — настройва температурата на палитрата в целия UI.",
      "art.4.alt":
        "Ярка ботаническа картина с червени плодове, тюркоазена зеленина и жълт шушулков плод",
      "art.5.title": "Цитрусово изследване",
      "art.5.body":
        "Контраст и осветеност — същата дисциплина, използвана за достъпностни съотношения.",
      "art.5.alt": "Експресивна картина на цитрус със сияйни многоцветни сегменти",
      "art.6.title": "Морска флора",
      "art.6.body": "Негативно пространство и поток — как layout-ът диша на реално устройство.",
      "art.6.alt":
        "Абстрактна флорална картина върху морскозелен фон с раирано стъбло",
      "art.footer":
        'Повече от серията в <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Mage World</a>. Същото око тества интерфейси, настройва палитри и търси гранични случаи.',
      "art.lightbox.close": "Затвори картината",
      "contact.eyebrow": "Контакт",
      "contact.title":
        "Нека говорим за стратегия за качество, продуктов занаят и remote сътрудничество.",
      "contact.kicker": "На разположение за remote роли",
      "contact.copy": "Копирай имейл",
      "contact.copied": "Копирано",
      "contact.cv": "QA CV сайт ↗",
      "footer.copy":
        "© 2026 Гергана Циркова. Дизайнирано и разработено като dark-mode агентско портфолио.",
      "footer.top": "Към началото",
    },
  };

  const getStoredLang = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "bg") return stored;
    } catch {
      /* ignore */
    }
    return "en";
  };

  let currentLang = getStoredLang();

  const t = (key, lang = currentLang) => {
    const table = dict[lang] || dict.en;
    return table[key] ?? dict.en[key] ?? key;
  };

  const applyLanguage = (lang, { persist = true } = {}) => {
    if (lang !== "en" && lang !== "bg") lang = "en";
    currentLang = lang;
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* ignore */
      }
    }

    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    const title = t("meta.title");
    if (title) document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", t(key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (!key) return;
      el.setAttribute("alt", t(key));
    });

    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
      btn.setAttribute("aria-label", t("lang.aria"));
      btn.querySelectorAll("[data-lang-label]").forEach((opt) => {
        opt.classList.toggle("is-active", opt.getAttribute("data-lang-label") === lang);
      });
    });

    const marquee = document.querySelector("[data-i18n-marquee]");
    if (marquee) {
      const items = t("marquee").split(" · ");
      const doubled = [...items, ...items];
      marquee.innerHTML = doubled.map((item) => `<span>${item}</span>`).join("");
    }

    document.dispatchEvent(
      new CustomEvent("portfolio:langchange", { detail: { lang } })
    );
  };

  const toggleLanguage = () => {
    applyLanguage(currentLang === "en" ? "bg" : "en");
  };

  window.PortfolioI18n = {
    dict,
    t,
    getLang: () => currentLang,
    applyLanguage,
    toggleLanguage,
    STORAGE_KEY,
  };
})();
