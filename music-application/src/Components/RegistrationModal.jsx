import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { FetchingData } from "../fetching";
import SignInModal from "./SignInModal";
const RegistrationModal = forwardRef(function RegistrationModal(props, ref) {
  const dispatch = useDispatch();
  const modal = useRef();
  const second_ref = useRef();
  const [text, setText] = useState();
  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    if (data.password != data.confirmPassword) {
      setText("Passwords do not match");
    } else {
      const newData = { ...data };
      delete newData.confirmPassword;
      const result = await FetchingData(newData);
      if (result === "This email is already registered on this website.") {
        setText("This email is already registered on this website.");
      } else {
        dispatch(authActions.changeAuth());
        modal.current.close();
      }
    }
  }
  function handleSignIn() {
    modal.current.close();
    second_ref.current.open();
  }
  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });
  return (
    <>
      <dialog onSubmit={handleSubmit} ref={modal} className="modal">
        <div className="suggestion">
          <p className="text">Do you already have an account?</p>
          <button className="modalButton sign" onClick={handleSignIn}>
            Sign in
          </button>
          <p className="text">Or</p>
        </div>
        <form method="dialog">
          <div className="form">
            <p>
              <input placeholder="Email" required name="email" type="email" />
            </p>
            <p>
              <input
                placeholder="Password"
                minLength={6}
                required
                name="password"
                type="password"
              />
            </p>
            <p>
              <input
                placeholder="Password"
                required
                name="confirmPassword"
                type="password"
              />
            </p>
            <button type="submit" className="modalButton">
              Register
            </button>
          </div>
          <p className="warningText">{text}</p>
        </form>
      </dialog>
      <SignInModal ref={second_ref} />
    </>
  );
});
export default RegistrationModal;
