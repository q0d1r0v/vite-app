interface IRoutes {
    [index: number]: {
        path: string,
        name: string,
        component: any
    }
}

const routes: IRoutes =  [
    {
        path: "/:pathMatch(.*)*",
        name: "404-page",
        component: import("../pages/not-found-page/404.vue")
    },
    {
        path: "/",
        name: "home-page",
        component: import("../pages/home-page/home.vue")
    },
    {
        path: "/kadirov",
        name: "kadirov-page",
        component: import("../pages/kadirov/kadirov.vue")
    }
]

export default routes