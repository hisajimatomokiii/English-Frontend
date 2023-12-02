export default {
  devtools: { enabled: true },
  router: {
    routes: [
      {
        //question.vueのルートを設定
        name: 'question',
        path: '/question',
        component: 'question.vue',
      },
    ],
  },
}