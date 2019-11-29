import ReactDOM from 'react-dom';
import React, { useEffect, useState, useRef } from "react";
import { Ctg_Item } from "@lianmed/pages";
import useLogin from "../bed/useLogin";

import { WsService, ICache, EWsEvents } from "@lianmed/lmg/lib/services/WsService";
const baseURL = (window as any).CONFIG.baseURL;

const App = (props) => {
    const host = '192.168.123.30' || new URL((window as any).CONFIG.baseURL).host
    const [wsData, setWsData] = useState<any>({})
    const [config, setConfig] = useState({
        bedname: '',
        age: null,
        bedNO: '',
        startTime: '',
        GP: '',
        name: ''
    })

    useEffect(() => {
        const url = new window.URL(location.href)
        const sp = url.searchParams
        if (!sp.get('ws_url') || !sp.get('unitId')) {
            sp.append('ws_url', `${host}:8084`)
            sp.append('unitId', '37-4')

            sp.append('name', null)
            sp.append('bedname', null)
            sp.append('age', null)
            sp.append('bedNO', null)
            sp.append('startTime', null)
            sp.append('GP', null)
            location.replace(url.href)
        }
        const data = {
            // ws_url: sp.get('ws_url'),
            // area_devices: sp.get('area_devices'),
            name: sp.get('name'),
            bedname: sp.get('bedname'),
            age: sp.get('age'),
            bedNO: sp.get('bedNO'),
            startTime: sp.get('startTime'),
            GP: sp.get('GP'),
        }
        setConfig(data)
        const unitId = sp.get('unitId')
        const index = unitId.indexOf('-')
        const ws = new WsService({ ws_url: sp.get('ws_url'), area_devices: unitId.slice(0, index < 0 ? undefined : index) }).on(EWsEvents.explode, data => setWsData(data.get(unitId) || {}))
        try {
            ws.connect().catch(err => {
                console.log(err)
            }).then((data: ICache) => {
                setWsData(data.get(unitId) || {})
            })
        } catch (e) {
            console.log(e)
        }
    }, [])

    useLogin(() => console.log('login'))

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Ctg_Item {...config} data={wsData} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
