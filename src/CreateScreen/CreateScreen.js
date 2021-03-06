import styled from 'styled-components/macro'
import React, { useState } from 'react'
import HeartLikeSmall from '../Icons/HeartLikeSmall.svg'
import LikedExerciseItem from './LikedExerciseItem'
import HeadlineOne from '../GlobalComponents/HeadlineOne'
import HeadlineTwo from '../GlobalComponents/HeadlineTwo'
import SubmitButton from '../GlobalComponents/SubmitButton'
import InputField from '../GlobalComponents/InputField'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default function CreateScreen({ exercises, onSubmit }) {
  const [checkedExercises, setCheckedExercises] = useState([])

  return (
    <div>
      <CreateGrid onSubmit={handleSubmit}>
        <Label>
          <HeadlineOne>Name deines individuellen Workouts:</HeadlineOne>
          <InputField
            type="text"
            id="title"
            name="workoutName"
            placeholder="Name deines Workouts"
            required
          ></InputField>
        </Label>

        <Wrapper>
          <HeadlineTwo>Kategorie:</HeadlineTwo>
          <CheckboxWrapper>
            <div>
              <RadioButton
                type="radio"
                name="category"
                value="Kraft"
              ></RadioButton>
              <Label>Kraft</Label>
            </div>
            <div>
              <RadioButton
                type="radio"
                name="category"
                value="Cardio"
              ></RadioButton>
              <Label>Cardio</Label>
            </div>
            <div>
              <RadioButton
                type="radio"
                name="category"
                value="Yoga"
              ></RadioButton>
              <Label>Yoga</Label>
            </div>
          </CheckboxWrapper>
        </Wrapper>

        <LikedExercisesWrapper>
          <HeadlineTwo>
            Deine <img type="image" alt="heart" src={HeartLikeSmall}></img>{' '}
            Übungen:{' '}
          </HeadlineTwo>
          {exercises
            .filter(exercise => exercise.isLiked === true)
            .map(exercise => (
              <LikedExerciseItem
                id={exercise._id}
                title={exercise.title}
                image={exercise.image}
                key={exercise._id}
                isLiked={exercise.isLiked}
                onChange={handleOnExerciseCheckChange}
              />
            ))}
        </LikedExercisesWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <SubmitButton type="submit" value="Workout speichern"></SubmitButton>
        </div>
      </CreateGrid>
    </div>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    data['exercises'] = [...checkedExercises]

    if (data['category'] === undefined) {
      confirmAlert({
        message: 'Bitte eine Kategorie auswählen',
        buttons: [
          {
            label: 'Ok',
          },
        ],
      })
      return
    } else if (checkedExercises.length === 0) {
      confirmAlert({
        message: 'Bitte mindestens eine Übung auswählen',
        buttons: [
          {
            label: 'Ok',
          },
        ],
      })
      return
    }

    confirmAlert({
      message: 'Dein Workoutout wurde erfolgreich gespeichert',
      buttons: [
        {
          label: 'Ok',
        },
      ],
    })

    onSubmit(data)
    form.reset()
    setCheckedExercises([])
    form.title.focus()
  }

  function handleOnExerciseCheckChange(event) {
    const id = event.target.name
    const isChecked = event.target.checked

    if (isChecked === true) {
      setCheckedExercises([...checkedExercises, id])
    } else {
      const index = checkedExercises.findIndex(exercise => exercise === id)

      setCheckedExercises([
        ...checkedExercises.slice(0, index),
        ...checkedExercises.slice(index + 1),
      ])
    }
  }
}

const Wrapper = styled.div`
  margin-top: 39px;
`

const LikedExercisesWrapper = styled.div`
  display: grid;
  margin-top: 25px;
`

const CreateGrid = styled.form`
  overflow-y: scroll;
  margin-left: 20px;
`

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`

const RadioButton = styled.input`
  border: 1px solid #647d91;
  height: 18px;
  width: 18px;
`

const Label = styled.label`
  font-size: 14px;
  color: #647d91;
`
