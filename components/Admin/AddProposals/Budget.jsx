import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { GrAddCircle } from "react-icons/gr";
import { FcAddRow } from "react-icons/fc";

const dummyData = [
	{ id: 1, isBudgetHead: true, budgetHead: 'Budget Head - HR Cost' },
	{ id: 2, srNo: 1, particular: 'Program Manager', unit: '1', rate: '35000', duration: '10', total: '350000', remarks: '' },
	{ id: 3, srNo: 2, particular: 'Project Coordinator', unit: '1', rate: '15000', duration: '10', total: '150000', remarks: '' },
	{ id: 4, srNo: 3, particular: 'CSC Operator / Mobilizer', unit: '3', rate: '14000', duration: '10', total: '420000', remarks: '1 CSC operator and 2 Community Mobilisers' },
	{ id: 5, isBudgetHead: true, budgetHead: 'Budget Head - Program Cost' },
	{ id: 6, srNo: 4, particular: 'Financial Inclusion and Social Advocacy Logistic Support', unit: '30', rate: '2000', duration: '1', total: '60000', remarks: 'Organizing Camps and logistic support for Social Advocacy' },
	{ id: 7, srNo: 5, particular: 'Traininng and Capacity Building of Adhikaar Mitra and Community Volunteers', unit: '5', rate: '10000', duration: '1', total: '50000', remarks: 'Training and Capacity Building of Aadhikar Mitra' },
	{ id: 8, srNo: 6, particular: 'Innovative Media like Posters / StreetPlay / Social media', unit: '1', rate: '1', duration: '1', total: '60000', remarks: '' },
	{ id: 9, isBudgetHead: true, budgetHead: 'Budget Head - Center Setup Cost' },
	{ id: 10, srNo: 7, particular: 'Laptops', unit: '1', rate: '55000', duration: '1', total: '50000', remarks: '' }
];

const defaultRows = [
	{ id: 1, isBudgetHead: true, budgetHead: 'Budget Head' },
	{ id: 2, srNo: 1, particular: '', unit: '', rate: '', duration: '', total: '', remarks: '' },
];

