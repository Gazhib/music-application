import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
const RegistrationModal = forwardRef(function RegistrationModal(props, ref) {
  const dispatch = useDispatch();
  const modal = useRef();
  const [text, setText] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    if (data.password != data.confirmPassword) {
      setText("Passwords do not match");
    } else {
      dispatch(authActions.changeAuth())
      modal.current.close();
    }
  }
  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });
  return (
    <dialog onSubmit={handleSubmit} ref={modal} className="modal">
      <form method="dialog">
        <div className="form">
          <p>
            <label>E-mail:</label>
            <input required name="email" type="email" />
          </p>
          <p>
            <label>Password:</label>
            <input minLength={6} required name="password" type="password" />
          </p>
          <p>
            <label>Confirm Password:</label>
            <input required name="confirmPassword" type="password" />
          </p>
        </div>
        <p className="warningText">{text}</p>
        <button type="submit" className="modalButton">
          Register
        </button>
      </form>
    </dialog>
  );
});
export default RegistrationModal;
