import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface NavigationButtonProps extends ButtonProps {
  path: string
  label: string
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  path,
  label,
  ...buttonProps
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(path)
  }

  return (
    <Button onClick={handleClick} {...buttonProps}>
      {label}
    </Button>
  )
}

export default NavigationButton
