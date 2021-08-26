import type { ServiceContext } from './ServiceContext'
/**
 *
 * 所有的具体业务逻辑都要继承自Service 基类
 */
export abstract class Service<ModuleStructure>{
  protected context: ServiceContext<ModuleStructure>

  injectContext(context: any){
    this.context = context
  }

  abstract execute(...rest): void | Promise<any> | any
}