<template>
  <div>
    <div class="h-screen w-screen bg-ivory">
      <div class="flex flex-row items-center justify-between px-20 py-10">
        <h3 class="text-[40px] font-fraunces font-light text-charcoal">
          CSS Effects
        </h3>
        <div>github</div>
      </div>
      <div class="container py-10 flex flex-col items-center mx-auto">
        <div class="section--principal">
          <h1 class="title--principal">Where</h1>
          <div class="h-24 w-60 bg-offGreen rounded-full"></div>
        </div>
        <div class="section--principal">
          <div
            class="h-24 w-52 bg-ivory rounded-full border border-1 border-charcoal"
          ></div>
          <h1 class="title--principal">aesthetics and</h1>
        </div>
        <div class="section--principal">
          <div class="h-24 w-40 bg-charcoal rounded-full"></div>
          <h1 class="title--principal">functionality</h1>
          <div
            class="h-24 w-40 bg-ivory rounded-full border border-1 border-charcoal"
          ></div>
        </div>
        <div class="section--principal">
          <h1 class="title--principal">meet</h1>
          <div class="h-24 w-80 bg-offPink rounded-full"></div>
        </div>
      </div>
    </div>
    <div class="w-screen -mt-40">
      <div class="mx-40 flex">
        <img src="~/assets/svg/buttons.svg" class="z-50" />
        <img src="~/assets/svg/inputs.svg" class="-ml-3 z-40" />
        <img src="~/assets/svg/loaders.svg" class="-ml-3 z-30" />
        <img src="~/assets/svg/text.svg" class="-ml-3 z-20" />
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
          <div class="flex flex-row items-center justify-between px-20 py-10">
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
  @apply flex items-center gap-10;
}
</style>
