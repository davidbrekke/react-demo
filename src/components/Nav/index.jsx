import Link from '../Link'
import './nav.css'

export default function Nav() {
  return (
    <nav>
      <Link title="intro" to="#intro" />
      <Link title="getting started" to="#getting-started" />
      <Link title="dependencies" to="#dependencies" />
      <Link title="add react" to="#add-react" />
      <Link title="configure webpack" to="#configure-webpack" />
      <Link title="configure babel" to="#configure-babel" />
      <Link title="dev-server" to="#dev-server" />
      <Link title="components" to="#components" />
      <Link title="build" to="#build" />
      <Link title="deploy" to="#deploy" />
    </nav>
  )
}
