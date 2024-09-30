<template>
    <div>
        <div style="display: flex; flex-direction: column; gap: 2px">
            <span style="font-size: 14px; color: #00000073">
                <LeftOutlined />
                Danh sách chương trình
            </span>
            <span style="font-size: 24px" @click="log"
                >Thêm chương trình mới</span
            >
        </div>

        <div>
            <div>
                <div style="display: flex; flex-direction: row; gap: 16px">
                    <a-steps
                        :current="current"
                        :items="items"
                        direction="vertical"
                        style="height: 686px; width: 32px"
                        class="test"
                    >
                    </a-steps>

                    <div v-if="current === 0">
                        <span> 0 </span>
                    </div>
                    <div v-else-if="current === 1">
                        <span> 1 </span>
                    </div>
                    <div v-else-if="current === 2">
                        <span> 2 </span>
                    </div>
                </div>

                <div class="steps-action">
                    <a-button
                        :disabled="current === 0"
                        style="margin-left: 8px"
                        @click="prev"
                    >
                        Previous
                    </a-button>
                    <a-button
                        v-if="current === steps.length - 1"
                        type="primary"
                        @click="message.success('Processing complete!')"
                    >
                        Done
                    </a-button>
                    <a-button
                        v-if="current < steps.length - 1"
                        type="primary"
                        @click="next"
                    >
                        Next
                    </a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { LeftOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { message } from "ant-design-vue";

const current = ref(0);
const next = () => {
    if (current.value < steps.length - 1) {
        current.value++;
        log();
    }
};

const prev = () => {
    if (current.value > 0) {
        current.value--;
        log();
    }
};

const log = () => {
    console.log(current.value);
};

const steps = [
    {
        title: "First",
        content: "First-content",
    },
    {
        title: "Second",
        content: "Second-content",
    },
    {
        title: "Last",
        content: "Last-content",
    },
];

const items = steps.map((item, index) => ({
    key: index,
}));
</script>

<style scoped>
.test .ant-steps-item .ant-steps-item-finish {
    background-color: blue;
}
</style>
