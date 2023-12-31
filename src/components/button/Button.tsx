import { IButtonProps } from './Button.types'

export function Button({ type = 'button' }: IButtonProps) {
  return <button type={type === 'button' ? 'button' : 'submit'}>Button</button>
}
