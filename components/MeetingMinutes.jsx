import React from "react"

function MeetingMinutes({ refTarget }) {
	return (
		<div
			ref={refTarget}
			className='container mx-auto= px-[250px] m-20 py-10 text-[18px] bg-white text-black'
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
						<li>Chào mừng tất cả các thành viên có mặt.</li>
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
	)
}

export default MeetingMinutes
