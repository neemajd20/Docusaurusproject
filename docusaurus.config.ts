
import type { DefaultParseFrontMatter, DocusaurusConfig } from '@docusaurus/types';
import type * as Present from '@docusaurus/preset-classic' ;
import { ParseFrontMatterParams, ParseFrontMatterResult } from '@docusaurus/types/src/config';

const config: DocusaurusConfig = {
  title: 'AFYA MSAFIRI Documentation',
  tagline: 'Electronic Screening of Travelers and Public Health Events',
  url: 'https://your-site-url.com', // Replace with your site URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', // Your GitHub org/user name
  projectName: 'afya-msaafiri', // Your repo name
  themeConfig: {
    navbar: {
      title: 'AFYA MSAFIRI',
      logo: {
        alt: 'AFYA MSAFIRI Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/intro', label: 'Documentation', position: 'left' },
        { to: 'docs/intro', label: 'Getting Started', position: 'left' },
        {
          href: 'https://github.com/your-org/afya-msaafiri',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/intro',
            },
            {
              label: 'System Requirements',
              to: 'docs/system-requirements',
            },
            {
              label: 'For Travelers',
              to: 'docs/afya-msaafiri/travelers',
            },
            {
              label: 'For Managers',
              to: 'docs/afya-msaafiri/managers',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-org/afya-msaafiri',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/your-org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Organization. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/your-org/afya-msaafiri/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    path: '',
    locales: ['en'],
    localeConfigs: {}
  },
  future: {
    experimental_storage: {
      type: 'localStorage',
      namespace: ''
    },
    experimental_router: 'browser'
  },
  noIndex: false,
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',
  plugins: [],
  themes: [],
  staticDirectories: [],
  headTags: [],
  scripts: [],
  stylesheets: [],
  clientModules: [],
  titleDelimiter: '',
  baseUrlIssueBanner: false,
  markdown: {
    format: 'mdx',
    parseFrontMatter: function (params: ParseFrontMatterParams & { defaultParseFrontMatter: DefaultParseFrontMatter; }): Promise<ParseFrontMatterResult> {
      throw new Error('Function not implemented.');
    },
    mermaid: false,
    preprocessor: function (args: { filePath: string; fileContent: string; }): string {
      throw new Error('Function not implemented.');
    },
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false
    },
    remarkRehypeOptions: undefined,
    anchors: {
      maintainCase: false
    }
  }
};

export default config;
