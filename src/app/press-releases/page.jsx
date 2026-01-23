// src/app/press-releases/page.jsx
import { getPressReleases } from '../../lib/blogUtils'; 
import PressReleaseClient from '../../components/PressReleaseClient'; 

export default function PressReleasePage() {
  // Server par data fetch kiya
  const releases = getPressReleases(); 

  // Client component ko data bhej diya
  return <PressReleaseClient releases={releases} />; 
}