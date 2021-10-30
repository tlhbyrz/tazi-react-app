import { Provider } from "react-redux";
import store from "./store/store"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div>
          initial
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
