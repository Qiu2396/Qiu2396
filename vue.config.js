//vue项目配置文件 覆盖

module.exports = {
    lintOnSave: false, //关闭代码格式检查

    devServer: {
        proxy: {
            '/ajax': {
                target: 'https://m.maoyan.com',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/maizuo': ''
                // }   把/maizuo匹配换成空字符串
            },
            '/qiu': {
                target: 'https://m.maizuo.com',
                changeOrigin: true,
                pathRewrite: {
                    '/qiu': ''
                } // 把/maizuo匹配换成空字符串
            }
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'qiuhan'
                return args
            })
    },
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 直接覆盖变量
                        'text-color': '#111',
                        'border-color': '#eee',
                        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                        hack: `true; @import "your-less-file-path.less";`,
                    },
                },
            },
        },
    },

}