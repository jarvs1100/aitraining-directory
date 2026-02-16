import { allListings } from './data.js';

export const useCases = [
  { slug: 'sop-to-video-training', label: 'SOP to Video Training', title: 'SOP to Video Training Tools for L&D Teams', meta: 'Compare AI tools that turn SOPs into training videos for faster onboarding and compliance enablement.', intro: 'If your L&D team is buried in SOP updates, these tools help convert process docs into consistent training assets faster.' },
  { slug: 'new-hire-onboarding-automation', label: 'New Hire Onboarding Automation', title: 'AI Tools for New Hire Onboarding Automation', meta: 'Find AI tools that streamline onboarding plans, manager enablement, and day-1 readiness for employees.', intro: 'Onboarding quality often breaks when teams scale. This stack focuses on repeatable onboarding flows that reduce ramp time.' },
  { slug: 'compliance-training-content-creation', label: 'Compliance Training Content', title: 'AI Tools for Compliance Training Content Creation', meta: 'Discover AI tools to build compliance learning content, policy explainers, and mandatory training refreshers.', intro: 'Compliance teams need clear, current content. These tools help training owners produce policy-safe modules quickly.' },
  { slug: 'sales-enablement-training', label: 'Sales Enablement Training', title: 'Sales Enablement AI Tools for Internal Training', meta: 'Shortlist AI tools to create sales onboarding, objection handling drills, and coaching materials.', intro: 'Revenue teams need ongoing enablement, not one-off decks. These tools support continuous practice and reinforcement.' },
  { slug: 'customer-support-training', label: 'Customer Support Training', title: 'AI Tools for Customer Support Training Programs', meta: 'Compare AI tools for support onboarding, QA coaching, and playbook training at scale.', intro: 'Support quality depends on fast knowledge transfer. This page highlights tools that operationalize support training.' },
  { slug: 'microlearning-video-production', label: 'Microlearning Video Production', title: 'AI Tools for Microlearning Video Production', meta: 'Create short-form training videos and explainers with AI voice, avatar, and editing workflows.', intro: 'Microlearning works when production is lightweight. These tools help L&D publish frequent, focused lessons.' },
  { slug: 'manager-coaching-playbooks', label: 'Manager Coaching Playbooks', title: 'AI Tools for Manager Coaching Playbooks', meta: 'Build manager training playbooks, coaching prompts, and performance support assets with AI.', intro: 'Managers need practical coaching resources they can use in weekly 1:1s. These tools support scalable leadership development.' },
  { slug: 'knowledge-base-to-training', label: 'Knowledge Base to Training', title: 'Turn Knowledge Base Content into Training with AI', meta: 'Use AI to repurpose internal docs and wikis into learning modules, walkthroughs, and onboarding content.', intro: 'Most training content already exists in docs. This workflow helps transform static knowledge into usable learning experiences.' },
  { slug: 'product-training-rollouts', label: 'Product Training Rollouts', title: 'AI Tools for Product Training Rollouts', meta: 'Launch internal product training faster with AI-generated walkthroughs, lesson updates, and role-based content.', intro: 'When products ship quickly, training falls behind. These tools close the gap between release notes and employee readiness.' },
  { slug: 'call-review-and-coaching', label: 'Call Review and Coaching', title: 'AI Tools for Call Review and Coaching Workflows', meta: 'Identify coaching moments and build targeted training from call transcripts and conversation intelligence.', intro: 'Coaching improves when you can pinpoint patterns. These tools support data-backed call review and coaching loops.' },
  { slug: 'multilingual-employee-training', label: 'Multilingual Employee Training', title: 'AI Tools for Multilingual Employee Training', meta: 'Scale employee training globally using AI translation, voice localization, and region-specific delivery.', intro: 'Global teams need training that lands in local language and context. These tools support multilingual delivery without full rebuilds.' },
  { slug: 'ai-trainer-workflow-automation', label: 'L&D Workflow Automation', title: 'AI Workflow Automation for Training and L&D Operations', meta: 'Reduce repetitive L&D tasks with AI workflows for content creation, updates, and training operations.', intro: 'Training teams are asked to do more with less. Automation-first tools free capacity for higher-impact learning design work.' }
];

