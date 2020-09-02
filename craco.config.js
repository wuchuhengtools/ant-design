const CracoLessPlugin = require('craco-less');

module.exports = {
    webpack: {
        configure: (config, { env, paths }) => {
            config.module.rules.push({
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                            icon: true,
                        },
                    },
                ],
            });
            return config;
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1890ff' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};

