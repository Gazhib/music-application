import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { FetchingData } from "../fetching";
const SignInModal = forwardRef(function SignInModal(props, ref) {
  const dispatch = useDispatch();
  const modal = useRef();
  const [text, setText] = useState();
  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    const result = await FetchingData(data);
    if (result === "Email or password is not correct") {
      setText("Email or password is not correct");
    } else {
      dispatch(authActions.changeAuth());
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
    <>
      <dialog onSubmit={handleSubmit} ref={modal} className="modal">
        <form method="dialog">
          <div className="suggestion">
            <p className="LogIn">
              Log In
            </p>
          </div>
          <div className="form signin">
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
            <button type="submit" className="modalButton">
              Sign in
            </button>
          </div>
          <p className="warningText">{text}</p>
        </form>
      </dialog>
    </>
  );
});
export default SignInModal;
