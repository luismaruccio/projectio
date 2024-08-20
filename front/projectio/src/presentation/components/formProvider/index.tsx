import { FormProvider as Provider, UseFormReturn } from 'react-hook-form'

interface FormProviderProps {
  children: React.ReactNode
  methods: UseFormReturn<Record<string, any>>
}

export function FormProvider(props: FormProviderProps): JSX.Element {
  const { children, methods } = props

  return <Provider {...methods}>{children}</Provider>
}
