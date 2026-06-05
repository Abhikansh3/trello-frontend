
import { AuthBanner } from "../Components/AuthBanner"
import { AuthCredentials } from "../Components/AuthCredentails"

export function Auth() {
  return <div style={{ display: "flex" }}>
    <div style={{ flex: 4 }}>
      <AuthBanner />
    </div>

    <div style={{ flex: 6 }}>
      <AuthCredentials />
    </div>
  </div>
}
