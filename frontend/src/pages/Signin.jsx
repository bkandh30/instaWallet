import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {

    return <div className="bg-slate-300 min-h-screen flex items-center justify-center px-4">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-100 max-w-md text-center p-6 h-max px-4">
        <Heading label={"Sign In"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="bhavya.kandhari.eng@gmail.com" label={"Email"} />
        <InputBox placeholder="HellYeah88" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign In"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}