import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux"
import { getOptions, getTotal, updatePage } from "../../features/posts/postsSlice"
import './Pagination.scss'

export default function Pagination() {
  const total = useSelector(getTotal)
  const { page, perPage } = useSelector(getOptions)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(updatePage(e.selected + 1))
  }

  return (
    <ReactPaginate
      className='navigation'
      breakLabel="..."
      nextLabel=">"
      onPageChange={handleClick}
      pageRangeDisplayed={1}
      pageCount={Math.ceil(total / perPage)}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}
