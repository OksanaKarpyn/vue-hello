const { createApp } = Vue

  createApp({
    data() {
      return {
        messagge:'Hello Vue',
        imageSrc:'https://picsum.photos/seed/picsum/200/300',
        imageName:'paesaggio',
      }
    }
  }).mount('#app')