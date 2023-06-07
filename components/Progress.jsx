import { motion } from "framer-motion"
import AssumptionLogic from "./AssumptionLogic"

const Progress = ({ refTarget }) => {
	return (
		<div ref={refTarget} className='px-[250px] pt-20'>
			<motion.div className='flex flex-col'>
				<motion.h1 className='font-bold text-3xl'>
					Tuần 1, 2
				</motion.h1>
				<motion.div className='text-[20px] mt-5'>
					1.{" "}
					<motion.span className='underline decoration-sky-500'>
						Tìm hiểu mô hình
					</motion.span>{" "}
					<br></br>
					<motion.p className='indent-10 my-3 text-[18px]'>
						Ngày nay, chúng ta dễ dàng tìm thấy những đồ ăn
						nhanh, đồ uống đóng chai trong các siêu thị, nhà
						hàng hay chợ truyền thống lẫn quán ăn vỉa hè.
						Mỗi buổi sáng, người đi đường chỉ cần ghé qua
						quán hàng rong là có ngay một chiếc bánh mỳ,
						bánh bao hay nắm xôi cho bữa sáng nhanh gọn lẹ.
						Hoặc với giới văn phòng, bữa trưa vô cùng đơn
						giản, chỉ cần mở app đặt đồ ăn nhanh như
						Grabfood, Now,… ở điện thoại hoặc gọi trực tiếp
						tới quán ăn ship đồ. Có thể thấy, tổng quan thị
						trường thức ăn nhanh ở Việt Nam đang vô cùng sôi
						động, trở thành xu thế trong nhịp sống bận rộn
						hiện đại. Ngoài ra, giới trẻ còn yêu thích những
						thương hiệu ngoại như McDonald’s, KFC, Pizza
						Hut, Starbucks, Burger King,…
					</motion.p>
					2.{" "}
					<motion.span className='underline decoration-sky-500'>
						Thiết kế CSDL
					</motion.span>{" "}
					<motion.p className='mt-2'>
						USECASE DIAGRAM:
					</motion.p>
					<motion.figure className='scale-[0.9]'>
						<motion.img
							className='bg-white rounded-[50px]'
							src='/images/usecase.png'
						/>
					</motion.figure>
					<motion.p className='mt-2'>
						CLASS DIAGRAM:
					</motion.p>
					<motion.figure className='scale-[0.9]'>
						<motion.img
							className='bg-white rounded-[50px]'
							src='/images/classdia.png'
						/>
					</motion.figure>
					<br></br>{" "}
					<motion.div>
						<motion.h1 className='underline decoration-sky-500'>
							3. Hệ thống phân cấp người dùng
						</motion.h1>
						<motion.ul>
							<motion.li>
								+ Quản Lý:{" "}
								<motion.i>
									Quản lý nhân viên, quản lý thực đơn, quản
									lý voucher, quản lý nhập nguyên liệu
								</motion.i>
							</motion.li>

							<motion.li>
								+ Đầu bếp:{" "}
								<motion.i>
									Quản lý đơn hàng, quản lý nguyên liệu,
									quản lý
								</motion.i>
							</motion.li>

							<motion.li>
								+ Thu ngân:{" "}
								<motion.i>Quản lý hóa đơn</motion.i>
							</motion.li>
						</motion.ul>
						<motion.figure className='scale-[0.9]'>
							<motion.img
								className='bg-white rounded-[50px]'
								src='/images/management.png'
							/>
						</motion.figure>
					</motion.div>{" "}
					<br></br>
					<motion.div className='underline decoration-sky-500'></motion.div>
					<AssumptionLogic />
					<br></br>
				</motion.div>
				<br></br>
			</motion.div>
		</div>
	)
}

export default Progress
