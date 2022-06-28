export const generalRoute = [
    {
      path: "home",
      name: "Dashboard",
      meta: {
        isAuthenticated: true,
      },
      component: () => import("@/Pages/AdminEnd/Dashboard/Dashboard.vue"),
    },
    {
      path: "aboutAdmin",
      name: "AboutAdmin",
      meta: {
        isAuthenticated: true,
      },
      component: () => import("@/Pages/AdminEnd/AboutAdmin/aboutAdmin.vue"),
    },
  ];

  export default generalRoute;