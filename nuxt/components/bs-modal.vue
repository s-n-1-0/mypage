<template>
  <div class="modal fade" tabindex="-1" aria-hidden="true" ref="modal">
    <div class="modal-dialog" :class="modalDialogClass">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            v-on:click="hideModal()"
          ></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref, toRefs, onMounted } from "vue";
export default defineComponent({
  props: {
    modalDialogSettings: {
      default: [],
      type: Array,
    },
  },
  setup(_props) {
    const { modalDialogSettings } = toRefs(_props);
    const modalRef = ref(null);
    var _getModalInstance = null;
    onMounted(async () => {
      const { Modal } = await import("bootstrap");
      _getModalInstance = () => {
        const myModal = Modal.getInstance(modalRef.value);
        if (myModal) return myModal;
        return new Modal(modalRef.value);
      };
    });
    const modalDialogClassRef = computed(() => {
      let c = {};
      modalDialogSettings.value?.forEach((item) => {
        c[item] = true;
      });
      return c;
    });
    return {
      modal: modalRef,
      modalDialogClass: modalDialogClassRef,
      getModalInstance: () => _getModalInstance(),
      showModal() {
        const myModal = this.getModalInstance();
        myModal.show();
      },
      hideModal() {
        const myModal = this.getModalInstance();
        myModal.hide();
      },
    };
  },
});
</script>
