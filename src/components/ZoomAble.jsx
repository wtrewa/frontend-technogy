import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';

const ZoomableImage = ({ src, alt }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
   console.log(src)
  const handleZoom = (event) => {
    // Adjust the zoom level based on the scroll direction
    setZoomLevel((prevZoom) => prevZoom + (event.deltaY > 0 ? -0.1 : 0.1));
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      width="100%"
      height="100%"
      onWheel={handleZoom}
    >
      <Image
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        objectFit="contain"
        transform={`scale(${zoomLevel})`}
        transition="transform 0.2s ease-in-out"
      />
    </Box>
  );
};

export default ZoomableImage;
