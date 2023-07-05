import React from "react"

const OrganizationalChart = () => {
	return (
		<div className='bg-gray-200 p-[50px] mb-10 text-black rounded-sm'>
			<h1 className='text-2xl font-bold mt-5 mb-4'>
				Sơ đồ hiện trạng tổ chức
			</h1>
			<p className='mb-4'>
				Sơ đồ hiện trạng tổ chức là một biểu đồ mô tả cách
				các thành viên trong tổ chức được sắp xếp và quan hệ
				với nhau. Trong trường hợp này, sơ đồ hiện trạng tổ
				chức mô tả cấu trúc tổ chức của một cửa hàng thức ăn
				nhanh, trong đó chủ cửa hàng đứng đầu, tiếp theo là
				quản lý, sau đó là thu ngân và đầu bếp.
			</p>
			<h2 className='font-bold mt-5'>Chủ cửa hàng</h2>
			<p>
				Chủ cửa hàng là người sở hữu và điều hành cửa hàng
				thức ăn nhanh. Chủ cửa hàng có trách nhiệm quyết
				định chiến lược kinh doanh, quản lý tài chính và lựa
				chọn chính sách của cửa hàng.
			</p>
			<h2 className='font-bold mt-5'>Quản lý</h2>
			<p>
				Quản lý là người được ủy quyền và có trách nhiệm
				quản lý các hoạt động hàng ngày của cửa hàng. Quản
				lý đảm bảo các quy trình hoạt động suôn sẻ, quản lý
				nhân viên, quản lý kho hàng, đảm bảo chất lượng sản
				phẩm và dịch vụ.
			</p>
			<h2 className='font-bold mt-5'>Thu ngân</h2>
			<p>
				Thu ngân là người chịu trách nhiệm thu tiền từ khách
				hàng và xử lý giao dịch thanh toán. Thu ngân có vai
				trò quan trọng trong việc đảm bảo tính chính xác và
				hiệu quả của quá trình thanh toán, đồng thời phục vụ
				khách hàng một cách chuyên nghiệp và thân thiện.
			</p>
			<h2 className='font-bold mt-5'>Đầu bếp</h2>
			<p>
				Đầu bếp là người chịu trách nhiệm chuẩn bị và nấu
				các món ăn trong cửa hàng. Đầu bếp có kiến thức và
				kỹ năng chuyên môn để đảm bảo chất lượng, hương vị
				và an toàn thực phẩm của các món ăn.
			</p>
			<p className='mt-10'>
				Sơ đồ hiện trạng tổ chức giúp hiển thị cấu trúc tổ
				chức và mối quan hệ giữa các thành viên. Nó thể hiện
				vai trò, trách nhiệm và liên kết giữa các vị trí
				trong tổ chức, tạo ra sự rõ ràng và hiệu quả trong
				hoạt động hàng ngày của cửa hàng thức ăn nhanh.
			</p>
		</div>
	)
}

export default OrganizationalChart
