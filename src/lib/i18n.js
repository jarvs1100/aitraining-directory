export const localeMeta = {
  en: { name: 'English', path: '', hreflang: 'en' },
  pl: { name: 'Polski', path: '/pl', hreflang: 'pl-PL' },
  cs: { name: 'Čeština', path: '/cs', hreflang: 'cs-CZ' },
  sk: { name: 'Slovenčina', path: '/sk', hreflang: 'sk-SK' },
  hu: { name: 'Magyar', path: '/hu', hreflang: 'hu-HU' },
  de: { name: 'Deutsch', path: '/de', hreflang: 'de-DE' },
  es: { name: 'Español', path: '/es', hreflang: 'es-ES' }
};

export const localizedLandingPages = [
  {
    key: 'ai-training-tools',
    locale: 'pl',
    slug: 'narzedzia-ai-do-szkolen',
    title: 'Narzędzia AI do szkoleń pracowników | AI Training Directory',
    description: 'Porównaj narzędzia AI do onboardingu, szkoleń stanowiskowych i operacji L&D.',
    h1: 'Narzędzia AI do szkoleń pracowników',
    intro: 'Ta strona pomaga zespołom L&D w Polsce szybko ocenić narzędzia AI pod kątem wdrożenia i aktualizacji treści.',
    points: ['Szybsze tworzenie materiałów onboardingowych', 'Lepsza spójność treści szkoleniowych', 'Łatwiejsze aktualizacje SOP i procedur'],
    enPath: '/solutions/sop-to-video-training/'
  },
  {
    key: 'sop-video',
    locale: 'pl',
    slug: 'sop-na-wideo-szkoleniowe',
    title: 'SOP na wideo szkoleniowe z AI',
    description: 'Jak zamieniać procedury SOP na krótkie materiały wideo dla L&D, onboardingu i regularnych aktualizacji procesów.',
    h1: 'SOP na wideo szkoleniowe',
    intro: 'Dla zespołów szkoleniowych, które muszą regularnie aktualizować procedury i wdrażać nowe osoby.',
    points: ['Powtarzalny proces publikacji', 'Lepsze zrozumienie procedur', 'Wsparcie dla zgodności i audytu'],
    enPath: '/solutions/sop-to-video-training/'
  },
  {
    key: 'ai-training-tools',
    locale: 'cs',
    slug: 'ai-nastroje-pro-skoleni-zamestnancu',
    title: 'AI nástroje pro školení zaměstnanců | AI Training Directory',
    description: 'Srovnání AI nástrojů pro onboarding, compliance a firemní L&D procesy.',
    h1: 'AI nástroje pro školení zaměstnanců',
    intro: 'Pomáháme L&D týmům v Česku vybrat nástroje podle reálných provozních potřeb.',
    points: ['Rychlejší tvorba školicího obsahu', 'Jednotné standardy školení', 'Snadné aktualizace interních postupů'],
    enPath: '/solutions/new-hire-onboarding-automation/'
  },
  {
    key: 'sop-video',
    locale: 'cs',
    slug: 'sop-do-skolicich-videi',
    title: 'SOP do školicích videí pomocí AI',
    description: 'Převod interních procesů na školicí videa pro onboarding, provozní zaškolení a průběžné aktualizace postupů.',
    h1: 'SOP do školicích videí',
    intro: 'Praktický přístup pro týmy, které potřebují škálovat školení bez navyšování kapacit.',
    points: ['Kratší čas od dokumentu k publikaci', 'Lepší pochopení kroků', 'Nižší chybovost při zaučení'],
    enPath: '/solutions/sop-to-video-training/'
  },
  {
    key: 'ai-training-tools',
    locale: 'sk',
    slug: 'ai-nastroje-na-skolenie-zamestnancov',
    title: 'AI nástroje na školenie zamestnancov | AI Training Directory',
    description: 'Prehľad AI nástrojov pre onboarding, L&D a interné vzdelávanie s dôrazom na rýchlosť nasadenia a kvalitu obsahu.',
    h1: 'AI nástroje na školenie zamestnancov',
    intro: 'Pomáhame tímom na Slovensku vyberať nástroje podľa praktickej použiteľnosti.',
    points: ['Rýchlejšia príprava obsahu', 'Konzistentné školenia naprieč tímami', 'Jednoduchšia aktualizácia pravidiel'],
    enPath: '/solutions/new-hire-onboarding-automation/'
  },
  {
    key: 'sop-video',
    locale: 'sk',
    slug: 'sop-na-skoliace-videa',
    title: 'SOP na školiace videá pomocou AI',
    description: 'Ako meniť interné SOP na krátke a zrozumiteľné školiace videá pre onboarding, compliance a prevádzkové tímy.',
    h1: 'SOP na školiace videá',
    intro: 'Vhodné pre L&D tímy, ktoré riešia nástup nových pracovníkov a pravidelné zmeny procesov.',
    points: ['Vyššia rýchlosť nasadenia školení', 'Lepšia zapamätateľnosť postupov', 'Podpora compliance požiadaviek'],
    enPath: '/solutions/sop-to-video-training/'
  },
  {
    key: 'ai-training-tools',
    locale: 'hu',
    slug: 'ai-eszkozok-munkavallaloi-kepzeshez',
    title: 'AI eszközök munkavállalói képzéshez | AI Training Directory',
    description: 'AI eszközök összehasonlítása onboardinghoz, belső képzésekhez és L&D működéshez.',
    h1: 'AI eszközök munkavállalói képzéshez',
    intro: 'Magyar L&D csapatoknak készült, gyakorlati kiválasztási szempontokkal.',
    points: ['Gyorsabb tartalom-előállítás', 'Egységesebb képzési minőség', 'Könnyebb frissíthetőség változó folyamatoknál'],
    enPath: '/solutions/new-hire-onboarding-automation/'
  },
  {
    key: 'sop-video',
    locale: 'hu',
    slug: 'sop-bol-kepzesi-video-ai-val',
    title: 'SOP-ból képzési videó AI-val',
    description: 'Belső folyamatok gyors átalakítása oktatási videókká onboardinghoz, betanításhoz és ismétlődő L&D frissítésekhez.',
    h1: 'SOP-ból képzési videó AI-val',
    intro: 'Ahol gyors onboarding és következetes betanítás szükséges, ez a megközelítés jól működik.',
    points: ['Rövidebb publikálási ciklus', 'Jobb folyamatmegértés', 'Skálázható oktatási működés'],
    enPath: '/solutions/sop-to-video-training/'
  },
  {
    key: 'ai-training-tools',
    locale: 'de',
    slug: 'ki-tools-fuer-mitarbeiterschulung',
    title: 'KI-Tools für Mitarbeiterschulung | AI Training Directory',
    description: 'Vergleichen Sie KI-Tools für Onboarding, Lernprozesse und L&D-Teams mit Fokus auf schnellere Umsetzung und stabile Qualität.',
    h1: 'KI-Tools für Mitarbeiterschulung',
    intro: 'Für deutschsprachige L&D- und Enablement-Teams mit Fokus auf umsetzbare Workflows.',
    points: ['Schnellere Content-Produktion', 'Konsistente Trainingsqualität', 'Effiziente Aktualisierung von SOP-Inhalten'],
    enPath: '/solutions/sop-to-video-training/'
  },
  {
    key: 'sop-video',
    locale: 'de',
    slug: 'sop-zu-schulungsvideos-mit-ki',
    title: 'SOP zu Schulungsvideos mit KI',
    description: 'Interne SOPs mit KI schneller in klare Schulungsvideos umsetzen, inklusive Updates für Onboarding und Compliance-Prozesse.',
    h1: 'SOP zu Schulungsvideos mit KI',
    intro: 'Ideal für Teams, die Einarbeitung standardisieren und Prozesse laufend aktualisieren müssen.',
    points: ['Schnellere Veröffentlichung', 'Höheres Prozessverständnis', 'Weniger Einarbeitungsfehler im Alltag'],
    enPath: '/solutions/sop-to-video-training/'
  },
  {
    key: 'ai-training-tools',
    locale: 'es',
    slug: 'herramientas-ia-formacion-empleados',
    title: 'Herramientas de IA para formación de empleados | AI Training Directory',
    description: 'Compara herramientas de IA para onboarding, capacitación interna y operaciones L&D.',
    h1: 'Herramientas de IA para formación de empleados',
    intro: 'Pensado para equipos de formación que necesitan velocidad y consistencia en contenidos.',
    points: ['Menor tiempo de producción', 'Mejor consistencia entre equipos', 'Actualizaciones más rápidas de procesos internos'],
    enPath: '/solutions/new-hire-onboarding-automation/'
  },
  {
    key: 'sop-video',
    locale: 'es',
    slug: 'de-sop-a-video-de-formacion-con-ia',
    title: 'De SOP a video de formación con IA',
    description: 'Convierte procedimientos internos en videos de formación claros y actualizables.',
    h1: 'De SOP a video de formación con IA',
    intro: 'Una ruta práctica para equipos L&D que necesitan escalar onboarding sin duplicar esfuerzo.',
    points: ['Publicación más rápida de contenidos', 'Mejor comprensión de procesos', 'Más control para auditoría y cumplimiento'],
    enPath: '/solutions/sop-to-video-training/'
  }
];

