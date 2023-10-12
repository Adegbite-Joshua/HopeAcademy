import React, {useState, useEffect} from 'react'
import axios from 'axios';
import DisplayToast from '../../../CustomHooks/DisplayToast';
import { useSelector, useDispatch } from 'react-redux';
import { deletenoticesAndNews, } from '../../../redux/generalInformation';
import PopUp from '../../PopUp';
import Form from './Form';




const News = ({data}) => {

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (index = null) => {
    setIsOpen(true);
    index ? setviewingIndex(index) : ''
  };

  const closePopup = () => {
    setIsOpen(false);
  };


  const deleteNews = async () => {
    let endpoint = 'http://localhost:7777/admin/delete_notice_and_news'
    if(!data._id){
      DisplayToast('error', 'Cannot Delete Newly Added News Or Notice');
      return;
    }
    let deleted = await axios.post(endpoint, {id: data._id})
    if (deleted.status == 200) {
      dispatch(deletenoticesAndNews(data._id))
      let [show] = DisplayToast('success', 'News Deleted Successfully')
    } else {
      let [show] = DisplayToast('error', 'An Error Occur, Please Try Again')
    }
  }

  return (
    <>
      <div className='w-full border-2 my-2'>
        <div className='p-5 bg-red-300 shadow-lg'>
          <h3>{data.head}</h3>
        </div>
        <p className='p-1'>{data.body}</p>
        <div className='flex gap-2 p-1 justify-end'>
          <button onClick={openPopup}><i className='bg-green-400 p-2 rounded-md fa fa-edit'></i></button>
          <button onClick={deleteNews}><i className='bg-red-400 p-2 rounded-md fa fa-trash'></i></button>
        </div>
      </div>
      <PopUp isOpen={isOpen} onClose={closePopup}>
        <Form type='edit' data={data} closePopup={closePopup} />
      </PopUp>
    </>
  )
}

export default News