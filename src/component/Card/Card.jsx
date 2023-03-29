import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleCard from '../SingleCard/SingleCard';
import './Card.css'

const Card = () => {
  const [data, setData]= useState([])
  const [showAll, setShowAll]= useState(false)

const handleClick = ()=> {
setShowAll(true);
}

  useEffect(()=>{
const handleLoadData = async ()=>{
const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
const data = await res.json()
setData(data.data.tools)

};
handleLoadData()

  }, [])
  const [uniqueId, setUniqueId]= useState(null)
  const [modalData, setModalData]= useState({})
 
  useEffect(()=>{
    fetch(` https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
    .then(res=>res.json())
    .then(data => setModalData(data.data))

  },[uniqueId])


  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lag: px-10 gap-4 my-6'>
    {
        data.slice(0, showAll ? 12: 6).map(card => <SingleCard card ={card} key = {card.id} setUniqueId= {setUniqueId} ></SingleCard> )
      }
    </div>
  {
    !showAll  && <span onClick ={ handleClick}>
      <Button >SEE MORE</Button>
      </span>
  }
    <Modal modalData={modalData}  ></Modal>
    </>
  );
};

export default Card;