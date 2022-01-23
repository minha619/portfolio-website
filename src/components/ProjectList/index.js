import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Note Taker',
      category: 'projects',
      description:
        'An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
      website: 'https://guarded-castle-88690.herokuapp.com/'
    },
    {
      name: 'Budget Tracker',
      category: 'projects',
      description:
        'A budget tracker application that allows offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a internet connection.',
      website: 'https://ancient-tor-39841.herokuapp.com/'
    },
    {
      name: 'Space RPG',
      category: 'projects',
      description:
        'Based on the internet sensation “Farm RPG” - SPACE-RPG allows you to go on the text based adventure of a lifetime.. The user will be able to add expenses and deposits to their budget with or without a internet connection.',
      website: 'https://quiet-mountain-05103.herokuapp.com/dashboard'
    }
  ]);


  const currentPhotos = photos.filter(photo => photo.category === category);

  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }


  return (
    <div>
      {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
