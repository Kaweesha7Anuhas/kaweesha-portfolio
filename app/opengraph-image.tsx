import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Kaweesha Anuhas - Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0A0A0F, #0F172A)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(to right, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 40, fontWeight: 'bold' }}>
            KA
          </div>
        </div>
        <h1 style={{ fontSize: 70, fontWeight: 'bold', color: 'white', margin: 0, textAlign: 'center' }}>
          Kaweesha Anuhas
        </h1>
        <p style={{ fontSize: 30, color: '#94a3b8', marginTop: 20, textAlign: 'center' }}>
          Software Engineering Intern
        </p>
      </div>
    ),
    { ...size }
  )
}