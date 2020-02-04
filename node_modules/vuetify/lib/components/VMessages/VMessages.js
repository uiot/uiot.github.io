// Styles
import "../../../src/components/VMessages/VMessages.sass"; // Mixins

import Colorable from '../../mixins/colorable';
import Themeable from '../../mixins/themeable';
import mixins from '../../util/mixins'; // Utilities

import { escapeHTML, getSlot } from '../../util/helpers';
/* @vue/component */

export default mixins(Colorable, Themeable).extend({
  name: 'v-messages',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    genChildren() {
      return this.$createElement('transition-group', {
        staticClass: 'v-messages__wrapper',
        attrs: {
          name: 'message-transition',
          tag: 'div'
        }
      }, this.value.map(this.genMessage));
    },

    genMessage(message, key) {
      const slot = getSlot(this, 'default', {
        message,
        key
      });
      const escapedHTML = escapeHTML(message);
      const innerHTML = !slot ? escapedHTML : undefined;
      return this.$createElement('div', {
        staticClass: 'v-messages__message',
        key,
        domProps: {
          innerHTML
        }
      }, slot);
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.color, {
      staticClass: 'v-messages',
      class: this.themeClasses
    }), [this.genChildren()]);
  }

});
//# sourceMappingURL=VMessages.js.map