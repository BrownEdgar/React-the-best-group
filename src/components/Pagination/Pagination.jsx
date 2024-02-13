import { useDispatch, useSelector } from "react-redux";
import './Pagination.scss'
import React from 'react'
import { getOptions, getTotal, updatePage } from "../../Feautures/Posts/PostsSlice";
import ReactPaginate from 'react-paginate';
export default function Pagination() {
	const total = useSelector(getTotal);
	const { page, perPage } = useSelector(getOptions);
	const dispatch = useDispatch();
	const handleClick = ({ selected }) => {
		dispatch(updatePage(selected + 1))
	}
	return (
	
			<ReactPaginate className="Pagination"
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handleClick}
				pageRangeDisplayed={1}
				pageCount={Math.ceil(total / perPage)}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
			/>
	

	)
}



