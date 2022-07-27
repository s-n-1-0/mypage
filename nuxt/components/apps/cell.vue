<template>
                <a :href="linkUrl" class="text-decoration-none d-block">
                    <div class="position-relative">
                        <img :src="imageUrl" :style="`max-width:${maxCellWidthPx}px;`"><br>
                        <small class="text-secondary">{{title}}<br><i :class="makeAppIconClass()"></i> {{getPlatformName()}}</small>
                        <span v-if="isPaid" class="badge position-absolute top-0 start-100 translate-middle bg-info">Paid</span>
                    </div>
                </a>
</template>
<script lang="ts">
import { defineComponent,toRefs} from 'vue'
export default defineComponent({
    props:{
        title:String,
        linkUrl:String,
        imageUrl:String,
        maxCellWidthPx:{
            default:75,
            type:Number
        },
        platform:String,//"ios","web"
        isPaid:{
            default:false,
            type:Boolean
        }
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