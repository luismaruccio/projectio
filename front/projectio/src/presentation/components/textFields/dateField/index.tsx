import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import { SingleDatepicker } from 'chakra-dayzed-datepicker'

interface DateFieldProps {
  label: string
  name: string
  error?: string
  selectedDate?: Date
  onChange: (date: Date | null) => void
}

export function DateField({
  label,
  name,
  error,
  selectedDate,
  onChange,
}: DateFieldProps): JSX.Element {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <div className="date-picker-wrapper">
        <SingleDatepicker
          name={name}
          date={selectedDate}
          onDateChange={onChange}
          configs={{
            dateFormat: 'dd/MM/yyyy',
          }}
        />
      </div>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}
