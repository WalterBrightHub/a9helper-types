export interface SEToolCar {
  car_id: string
  fullName: string
  nickName: string
  isKeyCar: boolean
  rankLimits: number[]
  star: number
}

export enum RewordType {
  seCard = 'seCard',
  seKey = 'seKey',
  token = 'token',
  sePack = 'sePack',
  sePart = 'sePart',
  credit = 'credit',
  seSkin = 'seSkin',
  seasonToken = 'seasonToken',
  // ultimatePart='ultimatePart',
}

export interface RewordCommon {
  type: RewordType
  count: number
}

interface RewordUltimate {
  type: 'ultimatePart' | 'ultimateCard'
  count: number
  cardClass: string
}

interface RewordCar {
  type: 'carCard'
  count: number
  car_id: string
}

type Reword = RewordCommon //| RewordUltimate | RewordCar

type rewordType = Reword['type']

export interface ProcessReword {
  conditions: number
  reword: Reword
}

export interface Join {
  star: number
  rank: number
}

export interface ToolCar {
  car_id: string
  freeTry: boolean
}

export interface Mission {
  toolCars: ToolCar[]
  join: Join
  conditions: number
  rewords: Reword[]
}

export interface Stage {
  stage?: number
  clubRewords: Reword[]
  unlockConditions: number
  missions: Mission[]
}

export interface SpecialEventData {
  havePack: Boolean
  haveClubRewords: Boolean
  haveSkin: Boolean
  havePackConditions: Boolean
  haveEventKey: Boolean
  packConditions: Number
  dataTableImage?: string
  toolCars: SEToolCar[]
  notes: string[]
  processRewords: ProcessReword[]
  stages: Stage[]
}
