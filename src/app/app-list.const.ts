import { App } from './app.interface';

export const appList: App[] = [
  {
    appId: 'fire',
    projectUrl: 'https://fire.evley.app',
    repoUrl: 'https://github.com/evley/fire',
    description: `
      FIRE (Financial Independence Retire Early) app is a simple d3 visualisation of income,
       expenditure, liability and assets. Giving you an idea of when you can achieve FIRE.`
  },
  {
    appId: 'bob',
    projectUrl: 'https://bob.evley.app',
    repoUrl: 'https://github.com/evley/bob',
    description: `
      BOB (bug out bag) is a simple categorised list app to help organise your prepping needs.`
  }
];
