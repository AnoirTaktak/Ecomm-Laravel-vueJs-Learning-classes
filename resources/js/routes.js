import Viewarticles from "./components/articles/Viewarticles.vue";
import Addaticle from "./components/articles/Addarticle.vue";
import Editarticle from "./components/articles/Editarticle.vue"
import accueil from "./components/accueil.vue";
export const routes = [
    {
        name: "Viewarticles",
        path: "/listart",
        component: Viewarticles,
    },
    {
        name: "Addarticle",
        path: "/addarticle",
        component: Addaticle,
    },
    {
        name:'Accueil',
        path:  '/',
        component: accueil
    },
    {
        name:"editarticle",
        path:"/editarticle/:id",
        component:Editarticle
    },
];
