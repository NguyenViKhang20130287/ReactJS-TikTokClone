
import { useState } from 'react';
import Images from '../../assets/images'

function Image({ src, alt, failBack: customFallBack = Images.defaultUser, ...props }) {

    const [failBack, setFailBack] = useState('')

    const handleError = () =>{
        setFailBack(Images.defaultUser)
    }

    return (<img alt={alt} src={failBack || src} onError={handleError} {...props}/>);
}

export default Image;