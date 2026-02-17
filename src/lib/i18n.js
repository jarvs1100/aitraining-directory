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
  },
  {
    key: 'onboarding-roleplay',
    locale: 'de',
    slug: 'ki-rollenspiel-simulatoren-vs-video-onboarding',
    title: 'KI-Rollenspiel-Simulatoren vs. reines Video-Onboarding | AI Training Directory',
    description: 'Lokalisierter Einstieg für DACH-Teams, die den Umstieg von Video-only auf simulationsgestütztes Onboarding bewerten.',
    h1: 'KI-Rollenspiel-Simulatoren vs. Video-only-Onboarding',
    intro: 'Hilft L&D- und Enablement-Teams, interaktive Simulationen gegenüber reinem Video-Training nach Umsetzungsaufwand und Wirkung zu bewerten.',
    points: ['Messbare Praxiskompetenz statt nur Abschlussquote', 'Höhere Umsetzungssicherheit in den ersten 30 Tagen', 'Klare Kriterien für Pilot, Skalierung und Einkauf'],
    enPath: '/compare/ai-roleplay-simulators-vs-video-only-onboarding/'
  },
  {
    key: 'onboarding-roleplay',
    locale: 'es',
    slug: 'simuladores-roleplay-ia-vs-onboarding-solo-video',
    title: 'Simuladores de roleplay con IA vs. onboarding solo en vídeo | AI Training Directory',
    description: 'Versión localizada para evaluar cuándo conviene pasar de onboarding en vídeo a simulaciones guiadas por IA.',
    h1: 'Simuladores de roleplay con IA vs. onboarding solo en vídeo',
    intro: 'Ayuda a equipos de formación y enablement a decidir entre vídeo-only y simulación interactiva según impacto operativo y velocidad de despliegue.',
    points: ['Competencia práctica evaluable desde la primera semana', 'Mejor transferencia al puesto en escenarios reales', 'Criterios claros para piloto, compra y escalado'],
    enPath: '/compare/ai-roleplay-simulators-vs-video-only-onboarding/'
  },
  {
    key: 'knowledge-chatbot-vs-search',
    locale: 'de',
    slug: 'ki-wissens-chatbots-vs-lms-suche-performance-support',
    title: 'KI-Wissens-Chatbots vs. LMS-Suche für Performance Support | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die KI-Chatbot-Support gegen LMS-Suchworkflows für den Arbeitsalltag bewerten.',
    h1: 'KI-Wissens-Chatbots vs. LMS-Suche für Performance Support',
    intro: 'Hilft L&D- und LMS-Teams, Support-Deflection, Antwortqualität und Governance-Aufwand für beide Modelle realistisch zu vergleichen.',
    points: ['Schneller Vergleich von Antwortpräzision und Eskalationsquote', 'Klare Bewertungslogik für Governance und Content-Freshness', 'Pilotkriterien für fundierte Tool-Entscheidungen'],
    enPath: '/compare/ai-knowledge-chatbots-vs-lms-search-for-performance-support/'
  },
  {
    key: 'knowledge-chatbot-vs-search',
    locale: 'es',
    slug: 'chatbots-conocimiento-ia-vs-busqueda-lms-performance-support',
    title: 'Chatbots de conocimiento con IA vs. búsqueda en LMS para performance support | AI Training Directory',
    description: 'Entrada localizada para equipos que evalúan soporte con chatbots IA frente a búsqueda LMS en trabajo real.',
    h1: 'Chatbots de conocimiento con IA vs. búsqueda en LMS para performance support',
    intro: 'Ayuda a equipos de formación y LMS a comparar precisión de respuesta, velocidad de resolución y carga operativa entre ambos enfoques.',
    points: ['Comparativa práctica de precisión y tiempo de respuesta', 'Criterios claros para gobernanza y actualización de contenidos', 'Marco de piloto para decidir con evidencia operativa'],
    enPath: '/compare/ai-knowledge-chatbots-vs-lms-search-for-performance-support/'
  },
  {
    key: 'manager-coaching-copilot-vs-playbook',
    locale: 'de',
    slug: 'ki-coaching-copiloten-vs-statische-playbooks-fuer-manager-enablement',
    title: 'KI-Coaching-Copiloten vs. statische Playbooks für Manager Enablement | AI Training Directory',
    description: 'Lokalisierter Einstieg für Enablement-Teams, die KI-Coaching-Copiloten gegen klassische Manager-Playbooks bewerten.',
    h1: 'KI-Coaching-Copiloten vs. statische Playbooks für Manager Enablement',
    intro: 'Hilft L&D- und Enablement-Teams zu entscheiden, ob statische Leitfäden ausreichen oder ein Copilot für Coaching-Momente im Alltag mehr Wirkung liefert.',
    points: ['Vergleich von In-the-Moment-Nutzbarkeit und Adoptionsgrad', 'Messbare Kriterien für Coaching-Konsistenz über Manager hinweg', 'Pilot-Framework für Governance, Aufwand und Behavior-Lift'],
    enPath: '/compare/ai-coaching-copilots-vs-static-playbooks-for-manager-enablement/'
  },
  {
    key: 'manager-coaching-copilot-vs-playbook',
    locale: 'es',
    slug: 'copilotos-ia-coaching-vs-playbooks-estaticos-para-enablement-managers',
    title: 'Copilotos de IA para coaching vs. playbooks estáticos para enablement de managers | AI Training Directory',
    description: 'Entrada localizada para equipos que evalúan copilotos de coaching con IA frente a playbooks tradicionales para managers.',
    h1: 'Copilotos de IA para coaching vs. playbooks estáticos para enablement de managers',
    intro: 'Ayuda a equipos de formación y enablement a decidir cuándo un playbook estático es suficiente y cuándo conviene pasar a copilotos para coaching en contexto real.',
    points: ['Comparación práctica de uso en tiempo real durante 1:1 y huddles', 'Criterios de consistencia de coaching y señal para equipos de enablement', 'Marco de piloto para gobernanza, carga operativa e impacto conductual'],
    enPath: '/compare/ai-coaching-copilots-vs-static-playbooks-for-manager-enablement/'
  },
  {
    key: 'video-feedback-vs-manual-assessment',
    locale: 'de',
    slug: 'ki-video-feedback-vs-manuelle-bewertung-soft-skills-training',
    title: 'KI-Video-Feedback vs. manuelle Bewertung im Soft-Skills-Training | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die KI-basiertes Video-Feedback gegen manuelle Assessor-Bewertung in Soft-Skills-Programmen vergleichen.',
    h1: 'KI-Video-Feedback vs. manuelle Bewertung im Soft-Skills-Training',
    intro: 'Hilft L&D- und Enablement-Teams, Bewertungskonsistenz, Feedback-Geschwindigkeit und Governance-Aufwand zwischen beiden Modellen zu vergleichen.',
    points: ['Vergleich der Bewertungsqualität über Kohorten hinweg', 'Messbare Entscheidungskriterien für Feedback-SLA und Coaching-Wirkung', 'Pilotrahmen für faire, auditierbare Skalierung'],
    enPath: '/compare/ai-video-feedback-vs-manual-assessment-for-soft-skills-training/'
  },
  {
    key: 'video-feedback-vs-manual-assessment',
    locale: 'es',
    slug: 'feedback-video-ia-vs-evaluacion-manual-en-soft-skills',
    title: 'Feedback en vídeo con IA vs. evaluación manual en formación de soft skills | AI Training Directory',
    description: 'Entrada localizada para equipos que comparan feedback automático en vídeo con evaluación manual en programas de habilidades blandas.',
    h1: 'Feedback en vídeo con IA vs. evaluación manual en formación de soft skills',
    intro: 'Ayuda a equipos de formación y enablement a decidir entre escalabilidad con IA y evaluación manual según calidad de feedback, velocidad y control operativo.',
    points: ['Comparativa de consistencia de evaluación por cohorte', 'Criterios operativos para SLA de feedback y mejora por reintento', 'Marco de piloto para gobernanza, equidad y trazabilidad'],
    enPath: '/compare/ai-video-feedback-vs-manual-assessment-for-soft-skills-training/'
  },
  {
    key: 'onboarding-buddy-vs-shadowing',
    locale: 'de',
    slug: 'ki-onboarding-buddy-chatbots-vs-manager-shadowing-checklisten',
    title: 'KI-Onboarding-Buddy-Chatbots vs. Manager-Shadowing-Checklisten | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die Onboarding-Buddy-Chatbots gegen managergeführte Shadowing-Checklisten vergleichen.',
    h1: 'KI-Onboarding-Buddy-Chatbots vs. Manager-Shadowing-Checklisten',
    intro: 'Hilft L&D- und Onboarding-Teams, Support-Last, Guidance-Konsistenz und Time-to-Confidence zwischen beiden Modellen zu bewerten.',
    points: ['Weniger ungeplante Manager-Unterbrechungen in Woche 1-2', 'Klarer Vergleich von Guidance-Konsistenz und Aktualität', 'Pilot-Framework für belastbare Rollout-Entscheidungen'],
    enPath: '/compare/ai-onboarding-buddy-chatbots-vs-manager-shadowing-checklists/'
  },
  {
    key: 'onboarding-buddy-vs-shadowing',
    locale: 'es',
    slug: 'chatbots-buddy-onboarding-ia-vs-checklists-shadowing-manager',
    title: 'Chatbots buddy de onboarding con IA vs. checklists de shadowing de manager | AI Training Directory',
    description: 'Entrada localizada para equipos que comparan chatbots buddy de onboarding con checklists de shadowing gestionados por managers.',
    h1: 'Chatbots buddy de onboarding con IA vs. checklists de shadowing de manager',
    intro: 'Ayuda a equipos de formación y onboarding a evaluar carga de soporte, consistencia de guía y tiempo-a-confianza entre ambos enfoques.',
    points: ['Menos interrupciones no planificadas para managers en semanas 1-2', 'Comparación clara de consistencia y actualización de respuestas', 'Marco de piloto para decidir despliegue con evidencia operativa'],
    enPath: '/compare/ai-onboarding-buddy-chatbots-vs-manager-shadowing-checklists/'
  },
  {
    key: 'lms-admin-assistant-vs-shared-inbox',
    locale: 'de',
    slug: 'ki-lms-admin-assistenten-vs-shared-inbox-support-training-ops',
    title: 'KI-LMS-Admin-Assistenten vs. Shared-Inbox-Support in Training Ops | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die KI-gestützte LMS-Admin-Assistenten gegen Shared-Inbox-Support-Workflows vergleichen.',
    h1: 'KI-LMS-Admin-Assistenten vs. Shared-Inbox-Support in Training Ops',
    intro: 'Hilft Training-Operations-Teams, SLA-Zuverlässigkeit, Governance-Sicherheit und Admin-Last zwischen beiden Support-Modellen zu bewerten.',
    points: ['Vergleich von Ticket-SLA und First-Resolution-Rate', 'Klare Kriterien für policy-sichere Aktionen und Eskalationen', 'Pilot-Framework für Backlog-Reduktion bei gleichbleibender Qualität'],
    enPath: '/compare/ai-lms-admin-assistants-vs-shared-inbox-support-for-training-ops/'
  },
  {
    key: 'lms-admin-assistant-vs-shared-inbox',
    locale: 'es',
    slug: 'asistentes-admin-lms-ia-vs-soporte-shared-inbox-training-ops',
    title: 'Asistentes admin LMS con IA vs. soporte shared inbox en training ops | AI Training Directory',
    description: 'Entrada localizada para comparar asistentes admin LMS con IA frente a flujos de soporte basados en shared inbox.',
    h1: 'Asistentes admin LMS con IA vs. soporte shared inbox en training ops',
    intro: 'Ayuda a equipos de operaciones de formación a decidir entre ambos modelos según SLA de resolución, control de gobernanza y carga operativa del equipo admin.',
    points: ['Comparativa de SLA de tickets y resolución al primer intento', 'Criterios operativos para acciones seguras y auditables', 'Marco de piloto para reducir backlog sin degradar calidad'],
    enPath: '/compare/ai-lms-admin-assistants-vs-shared-inbox-support-for-training-ops/'
  },
  {
    key: 'translation-management-vs-spreadsheets',
    locale: 'de',
    slug: 'ki-translation-management-vs-spreadsheets-fuer-training-lokalisierung',
    title: 'KI-Translation-Management vs. Spreadsheets für Training-Lokalisierung | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die KI-gestützte Translation-Management-Plattformen gegen Spreadsheet-Workflows in der Trainingslokalisierung bewerten.',
    h1: 'KI-Translation-Management vs. Spreadsheets für Training-Lokalisierung',
    intro: 'Hilft L&D- und Localization-Teams, Release-Geschwindigkeit, Terminologiequalität und QA-Aufwand zwischen beiden Modellen zu vergleichen.',
    points: ['Vergleich von Release-SLA nach Inhaltsupdates', 'Klarere Kriterien für Terminologie-Konsistenz und Audit-Trails', 'Pilot-Framework für Reviewer-Last und Skalierung über mehrere Sprachen'],
    enPath: '/compare/ai-translation-management-platforms-vs-spreadsheets-for-training-localization/'
  },
  {
    key: 'translation-management-vs-spreadsheets',
    locale: 'es',
    slug: 'plataformas-gestion-traduccion-ia-vs-hojas-calculo-localizacion-formacion',
    title: 'Plataformas de gestión de traducción con IA vs. hojas de cálculo para localización de formación | AI Training Directory',
    description: 'Entrada localizada para comparar plataformas de gestión de traducción con IA frente a flujos basados en hojas de cálculo para localización de formación.',
    h1: 'Plataformas de gestión de traducción con IA vs. hojas de cálculo para localización de formación',
    intro: 'Ayuda a equipos de L&D y localización a evaluar velocidad de publicación, consistencia terminológica y carga de revisión entre ambos enfoques.',
    points: ['Comparativa de SLA de localización tras cambios de contenido fuente', 'Criterios operativos para consistencia terminológica y control de calidad', 'Marco de piloto para medir carga de revisores y riesgo de retrasos'],
    enPath: '/compare/ai-translation-management-platforms-vs-spreadsheets-for-training-localization/'
  },
  {
    key: 'audit-evidence-vs-lms-completion-reports',
    locale: 'de',
    slug: 'ki-nachweis-proof-of-completion-vs-lms-abschlussberichte-fuer-compliance-audits',
    title: 'KI-Nachweise (Proof of Completion) vs. LMS-Abschlussberichte für Compliance-Audits | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die KI-gestützte Nachweis-Workflows gegen klassische LMS-Abschlussberichte für Audit-Sicherheit vergleichen.',
    h1: 'KI-Nachweise vs. LMS-Abschlussberichte für Compliance-Audits',
    intro: 'Hilft Compliance- und L&D-Teams, Audit-Response-Zeit, Evidenzqualität und Remediation-Nachverfolgung zwischen beiden Modellen zu bewerten.',
    points: ['Vergleich der Audit-Defensibility bei Follow-up-Anfragen', 'Kriterien für schnellere Audit-Paket-Erstellung und belastbare Chain-of-Custody', 'Pilot-Framework für Remediation-Tracking und Evidence-Qualität'],
    enPath: '/compare/ai-training-proof-of-completion-records-vs-lms-completion-reports-for-compliance-audits/'
  },
  {
    key: 'audit-evidence-vs-lms-completion-reports',
    locale: 'es',
    slug: 'registros-prueba-finalizacion-ia-vs-reportes-finalizacion-lms-auditorias-compliance',
    title: 'Registros de prueba de finalización con IA vs. reportes de finalización LMS para auditorías de compliance | AI Training Directory',
    description: 'Entrada localizada para comparar flujos de evidencia con IA frente a reportes de finalización LMS en contextos de auditoría de cumplimiento.',
    h1: 'Registros de prueba de finalización con IA vs. reportes LMS para auditorías de compliance',
    intro: 'Ayuda a equipos de compliance y L&D a evaluar defensibilidad de evidencia, velocidad de respuesta y trazabilidad de remediación entre ambos modelos.',
    points: ['Comparativa de tiempo de respuesta ante requerimientos de auditoría', 'Criterios operativos para trazabilidad de evidencia y control de cambios', 'Marco de piloto para medir defectos de evidencia y carga de retrabajo'],
    enPath: '/compare/ai-training-proof-of-completion-records-vs-lms-completion-reports-for-compliance-audits/'
  },
  {
    key: 'adaptive-recertification-vs-fixed-refreshers',
    locale: 'de',
    slug: 'ki-adaptive-rezertifizierungspfade-vs-fixe-jaehrliche-compliance-refreshers',
    title: 'KI-adaptive Rezertifizierungspfade vs. fixe jährliche Compliance-Refresher | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die adaptive KI-gestützte Rezertifizierung gegen starre jährliche Compliance-Refresher bewerten.',
    h1: 'KI-adaptive Rezertifizierungspfade vs. fixe jährliche Compliance-Refresher',
    intro: 'Hilft Compliance- und L&D-Teams, risikobasierte Rezertifizierung gegenüber starren Jahreszyklen nach Umsetzungsaufwand und Audit-Defensibility zu vergleichen.',
    points: ['Vergleich von Risk-Targeting-Präzision und Reaktionsgeschwindigkeit auf neue Lücken', 'Messbare Kriterien für Lernbelastung, Abschlussqualität und Wiederholungsrisiken', 'Pilot-Framework für Governance, RACI und skalierbare Rollout-Entscheidungen'],
    enPath: '/compare/ai-adaptive-recertification-paths-vs-fixed-annual-compliance-refreshers/'
  },
  {
    key: 'adaptive-recertification-vs-fixed-refreshers',
    locale: 'es',
    slug: 'rutas-recertificacion-adaptativa-ia-vs-refreshers-anuales-fijos-compliance',
    title: 'Rutas de recertificación adaptativa con IA vs. refreshers anuales fijos de compliance | AI Training Directory',
    description: 'Entrada localizada para equipos que comparan recertificación adaptativa con IA frente a refreshers anuales fijos en programas de compliance.',
    h1: 'Recertificación adaptativa con IA vs. refreshers anuales fijos de compliance',
    intro: 'Ayuda a equipos de compliance y L&D a decidir entre rutas adaptativas y ciclos anuales fijos según precisión de riesgo, carga del alumno y trazabilidad para auditoría.',
    points: ['Comparativa de velocidad para cerrar brechas emergentes de cumplimiento', 'Criterios operativos para reducir sobreentrenamiento sin perder control', 'Marco de piloto para asignación basada en riesgo, gobernanza y escalado'],
    enPath: '/compare/ai-adaptive-recertification-paths-vs-fixed-annual-compliance-refreshers/'
  },
  {
    key: 'audit-trail-automation-vs-manual-evidence',
    locale: 'de',
    slug: 'ki-audit-trail-automatisierung-vs-manuelle-kompilierung-von-trainingsevidenz',
    title: 'KI-Audit-Trail-Automatisierung vs. manuelle Kompilierung von Trainingsevidenz | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die KI-gestützte Audit-Trail-Automatisierung gegen manuelle Evidenzzusammenstellung für Compliance-Audits vergleichen.',
    h1: 'KI-Audit-Trail-Automatisierung vs. manuelle Kompilierung von Trainingsevidenz',
    intro: 'Hilft Compliance- und Training-Ops-Teams, Nachverfolgbarkeit, Audit-Reaktionszeit und operativen Aufwand zwischen beiden Modellen zu bewerten.',
    points: ['Vergleich der Audit-Paket-Erstellungszeit unter echtem Deadline-Druck', 'Messbare Kriterien für Evidenzvollständigkeit, Traceability und Defektrate', 'Pilot-Framework für skalierbare, auditfeste Governance-Entscheidungen'],
    enPath: '/compare/ai-audit-trail-automation-vs-manual-training-evidence-compilation/'
  },
  {
    key: 'audit-trail-automation-vs-manual-evidence',
    locale: 'es',
    slug: 'automatizacion-audit-trail-ia-vs-compilacion-manual-evidencia-formacion',
    title: 'Automatización de audit trail con IA vs. compilación manual de evidencia de formación | AI Training Directory',
    description: 'Entrada localizada para equipos que comparan automatización de audit trail con IA frente a compilación manual de evidencia para auditorías de formación y compliance.',
    h1: 'Automatización de audit trail con IA vs. compilación manual de evidencia de formación',
    intro: 'Ayuda a equipos de compliance y training ops a evaluar trazabilidad, velocidad de respuesta en auditoría y carga operativa entre ambos modelos.',
    points: ['Comparativa de tiempo de armado de paquetes de auditoría con presión de plazo real', 'Criterios operativos para completitud de evidencia y reducción de defectos', 'Marco de piloto para decidir con gobernanza y defensibilidad audit-ready'],
    enPath: '/compare/ai-audit-trail-automation-vs-manual-training-evidence-compilation/'
  },
  {
    key: 'distribution-playbook',
    locale: 'pl',
    slug: 'playbook-dystrybucji-katalogu-ai',
    title: 'Playbook dystrybucji katalogu AI | AI Training Directory',
    description: 'Lokalny playbook promocji katalogu AI z odnośnikiem do głównej checklisty outreachowej.',
    h1: 'Playbook dystrybucji katalogu AI',
    intro: 'Skrócona wersja dla zespołów, które chcą uruchomić regularny ruch na treściach szkoleniowych.',
    points: ['Kanały tygodniowej dystrybucji', 'Checklista jakości publikacji', 'Rytm raportowania działań'],
    enPath: '/solutions/'
  },
  {
    key: 'distribution-playbook',
    locale: 'cs',
    slug: 'distribucni-playbook-ai-katalogu',
    title: 'Distribuční playbook AI katalogu | AI Training Directory',
    description: 'Lokalizovaný distribuční playbook s odkazem na kanonický outreach checklist.',
    h1: 'Distribuční playbook AI katalogu',
    intro: 'Praktická verze pro týmy, které chtějí pravidelně zvyšovat návštěvnost tréninkového katalogu.',
    points: ['Týdenní distribuční kanály', 'Checklist kvality publikace', 'Rytmus reportingu výsledků'],
    enPath: '/solutions/'
  },
  {
    key: 'distribution-playbook',
    locale: 'sk',
    slug: 'distribucny-playbook-ai-katalogu',
    title: 'Distribučný playbook AI katalógu | AI Training Directory',
    description: 'Lokalizovaný distribučno-outreach playbook s odkazom na kanonický checklist.',
    h1: 'Distribučný playbook AI katalógu',
    intro: 'Praktická verzia pre tímy, ktoré chcú konzistentne zvyšovať návštevnosť tréningového katalógu.',
    points: ['Týždenné distribučné kanály', 'Checklist kvality publikácie', 'Rytmus reportovania výsledkov'],
    enPath: '/solutions/'
  },
  {
    key: 'distribution-playbook',
    locale: 'hu',
    slug: 'terjesztesi-playbook-ai-katalogus',
    title: 'AI katalógus terjesztési playbook | AI Training Directory',
    description: 'Lokalizált terjesztési playbook hivatkozással a kanonikus outreach checklistre.',
    h1: 'AI katalógus terjesztési playbook',
    intro: 'Gyakorlati változat csapatoknak, akik rendszeres forgalomnövelést akarnak a képzési tartalmakra.',
    points: ['Heti terjesztési csatornák', 'Publikációs minőségi checklist', 'Riportálási ritmus'],
    enPath: '/solutions/'
  },
  {
    key: 'distribution-playbook',
    locale: 'de',
    slug: 'distribution-playbook-ki-verzeichnis',
    title: 'Distribution-Playbook für KI-Verzeichnis | AI Training Directory',
    description: 'Lokales Distribution-Playbook mit Verweis auf die kanonische Outreach-Checklist.',
    h1: 'Distribution-Playbook für KI-Verzeichnis',
    intro: 'Praxisversion für Teams, die kontinuierlich mehr Traffic auf Trainingsinhalte bringen wollen.',
    points: ['Wöchentliche Distributionskanäle', 'Qualitäts-Checklist für Publishes', 'Rhythmus für Ergebnis-Reporting'],
    enPath: '/solutions/'
  },
  {
    key: 'distribution-playbook',
    locale: 'es',
    slug: 'playbook-distribucion-directorio-ia',
    title: 'Playbook de distribución del directorio de IA | AI Training Directory',
    description: 'Playbook localizado de distribución con enlace al checklist canónico de outreach.',
    h1: 'Playbook de distribución del directorio de IA',
    intro: 'Versión práctica para equipos que buscan crecimiento continuo de tráfico hacia contenido de formación.',
    points: ['Canales semanales de distribución', 'Checklist de calidad de publicación', 'Cadencia de reporte de resultados'],
    enPath: '/solutions/'
  },
  {
    key: 'editorial-methodology',
    locale: 'pl',
    slug: 'metodologia-redakcyjna-katalogu-ai',
    title: 'Metodologia redakcyjna katalogu AI | AI Training Directory',
    description: 'Jak oceniamy narzędzia i strony: workflow-fit, governance, lokalizacja i trudność wdrożenia.',
    h1: 'Metodologia redakcyjna katalogu AI',
    intro: 'Lokalny skrót zasad oceny, aby decyzje zakupowe były spójne i oparte na dowodach.',
    points: ['Jasne kryteria oceny', 'Konserwatywne claimy bez hype’u', 'Decyzje oparte o pilotaże'],
    enPath: '/editorial-methodology/'
  },
  {
    key: 'editorial-methodology',
    locale: 'cs',
    slug: 'redakcni-metodika-ai-katalogu',
    title: 'Redakční metodika AI katalogu | AI Training Directory',
    description: 'Jak hodnotíme nástroje a stránky: workflow-fit, governance, lokalizace a náročnost implementace.',
    h1: 'Redakční metodika AI katalogu',
    intro: 'Lokalizované shrnutí hodnotících pravidel pro konzistentní a obhajitelná rozhodnutí.',
    points: ['Jednotná hodnotící kritéria', 'Konzervativní tvrzení bez hype', 'Rozhodování opřené o piloty'],
    enPath: '/editorial-methodology/'
  },
  {
    key: 'editorial-methodology',
    locale: 'sk',
    slug: 'redakcna-metodika-ai-katalogu',
    title: 'Redakčná metodika AI katalógu | AI Training Directory',
    description: 'Ako hodnotíme nástroje a stránky: workflow-fit, governance, lokalizácia a náročnosť implementácie.',
    h1: 'Redakčná metodika AI katalógu',
    intro: 'Lokálny prehľad hodnotiacich pravidiel pre konzistentné a obhájiteľné rozhodovanie.',
    points: ['Jednotné hodnotiace kritériá', 'Konzervatívne tvrdenia bez hype', 'Rozhodovanie postavené na pilotoch'],
    enPath: '/editorial-methodology/'
  },
  {
    key: 'editorial-methodology',
    locale: 'hu',
    slug: 'ai-katalogus-szerkesztoi-modszertan',
    title: 'AI katalógus szerkesztői módszertan | AI Training Directory',
    description: 'Hogyan értékeljük az eszközöket és oldalakat: workflow-fit, governance, lokalizáció és implementációs nehézség.',
    h1: 'AI katalógus szerkesztői módszertan',
    intro: 'Lokalizált összefoglaló a megalapozott és következetes döntésekhez.',
    points: ['Egységes értékelési kritériumok', 'Visszafogott állítások túlzás nélkül', 'Pilot-alapú döntéshozatal'],
    enPath: '/editorial-methodology/'
  },
  {
    key: 'editorial-methodology',
    locale: 'de',
    slug: 'redaktionelle-methodik-ki-verzeichnis',
    title: 'Redaktionelle Methodik für KI-Verzeichnis | AI Training Directory',
    description: 'Wie wir Tools und Seiten bewerten: Workflow-Fit, Governance, Lokalisierung und Implementierungsaufwand.',
    h1: 'Redaktionelle Methodik für KI-Verzeichnis',
    intro: 'Lokalisierte Kurzfassung der Bewertungslogik für konsistente Kaufentscheidungen.',
    points: ['Klare Bewertungskriterien', 'Konservative Aussagen ohne Hype', 'Pilotbasierte Entscheidungsfindung'],
    enPath: '/editorial-methodology/'
  },
  {
    key: 'editorial-methodology',
    locale: 'es',
    slug: 'metodologia-editorial-directorio-ia',
    title: 'Metodología editorial del directorio de IA | AI Training Directory',
    description: 'Cómo evaluamos herramientas y páginas: workflow-fit, gobernanza, localización y dificultad de implementación.',
    h1: 'Metodología editorial del directorio de IA',
    intro: 'Resumen localizado de la lógica de evaluación para decisiones de compra consistentes.',
    points: ['Criterios claros de evaluación', 'Claims conservadores sin hype', 'Decisiones basadas en pilotos'],
    enPath: '/editorial-methodology/'
  },
  {
    key: 'skills-passporting-vs-manual-competency-matrices',
    locale: 'de',
    slug: 'ki-skills-passporting-vs-manuelle-kompetenzmatrizen-fuer-workforce-zertifizierung',
    title: 'KI-Skills-Passporting vs. manuelle Kompetenzmatrizen für Workforce-Zertifizierung | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die KI-basiertes Skills-Passporting gegen manuelle Kompetenzmatrizen in Zertifizierungsprozessen bewerten.',
    h1: 'KI-Skills-Passporting vs. manuelle Kompetenzmatrizen für Workforce-Zertifizierung',
    intro: 'Hilft Zertifizierungs- und L&D-Teams, Assessor-Konsistenz, Durchlaufzeiten und Audit-Traceability zwischen beiden Betriebsmodellen zu vergleichen.',
    points: ['Vergleich von Bewertungs-Konsistenz und Zertifizierungsdurchsatz', 'Praktische Kriterien für Audit-Evidenz und Recertification-Workflows', 'Pilot-Framework für Governance, Overrides und skalierbare Umsetzung'],
    enPath: '/compare/ai-skills-passporting-vs-manual-competency-matrices-for-workforce-certification/'
  },
  {
    key: 'skills-passporting-vs-manual-competency-matrices',
    locale: 'es',
    slug: 'skills-passporting-ia-vs-matrices-competencias-manuales-para-certificacion-workforce',
    title: 'Skills passporting con IA vs. matrices manuales de competencias para certificación de workforce | AI Training Directory',
    description: 'Entrada localizada para comparar skills passporting con IA frente a matrices manuales de competencias en operaciones de certificación laboral.',
    h1: 'Skills passporting con IA vs. matrices manuales de competencias para certificación de workforce',
    intro: 'Ayuda a equipos de certificación y L&D a evaluar consistencia entre evaluadores, velocidad operativa y trazabilidad de evidencia para auditorías.',
    points: ['Comparativa de consistencia de evaluación y throughput de certificación', 'Criterios operativos para evidencia auditable y recertificación', 'Marco de piloto con controles de gobernanza, overrides y escalado'],
    enPath: '/compare/ai-skills-passporting-vs-manual-competency-matrices-for-workforce-certification/'
  },

  {
    key: 'certification-renewal-alerting-vs-manual-tracking',
    locale: 'de',
    slug: 'ki-zertifizierungs-renewal-alerting-vs-manuelles-spreadsheet-tracking-fuer-workforce-compliance',
    title: 'KI-Zertifizierungs-Renewal-Alerting vs. manuelles Spreadsheet-Tracking für Workforce-Compliance | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die KI-gestütztes Renewal-Alerting gegen manuelles Spreadsheet-Tracking in Zertifizierungs-Compliance-Prozessen bewerten.',
    h1: 'KI-Renewal-Alerting vs. manuelles Spreadsheet-Tracking für Workforce-Compliance',
    intro: 'Hilft Compliance- und Training-Ops-Teams, Deadline-Sicherheit, Remediation-Geschwindigkeit und Audit-Traceability zwischen beiden Betriebsmodellen zu vergleichen.',
    points: ['Vergleich von On-time-Renewal-Rate und Overdue-Backlog', 'Klare Kriterien für Eskalationen, Owner-Rollen und Nachweisführung', 'Pilot-Framework für nachhaltige Zertifizierungs-Compliance ohne Fire-Drills'],
    enPath: '/compare/ai-certification-renewal-alerting-vs-manual-spreadsheet-tracking-for-workforce-compliance/'
  },
  {
    key: 'certification-renewal-alerting-vs-manual-tracking',
    locale: 'es',
    slug: 'alertas-renovacion-certificacion-ia-vs-seguimiento-manual-hojas-calculo-compliance-workforce',
    title: 'Alertas de renovación de certificación con IA vs. seguimiento manual en hojas de cálculo para compliance de workforce | AI Training Directory',
    description: 'Entrada localizada para comparar alertas de renovación con IA frente a seguimiento manual en hojas de cálculo en operaciones de compliance de certificaciones.',
    h1: 'Alertas de renovación con IA vs. seguimiento manual en hojas de cálculo para compliance de workforce',
    intro: 'Ayuda a equipos de compliance y training ops a evaluar fiabilidad de plazos, velocidad de remediación y trazabilidad audit-ready entre ambos modelos.',
    points: ['Comparativa de renovaciones a tiempo y reducción de vencimientos', 'Criterios operativos para escalaciones, ownership y evidencia auditable', 'Marco de piloto para sostener cumplimiento sin ciclos reactivos de última hora'],
    enPath: '/compare/ai-certification-renewal-alerting-vs-manual-spreadsheet-tracking-for-workforce-compliance/'
  },

  {
    key: 'learning-path-recommendations-vs-manager-curricula',
    locale: 'de',
    slug: 'ki-lernpfad-empfehlungen-vs-manager-zugewiesene-curricula-fuer-upskilling',
    title: 'KI-Lernpfad-Empfehlungen vs. managerzugewiesene Curricula für Upskilling | AI Training Directory',
    description: 'Lokalisierter Einstieg für Teams, die KI-basierte Lernpfad-Empfehlungen gegen managerzugewiesene Curricula im Upskilling vergleichen.',
    h1: 'KI-Lernpfad-Empfehlungen vs. managerzugewiesene Curricula für Upskilling',
    intro: 'Hilft L&D- und Enablement-Teams, Zuweisungsgenauigkeit, Time-to-Proficiency und Governance-Aufwand zwischen beiden Modellen realistisch zu bewerten.',
    points: ['Vergleich von Skill-Gap-Targeting und Zuweisungspräzision', 'Messbare Kriterien für schnellere Capability-Gewinne', 'Pilot-Framework für Fairness, Override-Regeln und skalierbare Umsetzung'],
    enPath: '/compare/ai-learning-path-recommendations-vs-manager-assigned-curricula-for-upskilling/'
  },
  {
    key: 'learning-path-recommendations-vs-manager-curricula',
    locale: 'es',
    slug: 'recomendaciones-rutas-aprendizaje-ia-vs-curricula-asignados-manager-upskilling',
    title: 'Recomendaciones de rutas de aprendizaje con IA vs. currícula asignados por managers para upskilling | AI Training Directory',
    description: 'Entrada localizada para comparar recomendaciones de rutas de aprendizaje con IA frente a currícula asignados por managers en programas de upskilling.',
    h1: 'Rutas de aprendizaje con IA vs. currícula asignados por managers para upskilling',
    intro: 'Ayuda a equipos de L&D y enablement a evaluar precisión de asignación, tiempo a competencia y carga de gobernanza entre ambos enfoques.',
    points: ['Comparativa de precisión para cerrar brechas de habilidades', 'Criterios operativos para reducir tiempo hasta capacidad demostrable', 'Marco de piloto para reglas de override, equidad y escalado'],
    enPath: '/compare/ai-learning-path-recommendations-vs-manager-assigned-curricula-for-upskilling/'
  }

];

