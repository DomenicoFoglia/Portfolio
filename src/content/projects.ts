export type Project = {
    id: string;
    name: string;
    url: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 'mirivo',
        name:'Mirivo', 
        url: 'https://mirivo.domenicofoglia.dev',
        tags: ['Laravel 13', 'React 19', 'Sanctum SPA', 'MySQL', 'Gemini AI']
    },

    {
        id: 'carrermode',
        name:'CarrerMode',
        url: 'https://www.carrermode.it',
        tags: ['Laravel 13', 'React 19', 'Zustand', 'MySQL', 'Recharts', 'i18nexT', 'Gemini AI']
    },

    {
        id: 'sedh',
        name:'Sedh',
        url: 'https://sedh.netlify.app',
        tags: ['HTML', 'CSS', 'Vanilla JS', 'Netlify']
    },

    {
        id: 'ricettai',
        name:'RicettAI',
        url: 'https://ricettai.netlify.app',
        tags: ['React', 'Vite', 'Gemini AI']
    },

    {
        id: 'giftchaos',
        name:'GiftChaos - Secret Santa',
        url: 'https://github.com/DomenicoFoglia/Secret-Santa-PHP-Laravel',
        tags: ['Laravel', 'MySQL', 'Blade']
    },
]