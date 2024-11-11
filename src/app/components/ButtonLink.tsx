import React from 'react'
import {LinkProps} from '../types/linkProps'

const ButtonLink:React.FC<LinkProps> = ({href,text}) => {
  return (
    <div>
      <a href={href} className='btn-primary'>
        {text}
      </a>
    </div>
  )
}

export default ButtonLink
