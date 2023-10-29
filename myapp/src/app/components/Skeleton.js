import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function MySkeleton() {
  return (
    <div className="bg-gray-200 p-4 rounded shadow-lg">
      <SkeletonTheme color="#eee" highlightColor="#f5f5f5">
        <div className="">
          <Skeleton height={10} width="80%" />
          <Skeleton height={10} width="70%" />
          <Skeleton height={10} width="90%" />
          <Skeleton height={10} width="60%" />
          <Skeleton height={10} width="80%" />
          <Skeleton height={10} width="50%" />
        </div>
      </SkeletonTheme>
    </div>
  );
}
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// export default function MySkeleton() {
//   return (
//     <>
//     <div className="bg-gray-200 p-4 rounded shadow-lg">
//       <SkeletonTheme color="#eee" highlightColor="#f5f5f5">
//         <div className="space-y-4">
//           <div className="h-16 w-16 mx-auto relative rounded-full overflow-hidden">
//             <Skeleton height="100%" width="100%" style={{ position: 'absolute' }} />
//           </div>
//           <Skeleton height={10} width="80%" />
//           <Skeleton height={10} width="70%" />
//           <Skeleton height={10} width="90%" />
//           <Skeleton height={10} width="60%" />
//           <Skeleton height={10} width="80%" />
//           <Skeleton height={10} width="50%" />
//         </div>
//       </SkeletonTheme>
//     </div>
    
//     </>
//   );
// }
