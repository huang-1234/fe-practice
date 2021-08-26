

import { DirResource } from './DirResource';

export enum DirType {
  job = 0,
  dim = 1,
  measure = 2,
  dashboard = 3,
  evt = 4
}

export type FlattenedDir = {
  id: number
  path: string[]
  // children: DirResource[]
}

interface DirProps{

}

export class Dir<T extends DirResource<any> = DirResource> implements DirProps, DirResource{
  id?: number
  private _name?: string = ""
  type?: DirType
  seq?: number
  createTime?: 

}