export const roles = ['Head of L&D','L&D Manager','Training Operations Manager','Enablement Manager','HR Business Partner','People Operations Lead','Compliance Manager','Customer Support Manager','Sales Enablement Lead','Instructional Designer'].map((role) => ({
  slug: `for-${role.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  label: role,
  title: `Best AI Training Tools for ${role}`,
  meta: `Find AI tools aligned to ${role} workflows, from onboarding content to training operations and coaching support.`,
  intro: `${role}s need practical systems, not hype. This shortlist focuses on tools that improve learning delivery and team execution.`
}));

export const industries = ['Healthcare','Manufacturing','Retail','Financial Services','SaaS','Logistics','Hospitality','BPO and Call Centers','Professional Services','Public Sector'].map((industry) => ({
  slug: `industry-${industry.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  label: industry,
  title: `AI Training Tools for ${industry} Teams`,
  meta: `Explore AI training tools used by ${industry} organizations for onboarding, compliance, and upskilling workflows.`,
  intro: `${industry} teams face specific training pressure around speed, consistency, and compliance. These tools are relevant for that operating context.`
}));

export const comparisonPages = [
  { slug: 'synthesia-alternatives', title: 'Synthesia Alternatives for Corporate Training', meta: 'Compare alternatives to Synthesia for AI video training production in L&D contexts.', intro: 'If Synthesia is on your shortlist, compare adjacent tools based on workflow fit, editing control, and localization needs.' },
  { slug: 'descript-vs-camtasia-for-training-videos', title: 'Descript vs Camtasia for Training Videos', meta: 'Head-to-head comparison of Descript and Camtasia for internal training production teams.', intro: 'Both tools support training video production, but they differ in editing model, collaboration, and speed to publish.' },
  { slug: 'chatgpt-vs-claude-for-ld-content', title: 'ChatGPT vs Claude for L&D Content Creation', meta: 'Compare ChatGPT and Claude for SOP rewriting, learning copy, and training knowledge workflows.', intro: 'L&D teams often test both assistants. This page helps frame where each can fit in a training content stack.' },
  { slug: 'murf-vs-elevenlabs-for-training-voiceovers', title: 'Murf vs ElevenLabs for Training Voiceovers', meta: 'Compare Murf and ElevenLabs for internal training voiceover quality, speed, and localization.', intro: 'Voice generation is now table stakes for learning teams. The key difference is workflow and production reliability.' },
  { slug: 'otter-vs-fireflies-for-meeting-knowledge', title: 'Otter vs Fireflies for Meeting Knowledge Capture', meta: 'Compare Otter and Fireflies for training ops note capture, action tracking, and searchable call knowledge.', intro: 'Training ops teams can repurpose meeting insights into enablement assets. This comparison focuses on that use case.' },
  { slug: 'gamma-vs-tome-for-training-presentations', title: 'Gamma vs Tome for Training Presentations', meta: 'Evaluate Gamma and Tome for building training decks and storytelling-based learning presentations.', intro: 'Presentation tools can accelerate workshop prep. This guide compares two AI-native options for learning teams.' },
  { slug: 'notion-ai-vs-confluence-for-training-knowledge', title: 'Notion AI vs Confluence for Training Knowledge Hubs', meta: 'Choose between Notion AI and Confluence for documenting and scaling internal training knowledge.', intro: 'Knowledge systems are a backbone for L&D. This comparison helps decide based on team structure and speed needs.' },
  { slug: 'trainual-vs-knowledge-base-workflows', title: 'Trainual vs General Knowledge Base Workflows', meta: 'Compare Trainual against lighter knowledge-base-based training systems for small teams.', intro: 'Some teams need formal training software, others need practical workflows. This page maps the trade-offs clearly.' }
];

export const solutionPages = [...useCases.map((i)=>({...i,type:'use-case'})), ...roles.map((i)=>({...i,type:'role'})), ...industries.map((i)=>({...i,type:'industry'}))];
export const getSolutionBySlug = (slug) => solutionPages.find((p) => p.slug === slug);
export const getComparisonBySlug = (slug) => comparisonPages.find((p) => p.slug === slug);
export function pickTools(seed = 0, count = 6) {
  return allListings.slice(seed, seed + count).length === count ? allListings.slice(seed, seed + count) : [...allListings.slice(seed), ...allListings.slice(0, Math.max(0, count - (allListings.length - seed)))];
}
