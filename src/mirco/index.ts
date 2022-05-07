import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { message } from 'ant-design-vue'
import apps from './app'
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from 'qiankun'

// 注册子应用
/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // 微应用加载前,
  beforeLoad: (app: any) => {
    NProgress.start()
    console.log('after mount', app.name)
    return Promise.resolve()
  },
  afterMount: (app: any) => {
    NProgress.done()
    console.log('after mount', app.name)
    return Promise.resolve()
  },
})

// 注册全局未捕获异常处理器

addGlobalUncaughtErrorHandler((event: Event | string) => {
  const { message: msg } = event as any
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    message.error('微应用加载失败，请检查应用是否可运行')
  }
})

// 导出 qiankun 的启动函数
export default start
