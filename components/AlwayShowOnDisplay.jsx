import { targetContext } from "@/pages"
import { useContext, useRef } from "react"
import { navigate_data } from "../utils/data"
import { motion } from "framer-motion"

const AlwayShowOnDisplay = ({ refTarget }) => {
	const targets = useContext(targetContext)

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
			<motion.div
				ref={refTarget}
				className='fixed z-[20] left-0 font-bold bg-[#060c18] px-5 py-1 h-screen w-[200px]'
			>
				{navigate_data.map((x, i) => (
					<motion.h1
						whileHover={{
							color: "#f987c4",
							transition: {
								type: "spring",
								bounce: 0.4,
								duration: 2,
							},
						}}
						className='ml-2 my-2 cursor-pointer'
						onClick={() => handleClick(x.nameRef)}
					>
						<p>{x.name}</p>
						<p className='w-full h-[1px] opacity-50 bg-white'></p>
					</motion.h1>
				))}
			</motion.div>
			<div className='fixed h-[60px] bg-gradient-to-b from-indigo-500/60 top-0 left-0 right-0'></div>
		</>
	)
}

export default AlwayShowOnDisplay
