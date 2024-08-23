import {
  Button,
  Checkbox,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ActivityDetailsResponse } from '../../../../application/dtos/activities/activityDetailsResponse'
import { createActivityDto } from '../../../../application/dtos/activities/createActivityDto'
import { ActivityService } from '../../../../application/services/activityService'
import { schemaCreateActivity } from '../../../../application/validations/schemaCreateActivity'
import { DateField } from '../../textFields/dateField'
import { TextField } from '../../textFields/textFieldBase'

interface ActivityModalParams {
  projectId?: number
  activityDto?: ActivityDetailsResponse
  onCloseModal: () => void
  triggerButton: React.ReactNode
}

export function ActivityModal({
  projectId,
  activityDto,
  onCloseModal,
  triggerButton,
}: ActivityModalParams): JSX.Element {
  const [project_id, setProject_Id] = useState<number | undefined>(undefined)
  const [activity, setActivity] = useState<ActivityDetailsResponse | undefined>(
    undefined
  )
  const [isNew, setIsNew] = useState<Boolean>()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const activityService = new ActivityService()

  useEffect(() => {
    if (projectId !== undefined) {
      setProject_Id(projectId)
    }
    if (activityDto) {
      setActivity(activityDto)
    }
  }, [projectId, activityDto])

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<createActivityDto>({
    resolver: yupResolver(schemaCreateActivity),
    defaultValues: {
      project_id: projectId,
      completed: false,
    },
  })

  useEffect(() => {
    setValuesForm()
  }, [activity, project_id, setValue])

  async function setValuesForm() {
    if (activity) {
      setValue('name', activity.name)
      setValue('start_date', new Date(activity.start_date))
      setValue('end_date', new Date(activity.end_date))
      setValue('completed', activity.completed)
      setValue('project_id', activity.project_id)
      setIsNew(false)
    } else if (project_id) {
      setValue('project_id', project_id)
      setIsNew(true)
    }
  }

  const onSubmit: SubmitHandler<createActivityDto> = async (data) => {
    if (isNew) {
      try {
        await activityService.create(data)
        reset()
        onClose()
        onCloseModal()
      } catch (error) {
        console.error('Erro ao criar atividade:', error)
      }
    }
  }

  return (
    <>
      <div onClick={onOpen}>{triggerButton}</div>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>
            {activity ? 'Editar Atividade' : 'Nova Atividade'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={8}>
                <TextField
                  register={register}
                  label="Nome"
                  name="name"
                  error={errors.name?.message}
                />
                <Controller
                  name="start_date"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DateField
                      label="Data de Início"
                      name="start_date"
                      selectedDate={value}
                      onChange={onChange}
                      error={errors.start_date?.message}
                    />
                  )}
                />
                <Controller
                  name="end_date"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DateField
                      label="Data de Término"
                      name="end_date"
                      selectedDate={value}
                      onChange={onChange}
                      error={errors.end_date?.message}
                    />
                  )}
                />
                <Controller
                  name="completed"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      isChecked={value}
                      onChange={(e) => onChange(e.target.checked)}
                    >
                      Completada?
                    </Checkbox>
                  )}
                />
                <Flex justifyContent="center">
                  <Button colorScheme="blue" mr={3} type="submit">
                    Salvar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </Flex>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
