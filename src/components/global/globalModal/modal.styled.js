import styled from 'styled-components';

export const ModalBackground = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 20;
`;

export const ModalBox = styled.div`
  position: fixed;
  /* height: 470px; */
  width: 71.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* box-shadow: var(--box-shadow); */
  z-index: 21;
  text-align: center;
  padding: 20px 30px;
  border: var(--main-border);
  padding: 1.3rem;
  form {
    position: relative;
    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.3rem;
      img {
        position: absolute;
        top: 1.6rem;
        right: 3.4rem;
        cursor: pointer;
      }
    }
  }
`;

export const OKRBox = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 7px;
  padding: 1.3rem 0;

  .object {
  }
  & .itemBox {
    width: 100%;
    height: 4rem;
    padding: 0.9rem 1.4rem;
    display: flex;
    align-items: center;
    /* background-color: pink; */
    input {
      width: 100%;
      height: 4rem;
      /* border: var(--main-border); */
      border: 1.5px solid rgba(232, 232, 232, 1);
      border-radius: 7px;
      :hover {
        border: 1.5px solid var(--main-color);
      }
      ::placeholder {
        color: var(--placeholder-color);
      }
    }
    img {
      margin-right: 1.3rem;
    }
  }

  .kr {
    margin: 0.9rem 0;
    justify-content: space-between;
    /* background-color: pink; */
    .plus {
      margin-left: 0.8rem;
    }
  }

  .date {
    /* background-color: skyblue; */
    .dateBox {
      width: 44rem;
      display: flex;
      justify-content: start;
      margin-right: 2.1rem;
      background-color: pink;
      .start {
        background-color: yellow;
        display: flex;
        .rmdp-container {
          border-radius: 7px 0 0 7px !important;
        }
        .triangle {
          border-top: 20px solid transparent;
          border-left: 42px solid pink;
          border-bottom: 20px solid transparent;
          /* background-color: skyblue; */
        }
      }
    }
    .colorBox {
      display: flex;
    }
  }
`;

// export const TodoModalBox = styled.div`
//   position: fixed;
//   /* height: 470px; */
//   width: 71.5rem;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: #fff;
//   border-radius: 15px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   /* box-shadow: var(--box-shadow); */
//   z-index: 21;
//   text-align: center;
//   padding: 20px 30px;
//   border: var(--main-border);
//   form {
//   }
// `;

export const NotHave = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  font-size: 2rem;
  font-weight: 500;
  .btnFlex {
    ${props => props.theme.row_center}
    gap: 1rem;
    width: 17rem;
    height: 4.7rem;
    border-radius: 4px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    padding: 0 1rem;
    color: #000;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  & :hover {
    border-color: var(--main-color);
  }
`;
