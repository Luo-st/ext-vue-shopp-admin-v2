// @ts-nocheck
import styled from 'vue-styled-components'

// 包裹
export const PageWrapper = styled.div`
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  > .ant-spin-nested-loading {
    height: 100%;
    > .ant-spin-container {
      height: 100%;
    }
  }
`
// 表格列表
export const TableWrapper = styled.section`
  height: calc(100% - 50px);
  overflow: auto;
  padding: 0 20px;
`
// 表格头部包裹
export const TableTopWrapper = styled.section`
  margin: 20px 0;
  background: #f4f4f4;
  padding: 15px 35px;
  border-radius: 4px;
`
// 表格头部单项
export const TableTopWrapperItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  > .button {
    margin-right: 20px;
  }
`
// 表格头部单项标题
export const TableTopWrapperItemTitle = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;
`
// 表格底部
export const TableBottomWrapper = styled.section`
  border-top: 1px solid #f4f4f4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  line-height: 50px;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgb(244, 244, 244);
`

// 编辑页
export const ContentWrapper = styled.section`
  height: calc(100% - 50px);
  overflow: auto;
  padding: 0 20px;
`
