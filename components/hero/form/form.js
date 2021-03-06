import classes from "./form.module.scss";
import Input from "../../../ui/input/input";
import EmailIcon from "../../../icons/form/email";
import PassIcon from "../../../icons/form/password";
import Toggle from "../../../ui/toggle-btn/toggle";
import { Button } from "../../../ui/button/button";

function Form() {
  return (
    <div className={classes.form}>
      <h1>
        Sign in To
        <span>
          Drone<em>.</em>
        </span>
      </h1>
      <div className={classes.notMember}>
        <p>Not a member?</p>
        <h3 className="tg">Sign up</h3>
      </div>
      <form>
        <Input
          type="text"
          label="Username or Phone"
          Icon={EmailIcon}
          placeholder="Username or Phone"
        />
        <Input
          type="password"
          label="Password"
          Icon={PassIcon}
          placeholder="6 + Characters, 1 Capital letter"
        />
      </form>
      <div className="flex jc">
        <Toggle />
        <a href="#">Forget Password ?</a>
      </div>
      <Button type="submit">Login</Button>
    </div>
  );
}

export default Form;
