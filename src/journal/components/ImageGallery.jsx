import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={images.length} rowHeight={200}>
      {images.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}`}
            srcSet={`${item}`}
            alt='Imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
