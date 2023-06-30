import React from "react"

const UseCaseList = () => {
	const useCases = [
		"Đăng nhập cho nhân viên",
		"Quản lý nguyên liệu",
		"Đơn đặt hàng",
		"Thanh toán hóa đơn mua hàng",
		"Khách hàng nhận đồ ăn",
		"Xử lý đơn đặt đồ ăn",
		"Thanh toán hóa đơn",
		"Tính toán tổng tiền thu",
		"Thống kê doanh thu",
		"Quản lý nhân viên",
		"Quản lý voucher",
		"Quản lý thực đơn",
		"Quản lý nhà cung cấp nguyên liệu",
		"Quản lý nguyên liệu",
		"Đổi mật khẩu nhân viên",
	]

	return (
		<div className='bg-gray-200 p-4  text-black rounded-md p-10 mb-10'>
			<h1 className='text-2xl font-bold mb-4'>
				Danh sách các Use-Case
			</h1>
			<ul className='list-decimal list-inside'>
				{useCases.map((useCase, index) => (
					<li className='mb-2 italic' key={index}>
						{useCase}
					</li>
				))}
			</ul>
		</div>
	)
}

export default UseCaseList
