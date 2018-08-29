import * as React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BUTTON_CLASS = 'ttu ba ph4 pv2 pointer bg-white b--near-black br2 bw1'

export const Button = ({ className, ...rest}: Props) => (
  <button
    className={`${BUTTON_CLASS} ${className || ''}`.trim()} {...rest} />
)

export const DefaultButton = (props: Props) =>
  <Button className='near-black' {...props} />
