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
            {text: '首页', link: '/'},
            {text: '指南', link: '/markdown-examples'},
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
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/synn/polaris.raion'},
            {icon: 'wechat', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
