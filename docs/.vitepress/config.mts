import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Raion Polaris",
    description: "Guideline",
    lang: 'zh_CN',
    head: [
        ['link', {rel: 'icon', href: '/brand-icon.svg'}]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: '/brand-icon.svg',

        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guideline', link: '/guideline/intro'},
            {text: 'BLOG', link: 'https://journey.raion.cloud'}
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    zh_CN: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },

        sidebar: [
            {
                text: '指南',
                items: [
                    {text: '快速开始', link: '/guideline/intro'},
                    {text: '界面', link: '/guideline/coda'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/RaionCloud/polaris'},
            {icon: 'wechat', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
