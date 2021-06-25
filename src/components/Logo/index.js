import React from 'react'
import { Svg, Link } from './styles'

export const Logo = ({ props, path = '#' }) => (
  <Link to={path}>
    <Svg
      width='527.31999512'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='50 50 380 120'
      style={{
        background: '0% 0%',
        darkreaderInlineBgcolor: 'rgba(220, 218, 215, 0)',
        darkreaderInlineBgimage: 'none'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='editing-rainbow-gradient'
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop
            offset={0}
            stopColor='#4a34d7'
            style={{
              darkreaderInlineStopcolor: '#4e3cc0'
            }}
          />
          <stop
            offset={0.17}
            stopColor='#b32172'
            style={{
              darkreaderInlineStopcolor: '#953e6e'
            }}
          />
          <stop
            offset={0.34}
            stopColor='#cd3358'
            style={{
              darkreaderInlineStopcolor: '#b73d5a'
            }}
          />
          <stop
            offset={0.51}
            stopColor='#eb4b32'
            style={{
              darkreaderInlineStopcolor: '#c95341'
            }}
          />
          <stop
            offset={0.68}
            stopColor='#ee5a2e'
            style={{
              darkreaderInlineStopcolor: '#c95f40'
            }}
          />
          <stop
            offset={0.85}
            stopColor='#f38f34'
            style={{
              darkreaderInlineStopcolor: '#cd8544'
            }}
          />
          <stop
            offset={1}
            stopColor='#f8cf66'
            style={{
              darkreaderInlineStopcolor: '#e0bb5a'
            }}
          />
        </linearGradient>
        <filter
          id='editing-rainbow'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feMorphology
            operator='dilate'
            radius='1,0'
            in='SourceGraphic'
            result='dilate'
          />
          <feColorMatrix
            in='dilate'
            result='color'
            values='0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0'
          />
          <feOffset result='offset' />
          <feGaussianBlur stdDeviation={3} />
          <feOffset dy={3} />
          <feColorMatrix
            result='blur'
            values='0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0'
          />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='offset' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <g filter='url(#editing-rainbow)'>
        <path
          d='M47.88-29.11q0 8.82-8.57 18.65Q32.89-2.9 25.45.5q-4.16 2.02-6.93 2.02-2.77 0-4.53-1.26-3.03-2.02-3.03-5.92 0-3.91 2.14-8.95-27.84 39.82-27.84 47.63 0 .76.31 1.32.32.57-.19.7l-.37-.13q-4.04-3.53-4.04-8.32 0-10.96 22.43-44.73-6.05 6.05-6.05 4.29 0-1.01 1.39-2.27 6.17-5.29 13.36-14.49 7.18-9.2 9.26-11.28t5.1-2.08q3.02 0 6.05 3.15-2.52 3.03-9.45 12.48 6.05-5.67 12.22-7.94 3.02-1.13 5.42-1.13 2.39 0 4.79 1.57 2.39 1.58 2.39 5.73zM12.85-5.67Q12.85 0 17.26 0q2.52 0 7.63-2.52 5.1-2.52 9.95-8.25 4.85-5.74 6.87-10.34 2.01-4.59 2.01-7.49 0-5.17-4.03-5.17-2.65 0-8.19 2.65-5.54 2.64-10.33 8.31-8.32 9.58-8.32 17.14zm63.51-13.99q6.67-3.65 6.67-7.43t-4.53-3.78q-2.14 0-4.54 1.13-5.29 2.4-10.2 8.32-6.05 7.31-6.05 13.61 0 2.39 1.32 4.47 1.32 2.08 4.73 2.08 5.92 0 14.99-6.24 9.07-6.23 15.62-12.53 1.52-1.52 1.52-.13 0 .88-.76 1.51-4.66 4.29-6.24 5.73-1.57 1.45-6.23 5.17-4.67 3.72-7.56 5.23-8.95 4.66-15.19 4.66-6.23 0-9.82-2.83-3.6-2.84-3.6-7.88 0-10.71 9.58-18.46t20.03-7.75q7.06 0 9.45 3.03 1.01 1.51 1.01 3.21t-1.13 3.72q-2.27 3.9-8.51 6.86-6.23 2.97-11.78 2.97-2.14 0-2.33-.38-.19-.38.32-.57.5-.19 1.38-.19 5.04 0 11.85-3.53zm36.28-23.56q2.78-4.16 4.48-6.61 1.7-2.46 2.71-3.59 1-1.14 4.53-1.96 3.53-.82 6.81-.82 3.27 0 3.27.7 0 .69-5.42 5.86-5.41 5.16-12.6 13.73 8.57 1.39 11.22 5.42 1.01 1.76.31 2.27-.69.5-1.57-.38-2.65-2.65-8.44-2.65-2.52 0-5.67.51-10.21 13.1-12.86 21.42-.88 2.39-.88 4.03 0 4.41 3.66 4.41 3.9 0 10.96-5.42 9.2-6.93 16-13.73 1.26-1.39 1.64-.63.38.75-.63 1.63-10.84 11.34-18.21 16.7-7.37 5.35-13.54 5.35-8.45 0-8.45-8.94 0-4.29 2.4-10.21l-2.27 2.14q-1.01 1.01-1.45.57-.44-.44-.44-.82 0-.38 1.01-1.26 9.2-8.06 12.6-12.22-2.4.88-3.22.13-.81-.76-1.13-2.02-.31-1.26 1.26-3.09 1.58-1.82 4.66-2.64 3.09-.82 4.6-.95 1.89-2.77 4.66-6.93zm.63 77.74q-10.96 0-18.2-4.78-7.25-4.79-7.25-13.61 0-.51.38-.51.88 0 1.13 1.01 1.14 6.43 6.18 11.09 2.27 2.14 6.24 3.53 3.96 1.38 6.61 1.38h3.4q13.99-.75 24.45-14.11 4.91-6.3 8.69-12.53 3.78-6.24 8.19-13.93 4.41-7.68 7.43-11.72-3.9 4.41-9.82 10.08-5.93 5.67-10.21 8.19-4.28 2.52-7.94 2.52-3.65 0-6.24-2.2-2.58-2.21-2.58-5.48 0-9.33 8.32-18.27 6.3-6.68 15.62-9.45 4.16-1.39 8.13-1.39 3.97 0 7.69 2.21 3.71 2.2 4.72 5.23 2.02 0 4.41 1.7t2.39 2.45q0 .76-1 1.26-4.04 2.02-12.73 17.64-8.44 15-19.78 26.84-5.67 5.92-13.17 9.39-7.5 3.46-15.06 3.46zM132.8-5.04q0 2.9 3.03 2.9 2.39 0 5.92-2.65 8.57-5.67 17.89-16.5 4.29-4.92 4.29-7.69 0-1.01-.7-1.83-.69-.82-2.96-.82t-7.24 2.65q-4.98 2.65-10.21 8-5.23 5.36-7.62 9.58-2.4 4.22-2.4 6.36zm78.63-20.16q-5.55 6.43-9.01 11.78-3.47 5.36-3.47 7.56 0 2.21 2.59 2.21 2.58 0 10.58-5.17t14.81-11.59q.63-.63 1.13-.51.5.13.5.63 0 .51-.5 1.14Q211.81-4.28 203.24-.5q-3.78 1.51-5.42 1.51-6.05 0-8.25-2.02-2.21-2.01-2.21-4.41 0-4.79 1.89-7.31 6.18-8.69 9.83-14.74 1.13-1.76-.44-2.46-1.58-.69-3.91-.69t-2.45-.12q-8.45 11.34-16.76 17.89-1.01.88-1.14 0 0-1.01 1.39-2.4 8.82-7.56 14.49-16-1.13-.75-1.13-2.08 0-1.32.19-3.21.18-1.89 1.95-5.04 3.02-5.29 6.3-5.29 2.77 0 2.77 3.02 0 4.16-3.91 9.07-1.89 2.27-3.52 3.28 4.66-1.51 13.6-1.51 4.41 0 6.3 3.27.26.51.26 1.52 0 1-1.64 3.02zm57.08 5.8q-1.39 1.63-2.84 3.52-1.45 1.89-3.65 5.17-2.21 3.28-2.21 5.54 0 2.27 1.95 2.27 1.96 0 6.37-2.39 8.82-5.04 19.53-15.12 1.26-1.26 1.64-.38v.5q0 .38-.51.89-21.67 20.41-31.5 20.41-2.9 0-4.85-1.96-1.95-1.95-1.95-4.59 0-2.65 2.27-8.07-5.67 7.06-12.16 10.9-6.49 3.84-10.15 3.84-3.65 0-6.23-2.2-2.59-2.21-2.59-5.48 0-9.33 8.32-18.27 6.3-6.68 15.62-9.45 4.16-1.39 8.13-1.39 3.97 0 7.69 2.21 3.71 2.2 4.72 5.23 3.78 0 5.42 2.77.25.38.25 1.26t-.94 2.01q-.95 1.14-2.33 2.78zm-9.2-12.48q-2.65 0-6.3 1.64-6.43 2.77-12.22 9.58-9.2 10.83-9.2 15.87 0 2.65 2.14 2.65 1.76 0 5.86-2.27 4.09-2.27 10.77-8.95.38-.37 2.9-2.77 2.52-2.39 4.28-4.16 5.93-6.17 5.93-8.88 0-2.71-4.16-2.71zm82.4 3.78q0 4.66-7.94 15.37-4.78 6.43-4.78 7.94 0 1.51 1.57 1.51 1.58 0 4.47-1.89 7.19-4.91 14.37-11.84 1.01-1.01 1.38-.5.38.5.38.75t-2.77 2.9q-2.77 2.65-6.11 5.54-3.34 2.9-8.38 5.99-5.04 3.09-8.32 3.09-6.8 0-6.8-6.05 0-2.14.76-5.04 1.63-4.92 14.23-19.03 1.64-1.76 1.64-2.77t-2.52-1.01q-2.52 0-7.94 4.41-1.89 1.51-4.66 4.48-2.77 2.96-6.49 9.51-3.71 6.55-5.48 11.59-.75 2.27-3.02 2.27-.51 0-1.26-.13-2.4-.63-1.89-2.27 9.83-17.51 11.72-21.92 1.89-4.41 1.89-6.3 0-1.89-1.52-1.89-6.67 0-19.15 21.8-4.53 7.05-7.31 10.08-2.77 3.02-5.04 3.02h-.5q-3.28 0-6.43-2.64.76-1.14 3.66-4.92 6.42-7.81 11.21-15.12-5.42 5.42-9.2 8.44-1.26 1.01-1.45.13-.18-.88.57-1.58.76-.69 2.52-2.26 1.77-1.58 2.33-2.08.57-.51 2.14-1.96 1.58-1.44 2.34-2.33 3.52-4.15 5.16-7.05.63-1.51.57-2.96-.06-1.45-.63-1.89-.57-.44-.44-1.07 0-1.01 1.01-1.01.5 0 1.13.25 3.91 1.76 3.91 7.69 0 3.52-1.39 7.68 2.52-3.9 5.42-7.68 5.16-6.68 10.33-6.68 3.53 0 3.53 4.03 0 3.78-5.29 13.48 5.29-6.8 8.19-9.95 6.67-6.93 12.85-6.93 6.55 0 7.43 5.67v1.13z'
          fill='url(#editing-rainbow-gradient)'
          transform='translate(76.0085392 121.12000275)'
        />
      </g>
      <style />
      <style media='screen' />
    </Svg>
  </Link>
)
