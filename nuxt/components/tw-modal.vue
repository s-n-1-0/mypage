<template>
  <div
    v-if="isModal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full"
  >
    <div
      class="relative w-full h-full md:h-auto mx-auto"
      :class="modalDialogClass"
    >
      <!-- Modal content -->
      <div
        class="relative bg-white rounded-lg shadow overflow-auto modal-frame"
      >
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t">
          <slot name="header"></slot>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            v-on:click="hideModal()"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <slot></slot>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref, toRefs } from "vue";
export default defineComponent({
  props: {
    modalDialogSettings: {
      default: [],
      type: Array,
    },
  },
  setup(_props) {
    const { modalDialogSettings } = toRefs(_props);
    const isModalRef = ref(false);
    var _getModalInstance = null;
    const modalDialogClassRef = computed(() => {
      let c = {};
      modalDialogSettings.value?.forEach((item) => {
        c[item] = true;
      });
      return c;
    });
    return {
      isModal: isModalRef,
      modalDialogClass: modalDialogClassRef,
      getModalInstance: () => _getModalInstance(),
      showModal() {
        isModalRef.value = true;
      },
      hideModal() {
        isModalRef.value = false;
      },
    };
  },
});
</script>
<style scoped>
.modal-frame {
  height: calc(100vh - 2rem);
}
</style>
