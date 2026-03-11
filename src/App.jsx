import { useDispatch, useSelector } from "react-redux"
import { addtodo, deleteTodo, updateTodo, setTask, setEditMode } from "./Slices/todoSlice"

function App() {

  let data = useSelector((state)=> state.todo.value.arr
  )
  let task = useSelector((state) => state.todo.task)
  let isUpdate = useSelector((state) => state.todo.isUpdate)
  let updateIndex = useSelector((state) => state.todo.updateIndex)
  
  let dispatch = useDispatch()
  
  let handleAddTodo = ()=> {
    if (task.trim() === "") return
    dispatch(addtodo(task))
  }

  let handleDelete = (index)=> {
    dispatch(deleteTodo(index))
  }

  let handleEdit = (item,index) => {
    dispatch(setEditMode({item, index}))
  }

  let handleUpdate = ()=> {
    if (task.trim() === "") return
    dispatch(updateTodo({index: updateIndex,
      text: task
    }))
  }
  return (
    <>
      <input 
        type="text" 
        onChange={(e)=> dispatch(setTask(e.target.value))} 
        value={task} 
        placeholder="Add your task here..." 
      />
      {
        isUpdate ?
        <button onClick={handleUpdate}>Update</button>
        :
        <button onClick={handleAddTodo}>Submit</button>
      }

      <ol>
        {
          data.map((item, index)=> (
            <li key={index}>
              {item}
              <button onClick={()=> handleEdit(item,index)}>Edit</button>
              <button onClick={()=> handleDelete(index)}>Delete</button>
            </li>
          ))
        }
      </ol>
    </>
  )
}

export default App