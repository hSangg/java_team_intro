import { motion } from "framer-motion"
import { features } from "../utils/data"
import {
	opacityAnimate,
	textAnimate,
} from "../utils/farmer_motion"
import Slideshow from "./SlideShow"

const Goal = ({ refTarget }) => {
	return (
		<div ref={refTarget}>
			<motion.div
				initial={"offscreen"}
				whileInView={"onscreen"}
				viewport={{ once: false, amount: 1 }}
				transition={{ staggerChildren: 0.5 }}
				className='flex  justify-center pt-[200px] items-center gap-5 h-full'
			>
				<motion.div variants={textAnimate}>
					<motion.div
						variants={textAnimate}
						className='flex'
					>
						<motion.h1 className='font-bold inline-block text-[30px] underline decoration-indigo-500 '>
							MỤC TIÊU
						</motion.h1>
						<figure className='bg-pink-700/40 ml-2 w-[40px] rounded-xl'>
							<img
								className='p-1'
								src='/images/target.png'
							/>
						</figure>
					</motion.div>

					<motion.p
						variants={textAnimate}
						className='text-xl w-[700px] mt-2 mb-[30px]'
					>
						Phát triển một{" "}
						<a className='underline decoration-sky-500 font-[700] italic'>
							hệ thống hiệu quả
						</a>{" "}
						và tiện dụng để cải thiện và tối ưu hoá quy
						trình đặt hàng và quản lý cửa hàng dựa trên mô
						hình tự phục vụ.
					</motion.p>

					<motion.div
						variants={textAnimate}
						className='flex'
					>
						<motion.h1 className='font-bold inline-block text-[30px] underline decoration-indigo-500 '>
							TÍNH NĂNG
						</motion.h1>
						<figure className='bg-yellow-700/40 ml-2 w-[40px] rounded-xl'>
							<img
								className='p-2'
								src='/images/pencil.png'
							/>
						</figure>
					</motion.div>

					<motion.ul
						initial={"offscreen"}
						whileInView={"onscreen"}
						viewport={{ once: false, amount: 1 }}
						transition={{ staggerChildren: 2 }}
						className='mt-2  list-disc p-2 rounded'
					>
						{features.map((x) => (
							<motion.li
								key={x}
								className='mb-1 p-1 text-[20px] border-b-[1px] border-indigo-500/60 backdrop-blur-xl backdrop-brightness-150'
								variants={opacityAnimate}
								whileHover={{
									zoom: 1.2,
								}}
							>
								{x}
							</motion.li>
						))}
					</motion.ul>
				</motion.div>

				<Slideshow />
			</motion.div>
		</div>
	)
}

export default Goal
