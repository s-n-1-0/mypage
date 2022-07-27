<template>
    <a :href="linkUrl" class="list-group-item list-group-item-action ">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"><i class="pe-2" :class="iconClass"></i>{{title}}</h5>
            <small>{{language}}</small>
        </div>
        <slot></slot>
    </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        title:String,
        linkUrl:String,
        iconClass:String,
        language:String
    },
    setup() {
        
    },
})
</script>
