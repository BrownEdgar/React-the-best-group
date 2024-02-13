import { getOptions, getTotal, updatePage } from '../../features/photos/photosSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import './Pagination.scss'


export default function Pagination() {
  const total = useSelector(getTotal)
  const dispatch = useDispatch()
  const { page, perpage } = useSelector(getOptions)

  const handleClick = ({ selected }) => {
    console.log(selected)
    dispatch(updatePage(selected + 1))
  }

  return (
    <div className='Pagination'>
      <ReactPaginate
        className="Pagination__list"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(total / perpage)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
