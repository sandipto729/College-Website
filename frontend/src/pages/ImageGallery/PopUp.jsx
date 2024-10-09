import { useEffect, useState } from 'react';
import styles from './PopUpstyle.module.css'

function PopUp({ image, OpenPopUp, ClosePopUp }) {
    const [dimension, setDimention] = useState({ width: 0, height: 0 });
    const image_deatils = image
    useEffect(() => {
        const img = new Image();
        img.src = image_deatils;
        img.onload = function () {
            var width = img.naturalWidth;
            var height = img.naturalHeight;
            setDimention({ width: width, height: height });
        };
    }, [])
    const aspectRatio = dimension.width / dimension.height
    let maxWidth = 100;  // Set max width to 80% of the window width
    // setWindowDimention({maxWidth:maxWidth , maxHeight :maxHeight})
    let newWidth = 100;
    let newHeight = 100;

    if (aspectRatio <= 1.5 && aspectRatio >= 1) {
        newWidth = 50;
        newHeight = (newWidth / (aspectRatio)) + 20;  // Maintain aspect ratio
    } else if (aspectRatio > 1.5) {
        newWidth = 60;
        newHeight = (newWidth / (aspectRatio)) + 15;
    } else if (aspectRatio > 0 && aspectRatio < 1) {
        newHeight = 60;
        newWidth = (newHeight * (aspectRatio)) - 10;
    }
    console.log(newHeight, newWidth)
    return (
        <div className={styles.imageWrapper} onClick={ClosePopUp}>
            <img
                src={image}
                onClick={OpenPopUp}
                style={{
                    width: `${newWidth}%`,
                    height: `${newHeight}%`,
                }}
                className={styles.imageContainer}
            />

        </div>
    )


}

export default PopUp