import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from '@/components/hello'

import './index.less'

interface IProps {
}

const App: React.SFC<IProps> = ({}) => {
  return (
    <div className="a">
      <Hello text="Electron" />
    </div>
  )
}

export default () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  )
}
