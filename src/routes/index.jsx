import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loadable from "./loadable";
const SignUpPages =  Loadable(lazy(() => import("@/pages/register")));
const SignInPages =  Loadable(lazy(() => import("@/pages/login")));

export function Routers() {
  const routers = [
    {
      index: true,
      element: <>111111</>
    },
    {
      path: '/sign-in',
      element: <SignInPages />
    },
    {
      path: '/sign-up',
      element: <SignUpPages />
    }
  ]
  return useRoutes(routers)
}