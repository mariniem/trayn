import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Exercise from './Exercise'
import Header from './Header'
import Footer from './Footer'
import Grid from './Grid'
import FilterToggleButton from './FilterToggleButton'

//import exerciseData from './exercises.json'

export default function Home({ exercises, heartOnClick }) {
  const [isOnlyLikedShown, setIsOnlyLikedShown] = useState(false)

  return (
    <div>
      <Grid>
        <Header />
        <div>
          <FilterToggleButton
            heartOnClick={() => setIsOnlyLikedShown(!isOnlyLikedShown)}
            isLiked={isOnlyLikedShown}
          ></FilterToggleButton>
          <ExerciseGrid>
            {isOnlyLikedShown
              ? exercises
                  .filter(exercise => exercise.isLiked === true)
                  .map((exercise, id) => (
                    <Exercise
                      title={exercise.title}
                      description={exercise.description}
                      image={exercise.image}
                      key={exercise.id}
                      heartOnClick={() => heartOnClick(id)}
                      isLiked={exercise.isLiked}
                    />
                  ))
              : exercises.map((exercise, id) => (
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
        <Footer />
      </Grid>
    </div>
  )
}

const ExerciseGrid = styled.div`
  display: Grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 40px;
  row-gap: 30px;
  margin-right: 10px;
  overflow-y: scroll;
`