export function buildLocalizedPath(locale, slug) {
  return `/${locale}/${slug}/`;
}

export function getAlternatesForKey(key, currentLocale) {
  const siblings = localizedLandingPages.filter((p) => p.key === key);
  const links = [];

  for (const page of siblings) {
    const localeInfo = localeMeta[page.locale];
    const href = `https://aitraining.directory/${page.locale}/${page.slug}/`;
    links.push({ hreflang: page.locale, href });
    if (localeInfo?.hreflang && localeInfo.hreflang !== page.locale) {
      links.push({ hreflang: localeInfo.hreflang, href });
    }
  }

  const current = siblings.find((p) => p.locale === currentLocale) || siblings[0];
  if (current?.enPath) {
    links.push({ hreflang: 'en', href: `https://aitraining.directory${current.enPath}` });
    links.push({ hreflang: 'x-default', href: `https://aitraining.directory${current.enPath}` });
  }

  return links;
}

export function getSiblingLocalizedPages(key, currentLocale) {
  return localizedLandingPages.filter((p) => p.key === key && p.locale !== currentLocale);
}

export function getLocalizedUiStrings(locale) {
  const localeName = localeMeta[locale]?.name || locale.toUpperCase();

  const labels = {
    en: {
      home: 'Home',
      faqHeading: 'FAQ',
      editionTag: `${localeName} edition`,
      openEnglishPageCta: 'Open English implementation page',
      waitlistCta: 'Join founding partner waitlist',
      checklistHeading: 'Market rollout checklist',
      nextPagesHeading: 'Next pages to visit',
      otherLanguagesHeading: 'Other language editions',
      pointSupportCopy: 'Focused on practical rollout for L&D, enablement, and operations teams.'
    },
    pl: {
      home: 'Strona główna',
      faqHeading: 'Najczęstsze pytania',
      editionTag: 'Wersja polska',
      openEnglishPageCta: 'Otwórz angielską stronę wdrożeniową',
      waitlistCta: 'Dołącz do listy partnerów założycielskich',
      checklistHeading: 'Checklista wejścia na rynek',
      nextPagesHeading: 'Kolejne strony do odwiedzenia',
      otherLanguagesHeading: 'Inne wersje językowe',
      pointSupportCopy: 'Skupione na praktycznym wdrożeniu dla zespołów L&D, enablement i operacji.'
    },
    cs: {
      home: 'Domů',
      faqHeading: 'Často kladené dotazy',
      editionTag: 'Česká verze',
      openEnglishPageCta: 'Otevřít anglickou implementační stránku',
      waitlistCta: 'Připojit se na čekací listinu partnerů',
      checklistHeading: 'Kontrolní seznam pro vstup na trh',
      nextPagesHeading: 'Další stránky k návštěvě',
      otherLanguagesHeading: 'Další jazykové verze',
      pointSupportCopy: 'Zaměřeno na praktické nasazení pro týmy L&D, enablement a provoz.'
    },
    sk: {
      home: 'Domov',
      faqHeading: 'Časté otázky',
      editionTag: 'Slovenská verzia',
      openEnglishPageCta: 'Otvoriť anglickú implementačnú stránku',
      waitlistCta: 'Pridať sa do čakacej listiny partnerov',
      checklistHeading: 'Kontrolný zoznam pre vstup na trh',
      nextPagesHeading: 'Ďalšie stránky na návštevu',
      otherLanguagesHeading: 'Ďalšie jazykové verzie',
      pointSupportCopy: 'Zamerané na praktické nasadenie pre tímy L&D, enablement a operácií.'
    },
    hu: {
      home: 'Főoldal',
      faqHeading: 'Gyakori kérdések',
      editionTag: 'Magyar kiadás',
      openEnglishPageCta: 'Angol megvalósítási oldal megnyitása',
      waitlistCta: 'Csatlakozás az alapító partner várólistához',
      checklistHeading: 'Piaci bevezetési ellenőrzőlista',
      nextPagesHeading: 'Következő meglátogatandó oldalak',
      otherLanguagesHeading: 'További nyelvi kiadások',
      pointSupportCopy: 'A gyakorlati bevezetésre fókuszál L&D-, enablement- és operációs csapatoknál.'
    },
    de: {
      home: 'Startseite',
      faqHeading: 'Häufige Fragen',
      editionTag: 'Deutsche Ausgabe',
      openEnglishPageCta: 'Englische Umsetzungsseite öffnen',
      waitlistCta: 'Zur Founding-Partner-Warteliste',
      checklistHeading: 'Checkliste für den Markteintritt',
      nextPagesHeading: 'Nächste empfohlene Seiten',
      otherLanguagesHeading: 'Weitere Sprachversionen',
      pointSupportCopy: 'Fokussiert auf die praktische Umsetzung für L&D-, Enablement- und Operations-Teams.'
    },
    es: {
      home: 'Inicio',
      faqHeading: 'Preguntas frecuentes',
      editionTag: 'Edición en español',
      openEnglishPageCta: 'Abrir página de implementación en inglés',
      waitlistCta: 'Unirse a la lista de socios fundadores',
      checklistHeading: 'Lista de verificación de salida al mercado',
      nextPagesHeading: 'Siguientes páginas recomendadas',
      otherLanguagesHeading: 'Otras ediciones por idioma',
      pointSupportCopy: 'Enfocado en una implementación práctica para equipos de L&D, enablement y operaciones.'
    }
  };

  return labels[locale] || labels.en;
}

