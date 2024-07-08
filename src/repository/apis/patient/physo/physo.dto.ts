export interface IResAddPatientPlanScheduleComment {}

export interface getPatientPlanScheduleCommentQueryDtoIn {
  offset?: number
  limit?: number
}

export interface SharePatientPlanScheduleCommentDtoOut {
  commentId?: number
  insertAt?: string
  message?: string
  physioUserId?: number
  physioUsername?: string
  patientUserId?: number
  patientUsername?: string
  parentId?: number
}

export interface GetPrescriptionDtoOut {
  ppsId?: number
  ppsPrescription?: string
}
