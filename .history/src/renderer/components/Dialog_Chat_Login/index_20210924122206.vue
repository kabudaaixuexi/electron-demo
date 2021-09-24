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
    <span>{{dialogVisible}}</span>
        <span>This is a message</span>
        <template #footer>
            <span class="dialog-footer">
                <!-- <el-button disabled @click="dialogVisible = false">Cancel</el-button> -->
                <el-button type="primary" @click="dialogVisible = false"
                >登录</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>

<script src="./index.ts" />

<style>

</style>
