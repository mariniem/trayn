export function getExercises() {
  return fetch('/exercises').then(res => res.json())
}

export function patchExercise(exercise) {
  return fetch('/exercises/' + exercise._id, {
    method: 'PATCH',
    body: JSON.stringify(exercise),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

export function postPersonalWorkout(workout) {
  console.log(workout)

  return fetch('/workouts', {
    method: 'POST',
    body: JSON.stringify(workout),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

export function getWorkouts() {
  return fetch('/workouts').then(res => res.json())
}

/* export function postCard(card) {
  return fetch('/cards', {
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}
//übergeben ein Objekt wo nur die Änderungen drin sind _id
export function patchCard(card) {
  return fetch('/cards/' + card._id, {
    method: 'PATCH',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}
export function deleteCard(id) {
  return fetch('/cards/' + id, {
    method: 'DELETE',
  }).then(res => res.json())
} */
