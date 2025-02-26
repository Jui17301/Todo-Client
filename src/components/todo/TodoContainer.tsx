import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  const { data: todos, error, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading todos</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 h-full w-full rounded-lg space-y-3">
        
          {todos?.data?.map((item:any) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;