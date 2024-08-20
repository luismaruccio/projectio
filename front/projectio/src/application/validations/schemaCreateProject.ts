import * as yup from 'yup'
import { MessageCommon } from '../messages/commons'

export const schemaCreateProject = yup.object().shape({
  name: yup.string().required(MessageCommon.FIELD_REQUIRED),
  startDate: yup.date().required(MessageCommon.FIELD_REQUIRED),
  endDate: yup
    .date()
    .required(MessageCommon.FIELD_REQUIRED)
    .min(
      yup.ref('startDate'),
      MessageCommon.END_DATE_MUST_BE_LATER_THAN_START_DATE
    ),
})
