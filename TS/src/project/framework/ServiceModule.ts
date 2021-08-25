import type { Service } from './Service';

export interface ServiceModule<ModuleStructure>{
  [key: string]: Service<ModuleStructure>
}