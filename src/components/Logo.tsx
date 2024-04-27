function LogomarkPaths() {
  return (
    <g>
      <path d="M64.895,65.47c2.539-8.376,0.975-16.048-4.174-23.881c-5.531-8.44-15.586-11.561-22.23-18.633     c-6.437-6.856-4.475-19.001,0.874-22.648c-7.78,2.432-15.298,15.011-10.213,29.42c2.746,7.771,9.551,12.203,14.996,19.157     c4.813,6.136,8.78,12.543,8.575,20.29c-0.196,7.484-4.214,15.096-8.525,21.041c3.918-3.109,6.696-4.911,10.001-8.212     C58.084,78.11,62.464,73.492,64.895,65.47z" />
      <path d="M48.85,74.461c0.592-5.918-3.168-11.469-7.871-15.272c-3.269-2.643-7.855-4.546-9.526-8.692     c-1.676-4.165-0.115-9.097,1.837-11.771c-2.436,1.457-4.295,3.993-5.464,7.365c-2.764,7.941,1.57,14.029,8.379,20.598     c2.799,2.697,5.064,4.666,6.375,8.463c2.483,5.375-0.054,10.984-1.998,15.85C45.925,85.677,48.114,81.758,48.85,74.461z" />
    </g>
  )
}

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 91 91" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="flex items-center justify-center fill-primary text-primary">
      <svg aria-hidden="true" viewBox="0 0 91 91" {...props}>
        <LogomarkPaths />
      </svg>
      <div className="font-semibold text-lg">wisp</div>
    </div>
  )
}
