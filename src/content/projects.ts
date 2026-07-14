export type Project = {
    id: string;
    name: string;
    kicker: string;
    description: string;
    url: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 'mirivo',
        name:'Mirivo',
        kicker: 'Personal · Portfolio piece',
        description: 'Sistema di helpdesk multi-tenant con ticket, escalation, chat interna e generazione FAQ da ticket chiusi via Google Gemini. Card login demo per accesso immediato senza registrazione.',
        url: 'https://mirivo.domenicofoglia.dev',
        tags: ['Laravel 13', 'React 19', 'Sanctum SPA', 'MySQL', 'Gemini AI']
    },

    {
        id: 'carrermode',
        name:'CarrerMode',
        kicker: 'Personal · Bilingue IT/EN',
        description: "Web app per gestire le candidature di lavoro. Analisi AI dell'offerta vs CV, generazione cover letter, 10 temi visivi, bilingue IT/EN.",
        url: 'https://www.carrermode.it',
        tags: ['Laravel 13', 'React 19', 'Zustand', 'MySQL', 'Recharts', 'i18nexT', 'Gemini AI']
    },

    {
        id: 'sedh',
        name:'Sedh',
        kicker: 'Client · Portfolio artista',
        description: "Portfolio vetrina per un artista locale. HTML, CSS e JavaScript vanilla, responsive, attenzione al design e alla user experience.",
        url: 'https://sedh.netlify.app',
        tags: ['HTML', 'CSS', 'Vanilla JS', 'Netlify']
    },

    {
        id: 'ricettai',
        name:'RicettAI',
        kicker: 'Personal · Side project AI',
        description: "Web app React che genera ricette con Google Gemini 2.5 Flash Lite.",
        url: 'https://ricettai.netlify.app',
        tags: ['React', 'Vite', 'Gemini AI']
    },

    {
        id: 'giftchaos',
        name:'GiftChaos - Secret Santa',
        kicker: 'Personal · Repo pubblica',
        description: "Applicazione full stack per la gestione di eventi Secret Santa. Algoritmo di sorteggio senza duplicati con gestione dei vincoli tra partecipanti, autenticazione, CRUD completo e notifiche email.",
        url: 'https://github.com/DomenicoFoglia/Secret-Santa-PHP-Laravel',
        tags: ['Laravel', 'MySQL', 'Blade']
    },
]