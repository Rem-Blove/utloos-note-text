<script setup lang="ts">
import type { Ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'
import { ref } from 'vue'

// 放大 or 缩小字体
const defFontSize = ref(16)
onKeyStroke(true, (e) => {
  handleFontSize({
    e,
    key: ['Equal', 'Minus'],
    minSize: 10,
    defFontSize,
  })
})

interface HandleFontSizeOptions {
  /** 键盘事件 */
  e: KeyboardEvent
  /** 触发按键keyCode */
  key: string[]
  /** 最小字体大小 */
  minSize: number
  /** 默认字体大小 */
  defFontSize: Ref<number>
}
/**
 * 缩放字体大小（默认步长为2px）
 * @param {HandleFontSizeOptions} options 配置选项
 * @returns void
 */
function handleFontSize({ e, key, minSize, defFontSize }: HandleFontSizeOptions) {
  if (!key.includes(e.code) && !e.ctrlKey) {
    return
  }

  e.preventDefault()
  defFontSize.value += e.code === 'Equal' ? 2 : -2
  document.querySelector('body')!.style.fontSize = `${Math.max(minSize, defFontSize.value)}px`
}
</script>

<template>
  <div class="flex h-full flex-col border border-[#fbe961] text-black">
    <div class="drag h-5 cursor-move bg-[#fbe961]" />
    <div class="no-drag flex-1 bg-[#fdf3a7] p-2 outline-none" contenteditable />
  </div>
</template>

<style scoped></style>
