<template>
    <Head>
        <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
    </Head>
    <div style="background-color: #4d6a87ff;"> 
        <div class="p-3" >

            <portfolio-tabs class="sticky-top text-white" style="background-color: #4d6a87ff;"/>
            <portfolio-body :use-spy="false"/>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    setup(){
    }
})
</script>
<style>

</style>