export function getLocalizedSupportBlocks(key, locale) {
  const localeName = localeMeta[locale]?.name || locale.toUpperCase();
  const labels = getLocalizedUiStrings(locale);

  const content = {
    'ai-training-tools': {
      checklist: {
        pl: [
          'Zmapuj 3 najczęściej powtarzające się procesy szkoleniowe (onboarding, aktualizacje SOP dla ról, odświeżenia compliance).',
          'Ustal jedno źródło prawdy dla SOP, playbooków i historii zmian.',
          'Uruchom pilotaż na jednym zespole i mierz czas publikacji oraz jakość ukończenia.',
          'Ustal governance: osoby akceptujące, rytm aktualizacji i właścicieli każdego strumienia szkoleniowego.'
        ],
        cs: [
          'Zmapujte 3 nejčastěji opakované školicí workflowy (onboarding, aktualizace SOP pro role, refresh compliance).',
          'Určete jednotný zdroj pravdy pro SOP dokumenty, playbooky a changelogy.',
          'Spusťte pilot v jednom týmu a sledujte čas do publikace i kvalitu dokončení.',
          'Nastavte governance: schvalovatele, kadenci aktualizací a vlastníky jednotlivých školicích proudů.'
        ],
        sk: [
          'Zmapujte 3 najčastejšie opakované školiace workflowy (onboarding, aktualizácie SOP podľa rolí, refresh compliance).',
          'Definujte jeden zdroj pravdy pre SOP dokumenty, playbooky a záznamy zmien.',
          'Spustite pilot v jednom tíme a sledujte čas publikácie aj kvalitu dokončenia.',
          'Nastavte governance: schvaľovateľov, frekvenciu aktualizácií a vlastníkov každého školiaceho prúdu.'
        ],
        hu: [
          'Térképezd fel a 3 leggyakrabban ismétlődő képzési workflow-t (onboarding, szerepkörhöz kötött SOP-frissítések, compliance frissítések).',
          'Határozz meg egyetlen hiteles forrást a SOP-dokumentumokhoz, playbookokhoz és változásnaplókhoz.',
          'Indíts pilotot egy csapattal, és mérd a publikálásig eltelt időt, valamint a teljesítés minőségét.',
          'Állítsd be a governance-et: jóváhagyók, frissítési ütemezés és felelősségi körök képzési streamenként.'
        ],
        de: [
          'Erfassen Sie die 3 häufigsten wiederkehrenden Trainings-Workflows (Onboarding, rollenspezifische SOP-Updates, Compliance-Refreshes).',
          'Definieren Sie eine zentrale Source of Truth für SOP-Dokumente, Playbooks und Änderungsprotokolle.',
          'Starten Sie einen Pilot mit einem Team und messen Sie Time-to-Publish sowie Abschlussqualität.',
          'Legen Sie Governance fest: Freigaben, Update-Rhythmus und Verantwortlichkeiten je Trainings-Stream.'
        ],
        es: [
          'Mapea los 3 flujos de formación más repetitivos (onboarding, actualizaciones de SOP por rol, refrescos de compliance).',
          'Define una única fuente de verdad para SOP, playbooks y registros de cambios.',
          'Lanza un piloto con un equipo y mide tiempo de publicación y calidad de finalización.',
          'Establece la gobernanza: aprobadores, cadencia de actualización y responsables por cada flujo de formación.'
        ],
        en: [
          'Map top 3 repetitive training workflows (onboarding, role-specific SOP updates, compliance refreshes).',
          'Define the single source of truth for SOP docs, playbooks, and change logs.',
          'Pilot with one team and track time-to-publish plus completion quality.',
          'Set governance: approvers, update cadence, and ownership for each training stream.'
        ]
      },
      internalLinks: {
        pl: ['Przeglądaj rozwiązania AI dla szkoleń', 'Porównaj narzędzia obok siebie', 'Poznaj kategorie szkoleniowe'],
        cs: ['Procházet AI řešení pro školení', 'Porovnat nástroje vedle sebe', 'Prozkoumat školicí kategorie'],
        sk: ['Prejsť AI riešenia pre školenia', 'Porovnať nástroje vedľa seba', 'Preskúmať kategórie školení'],
        hu: ['AI képzési megoldások böngészése', 'Eszközök összehasonlítása egymás mellett', 'Képzési kategóriák felfedezése'],
        de: ['KI-Trainingslösungen durchsuchen', 'Tools im Direktvergleich ansehen', 'Trainingskategorien ansehen'],
        es: ['Explorar soluciones de IA para formación', 'Comparar herramientas lado a lado', 'Explorar categorías de formación'],
        en: ['Browse AI training solutions', 'Compare tools side-by-side', 'Explore training categories']
      },
      intentCopy: {
        pl: 'Ta wersja została dostosowana do polskiego intentu wyszukiwania i kieruje do angielskich stron wdrożeniowych.',
        cs: 'Tato verze je přizpůsobena českému vyhledávacímu záměru a vede na anglické implementační stránky.',
        sk: 'Táto verzia je prispôsobená slovenskému vyhľadávaciemu intentu a vedie na anglické implementačné stránky.',
        hu: 'Ez a verzió a magyar keresési szándékhoz igazodik, és angol megvalósítási oldalakra irányít.',
        de: 'Diese Version ist auf deutschsprachige Suchintention ausgerichtet und verweist auf englische Umsetzungsseiten.',
        es: 'Esta versión está adaptada a la intención de búsqueda local y dirige a páginas de implementación en inglés.',
        en: `This ${localeName} page is designed for market-relevant discovery and routes readers to implementation-ready English solution pages.`
      }
    },
    default: {
      checklist: {
        pl: [
          'Wybierz 1–2 SOP-y o wysokiej częstotliwości zmian i jasnej logice krok po kroku.',
          'Podziel każdy SOP na krótkie moduły (3–7 minut) przypisane do ról.',
          'Przypisz właścicieli przeglądu dla wymogów prawnych i compliance przed publikacją.',
          'Mierz wyniki quizów, przestrzeganie procesów i skalę doszkalania po wdrożeniu.'
        ],
        cs: [
          'Vyberte 1–2 SOP s vysokou frekvencí změn a jasnou krokovou logikou.',
          'Rozdělte každý SOP do krátkých modulů (3–7 minut) navázaných na pracovní role.',
          'Před publikací určete vlastníky revize pro právní a compliance kontrolu.',
          'Po nasazení sledujte výsledky kvízů, dodržování procesů a míru přeškolování.'
        ],
        sk: [
          'Vyberte 1–2 SOP s vysokou frekvenciou zmien a jasnou logikou krok za krokom.',
          'Rozdeľte každý SOP do krátkych modulov (3–7 minút) naviazaných na pracovné roly.',
          'Pred publikáciou priraďte vlastníkov revízie pre právne a compliance kontroly.',
          'Po nasadení merajte výsledky kvízov, dodržiavanie procesov a mieru preškoľovania.'
        ],
        hu: [
          'Válassz 1–2 SOP-t, amely gyakran változik és jól követhető lépésről lépésre logikával működik.',
          'Bonts minden SOP-t rövid (3–7 perces), szerepkörhöz kötött modulokra.',
          'Publikálás előtt jelölj ki felülvizsgálati felelősöket a jogi és compliance ellenőrzéshez.',
          'Bevezetés után mérd a kvízeredményeket, a folyamatkövetést és az újraképzési arányt.'
        ],
        de: [
          'Wählen Sie 1–2 SOPs mit hoher Update-Frequenz und klarer Schritt-für-Schritt-Logik.',
          'Teilen Sie jede SOP in kurze Module (3–7 Minuten), abgestimmt auf Rollenprofile.',
          'Legen Sie vor der Veröffentlichung Review-Verantwortliche für Recht und Compliance fest.',
          'Messen Sie nach dem Rollout Quiz-Ergebnisse, Prozessdisziplin und Nachschulungsquote.'
        ],
        es: [
          'Selecciona 1–2 SOP con alta frecuencia de cambios y lógica clara paso a paso.',
          'Convierte cada SOP en módulos cortos (3–7 minutos) vinculados a roles.',
          'Asigna responsables de revisión legal y de compliance antes de publicar.',
          'Tras el despliegue, mide resultados de quizzes, adherencia al proceso y tasa de reentrenamiento.'
        ],
        en: [
          'Select 1–2 SOPs with high update frequency and clear step-by-step logic.',
          'Turn each SOP into short modules (3–7 minutes) tied to job roles.',
          'Assign review owners for legal/compliance checks before publishing.',
          'Measure quiz scores, process adherence, and retraining rate after rollout.'
        ]
      },
      internalLinks: {
        pl: ['Strony wdrożeniowe SOP→wideo', 'Automatyzacja onboardingu', 'Dodaj odpowiednie narzędzie'],
        cs: ['Implementační stránky SOP→video', 'Automatizace onboardingu nováčků', 'Přidat relevantní nástroj'],
        sk: ['Implementačné stránky SOP→video', 'Automatizácia onboardingu nových ľudí', 'Pridať relevantný nástroj'],
        hu: ['SOP→videó megvalósítási oldalak', 'Új belépők onboarding automatizálása', 'Releváns eszköz beküldése'],
        de: ['SOP-zu-Video-Umsetzungsseiten', 'Automatisierung des Onboardings', 'Passendes Tool einreichen'],
        es: ['Páginas de implementación SOP→video', 'Automatización de onboarding', 'Enviar una herramienta relevante'],
        en: ['SOP-to-video implementation pages', 'New-hire onboarding automation', 'Submit a relevant tool']
      },
      intentCopy: {
        pl: 'Treść lokalna dla polskiego intentu wyszukiwania, z jednolitą ścieżką wdrożeniową do głównych stron rozwiązań.',
        cs: 'Lokalizováno pro český vyhledávací záměr při zachování jednotné implementační cesty na hlavní stránky řešení.',
        sk: 'Lokalizované pre slovenský vyhľadávací intent pri zachovaní jednotnej implementačnej cesty na hlavné stránky riešení.',
        hu: 'A tartalom magyar keresési szándékra lokalizált, miközben a megvalósítási útvonal egységes marad.',
        de: 'Für lokale Suchintention lokalisiert, bei gleichzeitig konsistenten Umsetzungswegen zu den Kernlösungsseiten.',
        es: 'Localizado para intención de búsqueda local, manteniendo rutas de implementación consistentes hacia páginas clave.',
        en: `Localized in ${localeName} for search intent, while keeping implementation pathways consistent with core solution pages.`
      }
    }
  };

  const block = content[key] || content.default;
  const checklist = block.checklist[locale] || block.checklist.en;
  const linkLabels = block.internalLinks[locale] || block.internalLinks.en;

  return {
    labels,
    checklist,
    internalLinks: [
      { label: linkLabels[0], href: key === 'ai-training-tools' ? '/solutions/' : '/solutions/sop-to-video-training/' },
      { label: linkLabels[1], href: key === 'ai-training-tools' ? '/compare/' : '/solutions/new-hire-onboarding-automation/' },
      { label: linkLabels[2], href: key === 'ai-training-tools' ? '/categories/' : '/submit/' }
    ],
    intentCopy: block.intentCopy[locale] || block.intentCopy.en
  };
}

