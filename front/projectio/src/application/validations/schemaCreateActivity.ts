import * as yup from 'yup'
import { MessageCommon } from '../messages/commons'

export const schemaCreateActivity = yup.object().shape({
  name: yup.string().required(MessageCommon.FIELD_REQUIRED),
  project_id: yup.number().required(),
  start_date: yup.date().required(MessageCommon.FIELD_REQUIRED),
  end_date: yup
    .date()
    .required(MessageCommon.FIELD_REQUIRED)
    .min(
      yup.ref('start_date'),
      MessageCommon.END_DATE_MUST_BE_LATER_THAN_START_DATE
    ),
  completed: yup.boolean().required(),
})
