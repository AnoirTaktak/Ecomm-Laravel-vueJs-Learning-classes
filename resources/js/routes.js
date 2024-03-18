import Viewarticles from "./components/articles/Viewarticles.vue";
import Addaticle from "./components/articles/Addarticle.vue";

import accueil from "./components/accueil.vue";
import Viewarticletable from "./components/articles/Viewarticletable.vue";
import Editarticle from "./components/articles/Editarticle.vue";


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
    {
        name:"Viewarticletable",
        path:"/articletable",
        component:Viewarticletable
    }

];
