import { Provider } from "react-redux";
import store from "./store/store"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from "components/Layout/Layout";
import ModelList from "pages/ModelList";
import AddModel from "pages/AddModel";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Layout title="Tazi.ai">
                <ModelList />
              </Layout>
            </Route>
            <Route path="/models" exact>
              <Layout title="Tazi.ai | All Models">
                <ModelList />
              </Layout>
            </Route>
            <Route path="/add" exact>
              <Layout title="Tazi.ai | Add Model">
                <AddModel />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
