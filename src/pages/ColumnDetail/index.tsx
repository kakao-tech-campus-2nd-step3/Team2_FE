import Header from './Header';

const data = {
  id: '1',
  title: '칼럼의 제목이 여기에 들어갑니다',
  imgurl: 'https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg',
  createdAt: '2020-01-01',
  auth: '작성자',
  keyword: ['키워드1', '키워드2', '키워드3'],
  content: [
    {
      tag: 'h2',
      content: '제목입니다.',
    },
    {
      tag: 'p',
      content: '내용입니다.',
    },
    {
      tag: 'img',
      content: 'https://cdn.imweb.me/upload/S2017101359e025984d346/ad539f598e444.jpg',
    },
  ],
};
export default function ColumnDetail() {
  return (
    <>
      <Header
        title={data.title}
        imgurl={data.imgurl}
        createdAt={data.createdAt}
        auth={data.auth}
        keyword={data.keyword}
      />
    </>
  );
}
