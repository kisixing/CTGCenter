
import { Hooks } from "@lianmed/utils";
import { compile } from '../../common/utils'
const prefix = (window as any).CONFIG.baseURL;

const { useLogin } = Hooks;

export default (cb) => {
    const sp = new window.URL(location.href).searchParams
    const password = sp.get('password')
    const username = sp.get('username')
    let data: { password: string, username: string } = { password: compile('admin'), username: compile('admin') }
    // if (password && username) {
    //     data = { password, username }
    // } else {
    //     data = (window as any).CONFIG && (window as any).CONFIG.account
    // }
    useLogin(prefix, data, cb, '/encryptedauthenticate');
}






