import { motion } from "framer-motion"

const AssumptionLogic = () => {
	return (
		<>
			<motion.h1 className='font-bold mb-3'>
				4. Xây dựng các thành phần giả định, các xử lý logic
			</motion.h1>
			<motion.h2 className='mb-1'>
				a. Xây dựng các thành phần giả định
			</motion.h2>
			<motion.ul className='list-disc text-[19px] leading-8'>
				<motion.li>
					Menu:{" "}
					<motion.span className='text-white/70'>
						Danh sách các món ăn và thức uống có sẵn trong
						cửa hàng.
					</motion.span>
				</motion.li>

				<motion.li>
					Kho hàng:
					<motion.span className='text-white/70'>
						Lưu trữ thông tin về số lượng và trạng thái của
						sản phẩm trong kho.
					</motion.span>
				</motion.li>

				<motion.li>
					Nhân viên:
					<motion.span className='text-white/70'>
						Thông tin về nhân viên làm việc trong cửa hàng.
					</motion.span>
				</motion.li>

				<motion.li>
					Khách hàng:
					<motion.span className='text-white/70'>
						Thông tin cá nhân và lịch sử mua hàng của khách
						hàng.
					</motion.span>
				</motion.li>

				<motion.li>
					Đơn hàng:
					<motion.span className='text-white/70'>
						Thông tin về nhân viên làm việc trong cửa hàng.
					</motion.span>
				</motion.li>

				<motion.li>
					Thanh toán:
					<motion.span className='text-white/70'>
						Xử lý thanh toán cho đơn hàng, bao gồm các
						phương thức thanh toán khác nhau như tiền mặt,
						thẻ ngân hàng, ví điện tử, v.v.
					</motion.span>
				</motion.li>

				<motion.li>
					Báo cáo và thống kê:
					<motion.span className='text-white/70'>
						Tổng hợp dữ liệu để tạo ra báo cáo và thống kê
						về doanh thu, sản phẩm bán chạy, v.v.
					</motion.span>
				</motion.li>
				<hr className='opacity-30 mt-5'></hr>
			</motion.ul>

			<motion.h2 className='mb-1'>b. Xử lý logic</motion.h2>
			<motion.ul className='list-disc text-[19px] text-white/60'>
				<motion.li className='mb-2'>
					<motion.h2 className='text-white/90'>
						Quản lý menu:
					</motion.h2>

					<motion.ul className='list-decimal pl-7'>
						<motion.li>
							Thêm, sửa, xóa sản phẩm từ menu.
						</motion.li>
						<motion.li>
							Cập nhật thông tin về giá cả, mô tả sản phẩm.
						</motion.li>
						<motion.li>
							Phân loại sản phẩm theo danh mục, loại hình.
						</motion.li>
					</motion.ul>
				</motion.li>

				<motion.li className='mb-2'>
					<motion.h2 className='text-white/90'>
						Quản lý kho hàng
					</motion.h2>

					<motion.ul className='list-decimal pl-7'>
						<motion.li>
							Cập nhật số lượng tồn kho sau mỗi giao dịch.
						</motion.li>
						<motion.li>
							Thống kê và báo cáo tồn kho, đảm bảo đủ số
							lượng sản phẩm để phục vụ khách hàng.
						</motion.li>
					</motion.ul>
				</motion.li>

				<motion.li className='mb-2'>
					<motion.h2 className='text-white/90'>
						Quản lý nhân viên:
					</motion.h2>

					<motion.ul className='list-decimal pl-7'>
						<motion.li>
							Thêm, sửa, xóa thông tin nhân viên.
						</motion.li>
						<motion.li>
							Phân quyền truy cập vào hệ thống theo vai trò
							của từng nhân viên.
						</motion.li>
					</motion.ul>
				</motion.li>

				<motion.li className='mb-2'>
					<motion.h2 className='text-white/90'>
						Quản lý khách hàng:
					</motion.h2>

					<motion.ul className='list-decimal pl-7'>
						<motion.li>
							Ghi nhận thông tin cá nhân của khách hàng.
						</motion.li>
						<motion.li>
							Theo dõi lịch sử mua hàng và ưu đãi đối với
							khách hàng thân thiết.
						</motion.li>
					</motion.ul>
				</motion.li>

				<motion.li className='mb-2'>
					<motion.h2 className='text-white/90'>
						Quản lý đơn hàng:
					</motion.h2>

					<motion.ul className='list-decimal pl-7'>
						<motion.li>
							Tạo mới đơn hàng khi khách hàng đặt mua sản
							phẩm.
						</motion.li>
						<motion.li>
							Cập nhật trạng thái của đơn hàng (đã xác nhận,
							đang giao hàng, đã hoàn thành, v.v.).
						</motion.li>

						<motion.li>
							Theo dõi và thông báo trạng thái đơn hàng cho
							khách hàng.
						</motion.li>
					</motion.ul>
				</motion.li>

				<motion.li className='mb-2'>
					<motion.h2 className='text-white/90'>
						Quản lý thanh toán:
					</motion.h2>

					<motion.ul className='list-decimal pl-7'>
						<motion.li>
							Xử lý các phương thức thanh toán khác nhau
							theo yêu cầu của khách hàng.
						</motion.li>
						<motion.li>
							Ghi nhận thông tin thanh toán và cập nhật
							trạng thái thanh toán cho đơn hàng tương ứng.
						</motion.li>
					</motion.ul>
				</motion.li>

				<motion.li className='mb-2'>
					<motion.h2 className='text-white/90'>
						Báo cáo và thống kê:
					</motion.h2>

					<motion.ul className='list-decimal pl-7'>
						<motion.li>
							Tổng hợp dữ liệu từ các thành phần khác nhau
							để tạo ra báo cáo và thống kê về doanh thu,
							sản phẩm bán chạy, lượng tồn kho, v.v.
						</motion.li>
						<motion.li>
							Phân tích dữ liệu để đưa ra các thông tin hữu
							ích về xu hướng tiêu thụ, ưu thích của khách
							hàng, hiệu suất bán hàng, v.v.
						</motion.li>

						<motion.li>
							Hiển thị các báo cáo và thống kê theo dạng
							biểu đồ, đồ thị để giúp người dùng dễ dàng
							nhìn thấy và hiểu được thông tin quan trọng.
						</motion.li>

						<motion.li>
							Cung cấp khả năng tìm kiếm, lọc dữ liệu để
							người dùng có thể truy xuất thông tin cụ thể
							một cách nhanh chóng và thuận tiện.
						</motion.li>

						<motion.li>
							Đảm bảo tính bảo mật và quyền riêng tư của dữ
							liệu, đặc biệt là thông tin cá nhân của khách
							hàng.
						</motion.li>
					</motion.ul>
				</motion.li>

				<hr className='opacity-30 mt-5'></hr>
			</motion.ul>
		</>
	)
}

export default AssumptionLogic
