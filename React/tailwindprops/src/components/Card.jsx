import React from 'react'

function Card({title="TitleHere"}) {
  return (
    <>
    <div class="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
      alt="ui/ux review check"
    />
  </div>
  <div class="p-6">
    <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div class="flex items-center justify-end p-6">
    <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
      April 18
    </p>
  </div>
</div>
</>
  )
}

export default Card