import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BreedList() {
  let [breedList, setBreedList] = useState({});

  function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(result => setBreedList(result.message));
  }

  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <div className="card-box row">
      {Object.keys(breedList).map((breed, index) => {
        return (
          <div class="card m-2 col-md-2">
            <img
              class="card-img-top"
              src={`https://source.unsplash.com/500x300/?${breed}/?dog`}
              alt="Card aascap"
            />
            <div class="card-body">
              <h5 class="card-title">{breed}</h5>

              <Link to={`/breed/${breed}`}>Fler bilder av {breed}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
