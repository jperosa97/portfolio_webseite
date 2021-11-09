<template>
    <div class="imgContainer">

  <div class="demo-image__preview">
    <el-image
      style="width: 300px; height: 200px"
      :src="url1"
      :preview-src-list="srcList1"
      :initial-index="1"
    >
    </el-image>
  </div>

  <div class="demo-image__preview">
    <el-image
      style="width: 300px; height: 200px"
      :src="url2"
      :preview-src-list="srcList2"
      :initial-index="1"
    >
    </el-image>
  </div>
 </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
setup() {
    const url1 = ref(
    require ('@/assets/diploma_zertifikat/diploma_zeugnis-1.png')
    )
    const srcList1 = ref([
    require ('@/assets/diploma_zertifikat/diploma_zeugnis-2.png'),
    require ('@/assets/diploma_zertifikat/diploma_zeugnis-3.png'),
    
    ])
    const url2 = ref(
    require ('@/assets/udemy_logo.jpg')
    )
    const srcList2 = ref([
    require ('@/assets/diploma_zertifikat/udemy/laravel_zertifikat.png'),
    require ('@/assets/diploma_zertifikat/udemy/symfony_zertifikat.png'),
    require ('@/assets/diploma_zertifikat/udemy/vueJs_zertifikat.png'),
    
    ])

    return {
    url1,
    srcList1,
    url2,
    srcList2
    }
  }
})
</script>

<style scoped>
.imgContainer{
  display: flex;
  width: 55vw;
  margin-left: 18em;
  justify-content: space-evenly;
}
</style>