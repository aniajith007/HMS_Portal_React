import React from 'react'
import { useEffect } from 'react';
import { themeChange } from 'theme-change'


function Theme() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
      }, [])
  return (<>
    <div class="m-5">
	<h2 class="mb-4 text-2xl text-green-700 font-bold">Tog	gle</h2>
	🌞
	<div class="inline-block w-10">
		<span data-toggle-theme="dark" data-act-class="pl-4" class="border rounded-full border-green-700 flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0">
			<span class="rounded-full w-3 h-3 m-1 bg-green-700">
			</span>
		</span>
	</div>
	🌚
</div>

<div class="m-5">
	<h2 class="mb-4 text-2xl text-green-700 font-bold">Buttons</h2>
	<button data-act-class="shadow-outline" data-set-theme="" class="bg-green-700 focus:outline-none m-1 rounded p-2">Default</button>
	<button data-act-class="shadow-outline" data-set-theme="retro" class="bg-green-700 focus:outline-none m-1 rounded p-2">Dark</button>
	<button data-act-class="shadow-outline" data-set-theme="black" class="bg-green-700 focus:outline-none m-1 rounded p-2">Black</button>
	<button data-act-class="shadow-outline" data-set-theme="🌸" class="bg-green-700 focus:outline-none m-1 rounded p-2">🌸 Pink</button>
	<button data-act-class="shadow-outline" data-set-theme="🐬" class="bg-green-700 focus:outline-none m-1 rounded p-2">🐬 Blue</button>
	<button data-act-class="shadow-outline" data-set-theme="🐤" class="bg-green-700 focus:outline-none m-1 rounded p-2">🐤 Yellow</button>
</div>

<div class="m-5">
	<h2 class="mb-4 text-2xl text-green-700 font-bold">Select</h2>
	<select data-choose-theme class="focus:outline-none h-10 rounded-full px-3 border">
		<option value="">Default</option>
		<option value="dark">Dark</option>
		<option value="black">Black</option>
		<option value="🌸">🌸 Pink</option>
		<option value="🐬">🐬 Blue</option>
		<option value="🐤">🐤 Yellow</option>
	</select>
</div>



<div class="m-5 bg-white rounded p-5">
	<h2 class="mb-4 text-2xl text-bold">How to use:</h2>
	Github: <a class="text-blue-600" href="https://github.com/saadeghi/theme-change" target="_blank">https://github.com/saadeghi/theme-change</a>
</div>
</>
  )
}

export default Theme