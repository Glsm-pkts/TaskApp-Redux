import ThemeColors from "../../theme/color";
import { ADDTASK, DELETETASK, UPDATETASK } from "../types/tasksTypes";

const initialState = {
    tasks: [],

   
    taskStatus: [
        {
        id: 1,
        status: "In Progress",
        value: 0,
        color: ThemeColors.orange
        
    },
    {
        id: 2,
        status: "In Review",
        value: 0,
        color: ThemeColors.Lightgreen
    },
    {
        id: 3,
        status: "On Hold",
        value: 0,
        color: ThemeColors.yellow
    },
    {
        id: 4,
        status: "Completed",
        value: 0,
        color: ThemeColors.gray
    }
]
}

const tasksReducer = (state = initialState, action) => {
switch (action.type) {
    //ekleme
    case ADDTASK:
        return{
            ...state,
            tasks: [...state.tasks, action.payload]  
        };
       //silme
        case DELETETASK:
            return{
               ...state,
                tasks: state.tasks.filter(task => task.id!== action.payload)
            };
            //güncelleme
            case UPDATETASK:
             return{
          ...state,
           tasks: state.tasks.map(task => task.id === action.payload.id? action.payload : task)
             };

    

            
    default:
        return state;
    }
}

export default tasksReducer;