import AppLayout from "../component/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div>Hello, Next!</div>
      {/* 이 감싸진 부분이 childeren으로 들어가게 되겠지? */}
    </AppLayout>
  );
};
export default Home;
