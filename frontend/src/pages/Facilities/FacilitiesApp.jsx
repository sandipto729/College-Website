import { useState } from 'react'
import Facilities from './components/Facilities';

function FacilitiesApp() {
  return (
    <>
      <Facilities/>
    </>
  );
}

function fetchAndGenerateLabCards() {
  fetch('sampleOutput.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      generateLabCards(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Function to generate lab cards
function generateLabCards(data) {
  const container = document.getElementById('labCards');

  data.labs.forEach(lab => {
    // Create a card div
    const card = document.createElement('div');
    card.classList.add('card');

    // Lab Name (Title)
    const labName = document.createElement('h2');
    labName.textContent = lab.name;

    // Lab Description
    const labDescription = document.createElement('p');
    labDescription.textContent = lab.description;

    // Equipment list (if exists)
    if (lab.equipments) {
      const equipmentTitle = document.createElement('h3');
      equipmentTitle.textContent = "Equipments";

      const equipmentList = document.createElement('ul');
      lab.equipments.forEach(equipment => {
        const listItem = document.createElement('li');
        listItem.textContent = equipment;
        equipmentList.appendChild(listItem);
      });

      card.appendChild(equipmentTitle);
      card.appendChild(equipmentList);
    }

    // Append name and description to the card
    card.appendChild(labName);
    card.appendChild(labDescription);

    // Append the card to the container
    container.appendChild(card);
  });
}

// Call the function to fetch JSON and generate the cards
fetchAndGenerateLabCards();

export default FacilitiesApp;