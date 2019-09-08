<template>
  <section class='combobox'>
    <label class='combobox__label'>{{ label }}</label>
    <div ref='selectbox' class='combobox__wrapper'>
      <input
        class='combobox__search'
        type='text'
        v-model='inputValue'
        v-on:keyup.esc="handleEscPress"
        v-on:click='clickOnInput' />

      <ul
        class='combobox__dropdown'
        v-show='isOpen'
        v-bind:class='{ fadeIn: isOpen, fadeOut: !isOpen, }' >
        <li
          class='combobox__option'
          v-for='(option, index) in filteredOptions'
          v-bind:key='index'
          v-on:click="handleClick(option)">
            <span>{{ option.title }}</span>
        </li>
        <li v-show='isFallbackShown'>{{ fallbackText }}</li>
      </ul>
    </div>
  </section>
</template>

<script src="./Combobox.js"></script>

<style src="./Combobox.css"></style>
