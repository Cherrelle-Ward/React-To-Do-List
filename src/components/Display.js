import { motion } from "framer-motion";

const Display = ({ toDo, removeHandler }) => {
  return (
    <div>
      <ul>
        {toDo.map((x, i) => (
          <motion.li
            className="eachToDo"
            key={i}
            // animations
            // where its starting
            initial={{
              opacity: 0,
              x: -200,
              scale: 0.7,
            }}
            // what the animation is
            animate={{
              opacity: 1,
              x: 0,
              scale: 0.9,
            }}
            transition={{}}
            whileHover={{
              scale: 1,
              textEmphasis: "HighlightText",
            }}
          >
            {" "}
            {x}
            <button className="deleteBtn" onClick={() => removeHandler(i)}>
              -
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
