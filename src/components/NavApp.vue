<template>
    <header>
        <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">Tentang</h4>
                <p class="text-muted">Bukan aplikasi official Whatsapp, tapi ada link yang bisa digunakan dari Whatsapp, yang mempermudah dalam pengiriman text Whatsapp tanpa save kontak. Penasaran cara kerjanya? Klik <router-link to="/about" class="text-muted">disini</router-link>.</p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-light">Hubungi</h4>
                <ul class="list-unstyled">
                  <li><a href="https://twitter.com/kdkchy" class="text-light">DM Twitter</a></li>
                  <li><a href="https://www.instagram.com/kdkchy/" class="text-light">DM Instagram</a></li>
                  <li><a href="mailto:kdkchy@gmail.com" class="text-light">Email</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-light bg-light shadow">
          <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
              <div class="" style="margin-left:5px;">
                <strong><router-link to="/" class="" style="text-decoration: none; color: inherit;">Kirim WA</router-link></strong>
              </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
            </button>
          </div>
        </div>
    </header>
</template>