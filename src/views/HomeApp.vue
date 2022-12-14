<template>
<body>
  <div class="p-3 bg-secondary progress-bar-striped" style="min-height: 10px;">
  </div>
  <div class="jumbotron">
    <section class="py-5 text-center border-bottom">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Kirim WA</h1>
            <p class="lead text-muted">Ngirim WA tanpa perlu save.</p>
            <hr>
            <h2 class="fw-light py-2 text-truncate">Tulisin nomor WA-nya dibawah.</h2>
              <div class="px-2">
                  <form action="" class="justify-content-center" id="chatForm">
                      <div class="form-group mb-3">
                          <input type="text" class="form-control border-0 shadow-sm text-center" name="nomor-wa" placeholder="+628... / 62... / 08..." v-model="nomorWA">
                      </div>
                      <div class="btn-group">
                        <button type="submit" class="btn btn-outline-dark rounded-pill shadow m-2" @click.prevent="startChat()">CHAT!</button>
                        <button class="btn btn-outline-secondary rounded-pill shadow m-2" @click.prevent="generateLink()">Generate Link</button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
        <div v-if="this.generatedLink" class="text-center mt-4">
          <p class="fst-italic">Generated Link</p> 
          <p id="generatedLink">{{this.generatedLink}} </p>
          <div class="btn-group">
            <button class="btn btn-light m-2" @click.prevent="copyClipBoard()" data-clipboard-target="#generatedLink"><font-awesome-icon :icon="['fas', 'copy']" /></button>
            <button class="btn btn-light m-2" @click.prevent="share()"><font-awesome-icon :icon="['fas', 'location-arrow']" /></button>
          </div>
        </div>
    </section>
  </div>
</body>
</template>

<script>
// import ClipboardJS from 'clipboard/dist/clipboard.min.js'
// new ClipboardJS('.btn');
export default {
  
  created () {
      document.title = "Home - Kirim WA";
  },
  data () {
      return {
          nomorWA: '',
          executedWA: '',
          generatedLink: ''
      }
  },
  mounted(){

  },
  methods: {
      startChat(){
        if(this.nomorWA.length == 0){
            this.$moshaToast(
             { title: 'Apaan gaada nomor!', description: 'Masukinnya yang bener'},
             { type: 'danger' }
            )
        } else if(this.nomorWA.length < 10){
           this.$moshaToast(
             { title: 'Nomornya salah!', description: 'Masukinnya yang bener'},
             { type: 'danger' }
            )
        } else if (this.nomorWA.charAt(0) == '0'){
          this.$moshaToast(
             { title: 'Bagus!', description: 'Lanjutin!'},
             { type: 'success' }
            )
          this.executedWA = '62'+this.nomorWA.slice(1)
          window.open('https://api.whatsapp.com/send?phone='+this.executedWA)
        } else {
          this.$moshaToast(
             { title: 'Bagus!', description: 'Lanjutin!'},
             { type: 'success' }
            )
          this.executedWA = this.nomorWA
          window.open('https://api.whatsapp.com/send?phone='+this.executedWA)
        }
      },
      generateLink(){
        if(this.nomorWA.length == 0){
            this.$moshaToast(
             { title: 'Apaan gaada nomor!', description: 'Masukinnya yang bener'},
             { type: 'danger' }
            )
        } else if(this.nomorWA.length < 10){
           this.$moshaToast(
             { title: 'Nomornya salah!', description: 'Masukinnya yang bener'},
             { type: 'danger' }
            )
        } else if (this.nomorWA.charAt(0) == '0'){
          this.$moshaToast(
             { title: 'Bagus!', description: 'Lanjutin!'},
             { type: 'success' }
            )
          this.generatedLink = 'https://api.whatsapp.com/send?phone=62'+this.nomorWA.slice(1)
          
        } else {
          this.$moshaToast(
             { title: 'Bagus!', description: 'Lanjutin!'},
             { type: 'success' }
            )
          this.generatedLink = 'https://api.whatsapp.com/send?phone='+this.nomorWA
        }
      },
      copyClipBoard(){
        navigator.clipboard.writeText(this.generatedLink)
        this.$moshaToast(
             { title: 'Udah di-copy!', description: 'Sekarang bisa kamu share!'},
             { type: 'default' }
            )
      },
      share(){
        this.$moshaToast(
             { title: 'Sori bos belum update', description: ''},
             { type: 'default' }
            )
      }
  },
  watch:{
    nomorWA(val){
      this.nomorWA = val.replace(/[^0-9]/g, '')
    }
  }
}
</script>

<style>

</style>
