import Dashboard from "./components/Dashboard";
import Layout from "./layouts/MainLayout";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Layout>
      <Dashboard />
      <Analytics />
    </Layout>
  );
}

export default App;
