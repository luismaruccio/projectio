import { ArrowBackIcon } from '@chakra-ui/icons'
import { ButtonProps, IconButton } from '@chakra-ui/react'

interface BackButtonProps extends ButtonProps {
  onButtonClick: () => void
}

export function BackButton({
  onButtonClick,
  ...buttonProps
}: BackButtonProps): JSX.Element {
  return (
    <IconButton
      aria-label="Go back"
      icon={<ArrowBackIcon />}
      onClick={onButtonClick}
      {...buttonProps}
    />
  )
}
