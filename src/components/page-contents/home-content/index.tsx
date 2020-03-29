import React, { ReactElement, memo, useEffect, useRef } from "react"
import * as THREE from "three"

import "./style/index.less"

type HomeContentProps = {}

function HomeContent(props: HomeContentProps): ReactElement {
  let container, camera, renderer, scene, mesh

  container = useRef(null)

  function init() {
    const {
      width: clientWidth,
      height: clientHeight,
    } = container.current.getBoundingClientRect()

    scene = new THREE.Scene()
    scene.background = new THREE.Color("cyan")

    const fov = 35
    const aspect = clientWidth / clientHeight
    const near = 0.1
    const far = 100

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 10)

    const geometry = new THREE.BoxBufferGeometry(2, 2, 2)

    const material = new THREE.MeshStandardMaterial({ color: 0x800080 })

    mesh = new THREE.Mesh(geometry, material)

    scene.add(mesh)

    const light = new THREE.DirectionalLight(0xffffff, 5.0)

    light.position.set(10, 10, 10)

    scene.add(light)

    renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(clientWidth, clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    container.current.appendChild(renderer.domElement)
  }

  function animate() {
    requestAnimationFrame(animate)

    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    mesh.rotation.z += 0.01

    renderer.render(scene, camera)
  }
  useEffect(() => {
    init()
    animate()
  }, [])

  return <div ref={container} className="home-content-container"></div>
}

export default memo(HomeContent)
