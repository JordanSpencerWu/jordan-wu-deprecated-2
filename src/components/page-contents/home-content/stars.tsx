import React, { useRef, useMemo, ReactElement, RefObject } from "react"
import { useFrame } from "react-three-fiber"
import { Object3D, Color } from "three"

type StarsProps = {
  count: number
}

function Stars(props: StarsProps): ReactElement {
  const { count } = props
  const mesh = useRef()

  const dummy = useMemo(() => new Object3D(), [])
  const starss = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const mx = random(-180, 180)
      const my = random(-65, 65)
      const mz = random(-45, -250)

      temp.push({ mx, my, mz })
    }
    return temp
  }, [count])

  useFrame(state => {
    starss.forEach((stars, i) => {
      let { mx, my, mz } = stars

      stars.mx += changePosition(mx)
      stars.my += changePosition(my)
      stars.mz += changePosition(mz)

      dummy.position.set(stars.mx, stars.my, stars.mz)
      dummy.scale.set(1, 1, 1)
      dummy.rotation.set(Math.random(), Math.random(), Math.random())
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })
  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry attach="geometry" args={[0.1, 0]} />
        <meshPhongMaterial attach="material" color={new Color("white")} />
      </instancedMesh>
    </>
  )
}

function random(min, max) {
  return Math.random() * (max - min) + min
}

function changePosition(position) {
  const random = Math.round(Math.random())
  const factor = 1 / 100000

  return random ? position * factor : position * -factor
}

export default Stars
