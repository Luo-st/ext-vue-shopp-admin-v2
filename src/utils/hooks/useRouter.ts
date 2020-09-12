import { computed } from '@vue/composition-api'
import Vue from 'vue'

let runtimeVm: Vue | null = null

export const useRouter = () => {
  const route = computed(() => runtimeVm!.$route)
  return { routeRef: route, router: runtimeVm!.$router }
}

/**
 * @description: 跳转页面
 */
export const usePath = ({
  path = '/',
  replace = true
}: {
  path?: string
  replace?: boolean
} = {}) => {
  const { router } = useRouter()
  const push: any = replace ? router.replace(path) : router.push(path)
  return push
}
