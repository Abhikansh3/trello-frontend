import { CenterKrlo } from "../Components/CenterKrlo"
import { InputCom } from "../Components/InputCom"
import { Button } from "../Components/Button"
export function AuthCredentials() {
  return <div style={{ minHeight: '100vh', display: "flex", alignItems: "center" }}>
    <div style={{ width: "100%" }} >

      <CenterKrlo>
        <div style={{ fontSize: 30, padding: 20 }}>
          Login in To Trello
        </div>
      </CenterKrlo>

      <CenterKrlo>
        Connect to  Trello with
      </CenterKrlo>

      <CenterKrlo>
        <InputCom type="text" placeholder="Enter your email" />
      </CenterKrlo>
      <CenterKrlo>
        <InputCom type="password" placeholder="Enter your password" />
      </CenterKrlo>
      <CenterKrlo>
        <Button leftIcon={<img style={{ height: 20 }} src="https://similarpng.com/_next/image?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2020%2F06%2FLogo-google-icon-PNG.png&w=3840&q=75  " />}>Sign Up</Button>
      </CenterKrlo>
    </div>
  </div >
}
