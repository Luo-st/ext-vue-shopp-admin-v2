<template>
  <PageWrapper>
    <a-spin :spinning="loading">
      <ContentWrapper>
        <a-page-header title="返回" @back="back" />
        <div class="content">
          <div class="flex">
            <div class="label">
              文章标题：
            </div>
            <div class="value">
              <a-textarea
                placeholder="请输入文章标题"
                :value="article.title"
                @change="({ target: { value } }) => onChangedataItem({ title: value })"
              />
            </div>
          </div>
          <div class="flex">
            <div class="label">
              发布时间：
            </div>
            <div class="value">
              <a-date-picker :value="article.issue_time" show-time />
            </div>
          </div>
          <div class="flex">
            <div class="label">
              文章作者：
            </div>
            <div class="value">
              <a-input placeholder="请输入文章作者" />
            </div>
          </div>
        </div>
      </ContentWrapper>
      <TableBottomWrapper>
        <a-button @click="back">返回</a-button>
        <a-button type="primary" @click="onSubmit">保存</a-button>
      </TableBottomWrapper>
    </a-spin>
  </PageWrapper>
</template>

<script lang="ts">
import { ref, onMounted } from '@vue/composition-api'
import { message } from 'ant-design-vue'
import { ajax, url } from '@/api'
import moment from 'moment'
import { PageWrapper, ContentWrapper, TableBottomWrapper } from '@/style/TableStyle'

export default {
  components: {
    PageWrapper,
    ContentWrapper,
    TableBottomWrapper
  },

  setup(props: any, { root }: any) {
    const {
      params: { uuid }
    } = root.$route

    const article = ref<any>({})
    const loading = ref<boolean>(false)
    // const momentFn = moment

    // 初始化数据
    const init = async () => {
      loading.value = true
      await ajax({
        url: url.articleRead,
        data: {
          condition: {
            uuid
          }
        }
      })
        .then(res => {
          const { data = {} } = res
          loading.value = false
          article.value = data
        })
        .catch(err => {
          loading.value = false
        })
    }

    //  生命周期函数
    onMounted(() => {
      init()
    })

    // 修改字段
    const onChangedataItem = (params: any) => {
      article.value = {
        ...article.value,
        ...params
      }
    }

    // 返回上一页
    const back = () => root.$router.back()

    // 确认
    const onSubmit = () => {
      const ajaxUrl = uuid ? url.articleUpdate : url.articleSave
      ajax({
        url: ajaxUrl,
        data: article.value
      })
        .then(res => {
          message.success(res.msg)
        })
        .catch(err => {})
    }

    return {
      article,
      loading,
      back,
      onSubmit,
      moment,
      onChangedataItem
    }
  }
}
</script>
<style lang="less">
.content {
  box-sizing: border-box;
  > .flex {
    display: flex;
    align-items: flex-start;
    margin-top: 18px;
    > .label {
      width: 160px;
      font-weight: 500;
      text-align: end;
    }
    > .value {
      margin-left: 10px;
      flex: 0 0 auto;
      > textarea {
        width: 500px;
      }
      > input {
        width: 220px;
      }
      > select {
        width: 220px;
      }
    }
  }
}
</style>
