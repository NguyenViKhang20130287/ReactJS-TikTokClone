
import { useState } from 'react';
import images from '../../assets/images'

function Image({ src, alt, failBack: customFallBack = images.defaultUser, ...props }) {

    const [failBack, setFailBack] = useState('')

    const handleError = () =>{
        setFailBack(images.defaultUser)
    }

    return (<img alt={alt} src={failBack || src} onError={handleError} {...props}/>);
}

export default Image;