export const i18nParityRubric = [
  {
    id: 'section-depth',
    name: 'Section depth parity',
    requirement: 'Each localized route includes: hero context, buyer checklist, trust/methodology context, routing guidance, and FAQ.',
    passGate: 'No localized page is a short teaser or thin bridge page.'
  },
  {
    id: 'decision-utility',
    name: 'Decision utility parity',
    requirement: 'Localized copy helps teams choose pilots, owners, metrics, and escalation paths.',
    passGate: 'Reader can decide next operational step without opening extra context tabs.'
  },
  {
    id: 'buyer-checklist-quality',
    name: 'Buyer checklist quality parity',
    requirement: 'Checklist items are concrete, sequenced, and auditable (owner, cadence, metric, evidence).',
    passGate: 'Checklist supports a 2-4 week pilot plan, not generic advice.'
  },
  {
    id: 'trust-methodology',
    name: 'Trust and methodology parity',
    requirement: 'Localized routes explain conservative claim boundaries and link to shared editorial standards.',
    passGate: 'Pages communicate evidence posture and avoid fabricated performance claims.'
  },
  {
    id: 'internal-link-intent',
    name: 'Internal-link intent parity',
    requirement: 'Links move users from discovery to implementation and use only valid route paths.',
    passGate: 'No locale-prefixed links are used for non-localized sections.'
  }
];

