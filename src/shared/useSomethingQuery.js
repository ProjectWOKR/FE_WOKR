// import { GetAllTodo } from '../apis/apiGET';
// import Loading from '../components/global/Loading';
// import { allTodoListState } from '../store/store';
// import { useQuery } from '@tanstack/react-query';
// import { useRecoilState } from 'recoil';

// export const useSomethingQuery = () => {
//   const [todoList, setTodoList] = useRecoilState(allTodoListState);

//   const { data, isLoading, isError } = useQuery(['alltodoTest'], GetAllTodo, {
//     suspense: true,
//   });

//   if (isLoading) {
//     console.log(isLoading);
//     return <Loading />;
//   }

//   if (isError) {
//     return <div>에러</div>;
//   }

//   if (data) {
//     // console.log(data);
//     setTodoList(data);
//   }

//   return { todoList, isLoading, isError };
// };
