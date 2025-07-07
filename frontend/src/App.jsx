import { useState, useEffect, useRef } from 'react'
import './App.css'
import $ from 'jquery'
import searching from './assets/search.png'
import {motion} from 'framer-motion'
import * as THREE from 'three'

function AddNavbar(){
  const [active, setActive] = useState(false)
  return(
    <nav className="fixed top-[0%] z-[100] w-[100%] min-h-[6em] max-h-[20em] m-auto p-[0] flex flex-col md:flex-row align-middle justify-center text-center ">
      <ul className="relative w-[100%] h-[4em] m-auto p-[0] md:hidden flex flex-row align-middle justify-center text-center bg-slate-800   ">
        <div className="relative w-[25%] m-auto p-[0] flex flex-col align-middle justify-center text-center  ">
          <div className="relative w-[100%] h-[50%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
            <span style={{scale: 1.5, fontSize: 30 + "px"}} onClick={active? () => setActive(false) : () => setActive(true)} className="text-white text-9xl cursor-pointer material-symbols-outlined">
                menu
            </span>
          </div>
        </div>
        <div className="relative w-[75%] m-auto p-[0] flex flex-row align-middle justify-center text-center  ">
          <div className="relative w-[50%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center  ">
              <motion.button onClick={() => {window.location.href = "/dash.html"}} initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="relative w-[8em] h-[2em] m-auto p-[0] bg-green-800 underline underline-offset-4 text-center text-xl text-white cursor-pointer rounded-none " >To Dashboard</motion.button>
          </div>
        </div>
      </ul>
      <motion.ul initial={{scale: 0}} animate={{scale: active? 1 : 0}} className="relative w-[100%] h-[16em] bg-slate-800 m-auto p-[0] md:hidden flex flex-col align-middle justify-center text-center ">
        <div className="relative w-[100%] h-[25%] m-auto mt-[2%] ml-[2%] p-[0] flex flex-row align-middle justify-start text-start  ">
          <li className="text-white text-2xl underline underline-offset-2 "><a href="#homepage">Homepage</a></li>
        </div>
        <div className="relative w-[100%] h-[25%] m-auto mt-[2%] ml-[2%] p-[0] flex flex-row align-middle justify-start text-start  ">
          <li className="text-white text-2xl underline underline-offset-2 "><a href="#about">About Searchfly</a></li>
        </div>
        <div className="relative w-[100%] h-[25%] m-auto mt-[2%] ml-[2%] p-[0] flex flex-row align-middle justify-start text-start  ">
          <li className="text-white text-2xl underline underline-offset-2 "><a href="#contact">Contact Info</a></li>
        </div>
        <div className="relative w-[100%] h-[25%] m-auto mt-[2%] ml-[2%] p-[0] flex flex-row align-middle justify-start text-start  ">
          <li className="text-white text-2xl underline underline-offset-2 "><a href="#docs">API docs</a></li>
        </div>
      </motion.ul>
      <ul className="relative w-[75%] h-[100%] m-auto p-[0] hidden md:flex flex-row align-middle justify-start text-start ">
        <div className="relative w-[25%] h-[100%] m-0 p-[0] flex flex-col align-middle justify-center text-center  ">
          <li className="text-xl text-white underline underline-offset-2 "><a href="#homepage">Homepage</a></li>
        </div>
        <div className="relative w-[25%] h-[100%] m-0 p-[0] flex flex-col align-middle justify-center text-center  ">
          <li className="text-xl text-white underline underline-offset-2 "><a href="#about">About Searchfly</a></li>
        </div>
        <div className="relative w-[25%] h-[100%] m-0 p-[0] flex flex-col align-middle justify-center text-center  ">
          <li className="text-xl text-white underline underline-offset-2 "><a href="#contact">Contact Info</a></li>
        </div>
        <div className="relative w-[25%] h-[100%] m-0 p-[0] flex flex-col align-middle justify-center text-center  ">
          <li className="text-xl text-white underline underline-offset-2 "><a href="#docs">API docs</a></li>
        </div>
      </ul>
      <ul className="relative w-[25%] h-[100%] m-auto p-[0] hidden md:flex flex-row align-middle justify-evenly text-center ">
        <div className="relative w-[100%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
          <motion.button onClick={() => {window.location.href = "/dash.html"}} initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="relative w-[8em] h-[3em] m-auto p-[0] bg-green-800 underline underline-offset-4 text-center text-xl text-white cursor-pointer rounded-none " >To Dashboard</motion.button>
        </div>
      </ul>
    </nav>
  )
}
function AddTHREE(shapes){
  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000); 

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000); 
    camera.position.set(0, 0, 30)

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
      antialias: true, 
      depth: true
    })
  
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)

    function AddBox(x, y, z){
      const boxgeometry = new THREE.BoxGeometry(10, 10, 10)
      const boxmaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, 
        side: THREE.DoubleSide, 
        wireframe: false
      })
      const boxes = new THREE.Mesh(boxgeometry, boxmaterial)
      boxes.position.set(x, y, z)
      scene.add(boxes)

      renderer.render(scene, camera)
    }
    function AddTorus(x, y, z){
      const torusgeometry = new THREE.TorusGeometry(10, 3, 16)
      const torusmaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, 
        side: THREE.DoubleSide, 
        wireframe: false
      })
      const torus = new THREE.Mesh(torusgeometry, torusmaterial)
      torus.position.set(x, y, z)
      scene.add(torus)

      renderer.render(scene, camera)
    }
    function AddDod(x, y, z){
      const dodgeometry = new THREE.DodecahedronGeometry(10, 16)
      const dodmaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, 
        side: THREE.DoubleSide, 
        wireframe: false
      })
      const dods = new THREE.Mesh(dodgeometry, dodmaterial)
      dods.position.set(x, y, z)
      scene.add(dods)
    }
    function AddKnot(x, y, z){
      const knotgeometry = new THREE.TorusKnotGeometry(5, 3, 10, 6)
      const knotmaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, 
        side: THREE.DoubleSide, 
        wireframe: false
      })
      const knots = new THREE.Mesh(knotgeometry, knotmaterial)
      scene.add(knots)

    }
    function addDots(){
      const vertices = []
      for(let i = 0; i != 20000; i++){
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);

        vertices.push(x, y, z)
      }
      const dotgeometry = new THREE.BufferGeometry()
      dotgeometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))

      const dotmaterial = new THREE.PointsMaterial({
        color: 0xffffff, 
        size: 1, 
      })
      const dots = new THREE.Points(dotgeometry, dotmaterial)
      scene.add(dots)

      renderer.render(scene, camera)
    }
    if(shapes.box == "dots"){
      addDots()
    }
    function resize(){
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, camera)
    }

    function animate(){
      window.addEventListener("resize", resize)
      if(shapes.box == "dots"){
        camera.rotation.x += 0.0003
      }
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)
  })
  return(
    <canvas id="bg" className="fixed top-0 left-0 "></canvas>
  )
}
function AddGrid(){
  return(
    <div id="grids" className="relative w-[100%] h-[100vh] z-[1] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center overflow-x-hidden ">
      <div className="relative w-[200%] h-[100%] m-auto p-[0] flex flex-row align-middle justify-center text-center bg-slate-900 rotate-z-[-15deg] translate-y-[-75%] translate-x-[-10%] " ></div>
      <div className="relative w-[30em] h-[30em] m-auto p-[0] flex flex-row align-middle justify-center text-center bg-transparent ">

      </div>
    </div>
  )
}
function AddAd(){
  try{
    (adsbygoogle = window.adsbygoogle || []).push({});
  }catch(e){
    console.log(e)
  }
  return(
    <ins className="adsbygoogle"
     style={{display: "block", width: 100 + "%", height: 100 + "%"}}
     data-ad-client="ca-pub-7278175914211886"
     data-ad-slot="6283319194"></ins>
  )
}
export default function App(){
  useEffect(() => {
    const words = ["programming", "politics", "biology", "math", "engineering", "finance", "economics"]
    let index = 0; 
    
    const search = document.getElementById("search")
    setInterval(() => {
      if(index > words.length-1){
        index = 0; 
      }
      $("#search").empty()
      let x = document.createElement("h2")
      x.innerText = "search " + words[index]
      x.classList.add("search")
      search.appendChild(x)

      index += 1;
    }, 4000)
  })
  return(
    <div className="relative w-[100%] h-[400vh] m-auto p-[0] flex flex-col align-middle justify-center text-center bg-transparent overflow-x-hidden ">
      <AddNavbar></AddNavbar>
      <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} id="homepage" className="relative w-[100%] max-h-[200vh] h-[200vh] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
        <AddGrid></AddGrid>
        <AddTHREE box="dots"></AddTHREE>
        <div className="relative w-[100%] h-[100vh] z-[2] translate-y-[-100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
          <div className="relative w-[100%] h-[55%] m-auto p-[0] z-[2] bg-transparent flex flex-col align-middle justify-center ">
            <div className="relative w-[fit-content] h-[fit-content] m-auto mt-[8%] mb-[4%] p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
              <h1 className="text-6xl text-white ">Searchfly</h1>
            </div>
            <div className="relative w-[fit-content] h-[fit-content] m-auto mt-[4%] mb-0 p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
              <p className="text-5xl text-white">Google summaries on a fly</p>
            </div>
          </div>
          <div className="relative w-[100%] h-[45%] m-auto p-[0] z-[2] bg-transparent flex flex-col align-top justify-start text-start ">
            <div className="relative w-[30em] h-[4em] m-auto mb-0 mt-[10%] p-[0] flex flex-row align-middle justify-center text-center bg-white ">
              <div className="relative w-[75%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
                <div className="relative w-[100%] h-[50%] m-auto p-[0] flex flex-row align-middle justify-center text-center  " id="search">

                </div>
              </div>
              <div className="relative w-[25%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
                <div className="relative w-[100%] h-[50%] m-auto p-[0] flex flex-row align-middle justify-center text-center  ">
                  <motion.img initial={{scale: 2}} whileHover={{scale: 1.5}} whileTap={{scale: 2.5}} transition={{type: "spring", duration: 1}} onClick={() => {window.location.href = "/dash.html"}} src={searching} width={25 + "%"} height={100 + "%"} style={{opacity: 0.5, scale: 2, cursor: "pointer"}} alt="" />
                </div>
              </div>
            </div>
            <div className="relative w-[30em] h-[4em] m-auto mb-0 mt-[2%] p-[0] flex flex-row align-middle justify-center text-center bg-transparent">
              <AddAd></AddAd>
            </div>
          </div>
        </div>
      </motion.section>
      <section id="about" className="relative w-[100%] h-[100vh] z-[3] translate-y-[-100%] m-auto p-[0] flex flex-col align-middle justify-center text-center bg-slate-800 ">
        <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
          <div className="relative w-[100%] h-[50%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
            <div className="relative w-[100%] md:w-[80%] h-[10%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center md:justify-start md:text-start ">
              <h1 className="text-2xl text-white">About Searchfly</h1>
            </div>
            <div className="relative w-[100%] md:w-[80%] h-[90%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center md:justify-start md:text-start ">
              <p className="text-2xl text-white">
                Searchly is a Google search AI summarizer.<br></br>
                Enter any search and Searchly will summarize it.<br></br>

                Searchly uses Google search engine api and openai to search and summarize.<br></br>
                Github repo: <a href="https://github.com/Jamcha123/searchfly" className="text-violet-300 underline underline-offset-4">https://github.com/Jamcha123/searchfly</a> 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="docs" className="relative w-[100%] h-[100vh] m-auto translate-y-[-100%] p-[0] flex flex-col align-middle justify-center text-center bg-slate-800">
        <div className="relative w-[100%] h-[50%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
          <div className="relative w-[100%] h-[100%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center ">
            <div className="relative w-[100%] md:w-[60%] h-[10%] m-auto p-[0] bg-transparent flex flex-col align-middle justify-center text-center md:justify-start md:text-start  ">
              <h1 className="text-2xl text-white">API docs</h1>
            </div>
            <div className="relative w-[100%] md:w-[60%] h-[90%] m-auto p-[0] bg-transparent flex flex-col align-middle md:justify-start md:text-start justify-center text-center ">
              <p className="text-xl text-white">Searchfly APIs list</p>
              <div className="relative w-[100%] h-[5em] m-auto p-[0] flex flex-col align-middle md:justify-start md:text-start justify-center text-centert ">
                <a href="https://summary-tu6dy325kq-uc.a.run.app?search=programming" className="text-violet-400 underline text-xl underline-offset-2">https://summary-tu6dy325kq-uc.a.run.app?search=programming</a>
                <p className="text-xl text-white">search query (?search=programming) <br></br>The subject you want to search and summarize </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="relative w-[100%] h-[100vh] m-auto translate-y-[-100%] p-[0] flex flex-col align-middle justify-center text-center bg-slate-800 ">
        <div className="relative w-[100%] h-[75%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center ">
          <div className="relative w-[100%] h-[50%] m-auto p-[0] flex flex-col align-middle justify-center text-center ">
            <div className="relative w-[100%] md:w-[40%] h-[10%] m-auto p-[0] bg-transparent flex flex-col align-middle md:justify-start md:text-start justify-center text-center ">
              <h1 className="text-2xl text-white">Contact info</h1>
            </div>
            <div className="relative w-[100%] md:w-[40%] h-[90%] m-auto mt-[3%] p-[0] bg-transparent flex flex-col align-middle md:justify-start md:text-start justify-center text-centert ">
              <p className="text-2xl text-white">Email: <a className="text-violet-400 text-2xl underline underline-offset-4" href="mailto:jameschambers732@gmail.com">jameschambers732@gmail.com</a></p>
              <p className="text-2xl text-white">Github issues: <a className="text-violet-400 text-2xl underline underline-offset-4" href="https://github.com/Jamcha123/searchfly/issues/new">create a new github issue</a></p>
            </div>
          </div>
        </div>
        <div className="relative w-[100%] h-[25%] m-auto p-[0] bg-transparent flex flex-row align-middle justify-center text-center">

        </div>
      </section>
    </div>
  )
}