export function getLocalizedParityFramework(locale) {
  const copy = {
    en: {
      heading: 'Cross-language parity framework',
      intro: 'Shared quality gates that keep localized hubs and landings at the same practical depth as English implementation pages.',
      dimensionNames: {
        'section-depth': 'Section depth parity',
        'decision-utility': 'Decision utility parity',
        'buyer-checklist-quality': 'Buyer checklist quality parity',
        'trust-methodology': 'Trust and methodology parity',
        'internal-link-intent': 'Internal-link intent parity'
      },
      landingTrustHeading: 'Trust and methodology context',
      hubTrustHeading: 'Trust guardrails for localized routes',
      routingHeading: 'Action routing quality checks',
      checklistExtension: 'Define a review checkpoint after week 2 with one approval owner and one fallback escalation owner.',
      hubChecklist: [
        'Start with one localized page that matches your immediate buying intent.',
        'Run one pilot workflow for 2-4 weeks before expanding scope.',
        'Assign one content owner, one reviewer, and one escalation owner.',
        'Capture cycle-time and quality deltas before procurement decisions.'
      ],
      trustBullets: [
        'Claims are intentionally conservative and framed as pilot decisions, not guaranteed outcomes.',
        'Evaluation standards stay aligned to workflow-fit, governance, localization, and implementation difficulty.',
        'Localized pages are reviewed with build and route checks before publish.'
      ],
      routingChecks: [
        'Use localized pages for discovery intent and route implementation work to canonical English execution pages.',
        'Send compare intent to /compare/ routes and deployment intent to /solutions/ routes.',
        'Keep links unprefixed for non-localized sections unless a locale route is explicitly available.'
      ],
      methodologyLinks: [
        { label: 'Open editorial methodology', href: '/editorial-methodology/' },
        { label: 'Open L&D tech evaluation checklist', href: '/solutions/ai-ld-tech-evaluation-checklist/' },
        { label: 'Open compare hub', href: '/compare/' }
      ]
    },
    pl: {
      heading: 'Ramy parytetu między językami',
      intro: 'Wspólne progi jakości utrzymujące lokalne huby i landingi na tym samym poziomie użyteczności co strony angielskie.',
      dimensionNames: {
        'section-depth': 'Parytet głębokości sekcji',
        'decision-utility': 'Parytet użyteczności decyzyjnej',
        'buyer-checklist-quality': 'Parytet jakości checklisty zakupowej',
        'trust-methodology': 'Parytet zaufania i metodologii',
        'internal-link-intent': 'Parytet intencji linkowania wewnętrznego'
      },
      landingTrustHeading: 'Kontekst zaufania i metodologii',
      hubTrustHeading: 'Zasady zaufania dla stron lokalnych',
      routingHeading: 'Kontrola jakości ścieżek przejścia',
      checklistExtension: 'Po 2 tygodniach zaplanuj formalny przegląd z właścicielem akceptacji i osobą eskalacyjną.',
      hubChecklist: [
        'Zacznij od lokalnej strony najlepiej dopasowanej do bieżącego intentu zakupowego.',
        'Uruchom jeden workflow pilotowy na 2-4 tygodnie przed rozszerzeniem zakresu.',
        'Wyznacz właściciela treści, recenzenta i osobę odpowiedzialną za eskalację.',
        'Zapisz różnicę czasu cyklu i jakości przed decyzją zakupową.'
      ],
      trustBullets: [
        'Stosujemy konserwatywne claimy i opisujemy rekomendacje jako decyzje pilotowe.',
        'Ocena jest spójna z kryteriami: workflow-fit, governance, lokalizacja i trudność wdrożenia.',
        'Każda lokalna strona przechodzi kontrolę builda i ścieżek linków przed publikacją.'
      ],
      routingChecks: [
        'Strony lokalne łapią intent odkrywania, a wdrożenie kierujemy do kanonicznych stron angielskich.',
        'Intent porównawczy prowadź do /compare/, a intent wdrożeniowy do /solutions/.',
        'Dla sekcji bez lokalizacji używaj linków bez prefiksu językowego.'
      ],
      methodologyLinks: [
        { label: 'Otwórz metodologię redakcyjną', href: '/editorial-methodology/' },
        { label: 'Otwórz checklistę oceny L&D', href: '/solutions/ai-ld-tech-evaluation-checklist/' },
        { label: 'Przejdź do hubu porównań', href: '/compare/' }
      ]
    },
    cs: {
      heading: 'Rámec parity mezi jazyky',
      intro: 'Sdílené kvalitativní brány, které drží lokalizované huby i landing stránky na stejné praktické úrovni jako anglické implementační stránky.',
      dimensionNames: {
        'section-depth': 'Parita hloubky sekcí',
        'decision-utility': 'Parita rozhodovací užitečnosti',
        'buyer-checklist-quality': 'Parita kvality nákupního checklistu',
        'trust-methodology': 'Parita důvěry a metodiky',
        'internal-link-intent': 'Parita záměru interního linkování'
      },
      landingTrustHeading: 'Kontext důvěry a metodiky',
      hubTrustHeading: 'Pravidla důvěry pro lokalizované stránky',
      routingHeading: 'Kontroly kvality navigace',
      checklistExtension: 'Po 2 týdnech proveďte formální review s vlastníkem schválení i eskalační odpovědností.',
      hubChecklist: [
        'Začněte lokalizovanou stránkou, která odpovídá aktuálnímu nákupnímu záměru.',
        'Spusťte jeden pilotní workflow na 2-4 týdny, než rozšíříte rozsah.',
        'Určete vlastníka obsahu, review odpovědnost i eskalační roli.',
        'Před nákupním rozhodnutím změřte změnu cyklu i kvality.'
      ],
      trustBullets: [
        'Tvrzení jsou záměrně konzervativní a formulovaná jako pilotní rozhodnutí.',
        'Hodnocení drží stejná kritéria: workflow-fit, governance, lokalizace a implementační náročnost.',
        'Každá lokalizovaná stránka prochází build verifikací a kontrolou tras.'
      ],
      routingChecks: [
        'Lokalizované stránky zachytí discovery intent, implementace směřuje na kanonické anglické stránky.',
        'Srovnávací intent veďte na /compare/ a implementační intent na /solutions/.',
        'U nelokalizovaných sekcí používejte odkazy bez jazykového prefixu.'
      ],
      methodologyLinks: [
        { label: 'Otevřít redakční metodiku', href: '/editorial-methodology/' },
        { label: 'Otevřít checklist pro L&D evaluaci', href: '/solutions/ai-ld-tech-evaluation-checklist/' },
        { label: 'Přejít na hub srovnání', href: '/compare/' }
      ]
    },
    sk: {
      heading: 'Rámec parity medzi jazykmi',
      intro: 'Spoločné kvalitatívne brány, ktoré držia lokalizované huby a landingy na rovnakej praktickej úrovni ako anglické implementačné stránky.',
      dimensionNames: {
        'section-depth': 'Parita hĺbky sekcií',
        'decision-utility': 'Parita rozhodovacej použiteľnosti',
        'buyer-checklist-quality': 'Parita kvality nákupného checklistu',
        'trust-methodology': 'Parita dôvery a metodiky',
        'internal-link-intent': 'Parita zámeru interného linkovania'
      },
      landingTrustHeading: 'Kontext dôvery a metodiky',
      hubTrustHeading: 'Pravidlá dôvery pre lokalizované stránky',
      routingHeading: 'Kontroly kvality navigácie',
      checklistExtension: 'Po 2 týždňoch urobte formálne review s vlastníkom schválenia aj eskalačným vlastníkom.',
      hubChecklist: [
        'Začni lokalizovanou stránkou, ktorá zodpovedá aktuálnemu nákupnému intentu.',
        'Spusť jeden pilotný workflow na 2-4 týždne pred rozšírením rozsahu.',
        'Priraď vlastníka obsahu, review vlastníka aj eskalačnú rolu.',
        'Pred nákupným rozhodnutím zmeraj zmenu cyklu a kvality.'
      ],
      trustBullets: [
        'Tvrdenia sú zámerne konzervatívne a formulované ako pilotné rozhodnutia.',
        'Hodnotenie zostáva pri rovnakých kritériách: workflow-fit, governance, lokalizácia a náročnosť implementácie.',
        'Každá lokalizovaná stránka prechádza build overením a kontrolou trás.'
      ],
      routingChecks: [
        'Lokalizované stránky zachytávajú discovery intent, implementácia smeruje na kanonické anglické stránky.',
        'Porovnávací intent smerujte na /compare/ a implementačný intent na /solutions/.',
        'Pri nelokalizovaných sekciách používajte odkazy bez jazykového prefixu.'
      ],
      methodologyLinks: [
        { label: 'Otvoriť redakčnú metodiku', href: '/editorial-methodology/' },
        { label: 'Otvoriť checklist pre L&D evaluáciu', href: '/solutions/ai-ld-tech-evaluation-checklist/' },
        { label: 'Prejsť na hub porovnaní', href: '/compare/' }
      ]
    },
    hu: {
      heading: 'Nyelvek közötti paritási keretrendszer',
      intro: 'Közös minőségi kapuk, amelyek a lokalizált hubokat és landing oldalakat az angol implementációs oldalakkal azonos gyakorlati szinten tartják.',
      dimensionNames: {
        'section-depth': 'Szekciómélység-paritás',
        'decision-utility': 'Döntési használhatóság paritása',
        'buyer-checklist-quality': 'Beszerzési checklist minőségi paritása',
        'trust-methodology': 'Bizalmi és módszertani paritás',
        'internal-link-intent': 'Belső linkelési szándék paritása'
      },
      landingTrustHeading: 'Bizalmi és módszertani kontextus',
      hubTrustHeading: 'Bizalmi korlátok a lokalizált oldalakhoz',
      routingHeading: 'Navigációs minőségellenőrzések',
      checklistExtension: 'A 2. hét után legyen formális review egy jóváhagyó és egy eszkalációs felelős kijelölésével.',
      hubChecklist: [
        'Kezdj egy olyan lokalizált oldallal, ami a legfontosabb beszerzési szándékot fedi.',
        'Futtass egy pilot workflow-t 2-4 hétig, mielőtt bővíted a scope-ot.',
        'Nevezz ki tartalomgazdát, review felelőst és eszkalációs felelőst.',
        'Beszerzési döntés előtt mérd a ciklusidő- és minőségváltozást.'
      ],
      trustBullets: [
        'Az állítások tudatosan konzervatívak, és pilot döntésként vannak keretezve.',
        'Az értékelés ugyanazokra a szempontokra épül: workflow-fit, governance, lokalizáció, implementációs nehézség.',
        'Minden lokalizált oldal build- és útvonalellenőrzéssel megy ki.'
      ],
      routingChecks: [
        'A lokalizált oldalak discovery intentet fednek le, az implementáció a kanonikus angol oldalakra megy.',
        'Összehasonlítási intentet /compare/ alá, bevezetési intentet /solutions/ alá irányíts.',
        'Nem lokalizált szekcióknál nyelvi előtag nélküli linket használj.'
      ],
      methodologyLinks: [
        { label: 'Szerkesztői módszertan megnyitása', href: '/editorial-methodology/' },
        { label: 'L&D technológiai checklist megnyitása', href: '/solutions/ai-ld-tech-evaluation-checklist/' },
        { label: 'Összehasonlítási hub megnyitása', href: '/compare/' }
      ]
    },
    de: {
      heading: 'Sprachübergreifendes Paritäts-Framework',
      intro: 'Gemeinsame Qualitäts-Gates, damit lokalisierte Hubs und Landingpages den gleichen praktischen Nutzen wie englische Umsetzungsseiten liefern.',
      dimensionNames: {
        'section-depth': 'Parität der Abschnittstiefe',
        'decision-utility': 'Parität der Entscheidungsnutzung',
        'buyer-checklist-quality': 'Parität der Buyer-Checklist-Qualität',
        'trust-methodology': 'Parität von Vertrauen und Methodik',
        'internal-link-intent': 'Parität der internen Link-Intention'
      },
      landingTrustHeading: 'Vertrauens- und Methodik-Kontext',
      hubTrustHeading: 'Trust-Guardrails für lokalisierte Seiten',
      routingHeading: 'Qualitätschecks für Routing',
      checklistExtension: 'Nach Woche 2 ein formales Review mit Freigabe-Verantwortung und klarer Eskalationsrolle einplanen.',
      hubChecklist: [
        'Starten Sie mit der lokalisierten Seite, die Ihrem aktuellen Buying-Intent entspricht.',
        'Führen Sie einen Pilot-Workflow 2-4 Wochen durch, bevor Sie den Umfang erweitern.',
        'Benennen Sie Content-Owner, Reviewer und Eskalationsverantwortung.',
        'Messen Sie Zykluszeit- und Qualitätsdifferenz vor der Beschaffungsentscheidung.'
      ],
      trustBullets: [
        'Aussagen sind bewusst konservativ und als Pilotentscheidungen statt Erfolgsversprechen formuliert.',
        'Die Bewertung bleibt konsistent auf Workflow-Fit, Governance, Lokalisierung und Implementierungsaufwand.',
        'Lokalisierte Seiten werden vor Veröffentlichung mit Build- und Routenchecks verifiziert.'
      ],
      routingChecks: [
        'Lokalisierte Seiten bedienen Discovery-Intent; Umsetzung geht auf kanonische englische Ausführungsseiten.',
        'Vergleichs-Intent auf /compare/, Implementierungs-Intent auf /solutions/ routen.',
        'Für nicht lokalisierte Bereiche nur unpräfixte Links verwenden.'
      ],
      methodologyLinks: [
        { label: 'Redaktionelle Methodik öffnen', href: '/editorial-methodology/' },
        { label: 'L&D-Evaluations-Checklist öffnen', href: '/solutions/ai-ld-tech-evaluation-checklist/' },
        { label: 'Compare-Hub öffnen', href: '/compare/' }
      ]
    },
    es: {
      heading: 'Marco de paridad entre idiomas',
      intro: 'Puertas de calidad compartidas para que hubs y landings localizados mantengan el mismo valor práctico que las páginas de implementación en inglés.',
      dimensionNames: {
        'section-depth': 'Paridad de profundidad de secciones',
        'decision-utility': 'Paridad de utilidad para decisiones',
        'buyer-checklist-quality': 'Paridad de calidad de checklist de compra',
        'trust-methodology': 'Paridad de confianza y metodología',
        'internal-link-intent': 'Paridad de intención de enlazado interno'
      },
      landingTrustHeading: 'Contexto de confianza y metodología',
      hubTrustHeading: 'Guardrails de confianza para rutas localizadas',
      routingHeading: 'Controles de calidad de enrutamiento',
      checklistExtension: 'Después de la semana 2, ejecuta una revisión formal con dueño de aprobación y responsable de escalado.',
      hubChecklist: [
        'Empieza por la página localizada que mejor encaje con tu intención de compra actual.',
        'Ejecuta un piloto de workflow durante 2-4 semanas antes de ampliar alcance.',
        'Asigna dueño de contenido, reviewer y responsable de escalado.',
        'Mide cambio en ciclo y calidad antes de decidir compra.'
      ],
      trustBullets: [
        'Los claims se mantienen conservadores y se presentan como decisiones de piloto.',
        'La evaluación conserva los mismos criterios: workflow-fit, gobernanza, localización y dificultad de implementación.',
        'Cada página localizada pasa verificación de build y chequeo de rutas antes de publicar.'
      ],
      routingChecks: [
        'Las páginas localizadas capturan intención discovery y la implementación se deriva a páginas canónicas en inglés.',
        'Dirige intención comparativa a /compare/ y intención de despliegue a /solutions/.',
        'En secciones no localizadas, usa enlaces sin prefijo de idioma.'
      ],
      methodologyLinks: [
        { label: 'Abrir metodología editorial', href: '/editorial-methodology/' },
        { label: 'Abrir checklist de evaluación L&D', href: '/solutions/ai-ld-tech-evaluation-checklist/' },
        { label: 'Abrir hub de comparativas', href: '/compare/' }
      ]
    }
  };

  const localized = copy[locale] || copy.en;

  return {
    updatedOn: '2026-02-17',
    ...localized,
    dimensions: i18nParityRubric.map((dimension) => ({
      ...dimension,
      localizedName: localized.dimensionNames[dimension.id] || dimension.name
    }))
  };
}

