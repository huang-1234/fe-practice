import { Dir } from '../Dir'
import { DirResource } from './../DirResource';


export type DashboardProps = Partial<Exclude<Dashboard, Function>>

export class Dashboard implements DashboardProps, DirResource {
  id?: number
  name?: string
  desc?: string

  pmdl?: string
  pmdlTmp?: string
  isEnabled?: number
  versionId?: number
  seq?: number

  upDir?: Dir
}