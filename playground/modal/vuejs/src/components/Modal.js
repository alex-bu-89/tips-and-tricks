export default {
  name: 'Modal',
  props: {
    msg: String
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    closeModal: function () {
      this.isOpen = false;
    }
  }
};
