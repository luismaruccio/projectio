import { Box, Button, Flex, HStack, useToast } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CreateProjectDto } from '../../../application/dtos/projects/createProjectDto'
import { ProjectService } from '../../../application/services/projectService'
import { schemaCreateProject } from '../../../application/validations/schemaCreateProject'
import { BackButton } from '../../components/buttons/backButton'
import { DateField } from '../../components/textFields/dateField'
import { TextField } from '../../components/textFields/textFieldBase'

export function NewProject(): JSX.Element {
  const projectService = new ProjectService()
  const navigate = useNavigate()
  const toast = useToast()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectDto>({ resolver: yupResolver(schemaCreateProject) })

  const onSubmit = async (data: CreateProjectDto) => {
    await projectService.create(data, navigate, toast)
  }

  return (
    <Box px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack>
          <BackButton onButtonClick={() => projectService.goBack(navigate)} />
          <Box fontWeight="bold" fontSize="2xl">
            Projeto
          </Box>
        </HStack>
      </Flex>
      <form onSubmit={handleSubmit((data: CreateProjectDto) => onSubmit(data))}>
        <TextField
          register={register}
          label="Nome"
          name="name"
          error={errors.name?.message}
        />
        <Controller
          name="startDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateField
              label="Data de Início"
              name="startDate"
              selectedDate={value}
              onChange={onChange}
              error={errors.startDate?.message}
            />
          )}
        />
        <Controller
          name="endDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateField
              label="Data de Término"
              name="endDate"
              selectedDate={value}
              onChange={onChange}
              error={errors.endDate?.message}
            />
          )}
        />
        <Button mt={4} colorScheme="blue" type="submit">
          Enviar
        </Button>
      </form>
    </Box>
  )
}
