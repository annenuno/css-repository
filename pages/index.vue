<template>
  <div>
    <div class="w-screen h-screen bg-ivory">
      <div class="flex flex-row justify-between items-center px-20 py-10">
        <h3 class="text-[32px] font-fraunces font-light text-charcoal">
          CSS Effects
        </h3>
        <div>github</div>
      </div>
      <div class="container flex flex-col items-center py-10 mx-auto">
        <div class="section--principal">
          <h1 class="title--principal">A library</h1>
          <div class="w-60 h-24 rounded-full bg-offGreen"></div>
        </div>
        <div class="section--principal">
          <div class="w-40 h-24 rounded-full bg-charcoal"></div>
          <h1 class="title--principal">of thoughtful</h1>
          <div
            class="w-40 h-24 rounded-full border bg-ivory border-1 border-charcoal"
          ></div>
        </div>
        <div class="section--principal">
          <h1 class="title--principal">interactions</h1>
          <div class="w-80 h-24 rounded-full bg-offPink"></div>
        </div>
      </div>
    </div>
    <div class="-mt-40 w-screen">
      <div class="flex mx-40">
        <img src="~/assets/svg/buttons.svg" class="z-50" />
        <img src="~/assets/svg/inputs.svg" class="z-40 -ml-3" />
        <img src="~/assets/svg/loaders.svg" class="z-30 -ml-3" />
        <img src="~/assets/svg/text.svg" class="z-20 -ml-3" />
      </div>

      <div class="bg-charcoal h-[1200px] rounded-t-[50px]"></div>
      <div class="-mt-40">
        <div class="mx-40">
          <img src="~/assets/svg/inputs.svg" />
        </div>
        <div class="bg-offPink h-[1200px] rounded-t-[50px]"></div>
      </div>
      <div class="-mt-40">
        <div class="mx-40">
          <img src="~/assets/svg/loaders.svg" />
        </div>
        <div
          class="bg-offGreen h-[1200px] rounded-t-[50px] border-2 border-charcoal"
        ></div>
      </div>
      <div class="-mt-40">
        <div class="mx-40">
          <img src="~/assets/svg/text.svg" />
        </div>
        <div
          class="bg-ivory h-[1200px] rounded-t-[50px] border-2 border-charcoal"
        ></div>
      </div>
      <div class="-mt-40">
        <div class="bg-charcoal h-[500px] rounded-t-[50px]">
          <div class="flex flex-row justify-between items-center px-20 py-10">
            <h3 class="text-[40px] font-fraunces font-light text-ivory">
              CSS Effects
            </h3>
            <div class="text-ivory">github</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.title--principal {
  @apply font-fraunces text-[96px] font-thin text-charcoal;
}
.section--principal {
  @apply flex items-center gap-3;
}
</style>
