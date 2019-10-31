const initialRoutes = [
  {
    path: "/listings",
    //component: Listings,
    selected: true
  },
  {
    path: "/favorites",
    //component: Favorites,
    selected: false
  },
  {
    path: "/about",
    //component: About,
    selected: false
  },
  /*{
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }*/
];

export default function router(state = initialRoutes, action){
  switch (action.type){
    
  }
  return state;
}