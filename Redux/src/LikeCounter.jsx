import React, { useState } from 'react'
import {createStore} from 'redux'
import reducer from './Reducer'
import { decrementLike, incrementLike } from "./Action"

const store= createStore(reducer)

function LikeCounter() {

    const [Like , setLike] = useState(0)

    store.subscribe(()=> setLike(store.getState().Like))



  return (
    <div>
        <h1>Likes: {Like} </h1>
        <button onClick={()=>store.dispatch(incrementLike())}>Like</button>
        <button onClick={()=> store.dispatch(decrementLike())}>UnLike</button>
    </div>
  )
}

export default LikeCounter
