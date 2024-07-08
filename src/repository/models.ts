export interface EvaluationLogsEntity {}
export interface IResponseAll<T> {
  count?: number
  status?: number
  message?: string
  results: T[]
}
export interface IResponse<T> {
  status?: number
  message?: string
  result: T
}
export interface AnyResponse {}
export interface BaseUserEntity {}
export interface UserLoginWithoutPasswordReqDto {
  email?: string
}
export interface PhysoUserEntity {}

export enum UserLoginResDto__role {
  ADMIN = 'admin',
  PHYSIO = 'physio',
  PATIENT = 'patient',
  CLINICCHIEF = 'clinicChief',
  AI = 'ai'
}

export interface UserLoginResDto {
  token?: string
}
export interface PatientUserEntity {}
export interface UserLoginReqDto {
  email?: string
  password?: string
}

export enum IGetForgetPassword__role {
  ADMIN = 'admin',
  PHYSIO = 'physio',
  PATIENT = 'patient',
  CLINICCHIEF = 'clinicChief',
  AI = 'ai'
}

export interface IGetForgetPassword {
  email?: string
  role?: IGetForgetPassword__role
}
export interface IGetUpdatePassword {
  password?: string
  token?: string
}
export interface PatientOrPyhsioLoginWithoutPasswordReqDto {
  email?: string
}
export interface IGetUser {
  id?: string
  username?: string
  firstname?: string
  lastname?: string
  email?: string
}
export interface ICreateSessionResponse {
  patient?: IGetUser
  physio?: IGetUser
  link?: string
}
export interface ICallDtoIn {
  to?: number
  toType?: string
  from?: number
  fromType?: string
  scheduleId?: number
  ppsId?: number
}
export interface LogEntity {}
export interface PlanOptions {}
export interface PlanDtoOut {
  id?: number
  name?: string
  productId?: number
  duration?: number
  description?: PlanDescription
  type?: string
  price?: string
}
export interface PlanEntity {}
export interface CityDtoOut {
  id?: number
  city_name?: number
}
export interface CityEntity {}
export interface ClassEntity {}
export interface PointDtoOut {
  id?: number
  title?: string
  description?: string
}
export interface PointEntity {}
export interface ClinicDtoIn {
  offset?: number
  limit?: number
  id?: number
  name?: string
  logoUrl?: string
  address?: string
  location?: any
  licenseId?: string
  phoneNumber?: string
  listOfPhysio?: string[]
}
export interface PhysioItem {
  id?: number
  firstname?: string
  lastname?: string
  email?: string
  username?: string
  clinics?: PhysioItemClinic[]
}
export interface ClinicDtoOut {
  id?: number
  registeredDate?: string
  name?: string
  licenseId?: string
  phoneNumber?: string
  address?: string
  state?: string
  clinicType?: string
  registeredBefore?: boolean
}
export interface ClinicEntity {}
export interface CountryDtoOut {
  id?: number
  country_name?: string
}
export interface CountryEntity {}

export enum invoice_InvoiceStatusType {
  CREATED = 'CREATED',
  SAVED = 'SAVED',
  APPROVED = 'APPROVED',
  VOIDED = 'VOIDED',
  COMPLETED = 'COMPLETED',
  PAYER_ACTION_REQUIRED = 'PAYER_ACTION_REQUIRED'
}

