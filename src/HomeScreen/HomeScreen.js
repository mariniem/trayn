import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Exercise from './Exercise'
import FilterToggleButton from './FilterToggleButton'
import filterIcon from '../Icons/FilterIcon.svg'
import FilterMenu from './FilterMenu'

export default function HomeScreen({ exercises, heartOnClick, searchInput }) {
  const [isOnlyLikedShown, setIsOnlyLikedShown] = useState(false)
  const [isFilterMenuShown, setIsFilterMenuShown] = useState(false)
  const [checkedCategories, setCheckedCategories] = useState([])

  let filteredExercises = exercises

  if (checkedCategories.length > 0)
    filteredExercises = filteredExercises.filter(exercise =>
      checkedCategories.includes(exercise.category)
    )

  if (isOnlyLikedShown)
    filteredExercises = filteredExercises.filter(
      exercise => exercise.isLiked === true
    )

  filteredExercises = filteredExercises.filter(item => {
    const title = item.title.toLowerCase()
    const query = searchInput.toLowerCase()
    return query === '' || title.includes(query)
  })

  return (
    <div>
      <FilterWrapper>
        <FilterMenuIcon
          onClick={() => setIsFilterMenuShown(!isFilterMenuShown)}
          src={filterIcon}
        ></FilterMenuIcon>
        <FilterToggleButton
          heartOnClick={() => setIsOnlyLikedShown(!isOnlyLikedShown)}
          isLiked={isOnlyLikedShown}
        ></FilterToggleButton>
        <FilterMenu
          exercises={exercises}
          isFilterMenuShown={isFilterMenuShown}
          onCloseClick={() => setIsFilterMenuShown(false)}
          checkedCategories={checkedCategories}
          onChange={handleOnCategoryFilterChange}
        ></FilterMenu>
      </FilterWrapper>

      <ExerciseGrid>
        {filteredExercises.map((exercise, id) => (
          <Exercise
            title={exercise.title}
            description={exercise.description}
            image={exercise.image}
            key={exercise.id}
            heartOnClick={() => heartOnClick(id)}
            isLiked={exercise.isLiked}
          />
        ))}
      </ExerciseGrid>
    </div>
  )

  function handleOnCategoryFilterChange(event) {
    const id = event.target.name
    const isChecked = event.target.checked

    if (isChecked === true) {
      setCheckedCategories([...checkedCategories, id])
    } else {
      const index = checkedCategories.findIndex(category => category === id)

      setCheckedCategories([
        ...checkedCategories.slice(0, index),
        ...checkedCategories.slice(index + 1),
      ])
    }
  }
}

const ExerciseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 25px;
  margin-bottom: 10px;
`

const FilterMenuIcon = styled.img`
  height: 22px;
  width: 22px;
`
const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 20px;
  margin-top: 3px;
  align-items: center;
`
