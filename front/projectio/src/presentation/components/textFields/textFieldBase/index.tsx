import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { UseFormRegister } from 'react-hook-form'

interface TextFieldProps {
  label: string
  register: UseFormRegister<any>
  name: string
  error?: string
}

export function TextField({
  label,
  register,
  name,
  error,
}: TextFieldProps): JSX.Element {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} variant="outline" {...register(name)} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}
