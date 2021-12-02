import Loadable from 'react-loadable'
import { Spin } from 'antd'
import './index.scss'

export const LoadableUtils = loader => {
  return Loadable({
    loader,
    loading () {
      return (
        <div className='cont_div'>
        <Spin size="large"/>
      </div>
      )
    }
  })
}