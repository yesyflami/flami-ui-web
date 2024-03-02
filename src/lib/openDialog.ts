import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'

export const openDialog = (options) => {
  const { title, content } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    //@ts-ignore
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (newVisible) => {
          if (!newVisible) {
            close()
          }
        }
      }, {
        title, content
      })
    },
  })
  app.mount(div)
}