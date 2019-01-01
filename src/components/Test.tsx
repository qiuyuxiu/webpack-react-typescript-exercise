import * as React from 'react' 
import { Button } from 'antd'
import 'antd/lib/button/style/index.less'

import * as styles from './index.scss'
 
class Test extends React.Component {
    render() {
        return(
            <div className={styles.test}>
                <Button type="primary">123</Button>
            </div>
        )
    }
}


export default Test