/** 打包库模式 */
const { resolve } = require('path')
import { defineConfig } from 'vite'
import useBaseConfig from './base.config'
import { external } from '../plugins/plugin-module'

export default defineConfig(({ mode, command }) => {
  let config = useBaseConfig({ target: 'lib', mode, command })

  //需要取消复制静态资源目录
  config.publicDir = false
  config.build = {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, '../package/index.js'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      /** 排除无需打包进去的依赖库 */
      external,
    },
  }

  return config
})
