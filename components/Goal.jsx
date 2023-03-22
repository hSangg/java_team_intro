import { motion } from "framer-motion"
import { features } from "../utils/data"
import {
	textAnimate,
	zoomAnimation,
} from "../utils/farmer_motion"

const Goal = () => {
	return (
		<motion.div
			initial={"offscreen"}
			whileInView={"onscreen"}
			viewport={{ once: false, amount: 1 }}
			transition={{ staggerChildren: 0.5 }}
			className='flex justify-center mt-20 items-center gap-5'
		>
			<motion.div variants={textAnimate}>
				<motion.h1
					variants={textAnimate}
					className='font-bold inline-block text-[30px] underline decoration-indigo-500 '
				>
					MỤC TIÊU{" "}
				</motion.h1>
				<motion.p
					variants={textAnimate}
					className='text-xl w-[700px] mt-2 mb-[30px]'
				>
					Phát triển một{" "}
					<a class='underline decoration-sky-500'>
						hệ thống hiệu quả
					</a>{" "}
					và tiện dụng để cải thiện và tối ưu hoá quy trình
					đặt hàng và quản lý cửa hàng dựa trên mô hình tự
					phục vụ.
				</motion.p>

				<motion.h1
					variants={textAnimate}
					className='font-bold inline-block text-[30px] underline decoration-indigo-500 '
				>
					TÍNH NĂNG{" "}
				</motion.h1>

				<motion.ul
					initial={"offscreen"}
					whileInView={"onscreen"}
					viewport={{ once: false, amount: 1 }}
					transition={{ staggerChildren: 0.5 }}
					className='mt-2 bg-blue-800 list-disc'
				>
					{features.map((x) => (
						<motion.li
							className='text-l mb-1 p-1 font-bold'
							variants={textAnimate}
						>
							{x}
						</motion.li>
					))}
				</motion.ul>
			</motion.div>

			<motion.figure
				variants={zoomAnimation}
				className='w-[500px] h-[500px]'
			>
				<motion.img
					src={"/images/machine.webp"}
					className='object-cover'
				/>
			</motion.figure>
		</motion.div>
	)
}

export default Goal
