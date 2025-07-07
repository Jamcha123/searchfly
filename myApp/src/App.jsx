import { useState, useEffect, useRef } from 'react'
import './App.css'
import axios from 'axios'
import {motion} from 'framer-motion'
import $ from 'jquery'
import * as THREE from 'three'

function AddNavbar1(){
  return(
    <nav className="relative w-[35%] h-[100vh] overflow-y-scroll m-auto p-[0] z-[300] flex flex-col align-middle justify-center text-center bg-gray-200 ">
      <ul className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
        <div className="relative w-[100%] h-[10%] m-auto p-[0] bg-transparent flex flex-col align-middle text-center justify-center ">
          <h1 className="text-2xl text-black">Searched Websites</h1>
        </div>
        <div id="search_links" className="relative w-[100%] h-[90%] m-auto p-[0] bg-transparent flex flex-col align-middle text-center justify-center ">
        </div>
      </ul>
    </nav>
  )
}
export default function App(){
  useEffect(() => {
    let summary = "https://summary-tu6dy325kq-uc.a.run.app"
    let searching = "https://search-tu6dy325kq-uc.a.run.app"

    const forms = document.getElementById("form")
    const search = document.getElementById("search")
    const sites = document.getElementById("search_links")
    const text = document.getElementById("text")

    forms.addEventListener("submit", async (e) => {
      e.preventDefault()
      $("#text").empty()
      $("#search_links").empty()

      let boxes = document.createElement("div")
      boxes.classList.add("boxes")

      let loading = document.createElement("h1")
      loading.innerText = "Loading, the summary takes time"
      loading.classList.add("load")
      boxes.appendChild(loading)

      let box = document.createElement("div")
      box.classList.add("box")

      Array(3).fill().forEach((e) => {
        let dots = document.createElement("div");
        dots.classList.add("dots")

        box.appendChild(dots)
      })
      boxes.appendChild(box)
      text.appendChild(boxes)

      const spaces = search.value.split(" ")
      let ans = ""
      for(let i = 0; i != spaces.length; i++){
        ans += spaces[i] + "-"
      }
      ans = ans.slice(0, ans.length-1)

      summary += "?search=" + ans
      searching += "?query=" + ans

      const web1 = await axios.get(summary)
      const web2 = await axios.get(searching)

      const titles = web2["data"]["title"]
      const links = web2["data"]["links"]

      $("#text").empty()
      for(let i = 0; i != titles.length; i++){
        let x = document.createElement("div"); 
        x.classList.add("sites")

        let y = document.createElement("a")
        y.classList.add("links")
        y.href = links[i]
        y.innerText = titles[i]
        x.appendChild(y)

        sites.appendChild(x)
      }
      let textbox = document.createElement("div")
      textbox.classList.add("textbox")

      let z = document.createElement("p")
      z.innerText = web1["data"]
      z.classList.add("data")
      textbox.appendChild(z)

      text.appendChild(textbox)
      search.value = ""
    })
    try{
      (adsbygoogle = window.adsbygoogle || []).push({});
    }catch(e){
      console.log(e)
    }
  })
  return(
    <div className="relative w-[100%] h-[100vh] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
      <AddNavbar1></AddNavbar1>
      <div className="relative w-[65%] h-[100vh] m-auto mt-[2%] p-[0] z-[100] flex flex-col align-middle justify-center ">
        <div id="text" className="relative w-[100%] overflow-y-scroll h-[50%] m-auto p-[0] text-center z-[300] ">

        </div>
        <div className="relative w-[100%] h-[25%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
          <form action="" method="get" id="form" className="relative z-[2] w-[75%] h-[45%] m-auto p-[0] flex flex-row align-middle justify-center text-center bg-white border-black border-[2px] ">
            <div className="relative w-[100%] h-[99%] z-[2] m-auto p-[0] flex flex-row align-middle justify-center text-center bg-transparent rounded-none ">
              <input type="text" required placeholder="enter a search query " id="search" className="relative w-[75%] h-[100%] m-auto p-[0] bg-transparent text-center text-2xl text-black "  />
              <div className="relative w-[25%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle text-center justify-center border-black border-[2px] ">
                <motion.input initial={{scale: 1}} whileHover={{scale: 1.12}} whileTap={{scale: 0.9}} transition={{type: "spring", duration: 1}} type="submit" className="relative w-[100%] h-[100%] m-auto p-[0] bg-gray-100 rounded-none cursor-pointer z-[400]  " />
              </div>
            </div>
          </form>
          <div className="relative W-[100%] h-[45%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
            <ins className="adsbygoogle"
                  style={{display: "inline-block", width: 720 + "px", height: 100 + "px"}}
                  data-ad-client="ca-pub-7278175914211886"
                  data-ad-slot="9997163496">
              </ins>
          </div>
        </div>
      </div>
      <div className="fixed w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto p-[0] hidden flex-row align-middle justify-center text-center z-[-1] ">
        <div className="w-[35%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center relative ">

        </div>
        <div className="w-[65%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center relative ">
          <div className="w-[100%] h-[75%] relative m-auto p-[0] flex flex-col align-middle justify-center text-center  ">

          </div>
          <div className="w-[100%] h-[25%] relative m-auto p-[0] flex flex-col align-middle justify-center text-center  ">
            <div className="relative w-[100%] h-[45%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">

            </div>
            <div className="relative w-[100%] h-[45%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}