import React from 'react'

import { EmptyImageHolder } from './EmptyImageHolder';

  
export const EmptyImageHolders = ({children,...props}) => {
  const count=12;
  let card = [];
 // eslint-disable-next-line no-undef
 


return <div style= {{ width:"360px"}} >{ [...Array(count)].map((e, i) =><EmptyImageHolder key={i} />)}</div>

}
