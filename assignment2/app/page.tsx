export default function Home() {
  return (
    <main className="flex bg-pink-100 h-screen w-full p-24 justify-center">
      <div className="max-w-screen-lg">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-white w-80">
            <div className="m-5">
              <div className="h-16 mt-10">
                <span className="text-black font-bold text-4xl">Weather</span>
              </div>
              <div className="grid grid-cols-1 gap-y-5 ">
                <div className="flex rounded-xl border-2 border-black shadow-[0px_3px_0px_0px_rgba(0,0,0,255)] p-4">
                  <div className="w-28 self-center">
                    <div className="font-bold text-xl ">Casius</div>
                    <div className="font-bold text-xs">Mars, 12AM</div>
                  </div>
                  <svg className="size-14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                    <path d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 28V38" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24 32V42" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 28V38" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div className="w-4"></div>
                  <div className="font-extrabold text-4xl self-center">85°</div>
                </div>
                <div className="bg-yellow-400 flex rounded-xl border-2 border-black shadow-[0px_3px_0px_0px_rgba(0,0,0,255)] p-4">
                  <div className="w-28 self-center">
                    <div className="font-bold text-xl ">Dlacria</div>
                    <div className="font-bold text-xs">Mars, 12AM</div>
                  </div>
                  <svg className="size-14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                    <path d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 28V38" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24 32V42" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 28V38" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div className="w-4"></div>
                  <div className="font-extrabold text-4xl self-center">85°</div>
                </div>
                <div className="bg-teal-400 flex rounded-xl border-2 border-black shadow-[0px_3px_0px_0px_rgba(0,0,0,255)] p-4">
                  <div className="w-28 self-center">
                    <div className="font-bold text-xl ">New York</div>
                    <div className="font-bold text-xs">USA, 12AM</div>
                  </div>
                  <svg className="size-14" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <div className="w-4"></div>
                  <div className="font-extrabold text-4xl self-center">85°</div>
                </div>
                <div className="bg-[#FF6347] flex rounded-xl border-2 border-black shadow-[0px_3px_0px_0px_rgba(0,0,0,255)] p-4 text-white">
                  <div className="w-28 self-center">
                    <div className="font-bold text-xl ">Zomato</div>
                    <div className="font-bold text-xs">India, 12AM</div>
                  </div>
                  <svg className="size-14"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M4.64 16.95c0-1.16.35-2.18 1.06-3.08s1.62-1.48 2.74-1.76c.31-1.36 1.01-2.48 2.1-3.36s2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28 1.08.85 1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.66.76.44 1.37 1.04 1.81 1.8.44.76.67 1.59.67 2.48 0 1.32-.46 2.47-1.39 3.42-.92.96-2.05 1.46-3.38 1.5-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18.85-.04 1.58-.38 2.18-1.02s.9-1.38.9-2.23c0-.89-.32-1.65-.97-2.3s-1.42-.97-2.32-.97h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58c-.11-1.08-.58-1.99-1.39-2.72-.82-.73-1.76-1.1-2.85-1.1-1.1 0-2.05.37-2.86 1.11-.81.74-1.27 1.65-1.37 2.75l-.06.5c0 .12-.07.19-.2.19l-.53.07c-.83.07-1.53.41-2.1 1.04s-.85 1.35-.85 2.19c0 .85.3 1.59.9 2.23s1.33.97 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17-1.34-.04-2.47-.54-3.4-1.5-.87-.96-1.33-2.11-1.33-3.43zM11 21.02c0-.22.08-.42.24-.58.16-.16.35-.24.59-.24.23 0 .43.08.59.24.16.16.24.36.24.58 0 .24-.08.44-.24.6-.16.17-.35.25-.59.25-.23 0-.43-.08-.59-.25a.814.814 0 01-.24-.6zm0 3.63c0-.24.08-.44.24-.6.16-.15.35-.23.58-.23.23 0 .43.08.59.23.16.16.24.35.24.59s-.08.43-.24.59c-.16.16-.35.23-.59.23a.84.84 0 01-.59-.23.8.8 0 01-.23-.58zm3.19-1.7c0-.23.08-.44.25-.62.16-.16.35-.24.57-.24.23 0 .43.09.6.26.17.17.26.37.26.6 0 .23-.08.43-.25.6-.17.17-.37.25-.61.25-.23 0-.42-.08-.58-.25s-.24-.37-.24-.6zm0-3.62c0-.23.08-.43.25-.6.18-.16.37-.24.57-.24.24 0 .44.08.61.25a.8.8 0 01.25.6c0 .23-.08.43-.25.59-.17.16-.37.24-.61.24-.23 0-.42-.08-.58-.24a.847.847 0 01-.24-.6zm0 7.28c0-.23.08-.43.25-.61.16-.16.35-.24.57-.24.24 0 .44.08.61.25.17.17.25.37.25.6s-.08.43-.25.59c-.17.16-.37.24-.61.24a.824.824 0 01-.82-.83zm3.22-5.59c0-.22.08-.41.25-.58.17-.17.37-.25.6-.25.23 0 .43.08.59.24.16.16.24.36.24.58 0 .24-.08.44-.24.6-.16.17-.35.25-.59.25s-.44-.08-.6-.25a.816.816 0 01-.25-.59zm0 3.63c0-.22.08-.42.25-.6.16-.15.36-.23.6-.23s.43.08.59.23.23.35.23.59-.08.43-.23.59c-.16.16-.35.23-.59.23s-.44-.08-.6-.24a.756.756 0 01-.25-.57z" />
                  </svg>
                  <div className="w-4"></div>
                  <div className="font-extrabold text-4xl self-center">20°</div>
                </div>
              </div>
              <div className="flex justify-center mt-12">
                <div className="size-14 rounded-full border-black border-2 shadow-[0px_2px_0px_0px_rgba(0,0,0,255)]">
                  <svg data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" fill-rule="evenodd"></path>
                  </svg></div></div>
            </div>
          </div>
          <div className="bg-white w-80">
            <div className="m-5 mt-12">
              <svg className="size-10 rounded-full border-2 border-black shadow-[0px_1px_0px_0px_rgba(0,0,0,255)]" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div className="flex justify-center mt-2 items-center text-gray-700"><span className="text-base font-bold">SIMPLE TAG</span></div>
              <div className="flex mt-2 justify-center"><p className="text-3xl text-center font-extrabold">Work with best designers</p></div>
              <div className="grid grid-cols-2 gap-3 mt-10">
                <div className="flex justify-center items-center w-32 h-36 text-white bg-yellow-400 rounded-xl ring-2 ring-black"><svg className="size-10" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                <div className="flex justify-center items-center w-32 h-36 bg-teal-400 text-white rounded-xl ring-2 ring-black"><svg className="size-10" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                <div className="flex justify-center items-center w-32 h-36 bg-pink-400 text-white rounded-xl ring-2 ring-black"><svg className="size-10" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                <div className="flex justify-center items-center w-32 h-36 bg-[#FF6347] text-white rounded-xl ring-2 ring-black"><svg className="size-10" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
              </div>
              <div className="mt-10 font-bold text-xl h-14 justify-center items-center flex bg-blue-700 text-white rounded-lg">
                Let's get it done
              </div>
            </div>
          </div>
          <div className="bg-yellow-500 w-80">
            <div className="m-5 mt-12">
              <div className="flex relative items-center justify-center">
                <div className="size-10 rounded-full absolute start-0 bg-white flex justify-center items-center border-2 border-black shadow-[0px_1px_0px_0px_rgba(0,0,0,255)]">
                  <svg className="size-6" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" fill-rule="evenodd"></path>
                  </svg>
                </div><div className="text-2xl font-bold">Friends</div></div>
              <div className="mt-10 h-10 shadow-[0px_4px_0px_1px_rgba(0,0,0,255)] justify-center items-center flex  bg-white rounded-lg ring-2 ring-black">

                <input className="w-full placeholder-black ml-3 " placeholder="Search with love ..."></input>
                <svg className="size-6 mr-3" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" fill-rule="evenodd"></path>
                </svg></div>
              <div className="flex bg-white h-16 mt-8 ring-2 items-center ring-black rounded-lg">
                <div className="ml-3 mr-2 size-10 rounded-full ring-2 flex items-center justify-center ring-black"><svg className="size-8" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                <div className="grid row-span-2">
                  <span className="font-bold text-xl">Bill Rizer</span>
                  <span className="text-gray-700">Planet Designer</span>
                </div>
                <button className="bg-yellow-500 w-16 h-8 shadow-[0px_2px_0px_1px_rgba(0,0,0,255)] font-bold text-sm rounded-lg ring-2 ring-black ml-auto mr-3">invite</button>
              </div>
              <div className="flex bg-white h-16 mt-6 ring-2 items-center ring-black rounded-lg">
                <div className="ml-3 mr-2 size-10 rounded-full ring-2 flex items-center justify-center ring-black"><svg className="size-8" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                <div className="grid row-span-2">
                  <span className="font-bold text-xl">Genbei Yagy</span>
                  <span className="text-gray-700">Planet Designer</span>
                </div>
                <button className="bg-yellow-500 w-16 h-8 shadow-[0px_2px_0px_1px_rgba(0,0,0,255)] font-bold text-sm rounded-lg ring-2 ring-black ml-auto mr-3">invite</button>
              </div>
              <div className="flex bg-white h-16 mt-6 ring-2 items-center ring-black rounded-lg">
                <div className="ml-3 mr-2 size-10 rounded-full ring-2 flex items-center justify-center ring-black"><svg className="size-8" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                <div className="grid row-span-2">
                  <span className="font-bold text-xl">Lancy Neo</span>
                  <span className="text-gray-700">Rogue Corp</span>
                </div>
                <button className="bg-black w-16 h-8 text-white shadow-[0px_2px_0px_1px_rgba(0,0,0,255)] font-bold text-sm rounded-lg ring-2 ring-black ml-auto mr-3">Invited</button>
              </div>
              <div className="flex bg-white h-16 mt-6 ring-2 items-center ring-black rounded-lg">
                <div className="ml-3 mr-2 size-10 rounded-full ring-2 flex items-center justify-center ring-black"><svg className="size-8" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                <div className="grid row-span-2">
                  <span className="font-bold text-xl">Bill Rizer</span>
                  <span className="text-gray-700">Hard Cops</span>
                </div>
                <button className="bg-yellow-500 w-16 h-8 shadow-[0px_2px_0px_1px_rgba(0,0,0,255)] font-bold text-sm rounded-lg ring-2 ring-black ml-auto mr-3">invite</button>
              </div>
              <div className="flex bg-white h-16 mt-6 ring-2 items-center ring-black rounded-lg">
                <div className="ml-3 mr-2 size-10 rounded-full ring-2 flex items-center justify-center ring-black"><svg className="size-8" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></div>
                <div className="grid row-span-2">
                  <span className="font-bold text-xl">Konami</span>
                  <span className="text-gray-700">Xenon Creater</span>
                </div>
                <button className="bg-yellow-500 w-16 h-8 shadow-[0px_2px_0px_1px_rgba(0,0,0,255)] font-bold text-sm rounded-lg ring-2 ring-black ml-auto mr-3">invite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}