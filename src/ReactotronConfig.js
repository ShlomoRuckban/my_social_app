import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron
  .configure({ name: 'My Social App' }) 
  .use(reactotronRedux())
  .connect()

  export default reactotron