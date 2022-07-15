<template>
                <a :href="linkUrl" class="text-decoration-none">
                    <img :src="imageUrl" style="max-width:75px;">
                    <small class="text-secondary">{{title}}<br><i :class="makeAppIconClass()"></i> {{getPlatformName()}}</small>
                </a>
</template>
<script lang="ts">
import { defineComponent,toRefs} from 'vue'
export default defineComponent({
    props:{
        title:String,
        linkUrl:String,
        imageUrl:String,
        platform:String,//"ios","web"
    },
    setup(props){
        const {platform} = toRefs(props);
        return{
            makeAppIconClass(){
                var fontClassList:string[] = []
                switch(platform.value){
                    case "ios":
                        fontClassList = ["fa-brands","fa-apple"];
                        break;
                    case "web":
                        fontClassList = ["fa-solid","fa-window-maximize"];
                        break;
                    default:
                        break;
                }
                var fontClass:any = {}
                fontClassList.forEach(item=>{
                    fontClass[item] = true
                });
                return fontClass
            },
            getPlatformName(){
                switch(platform.value){
                    case "ios":
                       return "iOS";
                    case "web":
                        return "Web";
                    default:
                        return "";
                }
            }
        }
    }
})
</script>