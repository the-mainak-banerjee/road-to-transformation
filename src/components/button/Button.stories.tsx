import { Meta } from '@storybook/react';
import { Button, IButtonProps } from '.';
import { buttonMockData } from './Button.mock';

export default {
  title: 'Components/Button',
} as Meta;

export function ButtonStory(args: IButtonProps) {
  return <Button {...args} />;
}

ButtonStory.storyName = 'Default';
ButtonStory.args = buttonMockData;
