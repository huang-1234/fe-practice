import type { Service } from './Service';

const TAG = '[ServiceContext]'

/**
 * 所有Service共享的上下文类
 */

export abstract class ServiceContext<ModuleStructure>{
  m: ModuleStructure = {} as any

  /**
   * 注册一个ServiceModule 模块
   */
  registerModule(
    moduleName: string,
    Services: { [funcName: string ]: new ()=> Service<ModuleStructure> }
  ) {
    const m = this.m[moduleName] = {};

    for (const apiName in Services) {
      const Service = Services[apiName]
      let service = new Service()
      service.injectContext(this)
      m[apiName] = service.execute.bind(service)
    }

    // 检查ServiceModule 是否所有成员都存在
    Object.entries(m).forEach(([key, value])=>{
      if (value === null) {
        throw new Error(`register fialed, ${key} is not find`)
      }
    })

    console.log(TAG, `register module`, moduleName)

    m['_isVue'] = true

    return m
  }
}