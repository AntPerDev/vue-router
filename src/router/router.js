import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/pokemon',
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () =>
      import(
        /*webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'
      ),
    children: [
      {
        path: 'home',
        name: 'pokemon-home',
        component: () =>
          import(
            /*webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage'
          ),
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () =>
          import(
            /*webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage'
          ),
      },
      {
        path: 'pokemonid/:id',
        name: 'pokemon-id',
        component: () =>
          import(
            /*webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'
          ),
        props: (route) => {
          // console.log( route )
          // const { id }= route.params}
          const id = Number(route.params.id);
          // return isNaN(  Number(id) ) ?  { id: 1 }: {id : Number(id)}
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      {
        path: '',
        name: '/',
        redirect: { name: 'pokemon-about' },
      },
    ],
  },

  // DBZ
  {
    path: '/dbz',
    name: 'dbz',
    component: () =>
      import(
        /*webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout'
      ),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () =>
          import(
            /*webpackChunkName: "CharacterPage" */ '@/modules/dbz/pages/Characters'
          ),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () =>
          import(
            /*webpackChunkName: "AboutPage" */ '@/modules/dbz/pages/About'
          ),
      },

      {
        path: '',
        name: '/',
        redirect: { name: 'dbz-characters' },
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    component: () =>
      import(
        /*webpackChunkName: "NoPageFound" */ '../modules/shared/pages/NoPageFound'
      ),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
