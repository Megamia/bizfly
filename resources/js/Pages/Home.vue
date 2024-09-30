<template>
    <div>
        <div>
            <a-row style="height: 64px">
                <a-col
                    style="
                        display: flex;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                        width: 48px;
                    "
                    ><HomeOutlined style="color: #e57099"
                /></a-col>
                <a-col style="display: flex; flex: 1; align-items: center">
                    <div>BizLoyalty</div>
                    <div>
                        <a-dropdown>
                            <template #overlay>
                                <a-menu @click="handleMenuClick">
                                    <a-menu-item key="1">
                                        <UserOutlined />
                                        1st menu item
                                    </a-menu-item>
                                    <a-menu-item key="2">
                                        <UserOutlined />
                                        2nd menu item
                                    </a-menu-item>
                                    <a-menu-item key="3">
                                        <UserOutlined />
                                        3rd item
                                    </a-menu-item>
                                </a-menu>
                            </template>
                            <a-button
                                style="
                                    height: 100%;
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    gap: 8px;
                                    border-radius: 2px;
                                "
                            >
                                <div
                                    style="
                                        display: flex;
                                        flex-direction: column;
                                        text-align: left;
                                    "
                                >
                                    <span
                                        style="
                                            font-size: 12px;
                                            color: #00000073;
                                        "
                                    >
                                        Dự án
                                    </span>
                                    <span
                                        style="
                                            font-size: 14px;
                                            color: #000000d9;
                                        "
                                    >
                                        Bảo Tín Mạnh Hải 2023
                                    </span>
                                </div>
                                <div>
                                    <DownOutlined />
                                </div>
                            </a-button>
                        </a-dropdown>
                    </div>
                    <div>
                        <BellOutlined />
                        <WeiboCircleFilled />
                        <QuestionCircleOutlined />
                        <CopyrightCircleOutlined />
                    </div>
                </a-col>
            </a-row>
        </div>
        <div>
            <div>
                <a-anchor
                    :items="[
                        {
                            key: 'part-1',
                            href: '#part-1',
                            title: () =>
                                h('span', { style: 'color: red' }, 'Part 1'),
                        },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title: 'Part 2',
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: 'Part 3',
                        },
                    ]"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    HomeOutlined,
    UserOutlined,
    DownOutlined,
    BellOutlined,
    WeiboCircleFilled,
    QuestionCircleOutlined,
    CopyrightCircleOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";
import { h } from "vue";
const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
};
</script>

<style lang="css"></style>