export function getLocalizedFaq(locale) {
  const localized = {
    pl: [
      { q: 'Czy ta strona jest lokalizowana pod realny intent?', a: 'Tak. Treść jest dopasowana do rynku i workflow zespołów L&D, a nie masowo tłumaczona bez kontekstu.' },
      { q: 'Dla kogo jest ta strona?', a: 'Dla zespołów Learning & Development, enablement oraz osób odpowiedzialnych za operacje szkoleniowe.' }
    ],
    cs: [
      { q: 'Je stránka lokalizovaná podle reálného vyhledávacího záměru?', a: 'Ano. Obsah je upravený pro lokální kontext a potřeby L&D týmů, ne jako hromadný strojový překlad.' },
      { q: 'Pro koho je tato stránka určena?', a: 'Pro L&D týmy, enablement leadery a manažery školících operací.' }
    ],
    sk: [
      { q: 'Je stránka lokalizovaná podľa reálneho intentu?', a: 'Áno. Obsah je prispôsobený lokálnemu kontextu a potrebám L&D tímov.' },
      { q: 'Pre koho je táto stránka určená?', a: 'Pre tímy Learning & Development, enablement a manažérov školení.' }
    ],
    hu: [
      { q: 'Ez az oldal valós keresési szándékra van lokalizálva?', a: 'Igen. A tartalom a helyi L&D működéshez igazodik, nem tömeges, kontextus nélküli fordítás.' },
      { q: 'Kinek szól ez az oldal?', a: 'L&D csapatoknak, enablement vezetőknek és képzési operációs menedzsereknek.' }
    ],
    de: [
      { q: 'Ist diese Seite nach tatsächlicher Suchintention lokalisiert?', a: 'Ja. Die Inhalte sind auf den DACH-Kontext und L&D-Workflows ausgerichtet.' },
      { q: 'Für wen ist diese Seite gedacht?', a: 'Für Learning-&-Development-Teams, Enablement-Leads und Training-Operations-Verantwortliche.' }
    ],
    es: [
      { q: '¿Esta página está localizada para intención real de búsqueda?', a: 'Sí. El contenido está adaptado al contexto local y a flujos de trabajo reales de L&D.' },
      { q: '¿Quién es la audiencia principal?', a: 'Equipos de Learning & Development, responsables de enablement y operaciones de formación.' }
    ]
  };

  return localized[locale] || [
    { q: 'Is this page manually localized for market intent?', a: 'Yes. Localization is curated for intent and context. Pages are not bulk machine-translated spam.' },
    { q: 'Who is the primary target audience?', a: 'Learning & Development teams, enablement leads, and training operations managers.' }
  ];
}
