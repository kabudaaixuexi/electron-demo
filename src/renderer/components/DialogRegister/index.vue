<template>
  <el-dialog
    v-model="dialogVisible"
    title="注册新账号"
    :modal="true"
    :show-close="false"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    width="30%"
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-form-item label="昵称：" prop="userName">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码：" prop="passWord">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <!-- <el-form-item label="再次确认密码：" prop="passWord2">
        <el-input v-model="ruleForm.name" />
      </el-form-item> -->
      <!-- <el-form-item label="性别：" prop="region">
        <el-select v-model="ruleForm.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="111" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item> -->
      <el-form-item label="介绍一下自己吧" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="changeLogin(true)">前往登录</el-button>
      <el-button type="primary" @click="chatRegister">确认并登录</el-button>
    </template>
  </el-dialog>
</template>

<script src="./index.ts" />

<style lang="scss">
.inline-input {
  width: 100%;
  margin-bottom: 12px;
}
</style>
