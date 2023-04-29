import { GetKR } from '../../apis/apiGET';
import filter from '../../assets/filter1.png';
import { krDataAtom } from '../../store/store';
import { okrCheckSelector } from '../../store/store';
import { StKrFilter } from '../../styles/tododetail.styled';
import { useDropDown } from '../global/globaldropdown/dropdown';
import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useRecoilState } from 'recoil';

const KrFilter = () => {
  const krDropRef = useRef(null);
  //드롭다운이 보여지는 상태관리
  const [krDropOn, setKrDropon] = useDropDown(krDropRef, false);
  // const [krDropOn, setKrDropon] = useState(false);

  // const [data, setData] = useState([]);
  // console.log('data :', data);

  // const [krData, setKrData] = useRecoilState(krDataAtom);
  // console.log('krData :', krData);
  // const [krData, setKrData] = useState([]);

  const [checkedList, setCheckedList] = useState([]);
  const [checkInfo, setCheckInfo] = useState([]);
  const [forData, setForData] = useState([]);

  console.log('***** forData :', forData);

  console.log('checkedList :', checkedList);
  console.log('checkInfo :', checkInfo);

  const { data: getKrData } = useQuery(['KR'], GetKR, {
    refetchOnWindowFocus: false,
    onSuccess: response => {
      // setCheckedList(response);
      setCheckInfo(response);
      console.log(response);
      // const
      // const filter = response.map(el => ({ ...el, check: false }));
      // const check = response.map(el => ({
      //   id: el.keyResultId,
      //   data: el.keyResult,
      // }));
      // const check = response.map(el => el.keyResult);
      // setCheckInfo(response);
      // setCheckedList(check);
      //
      // console.log(response.indexOf(array));
    },
  });

  const thisDelete = item => {
    // console.log(item.keyResultId);
    setCheckedList(checkedList.filter(el => el !== item));
    setForData(forData.filter(el => el !== item.keyResultId));
    // setCheckInfo(checkInfo.filter(el => el !== item));
  };

  const removeAll = () => {
    setCheckedList([]);
    setForData([]);
  };

  // filterContainer를 누르면 Drop이 보이는 함수
  const krDroponHandler = () => {
    setKrDropon(!krDropOn);
  };

  const onCheckedElement = (checked, item) => {
    if (checked) {
      // console.log(JSON.parse(item));
      // console.log('checked이빈다');
      setCheckedList([...checkedList, JSON.parse(item)]);
      setForData([...forData, JSON.parse(item).keyResultId]);
      // setCheckInfo([...checkInfo, item]);
    } else if (!checked) {
      // console.log(JSON.parse(item));
      setCheckedList(checkedList.filter(el => el !== JSON.parse(item)));

      // console.log(checkedList);

      setForData(forData.filter(el => el !== JSON.parse(item).keyResultId));
      // setCheckInfo(checkInfo.filter(el => el !== item));
    }
  };

  // useEffect(()=> {
  // })

  return (
    <StKrFilter ref={krDropRef}>
      <div className='filterContainer' onClick={krDroponHandler}>
        <img src={filter} alt='' />
        <div className='result'>
          <span>KR : 전체</span>
        </div>
      </div>

      {krDropOn && (
        <div className='krDrop'>
          <div onClick={krDroponHandler}>X</div>
          <div className='inputBox'>
            <div className='hashFlex'>
              {checkedList?.map((data, index) => (
                <div
                  id={data.keyResultId}
                  className='hash'
                  key={index}
                  style={{
                    backgroundColor: `${data.color}`,
                    border: `2px solid ${data.color}`,
                  }}>
                  <span>KR{data.krNumber}</span>
                  <GrClose onClick={() => thisDelete(data)} />
                </div>
              ))}
            </div>
            <AiFillCloseCircle className='closeBtn' onClick={removeAll} />
          </div>
          <ul>
            {/* <input type='checkbox' checked={true} />
            전체 */}
            {checkInfo.map(data => (
              <li key={data.keyResultId}>
                <input
                  // id={data.keyResultId}
                  type='checkbox'
                  onChange={e =>
                    onCheckedElement(e.target.checked, e.target.value)
                  }
                  value={JSON.stringify(data)}
                  checked={forData.includes(data.keyResultId) ? true : false}
                  // checked={true}
                />
                <span className='kr' style={{ color: `${data.color}` }}>
                  KR{data.krNumber}
                </span>
                :<span className='desc'>{data.keyResult}</span>
              </li>
            ))}
            {/* <li>
              <input type='checkbox' onChange={onCheckHandler} checked />
              <span className='kr' style={{ color: 'rgb(155,155,155)' }}>
                None
              </span>
            </li> */}
          </ul>
        </div>
      )}
    </StKrFilter>
  );
};

export default KrFilter;
