import { useRef, useEffect } from 'react';
import { Box } from "@mui/material";

const slideStyles = {
    width: '500px',
    height: '300px',
    flexShrink: 0,
}

const Carousel = () => {
    const carouselRef = useRef(null);
    
    let isLeftDirection = false;

    const prevClicked = () => {
        const carousel = carouselRef.current;
        
        if(!isLeftDirection){
            carousel.appendChild(carousel.firstElementChild);
            isLeftDirection = true;
        }

        carousel.style.justifyContent = 'flex-end';
        carousel.style.transform = 'translate(100%)';
    }

    const nextClicked = () => {
        const carousel = carouselRef.current;

        if(isLeftDirection){
            carousel.prepend(carousel.lastElementChild);
            carousel.style.justifyContent = 'flex-start';
            isLeftDirection = false;
        }  

        carousel.style.justifyContent = 'flex-start';
        carousel.style.transform = 'translate(-100%)';
    }

    useEffect(() => {
        const carousel = carouselRef.current;

        carousel.addEventListener('transitionend', () => {
            if(isLeftDirection){
                carousel.prepend(carousel.lastElementChild);
            }else{
                carousel.appendChild(carousel.firstElementChild);
            }
            carousel.style.transition = 'none';
            carousel.style.transform = 'translate(0)';
            setTimeout(() => carousel.style.transition = 'all .3s');
        });

        return () => carousel.removeEventListener('transitionend', null);

    }, []);

    return(
        <>
            <button style={{ width: '50px' }} onClick={() => prevClicked()}>prev</button>
            <button style={{ width: '50px' }} onClick={() => nextClicked()}>next</button>
            <Box sx={{ border: '3px solid yellow', overflow: 'hidden', marginTop: '10px' }}>
                <Box
                    ref={carouselRef}
                    sx={{
                        display: 'flex',
                        width: '500px',
                        height: '300px',
                        transition: 'all .3s',
                        // overflow: 'hidden',
                    }}
                >
                    <Box sx={{...slideStyles, backgroundColor: 'brown'}}>1</Box>
                    <Box sx={{...slideStyles, backgroundColor: 'gray'}}>2</Box>
                    <Box sx={{...slideStyles, backgroundColor: 'orange'}}>3</Box>
                    <Box sx={{...slideStyles, backgroundColor: 'purple'}}>4</Box>
                    <Box sx={{...slideStyles, backgroundColor: 'green'}}>5</Box>
                </Box>
            </Box>
        </>
    )
};

export default Carousel;