import { computed, ref, unref } from '@vue/composition-api'
import Vue from 'vue'
let runtimeVm: Vue | null = null
export const useRouter = (root: any) => {
  const runtimeVmRef = ref(runtimeVm)
  const router = computed(() => runtimeVm!.$router)

  // 跳转
  // const push = (path: any) => {
  //   root.$router.push(path)
  // }

  const push = (path: any) => {
    unref(router).push(path)
  }

  return { push }
}

export default useRouter
