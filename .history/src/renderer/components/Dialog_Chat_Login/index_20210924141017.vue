<template>
	<el-dialog
        v-model="dialogVisible"
        title="请先登录"
        :modal="false"
        width="30%"
        :before-close="$emit('update:dialogVisible', false)"
    >
        <el-autocomplete
            v-model="uid"
            :fetch-suggestions="querySearch"
            class="inline-input"
            placeholder="账号从输入提示中选一个"
            @select="handleSelect"
        />
        <el-input v-model="password" placeholder="密码自动填充" />
        <template #footer>
            <!-- <el-button disabled @click="dialogVisible = false">Cancel</el-button> -->
            <el-button type="primary" @click="chatLogin">确认登录</el-button>
        </template>
    </el-dialog>
</template>

<script src="./index.ts" />

<style>

</style>
