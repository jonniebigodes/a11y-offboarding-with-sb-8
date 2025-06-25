import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

import { LoginForm } from './AuthForm'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'Components/AuthForm',
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Default: Story = {}

export const WithEmailFilled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailInput = canvas.getByLabelText('Email')
    await userEvent.type(emailInput, 'test@example.com')
  },
}

export const WithPasswordFilled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const passwordInput = canvas.getByLabelText('Password')
    await userEvent.type(passwordInput, 'password123')
  },
}
