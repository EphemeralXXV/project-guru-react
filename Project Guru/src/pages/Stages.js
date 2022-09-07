import { Helmet } from 'react-helmet';

import Styles from './Stages.module.css';

const StagesPage = () => {
    return (
        <>            
            <Helmet>
                <meta charset = "UTF-8" />
                <meta name = "viewport" content = "width = device-width, initial-scale = 1.0" />
                <title>Stages</title>
                <script src = "@/common/util.js" />
                <script src = "@/common/stages.js" />
            </Helmet>
            <div id = {Styles.page}>    
                <div id = {Styles.stagesContainer} />
            </div>
        </>
    );
}

export default StagesPage;