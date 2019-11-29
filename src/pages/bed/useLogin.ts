

const prefix = (window as any).CONFIG.baseURL;
import { Hooks } from "@lianmed/utils";
const { useLogin } = Hooks
export default (cb) => {
    const sp = new window.URL(location.href).searchParams
    const password = sp.get('password')
    const username = sp.get('username')
    let data: { password: string, username: string }
    if (password && username) {
        data = { password, username }
    } else {
        data = (window as any).CONFIG && (window as any).CONFIG.account
    }
    useLogin(prefix, data, cb)
}






