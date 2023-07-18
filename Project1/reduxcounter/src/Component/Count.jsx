import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Slices/Counter/Counter";

export const Count = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
