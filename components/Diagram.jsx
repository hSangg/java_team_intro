import { motion } from "framer-motion"
import {
	opacityAnimate,
	textAnimate,
} from "../utils/farmer_motion"

const Diagram = ({ name, nameImage }) => {
	return (
		<>
			<motion.p
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={textAnimate}
				className='mt-2'
			>
				{name}
			</motion.p>
			<motion.figure
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={opacityAnimate}
				className='scale-[0.9]'
			>
				<motion.img
					className='bg-white rounded-[20px]'
					src={`/images/${nameImage}.png`}
				/>
			</motion.figure>
		</>
	)
}

export default Diagram
