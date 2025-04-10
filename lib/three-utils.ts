import * as THREE from "three"

// Helper function to create a wavy slackline geometry
export function createWavySlacklineGeometry(length = 10, segments = 20) {
  const geometry = new THREE.BoxGeometry(length, 0.05, 0.2, segments, 1, 1)

  // Apply wave deformation
  const positions = geometry.attributes.position.array
  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i]
    positions[i + 1] += Math.sin(x * 0.5) * 0.2
  }

  return geometry
}

// Helper function to create a slackline material
export function createSlacklineMaterial(color = "#10b981") {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.3,
    metalness: 0.2,
  })
}

// Helper function to animate the slackline based on mouse position
export function animateSlackline(
  mesh: THREE.Mesh,
  mouseX: number,
  mouseY: number,
  clock: THREE.Clock,
  amplitude = 0.1,
) {
  if (!mesh) return

  // Rotate based on mouse position
  mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, mouseY * 0.2, 0.1)
  mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, mouseX * 0.2, 0.1)

  // Add gentle wave motion
  mesh.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1

  // Update geometry for wave effect
  if (mesh.geometry.attributes.position) {
    const positions = mesh.geometry.attributes.position.array
    const time = clock.getElapsedTime()

    for (let i = 0; i < positions.length; i += 3) {
      const x = mesh.geometry.attributes.position.getX(i / 3)
      const initialY = mesh.geometry.attributes.position.getY(i / 3)

      // Apply wave deformation
      const wave = Math.sin(x * 2 + time * 2) * amplitude
      positions[i + 1] = initialY + wave
    }

    mesh.geometry.attributes.position.needsUpdate = true
  }
}
