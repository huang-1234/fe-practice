// import { Dir } from './Dir'

export interface DirResource<TId = number | string> {
  id?: TId
  name?: string
  seq?: number
  upDir?: any
  children?: any[]
}