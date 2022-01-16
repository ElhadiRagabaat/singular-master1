import React,{useState} from 'react'
import images from '../../assets/cardsGame/exports'
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
// import uuid from 'uuid'

// const dataFromBackend = [
//     {
//         [uuid()]:{
//             name:"gggg",
//             items:[images]
//         }
//     }
// ]
export const CardBeautifull = () => {
    const [column , setColumn] = useState(images)

    console.log(images)
    return (
       <DragDropContext onDragEnd={result=>console.log(result)}>


       </DragDropContext>
    )
}
