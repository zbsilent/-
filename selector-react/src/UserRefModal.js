import React, { useState } from "react";
import { Modal, Input, Table } from "antd";
const { Search } = Input;

const UserRefModal = (param) => {
	console.log(param)
	// const columns = [
	// 	{
	// 		title: "Name",
	// 		dataIndex: "name",
	// 		filters: [
	// 			{
	// 				text: "Joe",
	// 				value: "Joe",
	// 			},
	// 			{
	// 				text: "Jim",
	// 				value: "Jim",
	// 			},
	// 			{
	// 				text: "Submenu",
	// 				value: "Submenu",
	// 				children: [
	// 					{
	// 						text: "Green",
	// 						value: "Green",
	// 					},
	// 					{
	// 						text: "Black",
	// 						value: "Black",
	// 					},
	// 				],
	// 			},
	// 		],
	// 		// specify the condition of filtering result
	// 		// here is that finding the name started with `value`
	// 		onFilter: (value, record) => record.name.indexOf(value) === 0,
	// 		sorter: (a, b) => a.name.length - b.name.length,
	// 		sortDirections: ["descend"],
	// 	},
	// 	{
	// 		title: "Age",
	// 		dataIndex: "age",
	// 		defaultSortOrder: "descend",
	// 		sorter: (a, b) => a.age - b.age,
	// 	},
	// 	{
	// 		title: "Address",
	// 		dataIndex: "address",
	// 		filters: [
	// 			{
	// 				text: "London",
	// 				value: "London",
	// 			},
	// 			{
	// 				text: "New York",
	// 				value: "New York",
	// 			},
	// 		],
	// 		filterMultiple: false,
	// 		onFilter: (value, record) => record.address.indexOf(value) === 0,
	// 		sorter: (a, b) => a.address.length - b.address.length,
	// 		sortDirections: ["descend", "ascend"],
	// 	},
	// ];

	// const data = [
	// 	{
	// 		key: "1",
	// 		name: "John Brown",
	// 		age: 32,
	// 		address: "New York No. 1 Lake Park",
	// 	},
	// 	{
	// 		key: "2",
	// 		name: "Jim Green",
	// 		age: 42,
	// 		address: "London No. 1 Lake Park",
	// 	},
	// 	{
	// 		key: "3",
	// 		name: "Joe Black",
	// 		age: 32,
	// 		address: "Sidney No. 1 Lake Park",
	// 	},
	// 	{
	// 		key: "4",
	// 		name: "Jim Red",
	// 		age: 32,
	// 		address: "London No. 2 Lake Park",
	// 	},
	// 	{
	// 		key: "5",
	// 		name: "Jim Red",
	// 		age: 32,
	// 		address: "London No. 2 Lake Park",
	// 	},
	// 	{
	// 		key: "6",
	// 		name: "Jim Red",
	// 		age: 32,
	// 		address: "London No. 2 Lake Park",
	// 	},
	// 	{
	// 		key: "7",
	// 		name: "Jim Red",
	// 		age: 32,
	// 		address: "London No. 2 Lake Park",
	// 	},
	// 	{
	// 		key: "8",
	// 		name: "Jim Red",
	// 		age: 32,
	// 		address: "London No. 2 Lake Park",
	// 	},
	// ];

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};
	const handleOk = (e) => {
		console.log(e);
		setIsModalVisible(false);
	};

	const handleCancel = (e) => {
		setIsModalVisible(false);
	};

	const onChange = (pagination, filters, sorter, extra) => {
		console.log(pagination, filters, sorter, extra);
	};

	return (
		<div>
			<div>
				<Search
					style={{ width: "250px" }}
					placeholder="input search text"
					onSearch={showModal}
					enterButton
				/>
				<br />
			</div>
			<Modal
				title="Basic Modal"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Table
					columns={param.var1}
					dataSource={param.var2}
					onChange={onChange}
					pagination={{ defaultPageSize: 4 }}
				/> 
			</Modal>
		</div>
	);
};
export default UserRefModal;
