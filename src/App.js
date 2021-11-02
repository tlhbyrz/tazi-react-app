import { Provider } from "react-redux";
import store from "./store/store"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from "components/Layout/Layout";
import ModelsPage from "pages/ModelsPage";
import AddModelPage from "pages/AddModelPage";
import EditModelPage from "pages/EditModelPage";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Layout title="Tazi.ai">
                <ModelsPage />
              </Layout>
            </Route>
            <Route path="/models" exact>
              <Layout title="Tazi.ai | All Models">
                <ModelsPage />
              </Layout>
            </Route>
            <Route path="/add" exact>
              <Layout title="Tazi.ai | Add Model">
                <AddModelPage />
              </Layout>
            </Route>
            <Route path="/edit/:slug" exact>
              <Layout title="Tazi.ai | Edit Model">
                <EditModelPage />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
