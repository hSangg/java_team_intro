import { member_dataset } from "../utils/data"
import { motion } from "framer-motion"
import {
	opacityAnimate,
	zoomAnimation,
} from "../utils/farmer_motion"

const TeamTable = ({ refTarget }) => {
	const { headers, data } = member_dataset
	return (
		<motion.div
			ref={refTarget}
			className='w-full max-w-screen-md mx-auto pt-[250px]'
		>
			<motion.div
				initial={{
					opacity: 0,
					scale: 0,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				className='text-3xl font-bold mb-4 text-gray-100 flex items-center gap-5'
			>
				<h2>Danh Sách Nhóm</h2>
				<figure className='h-[50px] inline-block bg-blue-500/40 rounded-md'>
					<img src='/images/contacts.png' />
				</figure>
			</motion.div>
			<motion.div className='overflow-x-hidden'>
				<motion.table className='table-auto  w-full  shadow-lg bg-transparent'>
					<motion.thead className=''>
						<motion.tr
							initial={"offscreen"}
							whileInView={"onscreen"}
							viewport={{ once: false, amount: 1 }}
							transition={{ staggerChildren: 0.5 }}
							className='text-left  text-gray-100 font-bold'
						>
							{headers.map((header, index) => (
								<motion.th
									key={index}
									variants={zoomAnimation}
									className='border-b-4 border-purple-500/30 p-4 '
								>
									{header}
								</motion.th>
							))}
						</motion.tr>
					</motion.thead>
					<motion.tbody
						initial={"offscreen"}
						whileInView={"onscreen"}
						viewport={{ once: false, amount: 1 }}
						transition={{ staggerChildren: 0.5 }}
					>
						{data.map((member, index) => (
							<motion.tr
								variants={opacityAnimate}
								key={index}
								className={`bg-motion.transparent ${
									index % 2 == 0
										? " bg-gradient-to-b from-slate-600/60"
										: ""
								} hover:bg-blue-500 transition-colors duration-400 ease-in-out border-b border-blue-500`}
							>
								<motion.td className=' p-4 font-medium text-gray-100'>
									{member.mssv}
								</motion.td>
								<motion.td className=' p-4 font-medium text-gray-100'>
									{member.name}
								</motion.td>
								<motion.td className=' p-4 text-gray-300'>
									{member.introduction}
								</motion.td>
							</motion.tr>
						))}
					</motion.tbody>
				</motion.table>
			</motion.div>
		</motion.div>
	)
}

export default TeamTable