export interface invoice {
  invoiceId?: number
  invoiceStatus?: invoice_InvoiceStatusType
  price?: string
}
export interface IGetInvoiceDTO {
  username?: string
  patientPlanName?: string
  purchaseDate?: string
  invoices?: invoice[]
}
export interface InvoiceEntity {}
export interface TemplateEntity {}
export interface IAddExercise {
  timeTodo?: string
  setNumber?: number
  repeatNumber?: number
}
export interface ScheduleEntity {}
export interface IGetFeedbacksResDTO {
  id?: number
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
  physoEmail?: string
  senderRole?: string
  senderBaseUserId?: number
  senderBaseUserFirstname?: string
  senderBaseUserLastname?: string
  senderBaseUserUsername?: string
  senderBaseUserEmail?: string
  type?: string
  subject?: string
  message?: string
  rate?: number
  urls?: string[]
  replyMessage?: string
}
export interface FeedbackUsersEntity {}
export interface ISendReplyForFeedbackReqDTO {
  msg?: string
}
export interface ExerciseDtoIn {
  offset?: number
  limit?: number
  id?: number
  title?: string
  title__like?: string
  description?: string
  description__like?: string
  timeout?: number
}
export interface ExerciseDtoOut {
  id?: number
  title?: string
  description?: string
  timeout?: number
}
export interface ExerciseEntity {}
export interface DashboardInfoCountsDtoOut {}
export interface IGetAllPhysioUserDetails {
  id?: number
  startSchedules?: string
  endSchedules?: string
  firstname?: string
  lastname?: string
  userName?: string
  password?: string
  email?: string
  activedAt?: string
}
export interface IGetFreeSchedules {
  id?: number
  insertedAt?: string
  deletedAt?: string
  title?: string
  start?: string
  end?: string
  type?: string
  physoId?: number
  statusSchedule?: boolean
}
export interface IGetAllPhysoUsers {
  physioClinicId?: number
  id?: number
  startSchedules?: string
  endSchedules?: string
  firstname?: string
  lastname?: string
  clinicType?: string
}
export interface PhysoUserPostDto {
  firstname?: string
  lastname?: string
  username?: string
  email?: string
}
export interface PhysoUserDtoIn {
  id?: number
  firstname?: string
  firstname__like?: string
  lastname?: string
  lastname__like?: string
  username?: string
  username__like?: string
  email?: string
  email__like?: string
}
export interface RoleEntity {}
export interface ActionTypeDtoOut {
  id?: number
  title?: string
  description?: string
}
export interface ActionTypeEntity {}
export interface IPlan {
  planName?: string
  planExpire?: string
}
export interface IGetAllPatientUserDetails {
  patientId?: number
  firstname?: string
  lastname?: string
  username?: string
  password?: string
  email?: string
  plans?: IPlan[]
}
export interface PatientUserDtoOut {
  id?: number
  fname?: number
  lname?: number
  user?: number
  email?: string
}
export interface ClassCategoryEntity {}
export interface ExerciseDetailsDtoOut {
  id?: number
  title?: string
  description?: string
  timeout?: number
}
export interface ExerciseDetailsDtoIn {
  id?: number
  title?: string
  title__like?: string
  description?: string
  description__like?: string
  timeout?: number
  limit?: number
  offset?: number
}
export interface ExerciseDetailsEntity {}
export interface ClinicChiefUserDtoOut {
  id?: number
  firstname?: string
  lastname?: string
  username?: string
  email?: string
  clinics?: string[]
}
export interface ClinicChiefUserEntity {}
export interface ClinicChiefUserDtoIn {
  id?: number
  firstname?: string
  lastname?: string
  username?: string
  email?: string
  password?: string
}
export interface PhysioItemClinic {
  id?: number
  name?: string
  status?: boolean
}
export interface PatientItem {
  id?: number
  firstname?: string
  lastname?: string
  email?: string
  username?: string
  clinic?: PhysioItemClinic
}
export interface IClinicPatch {
  name?: string
  logoUrl?: string
  address?: string
  licenseId?: string
  phoneNumber?: string
}
export interface ChatUsersEntity {}
export interface ISendMessage {
  receiveBaseUserId?: number
  message?: string
}
export interface IGetClassThemplate {
  classId?: number
  classTitle?: string
  classDescription?: string
  classStart?: string
  classEnd?: string
  physioFirstName?: string
  physioLastName?: string
}
export interface IGetClass {
  categoryName?: string
  class?: IGetClassThemplate[]
}
export interface IGetClassesInClassCategoriesClasses {
  id?: number
  title?: string
  description?: string
  start?: string
  end?: string
  physioId?: number
  physioFirstname?: string
  physioLastname?: string
}
export interface IGetSelectedClassByPatient {
  classCategoryId?: number
  selectClassByPatientId?: number
}
export interface IGetClassesInClassCategories {
  subCategories?: IGetClass[]
  id?: number
  name?: string
  classes?: IGetClassesInClassCategoriesClasses[]
  selectedClassByPatient?: IGetSelectedClassByPatient
  selectedByPhyosio?: boolean
}
export interface IGetMyPatients {
  id?: number
  PlanType?: string
  firstname?: string
  lastname?: string
  username?: string
  email?: string
  exerciseCount?: number
  classCount?: number
  planExpireDate?: string
}
export interface GetPatientDtoOut {
  id?: number
  firstname?: string
  lastname?: string
  email?: string
  username?: string
}
export interface ChangePrescriptionMessageDtoOut {
  ppsId?: number
  prescription?: string
}
export interface PrescriptionCommentDtoOut {
  prescription?: string
}
export interface IGetEvaluationsPatient {
  ppId?: number
  ppsId?: number
  prescription?: string
  start?: string
  end?: string
  type?: string
  physioId?: number
  physioFirstname?: string
  physioLastname?: string
  physioUsername?: string
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
export interface IGetExerciseForPatient {
  active?: boolean
  exerciseId?: number
  ppsId?: number
  scheduleEndDate?: string
  scheduleStartDate?: string
  exerciseStartDate?: string
  exerciseEndDate?: string
  pickDays?: string
  exerciseRepetition?: number
  exerciseSet?: number
  title?: string
  description?: string
  categoryImageIndex?: number
}
export interface IGetPatientPlans {
  planId?: number
  planName?: string
  planType?: string
  patientPlanId?: number
  patientPlanName?: string
  patientPlanDate?: string
  data?: any
}
export interface IGetPatientPlan {
  planId?: number
  planName?: string
  planType?: string
  patientPlanId?: number
  patientPlanName?: string
  patientPlanDate?: string
  patientFirstName?: string
  patientLastName?: string
  data?: any
  platformResponse?: string
}
export interface PatientResDto {
  id?: number
  fname?: string
  lname?: string
  user?: string
  email?: string
  ppsId?: number
}
export interface ClassesForPatientDtoOut {
  classCategoryId?: number
  ppsId?: number
  active?: boolean
  startDate?: string
  endDate?: string
  classId?: number
  className?: string
  physioId?: number
  exerciseSet?: number
  physioUsername?: string
  exercisesNames?: string[]
  exercisesCount?: number
}
export interface IPatientPlanSchedulesIds {
  ppsId?: number
  scheduleDate?: string
}
export interface SetClassPatientReqDto {
  patientId?: number
  classCategoryId?: number
}

export enum IExerciseDtoOut_GeneralClassificationType {
  DAILY_TASK = 'daily_task',
  BODY_REGIONS = 'body_regions'
}

export enum IExerciseDtoOut_BodyRegionsType {
  STRETCH = 'stretch',
  RANGE_OF_MOTION = 'range_of_motion',
  STRENGTHENING = 'strengthening'
}

export enum IExerciseDtoOut_DailyType {
  STRENGTHENING = 'strengthening',
  BALANCE_CONTROL = 'balance_control'
}

export enum IExerciseDtoOut_BodySelectionType {
  NECK = 'neck',
  SHOULDER = 'Shoulder',
  ELBOW = 'elbow',
  TRUNK = 'trunk',
  HIP = 'hip',
  KNEE = 'knee',
  WRIST = 'wrist',
  ANKLE = 'ankle'
}

export enum IExerciseDtoOut_DailySelectionType {
  STANDING = 'standing',
  WALKING = 'walking'
}

export interface IExerciseDtoOut {
  id?: number
  title?: string
  generalClassification?: IExerciseDtoOut_GeneralClassificationType[]
  bodyRegionsType?: IExerciseDtoOut_BodyRegionsType[]
  dailyType?: IExerciseDtoOut_DailyType[]
  bodySelection?: IExerciseDtoOut_BodySelectionType[]
  dailySelectionType?: IExerciseDtoOut_DailySelectionType[]
}
export interface IGetExerciseDtoDailyStandingWalking {
  standing?: IExerciseDtoOut[]
  walking?: IExerciseDtoOut[]
}
export interface IGetExerciseDtoDaily {
  strengthening?: IGetExerciseDtoDailyStandingWalking
  balance_control?: IGetExerciseDtoDailyStandingWalking
}
export interface IGetExerciseDtoBodyRegionBodySelection {
  neck?: IExerciseDtoOut[]
  knee?: IExerciseDtoOut[]
  trunk?: IExerciseDtoOut[]
  elbow?: IExerciseDtoOut[]
  hip?: IExerciseDtoOut[]
  shoulder?: IExerciseDtoOut[]
  ankle?: IExerciseDtoOut[]
  wrist?: IExerciseDtoOut[]
}
export interface IGetExerciseDtoBodyRegion {
  range_of_motion?: IGetExerciseDtoBodyRegionBodySelection
  stretch?: IGetExerciseDtoBodyRegionBodySelection
  strengthening?: IGetExerciseDtoBodyRegionBodySelection
}
export interface IGetExerciseDtoOut {
  daily_task?: IGetExerciseDtoDaily
  body_regions?: IGetExerciseDtoBodyRegion
}
export interface BodySetDailyByPhysio {
  ppsId?: number
  data?: any
}
export interface ISearchExerciseDtoIn {
  offset?: number
  limit?: number
  keyWord?: string
}
export interface IGetDailyNoteDtoOut {
  id?: number
  insertedAt?: string
  subjective?: any
  evaluationType?: string
  whoInserted?: string
}
export interface BodySetPrescription {
  ppsId?: number
  exercises?: any
  classCategoryIds?: any
  prescription?: string
}
export interface ExercisePatientReqDto {
  exerciseId?: number
  exerciseRepetition?: number
  exerciseSet?: number
  startDate?: string
  endDate?: string
  duration?: number
  pickDays?: string
  ppsId?: number
}
export interface ExercisePatientBodyReqDto {
  exerciseId?: number
  exerciseRepetition?: number
  exerciseSet?: number
  startDate?: string
  endDate?: string
  duration?: number
  pickDays?: string
}
export interface ExercisesPatientReqDto {
  patientId?: number
  exercises?: ExercisePatientBodyReqDto[]
}
export interface ClassPatientReqDto {
  ppsId?: number
  classCategoryId?: number
}
export interface InactiveExerciseForPatientDtoIn {
  ppsId?: number
  exerciseId?: number
}
export interface ChangePrescriptionMessageDtoIn {
  ppsId?: number
  prescription?: string
}
export interface AddPrescriptionCommentDtoIn {
  patientPlanScheduleId?: number
  patientId?: number
  message?: string
  messageParentId?: number
}
export interface SchedulePostDto {
  start?: string
  end?: string
  type?: string
  physoId?: number
}

export enum IPatientSchedule_scheduleType {
  OFFLINE = 'offline',
  ONLINE = 'online',
  CLASS = 'class',
  IN_PERSON = 'in_person',
  AI = 'ai',
  SYSTEM = 'system'
}

export interface IPatientSchedule {
  patientId?: number
  patientFirstname?: string
  patientLastname?: string
  patientEmail?: string
  patientUsername?: string
  scheduleId?: number
  scheduleStart?: string
  scheduleEnd?: string
  scheduleType?: IPatientSchedule_scheduleType
  scheduleTitle?: string
  clinicId?: number
  clinicName?: string
  classId?: number
  classTitle?: string
}

export enum ScheduleResDtoTypeType {
  OFFLINE = 'offline',
  ONLINE = 'online',
  CLASS = 'class',
  IN_PERSON = 'in_person',
  AI = 'ai',
  SYSTEM = 'system'
}
export interface ScheduleResDto {
  id?: number
  title?: string
  start?: string
  end?: string
  type?: ScheduleResDtoTypeType
}
export interface IPatientScheduleRangeDtoIn {
  from?: string
  to?: string
}
export interface ISetMyPatternSchedule {
  clinicPhysioId?: number
  start?: string
  end?: string
  schedulesPattern?: any
}

export enum GetEvaluationsDetails_EvaluationType {
  INITIAL = 'initial',
  DAILY = 'daily',
  PROGRESS = 'progress'
}

export interface GetEvaluationsDetails {
  evaluationId?: number
  type?: GetEvaluationsDetails_EvaluationType
  createdAt?: string
  evaluationData?: string
  subjective?: string
}
export interface getTodayOnlineEvaluationsOrAllDaysDtoOut {
  ppsId?: number
  prescription?: string
  start?: string
  end?: string
  type?: string
  patientId?: number
  patientFirstname?: string
  patientLastname?: string
  patientUsername?: string
  sessionDuration?: number
  evaluations?: GetEvaluationsDetails[]
}
export interface IGetEvaluations {
  ppsId?: number
  prescription?: string
  start?: string
  end?: string
  type?: string
  patientId?: number
  patientFirstname?: string
  patientLastname?: string
  patientUsername?: string
  evaluations?: GetEvaluationsDetails[]
}
export interface IGetNotificationPhysoRes {
  isPhysiotherapistHasAlreadySetFreeTime?: boolean
  howManyDaysAreLeftOFPhysiotherapistFreeTime?: number
}
export interface IGetSummery {
  physioEvaluationsCount?: number
  todayPhysioEvaluationsCount?: number
  physioPatientsCount?: number
  onlineEvaluationCount?: number
  todayOnlineEvaluationCount?: number
  classCount?: number
  todayClassCount?: number
  patientIds?: string[]
}
export interface IGetSummaryOfPatientsExercises {
  patientId?: number
  patientFirstname?: string
  patientLastname?: string
  patientUsername?: string
  exerciseId?: number
  planExpireDate?: number
}
export interface IEmptyPhysoEvaluation {}
export interface IEmptyPatientReportDto {}
export interface ExerciseDate {
  minAverage?: number
  maxAverage?: number
}
export interface ShareAverageBaseDate {
  exerciseDate?: ExerciseDate
}
export interface ShareOverallReportByExerciseIdDtoOut {
  exerciseTitle?: string
  goldMeasureId?: number
  goldMeasureDescription?: string
  goldMeasureMin?: number
  goldMeasureMax?: number
  patientDoneExercises?: ShareAverageBaseDate
}
export interface ShareSessionsPatientWithIdDtoOut {
  exerciseTitle?: string
  goldMeasureId?: number
  goldMeasureDescription?: string
  goldMeasureMin?: number
  goldMeasureMax?: number
  result?: any
}
export interface getSessionsPatientExercise {
  id?: number
  title?: string
}
export interface IGetSessionsPatient {
  insertedAt?: string
  peId?: number
  exercise?: getSessionsPatientExercise
}
export interface GetSessionExercisePatientExercise {
  id?: number
  title?: string
  indexOfCategoryImage?: string
}
export interface GetSessionExercisePatientActionType {
  actionId?: number
  min?: number
  max?: number
}
export interface GetSessionExercisePatientExercise2 {
  times?: number
  actionTypes?: GetSessionExercisePatientActionType[]
}
export interface GetSessionExercisePatientSet {
  setCount?: number
  exercises?: GetSessionExercisePatientExercise2[]
}
export interface GetSessionExercisePatientResult {
  planDate?: string
  Sets?: GetSessionExercisePatientSet[]
}
export interface GetSessionExercisePatientPatientDoneExercise {
  id?: number
  result?: GetSessionExercisePatientResult
}
export interface IResGetSessionsExercisePatient {
  peId?: number
  exercise?: GetSessionExercisePatientExercise
  patientDoneExercises?: GetSessionExercisePatientPatientDoneExercise[]
}
export interface ClassDtoOut {
  title?: string
  id?: number
  start?: string
  end?: string
  physoId?: number
  physoUsername?: string
  physoFirstname?: string
  physoLastname?: string
  endSchedule?: string
}
export interface PhsyoClassDetailsExercise {
  id?: number
  title?: string
  description?: string
  goldMeasureId?: number
  goldMeasureTitle?: string
  timeTodo?: string
  setNumber?: number
  repeatNumber?: number
}
export interface PhysoClassDetailsTemplates {
  id?: number
  name?: string
  exercises?: PhsyoClassDetailsExercise[]
}
export interface PhysoClassUsersDtoOut {
  userId?: number
  userUsername?: string
}
export interface PhysoClassDetailsDtoOut {
  patientWithClassCategoryId?: number
  classTitle?: string
  classDescription?: string
  classStart?: string
  classEnd?: string
  templates?: PhysoClassDetailsTemplates[]
  patients?: PhysoClassUsersDtoOut[]
}
export interface ISchedule {
  scheduleId?: number
  scheduleStart?: string
  scheduleEnd?: string
  scheduleDuration?: number
  scheduleType?: string
}
export interface IGetSessionClasses {
  classId?: number
  classTitle?: string
  schedule?: ISchedule[]
  classCategoriesName?: string
}
export interface PhysioClassesDtoOut {
  classId?: number
  classTitle?: string
  classStart?: string
  classEnd?: string
  classCategoryName?: string
}
export interface IGetFeedbacksResponseDto {
  insertAt?: string
  feedbackId?: number
  subject?: string
  message?: string
  physioId?: number
  replyAt?: string
  replyMessage?: string
  urls?: string[]
}
export interface ISendFeedbackRequestPhysioDto {
  subject?: string
  msg?: string
  rate?: number
}
export interface IGetClinicsWhichAlreadyRegisteredForThePhysio {
  id?: number
  registeredDate?: string
  name?: string
  licenseId?: string
  phoneNumber?: string
  address?: string
  state?: string
  clinicType?: string
  registeredBefore?: boolean
  physioClinicId?: number
}
export interface RequestToRegisterClinicIdsDtoIn {
  clinicId?: number
}
export interface PhysoRequestToJoinClinicsDtoIn {
  clinicIds?: string
}
export interface IPhysioTemplateExerciseItem {
  exerciseId?: number
  duration?: number
  setNumber?: number
  repeatNumber?: number
  side?: string
}
export interface IAddPhysioTemplateExerciseDtoIn {
  name?: string
  exercises?: IPhysioTemplateExerciseItem[]
}
export interface IGetExercisesInTemplateDtoOut {
  exerciseId?: number
  exerciseName?: string
  duration?: number
  setNumber?: number
  repeatNumber?: number
}
export interface IGetTemplateWithExercisesDtoOut {
  id?: number
  name?: string
  exercises?: IGetExercisesInTemplateDtoOut[]
}
export interface PhysioTemplateExerciseEntity {}

export enum IDtoUpdateProfileIn__gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export interface IDtoUpdateProfileIn {
  firstname?: string
  lastname?: string
  email?: string
  gender?: IDtoUpdateProfileIn__gender
  birthday?: string
  address?: string
  countryId?: number
  state?: string
  cityId?: number
  homeCellPhoneNumber?: string
}

export enum IDtoUpdateProfileOut__gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export interface IDtoLicenseOut {
  licenseFile?: string
  licenseState?: string
  licenseNumber?: string
}
export interface IDtoUpdateProfileOut {
  physoId?: number
  firstName?: string
  lastName?: string
  email?: string
  gender?: IDtoUpdateProfileOut__gender
  birthday?: string
  address?: string
  countryId?: number
  state?: string
  cityId?: number
  phoneNumber?: string
  licenses?: IDtoLicenseOut[]
}
export interface IDtoCountry {
  id?: number
  name?: string
}
export interface IDtoCity {
  id?: number
  name?: string
}
export interface IDtoUpdateProfileEmployer {
  employerName?: string
  employerIdNumber?: string
  employerPhoneNumber?: string
  employerCountryId?: number
  employerState?: string
  employerCityId?: number
  employerZipCode?: string
}
export interface IDtoUpdateProfilePassword {
  oldPassword?: string
  newPassword?: string
}
export interface ShareIGetOverallReport {
  id?: number
  startDate?: string
  endDate?: string
  pickDays?: string
  exerciseRepetition?: number
  exerciseSet?: number
  exerciseId?: number
  exerciseTitle?: string
  patientDoneExercisesId?: number
}
export interface PatientWithExerciseEntity {}
export interface IPoint {
  id?: number
  title?: string
}

export enum IGetExerciseDetailCycleTypeType {
  COC = 'coc',
  OCO = 'oco',
  OC = 'oc',
  CO = 'co',
  O = 'o',
  C = 'c'
}
export interface IGetExerciseDetail {
  id?: number
  actionTypeTitle?: string
  actionTypeDescription?: string
  actionTypeId?: number
  min?: number
  max?: number
  cycleThreshold?: number
  cycleType?: IGetExerciseDetailCycleTypeType
  forRepetition?: number
  durationTime?: number
  type?: string
  pointA?: IPoint
  pointB?: IPoint
  pointC?: IPoint
}

export enum IActionTypeTypeType {
  DISTANCE = 'distance',
  ANGLE = 'angle'
}

export enum IActionTypeCycleTypeType {
  COC = 'coc',
  OCO = 'oco',
  OC = 'oc',
  CO = 'co',
  O = 'o',
  C = 'c'
}
export interface IActionType {
  id?: number
  title?: string
  description?: string
  type?: IActionTypeTypeType
  pointAId?: number
  pointBId?: number
  pointCId?: number
  cycleType?: IActionTypeCycleTypeType
}
export interface IGetExercise {
  title?: string
  description?: string
  exerciseDetails?: IGetExerciseDetail[]
  goldMeasure?: IActionType
  bodyStateSide?: string
  bodyStateName?: string
}
export interface IGetPatientWithExercise {
  id?: number
  exerciseId?: number
  exerciseRepetition?: number
  exerciseSet?: number
  exercise?: IGetExercise
  userHeight?: number
}
export interface ScheduleReqDto {
  offset?: number
  limit?: number
  start__gte?: string
  end__lte?: string
  type?: string
}
export interface IRangeSchedules {
  id?: number
  title?: string
  start?: string
  end?: string
  type?: string
  physioId?: number
  physioUsername?: string
  physioFirstname?: string
  physioLastname?: string
  zipCode?: string
}
export interface IGetPlanStatusForPatientStatus {
  reserved?: number
  total?: number
}
export interface IGetPlanStatusForPatientDtoOut {
  offlineSchedule?: IGetPlanStatusForPatientStatus
  onlineSchedule?: IGetPlanStatusForPatientStatus
  classSchedule?: IGetPlanStatusForPatientStatus
  inpersonSchedule?: IGetPlanStatusForPatientStatus
}
export interface ITotalEvaluations {
  ppsId?: number
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
  scheduleTime?: string
  scheduleType?: string
  countOfUnreadMessages?: number
}
export interface IGetSummeryRes {
  activeExercise?: number
  totalExercise?: number
  totalClass?: number
  activeClass?: number
  totalOnline?: number
  activeOnline?: number
  totalEvaluations?: ITotalEvaluations[]
  todayClass?: number
  todayExercise?: number
  todayOnline?: number
}
export interface IGetNotificationPatientRes {
  isThereAClassCategoryThatThePatientHasNotAlreadySelected?: boolean
  howManyDaysAreLeftOFPatientPlan?: number
}

export enum PhysioListDetails_EvaluationType {
  INITIAL = 'initial',
  DAILY = 'daily',
  PROGRESS = 'progress'
}

export interface PhysioListDetails {
  evaluationId?: number
  type?: PhysioListDetails_EvaluationType
  createdAt?: string
  subjective?: string
  evaluationData?: string
}

export enum PhysioListDtoOutScheduleTypeType {
  OFFLINE = 'offline',
  ONLINE = 'online',
  CLASS = 'class',
  IN_PERSON = 'in_person',
  AI = 'ai',
  SYSTEM = 'system'
}
export interface PhysioListDtoOut {
  ppsId?: number
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
  scheduleId?: number
  scheduleTime?: string
  sessionDuration?: number
  scheduleType?: PhysioListDtoOutScheduleTypeType
  evaluations?: PhysioListDetails[]
}

export enum IExercisePart_CountingAlgorithmType {
  YOLO = 'yolo',
  MEDIA_PIPE = 'media_pipe',
  HOLISTIC = 'holistic',
  KNN = 'knn'
}

export enum IExercisePart_exerciseWithPatientStateType {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export interface IExercisePart {
  id?: number
  title?: string
  description?: string
  countingAlgorithm?: IExercisePart_CountingAlgorithmType
  status?: IExercisePart_exerciseWithPatientStateType
  setNumber?: number
  repeatNumber?: number
  date?: string
}
export interface IPhysoPart {
  id?: number
  firstname?: string
  lastname?: string
  email?: string
}
export interface IGetExercisesResult {}
export interface IGetExercisesDTO {
  id?: number
  ppsId?: number
  exercise?: IExercisePart
  physo?: IPhysoPart
  result?: IGetExercisesResult[]
}

export enum UserEvaluationSchedule__type {
  OFFLINE = 'offline',
  ONLINE = 'online',
  CLASS = 'class',
  IN_PERSON = 'in_person',
  AI = 'ai',
  SYSTEM = 'system'
}

export interface UserEvaluationPhysio {
  id?: number
  email?: string
  firstname?: string
  lastname?: string
  username?: string
}
export interface UserEvaluationSchedule {
  id?: number
  insertedAt?: string
  title?: string
  start?: string
  end?: string
  type?: UserEvaluationSchedule__type
  physo?: UserEvaluationPhysio
}
export interface UserEvaluationDtoOut {
  id?: number
  title?: string
  data?: any
  schedules?: UserEvaluationSchedule[]
  insertedAt?: string
  platformResponse?: string
  initialEvaluationVersion?: number
}
export interface IGetExerciseMessages {
  message?: string
  exerciseId?: number
  actionTypeId?: any
}
export interface IResGetEvaluationFiles {
  fileName?: string
}
export interface MyPhyso {
  id?: number
  firstname?: string
  lastname?: string
  username?: string
  email?: string
}
export interface MyClasses {
  id?: number
  title?: string
  start?: string
  end?: string
  physio?: MyPhyso
}
export interface MyClassCategories {
  id?: number
  name?: string
  Classes?: MyClasses[]
}
export interface IResGetMyClassCategories {
  id?: number
  ppsId?: number
  name?: string
  selectedClassId?: number
  subClassCategories?: MyClassCategories[]
}

export enum ExercisePart_DailyType {
  STRENGTHENING = 'strengthening',
  BALANCE_CONTROL = 'balance_control'
}

export enum ExercisePart_DailySelectionType {
  STANDING = 'standing',
  WALKING = 'walking'
}

export interface ExercisePart {
  id?: number
  insertedAt?: string
  deletedAt?: string
  modifiedAt?: string
  modifiedBy?: number
  lockedAt?: string
  lockedBy?: number
  title?: string
  description?: string
  timeout?: number
  goldMeasure_id?: number
  generalClassification?: string[]
  bodyRegionsType?: string[]
  dailyType?: ExercisePart_DailyType[]
  bodySelection?: string[]
  dailySelectionType?: ExercisePart_DailySelectionType[]
  bodyStateId?: number
  countingAlgorithm?: string
}
export interface ActionTypePart {
  actionId?: number
  min?: number
  max?: number
}
export interface Exercise2Part {
  times?: number
  actionTypes?: ActionTypePart[]
}
export interface SetPart {
  setCount?: number
  exercises?: Exercise2Part[]
}
export interface ResultPart {
  planDate?: string
  Sets?: SetPart[]
}
export interface DoneExercisePart {
  id?: number
  insertedAt?: string
  deletedAt?: string
  modifiedAt?: string
  modifiedBy?: number
  lockedAt?: string
  lockedBy?: number
  patientExerciseId?: number
  result?: ResultPart
}
export interface IGetExerciseDonePatientDTO {
  id?: number
  exercise?: ExercisePart
  doneExercise?: DoneExercisePart[]
}

export enum GetEvaluationsWithDetails_EvaluationType {
  INITIAL = 'initial',
  DAILY = 'daily',
  PROGRESS = 'progress'
}

export interface GetEvaluationsWithDetails {
  evaluationId?: number
  type?: GetEvaluationsWithDetails_EvaluationType
  createdAt?: string
  subjective?: string
}

export enum IGetEvaluationsWithDetailsScheduleTypeType {
  OFFLINE = 'offline',
  ONLINE = 'online',
  CLASS = 'class',
  IN_PERSON = 'in_person',
  AI = 'ai',
  SYSTEM = 'system'
}
export interface IGetEvaluationsWithDetails {
  ppsId?: number
  physioId?: number
  scheduleStartDate?: string
  scheduleType?: IGetEvaluationsWithDetailsScheduleTypeType
  physioFirstname?: string
  physioLastname?: string
  physioUsername?: string
  evaluations?: GetEvaluationsWithDetails[]
}
export interface UserEvaluationSummeryDtoOut {
  prescription?: string
  physoId?: number
  physoName?: string
  startDate?: string
}
export interface IPostExerciseDonePatient {
  actions?: any
  painRate?: number
  exercisePainDetail?: string
}
export interface UserEvaluationDtoPatch {
  title?: string
  data?: any
  initialEvaluationVersion?: number
}
export interface IResAddPatientPlanScheduleComment {}
export interface GetPrescriptionDtoOut {
  ppsId?: number
  ppsPrescription?: string
}
export interface ClassDetailsExercise {
  id?: number
  title?: string
  description?: string
  goldMeasureId?: number
  goldMeasureTitle?: string
  timeTodo?: string
  setNumber?: number
  repeatNumber?: number
}
export interface ClassDetailsTemplates {
  id?: number
  name?: string
  exercises?: ClassDetailsExercise[]
}
export interface IPhysio {
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
  physoEmail?: string
}
export interface ClassUsersDtoOut {
  userId?: number
  userUsername?: string
}
export interface ClassDetailsDtoOut {
  patientWithClassCategoryId?: number
  classTitle?: string
  classDescription?: string
  classStart?: string
  classEnd?: string
  templates?: ClassDetailsTemplates[]
  physio?: IPhysio
  patients?: ClassUsersDtoOut[]
}
export interface ScheduleDtoOut {
  className?: string
  classCategoryName?: string
  id?: number
  start?: string
  end?: string
  physoId?: number
  physoUsername?: string
}
export interface PatienSessionClassesByClassIdDtoOut {
  sessionId?: number
  className?: string
  classCategoryName?: string
  sessionStart?: string
  sessionEnd?: string
  sessionDuration?: number
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
}
export interface ClassesDtoIn {
  limit?: number
  offset?: number
  selectedDate?: string
}

export enum ISendFeedbackRequestDto__type {
  PHYSIO = 'physio',
  SYSTEM = 'system'
}

export interface ISendFeedbackRequestPatientDto {
  type?: ISendFeedbackRequestDto__type
  subject?: string
  msg?: string
  rate?: number
  physoId?: number
}
export interface IGetPhysicalTherapists {
  ppsId?: number
  physoId?: number
  physoFirstname?: string
  physoLastname?: string
  physoUsername?: string
  scheduleTime?: string
  scheduleType?: string
  countOfUnreadMessages?: number
}
export interface IResSendFeedback {}

export enum IGetFeedbacksPhysoResponseDto_FeedbackType {
  PHYSIO = 'physio',
  SYSTEM = 'system'
}

export interface IGetFeedbacksPhysoResponseDto {
  feedbackId?: number
  senderId?: number
  type?: IGetFeedbacksPhysoResponseDto_FeedbackType
  subject?: string
  msg?: string
  rate?: number
  insertDate?: string
  physoId?: number
  physoFirstName?: string
  physoLastName?: string
  replyAt?: string
  replyUserBaseId?: number
  replyFirstname?: string
  replyLastname?: string
  replyUsername?: string
  replyMessage?: string
  urls?: any
}

export enum IGetFeedbacksSystemResponseDto_FeedbackType {
  PHYSIO = 'physio',
  SYSTEM = 'system'
}

export interface IGetFeedbacksSystemResponseDto {
  feedbackId?: number
  senderId?: number
  type?: IGetFeedbacksSystemResponseDto_FeedbackType
  subject?: string
  msg?: string
  rate?: number
  insertDate?: string
  replyAt?: string
  replyUserBaseId?: number
  replyFirstname?: string
  replyLastname?: string
  replyUsername?: string
  replyMessage?: string
  urls?: any
}
export interface IGetPose {
  poseSamples?: any
  exerciseName?: string
  exerciseSet?: number
  goldMeasureId?: number
  goldMeasureTitle?: string
  goldMeasureDescription?: string
}
export interface PlanDesc {
  status?: boolean
  desc?: string
}
export interface PlanDescription {
  data?: PlanDesc[]
}
export interface ICityDtoOut {
  id?: number
  name?: string
  countryName?: string
}

export enum IDtoUpdatePatientProfileIn__gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export interface IDtoUpdatePatientProfileIn {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: IDtoUpdatePatientProfileIn__gender
  userHeight?: number
  userWeight?: number
  occupation?: string
  employerName?: string
  insuranceProvider?: string
  insuranceId?: string
  homeCellPhoneNumber?: string
  email?: string
  countryId?: number
  state?: string
  cityId?: number
  zipCode?: string
}

export enum IDtoUpdatePatientProfileOut__gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export interface IDtoUpdatePatientProfileOut {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: IDtoUpdatePatientProfileOut__gender
  userHeight?: number
  userWeight?: number
  occupation?: string
  employerName?: string
  insuranceProvider?: string
  insuranceId?: string
  homeCellPhoneNumber?: string
  email?: string
  countryId?: number
  state?: string
  cityId?: number
  zipCode?: string
}

export enum IDtoPatientPlanOut_PlanType {
  BASIC = 'basic',
  PLUS = 'plus',
  PREMIUM = 'premium',
  FREE = 'free'
}

export interface IDtoPatientPlanOut {
  planType?: IDtoPatientPlanOut_PlanType
  startDate?: string
  expireDate?: string
}
export interface IDtoUpdatePatientProfilePassword {
  oldPassword?: string
  newPassword?: string
}

export enum InitialEvaluationExercisesDtoOut_CountingAlgorithmType {
  YOLO = 'yolo',
  MEDIA_PIPE = 'media_pipe',
  HOLISTIC = 'holistic',
  KNN = 'knn'
}

export interface InitialEvaluationExercisesDtoOut {
  exerciseId?: number
  exerciseName?: string
  exerciseCountingAlgorithm?: InitialEvaluationExercisesDtoOut_CountingAlgorithmType
}
export interface IResSpeech {
  text?: string
}
export interface PatientPlanEntity {}
export interface IAiPlatformWebhookError {
  hasError?: boolean
  message?: string
}
export interface IAiPlatformWebhookDtoIn {
  evaluationId?: number
  logId?: number
  platformResponse?: string
  error?: IAiPlatformWebhookError
}
export interface PhysioController_register {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: string
  countryId?: number
  state?: string
  cityId?: number
  address?: string
  homeCellPhoneNumber?: string
  email?: string
  username?: string
  password?: string
  employerName?: string
  employerIdNumber?: string
  employerPhoneNumber?: string
  employerCountryId?: number
  employerState?: string
  employerCityId?: number
  employerZipCode?: string
  clinicId?: number
  licenseStates?: string
  licenseNumbers?: string
  avatar?: string
  licenseFiles?: string[]
}
export interface PhysioController_patinetRegister {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: string
  userHeight?: number
  userWeight?: number
  occupation?: string
  employerName?: string
  insuranceProvider?: string
  insuranceId?: string
  clinicId?: number
  planId?: number
  homeCellPhoneNumber?: string
  email?: string
  countryId?: number
  state?: string
  cityId?: number
  zipCode?: string
  username?: string
  password?: string
  avatarFile?: string
}
export interface PatientController_register {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: string
  userHeight?: number
  userWeight?: number
  occupation?: string
  employerName?: string
  insuranceProvider?: string
  insuranceId?: string
  clinicId?: number
  planId?: number
  homeCellPhoneNumber?: string
  email?: string
  countryId?: number
  state?: string
  cityId?: number
  zipCode?: string
  username?: string
  password?: string
  avatarFile?: string
}
export interface ProfileController_insertLicense {
  licenseState?: string
  licenseNumber?: string
  licenseFile?: string
}
export interface EvaluationController_uploadEvaluation {
  files?: string[]
}
export interface FeedbackController_sendFeedback {
  type?: string
  subject?: string
  msg?: string
  rate?: number
  physoId?: number
  files?: string[]
}
export interface SpeechController_speech {
  file?: string
}
export interface PhysioController_register {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: string
  countryId?: number
  state?: string
  cityId?: number
  address?: string
  homeCellPhoneNumber?: string
  email?: string
  username?: string
  password?: string
  employerName?: string
  employerIdNumber?: string
  employerPhoneNumber?: string
  employerCountryId?: number
  employerState?: string
  employerCityId?: number
  employerZipCode?: string
  clinicId?: number
  licenseStates?: string
  licenseNumbers?: string
  avatar?: string
  licenseFiles?: string[]
}
export interface PhysioController_patinetRegister {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: string
  userHeight?: number
  userWeight?: number
  occupation?: string
  employerName?: string
  insuranceProvider?: string
  insuranceId?: string
  clinicId?: number
  planId?: number
  homeCellPhoneNumber?: string
  email?: string
  countryId?: number
  state?: string
  cityId?: number
  zipCode?: string
  username?: string
  password?: string
  avatarFile?: string
}
export interface PatientController_register {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: string
  userHeight?: number
  userWeight?: number
  occupation?: string
  employerName?: string
  insuranceProvider?: string
  insuranceId?: string
  clinicId?: number
  planId?: number
  homeCellPhoneNumber?: string
  email?: string
  countryId?: number
  state?: string
  cityId?: number
  zipCode?: string
  username?: string
  password?: string
  avatarFile?: string
}
export interface ClassCategoryController_post {
  name?: string
  parentId?: number
  file?: string
}
export interface FeedbackController_sendFeedback {
  subject?: string
  msg?: string
  rate?: number
  files?: string[]
}
export interface ProfileController_updateProfile {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: string
  countryId?: number
  state?: string
  cityId?: number
  address?: string
  homeOrCellPhoneNumber?: string
  email?: string
  avatar?: string
}
export interface ProfileController_insertLicense {
  licenseState?: string
  licenseNumber?: string
  licenseFile?: string
}
export interface EvaluationController_uploadEvaluation {
  files?: string[]
}
export interface FeedbackController_sendFeedback {
  type?: string
  subject?: string
  msg?: string
  rate?: number
  physoId?: number
  files?: string[]
}
export interface ProfileController_updateProfile {
  firstname?: string
  lastname?: string
  birthday?: string
  gender?: string
  userHeight?: number
  userWeight?: number
  occupation?: string
  employerName?: string
  insuranceProvider?: string
  insuranceId?: string
  homeOrCellPhoneNumber?: string
  email?: string
  countryId?: number
  state?: string
  cityId?: number
  zipCode?: string
  files?: string[]
}
export interface SpeechController_speech {
  file?: string
}
