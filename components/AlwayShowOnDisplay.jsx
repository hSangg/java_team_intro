import { targetContext } from "@/pages"
import { useContext, useEffect, useRef } from "react"
import { navigate_data } from "../utils/data"

const AlwayShowOnDisplay = ({ refTarget }) => {
	const targets = useContext(targetContext)
	const containerRef = targets.containerRef
	const boxRef = targets.navigaRef

	const isClicked = useRef(false)

	const coords = useRef({
		startX: 0,
		startY: 0,
		lastX: 0,
		lastY: 0,
	})

	useEffect(() => {
		if (!boxRef.current || !containerRef.current) return

		const box = boxRef.current
		const container = containerRef.current

		const onMouseDown = (e) => {
			isClicked.current = true
			coords.current.startX = e.clientX
			coords.current.startY = e.clientY
		}

		const onMouseUp = (e) => {
			isClicked.current = false
			coords.current.lastX = box.offsetLeft
			coords.current.lastY = box.offsetTop
		}

		const onMouseMove = (e) => {
			if (!isClicked.current) return

			const nextX =
				e.clientX -
				coords.current.startX +
				coords.current.lastX
			const nextY =
				e.clientY -
				coords.current.startY +
				coords.current.lastY

			box.style.top = `${nextY}px`
			box.style.left = `${nextX}px`
		}

		box.addEventListener("mousedown", onMouseDown)
		box.addEventListener("mouseup", onMouseUp)
		container.addEventListener("mousemove", onMouseMove)
		container.addEventListener("mouseleave", onMouseUp)

		const cleanup = () => {
			box.removeEventListener("mousedown", onMouseDown)
			box.removeEventListener("mouseup", onMouseUp)
			container.removeEventListener(
				"mousemove",
				onMouseMove
			)
			container.removeEventListener("mouseleave", onMouseUp)
		}

		return cleanup
	}, [])

	const handleClick = (x) => {
		targets[x].current.scrollIntoView({
			behavior: "smooth",
		})
	}

	return (
		<>
			<h1 className='fixed opacity-90 z-10 op top-1 left-1/2 translate-x-[-50%] font-bold'>
				XÂY DỰNG HỆ THỐNG QUẢN LÝ CỬA HÀNG THỨC ĂN NHANH
			</h1>
			<div
				ref={refTarget}
				className='fixed z-[20] left-10 backrop-blur-lg border bg-gradient-to-b from-slate-500/50 rounded-md backdrop-blur-md backdrop-brightness-150 px-5 py-1 bg-white/10'
			>
				{navigate_data.map((x, i) => (
					<h1
						className='ml-2 my-1 cursor-pointer'
						onClick={() => handleClick(x.nameRef)}
					>
						{x.name}
					</h1>
				))}
			</div>
			<div className='fixed h-[60px] bg-gradient-to-b from-indigo-500/60 top-0 left-0 right-0'></div>
		</>
	)
}

export default AlwayShowOnDisplay
