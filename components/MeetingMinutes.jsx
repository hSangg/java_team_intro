import React from "react"

function MeetingMinutes({ refTarget }) {
	return (
		<div className='container mx-auto=  text-[18px] m-20'>
			<div
				ref={refTarget}
				className=' bg-white px-[250px]  py-10 text-black'
			>
				<h2 className='text-2xl ml-20 font-bold mb-4 py-10 text-center'>
					Biên bản họp nhóm
				</h2>
				<p className='mb-2'>Thứ bảy mỗi tuần</p>
				<p className='mb-2'>Thời gian: 19h</p>
				<p className='mb-4'>Địa điểm: Google meet</p>

				<h3 className='text-lg font-bold mb-2'>
					Danh sách thành viên có mặt:
				</h3>
				<ul className='list-disc ml-6 mb-4'>
					<li>Cao Hoài Sang</li>
					<li>Thi Thành Công</li>
					<li>Trần Xuân Bằng</li>
					{/* Thêm danh sách tất cả thành viên có mặt */}
				</ul>

				<h3 className='text-lg font-bold mb-2'>
					Agenda họp:
				</h3>
				<ol className='list-decimal ml-6 mb-4'>
					<li>
						<h4 className='font-bold mb-2'>Mở đầu:</h4>
						<ul className='list-disc ml-6'>
							<li>
								Chào mừng tất cả các thành viên có mặt.
							</li>
							<li>
								Xác nhận danh sách tham dự và điểm danh.
							</li>
						</ul>
					</li>

					<li>
						<h4 className='font-bold mb-2'>
							Báo cáo tiến độ công việc:
						</h4>
						<ul className='list-disc ml-6'>
							<li>
								Trình bày tình hình tiến độ công việc trong
								tuần trước của mình.
							</li>
							<li>
								Thảo luận về các vấn đề liên quan và đưa ra
								giải pháp
							</li>
						</ul>
					</li>
				</ol>
			</div>

			<div className='ml-[150px] mt-5'>
				<h1 className='text-3xl font-bold mb-2'>
					Nội quy nhóm
				</h1>
				<ul className='list-decimal ml-3 mt-5'>
					<li>
						Mỗi thành viên nhóm đều phải đảm bảo đúng
						deadline, nếu trễ deadline 1 giờ tương đương với
						<b> 10.000 vnd</b>
					</li>

					<li>
						Các thành viên trong nhóm đều phải tôn trọng
						nhau, lắng nghe ý kiến của nhau
					</li>

					<li>
						Làm công việc được giao nghiêm chỉnh (tránh làm
						sơ sài, qua loa) có trách nhiệm với công việc
						chung của nhóm.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MeetingMinutes
