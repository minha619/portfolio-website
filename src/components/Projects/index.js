import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects(props) {
    const { currentCategory } = props;
    return (
        <section className="my-5" >
            <h2 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h2>
            <p>{currentCategory.description}</p>
            <ProjectList category={currentCategory.name} />
        </section>
    );
}

export default Projects;