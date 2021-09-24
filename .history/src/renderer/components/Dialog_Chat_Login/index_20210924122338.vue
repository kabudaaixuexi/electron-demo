<template>
	<el-dialog
        v-model="dialogVisible"
        title="请先登录"
        :modal="false"
        width="30%"
        :before-close="$emit('update:dialogVisible', false)"
    >
        <template #body>
            <div>
                
            </div>
        </template>
        <template #footer>
            <!-- <el-button disabled @click="dialogVisible = false">Cancel</el-button> -->
            <el-button type="primary" @click="chatLogin">确认登录</el-button>
        </template>
    </el-dialog>
</template>

<script src="./index.ts" />

<style>

</style>
