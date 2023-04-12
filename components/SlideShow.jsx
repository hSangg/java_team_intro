// components/Slideshow.js
import React, { useEffect, useState } from "react"
import { images } from "../utils/data"
import { motion } from "framer-motion"
import { zoomAnimation } from "../utils/farmer_motion"
const Slideshow = () => {
	const [current, setCurrent] = useState(0)

	const length = images.length
	const array_list_number = []
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prevCurrent) =>
				prevCurrent === length - 1 ? 0 : prevCurrent + 1
			)
		}, 3000)

		return () => {
			clearInterval(interval)
		}
	}, [length])
	for (let index = 0; index < images.length; index++) {
		array_list_number.push(index + 1)
	}

	if (!Array.isArray(images) || length <= 0) {
		return null
	}

	return (
		<motion.div
			variants={zoomAnimation}
			className='flex items-center w-[550px]'
		>
			<div className='flex-grow overflow-hidden'>
				<div
					className='flex transition-transform duration-500 ease-in-out'
					style={{
						transform: `translateX(-${current * 100}%)`,
					}}
				>
					{images.map((image, index) => (
						<div key={index} className='flex-none w-full'>
							<img
								src={image}
								alt={`Slide ${index}`}
								className='object-cover w-full h-full'
							/>
						</div>
					))}
				</div>
				<div className='flex justify-evenly mt-2 font-bold'>
					{array_list_number.map((x, i) => (
						<span
							className='block cursor-pointer px-3 py-1 bg-slate-200/25 rounded-full'
							key={i}
							onClick={() => setCurrent(i)}
						>
							{x}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	)
}

export default Slideshow
