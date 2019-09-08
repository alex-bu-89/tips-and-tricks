export default {
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    max: {
      type: Number,
      default () {
        return 5
      }
    },
    label: {
      type: String,
      default () {
        return 'Search for posts'
      }
    }
  },
  data () {
    return {
      isOpen: false,
      inputValue: '',
      selectedOption: null,
      fallbackText: 'Sorry, but no results could be found…'
    }
  },
  created () {
    // handle outside click of ref="selectbox" element
    window.addEventListener('click', (e) => {
      if (!this.$refs.selectbox.contains(e.target)) {
        this.isOpen = false
      }
    })
  },
  methods: {
    handleEscPress () {
      this.inputValue = ''
      this.isOpen = false
    },
    handleClick (option) {
      this.inputValue = option.title
      this.isOpen = false
      this.$store.commit('setSelectedPost', option)
    },
    clickOnInput () {
      this.isOpen = true
    },
    setFallbackStatus (status) {
      this.isFallbackShown = status
    }
  },
  computed: {
    filteredOptions () {
      if (this.options) {
        const filtered = this.options.filter((post) => {
          return post.title.includes(this.inputValue)
        })

        this.setFallbackStatus(filtered.length === 0)

        return filtered.slice(0, this.max)
      }

      return []
    }
  }
}
