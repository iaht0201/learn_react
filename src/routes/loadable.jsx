import LoadingComponent from '@/components/loading';
import { Suspense } from 'react';


// ==============================|| LOADABLE - LAZY LOADING ||============================== //

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingComponent />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;