export function buildLocalizedPath(locale, slug) {
  return `/${locale}/${slug}/`;
}

export function getSiteAlternates() {
  const links = [{ hreflang: 'en', href: 'https://aitraining.directory/' }];

  for (const [locale, meta] of Object.entries(localeMeta)) {
    if (locale === 'en') continue;
    const href = `https://aitraining.directory/${locale}/`;
    links.push({ hreflang: locale, href });
    if (meta.hreflang && meta.hreflang !== locale) {
      links.push({ hreflang: meta.hreflang, href });
    }
  }

  links.push({ hreflang: 'x-default', href: 'https://aitraining.directory/' });
  return links;
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
  const parityFramework = getLocalizedParityFramework(locale);

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
    'distribution-playbook': {
      checklist: {
        pl: [
          'Zacznij od kanału o najszybszym sprzężeniu zwrotnym (newsletter, LinkedIn, społeczność branżowa).',
          'Publikuj 1 konkretny insight tygodniowo i zawsze linkuj do checklisty kanonicznej.',
          'Mierz kliknięcia, wejścia na strony rozwiązaniowe i zapisy z ruchu dystrybucyjnego.',
          'Raz w tygodniu aktualizuj backlog tematów na podstawie najlepiej konwertujących wejść.'
        ],
        cs: [
          'Začněte kanálem s nejrychlejší zpětnou vazbou (newsletter, LinkedIn, oborová komunita).',
          'Publikujte 1 konkrétní insight týdně a vždy odkazujte na kanonický checklist.',
          'Měřte prokliky, návštěvy solution stránek a konverze z distribučního provozu.',
          'Jednou týdně aktualizujte tematický backlog podle nejlépe konvertujících vstupů.'
        ],
        sk: [
          'Začnite kanálom s najrýchlejšou spätnou väzbou (newsletter, LinkedIn, odborná komunita).',
          'Publikujte 1 konkrétny insight týždenne a vždy odkazujte na kanonický checklist.',
          'Merajte prekliky, návštevy solution stránok a konverzie z distribučnej návštevnosti.',
          'Raz týždenne aktualizujte backlog tém podľa najlepšie konvertujúcich vstupov.'
        ],
        hu: [
          'Kezdd a leggyorsabb visszacsatolású csatornával (hírlevél, LinkedIn, szakmai közösség).',
          'Hetente 1 konkrét insightot publikálj, és mindig hivatkozz a kanonikus checklistre.',
          'Mérd az átkattintásokat, a solution oldalak látogatását és a terjesztési forgalom konverzióit.',
          'Hetente frissítsd a témabacklogot a legjobban konvertáló belépési pontok alapján.'
        ],
        de: [
          'Starten Sie mit einem Kanal mit schnellem Feedback (Newsletter, LinkedIn, Fach-Community).',
          'Veröffentlichen Sie wöchentlich 1 konkreten Insight und verlinken Sie immer die kanonische Checklist.',
          'Messen Sie Klicks, Besuche auf Solution-Seiten und Conversions aus dem Distributions-Traffic.',
          'Aktualisieren Sie den Themen-Backlog wöchentlich anhand der stärksten Einstiegsseiten.'
        ],
        es: [
          'Empieza por el canal con feedback más rápido (newsletter, LinkedIn, comunidad profesional).',
          'Publica 1 insight concreto por semana y enlaza siempre al checklist canónico.',
          'Mide clics, visitas a páginas de soluciones y conversiones del tráfico de distribución.',
          'Actualiza semanalmente el backlog de temas según las entradas con mejor conversión.'
        ],
        en: [
          'Start with the channel that has the fastest feedback loop (newsletter, LinkedIn, niche community).',
          'Publish one concrete insight weekly and always link back to the canonical checklist.',
          'Track clicks, solution-page sessions, and conversions from distribution traffic.',
          'Refresh the topic backlog weekly based on the highest-converting entry points.'
        ]
      },
      internalLinks: {
        pl: [
          { label: 'Otwórz kanoniczną checklistę outreach', href: 'https://github.com/jarvs1100/aitraining-directory/blob/main/ops/outreach-distribution-checklist.md' },
          { label: 'Przejdź do stron rozwiązań', href: '/solutions/' },
          { label: 'Porównania narzędzi', href: '/compare/' }
        ],
        cs: [
          { label: 'Otevřít kanonický outreach checklist', href: 'https://github.com/jarvs1100/aitraining-directory/blob/main/ops/outreach-distribution-checklist.md' },
          { label: 'Přejít na stránky řešení', href: '/solutions/' },
          { label: 'Srovnání nástrojů', href: '/compare/' }
        ],
        sk: [
          { label: 'Otvoriť kanonický outreach checklist', href: 'https://github.com/jarvs1100/aitraining-directory/blob/main/ops/outreach-distribution-checklist.md' },
          { label: 'Prejsť na stránky riešení', href: '/solutions/' },
          { label: 'Porovnania nástrojov', href: '/compare/' }
        ],
        hu: [
          { label: 'Kanonikus outreach checklist megnyitása', href: 'https://github.com/jarvs1100/aitraining-directory/blob/main/ops/outreach-distribution-checklist.md' },
          { label: 'Megoldási oldalak', href: '/solutions/' },
          { label: 'Eszköz-összehasonlítások', href: '/compare/' }
        ],
        de: [
          { label: 'Kanonische Outreach-Checklist öffnen', href: 'https://github.com/jarvs1100/aitraining-directory/blob/main/ops/outreach-distribution-checklist.md' },
          { label: 'Zu den Lösungsseiten', href: '/solutions/' },
          { label: 'Tool-Vergleiche', href: '/compare/' }
        ],
        es: [
          { label: 'Abrir checklist canónico de outreach', href: 'https://github.com/jarvs1100/aitraining-directory/blob/main/ops/outreach-distribution-checklist.md' },
          { label: 'Ir a páginas de soluciones', href: '/solutions/' },
          { label: 'Comparativas de herramientas', href: '/compare/' }
        ],
        en: [
          { label: 'Open canonical outreach checklist', href: 'https://github.com/jarvs1100/aitraining-directory/blob/main/ops/outreach-distribution-checklist.md' },
          { label: 'Go to solution pages', href: '/solutions/' },
          { label: 'Compare tools', href: '/compare/' }
        ]
      },
      intentCopy: {
        pl: 'Lokalna wersja playbooka dystrybucji prowadzi do jednej kanonicznej checklisty operacyjnej.',
        cs: 'Lokalizovaná verze distribučního playbooku odkazuje na jednu kanonickou provozní checklistu.',
        sk: 'Lokalizovaná verzia distribučného playbooku smeruje na jeden kanonický operačný checklist.',
        hu: 'A lokalizált terjesztési playbook egyetlen kanonikus operatív checklistre mutat.',
        de: 'Diese lokalisierte Playbook-Seite verweist auf eine zentrale kanonische Operations-Checklist.',
        es: 'Esta versión localizada del playbook enlaza a una única checklist canónica de operaciones.',
        en: 'This localized distribution playbook points to one canonical operations checklist.'
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
  const internalLinks = typeof linkLabels[0] === 'object'
    ? linkLabels
    : [
        { label: linkLabels[0], href: key === 'ai-training-tools' ? '/solutions/' : '/solutions/sop-to-video-training/' },
        { label: linkLabels[1], href: key === 'ai-training-tools' ? '/compare/' : '/solutions/new-hire-onboarding-automation/' },
        { label: linkLabels[2], href: key === 'ai-training-tools' ? '/categories/' : '/submit/' }
      ];

  return {
    labels,
    checklist: [...checklist, parityFramework.checklistExtension],
    internalLinks,
    intentCopy: block.intentCopy[locale] || block.intentCopy.en,
    trustBullets: parityFramework.trustBullets,
    routingChecks: parityFramework.routingChecks,
    methodologyLinks: parityFramework.methodologyLinks,
    parityFramework
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
