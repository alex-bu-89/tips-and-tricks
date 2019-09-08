<script src="./Modal.js"></script>

<style lang="scss" src="./Modal.scss"></style>

<template>
  <section v-if="this.isOpen" class="ab-modal">
    <div class="ab-modal__dialog">
      <slot></slot>
      <!-- <img src="../assets/close.svg" class="ab-modal__close" /> -->
      <span class="ab-modal__close"
            v-on:click="closeModal"
      ></span>
    </div>
  </section>
</template>