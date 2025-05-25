import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { AppRoutes } from "./routes/AppRoutes";
import { store } from "./store/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={AppRoutes} />
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
