export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612c99251630d096a68a59e8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v3fa38wk',
                  apiId: '1f733fb9-73b8-4c48-8a32-4559e34696bb'
                },
                {
                  buildHookId: '612c99261630d08c608a5e94',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nyivmm6y',
                  apiId: '2bf7c6ba-f3c5-4d6f-92e5-45703ed82720'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/venky7799/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nyivmm6y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
