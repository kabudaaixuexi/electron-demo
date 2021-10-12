<template>
	<el-dialog
        v-model="dialogVisible"
        title="Tips"
        :modal="false"
        width="30%"
    >
    <span>{{dialogVisible}}</span>
        <span>This is a message</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="$emit('DialogVisible', false)">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                >Confirm</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>

<script src="./index.ts" />

<style>

</style>
