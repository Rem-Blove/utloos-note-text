<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'

// 放大 or 缩小字体
let defFontSize = 16
onKeyStroke(true, (e) => {
  // Ctrl + =
  if (e.code === 'Equal' && e.ctrlKey) {
    e.preventDefault()
    defFontSize += 2
    handleFontSize(defFontSize)
  }

  // Ctrl + -
  if (e.code === 'Minus' && e.ctrlKey) {
    e.preventDefault()
    defFontSize = Math.max(10, defFontSize - 2)
    handleFontSize(defFontSize)
  }
})

function handleFontSize(size: number) {
  document.querySelector('body')!.style.fontSize = `${size}px`
}
</script>

<template>
  <div class="flex h-full flex-col border border-[#fbe961] text-black">
    <div class="drag h-5 cursor-move bg-[#fbe961]" />
    <div class="no-drag flex-1 bg-[#fdf3a7] p-2 outline-none" contenteditable />
  </div>
</template>

<style scoped></style>
