import { ThemeProvider } from "next-themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  ChatPage,
  LandingPage,
  NotFound,
  SomethingWentWrong,
} from "./routes/pageRoutes";
import Loadable from "./components/custom/Loadable";
import UserRoutes from "./routes/UserRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={SomethingWentWrong}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/" element={<UserRoutes />}>
                <Route
                  path="chat"
                  element={
                    <Loadable>
                      <ChatPage />
                    </Loadable>
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
