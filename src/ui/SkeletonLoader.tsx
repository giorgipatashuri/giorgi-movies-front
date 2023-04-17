import Skeleton, { SkeletonProps, } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonLoader:React.FC<SkeletonProps> = ({className,...res}) => {
  return (
    <Skeleton {...res} baseColor="#1F2125"
    highlightColor="#292A2E"
    className={`rounded-lg ${className}`}
    />
  )
}
export default SkeletonLoader