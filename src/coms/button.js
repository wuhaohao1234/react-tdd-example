export const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} >{props.text}</button>
    </div>
  );
};
