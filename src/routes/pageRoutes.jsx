import { lazy } from "react";

export const NotFound = lazy(() => import("@/pages/errors/NotFound"));
export const SomethingWentWrong = lazy(() =>
  import("@/pages/errors/SomethingWentWrong")
);

export const LandingPage = lazy(() => import("@/pages/landing/landingPage"));
export const ChatPage = lazy(() => import("@/pages/chat/ChatPage"));
