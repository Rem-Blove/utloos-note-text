<script setup lang="ts">
import type { Ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const editRef = ref<HTMLDivElement | null>(null)
onMounted(() => {
  editRef.value?.focus()
})

const defaultFontSize = ref(16)
onKeyStroke(true, (e) => {
  // 放大 or 缩小字体
  handleFontSize(e, 10, defaultFontSize)

  // 关闭应用
  handleCloseApp(e)
})

const keyString = ref('')
function handleCloseApp(e: KeyboardEvent) {
  if (keyString.value.length >= 20 && e.code !== 'Escape') {
    keyString.value = ''
  }

  keyString.value += e.code
  const reg = /(?:Escape){2}/
  reg.test(keyString.value) && window.close()
}

/**
 * 缩放字体大小（默认步长为2px）
 * @param e 键盘事件
 * @param minSize 最小字体大小
 * @param defaultSize 默认字体大小
 * @param key 触发按键code，默认['Equal', 'Minus']
 * @param step 缩放步长，默认2px
 * @returns void
 */
function handleFontSize(e: KeyboardEvent, minSize: number, defaultSize: Ref<number>, key = ['Equal', 'Minus'], step = 2) {
  if (!e.ctrlKey || !key.includes(e.code)) {
    return
  }

  e.preventDefault()
  defaultSize.value += e.code === 'Equal' ? step : -step
  document.querySelector('body')!.style.fontSize = `${Math.max(minSize, defaultSize.value)}px`
}
</script>

<template>
  <div class="flex h-full flex-col border border-[#fbe961] text-black">
    <div class="drag h-5 cursor-move bg-[#fbe961]" />
    <div ref="editRef" class="no-drag flex-1 bg-[#fdf3a7] p-2 outline-none" contenteditable spellcheck="false" />
  </div>
</template>

<style scoped></style>
