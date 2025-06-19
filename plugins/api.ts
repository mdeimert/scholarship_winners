import { WinnerModule } from '~/repository/modules/winner';

export type ApiInstance = {
  winner: WinnerModule;
};

export default defineNuxtPlugin(async () => {
  const modules: ApiInstance = {
    winner: new WinnerModule(),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
