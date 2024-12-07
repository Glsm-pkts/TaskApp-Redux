
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/router/rootNavigator'
import store from './src/redux/store.js'
import { Provider } from'react-redux'

const App = () => {
  return (
   <Provider store={store}>
 <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
   </Provider>
  )
}

export default App