export default function BudgetTable() {

	const [ rows, setRows ] = useState(dummyData);
	const [ adminPercent, setAdminPercent ] = useState(5);
	const fileInputRef = useRef(null);

	const recalculateSrNos = (data) => {
		let counter = 1;
		return data.map(row => {
			if (!row.isBudgetHead) {
				return { ...row, srNo: counter++ };
			}
			return row;
		});
	};

	const addRow = (index) => {
		const newRow = {
			id: Date.now(),
			particular: '',
			unit: '',
			rate: '',
			duration: '',
			total: '',
			remarks: ''
		};
		const updatedRows = [ ...rows ];
		updatedRows.splice(index + 1, 0, newRow);
		setRows(recalculateSrNos(updatedRows));
	};

	const addBudgetHead = (index) => {
		const newHead = {
			id: Date.now(),
			isBudgetHead: true,
			budgetHead: 'New Budget Head'
		};
		const updatedRows = [ ...rows ];
		updatedRows.splice(index + 1, 0, newHead);
		setRows(recalculateSrNos(updatedRows));
	};

	const removeRow = (index) => {
		const updatedRows = rows.filter((_, i) => i !== index);
		setRows(recalculateSrNos(updatedRows));
	};

	const handleChange = (id, field, value) => {
		const updatedRows = rows.map(row => {
			if (row.id === id) {
				const updatedRow = { ...row, [ field ]: value };
				if (!row.isBudgetHead && [ 'unit', 'rate', 'duration' ].includes(field)) {
					const unit = Number(updatedRow.unit);
					const rate = Number(updatedRow.rate);
					const duration = Number(updatedRow.duration);
					updatedRow.total = unit * rate * duration || '';
				}
				return updatedRow;
			}
			return row;
		});
		setRows(updatedRows);
	};

	const getBudgetSectionsWithTotals = () => {
		const sections = [];
		let currentSection = null;
		for (let i = 0; i < rows?.length; i++) {
			const row = rows[ i ];
			if (row.isBudgetHead) {
				if (currentSection) sections.push(currentSection);
				currentSection = { head: row, items: [], total: 0 };
			} else {
				const total = Number(row.total) || 0;
				currentSection.items.push(row);
				currentSection.total += total;
			}
		}
		if (currentSection) sections.push(currentSection);
		return sections;
	};

	const sections = getBudgetSectionsWithTotals();
	const totalSum = sections.reduce((acc, section) => acc + section.total, 0);
	const adminAmount = totalSum * (adminPercent / 100);
	const finalTotal = totalSum + adminAmount;

	const exportToJSON = () => {
		const jsonData = JSON.stringify(rows);
		const blob = new Blob([ jsonData ], { type: "application/json" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "budget-data.json";
		link.click();
	};

	const importFromJSON = (event) => {
		const file = event.target.files[ 0 ];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (e) => {
			const content = e.target.result;
			try {
				const importedRows = JSON.parse(content);
				setRows(recalculateSrNos(importedRows));
			} catch (err) {
				alert("Invalid JSON file");
			}
		};
		reader.readAsText(file);
	};

	const resetTable = () => {
		setRows(dummyData);
	};

	return (
		<div className="px-4 pt-4">
			{/* <h2 className="text-xl font-bold mb-4">Create Budget Table</h2> */}
			<table className="w-full border border-gray-300 text-sm">
				<thead>
					<tr className="bg-blue-200 text-black">
						<th className="border px-2 py-1">Sr.No.</th>
						<th className="border px-2 py-1">Particulars</th>
						<th className="border px-2 py-1 w-14">Unit</th>
						<th className="border px-2 py-1 w-28">Rate</th>
						<th className="border px-2 py-1 w-14">Duration</th>
						<th className="border px-2 py-1 w-32">Total</th>
						<th className="border px-2 py-1">Remarks</th>
						<th className="border px-2 py-1">Action</th>
					</tr>
				</thead>
				<tbody>
					{sections?.map((section, secIndex) => (
						<React.Fragment key={section.head.id}>
							<tr className="bg-yellow-300">
								<td colSpan={8} className="w-full font-semibold text-md border px-2 py-1 text-center min-w-max">
									<div className='flex items-center'>
										<input
											value={section.head.budgetHead}
											onChange={(e) => handleChange(section.head.id, 'budgetHead', e.target.value)}
											className="w-full text-center font-semibold bg-yellow-300 p-1 outline-1 outline-gray-500 float-left"
										/>
										<div onClick={() => removeRow(rows.indexOf(section.head))} className="ml-2 cursor-pointer" size="sm"><MdDelete size={20} color='red' />
										</div>
									</div>
								</td>
							</tr>
							{section?.items?.map((row, index) => (
								<tr key={row.id} className="border-t">
									<td className="border px-2 py-1 text-center">{row.srNo}</td>
									<td className="border px-2 py-1"><input value={row.particular} onChange={e => handleChange(row.id, 'particular', e.target.value)} className="w-full" /></td>
									<td className="border px-2 py-1"><input value={row.unit} onChange={e => handleChange(row.id, 'unit', e.target.value)} className="w-full" /></td>
									<td className="border px-2 py-1"><input value={row.rate} onChange={e => handleChange(row.id, 'rate', e.target.value)} className="w-full" /></td>
									<td className="border px-2 py-1"><input value={row.duration} onChange={e => handleChange(row.id, 'duration', e.target.value)} className="w-full" /></td>
									<td className="border px-2 py-1">{row.total}</td>
									<td className="border px-2 py-1"><input value={row.remarks} onChange={e => handleChange(row.id, 'remarks', e.target.value)} className="w-full" /></td>
									<td className="border px-2 py-1 flex items-center gap-2">
										<div onClick={() => addRow(rows.indexOf(row))} className='cursor-pointer'><GrAddCircle size={16} color='green' /></div>
										<div onClick={() => removeRow(rows.indexOf(row))} className='cursor-pointer'><RxCrossCircled size={16} color='red' /></div>
										<div onClick={() => addBudgetHead(rows.indexOf(row))} className='cursor-pointer'><FcAddRow size={24} /></div>
									</td>
								</tr>
							))}
							<tr className="font-bold border-t bg-orange-100">
								<td colSpan={4} className="px-2 py-1"></td>
								<td className="border px-2 py-1 text-center">{String.fromCharCode(65 + secIndex)}</td>
								<td className="border px-2 py-1">{section.total}</td>
								<td colSpan={2} className="px-2 py-1"></td>
							</tr>
						</React.Fragment>
					))}
					<tr className="font-bold border-t bg-yellow-100">
						<td colSpan={5} className="border px-2 py-1">Total A+B+C...</td>
						<td className="border px-2 py-1">{totalSum}</td>
						<td colSpan={2} className="border px-2 py-1"></td>
					</tr>
					<tr className="font-bold border-t bg-yellow-100">
						<td colSpan={5} className="border px-2 py-1">Admin @ {adminPercent}%</td>
						<td className="border px-2 py-1">{adminAmount}</td>
						<td colSpan={2} className="border px-2 py-1">
							<input type="number" value={adminPercent} onChange={(e) => setAdminPercent(Number(e.target.value))} className="w-16 text-right" /> %
						</td>
					</tr>
					<tr className="font-bold border-t bg-yellow-200">
						<td colSpan={5} className="border px-2 py-1">Final Total</td>
						<td className="border px-2 py-1">{finalTotal}</td>
						<td colSpan={2} className="border px-2 py-1"></td>
					</tr>
				</tbody>
			</table>
			<div className="mt-4 space-x-2">
				{/* <Button onClick={exportToJSON}>Export to JSON</Button> */}
				{/* <input type="file" ref={fileInputRef} accept=".json" onChange={importFromJSON} className="hidden" /> */}
				{/* <Button onClick={() => fileInputRef.current?.click()}>Import JSON</Button> */}
				{/* <Button onClick={resetTable} variant="destructive">Reset Table</Button> */}
			</div>
		</div>
	);
}
