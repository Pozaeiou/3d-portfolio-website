// resizeUtils.ts — Handles window resize for the Three.js scene.
//
// When the window resizes, three things need to happen:
//   1. Renderer size must match the new canvas dimensions.
//   2. Camera aspect ratio must be updated and projection matrix recalculated.
//   3. GSAP ScrollTrigger timelines must be re-created because they use pixel
//      measurements (start/end positions) that are now stale.

import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;

  // Measure the new canvas container size
  let canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;

  // Update renderer resolution
  renderer.setSize(width, height);

  // Update camera aspect so nothing looks stretched
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Kill all scroll triggers (they hold stale pixel positions)
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill();
  });

  // Re-create GSAP timelines with recalculated pixel values
  setCharTimeline(character, camera);
  setAllTimeline();
}
