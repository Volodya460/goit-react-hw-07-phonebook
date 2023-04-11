import { MagnifyingGlass } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div>
      <MagnifyingGlass
        height="80"
        width="80"
        radius="500"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{ justifyContent: 'center', margin: '200px 0' }}
        visible={true}
      />
    </div>
  );
}
