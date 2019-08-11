const diend = new Diend({
  el: '#app',
  template: '<h1>Diend {{ count }}</h1>',
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.count++
    }, 3000)
  }
})
