import clsx from 'clsx'
import React from 'react'

import './Icon.scss'
import { IIconProps } from './Icon.props.interface'

export const Icon: React.FC<IIconProps> = ({className, icon}) => {

  return (
    <span className={clsx(`icon-${icon}`, className)}></span>
  )
}
