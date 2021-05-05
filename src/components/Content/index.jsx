import Intro from './Intro'
import GettingStarted from './GettingStarted'
import Dependencies from './Dependencies'
import AddReact from './AddReact'
import ConfigureWebpack from './ConfigureWebpack'
import ConfigureBabel from './ConfigureBabel'
import DevServer from './DevServer'
import Components from './Components'
import Build from './Build'
import Deploy from './Deploy'
import './content.css'
export default () => {
  return (
    <section>
      <Intro />
      <GettingStarted />
      <Dependencies />
      <AddReact />
      <ConfigureWebpack />
      <ConfigureBabel />
      <DevServer />
      <Components />
      <Build />
      <Deploy />
    </section>
  )
}
