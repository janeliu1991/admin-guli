/*
 * @Descripttion: 
 * @Author: jane
 * @Date: 2022-04-22 14:14:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 14:41:12
 */

const CracoLessPlugin = require('craco-less')
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
    // 代理接口
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'https://api.cn',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 "^/api": ''
    //             }
    //         }
    //     },
    // },
    webpack: {
        alias: {
            '@': pathResolve('src'),
            '@@': pathResolve('src/components'),
            '@redux': pathResolve('src/redux')
        }
    },
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: "es", style: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                // 根据 less-loader 版本的不同会有不同的配置
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1DA57A'
                        },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}