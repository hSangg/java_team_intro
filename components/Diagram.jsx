import { motion } from "framer-motion"
import { opacityAnimate } from "../utils/farmer_motion"

const Diagram = ({ name, nameImage }) => {
	return (
		<>
			<motion.p className='mt-2'>{name}</motion.p>
			<motion.figure
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={opacityAnimate}
				className='scale-[0.9]'
			>
				<motion.img
					className='bg-white rounded-[50px]'
					src={`/images/${nameImage}.png`}
				/>
			</motion.figure>
		</>
	)
}

export default Diagram
