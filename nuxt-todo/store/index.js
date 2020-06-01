import { vuexfireMutations } from 'vuexfire'

// ルートのストア(index.js)に作る必要がある
export const mutations = {
  // vuexfireが用意しているmutaitionが使えるようになる
  ...vuexfireMutations
}
