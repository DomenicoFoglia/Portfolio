export type Project = {
    id: string;
    name: string;
    url: string;
    image: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 'mirivo',
        name:'Mirivo', 
        url: 'https://mirivo.domenicofoglia.dev',
        image: '/projects/Mirivo.webp',
        tags: ['Laravel 13', 'React 19', 'Sanctum SPA', 'MySQL', 'Gemini AI']
    },

    {
        id: 'carrermode',
        name:'CarrerMode',
        url: 'https://www.carrermode.it',
        image: '/projects/CarrerMode.webp',
        tags: ['Laravel 13', 'React 19', 'Zustand', 'MySQL', 'Recharts', 'i18nexT', 'Gemini AI']
    },

    {
        id: 'sedh',
        name:'Sedh',
        url: 'https://sedh.netlify.app',
        image: '/projects/Sedh.webp',
        tags: ['HTML', 'CSS', 'Vanilla JS', 'Netlify']
    },

    {
        id: 'ricettai',
        name:'RicettAI',
        url: 'https://ricettai.netlify.app',
        image: '/projects/RicettAI.webp',
        tags: ['React', 'Vite', 'Gemini AI']
    },

    {
        id: 'giftchaos',
        name:'GiftChaos - Secret Santa',
        url: 'https://github.com/DomenicoFoglia/Secret-Santa-PHP-Laravel',
        image: '/projects/GiftChaos.webp',
        tags: ['Laravel', 'MySQL', 'Blade']
    },
]